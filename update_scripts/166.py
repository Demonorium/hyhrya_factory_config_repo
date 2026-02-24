import install_lib

if __name__ == "__main__":
    install_lib.delete_mods(
        'CustomMachinery-forge-1.20.1-0.10.7.jar',
    )

    install_lib.install_mods(
        ['https://mediafilez.forgecdn.net/files/7498/883/CustomMachinery-forge-1.20.1-0.10.8.jar', 'server'],
    )

    install_lib.enable_mods(
        'Custom-Machinery-Mekanism-1.3.6.jar',
    )

    install_lib.simple_install(
        ['hyhryacasingmod-1.0-SNAPSHOT.jar', 'Возможность накрывать кабели']
    )