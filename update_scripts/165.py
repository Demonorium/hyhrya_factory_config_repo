import os
import shutil

if os.path.exists('./mods/cable_facades-1.20.1-Forge-1.3.2.jar'):
    print('Удаление мода cable_facades-1.20.1-Forge-1.3.2.jar')
    os.remove('./mods/cable_facades-1.20.1-Forge-1.3.2.jar')


source_path = './update/hyhrya_factory_config_repo-master/'

def rm_rf_if_ex_copy(p, ignore_parameter=None):
    if os.path.exists(p):
        print('rm ', p)
        shutil.rmtree(p)
    shutil.copytree(source_path + p, p)
    print('install ', source_path + p, 'to', p)

rm_rf_if_ex_copy('minemenu')