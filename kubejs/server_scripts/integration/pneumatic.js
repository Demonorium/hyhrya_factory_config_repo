// priority: 0

ServerEvents.recipes(event => {
    event.remove({id: 'pneumaticcraft:refinery/oil_2'})
    event.remove({id: 'pneumaticcraft:refinery/oil_3'})
    event.remove({id: 'pneumaticcraft:refinery/oil_4'})
    event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_lpg'})
    event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_biodiesel'})
    event.remove({id: 'pneumaticcraft:thermo_plant/upgrade_matrix'})
    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "C": {
          "type": "pneumaticcraft:fluid",
          "amount": 1000,
          "tag": "forge:lubricant"
        },
        "L": {
          "tag": "pneumaticcraft:upgrade_components"
        },
        "X": {
          "item": Item.of('thermal:cured_rubber').getId()
        }
      },
      "pattern": [
        "LXL",
        "XCX",
        "LXL"
      ],
      "result": {
        "count": 2,
        "item": "pneumaticcraft:speed_upgrade"
      },
      "show_notification": true
    })
    
    event.replaceInput({id: "pneumaticcraft:night_vision_upgrade"}, 'pneumaticcraft:pressure_chamber_glass', 'cataclysm:cursium_ingot')
    event.remove({id: "pneumaticcraft:magnet_upgrade"})
    event.shaped("pneumaticcraft:magnet_upgrade",
        [
            'BAB',
            'ACA',
            'BAB'
        ],
        {
            A: Item.of('mekanism_weaponry:magnetic_circuit'),
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
    event.remove({id: 'pneumaticcraft:radiation_shield_mekanism'})

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
    event.shaped(Item.of('ad_astra_giselle_addon:pneumatic_gravity_normalizing_upgrade'), [
            'ABA',
            'BDB',
            'ACA',
        ], {
            A: Item.of('pneumaticcraft:upgrade_matrix'),
            B: Item.of('mekanism_extras:alloy_radiance'),
            C: Item.of('thermal:ruby'),
            D: Item.of('mekanism_extras:absolute_control_circuit'),
    })
    
    event.replaceInput({id: 'ad_astra_giselle_addon:crafting/enchanted_book_gravity_normalizing'}, 'ad_astra:space_boots', 'mekanism_extras:absolute_control_circuit')

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
})

ServerEvents.tags("item", event => {
    event.removeAll('pneumaticcraft:upgrade_components')
    event.add('pneumaticcraft:upgrade_components', 'pneumaticcraft:upgrade_matrix')
    event.add('pneumaticcraft:wiring', MATERIALS.SILVER.nugget)
    event.add('pneumaticcraft:wiring', MATERIALS.ALUMINUM.nugget)
})




