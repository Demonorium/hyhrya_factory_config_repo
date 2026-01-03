// priority: 0

ServerEvents.recipes(event => {
    event.remove({ id: 'mekanism:control_circuit/basic' })
    event.shaped(
        Item.of('mekanism:basic_control_circuit', 2),
        [
            'CAE',
            'BDB'
        ],
        {
            A: Item.of("ae2:calculation_processor"),
            B: Item.of('mekanism:alloy_infused'),
            C: Item.of('pneumaticcraft:capacitor'),
            E: Item.of('pneumaticcraft:transistor'),
            D: Item.of('pncepcb:primitive_unassembled_pcb')
        }
    )
    event.shaped(
        Item.of('mekanism:basic_control_circuit', 4),
        [
            'CAE',
            'BDB'
        ],
        {
            A: Item.of("ae2:calculation_processor"),
            B: Item.of('mekanism:alloy_infused'),
            C: Item.of('pncepcb:smd_capacitor'),
            E: Item.of('pncepcb:smd_transistor'),
            D: Item.of('pncepcb:primitive_unassembled_pcb')
        }
    )


    event.remove({ id: 'mekanism:control_circuit/advanced' })
    event.shaped(
        Item.of('mekanism:advanced_control_circuit', 2),
        [
            'CAC',
            'BDB'
        ],
        {
            A: Item.of("ae2:calculation_processor"),
            B: Item.of('undergarden:utherium_crystal'),
            C: Item.of('mekanism:basic_control_circuit'),
            D: Item.of('pncepcb:primitive_unassembled_pcb'),
        }
    )
    event.shaped(
        Item.of('mekanism:advanced_control_circuit', 4),
        [
            'CAC',
            'BDB'
        ],
        {
            A: Item.of("ae2:calculation_processor"),
            B: Item.of(MATERIALS.SIGNALUM.ingot),
            C: Item.of('mekanism:basic_control_circuit'),
            D: Item.of('pncepcb:primitive_unassembled_pcb'),
        }
    )


    event.remove({ id: 'mekanism:control_circuit/elite' })
    event.shaped(
        Item.of('mekanism:elite_control_circuit', 2),
        [
            'CAC',
            'BDB'
        ],
        {
            A: Item.of("ae2:logic_processor"),
            B: Item.of('mekanism:alloy_reinforced'),
            C: Item.of('mekanism:advanced_control_circuit'),
            D: Item.of('pneumaticcraft:unassembled_pcb'),
        }
    )

    event.remove({ id: 'mekanism:control_circuit/ultimate' })
    event.shaped(
        Item.of('mekanism:ultimate_control_circuit', 2),
        [
            'CAC',
            'BDB'
        ],
        {
            A: Item.of("ae2:logic_processor"),
            B: Item.of('mekanism:alloy_atomic'),
            C: Item.of('mekanism:elite_control_circuit'),
            D: Item.of('pneumaticcraft:unassembled_pcb'),
        }
    )
    event.shaped(
        Item.of('mekanism:ultimate_control_circuit', 4),
        [
            'CAC',
            'BDB'
        ],
        {
            A: Item.of("ae2:logic_processor"),
            B: Item.of(MATERIALS.MELODIUM.nugget),
            C: Item.of('mekanism:elite_control_circuit'),
            D: Item.of('pneumaticcraft:unassembled_pcb'),
        }
    )

    event.remove({ id: 'mekanism_extras:control_circuit/absolute' })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "item": "mekanism:ultimate_control_circuit"
            },
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "item": Item.of("mekanism_extras:alloy_radiance").id
            },
            {
                "item": Item.of("ae2:engineering_processor").id
            },
            {
                "item": Item.of("pncepcb:high_power_finished_pcb").id
            }
        ],
        "pressure": 5.0,
        "results": [
            {
                "item": Item.of('mekanism_extras:absolute_control_circuit').id,
                "count": 1
            }
        ]
    })

    event.remove({ id: 'mekanism_extras:control_circuit/supreme' })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "item": "mekanism_extras:absolute_control_circuit"
            },
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "item": Item.of("mekanism_extras:alloy_thermonuclear").id
            },
            {
                "item": Item.of("ae2:engineering_processor").id
            },
            {
                "item": Item.of("pncepcb:high_power_finished_pcb").id
            }
        ],
        "pressure": 5.0,
        "results": [
            {
                "item": Item.of('mekanism_extras:supreme_control_circuit').id,
                "count": 1
            }
        ]
    })

    event.remove({ id: 'mekanism_extras:control_circuit/cosmic' })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "item": "mekanism_extras:supreme_control_circuit"
            },
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "item": Item.of("mekanism_extras:alloy_shining").id
            },
            {
                "item": Item.of("megacells:accumulation_processor").id
            },
            {
                "item": Item.of("pncepcb:quantum_finished_pcb").id
            }
        ],
        "pressure": 5.0,
        "results": [
            {
                "item": Item.of('mekanism_extras:cosmic_control_circuit').id,
                "count": 1
            }
        ]
    })

    event.remove({ id: 'mekanism_extras:control_circuit/infinite' })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "item": "mekanism_extras:cosmic_control_circuit"
            },
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "item": Item.of("mekanism_extras:alloy_spectrum").id
            },
            {
                "item": Item.of("megacells:accumulation_processor").id
            },
            {
                "item": Item.of("pncepcb:quantum_finished_pcb").id
            }
        ],
        "pressure": 5.0,
        "results": [
            {
                "item": Item.of('mekanism_extras:infinite_control_circuit').id,
                "count": 1
            }
        ]
    })
})