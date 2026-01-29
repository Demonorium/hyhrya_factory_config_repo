// priority: 0

ServerEvents.recipes(event => {
    _meka_tools(event)
    _meka_suite(event)

    event.replaceInput({id: 'mekanism:geiger_counter'}, MATERIALS.LEAD.ingot, MATERIALS.CESIUM.plate)
    event.replaceInput({id: 'mekanism:geiger_counter'}, 'mekanism:basic_control_circuit', 'chemlib:iodine_dust')

    event.remove({ id: 'mekanism:configurator' })
    event.custom(
        {
            "type": "minecraft:crafting_shaped",
            "key": {
                "#": {
                    "tag": "forge:rods/wooden"
                },
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "E": {
                    "item": "superbwarfare:cell"
                },
                "I": {
                    "tag": "forge:gems/lapis"
                }
            },
            "pattern": [
                " I ",
                "AEA",
                " # "
            ],
            "result": {
                "item": "mekanism:configurator"
            }
        }
    )
    event.remove({ id: 'mekanism:free_runners' })
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "tag": "forge:circuits/basic"
            },
            "E": {
                "item": "superbwarfare:cell"
            }
        },
        "pattern": [
            "C C",
            "A A",
            "E E"
        ],
        "result": {
            "item": "mekanism:free_runners"
        }
    })
    event.remove({ id: 'mekanism:electric_bow' })
    event.custom({
        "type": "mekanism:mek_data",
        "category": "equipment",
        "key": {
            "#": {
                "tag": "forge:string"
            },
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "E": {
                "item": "superbwarfare:cell"
            }
        },
        "pattern": [
            "#A ",
            "# E",
            "#A "
        ],
        "result": {
            "item": "mekanism:electric_bow"
        }
    })

    event.remove({ id: "mekanism:atomic_disassembler" })
    event.shaped(
        Item.of('mekanism:atomic_disassembler', 1),
        [
            'BAB',
            'BCB',
            ' D '
        ],
        {
            A: Item.of("ad_astra:etrionic_capacitor"),
            B: Item.of('mekanism:alloy_infused'),
            C: Item.of('mekanism:alloy_atomic'),
            D: Item.of('mekanism:ingot_refined_obsidian')
        }
    )

    event.replaceInput({ id: 'mekanism:modification_station' }, 'mekanism:elite_control_circuit', 'mekanism_extras:infinite_control_circuit')
    event.replaceInput({ id: "tempad:tempad" }, "quartz_block", "mekanism:hdpe_sheet")
    event.replaceInput({ id: "tempad:tempad" }, "tinted_glass", "mekanism:teleportation_core")
    event.replaceInput({ id: "tempad:tempad" }, "redstone_lamp", "mekanism_extras:infinite_control_circuit")
    event.replaceInput({ id: "tempad:tempad" }, "beacon", "dysonsphere:universe_whisper")

    event.replaceInput({id: 'mekanism:module_base'}, 'mekanism:hdpe_sheet', 'ae2:calculation_processor')

    function simple_update(src, output) {
        event.remove({id: output.getId()})
        
        event.shapeless(
            output,
            [
                Item.of('mekanism:module_base'),
                src
            ]
        )
    }
    event.remove({id: 'ad_astra_giselle_addon:compat/mekanism/crafting/module_space_breathing_unit'})
    event.remove({id: 'ad_astra_giselle_addon:compat/mekanism/crafting/module_acid_rain_proof_unit'})
    event.remove({id: 'ad_astra_giselle_addon:compat/mekanism/crafting/module_gravity_normalizing_unit'})

    simple_update(Item.of('ad_astra_giselle_addon:pneumatic_space_breathing_upgrade'), Item.of('ad_astra_giselle_addon:module_space_breathing_unit'))
    simple_update(Item.of('ad_astra_giselle_addon:pneumatic_acid_rain_proof_upgrade'), Item.of('ad_astra_giselle_addon:module_acid_rain_proof_unit'))
    simple_update(Item.of('ad_astra_giselle_addon:pneumatic_gravity_normalizing_upgrade'), Item.of('ad_astra_giselle_addon:module_gravity_normalizing_unit'))
    
    simple_update(Item.of('pneumaticcraft:radiation_shielding_upgrade'), Item.of('mekanism:module_radiation_shielding_unit'))
    simple_update(Item.of('pneumaticcraft:magnet_upgrade'), Item.of('mekanism:module_magnetic_attraction_unit'))
    simple_update(Item.of('thermal:rf_coil_storage_augment'), Item.of('mekanism:module_energy_unit'))
    simple_update(Item.of('pneumaticcraft:night_vision_upgrade'), Item.of('mekanism:module_vision_enhancement_unit'))
  
    event.remove({id: 'mekanism:module_attack_amplification_unit'})
    event.remove({id: 'mekaweapons:module_attackamplification_unit'})
    event.remove({id: 'mekaweapons:module_attackamplification_unit_reverse'})
    event.shaped(Item.of('mekaweapons:module_attackamplification_unit'), [
        " C ",
        "ABA",
        " C "
    ], {
        A: Item.of('thermal:upgrade_augment_3'),
        B: Item.of('mekanism:module_base'),
        C: Item.of('mekanism_extras:cosmic_control_circuit')
    })
    event.shaped(Item.of('mekanism:module_attack_amplification_unit'), [
        " C ",
        "ABA",
        " C "
    ], {
        A: Item.of('thermal:upgrade_augment_1'),
        B: Item.of('mekanism:module_base'),
        C: Item.of('mekanism_extras:supreme_control_circuit')
    })

    event.remove({id: 'mekanism:module_teleportation_unit'})
    event.shaped(Item.of('mekanism:module_teleportation_unit'), [
        "DCA",
        "CBC",
        "ACD"
    ], {
        A: Item.of('mekanism_extras:cosmic_control_circuit'),
        D: Item.of('cataclysm:void_core'),
        B: Item.of('mekanism:module_base'),
        C: Item.of('mekanism:teleportation_core')
    })

    event.remove({id: 'mekanism:module_locomotive_boosting_unit'})
    event.shaped(Item.of('mekanism:module_locomotive_boosting_unit'), [
        " C ",
        "ABA",
        " C "
    ], {
        A: Item.of('mekanism:upgrade_speed'),
        B: Item.of('mekanism:module_base'),
        C: Item.of('mekanism_extras:supreme_control_circuit')
    })

    event.remove({id: 'mekanism:module_motorized_servo_unit'})
    event.shaped(Item.of('mekanism:module_motorized_servo_unit'), [
        " C ",
        "ABA",
        " C "
    ], {
        A: Item.of(MATERIALS.MELODIUM.gear),
        B: Item.of('mekanism:module_base'),
        C: Item.of('mekanism_extras:supreme_control_circuit')
    })

    event.replaceInput({id: 'mekanism:module_electrolytic_breathing_unit'}, 'mekanism:alloy_infused', 'cataclysm:essence_of_the_storm')
    event.replaceInput({id: 'mekanism:module_nutritional_injection_unit'}, 'mekanism:canteen', 'macabre:gargamaw_heart')
    event.replaceInput({id: 'mekanism:module_inhalation_purification_unit'}, 'mekanism:hazmat_mask', 'macabre:gomoria_heart')
    event.replaceInput({id: 'mekanism:module_gravitational_modulating_unit'}, 'mekanism:alloy_atomic', 'dysonsphere:universe_whisper')
    event.replaceInput({id: 'mekanism:module_gravitational_modulating_unit'}, 'mekanism:ultimate_induction_cell', 'mekanism_extras:infinite_induction_cell')
    event.replaceInput({id: 'mekanism:module_gravitational_modulating_unit'}, 'mekanism:pellet_antimatter', '#sgjourney:naquadah_alloy')
    event.replaceInput({id: 'gravitationalmodulatingunittweaks:module_gravitational_modulating_additional_unit'}, 'mekanism:ultimate_control_circuit', 'mekanism_extras:infinite_control_circuit')
})


function _meka_tools(event) {

    event.remove({ id: 'mekaweapons:katana_blade' })
    event.shaped(Item.of('mekaweapons:katana_blade'),
        [
            '  A',
            'BA ',
            'CB ',
        ],
        {
            A: Item.of('mekanism_extras:alloy_spectrum'),
            B: Item.of('sgjourney:naquadah_alloy'),
            C: Item.of('ad_astra:etrionic_core'),
        }
    )

    event.remove({ id: 'mekaweapons:bow_riser' })
    event.shaped(Item.of('mekaweapons:bow_riser'),
        [
            'BA ',
            ' CA',
            'BA ',
        ],
        {
            A: Item.of('mekanism_extras:alloy_spectrum'),
            B: Item.of('mekanism_extras:infinite_control_circuit'),
            C: Item.of('dysonsphere:universe_whisper'),
        }
    )

    event.remove({ id: 'mekaweapons:mekatana' })
    event.shaped(Item.of('mekaweapons:mekatana'),
        [
            'BAB',
            'DCD',
            'EFE',
        ],
        {
            A: Item.of('mekaweapons:katana_blade'),
            B: Item.of('mekanism_extras:infinite_control_circuit'),
            C: Item.of('ad_astra:etrionic_core'),
            D: Item.of(MATERIALS.NAQUADAH.ingot),
            E: Item.of('thermalendergy:endergy_upgrade_3'),
            F: Item.of('mekanism_extras:infinite_energy_cube'),
        }
    )

    event.remove({ id: 'mekaweapons:mekabow' })
    event.shaped(Item.of('mekaweapons:mekabow'),
        [
            'BDE',
            'FCA',
            'BDE',
        ],
        {
            A: Item.of('mekaweapons:bow_riser'),
            B: Item.of('mekanism_extras:infinite_control_circuit'),
            C: Item.of('thermalendergy:endergy_upgrade_3'),
            D: Item.of(MATERIALS.NAQUADAH.ingot),
            E: Item.of('dysonsphere:universe_whisper'),
            F: Item.of('mekaweapons:bow_limb'),
        }
    )
    event.remove({ id: 'mekaweapons:bow_limb' })
    event.shaped(Item.of('mekaweapons:bow_limb'),
        [
            'ACA',
            'BBB',
        ],
        {
            A: Item.of('ad_astra:etrionic_core'),
            B: Item.of('chemlib:xenon'),
            C: Item.of('ae2:fluix_glass_cable'),
        }
    )

    event.remove({ id: 'mekanism:meka_tool' })
    event.shaped(Item.of('mekanism:meka_tool'),
        [
            'BAB',
            'CFC',
            'EDE',
        ],
        {
            A: Item.of('mekanism:configurator'),
            B: Item.of('mekanism_extras:infinite_control_circuit'),
            C: Item.of('thermalendergy:endergy_upgrade_3'),
            D: Item.of(MATERIALS.NAQUADAH.ingot),
            E: Item.of('dysonsphere:universe_whisper'),
            F: Item.of('mekanism:atomic_disassembler'),
        }
    )
}

function _meka_suite(event) {
    const els = [
        ['chestplate', 'bodyarmor'],
        ['helmet', 'helmet'],
        ['leggings', 'pants'],
        ['boots', 'boots']
    ]

    els.forEach(el => {
        event.remove({ id: 'mekanism:mekasuit_' + el[1] })
        event.shaped(
            Item.of('mekanism:mekasuit_' + el[1]),
            [
                "FCF",
                "BAB",
                "DED"
            ],
            {
                A: Item.of('pneumaticcraft:pneumatic_' + el[0]),
                B: Item.of('mekanism_extras:infinite_control_circuit'),
                C: Item.of('thermalendergy:endergy_upgrade_3'),
                E: Item.of('mekanism_extras:infinite_induction_cell'),
                D: Item.of(MATERIALS.NAQUADAH.ingot),
                F: Item.of('dysonsphere:universe_whisper')
            }
        )
    })

}
