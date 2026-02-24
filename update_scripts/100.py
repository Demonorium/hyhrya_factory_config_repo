
import os
import shutil

if __name__ == "__main__":
    install_lib.disable_mods(
        'multiblocked2-1.20.1-1.0.37.jar',
        'ldlib-forge-1.20.1-1.0.45.jar',
    )

    if os.path.exists('config/mbd2-common.toml'):
        print('Удаление конфигурации MDB2')
        os.remove('config/mbd2-common.toml')

    if os.path.exists('ldlib'):
        print('Удаление конфигурации библиотеки мода MDB2')
        shutil.rmtree('ldlib')