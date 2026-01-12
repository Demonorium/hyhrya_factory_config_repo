import os
import shutil
import json

high_perfomance_mods_data = [
    {
        "mod_name": "Stellar view (Звёздное небо)",
        "mod_file": "mods/Stellar View-1.20.1-0.5.2-Forge.jar"
    },
    {
        "mod_name": "Particle Rain (Частицы дождя это физические частицы)",
        "mod_file": "mods/particlerain-4.0.0-beta.3+1.20.1-forge.jar"
    },
    {
        "mod_name": "EuphoriaPatcher (Расширение для комплементарок)",
        "mod_file": "mods/EuphoriaPatcher-1.7.8-r5.6.1-forge.jar"
    },
    {
        "mod_name": "3d Skin layer (3d слои на скине)",
        "mod_file": "mods/skinlayers3d-forge-1.9.2-mc1.20.1.jar"
    },
]

visial_mod_data = [
    {
        "mod_name": "AutoHud (Полностью скрывает сердечки из ванилы)",
        "mod_file": "mods/autohud-8.7+1.20.1-forge.jar"
    },
    {
        "mod_name": "HaloHud (Интерфейс в виде полосок около прицела заменяет собой сердечки)",
        "mod_file": "mods/halohud-forge-5.0+1.20.1.jar"
    },    
    {
        "mod_name": "CameraOverhaul (Подвижная камера)",
        "mod_file": "mods/CameraOverhaul-v2.0.4-forge+mc[1.20.0-1.20.5].jar"
    },
   
    {
        "mod_name": "ChatNotify (Уведомления когда кто-то упомянул вас в сообщении)",
        "mod_file": "mods/chatnotify-forge-2.6.2+1.20.1.jar"
    },
    {
        "mod_name": "StargateEarlyLoading (Загрузочный экран из Звёздных Врат)",
        "mod_file": "mods/StargateEarlyLoading-0.2-forge.jar"
    },
    {
        "mod_name": "PickUpNotifier (Уведомления о поднятии предметов)",
        "mod_file": "mods/PickUpNotifier-v8.0.0-1.20.1-Forge.jar"
    },
    {
        "mod_name": "3d Skin layer (3d слои на скине)",
        "mod_file": "mods/skinlayers3d-forge-1.9.2-mc1.20.1.jar"
    }, 
    {
        "mod_name": "EuphoriaPatcher (Расширение для комплементарок)",
        "mod_file": "mods/EuphoriaPatcher-1.7.8-r5.6.1-forge.jar"
    },
    {
        "mod_name": "HyhryaSplashUpdater (Вместо сплеша выводится информация об обновлении майнкрафта)",
        "mod_file": "mods/hyhryasplashupdater-1.0-SNAPSHOT.jar"
    },
]


tech_mod_data = [
    {
        "mod_name": "Spark (Профайлер)",
        "mod_file": "mods/spark-1.10.53-forge.jar"
    },
    {
        "mod_name": "WITS (Узнать id текущей структуры)",
        "mod_file": "mods/wits-1.1.0+1.20.1-forge.jar"
    },
    {
        "mod_name": "NBTCopy (Копирование NBT объекта)",
        "mod_file": "mods/NBTcopy-FORGE-1.20.1-1.0.4.jar"
    },
    {
        "mod_name": "NBTExporter (Экспорт NBT объекта в файл)",
        "mod_file": "mods/nbtexporter-1.20-2.0.1.jar"
    },
    {
        "mod_name": "NBT Autocomplete (Помощник ввода NBT тегов)",
        "mod_file": "mods/NBTac-FORGE-1.20.1-1.3.10.jar"
    },
]

settings = {
}

if os.path.exists('modpack_settings.json'):
    print("Загрузка файла настроек...")
    with open('modpack_settings.json', encoding='utf-8', mode='r') as f:
        settings = json.load(f)
    print('Настройки загружены')
else:
    text = '_'
    while text != 'y' and text != 'n' and len(text) > 0:
        text = input('Обнаружены включенные моды для разработки сборки, желаете выключить? (Y/n) ')
        text = text.lower().strip()
    
    if text == 'y' or len(text) == 0:
        settings['disabled_tech_mods'] = True

        for mod in tech_mod_data:
            mod_name = mod['mod_name']
            mod_file = mod['mod_file']
            if os.path.exists(mod_file):
                os.rename(mod_file, mod_file + '.disabled')
                print('Мод', mod_name, "отключен")
        input('Нажмите enter чтобы продолжить...')

def choose_number(title, variants):
    text = '_'
    while text == '_' or not (str.isnumeric(text) and 0 <= int(text) <= len(variants)):
        os.system('cls')
        print(title+'\n')

        for i, v in enumerate(variants):
            print(str(i+1) + ')', v)

        print('0) Выход/Назад\n')

        text = input('>').strip()

    return int(text)

def edit_mod_group(mod_data):
    option = -1
    while option != 0:
        mods_states = []
        mod_options = []
        for mod in mod_data:
            mod_name = mod['mod_name']
            mod_file = mod['mod_file']
            if os.path.exists(mod_file):
                mods_states.append('enabled')
                mod_options.append('Выключить ' + mod_name)
            elif os.path.exists(mod_file + '.disabled'):
                mods_states.append('disabled')
                mod_options.append('Включить ' + mod_name)
            else:
                mods_states.append('notfound')
                mod_options.append('Мод не найден:' + mod_name + '; file:' + mod_file)
        
        option = choose_number(
            '===УПРАВЛЕНИЕ МОДАМИ===',
            mod_options
        )

        if option > 0:
            mod_id = option - 1
            if mods_states[mod_id] == 'enabled':
                os.rename(mod_data[mod_id]['mod_file'], mod_data[mod_id]['mod_file'] + '.disabled')
            elif mods_states[mod_id] == 'disabled':
                os.rename(mod_data[mod_id]['mod_file'] + '.disabled', mod_data[mod_id]['mod_file'])
            else:
                print('Невозможно совершить действие т.к. мод не найден')
                input('Нажмите enter чтобы продолжить...')

option = -1

while option != 0:
    option = choose_number("===ГЛАВНОЕ МЕНЮ===", [
        "Настроить моды значительно влияющие на производительность",
        "Настоить визуал сборки",
        'Включить моды для разработки' if 'disabled_tech_mods' in settings and settings['disabled_tech_mods'] else "Настоить моды для разработки",
    ])

    if option == 1:
        edit_mod_group(high_perfomance_mods_data)
    elif option == 2:
        edit_mod_group(visial_mod_data)    
    elif option == 3:
        settings['disabled_tech_mods'] = False
        edit_mod_group(tech_mod_data)

with open('modpack_settings.json', encoding='utf-8', mode='w') as f:
    json.dump(settings, f)