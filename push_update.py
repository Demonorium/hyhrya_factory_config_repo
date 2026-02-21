from git import Repo
import urllib.error as error
import urllib.request
import json
import os
from datetime import datetime, timedelta

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
            'username': "Скрипт публикации"
        }

        req = urllib.request.Request(hook_url, data=json.dumps(json_data).encode('utf-8'), method='POST')
        req.add_header("Content-Type", "application/json")
        with urllib.request.urlopen(req) as response:
            response_data = response.read().decode('utf-8')
            print("Hook sent:", hook, response_data)

    except Exception as error:
        print('Error in hook request:', error)

with open('modpack_version.txt', mode='r', encoding='utf-8') as f:
    version = int(f.readline())

if os.path.exists('changelogs/' + str(version) + '.md'):
    text = [
        "Опубликована новая версия: " + str(version+1) + "\n\n"
    ]
    with open('changelogs/' + str(version) + '.md', mode='r', encoding='utf-8') as f:
        text.extend(f.readlines())

    # Получаем текущее время
    current_time = datetime.now()

    # Добавляем 5 минут
    new_time = current_time + timedelta(minutes=5)
    text.append('\n\n*Обновление станет доступно для установки после ' + new_time.strftime("%d.%m.%Y %H:%M") + '*')
    send_message_to_hook('install_notify_channel', ''.join(text))
    
version += 1
with open('modpack_version.txt', mode='w', encoding='utf-8') as f:
    f.write(str(version))

print('new version:', version)

repo = Repo('./')
print('repo initiated:', repo.common_dir)
print('index...')


repo.git.add(".")
repo.git.add("-u")

print('commit...')
repo.index.commit('version: ' + str(version))
print('remote search')
origin = repo.remote(name='origin')
print('remote found')
print('push...')
origin.push()
print('success')