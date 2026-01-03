// priority: 0

ServerEvents.recipes(event => {
    event.replaceInput({id: 'pneumaticcraft:micromissiles'}, 'fire_charge', 'superbwarfare:missile_engine')
    event.replaceInput({id: 'pneumaticcraft:micromissiles'}, 'tnt', 'superbwarfare:high_energy_explosives')

    event.remove({id: 'superbwarfare:homemade_shotgun'})
    event.shaped(
        Item.of('superbwarfare:homemade_shotgun', 1), 
        [
            '  D',
            'ABB',
            ' CB'
        ],
        {
            A: Item.of('superbwarfare:iron_barrel'),
            B: Item.of(MATERIALS.COMPRESSED_IRON.ingot),
            C: Item.of('tripwire_hook'),
            D: Item.of('flint_and_steel')
        }
    )

    event.remove({id: 'superbwarfare:high_energy_explosives'})
    event.remove({id: 'ballistix:explosive_condensive'})
    event.remove({id: 'ballistix:explosive_repulsive'})
    event.remove({id: 'ballistix:explosive_attractive'})
    event.remove({id: "ballistix:poison_powder_noelectro"})
    event.replaceInput({id: 'ballistix:explosive_sonic'}, "copper_ingot", "ballistix:breaching")
    event.remove({id: "ballistix:poison_powder_noelectro"})
    event.remove({id: 'ballistix:explosive_thermobaric'})
    event.remove({id: 'ballistix:explosive_breaching'})
    event.remove({id: 'ballistix:explosive_emp_noelectro'})
    event.remove({id: 'ballistix:explosive_nuclear_noelectro'})
    event.remove({id: 'ballistix:explosive_endothermic'})
    event.remove({id: 'ballistix:explosive_exothermic'})
    event.remove({id: 'ballistix:explosive_hypersonic'})
    event.remove({id: 'ballistix:explosive_ender'})
    event.remove({id: 'ballistix:explosive_rejuvination_noelectro'})
    event.remove({id: 'ballistix:explosive_antimatter_noelectro'})
    event.remove({id: 'ballistix:explosive_antimatterlarge_noelectro'})
    event.remove({id: 'ballistix:explosive_darkmatter_noelectro'})

    event.shaped(
        Item.of('ballistix:breaching', 1), 
        [
            ' C ',
            'BAB',
            ' C '
        ],
        {
            A: Item.of('ballistix:condensive'),
            B: Item.of('superbwarfare:high_energy_explosives'),
            C: Item.of('chemlib:ammonium_nitrate_dust')
        }
    )

    event.shaped(
        Item.of('ballistix:nuclear', 1), 
        [
            'DAD',
            'DAD',
            'DBD'
        ],
        {
            A: Item.of('mekanism:pellet_plutonium'),
            B: Item.of('ballistix:breaching'),
            D: Item.of(MATERIALS.LEAD.plate),
        }
    )

    event.shaped(
        Item.of('ballistix:hypersonic', 1), 
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: Item.of('ballistix:sonic'),
            B: Item.of('mekanism_extras:absolute_control_circuit'),
            C: Item.of('deeperdarker:resonarium_plate'),
        }
    )

    event.shaped(
        Item.of('ballistix:endothermic', 1), 
        [
            'CDC',
            'ABA',
            'CDC'
        ],
        {
            A: Item.of('ad_astra:cryo_fuel_bucket'),
            B: Item.of('pneumaticcraft:thermopneumatic_processing_plant'),
            C: Item.of(MATERIALS.ENDERIUM.plate),
            D: Item.of('mekanism:ultimate_control_circuit'),
        }
    )

    event.shaped(
        Item.of('ballistix:exothermic', 1), 
        [
            'CDC',
            'ABA',
            'CDC'
        ],
        {
            A: Item.of('ballistix:thermobaric'),
            B: Item.of('pneumaticcraft:thermopneumatic_processing_plant'),
            C: Item.of(MATERIALS.ENDERIUM.plate),
            D: Item.of('mekanism:ultimate_control_circuit'),
        }
    )

    event.shaped(
        Item.of('ballistix:emp', 1), 
        [
            'BDB',
            'BAB',
            'EDE'
        ],
        {
            A: Item.of('mekanism:pellet_plutonium'),
            B: Item.of('mekanism:elite_control_circuit'),
            D: Item.of('thermal:rf_coil'),
            E: Item.of('ballistix:condensive'),
        }
    )

    event.shaped(
        Item.of('ballistix:ender', 1), 
        [
            'BBB',
            'BAB',
            'BBB'
        ],
        {
            A: Item.of('nether_star'),
            B: Item.of(MATERIALS.ENDERIUM.nugget)
        }
    )

    event.shaped(
        Item.of('ballistix:rejuvination', 1), 
        [
            'DFB',
            'CAC',
            'BED'
        ],
        {
            A: Item.of('mekanism:pellet_antimatter'),
            B: Item.of('hostilenetworks:nether_prediction'),
            C: Item.of('hostilenetworks:end_prediction'),
            D: Item.of('hostilenetworks:overworld_prediction'),
            E: Item.of('ae2:singularity'),
            F: Item.of('mekanism_extras:cosmic_control_circuit'),
        }
    )

    event.shaped(
        Item.of('ballistix:antimatter', 1), 
        [
            'AED',
            'EBE',
            'DEA'
        ],
        {
            A: Item.of(MATERIALS.STELLARIUM.plate),
            B: Item.of('mekanism_extras:absolute_control_circuit'),
            D: Item.of('ballistix:nuclear'),
            E: Item.of('mekanism:pellet_antimatter')
        }
    )

    event.shaped(
        Item.of('ballistix:largeantimatter', 1), 
        [
            'AED',
            'EBE',
            'DEA'
        ],
        {
            A: Item.of(MATERIALS.STELLARIUM.plate),
            B: Item.of('mekanism_extras:cosmic_control_circuit'),
            E: Item.of('ae2:singularity'),
            D: Item.of('ballistix:antimatter'),
        }
    )   

    event.shaped(
        Item.of('ballistix:darkmatter', 1), 
        [
            'AED',
            'EBE',
            'DEA'
        ],
        {
            A: Item.of('pncepcb:high_power_finished_pcb'),
            B: Item.of('mekanism_extras:cosmic_control_circuit'),
            D: Item.of('chemlib:unknown'),
            E: Item.of('ae2:singularity')
        }
    )

    event.replaceInput({mod: 'superbwarfare'}, MATERIALS.COPPER.plate, MATERIALS.BRONZE.plate)
    event.shaped(
        Item.of('superbwarfare:primer', 1), 
        [
            'ACA',
            'ABA'
        ],
        {
            A: Item.of('paper'),
            B: Item.of('flint'),
            C: Item.of('gunpowder')
        }
    )

    event.remove({id:"superbwarfare:shotgun_ammo"})
    event.shaped(
        Item.of('superbwarfare:shotgun_ammo', 2), 
        [
            'ACA',
            'ABA',
            ' D '
        ],
        {
            A: Item.of('paper'),
            B: Item.of('gunpowder'),
            C: Item.of('iron_nugget'),
            D: Item.of('superbwarfare:primer')
        }
    )
    event.shapeless(
        Item.of('superbwarfare:shotgun_ammo', 8), 
        [
            Item.of('iron_nugget'),
            Item.of('iron_nugget'),
            Item.of('superbwarfare:grain')
        ]
    )
    event.shapeless(
        Item.of('superbwarfare:shotgun_ammo', 32), 
        [
            Item.of(MATERIALS.LEAD.nugget),
            Item.of(MATERIALS.LEAD.nugget),
            Item.of('superbwarfare:grain')
        ]
    )

    event.replaceInput({id: 'superbwarfare:taser_smithing'}, "yellow_concrete", MATERIALS.PLASTIC.ingot)
    

    event.remove({id: 'superbwarfare:handgun_ammo'})
    event.shapeless(
        Item.of('superbwarfare:handgun_ammo', 16), 
        [
            Item.of('iron_ingot'),
            Item.of('superbwarfare:grain')
        ]
    )

    event.shapeless(
        Item.of('superbwarfare:handgun_ammo', 64), 
        [
            Item.of(MATERIALS.LEAD.ingot),
            Item.of('superbwarfare:grain')
        ]
    )

    event.remove({id: 'superbwarfare:rifle_ammo'})
    event.shapeless(
        Item.of('superbwarfare:rifle_ammo', 8), 
        [
            Item.of(MATERIALS.STEEL.ingot),
            Item.of('superbwarfare:grain')
        ]
    )
    event.shapeless(
        Item.of('superbwarfare:rifle_ammo', 16), 
        [
            Item.of(MATERIALS.TITANIUM.ingot),
            Item.of('superbwarfare:grain')
        ]
    )

    event.remove({id: 'superbwarfare:heavy_ammo'})
    event.shapeless(
        Item.of('superbwarfare:heavy_ammo', 6), 
        [
            Item.of(MATERIALS.COMPRESSED_IRON.ingot),
            Item.of('superbwarfare:grain')
        ]
    )
    event.shapeless(
        Item.of('superbwarfare:heavy_ammo', 24), 
        [
            Item.of(MATERIALS.URANIUM.ingot),
            Item.of('superbwarfare:grain')
        ]
    )

    event.remove({id: 'superbwarfare:sniper_ammo'})
    event.shapeless(
        Item.of('superbwarfare:sniper_ammo', 4), 
        [
            Item.of(MATERIALS.TUNGSTEN.ingot),
            Item.of('superbwarfare:high_energy_explosives'),
            Item.of('superbwarfare:high_energy_explosives'),
            Item.of('superbwarfare:grain')
        ]
    )
    event.shapeless(
        Item.of('superbwarfare:sniper_ammo', 2), 
        [
            Item.of(MATERIALS.URANIUM.ingot),
            Item.of('superbwarfare:high_energy_explosives'),
            Item.of('superbwarfare:high_energy_explosives'),
            Item.of('superbwarfare:grain')
        ]
    )
    
    event.remove({id: 'superbwarfare:small_shell'})
    event.shaped(
        Item.of('superbwarfare:small_shell', 3), 
        [
            'B',
            'A',
            'A'
        ],
        {
            A: Item.of('superbwarfare:grain'),
            B: Item.of(MATERIALS.STEEL.ingot)
        }
    )

    event.remove({id: 'ballistix:bullet_noelectro'})
    event.shaped(
        Item.of('ballistix:bullet', 3), 
        [
            'B',
            'A',
            'A'
        ],
        {
            A: Item.of('superbwarfare:grain'),
            B: Item.of(MATERIALS.COPPER.ingot)
        }
    )

    event.shaped(
        Item.of('superbwarfare:small_shell', 6), 
        [
            'B',
            'A',
            'A'
        ],
        {
            A: Item.of('superbwarfare:grain'),
            B: Item.of(MATERIALS.URANIUM.ingot)
        }
    )

    event.replaceInput({id: 'superbwarfare:small_rocket'}, MATERIALS.COPPER.ingot, MATERIALS.BRONZE.plate)
    event.replaceInput({id: 'superbwarfare:rpg_rocket_tbg'}, 'superbwarfare:grain', 'superbwarfare:missile_engine')
    event.replaceInput({id: 'superbwarfare:rpg_rocket_standard'}, 'superbwarfare:grain', 'superbwarfare:missile_engine')

    const warhead = [
        'ap',
        'he',
        'cm'
    ]

    warhead.forEach(head => {
        event.remove({id: 'superbwarfare:medium_rocket_' + head})
        event.shaped(
            Item.of('superbwarfare:medium_rocket_' + head, 1), 
            [
                ' A ',
                'BEB',
                'DCD'
            ],
            {
                A: Item.of('superbwarfare:' + head + '_head'),
                B: Item.of(MATERIALS.BRONZE.plate),
                C: Item.of('superbwarfare:missile_engine'),
                D: Item.of('ad_astra:rocket_fin'),
                E: Item.of('superbwarfare:high_energy_explosives')
            }
        )
    })

    event.remove({id: 'superbwarfare:missile_engine'})
    
    const edust = [
        'chemlib:ammonium_perchlorate_dust',
        'chemlib:lithium_perchlorate_dust',
        'chemlib:potassium_perchlorate_dust',
        'chemlib:nitrosyl_perchlorate_dust',
    ]

    edust.forEach(d => {
        event.shaped(
            Item.of('superbwarfare:missile_engine', 4), 
            [
                ' C ',
                ' B ',
                'DAD'
            ],
            {
                A: Item.of('pneumaticcraft:cannon_barrel'),
                B: Item.of(d),
                C: MATERIALS.STEEL.plate,
                D: Item.of('ad_astra:rocket_fin')
            }
        )
    })

    event.shaped(
        Item.of('superbwarfare:missile_engine', 2), 
        [
            ' C ',
            ' B ',
            'DAD'
        ],
        {
            A: Item.of('pneumaticcraft:cannon_barrel'),
            B: Item.of('chemlib:ammonium_nitrate_dust'),
            C: MATERIALS.STEEL.plate,
            D: Item.of('ad_astra:rocket_fin')
        }
    )

    event.shaped(
        Item.of('superbwarfare:mortar_shell', 1), 
        [
            ' C ',
            'BBB',
            'DAD'
        ],
        {
            A: Item.of('superbwarfare:primer'),
            B: Item.of('chemlib:ammonium_nitrate_dust'),
            C: Item.of('superbwarfare:fusee'),
            D: Item.of(MATERIALS.TIN.ingot)
        }
    )

    event.shaped(
        Item.of('superbwarfare:crowbar', 1), 
        [
            '  B',
            ' A ',
            'A  '
        ],
        {
            A: Item.of(MATERIALS.IRON.ingot),
            B: Item.of(MATERIALS.COMPRESSED_IRON.ingot)
        }
    )

    event.remove({id: 'superbwarfare:mortar_bipod'})
    event.shaped(
        Item.of('superbwarfare:mortar_bipod', 1), 
        [
            'CBC',
            'A A'
        ],
        {
            A: Item.of(MATERIALS.COMPRESSED_IRON.ingot),
            B: Item.of('pneumaticcraft:stone_base'),
            C: Item.of(MATERIALS.COMPRESSED_IRON.gear)
        }
    )
    event.remove({id: 'superbwarfare:mortar_base_plate'})
    event.shaped(
        Item.of('superbwarfare:mortar_base_plate', 1), 
        [
            'CBC',
            'AAA'
        ],
        {
            A: Item.of('pneumaticcraft:compressed_stone'),
            B: Item.of('pneumaticcraft:stone_base'),
            C: Item.of(MATERIALS.IRON.gear)
        }
    )

    event.remove({id: 'ballistix:explosive_debilitation_noelectro'})
    event.remove({id: 'ballistix:explosive_incendiary_noelectro'})
    event.shaped(
        Item.of('ballistix:incendiary', 3), 
        [
            'ABA',
            'ECE',
            'ADA'
        ],
        {
            A: Item.of(MATERIALS.NICKEL.plate),
            B: Item.of('mekanism:dust_sulfur'),
            C: Item.of(MATERIALS.COAL.dust),
            D: Item.of("thermal:light_oil_bucket"),
            E: Item.of("superbwarfare:high_energy_explosives"),
        }
    )
    event.shaped(
        Item.of('ballistix:incendiary', 1), 
        [
            'ABA',
            'ECE',
            'ADA'
        ],
        {
            A: Item.of(MATERIALS.NICKEL.plate),
            B: Item.of('mekanism:dust_sulfur'),
            C: Item.of(MATERIALS.COAL.dust),
            D: Item.of("thermal:sap_bucket"),
            E: Item.of("superbwarfare:high_energy_explosives"),
        }
    )
    event.shaped(
        Item.of('ballistix:incendiary', 1), 
        [
            'ABA',
            'ECE',
            'ADA'
        ],
        {
            A: Item.of(MATERIALS.NICKEL.plate),
            B: Item.of('mekanism:dust_sulfur'),
            C: Item.of('chemlib:phosphorus_dust'),
            D: Item.of(MATERIALS.COAL.dust),
            E: Item.of("superbwarfare:high_energy_explosives"),
        }
    )
    event.shaped(
        Item.of('ballistix:incendiary', 1), 
        [
            'ABA',
            'ECE',
            'ADA'
        ],
        {
            A: Item.of(MATERIALS.NICKEL.plate),
            B: Item.of('mekanism:dust_sulfur'),
            C: Item.of('chemlib:phosphorus_dust'),
            D: Item.of(MATERIALS.COAL.dust),
            E: Item.of("superbwarfare:high_energy_explosives"),
        }
    )    
    event.shaped(
        Item.of('ballistix:incendiary', 8), 
        [
            'ACA',
            'ABA',
            'AAA'
        ],
        {
            A: Item.of(MATERIALS.ALUMINUM.plate),
            B: Item.of('pneumaticcraft:gasoline_bucket'),
            C: Item.of('chemlib:aluminum_dust')
        }
    )

    event.remove({id: 'ballistix:explosive_fragmentation'})
    event.shaped(
        Item.of('ballistix:fragmentation', 1), 
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: Item.of('ballistix:condensive'),
            B: Item.of('ballistix:repulsive')
        }
    )
    event.remove({id: 'ballistix:explosive_contagious'})
    event.custom({
        "type": "biomancy:bio_forging",
        "bio_forge_tab": "biomancy:tools",
        "ingredients": [
            {
                "item": "ballistix:debilitation"
            },
            {
                "item": "undergarden:virulent_mix_bucket"
            },
            {
                "count": 4,
                "item": "biomancy:acid_extract"
            },
            {
                "count": 4,
                "item": "biomancy:regenerative_fluid"
            },
            {
                "count": 4,
                "item": "macabre:blackheads"
            }
        ],
        "nutrientsCost": 5,
        "result": {
            "item": "ballistix:contagious"
        }
    })

    event.replaceInput({id: 'superbwarfare:vehicle_assembling_table'}, 'smithing_table', 'thermal:machine_frame')
    event.replaceInput({id: 'superbwarfare:vehicle_assembling_table'}, 'iron_ingot', MATERIALS.ALUMINUM.ingot)
    event.replaceInput({id: 'superbwarfare:vehicle_assembling_table'}, 'iron_block', 'mekanism:ultimate_control_circuit')
    event.replaceInput({id: 'superbwarfare:wheel'}, 'black_wool', 'thermal:cured_rubber')

    const rockets_tiers = [
        [Item.of('ad_astra:tier_1_rocket'), Item.of('ballistix:missiletier1'), 1],
        [Item.of('ad_astra:tier_2_rocket'), Item.of('ballistix:missiletier2'), 3],
        [Item.of('ad_astra:tier_3_rocket'), Item.of('ballistix:missiletier3'), 5]
    ]

    rockets_tiers.forEach(tier => {
        event.remove({output: tier[1].getId()})
        const mult = tier[2]

        event.custom({
          "type": "thermal:bottler",
          "ingredients": [
            {
              "item": tier[0].getId()
            },
            {
              "fluid": "kubejs:hydrazine",
              "amount": 1000 * mult
            }
          ],
          "result": [
            {
              "item": tier[1].getId()
            }
          ],
          "experience": 100 * mult
        })
        event.custom({
          "type": "thermal:bottler",
          "ingredients": [
            {
              "item": tier[0].getId()
            },
            {
              "fluid": "pneumaticcraft:kerosene",
              "amount": 3000 * mult
            }
          ],
          "result": [
            {
              "item": tier[1].getId()
            }
          ],
          "experience": 100 * mult
        })

    })

    event.replaceInput({id: 'ballistix:explosive_obsidian'}, 'tnt', 'ballistix:breaching')
    event.remove({id: 'ballistix:radar_noelectro'})
    event.shaped(
        Item.of('ballistix:radar', 1), 
        [
            ' C ',
            ' BA',
            'ADA'
        ],
        {
            A: Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.ingot),
            B: Item.of('ducky-periphs:entity_detector_block'),
            C: Item.of('thermal:rf_coil'),
            D: Item.of('superbwarfare:motor')
        }
    )
    event.shaped(
        Item.of('ballistix:radar', 1), 
        [
            'BBB',
            ' A ',
            'ADA'
        ],
        {
            A: Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.ingot),
            B: Item.of(MATERIALS.CESIUM.plate),
            D: Item.of('superbwarfare:motor')
        }
    )

    event.remove({id: 'ballistix:fire_control_radar_noelectro'})
    event.shaped(
        Item.of('ballistix:firecontrolradar', 1), 
        [
            'ACA',
            'CBC',
            'ACA'
        ],
        {
            A: Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.ingot),
            B: Item.of('ballistix:radar'),
            C: Item.of('pneumaticcraft:logistics_core')
        }
    )

    event.remove({id: 'ballistix:esm_tower_noelectro'})
    event.shaped(
        Item.of('ballistix:esmtower', 1), 
        [
            'ACA',
            'CBC',
            'ACA'
        ],
        {
            A: Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.ingot),
            B: Item.of('ballistix:radar'),
            C: Item.of('thermal:rf_coil')
        }
    )

    event.remove({id: 'superbwarfare:fumo_25'})
    event.shaped(
        Item.of('superbwarfare:fumo_25', 1), 
        [
            'ACA',
            'CBC',
            'ACA'
        ],
        {
            A: Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.ingot),
            B: Item.of('ballistix:firecontrolradar'),
            C: Item.of('superbwarfare:cell')
        }
    )
    event.shaped(
        Item.of('superbwarfare:fumo_25', 1), 
        [
            'ACA',
            'CBC',
            'ACA'
        ],
        {
            A: Item.of(MATERIALS.CESIUM.ingot),
            B: Item.of('ballistix:firecontrolradar'),
            C: Item.of('superbwarfare:cell')
        }
    )

    function _make_components_by_material(material, name) {
        event.remove({id: 'superbwarfare:' + name + '_spring'})
        event.remove({id: 'superbwarfare:' + name + '_trigger'})
        event.remove({id: 'superbwarfare:' + name + '_barrel'})
        event.remove({id: 'superbwarfare:' + name + '_action'})
        
        if (material.plate) {
            assembly_laser(event, Item.of(material.plate), Item.of('superbwarfare:' + name + '_trigger'))
            assembly_drill(event, Item.of(material.plate), Item.of('superbwarfare:' + name + '_spring'))
        } else {
            assembly_laser(event, Item.of(material.ingot), Item.of('superbwarfare:' + name + '_spring'))
            event.shaped(
                Item.of('superbwarfare:' + name + '_trigger'),
                [
                    'AAA',
                    'CB '
                ],
                {
                    'A': material.ingot,
                    'C': MATERIALS.COMPRESSED_IRON.gear,
                    'B': Item.of('superbwarfare:' + name + '_spring')
                }
            )
        }
        if (material.gear) {
            assembly_laser(event, Item.of(material.gear), Item.of('superbwarfare:' + name + '_action'))
        } else {
            event.shaped(
                Item.of('superbwarfare:' + name + '_action'),
                [
                    'CB ',
                    'AAA',
                    'C  '
                ],
                {
                    'A': material.ingot,
                    'C': MATERIALS.COMPRESSED_IRON.gear,
                    'B': Item.of('superbwarfare:' + name + '_spring')
                }
            )
        }

        assembly_drill(event, Item.of(material.ingot), Item.of('superbwarfare:' + name + '_barrel'))
    }

    event.remove({id: 'ballistix:launchersupportframetier1_noelectro'})
    event.remove({id: 'ballistix:launchersupportframetier2_noelectro'})
    event.remove({id: 'ballistix:launchersupportframetier3_noelectro'})

    event.shaped(
        Item.of('ballistix:launchersupportframetier1'),
        [
            "AB",
            "A ",
            "AC"
        ],
        {
            "A": MATERIALS.STEEL.ingot,
            "C": Item.of('pneumaticcraft:compressed_stone'),
            "B": Item.of('sticky_piston'),
        }
    )

    event.shaped(
        Item.of('ballistix:launchersupportframetier2'),
        [
            "AB",
            "A ",
            "AC"
        ],
        {
            "A": MATERIALS.DESH.ingot,
            "C": Item.of('pneumaticcraft:compressed_stone'),
            "B": Item.of('sticky_piston'),
        }
    )

    event.shaped(
        Item.of('ballistix:launchersupportframetier3'),
        [
            "AB",
            "A ",
            "AC"
        ],
        {
            "A": MATERIALS.OSTRUM.ingot,
            "C": Item.of('pneumaticcraft:compressed_stone'),
            "B": Item.of('sticky_piston'),
        }
    )

    event.remove({id: 'ballistix:launchercontrolpaneltier3_noelectro'})
    event.shaped(
        Item.of('ballistix:launchercontrolpaneltier3'),
        [
            "DBB",
            "ACA",
            "AAA"
        ],
        {
            A: MATERIALS.STEEL.plate,
            B: Item.of('ae2:semi_dark_monitor'),
            C: Item.of('mekanism:ultimate_control_circuit'),
            D: Item.of('ducky-periphs:keyboard_block'),
        }
    )

    event.replaceInput({id: 'ballistix:turret_sam_noelectro'}, 'ballistix:launchercontrolpaneltier1', 'ballistix:launchercontrolpaneltier3')
    event.replaceInput({id: 'ballistix:turret_sam_noelectro'}, 'iron_ingot', 'superbwarfare:steel_barrel')
    event.replaceInput({id: 'ballistix:turret_sam_noelectro'}, 'copper_ingot', 'superbwarfare:cannon_core')
    event.replaceInput({id: 'ballistix:turret_sam_noelectro'}, 'redstone_block', 'mekanism:ultimate_control_circuit')

    event.replaceInput({id: 'ballistix:turret_ciws_noelectro'}, 'iron_ingot', MATERIALS.CONSTANTAN.ingot)
    event.replaceInput({id: 'ballistix:turret_ciws_noelectro'}, 'copper_ingot', 'superbwarfare:cannon_core')
    event.replaceInput({id: 'ballistix:turret_ciws_noelectro'}, 'redstone_block', 'ballistix:samturret')

    event.replaceInput({id: 'ballistix:turret_laser_noelectro'}, 'diamond', 'mekanism:ultimate_control_circuit')
    event.replaceInput({id: 'ballistix:turret_laser_noelectro'}, 'iron_ingot', MATERIALS.CONSTANTAN.gear)
    event.replaceInput({id: 'ballistix:turret_laser_noelectro'}, 'copper_ingot', 'superbwarfare:cannon_core')
    event.replaceInput({id: 'ballistix:turret_laser_noelectro'}, 'redstone_block', 'mekanism:laser')

    event.replaceInput({id: 'ballistix:turret_railgun_noelectro'}, 'diamond', 'mekanism:ultimate_control_circuit')
    event.replaceInput({id: 'ballistix:turret_railgun_noelectro'}, 'iron_ingot', MATERIALS.CONSTANTAN.gear)
    event.replaceInput({id: 'ballistix:turret_railgun_noelectro'}, 'copper_ingot', 'pneumaticcraft:cannon_barrel')
    event.replaceInput({id: 'ballistix:turret_railgun_noelectro'}, 'redstone_block', 'dysonsphere:railgun')
    event.replaceInput({id: 'ballistix:turret_railgun_noelectro'}, 'cobber_block', 'mekanism:advanced_energy_cube')

    event.replaceInput({id: 'ballistix:observer_noelectro'}, 'iron_ingot', MATERIALS.ALUMINUM.ingot)
    event.replaceInput({id: 'ballistix:airraidsiren_noelectro'}, 'iron_ingot', MATERIALS.ALUMINUM.ingot)
    event.remove({id: 'ballistix:rocketlauncher_noelectro'})
    event.smithing(
        Item.of('ballistix:rocketlauncher'),
        Item.of('superbwarfare:rpg_blueprint'), 
        Item.of('superbwarfare:rare_material_pack'),
        Item.of('ballistix:vls')                
    )

    event.remove({id: 'ballistix:sam_mark_1_noelectro'})
    event.shaped(
        Item.of('ballistix:aamissile'),
        [
            "A",
            "B",
            "C"
        ],
        {
            "A": Item.of('pneumaticcraft:logistics_core'),
            "B": Item.of('superbwarfare:he_head'),
            "C": Item.of('superbwarfare:missile_engine'),
        }
    )
    event.remove({id: 'ballistix:sam_mark_2_noelectro'})
    event.shaped(
        Item.of('ballistix:aamissilemk2'),
        [
            "A",
            "B",
            "C"
        ],
        {
            "A": Item.of('ducky-periphs:entity_detector_block'),
            "B": Item.of('superbwarfare:he_head'),
            "C": Item.of('superbwarfare:missile_engine'),
        }
    )

    event.replaceInput({id: 'ballistix:verticallaunchsilo_noelectro'}, 'ballistix:launchercontrolpaneltier1', 'ballistix:launchercontrolpaneltier3')
    event.replaceInput({id: 'ballistix:launcherplatformtier1_noelectro'}, 'iron_ingot', MATERIALS.EXTRATERRESTRIAL_STEEL.ingot)
    event.replaceInput({id: 'ballistix:launcherplatformtier1_noelectro'}, 'redstone', 'mekanism:elite_control_circuit')
    event.replaceInput({id: 'ballistix:launcherplatformtier2_noelectro'}, 'iron_ingot', MATERIALS.DESH.ingot)
    event.replaceInput({id: 'ballistix:launcherplatformtier2_noelectro'}, 'copper_ingot', 'mekanism:ultimate_control_circuit')
    event.replaceInput({id: 'ballistix:launcherplatformtier3_noelectro'}, 'iron_ingot', MATERIALS.OSTRUM.ingot)
    event.replaceInput({id: 'ballistix:launcherplatformtier3_noelectro'}, 'diamond', 'mekanism_extras:absolute_control_circuit')


    _make_components_by_material(MATERIALS.IRON, "iron")
    _make_components_by_material(MATERIALS.EXTRATERRESTRIAL_STEEL, "steel")
    _make_components_by_material(MATERIALS.NETHERITE, "netherite")
    _make_components_by_material(MATERIALS.CEMENTED_CARBIDE, "cemented_carbide")

    event.remove({id: 'superbwarfare:tungsten_rod'})
    assembly_drill(event, Item.of(MATERIALS.TUNGSTEN.ingot), Item.of('superbwarfare:tungsten_rod'))

    function _material_pack(name, circuit, pack) {
        event.remove({id: pack.getId()})
        event.shapeless(
            pack,
            [
                circuit,
                Item.of('superbwarfare:' + name + '_spring'),
                Item.of('superbwarfare:' + name + '_trigger'),
                Item.of('superbwarfare:' + name + '_barrel'),
                Item.of('superbwarfare:' + name + '_action'),
            ]
        )
    }

    _material_pack("iron", Item.of('mekanism:advanced_control_circuit'), Item.of('superbwarfare:common_material_pack'))
    _material_pack("steel", Item.of('mekanism:ultimate_control_circuit'), Item.of('superbwarfare:rare_material_pack'))
    _material_pack("netherite", Item.of('mekanism_extras:absolute_control_circuit'), Item.of('superbwarfare:epic_material_pack'))
    _material_pack("cemented_carbide", Item.of('mekanism_extras:cosmic_control_circuit'), Item.of('superbwarfare:legendary_material_pack'))

    function /** @param {Internal.Mob} result */ _machine(result, category, components) {
        const rs = []
        components.forEach(el => {
            rs.push(el.getCount() + el.getId())
        })

        event.remove({id: "superbwarfare:" + result})
        event.custom({
            "type": "superbwarfare:vehicle_assembling",
            "category": category,
            "inputs": rs,
            "result": {
                "entity": "superbwarfare:" + result
            }
        })
    }

    event.remove({id: 'superbwarfare:shortcut_pack'})
    event.shaped(
        Item.of('superbwarfare:shortcut_pack'),
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            A: Item.of('mekanism:pellet_antimatter'),
            B: Item.of('superbwarfare:epic_material_pack')
        }
    )

    event.remove({id: 'superbwarfare:cannon_core'})
    event.shaped(
        Item.of('superbwarfare:cannon_core'),
        [
            "AEA",
            "DBD",
            "ACA"
        ],
        {
            A: MATERIALS.ALUMINUM.plate,
            B: Item.of('pneumaticcraft:stone_base'),
            C: Item.of('mekanism:ultimate_control_circuit'),
            D: Item.of('pneumaticcraft:logistics_core'),
            E: Item.of('superbwarfare:steel_barrel')
        }
    )

    event.remove({id: 'superbwarfare:track'})
    event.shaped(
        Item.of('superbwarfare:track'),
        [
            "AAA",
            "BBB",
            "AAA"
        ],
        {
            A: MATERIALS.STEEL.plate,
            B: Item.of('superbwarfare:wheel')
        }
    )

    _machine(
        "speedboat",
        "water",
        [
            Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.block, 3),
            Item.of(MATERIALS.ALUMINUM.block, 3),
            Item.of(MATERIALS.ZINC.plate, 10),
            Item.of('superbwarfare:m_2_hb'),
            Item.of('superbwarfare:small_battery_pack'),
            Item.of('mekanismgenerators:turbine_blade'),
            Item.of('superbwarfare:motor'),
            Item.of('mekanism:ultimate_control_circuit'),
        ]
    )
    _machine(
        "a_10a",
        "aircraft",
        [
            Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.block, 2),
            Item.of(MATERIALS.ALUMINUM.block, 12),
            Item.of('superbwarfare:large_battery_pack'),
            Item.of('superbwarfare:large_propeller', 2),
            Item.of('superbwarfare:large_motor', 2),
            Item.of('mekanism:ultimate_control_circuit'),
            Item.of('superbwarfare:light_armament_module', 4),
            Item.of('superbwarfare:wheel', 3),
        ]
    )

    _machine(
        "ah_6",
        "aircraft",
        [
            Item.of(MATERIALS.ALUMINUM.block, 6),
            Item.of('superbwarfare:medium_battery_pack'),
            Item.of('superbwarfare:large_propeller', 1),
            Item.of('mekanismgenerators:turbine_blade', 1),
            Item.of('superbwarfare:large_motor', 1),
            Item.of('superbwarfare:motor', 1),
            Item.of('superbwarfare:medium_armament_module', 2)
        ]
    )

    _machine(
        "type_63",
        "defense",
        [
            Item.of(MATERIALS.ALUMINUM.ingot, 6),
            Item.of('pneumaticcraft:cannon_barrel', 12),
            Item.of('pneumaticcraft:stone_base', 1),
            Item.of(MATERIALS.CONSTANTAN.gear, 5),
            Item.of('superbwarfare:wheel', 2),
        ]
    )
    
    _machine(
        "laser_tower",
        "defense",
        [
            Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.ingot, 10),
            Item.of('superbwarfare:small_battery_pack'),
            Item.of('mekanism_turrets:advanced_laser_turret', 2),
            Item.of('superbwarfare:cannon_core', 1),
            Item.of(MATERIALS.CONSTANTAN.gear, 5),
            Item.of('superbwarfare:wheel', 2),
            Item.of('mekanism_extras:absolute_control_circuit')
        ]
    )

    _machine(
        "annihilator",
        "defense",
        [
            Item.of(MATERIALS.STELLARIUM.ingot, 8),
            Item.of('mekanism:supercharged_coil', 3),
            Item.of('mekanism_extras:cosmic_energy_cube', 3),
            Item.of('bfr:fusion_reactor_frame', 16),
            Item.of('mekanism_extras:infinite_control_circuit', 3),
            Item.of('superbwarfare:annihilator_blueprint'),
            Item.of('superbwarfare:large_motor'),
            
        ]
    )

    _machine(
        "waveforce_tower",
        "defense",
        [
            Item.of(MATERIALS.STELLARIUM.plate, 2),
            Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.block, 4),
            Item.of(MATERIALS.CEMENTED_CARBIDE.block, 4),
            Item.of('mekanism:supercharged_coil', 1),
            Item.of('mekanism_extras:absolute_energy_cube', 1),
            Item.of('bfr:fusion_reactor_frame', 5),
            Item.of('mekanism_extras:infinite_control_circuit'),
            Item.of('superbwarfare:large_motor'),
            Item.of('superbwarfare:cannon_core'),
        ]
    )

    _machine(
        "lav_150",
        "land",
        [
            Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.block, 4),
            Item.of(MATERIALS.ALUMINUM.block, 2),
            Item.of(MATERIALS.CLOGGRUM.ingot, 8),
            
            Item.of('superbwarfare:light_armament_module', 1),
            Item.of('superbwarfare:medium_battery_pack', 1),
            Item.of('superbwarfare:motor', 4),
            Item.of('superbwarfare:wheel', 4),            
        ]
    )
    _machine( 
        "bmp_2",
        "land",
        [
            Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.block, 7),
            Item.of(MATERIALS.ALUMINUM.block, 3),
            Item.of(MATERIALS.CLOGGRUM.block, 2),
            
            Item.of('superbwarfare:medium_armament_module', 2),
            Item.of('superbwarfare:medium_battery_pack', 1),
            Item.of('superbwarfare:large_motor', 2),
            Item.of('superbwarfare:track', 2),            
        ]
    )
    _machine(
        "prism_tank",
        "land",
        [
            Item.of(MATERIALS.CEMENTED_CARBIDE.block, 10),
            Item.of(MATERIALS.CLOGGRUM.block, 5),
            Item.of(MATERIALS.STELLARIUM.plate, 8),
            
            Item.of('mekanism:supercharged_coil', 1),
            Item.of('superbwarfare:heavy_armament_module', 1),
            Item.of('superbwarfare:large_battery_pack', 4),
            Item.of('superbwarfare:large_motor', 8),
            Item.of('superbwarfare:track', 2), 
        ]
    )
    _machine(
        "yx_100",
        "land",
        [
            Item.of(MATERIALS.CEMENTED_CARBIDE.block, 20),
            Item.of(MATERIALS.CLOGGRUM.block, 10),
            Item.of(MATERIALS.STELLARIUM.block, 3),
            
            Item.of('mekanism_extras:infinite_control_circuit', 2),
            Item.of('superbwarfare:heavy_armament_module', 3),
            Item.of('superbwarfare:large_battery_pack', 2),
            Item.of('superbwarfare:large_motor', 8),
            Item.of('superbwarfare:track', 2), 
        ]
    )
})


