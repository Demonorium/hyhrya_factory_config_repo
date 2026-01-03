// priority: 0

ServerEvents.recipes(event => {
    event.replaceInput({ id: "mekanism:bin/basic" }, 'mekanism:basic_control_circuit', 'chest')
    meka_levels.forEach(level => {
        event.replaceInput({ id: "mekanism:bin/" + level }, 'cobblestone', 'pneumaticcraft:ingot_iron_compressed')
    })
    mekanism_extras_levels.forEach(level => {
        event.replaceInput({ id: "mekanism_extras:bin/" + level }, 'cobblestone', 'pneumaticcraft:ingot_iron_compressed')
    })

    event.remove({ id: 'mekanism:qio_drive_array' })
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "#": {
                "item": "ae2:drive"
            },
            "C": {
                "item": "mekanism_extras:supreme_control_circuit"
            },
            "G": {
                "item": "ae2:semi_dark_monitor"
            },
            "I": {
                "tag": "forge:pellets/polonium"
            },
            "T": {
                "item": "mekanism:teleportation_core"
            }
        },
        "pattern": [
            "IGI",
            "C#C",
            "ITI"
        ],
        "result": {
            "item": "mekanism:qio_drive_array"
        }
    })
})