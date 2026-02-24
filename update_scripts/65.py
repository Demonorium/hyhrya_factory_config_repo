import install_lib

if __name__ == "__main__":
    if not install_lib.check_is_server():
        install_lib.simple_install(
            ['hyhryasplashupdater-1.0-SNAPSHOT.jar', 'Вывод информации об обновлении в главном меню']
        )