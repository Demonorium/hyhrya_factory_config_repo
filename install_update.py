import os
import shutil

print('installer started...')
source_path = './update/hyhrya_factory_config_repo-master/'
if not os.path.exists(source_path):
    print('no install packet detected...')
    exit(0)

def rm_if_ex_copy(p):
    if os.path.exists(p):
        print('rm ', p)
        os.remove(p)
    shutil.copy(source_path + p, p)
    print('install ', source_path + p, 'to', p)
    
def rm_rf_if_ex_copy(p):
    if os.path.exists(p):
        print('rm ', p)
        shutil.rmtree(p)
    shutil.copytree(source_path + p, p)
    print('install ', source_path + p, 'to', p)

rm_if_ex_copy('modpack_version.txt')
rm_if_ex_copy('push_update.py')
rm_if_ex_copy('check_update.py')

rm_rf_if_ex_copy('config')
rm_rf_if_ex_copy('kubejs')
rm_rf_if_ex_copy('keybinding presets')
rm_rf_if_ex_copy('minemenu')
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