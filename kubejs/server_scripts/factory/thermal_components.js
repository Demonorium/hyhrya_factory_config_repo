// priority: 0

ServerEvents.recipes(event => {
    event.remove({ id: "thermal:redstone_servo" })
    event.shaped(
        Item.of('thermal:redstone_servo'),
        [
            "ABA",
            " C ",
            "ABA"
        ],
        {
            A: MATERIALS.REDSTONE.ingot,
            B: "mekanism:basic_control_circuit",
            C: MATERIALS.STEEL.ingot
        }
    )
    event.shaped(
        Item.of('thermal:redstone_servo', 8),
        [
            "ABA",
            " C ",
            "ABA"
        ],
        {
            A: MATERIALS.SIGNALUM.ingot,
            B: "mekanism:basic_control_circuit",
            C: MATERIALS.STEEL.ingot
        }
    )

    event.remove({ id: "thermal:rf_coil" })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "item": "gold_ingot"
            },
            {
                "item": "mekanism:alloy_infused"
            }
        ],
        "pressure": 1.0,
        "results": [
            {
                "item": "thermal:rf_coil",
                "count": 2
            }
        ]
    })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "item": "gold_ingot"
            },
            {
                "item": MATERIALS.SIGNALUM.ingot
            }
        ],
        "pressure": 1.0,
        "results": [
            {
                "item": "thermal:rf_coil",
                "count": 16
            }
        ]
    })

    event.remove({ id: "thermal:machine_frame" })
    assembly_drill(event, Item.of("mekanism:steel_casing"), Item.of("thermal:machine_frame"))
    assembly_drill(event, Item.of(MATERIALS.ALUMINUM.block), Item.of("thermal:machine_frame", 2))
    assembly_laser(event, Item.of(MATERIALS.SIGNALUM.ingot), Item.of("thermal:rf_coil", 5))

    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 1,
                "item": MATERIALS.CHROMIUM.plate
            },
            {
                "item": "mekanism:steel_casing"
            }
        ],
        "pressure": 2.0,
        "results": [
            {
                "item": "thermal:machine_frame",
                "count": 3
            }
        ]
    })

    event.remove({ id: 'thermalendergy:vibrating_core' })
    event.shaped(
        Item.of('thermalendergy:vibrating_core'),
        [
            "ADA",
            "CBC",
            "ADA",
        ], {
        'A': MATERIALS.RUTHENIUM.plate,
        "C": MATERIALS.AZURE_ELECTRUM.plate,
        "D": MATERIALS.REGALIUM.ingot,
        "B": Item.of('deeperdarker:reinforced_echo_shard')
    })
})