// priority: 0

ServerEvents.recipes(event => {
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

    event.replaceInput({id: 'pneumaticcraft:thermal_compressor'}, 'heavy_weighted_pressure_plate', MATERIALS.TIN.gear)
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

    event.replaceInput({id: 'pneumaticcraft:liquid_compressor'}, 'leather', MATERIALS.TIN.gear)
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

    event.remove({id: "pneumaticcraft:logistics_core"})
    event.shaped("pneumaticcraft:logistics_core",
        [
            'BAB',
            'BDA',
            'ABD'
        ],
        {
            A: Item.of(MATERIALS.IRON.gear),
            B: Item.of('pneumaticcraft:compressed_stone'),
            D: MATERIALS.REDSTONE.ingot
        }
    )

    event.remove({mod: 'pncepcb', type: 'crafting_shaped'})
    event.remove({mod: 'pncepcb', type: 'pneumaticcraft:pressure_chamber'})
    
    
    event.remove({id: 'pneumaticcraft:refinery/oil_2'})
    event.remove({id: 'pneumaticcraft:refinery/oil_3'})
    event.remove({id: 'pneumaticcraft:refinery/oil_4'})
    event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_lpg'})
    event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_biodiesel'})

    event.remove({id: 'pneumaticcraft:thermo_plant/upgrade_matrix'})
    event.custom({
      "type": "pneumaticcraft:fluid_mixer",
      "fluid_output": {
        "amount": 25,
        "fluid": "pneumaticcraft:plastic"
      },
      "input1": {
        "type": "pneumaticcraft:fluid",
        "amount": 25,
        "fluid": "pneumaticcraft:lubricant"
      },
      "input2": {
        "type": "pneumaticcraft:fluid",
        "amount": 25,
        "fluid": "pneumaticcraft:lpg"
      },
      "item_output": {
        "item": "pneumaticcraft:upgrade_matrix"
      },
      "pressure": 3.0,
      "time": 300
    })

    event.replaceInput({id: "pneumaticcraft:night_vision_upgrade"}, 'pneumaticcraft:pressure_chamber_glass', 'cataclysm:cursium_ingot')
    event.replaceInput({id: "pneumaticcraft:magnet_upgrade"}, MATERIALS.COMPRESSED_IRON.ingot, MATERIALS.NEODYMIUM.ingot)
    event.shaped("pneumaticcraft:magnet_upgrade",
        [
            'BAB',
            'ACA',
            'BAB'
        ],
        {
            A: Item.of(MATERIALS.MIDNIGHT_IRON.ingot),
            B: Item.of('pneumaticcraft:upgrade_matrix'),
            C: MATERIALS.PLASTIC.ingot
        }
    )
    event.shaped("pneumaticcraft:magnet_upgrade",
        [
            'BAB',
            'ACA',
            'BAB'
        ],
        {
            A: Item.of('chemlib:magnetite_dust'),
            B: Item.of('pneumaticcraft:upgrade_matrix'),
            C: MATERIALS.PLASTIC.ingot
        }
    )

    const els = [
        'chestplate',
        'helmet',
        'leggings',
        'boots'
    ]

    els.forEach(el => {
        event.remove({id: 'pneumaticcraft:pneumatic_' + el})
        event.shaped(Item.of('pneumaticcraft:pneumatic_' + el), [
            'DCD',
            'BAB',
            'DCD',
        ], {
            A: Item.of('pneumaticcraft:compressed_iron_' + el),
            B: Item.of('pneumaticcraft:reinforced_air_canister'),
            C: Item.of('mekanism:ultimate_control_circuit'),
            D: Item.of('ad_astra:desh_plate')
        })
    })

    event.remove({id: 'ad_astra_giselle_addon:compat/pneumaticcraft/crafting/space_breathing_upgrade'})
    event.remove({id: 'ad_astra_giselle_addon:compat/pneumaticcraft/crafting/space_fire_proof_upgrade'})
    event.remove({id: 'ad_astra_giselle_addon:compat/pneumaticcraft/crafting/gravity_normalizing_upgrade'})

    event.shaped(Item.of('ad_astra_giselle_addon:pneumatic_space_breathing_upgrade'), [
            'ABA',
            'CDE',
            'AFA',
        ], {
            A: Item.of('pneumaticcraft:upgrade_matrix'),
            B: Item.of('ad_astra:space_helmet'),    
            C: Item.of('ad_astra:space_suit'),
            D: Item.of('cataclysm:essence_of_the_storm'),
            E: Item.of('ad_astra:space_pants'),
            F: Item.of('ad_astra:space_boots')
    })

    event.shaped(Item.of('ad_astra_giselle_addon:pneumatic_space_fire_proof_upgrade'), [
            'ABA',
            'CDE',
            'AFA',
        ], {
            A: Item.of('pneumaticcraft:upgrade_matrix'),
            B: Item.of('ad_astra:netherite_space_boots'),
            C: Item.of('ad_astra:netherite_space_suit'),
            D: Item.of('cataclysm:ignitium_ingot'),
            E: Item.of('ad_astra:netherite_space_pants'),
            F: Item.of('ad_astra:netherite_space_boots')
    })

    event.shaped(Item.of('pneumaticcraft:radiation_shielding_upgrade'), [
            'ABA',
            'CDE',
            'AFA',
        ], {
            A: Item.of('pneumaticcraft:upgrade_matrix'),
            B: Item.of('mekanism:hazmat_mask'),
            C: Item.of('mekanism:hazmat_gown'),
            D: Item.of('mekanism:ultimate_control_circuit'),
            E: Item.of('mekanism:hazmat_pants'),
            F: Item.of('mekanism:hazmat_boots')
    })

    event.remove({id : 'pneumaticcraft:armor_upgrade'})
    event.remove({id : 'pneumaticcraft:ender_visor_upgrade'})
    event.remove({id : 'pneumaticcraft:stomp_upgrade'})

    event.replaceInput({id : 'pneumaticcraft:jumping_upgrade_2'},  'slime_block', 'cataclysm:witherite_ingot')
    event.replaceInput({id : 'pneumaticcraft:jumping_upgrade_3'}, 'piston', 'cataclysm:witherite_ingot')
    event.replaceInput({id : 'pneumaticcraft:jumping_upgrade_4'}, 'piston', 'cataclysm:ignitium_ingot')

    event.replaceInput({id : 'pneumaticcraft:jet_boots_upgrade_1'}, 'pneumaticcraft:advanced_air_compressor', 'cataclysm:witherite_ingot')
    event.replaceInput({id : 'pneumaticcraft:jet_boots_upgrade_2'}, 'feather', 'cataclysm:witherite_ingot')
    event.replaceInput({id : 'pneumaticcraft:jet_boots_upgrade_3'}, 'ghast_tear', 'cataclysm:witherite_ingot')
    event.replaceInput({id : 'pneumaticcraft:jet_boots_upgrade_3'}, 'blaze_rod', 'mekanism_extras:absolute_control_circuit')
    event.replaceInput({id : 'pneumaticcraft:jet_boots_upgrade_4'}, 'phantom_membrane', 'cataclysm:ignitium_ingot')
    event.replaceInput({id : 'pneumaticcraft:jet_boots_upgrade_4'}, 'nether_star', 'mekanism_extras:cosmic_control_circuit')
    event.replaceInput({id : 'pneumaticcraft:jet_boots_upgrade_5'}, 'end_rod', 'cataclysm:essence_of_the_storm')

    event.shaped(Item.of('pneumaticcraft:armor_upgrade', 2), [
            'ACA',
            'DBD',
            'ACA',
        ], {
            A: Item.of('pneumaticcraft:upgrade_matrix'),
            B: Item.of('cataclysm:monstrous_horn'),
            C: Item.of(MATERIALS.STEEL.plate),
            D: Item.of('mekanism:alloy_atomic'),
    })
    event.shaped(Item.of('pneumaticcraft:armor_upgrade', 10), [
            'ACA',
            'DBD',
            'ACA',
        ], {
            A: Item.of('pneumaticcraft:upgrade_matrix'),
            B: Item.of('bosses_of_mass_destruction:obsidian_heart'),
            C: Item.of('mekanism:alloy_reinforced'),
            D: Item.of('mekanism:alloy_atomic'),
    })

    event.shaped(Item.of('pneumaticcraft:ender_visor_upgrade', 1), [
            'ACA',
            'DBD',
            'ACA',
        ], {
            A: Item.of('pneumaticcraft:upgrade_matrix'),
            B: Item.of('bosses_of_mass_destruction:obsidian_heart'),
            C: Item.of('pumpkin'),
            D: Item.of('mekanism:advanced_control_circuit'),
    })

    event.shaped(Item.of('pneumaticcraft:stomp_upgrade'), [
            'ACA',
            'DBD',
            'ACA',
        ], {
            A: Item.of('pneumaticcraft:upgrade_matrix'),
            B: Item.of('cataclysm:monstrous_horn'),
            C: Item.of('minecraft:piston'),
            D: Item.of('thermal:bronze_gear'),
    })

    event.shapeless(
        Item.of('pneumaticcraft:heat_pipe', 8),
        [
        Item.of(MATERIALS.CADMIUM.ingot),
        '#minecraft:wool'
        ]
    )

})

ServerEvents.tags("item", event => {
    event.removeAll('pneumaticcraft:upgrade_components')
    event.add('pneumaticcraft:upgrade_components', 'pneumaticcraft:upgrade_matrix')

    event.removeAll('forge:sawdust')
    event.add('forge:sawdust', 'mekanism:sawdust')
})

MoreJSEvents.playerStartTrading((event) => {
    event.forEachOffers((o, i) => {
        if (o.output.id.toString().startsWith('superb')) {
            o.disabled = true;
        }
        else if (o.output.id.toString().startsWith('computercraft')) {
            o.disabled = true;
        } 
        else if (o.output.id.toString().endsWith('circuit_board')) {
            o.disabled = true;
        }
        else if (o.output.id.toString().endsWith('pcb_blueprint')) {
            o.disabled = true;
        }
    });
});



