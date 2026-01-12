import os
import shutil

if not os.path.exists('world'):
    print('Установка мода hyhryasplashupdater (Вывод информации об обновлении в главном меню)')
    shutil.copy('./update/hyhrya_factory_config_repo-master/custom_mods/hyhryasplashupdater-1.0-SNAPSHOT.jar', 'mods/hyhryasplashupdater-1.0-SNAPSHOT.jar')