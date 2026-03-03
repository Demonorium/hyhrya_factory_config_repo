if __name__ == "__main__":
    install_lib.delete_mods(
        'multiblocked2-1.20.1-1.0.37.jar'
        'ldlib-forge-1.20.1-1.0.45.jar'
    )

    install_lib.install_mods(
        ['https://cdn.modrinth.com/data/R2gjKEpa/versions/Uf8VhleU/multiblocked2-1.20.1-1.0.38.a.jar', 'server'],
        ['https://cdn.modrinth.com/data/B1CBVXHX/versions/PyBG3VWQ/ldlib-forge-1.20.1-1.0.49.jar', 'server']
    )