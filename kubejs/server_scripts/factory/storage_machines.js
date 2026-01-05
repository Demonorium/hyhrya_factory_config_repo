// priority: 0

ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('mekanism:elite_thermodynamic_conductor', 8),
        [
            Item.of(MATERIALS.CADMIUM.ingot),
            Item.of('mekanism:alloy_infused')
        ]
    )

    event.replaceInput({ id: "mekanism:bin/basic" }, 'mekanism:basic_control_circuit', 'chest')
    let lastLevel = 'basic'
    meka_levels.forEach(level => {
        event.remove({ id: 'mekanism:fluid_tank/' + level })

        if (level != 'basic') {
            event.remove({ id: "mekanism:bin/" + level })
            event.shaped(Item.of('mekanism:' + level + '_bin'), [
                "ABA",
                "CDC",
                "AAA"
            ],
                {
                    A: MATERIALS.COMPRESSED_IRON.ingot,
                    B: Item.of('mekanism:' + level + '_control_circuit'),
                    C: Item.of(alloy_levels[level]),
                    D: Item.of('mekanism:' + lastLevel + '_bin')
                })

            if (level != 'advanced') {
                event.shaped(Item.of('mekanism:' + level + '_fluid_tank'), [
                    "CAC",
                    "ADA",
                    "CAC"
                ],
                    {
                        A: MATERIALS.COMPRESSED_IRON.ingot,
                        C: Item.of(alloy_levels[level]),
                        D: Item.of('mekanism:' + lastLevel + '_fluid_tank')
                    })
            } else {
                event.shaped(Item.of('mekanism:' + level + '_fluid_tank'), [
                    "CAC",
                    "ADA",
                    "CAC"
                ],
                    {
                        A: MATERIALS.COMPRESSED_IRON.ingot,
                        C: Item.of(alloy_levels[level]),
                        D: Item.of('pneumaticcraft:small_tank')
                    })
            }
        }
        lastLevel = level
    })

    mekanism_extras_levels.forEach(level => {
        event.remove({ id: "mekanism_extras:bin/" + level })
        event.remove({ id: 'mekanism_extras:fluid_tank/' + level })
        if (level != 'absolute') {
            
            event.shaped(Item.of('mekanism_extras:' + level + '_bin'), [
                "ABA",
                "CDC",
                "AAA"
            ],
                {
                    A: MATERIALS.COMPRESSED_IRON.ingot,
                    B: Item.of('mekanism_extras:' + level + '_control_circuit'),
                    C: Item.of(alloy_levels[level]),
                    D: Item.of('mekanism_extras:' + lastLevel + '_bin')
                })
            event.shaped(Item.of('mekanism_extras:' + level + '_fluid_tank'), [
                "CAC",
                "ADA",
                "CAC"
            ],
                {
                    A: MATERIALS.COMPRESSED_IRON.ingot,
                    C: Item.of(alloy_levels[level]),
                    D: Item.of('mekanism_extras:' + lastLevel + '_fluid_tank')
                })
        } else {
            event.shaped(Item.of('mekanism_extras:' + level + '_bin'), [
                "ABA",
                "CDC",
                "AAA"
            ],
                {
                    A: MATERIALS.COMPRESSED_IRON.ingot,
                    B: Item.of('mekanism_extras:' + level + '_control_circuit'),
                    C: Item.of(alloy_levels[level]),
                    D: Item.of('mekanism:' + lastLevel + '_bin')
                })
            event.shaped(Item.of('mekanism_extras:' + level + '_fluid_tank'), [
                "CAC",
                "ADA",
                "CAC"
            ],
                {
                    A: MATERIALS.COMPRESSED_IRON.ingot,
                    C: Item.of(alloy_levels[level]),
                    D: Item.of('mekanism:' + lastLevel + '_fluid_tank')
                })
        }
        lastLevel = level
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