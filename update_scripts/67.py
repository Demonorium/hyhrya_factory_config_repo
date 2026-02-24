import os
import shutil

if __name__ == "__main__":
    if not os.path.exists('check_update.bat'):
        print('Скопирован bat обновления')
        shutil.copy('./update/hyhrya_factory_config_repo-master/check_update.bat', 'check_update.bat')