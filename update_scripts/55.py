import shutil
import lib

if __name__ == "__main__":
    lib.delete_mods(
        './mods/Explosion-Overhaul-0.2.0.0-a Forge 1.20.1.jar',
        './mods/betterfog-2.3-1.20.1.jar'
    )

    print('Замещение конфигурации')
    shutil.rmtree('./config')
    shutil.copytree('./update/hyhrya_factory_config_repo-master/config', 'config', dirs_exist_ok=True)
