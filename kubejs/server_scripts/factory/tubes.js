ServerEvents.recipes(event => {
    event.remove({ mod: 'curvy_pipes' })
    event.remove({ mod: 'pipez' })

    _item_pipes(event)
    _fluid_pipes(event)
    _energy_pipes(event)
    _gas_pipes(event)

    event.shaped(
        Item.of('pipez:universal_pipe', 2),
        [
            'ABC',
            'DED',
            'CBA'
        ],
        {
            A: Item.of('pipez:energy_pipe'),
            B: Item.of('pipez:fluid_pipe'),
            C: Item.of('pipez:gas_pipe'),
            D: Item.of('pipez:item_pipe'),
            E: Item.of("mekanism:advanced_control_circuit")
        }
    )


    event.shaped(
        Item.of('pipez:basic_upgrade', 4),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: Item.of('pneumaticcraft:upgrade_matrix'),
            B: Item.of('mekanism:basic_control_circuit'),
            C: Item.of("mekanism:alloy_infused")
        }
    )

    event.shaped(
        Item.of('pipez:improved_upgrade', 4),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: Item.of('pipez:basic_upgrade'),
            B: Item.of('mekanism:elite_control_circuit'),
            C: Item.of("mekanism:alloy_reinforced")
        }
    )

    event.shaped(
        Item.of('pipez:advanced_upgrade', 4),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: Item.of('pipez:improved_upgrade'),
            B: Item.of('mekanism_extras:absolute_control_circuit'),
            C: Item.of("mekanism_extras:alloy_radiance")
        }
    )

    event.shaped(
        Item.of('pipez:ultimate_upgrade', 4),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: Item.of('pipez:advanced_upgrade'),
            B: Item.of('mekanism_extras:supreme_control_circuit'),
            C: Item.of("mekanism_extras:alloy_thermonuclear")
        }
    )

    event.shaped(
        Item.of('pipez:infinity_upgrade', 1),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: Item.of('pipez:ultimate_upgrade'),
            B: Item.of('mekanism_extras:infinite_control_circuit'),
            C: Item.of("sgjourney:naquadah_alloy")
        }
    )

    event.shaped(
        Item.of('pipez:filter_destination_tool', 1),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: Item.of('pipez:fluid_pipe'),
            B: Item.of('mekanism:advanced_control_circuit'),
            C: Item.of("pipez:item_pipe")
        }
    )

    const pipes = [
        "tiny",
        "small",
        "medium",
        "large",
        "huge",
    ]

    event.shaped(
        Item.of('curvy_pipes:trunk_energy_pipe', 4),
        [
            'BBB',
            'BAB',
            'BBB'
        ],
        {
            A: Item.of('mekanism_extras:alloy_radiance'),
            B: Item.of("curvy_pipes:huge_energy_pipe")
        }
    )

    event.shaped(
        Item.of('curvy_pipes:trunk_item_pipe', 4),
        [
            'BBB',
            'BAB',
            'BBB'
        ],
        {
            A: Item.of(MATERIALS.TITANIUM.gear),
            B: Item.of("curvy_pipes:huge_item_pipe")
        }
    )

    event.shaped(
        Item.of('curvy_pipes:trunk_fluid_pipe', 4),
        [
            'BBB',
            'BAB',
            'BBB'
        ],
        {
            A: Item.of(MATERIALS.CHROMIUM.gear),
            B: Item.of("curvy_pipes:huge_fluid_pipe")
        }
    )

    const grades = [
        Item.of("pipez:basic_upgrade"),
        Item.of("pipez:improved_upgrade"),
        Item.of("pipez:advanced_upgrade"),
        Item.of("pipez:ultimate_upgrade"),
    ]

    let i = 0
    pipes.forEach(type => {
        if (i > 0) {
            event.shaped(
                Item.of('curvy_pipes:' + type + '_item_pipe', 8),
                [
                    'CCC',
                    'CAC',
                    'CCC'
                ],
                {
                    A: Item.of(grades[i - 1]),
                    C: Item.of('curvy_pipes:' + pipes[i - 1] + '_item_pipe')
                }
            )
            event.shaped(
                Item.of('curvy_pipes:' + type + '_energy_pipe', 8),
                [
                    'CCC',
                    'CAC',
                    'CCC'
                ],
                {
                    A: Item.of(grades[i - 1]),
                    C: Item.of('curvy_pipes:' + pipes[i - 1] + '_energy_pipe')
                }
            )
        }

        i += 1

        event.shaped(
            Item.of('curvy_pipes:' + type + '_fluid_pipe', 1),
            [
                'ABA'
            ],
            {
                A: "#minecraft:wool",
                B: Item.of("curvy_pipes:" + type + "_item_pipe")
            }
        )
        event.shaped(
            Item.of('curvy_pipes:' + type + '_fluid_pipe', 1),
            [
                'ABA'
            ],
            {
                A: Item.of('thermal:cured_rubber'),
                B: Item.of("curvy_pipes:" + type + "_item_pipe")
            }
        )
    })

    event.shaped(
        Item.of('curvy_pipes:redstone_cable', 8),
        [
            'ABA'
        ],
        {
            A: Item.of('clay_ball'),
            B: Item.of("morered:redwire_spool")
        }
    )

    event.replaceInput({ mod: 'morered' }, 'morered:red_alloy_ingot', 'mekanism:alloy_infused')
})


function _thermodynamic_conductors(event) {
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
}

function _item_pipes(event) {
    event.shaped(
        Item.of('pipez:item_pipe', 8),
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
        Item.of('pipez:item_pipe', 16),
        [
            ' C ',
            'B B',
            ' C '
        ],
        {
            B: MATERIALS.TIN.gear,
            C: MATERIALS.PLASTIC.ingot
        }
    )
    event.shaped(
        Item.of('pipez:item_pipe', 16),
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
        Item.of('pipez:item_pipe', 64),
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

    event.shaped(
        Item.of('curvy_pipes:tiny_item_pipe', 2),
        [
            'A A',
            'B B',
            'A A'
        ],
        {
            A: Item.of(MATERIALS.IRON.ingot),
            B: Item.of(MATERIALS.IRON.gear)
        }
    )

    event.shaped(
        Item.of('curvy_pipes:tiny_item_pipe', 4),
        [
            'A A',
            'B B',
            'A A'
        ],
        {
            A: Item.of(MATERIALS.IRON.plate),
            B: Item.of(MATERIALS.IRON.gear)
        }
    )
    event.shaped(
        Item.of('curvy_pipes:tiny_item_pipe', 8),
        [
            'A A',
            'B B',
            'A A'
        ],
        {
            A: Item.of(MATERIALS.STEEL.plate),
            B: Item.of(MATERIALS.STEEL.gear)
        }
    )
    event.shaped(
        Item.of('curvy_pipes:tiny_item_pipe', 16),
        [
            'A A',
            'B B',
            'A A'
        ],
        {
            A: Item.of(MATERIALS.PLASTIC.ingot),
            B: Item.of(MATERIALS.TIN.gear)
        }
    )
    event.shaped(
        Item.of('curvy_pipes:tiny_item_pipe', 16),
        [
            'A A',
            'B B',
            'A A'
        ],
        {
            A: Item.of(MATERIALS.ALUMINUM.plate),
            B: Item.of(MATERIALS.ALUMINUM.gear)
        }
    )
    event.shaped(
        Item.of('curvy_pipes:tiny_item_pipe', 64),
        [
            'A A',
            'B B',
            'A A'
        ],
        {
            A: Item.of(MATERIALS.TITANIUM.plate),
            B: Item.of(MATERIALS.TITANIUM.gear)
        }
    )
}

function _fluid_pipes(event) {
    event.shaped(
        Item.of('pipez:fluid_pipe', 8),
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
        Item.of('pipez:fluid_pipe', 16),
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
        Item.of('pipez:fluid_pipe', 16),
        [
            'ACA',
            'B B',
            'ACA'
        ],
        {
            A: "#forge:glass/silica",
            B: MATERIALS.TIN.gear,
            C: MATERIALS.PLASTIC.ingot
        }
    )
    event.shaped(
        Item.of('pipez:fluid_pipe', 64),
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
}


function _energy_pipes(event) {
    event.shaped(
        Item.of('pipez:energy_pipe', 8),
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
        Item.of('pipez:energy_pipe', 32),
        [
            'A A',
            ' B ',
            'A A'
        ],
        {
            A: MATERIALS.SILVER.ingot,
            B: Item.of('thermal:rf_coil')
        }
    )
    event.shaped(
        Item.of('pipez:energy_pipe', 64),
        [
            'A  ',
            ' B ',
            '  A'
        ],
        {
            A: MATERIALS.CERIUM.ingot,
            B: Item.of('thermal:rf_coil')
        }
    )

    event.shaped(
        Item.of('curvy_pipes:tiny_energy_pipe', 8),
        [
            'A A',
            'B B',
            'A A'
        ],
        {
            A: MATERIALS.COPPER.ingot,
            B: Item.of('thermal:rf_coil')
        }
    )
    event.shaped(
        Item.of('curvy_pipes:tiny_energy_pipe', 24),
        [
            'A A',
            'B B',
            'A A'
        ],
        {
            A: MATERIALS.SILVER.ingot,
            B: Item.of('thermal:rf_coil')
        }
    )
    event.shaped(
        Item.of('curvy_pipes:tiny_energy_pipe', 64),
        [
            'A A',
            'B B',
            'A A'
        ],
        {
            A: MATERIALS.CERIUM.ingot,
            B: Item.of('thermal:rf_coil')
        }
    )
}

function _gas_pipes(event) {
    event.shaped(
        Item.of('pipez:gas_pipe', 8),
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
        Item.of('pipez:gas_pipe', 32),
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
        Item.of('pipez:gas_pipe', 64),
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
}