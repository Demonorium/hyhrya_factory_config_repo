import os
import json
import urllib.error as error
import urllib.request

print('Скачивание РП')
success = False

if not os.path.exists("resourcepacks"):
    os.mkdir('resourcepacks')

if os.path.exists("resourcepacks/CustomMusic.zip"):
    os.remove('resourcepacks/CustomMusic.zip')

try:
    urllib.request.urlretrieve('http://demonorium.ru/files/share/CustomMusic.zip', './resourcepacks/CustomMusic.zip')
    print("Успешная загрузка файла ресурспака")
    success = True
except:
    print("Ошибка при скачивании файла!")
    print('Скачайте ресурспак http://demonorium.ru/files/share/CustomMusic.zip врунчую. Убедитесь, что заходите по http а не https, поместите его в папку resourcepacks')
    input("Нажмите enter когда скачаете РП")
    success = os.path.exists("resourcepacks/CustomMusic.zip")

if success:
    print('Чтение настроек...')
    if os.path.exists('options.txt'):
        lines = []
        with open('options.txt', 'r', encoding='utf-8') as f:
            lines = f.readlines()

        rp_line = None
        rp_i = 0
        for i, line in enumerate(lines):
            if 'resourcePacks:' in line:
                rp_i = i
                rp_line = line
                break
        
        if rp_line is None:
            print('Ошибка не найдены настройки ресурспаков')
            print('Подключите ресурспак CustomMusic вручную')
            input('Нажмите enter чтобы продолжить')
        else:
            rps = rp_line[rp_line.index('resourcePacks:') + len("resourcePacks:"):]
            try:
                rpsjs = json.loads(rps)

                if "file/CustomMusic.zip" not in rpsjs:
                    rpsjs.append("file/CustomMusic.zip")

                lines[rp_i] = rp_line.replace(rps, json.dumps(rpsjs) + '\n')

                print('Сохранение файла настроек')
                with open('options.txt', 'w', encoding='utf-8') as f:
                    for line in lines:
                        f.write(line)
            except RuntimeError as e:
                print(e)
                print('Произошла неизвестная ошибка при обновлении')
                print('Подключите ресурспак CustomMusic вручную')
                input('Нажмите enter чтобы продолжить')
else:
    print('Не удалось скачать или включить РП')