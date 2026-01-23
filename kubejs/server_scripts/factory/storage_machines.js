// priority: 0

ServerEvents.recipes(event => {
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

    event.remove({ id: "mekanism:transmitter/universal_cable/basic" })
    event.shaped(
        Item.of('mekanism:basic_universal_cable', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: MATERIALS.COPPER.ingot,
            B: Item.of('thermal:rf_coil')
        }
    )
    event.shaped(
        Item.of('mekanism:elite_universal_cable', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: MATERIALS.SILVER.ingot,
            B: Item.of('thermal:rf_coil')
        }
    )

    event.remove({ id: "mekanism:transmitter/pressurized_tube/basic" })
    event.shaped(
        Item.of('mekanism:basic_pressurized_tube', 8),
        [
            'ACA',
            'B B',
            'ACA'
        ],
        {
            A: Item.of('thermal:tar'),
            B: MATERIALS.OSMIUM.gear,
            C: MATERIALS.OSMIUM.ingot
        }
    )
    event.shaped(
        Item.of('mekanism:advanced_pressurized_tube', 8),
        [
            'ACA',
            'B B',
            'ACA'
        ],
        {
            A: Item.of('thermal:tar'),
            B: MATERIALS.PLATINUM.gear,
            C: MATERIALS.PLATINUM.ingot
        }
    )
    event.shaped(
        Item.of('mekanism:ultimate_pressurized_tube', 8),
        [
            'ACA',
            'B B',
            'ACA'
        ],
        {
            A: Item.of('thermal:tar'),
            B: MATERIALS.CHROMIUM.gear,
            C: MATERIALS.MOLYBDENUM.ingot
        }
    )

    event.remove({ id: "mekanism:transmitter/logistical_transporter/basic" })
    event.shaped(
        Item.of('mekanism:basic_logistical_transporter', 8),
        [
            ' C ',
            'B B',
            ' C '
        ],
        {
            B: MATERIALS.STEEL.gear,
            C: MATERIALS.STEEL.ingot
        }
    )
    event.shaped(
        Item.of('mekanism:advanced_logistical_transporter', 8),
        [
            ' C ',
            'B B',
            ' C '
        ],
        {
            B: MATERIALS.ALUMINUM.gear,
            C: MATERIALS.ALUMINUM.ingot
        }
    )
    event.shaped(
        Item.of('mekanism:ultimate_logistical_transporter', 8),
        [
            ' C ',
            'B B',
            ' C '
        ],
        {
            B: MATERIALS.TITANIUM.gear,
            C: MATERIALS.TITANIUM.ingot
        }
    )

    event.remove({ id: "mekanism:transmitter/mechanical_pipe/basic" })
    event.shaped(
        Item.of('mekanism:basic_mechanical_pipe', 8),
        [
            'ACA',
            'B B',
            'ACA'
        ],
        {
            A: "#forge:glass/silica",
            B: MATERIALS.STEEL.gear,
            C: MATERIALS.STEEL.ingot
        }
    )
    event.shaped(
        Item.of('mekanism:advanced_mechanical_pipe', 8),
        [
            'ACA',
            'B B',
            'ACA'
        ],
        {
            A: "#forge:glass/silica",
            B: MATERIALS.ALUMINUM.gear,
            C: MATERIALS.ALUMINUM.ingot
        }
    )
    event.shaped(
        Item.of('mekanism:ultimate_mechanical_pipe', 8),
        [
            'ACA',
            'B B',
            'ACA'
        ],
        {
            A: "#forge:glass/silica",
            B: MATERIALS.TITANIUM.gear,
            C: MATERIALS.TITANIUM.ingot
        }
    )

    event.remove({ id: "mekanism:transmitter/thermodynamic_conductor/basic" })
    event.shaped(
        Item.of('mekanism:basic_thermodynamic_conductor', 8),
        [
            'CCC',
            'ABA',
            'CCC'
        ],
        {
            A: MATERIALS.STEEL.ingot,
            B: MATERIALS.COMPRESSED_IRON.block,
            C: Item.of('pneumaticcraft:thermal_lagging')
        }
    )
    event.shaped(
        Item.of('mekanism:ultimate_thermodynamic_conductor', 8),
        [
            'CCC',
            'ABA',
            'CCC'
        ],
        {
            A: MATERIALS.STEEL.ingot,
            B: MATERIALS.CADMIUM.ingot,
            C: Item.of('pneumaticcraft:thermal_lagging')
        }
    )

    meka_levels.forEach(level => {
        event.shaped(
            Item.of('mekanism:' + level + '_mechanical_pipe', 4),
            [
                ' BA',
                'B B',
                'AB '
            ],
            {
                A: "#forge:glass/silica",
                B: 'mekanism:' + level + '_logistical_transporter',
            }
        )
    })

    mekanism_extras_levels.forEach(level => {
        event.shaped(
            Item.of('mekanism_extras:' + level + '_mechanical_pipe', 4),
            [
                ' BA',
                'B B',
                'AB '
            ],
            {
                A: "#forge:glass/silica",
                B: 'mekanism_extras:' + level + '_logistical_transporter',
            }
        )
    })
})