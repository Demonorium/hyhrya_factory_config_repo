if __name__ == "__main__":
    install_lib.disable_mods(
        'justenoughbreeding-forge-1.20-1.20.1-2.3.0.jar',
        'JustEnoughResources-1.20.1-1.4.0.247.jar',
        'jerintegration-5.5.0.jar',
        'jecalculation-forge-1.20.1-4.0.4.jar'
    )

    install_lib.install_mods(
        ['https://cdn.modrinth.com/data/wbWoo11W/versions/s8VlWyjj/emi_enchanting-0.1.2%2B1.20.1%2Bforge.jar', 'server'],
        ['https://cdn.modrinth.com/data/fRiHVvU7/versions/WtJS5tVw/emi-1.1.22%2B1.20.1%2Bforge.jar', 'server'],
        ['https://cdn.modrinth.com/data/qbbO7Jns/versions/KKWmdLti/emi_loot-0.7.9%2B1.20.1%2Bforge.jar', 'server'],
        ['https://cdn.modrinth.com/data/hYykXjDp/versions/7MmXhjWs/fzzy_config-0.7.6%2B1.20.1%2Bforge.jar', 'server'],
        ['https://cdn.modrinth.com/data/ordsPcFz/versions/Zsh14XeQ/kotlinforforge-4.12.0-all.jar', 'server'],
    )