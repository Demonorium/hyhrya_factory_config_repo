// priority: 0

ServerEvents.recipes(event => {
    event.replaceInput({id: 'pneumaticcraft:thermal_compressor'}, 'heavy_weighted_pressure_plate', MATERIALS.TIN.gear)
    event.replaceInput({id: "pneumaticcraft:drone_interface"}, 'pneumaticcraft:printed_circuit_board', 'advancedperipherals:peripheral_casing')
    event.replaceInput({id: 'pneumaticcraft:liquid_compressor'}, 'leather', MATERIALS.TIN.gear)

    event.remove({id: "pneumaticcraft:thermopneumatic_processing_plant"})
    event.shaped("pneumaticcraft:thermopneumatic_processing_plant",
        [
            'ADA',
            'BCB',
            'FDF'
        ],
        {
            A: Item.of(MATERIALS.COMPRESSED_IRON.ingot),
            B: Item.of('pneumaticcraft:small_tank'),
            C: Item.of("pneumaticcraft:pressure_tube"),
            D: MATERIALS.IRON.gear,
            F: Item.of("pneumaticcraft:reinforced_stone_slab")
        }
    )

    event.remove({id: "pneumaticcraft:pressure_gauge"})
    event.shaped("pneumaticcraft:pressure_gauge",
        [
            ' C ',
            'ABA',
            '   '
        ],
        {
            A: Item.of(MATERIALS.COPPER.gear),
            B: Item.of(MATERIALS.COMPRESSED_IRON.ingot),
            C: Item.of(MATERIALS.REDSTONE.ingot)
        }
    )

    event.remove({id: "pneumaticcraft:gas_lift"})
    event.shaped("pneumaticcraft:gas_lift",
        [
            'ABA',
            'DCD',
            ' C '
        ],
        {
            A: Item.of(MATERIALS.COMPRESSED_IRON.ingot),
            B: Item.of('pneumaticcraft:small_tank'),
            C: Item.of("pneumaticcraft:pressure_tube"),
            D: MATERIALS.IRON.gear
        }
    )

    event.shaped(Item.of('pneumaticcraft:heat_sink', 16), [
            'DBD',
            'ACA',
        ], {
            A: Item.of(MATERIALS.COMPRESSED_IRON.ingot),
            B: Item.of('mekanismgenerators:turbine_blade'),
            C: Item.of('chemlib:beryllium_oxide_dust'),
            D: Item.of(MATERIALS.COPPER.plate),
    })

    event.remove({id: 'pneumaticcraft:pneumatic_cylinder'})
    event.shaped(
        Item.of('pneumaticcraft:pneumatic_cylinder'),
        [
            "ADA",
            "CDC",
            "CEC",
        ],
        {
            A: Item.of('pneumaticcraft:plastic_bucket'),
            C: Item.of(MATERIALS.COMPRESSED_IRON.ingot),
            D: Item.of(MATERIALS.IRON.ingot),
            E: Item.of('pneumaticcraft:cannon_barrel')
        }
    )
    event.shaped(
        Item.of('pneumaticcraft:pneumatic_cylinder', 3),
        [
            "ADA",
            "CDC",
            "FEF",
        ],
        {
            A: Item.of('pneumaticcraft:plastic_bucket'),
            C: Item.of(MATERIALS.TITANIUM.ingot),
            F: Item.of(MATERIALS.VANADIUM.ingot),
            D: Item.of(MATERIALS.IRON.ingot),
            E: Item.of('pneumaticcraft:cannon_barrel')
        }
    )

    event.replaceInput({id: 'pneumaticcraft:vacuum_pump'}, 'pneumaticcraft:reinforced_stone_slab', 'chemlib:beryllium_oxide_dust')
})