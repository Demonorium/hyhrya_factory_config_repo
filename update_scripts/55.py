import os
import shutil

if os.path.exists('./mods/Explosion-Overhaul-0.2.0.0-a Forge 1.20.1.jar'):
    print('Удаление мода Explosion-Overhaul-0.2.0.0-a Forge 1.20.1.jar')
    os.remove('./mods/Explosion-Overhaul-0.2.0.0-a Forge 1.20.1.jar')

if os.path.exists('./mods/betterfog-2.3-1.20.1.jar'):
    print('Удаление мода betterfog-2.3-1.20.1.jar')
    os.remove('./mods/betterfog-2.3-1.20.1.jar')

print('Замещение конфигурации')
shutil.rmtree('./config')
shutil.copytree('./update/hyhrya_factory_config_repo-master/config', 'config', dirs_exist_ok=True)
