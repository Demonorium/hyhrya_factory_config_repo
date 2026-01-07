import requests
import os
import shutil
import zipfile
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("force", "-f",  help="always update", default=False, required=False)
parser.add_argument("skip", "-s",  help="skip install", default=False, required=False)
args = parser.parse_args()

with open('modpack_version.txt', mode='r', encoding='utf-8') as f:
    version = int(f.readline())

print('Текущая версия:', version)

print('Проверка на актуальность')
try:
    version_rq = requests.get('https://raw.githubusercontent.com/Demonorium/hyhrya_factory_config_repo/refs/heads/master/modpack_version.txt')
    if version_rq.status_code != 200:
        print('Критическая ошибка при получении информации о версии, код:', version_rq.status_code)
        print('Текст', version_rq.text)
        if not args.force:
            input('Нажмите enter чтобы завершить...')
        exit(-1)
except requests.exceptions.RequestException as e:
    print('Критическая ошибка при получении информации о версии:', e)
    
    if not args.force:
        input('Нажмите enter чтобы завершить...')
    exit(-1)


upsteam_version = int(version_rq.text)
if version >= upsteam_version:
    print('Версия репозитория:', upsteam_version)
    print('Текущая версия актуальна, обновление не требуется')
    if not args.force and not args.skip:
        if os.path.exists('settings.py') and not os.path.exists("modpack_settings.json"):
            print('Похоже это первый запуск с момента установки системы настройки сборки')
            text = '_'
            while text != 'y' and text != 'n' and len(text) > 0:
                text = input('Желаете настроить сборку? (Y/n) ')
                text = text.lower().strip()

            if text == 'n':
                exit(0)

            print('Это первый запуск настроек. Чтобы снова открыть эти настройки запустите файл settings.py')
            os.system('python settings.py')
        else:
            input('Нажмите enter чтобы завершить...')
    exit(0)


text = '_'
if args.force:
    text = 'y'

while text != 'y' and text != 'n' and len(text) > 0:
    text = input('Обнаружено обновление ' + str(upsteam_version) + '! Желаете обновиться? (Y/n) ')
    text = text.lower().strip()

if text == 'n':
    print('Обновление отменено.')
    exit(0)

print('Запуск процедуры обновления')

print('Очистка директории обновления')
if os.path.exists('./update'):
    shutil.rmtree('./update')
os.mkdir('./update')

print('Загрузка...')

try:
    response = requests.get('https://github.com/Demonorium/hyhrya_factory_config_repo/archive/refs/heads/master.zip', stream=True)
    with open('./update/downloaded.zip', 'wb') as out_file:
        shutil.copyfileobj(response.raw, out_file)
    print("Успешная загрузка файла обновления")
except requests.exceptions.RequestException as e:
    print("Ошибка при скачивании файла:", e)
    if not args.force:
        input('Нажмите enter чтобы завершить...')
    exit(-1)

print('Распаковка...')
with zipfile.ZipFile('./update/downloaded.zip') as f:
    f.extractall('./update/')

target_path = './update/hyhrya_factory_config_repo-master/'
print('Обновление установщика...')
if os.path.exists('./install_update.py'):
    os.remove('install_update.py')
shutil.copy(target_path + 'install_update.py', 'install_update.py')
print('Подготовка завершена, начало обновления...')

if not args.skip:
    os.system('python install_update.py')