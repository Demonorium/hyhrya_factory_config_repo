import requests
import os
import shutil
import zipfile
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("-f", "--force", help="always update", default=False, required=False)
parser.add_argument("-s", "--skip", help="skip install", default=False, required=False)
args = parser.parse_args()

with open('modpack_version.txt', mode='r', encoding='utf-8') as f:
    version = int(f.readline())

print('Текущая версия:', version)

print('Проверка на актуальность')
version_rq = requests.get('https://raw.githubusercontent.com/Demonorium/hyhrya_factory_config_repo/refs/heads/master/modpack_version.txt')
if version_rq.status_code != 200:
    print('Критическая ошибка при получении информации о версии, код:', version_rq.status_code)
    print('Текст', version_rq.text)
    if not args.force:
        input('Нажмите enter чтобы завершить...')
    exit(-1)

upsteam_version = int(version_rq.text)
if version >= upsteam_version:
    print('Версия репозитория:', upsteam_version)
    print('Текущая версия актуальна, обновление не требуется')
    if not args.force:
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

def download_large_file(url, destination):
    try:
        response = requests.get(url, stream=True)
        with open(destination, 'wb') as out_file:
            shutil.copyfileobj(response.raw, out_file)
        print("Успешная загрузка файла обновления")
    except requests.exceptions.RequestException as e:
        print("Ошибка при скачивании файла:", e)

print('Загрузка...')
download_large_file('https://github.com/Demonorium/hyhrya_factory_config_repo/archive/refs/heads/master.zip', './update/downloaded.zip')
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