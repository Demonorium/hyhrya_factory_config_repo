import os
import shutil
import argparse
import json
import urllib.request
import urllib.parse



hooks = {}
if os.path.exists('webhooks.json'):
    with open('webhooks.json', 'r', encoding='utf-8') as f:
        hooks = json.load(f)
   
def send_message_to_hook(hook, message):
    if hook not in hooks:
        print('no hook:', hook)
        return
    
    hook_url = hooks[hook]
    try:
        json_data = {
            'text': message,
            'username': "Скрипт установки"
        }

        req = urllib.request.Request(hook_url, data=json.dumps(json_data).encode('utf-8'), method='POST')
        req.add_header("Content-Type", "application/json")
        with urllib.request.urlopen(req) as response:
            response_data = response.read().decode('utf-8')
            print("Hook sent:", hook, response_data)

    except Exception as error:
        print('Error in hook request:', error)

try:
    parser = argparse.ArgumentParser()
    parser.add_argument("--skip", "-s",  help="skip check", default=False, required=False)
    args = parser.parse_args()

    print('installer started...')
    source_path = './update/hyhrya_factory_config_repo-master/'
    if not os.path.exists(source_path):
        print('no install packet detected...')
        exit(0)

    print('check_scripts...')
    old_version = 55
    if os.path.exists('old_version.txt'):
        with open('old_version.txt', mode='r', encoding='utf-8') as f:
            old_version = int(f.readline())

    def rm_if_ex_copy(p):
        if os.path.exists(p):
            print('rm ', p)
            os.remove(p)
        shutil.copy(source_path + p, p)
        print('install ', source_path + p, 'to', p)
        
    def rm_rf_if_ex_copy(p, ignore_parameter=None):
        if os.path.exists(p):
            print('rm ', p)
            shutil.rmtree(p)
        shutil.copytree(source_path + p, p)
        print('install ', source_path + p, 'to', p)

    rm_if_ex_copy('install_lib.py')
    import install_lib
    rm_rf_if_ex_copy('update_scripts')

    scripts_to_run = []
    for script_name in os.listdir('update_scripts'):
        script_version = int(script_name.replace('.py', ''))
        if script_version >= old_version:
            print('Обнаружен подходящий скрипт обновления', script_name)
            scripts_to_run.append((
                script_version,
                './update_scripts/' + script_name
            ))

    scripts_to_run.sort(key=lambda x: x[0])
    for (index, script) in scripts_to_run:
        print('Исполнение ', script)
        with open(script, 'r', encoding='utf-8') as f:
            exec(''.join(f.readlines()), {"install_lib": install_lib, **globals()})

    print('Импорт конфигурации')
    def configuration_filter(src: str, names: list[str]):
        ingored = []
        if 'presencefootsteps' in src:
            return names
        if 'jei' in src:
            return names    
        if 'inventoryprofiles' in src:
            return names
        
        for name in names:
            if 'client' in name:
                ingored.append(name)
            elif 'xaero' in name:
                ingored.append(name)
            elif 'autohud' in name:
                ingored.append(name)
            elif 'skinlayers' in name:
                ingored.append(name)
            elif 'oculus' in name:
                ingored.append(name)

        return ingored

    shutil.copytree(source_path + 'config', 'config', ignore=configuration_filter, dirs_exist_ok=True)

    rm_if_ex_copy('modpack_version.txt')
    rm_if_ex_copy('push_update.py')
    rm_if_ex_copy('check_update.py')
    rm_if_ex_copy('settings.py')

    rm_rf_if_ex_copy('kubejs')
    rm_rf_if_ex_copy('keybinding presets')
    rm_rf_if_ex_copy('defaultconfigs')
    rm_rf_if_ex_copy('configureddefaults')


    if os.path.exists('world'):
        print('server folder found')
        print('server config installation')

        if os.path.exists('world/serverconfig'):
            shutil.rmtree('world/serverconfig')
        shutil.copytree('defaultconfigs', 'world/serverconfig')
        shutil.copytree(source_path + 'server_configs', 'config', dirs_exist_ok=True)
        print('server installation success...')

    print('update completed')
    print('cleaning...')
    shutil.rmtree('./update')
    print('success')

    version = "error"
    if os.path.exists('modpack_version.txt'):
        with open('modpack_version.txt', mode='r', encoding='utf-8') as f:
            version = int(f.readline())

    send_message_to_hook('install_notify_channel', 'Успешная установка сборки на сервер! Обновление с версии ' + str(old_version) + " на версию " + str(version) + " :hyhrya:")

    print('update check...')

    if not args.skip:
        os.system('python check_update.py')
except Exception as error:
    print(error)
    send_message_to_hook('install_notify_channel', 'Критическая ошибка установки серверной сборки ' + str(error) + " :hyhrya:")

    
