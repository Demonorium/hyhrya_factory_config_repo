
import os
import shutil

if os.path.exists('mods/multiblocked2-1.20.1-1.0.37.jar'):
    print('Отключение мода MDB2')
    os.rename('mods/multiblocked2-1.20.1-1.0.37.jar', 'mods/multiblocked2-1.20.1-1.0.37.jar.disabled')

if os.path.exists('mods/ldlib-forge-1.20.1-1.0.45.jar'):
    print('Отключение библиотеки мода MDB2')
    os.rename('mods/ldlib-forge-1.20.1-1.0.45.jar', 'mods/ldlib-forge-1.20.1-1.0.45.jar.disabled')

if os.path.exists('config/mbd2-common.toml'):
    print('Удаление конфигурации MDB2')
    os.remove('config/mbd2-common.toml')

if os.path.exists('ldlib'):
    print('Удаление конфигурации библиотеки мода MDB2')
    shutil.rmtree('ldlib')