import lib

if __name__ == "__main__":
    if not lib.check_is_server():
        lib.simple_install(
            ['hyhryasplashupdater-1.0-SNAPSHOT.jar', 'Вывод информации об обновлении в главном меню']
        )