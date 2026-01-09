// priority: 0


ServerEvents.recipes(event => {
    event.remove({id: 'megacells:transform/sky_steel_ingot'})
    event.remove({id: 'ae2:network/blocks/crystal_processing_charger'})
    event.shaped(
        Item.of('ae2:charger', 1), 
        [
            'BCB',
            'B  ',
            'BAB'
        ],
        {
            A: Item.of('pncepcb:primitive_finished_pcb'),
            B: Item.of('minecraft:iron_ingot'),
            C: Item.of('ae2:certus_quartz_crystal')
        }
    )
    event.remove({id: 'ae2:network/blocks/inscribers'})
    event.shaped(
        Item.of('ae2:inscriber', 1), 
        [
            'BCB',
            'A A',
            'BDB'
        ],
        {
            A: Item.of('pncepcb:primitive_finished_pcb'),
            B: Item.of('minecraft:iron_ingot'),
            C: Item.of('minecraft:piston'),
            D: Item.of('pneumaticcraft:compressed_iron_block')
        }
    )

    event.remove({id: 'appliedpneumatics:assembly/flaw_budding_quartz_to_flawless_budding_quartz'})

    event.replaceInput({mod: "ae2_mega_things"}, 'redstone', 'mekanism_extras:cosmic_control_circuit')
    event.replaceInput({mod: "ae2_mega_things"}, 'netherite_ingot', 'thermalendergy:stellarium_ingot')
    event.replaceInput({mod: "ae2things"}, 'redstone', 'mekanism_extras:supreme_control_circuit')
    event.replaceInput({mod: "ae2things"}, 'netherite_ingot', 'thermalendergy:stellarium_ingot')

    let ae2_aluminum_network = (recipe, from, to) => {
        event.replaceInput(
        { id: "ae2:network/" + recipe },
            from,
            to
        );
        event.replaceInput(
        { id: "ae2:network/" + recipe },
            MATERIALS.REDSTONE.ingot,
            'pncepcb:crystal_clear_finished_pcb'
        );
    };
    let chae2_aluminum_network = (recipe, from, to, component) => {
      if (component == null) { 
          event.replaceInput(
          { id: "appmek:" + recipe },
              from,
              to
          );
          event.replaceInput(
          { id: "appmek:" + recipe },
              MATERIALS.REDSTONE.ingot,
              'pncepcb:crystal_clear_finished_pcb'
          );
      } else {
        event.shaped(
          Item.of("appmek:" + recipe),
          [
            "BAB",
            "ACA",
            "DDD"
          ],
          {
            A: Item.of("pncepcb:crystal_clear_finished_pcb"),
            B: Item.of('ae2:quartz_glass'),
            C: component,
            D: Item.of(to)
          }
        )
      }
    };
    let mae2_aluminum_network = (recipe, from, to) => {
        event.replaceInput(
        { id: "megacells:" + recipe },
            from,
            to
        );
       event.replaceInput(
        { id: "megacells:" + recipe },
            'ae2:quartz_vibrant_glass',
            'pncepcb:crystal_clear_finished_pcb'
        );
    };

    ae2_aluminum_network("cells/spatial_storage_cell_2_cubed", MATERIALS.IRON.ingot, MATERIALS.ALUMINUM.ingot);
    ae2_aluminum_network("cells/spatial_storage_cell_16_cubed", MATERIALS.IRON.ingot, MATERIALS.ALUMINUM.ingot);
    ae2_aluminum_network("cells/spatial_storage_cell_128_cubed", MATERIALS.IRON.ingot, MATERIALS.ALUMINUM.ingot);

    ae2_aluminum_network("cells/item_cell_housing", MATERIALS.IRON.ingot, MATERIALS.ALUMINUM.ingot);
    ae2_aluminum_network("cells/item_storage_cell_1k", MATERIALS.IRON.ingot, MATERIALS.ALUMINUM.ingot);
    ae2_aluminum_network("cells/item_storage_cell_4k", MATERIALS.IRON.ingot, MATERIALS.ALUMINUM.ingot);
    ae2_aluminum_network("cells/item_storage_cell_16k", MATERIALS.IRON.ingot, MATERIALS.ALUMINUM.ingot);
    ae2_aluminum_network("cells/item_storage_cell_64k", MATERIALS.IRON.ingot, MATERIALS.ALUMINUM.ingot);
    ae2_aluminum_network("cells/item_storage_cell_256k", MATERIALS.IRON.ingot, MATERIALS.ALUMINUM.ingot);

    mae2_aluminum_network("cells/mega_item_cell_housing", MATERIALS.SKY_STEEL.ingot, MATERIALS.ALUMINUM.ingot);
    mae2_aluminum_network("cells/item_storage_cell_1m", MATERIALS.SKY_STEEL.ingot, MATERIALS.ALUMINUM.ingot);
    mae2_aluminum_network("cells/item_storage_cell_4m", MATERIALS.SKY_STEEL.ingot, MATERIALS.ALUMINUM.ingot);
    mae2_aluminum_network("cells/item_storage_cell_16m", MATERIALS.SKY_STEEL.ingot, MATERIALS.ALUMINUM.ingot);
    mae2_aluminum_network("cells/item_storage_cell_64m", MATERIALS.SKY_STEEL.ingot, MATERIALS.ALUMINUM.ingot);
    mae2_aluminum_network("cells/item_storage_cell_256m", MATERIALS.SKY_STEEL.ingot, MATERIALS.ALUMINUM.ingot);

    ae2_aluminum_network("cells/fluid_cell_housing", MATERIALS.COPPER.ingot, MATERIALS.MAGNESIUM.ingot);
    ae2_aluminum_network("cells/fluid_storage_cell_1k", MATERIALS.COPPER.ingot, MATERIALS.MAGNESIUM.ingot);
    ae2_aluminum_network("cells/fluid_storage_cell_4k", MATERIALS.COPPER.ingot, MATERIALS.MAGNESIUM.ingot);
    ae2_aluminum_network("cells/fluid_storage_cell_16k", MATERIALS.COPPER.ingot, MATERIALS.MAGNESIUM.ingot);
    ae2_aluminum_network("cells/fluid_storage_cell_64k", MATERIALS.COPPER.ingot, MATERIALS.MAGNESIUM.ingot);
    ae2_aluminum_network("cells/fluid_storage_cell_256k", MATERIALS.COPPER.ingot, MATERIALS.MAGNESIUM.ingot);

    mae2_aluminum_network("cells/mega_fluid_cell_housing", MATERIALS.SKY_STEEL.ingot, MATERIALS.MAGNESIUM.ingot);
    mae2_aluminum_network("cells/fluid_storage_cell_1m", MATERIALS.SKY_STEEL.ingot, MATERIALS.MAGNESIUM.ingot);
    mae2_aluminum_network("cells/fluid_storage_cell_4m", MATERIALS.SKY_STEEL.ingot, MATERIALS.MAGNESIUM.ingot);
    mae2_aluminum_network("cells/fluid_storage_cell_16m", MATERIALS.SKY_STEEL.ingot, MATERIALS.MAGNESIUM.ingot);
    mae2_aluminum_network("cells/fluid_storage_cell_64m", MATERIALS.SKY_STEEL.ingot, MATERIALS.MAGNESIUM.ingot);
    mae2_aluminum_network("cells/fluid_storage_cell_256m", MATERIALS.SKY_STEEL.ingot, MATERIALS.MAGNESIUM.ingot);

    chae2_aluminum_network("chemical_cell_housing", MATERIALS.OSMIUM.ingot, MATERIALS.PLATINUM.ingot, null);
    chae2_aluminum_network("chemical_storage_cell_1k", MATERIALS.OSMIUM.ingot, MATERIALS.PLATINUM.ingot, Item.of('ae2:cell_component_1k'));
    chae2_aluminum_network("chemical_storage_cell_4k", MATERIALS.OSMIUM.ingot, MATERIALS.PLATINUM.ingot), Item.of('ae2:cell_component_4k');
    chae2_aluminum_network("chemical_storage_cell_16k", MATERIALS.OSMIUM.ingot, MATERIALS.PLATINUM.ingot, Item.of('ae2:cell_component_16k'));
    chae2_aluminum_network("chemical_storage_cell_64k", MATERIALS.OSMIUM.ingot, MATERIALS.PLATINUM.ingot, Item.of('ae2:cell_component_64k'));
    chae2_aluminum_network("chemical_storage_cell_256k", MATERIALS.OSMIUM.ingot, MATERIALS.PLATINUM.ingot, Item.of('ae2:cell_component_256k'));

    mae2_aluminum_network("cells/mega_chemical_cell_housing", MATERIALS.OSMIUM.ingot, MATERIALS.PLATINUM.ingot);
    mae2_aluminum_network("cells/chemical_storage_cell_1m", MATERIALS.OSMIUM.ingot, MATERIALS.PLATINUM.ingot);
    mae2_aluminum_network("cells/chemical_storage_cell_4m", MATERIALS.OSMIUM.ingot, MATERIALS.PLATINUM.ingot);
    mae2_aluminum_network("cells/chemical_storage_cell_16m", MATERIALS.OSMIUM.ingot, MATERIALS.PLATINUM.ingot);
    mae2_aluminum_network("cells/chemical_storage_cell_64m", MATERIALS.OSMIUM.ingot, MATERIALS.PLATINUM.ingot);
    mae2_aluminum_network("cells/chemical_storage_cell_256m", MATERIALS.OSMIUM.ingot, MATERIALS.PLATINUM.ingot);

    event.custom({
        "type": "thermal:press",
        "ingredients": [
            {
                "item": Item.of('ae2:silicon').getId()
            },
            {
                "item": Item.of('ae2:silicon_press').getId()
            }
        ],
        "result": [
            {
                "item": Item.of('ae2:printed_silicon').getId(),
                "count": 1
            }
        ],
        "energy": 800
    })

    function proccessor_recipe(source, press, printed, result) {
        event.custom({
            "type": "thermal:press",
            "ingredients": [
                {
                    "item": Item.of(source).getId()
                },
                {
                    "item": Item.of(press).getId()
                }
            ],
            "result": [
                {
                    "item": Item.of(printed).getId(),
                    "count": 1
                }
            ],
            "energy": 800
        })
        event.custom({
            "type": "mekanism:combining",
            "extraInput": {
                "ingredient": {
                "item": Item.of(printed).getId(),
                }
            },
            "mainInput": {
                "amount": 1,
                "ingredient": {
                    "item": Item.of('ae2:printed_silicon').getId(),
                }
            },
            "output": {
                "item": Item.of(result).getId(),
            }
        })

        event.custom({
            "type": "mekanism:combining",
            "extraInput": {
                "ingredient": {
                "item": Item.of(printed).getId(),
                }
            },
            "mainInput": {
                "amount": 1,
                "ingredient": {
                    "item": Item.of('chemlib:bismuth_plate').getId(),
                }
            },
            "output": {
                "item": Item.of(result).getId(),
                "count": 2
            }
        })

    }
    proccessor_recipe('gold_ingot', 'ae2:logic_processor_press', 'ae2:printed_logic_processor', 'ae2:logic_processor')
    proccessor_recipe('ae2:certus_quartz_crystal', 'ae2:calculation_processor_press', 'ae2:printed_calculation_processor', 'ae2:calculation_processor')
    proccessor_recipe('diamond', 'ae2:engineering_processor_press', 'ae2:printed_engineering_processor', 'ae2:engineering_processor')
    proccessor_recipe('megacells:sky_steel_ingot', 'megacells:accumulation_processor_press', 'megacells:printed_accumulation_processor', 'megacells:accumulation_processor')

    event.replaceInput({id: 'ae2:network/crafting/molecular_assembler'}, 'iron_ingot', 'mekanism:teleportation_core')
    event.replaceInput({id: 'ae2:network/crafting/molecular_assembler'}, 'crafting_table', 'thermal:machine_crafter')
    event.replaceInput({id: 'ae2:network/blocks/storage_drive'}, 'ae2:engineering_processor', 'mekanism:ultimate_control_circuit')
    event.replaceInput({id: 'ae2:network/blocks/storage_drive'}, 'iron_ingot', MATERIALS.ALUMINUM.ingot)

    event.replaceInput({id: 'ae2:materials/basiccard'}, 'redstone', 'pneumaticcraft:module_expansion_card')
    event.replaceInput({id: 'ae2:materials/advancedcard'}, 'redstone', 'pneumaticcraft:module_expansion_card')
    event.replaceInput({id: 'ae2:materials/advancedcard'}, 'diamond', 'mekanism:alloy_reinforced')

    event.replaceInput({id: 'ae2:tools/network_memory_card'}, 'redstone', 'pncepcb:crystal_clear_finished_pcb')
    event.replaceInput({mod: 'ae2'}, 'gold_ingot', MATERIALS.ELECTRUM.ingot)
    event.replaceInput({mod: 'ae2'}, 'iron_ingot', MATERIALS.PLASTIC.ingot)

    event.replaceInput({id: 'ae2:materials/cardredstone'}, 'redstone', 'pneumaticcraft:logistics_core')
    event.replaceInput({id: 'ae2:materials/cardcapacity'}, 'ae2:certus_quartz_crystal', 'pncepcb:crystal_clear_finished_pcb')
    event.remove({id: 'ae2:materials/cardvoid'})
    event.shapeless(Item.of('ae2:void_card', 1), 
        [
            Item.of('ae2:basic_card'),
            Item.of('ae2:fluix_pearl')
        ]
    )

    event.remove({id: 'ae2:materials/cardfuzzy'})
    event.shapeless(Item.of('ae2:fuzzy_card', 1), 
        [
            Item.of('ae2:basic_card'),
            Item.of('pneumaticcraft:search_upgrade')
        ]
    )

    event.remove({id: 'ae2:materials/cardcrafting'})
    event.shapeless(Item.of('ae2:crafting_card', 1), 
        [
            Item.of('ae2:advanced_card'),
            Item.of('mekanism:crafting_formula')
        ]
    )

    event.remove({id: 'ae2:materials/cardspeed'})
    event.shapeless(Item.of('ae2:speed_card', 1), 
        [
            Item.of('ae2:advanced_card'),
            Item.of('pneumaticcraft:speed_upgrade')
        ]
    )

    event.remove({id: 'ae2:materials/cardinverter'})
    event.shapeless(Item.of('ae2:inverter_card', 2), 
        [
            Item.of('ae2:advanced_card'),
            Item.of('ae2:fuzzy_card')
        ]
    )

    event.remove({id: 'ae2:materials/carddistribution'})
    event.shapeless(Item.of('ae2:equal_distribution_card', 1), 
        [
            Item.of('ae2:advanced_card'),
            Item.of('pncepcb:crystal_clear_finished_pcb')
        ]
    )

    event.remove({id: 'megacells:crafting/compression_card'})
    event.shapeless(Item.of('megacells:compression_card', 1), 
        [
            Item.of('ae2:advanced_card'),
            Item.of('thermal:press_packing_2x2_die')
        ]
    )
    event.shapeless(Item.of('megacells:compression_card', 1), 
        [
            Item.of('ae2:advanced_card'),
            Item.of('thermal:press_packing_3x3_die')
        ]
    )

    event.remove({id: 'ae2wtlib:quantum_bridge_card'})
    event.shaped(
        Item.of('ae2wtlib:quantum_bridge_card', 1), 
        [
            'BBC',
            'DEC',
            'BAB'
        ],
        {
            A: Item.of('ae2:advanced_card'),
            B: Item.of(MATERIALS.PLASTEEL.ingot),
            C: Item.of('ae2:fluix_pearl'),
            D: Item.of('ae2:wireless_receiver'),
            E: Item.of('pncepcb:crystal_clear_finished_pcb')
        }
    )

    event.remove({id: 'ae2wtlib:magnet_card'})
    event.shaped(
        Item.of('ae2wtlib:magnet_card', 1), 
        [
            'BDB',
            'DED',
            'DAD'
        ],
        {
            A: Item.of('ae2:advanced_card'),
            B: Item.of(MATERIALS.NEODYMIUM.ingot),
            D: Item.of(MATERIALS.PLASTEEL.ingot),
            E: Item.of('pncepcb:crystal_clear_finished_pcb')
        }
    )
    event.shaped(
        Item.of('ae2wtlib:magnet_card', 1), 
        [
            'BDB',
            'DED',
            'DAD'
        ],
        {
            A: Item.of('ae2:advanced_card'),
            B: Item.of(MATERIALS.MIDNIGHT_IRON.ingot),
            D: Item.of(MATERIALS.PLASTEEL.ingot),
            E: Item.of('pncepcb:crystal_clear_finished_pcb')
        }
    )
    event.shaped(
        Item.of('ae2wtlib:magnet_card', 1), 
        [
            'BDB',
            'DED',
            'DAD'
        ],
        {
            A: Item.of('ae2:advanced_card'),
            B: Item.of('chemlib:magnetite_dust'),
            D: Item.of(MATERIALS.PLASTEEL.ingot),
            E: Item.of('pncepcb:crystal_clear_finished_pcb')
        }
    )

    event.replaceInput({id: 'ae2:network/blocks/spatial_anchor'}, 'ae2:engineering_processor', 'mekanism_extras:supreme_control_circuit')
    event.replaceInput({id: 'ae2:network/blocks/spatial_io_port'}, 'ae2:engineering_processor', 'mekanism_extras:supreme_control_circuit')
    event.replaceInput({id: 'ae2:network/blocks/spatial_io_port'}, 'ae2:fluix_glass_cable', 'ae2:spatial_anchor')

    event.replaceInput({mod: 'ae2wtlib'}, 'ae2:engineering_processor', 'mekanism_extras:absolute_control_circuit')
    event.replaceInput({mod: 'ae2'}, 'ae2:engineering_processor', 'mekanism_extras:absolute_control_circuit')
    event.replaceInput({mod: 'ae2'}, 'ae2:logic_processor', 'mekanism:elite_control_circuit')
    event.replaceInput({mod: 'ae2'}, 'ae2:calculation_processor', 'mekanism:basic_control_circuit')

    event.replaceInput({mod: 'megacells'}, 'ae2:engineering_processor', 'mekanism_extras:absolute_control_circuit')
    event.replaceInput({mod: 'megacells'}, 'ae2:logic_processor', 'mekanism:elite_control_circuit')
    event.replaceInput({mod: 'megacells'}, 'ae2:calculation_processor', 'mekanism:basic_control_circuit')
    event.replaceInput({mod: 'megacells'}, 'megacells:accumulation_processor', 'mekanism_extras:cosmic_control_circuit')

    event.replaceInput({mod: 'ae2_mega_things'}, 'megacells:accumulation_processor', 'mekanism_extras:cosmic_control_circuit')

    event.replaceInput({id: 'mekanism:qio_dashboard'}, 'glass_pane', 'ae2:crafting_terminal')
    event.replaceInput({id: 'mekanism:qio_drive_array'}, 'mekanism:ultimate_control_circuit', 'mekanism_extras:supreme_control_circuit')
    event.replaceInput({id: 'mekanism:qio_drive_array'}, '#mekanism:personal_storage', 'ae2:drive')
    
    event.replaceInput({id: 'mekanism:qio_drive_base'}, 'mekanism:pellet_polonium', 'ae2:cell_component_16k')
    
    const drives = [
        ['mekanism:qio_drive_hyper_dense', 'ae2:cell_component_64k'],
        ['mekanism:qio_drive_time_dilating', 'ae2:cell_component_256k'],
        ['mekanism:qio_drive_supermassive', 'megacells:cell_component_1m'],
        ['mekanism_extras:qio_drive_collapse', 'megacells:cell_component_4m'],
        ['mekanism_extras:qio_drive_gamma', 'megacells:cell_component_16m'],
        ['mekanism_extras:qio_drive_black_hole', 'megacells:cell_component_64m'],
        ['mekanism_extras:qio_drive_singularity', 'megacells:cell_component_256m'],
    ]
    let prev = 'mekanism:qio_drive_base'
    drives.forEach(value => {
        event.remove({id: value[0]})
        event.shaped(
        Item.of(value[0], 1), 
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: Item.of(MATERIALS.LEAD.ingot),
                B: Item.of(prev),
                C: Item.of(value[1]),
            }
        )
        prev = value[0]
    })

    // event.replaceInput({id: 'mekanism:qio_drive_hyper_dense'}, 'diamond', 'ae2:cell_component_64k')
    // event.replaceInput({id: 'mekanism:qio_drive_time_dilating'}, 'emerald', 'ae2:cell_component_256k')
    // event.replaceInput({id: 'mekanism:qio_drive_supermassive'}, 'mekanism:pellet_antimatter', 'megacells:cell_component_1m')
    
    // event.replaceInput({id: 'mekanism_extras:qio_drive_collapse'}, 'mekanism:pellet_antimatter', 'megacells:cell_component_4m')
    // event.replaceInput({id: 'mekanism_extras:qio_drive_gamma'}, 'mekanism:pellet_antimatter', 'megacells:cell_component_16m')
    // event.replaceInput({id: 'mekanism_extras:qio_drive_black_hole'}, 'mekanism:pellet_antimatter', 'megacells:cell_component_64m')
    // event.replaceInput({id: 'mekanism_extras:qio_drive_singularity'}, 'mekanism:pellet_antimatter', 'megacells:cell_component_256m')

    event.remove({id: 'ae2:network/crafting/patterns_blank'})
    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "a": {
          "item": "ae2:quartz_glass"
        },
        "b": {
          "tag": "ae2:all_cetrus_quartz"
        },
        "c": {
          "item": Item.of('mekanism:crafting_formula').getId()
        },
        "d": {
          "tag": "forge:ingots/iron"
        }
      },
      "pattern": [
        "aba",
        "bcb",
        "ddd"
      ],
      "result": {
        "count": 1,
        "item": "ae2:blank_pattern"
      },
      "show_notification": true
    })

    event.replaceInput({mod: 'ae2'}, 'crafting_table', 'mekanism:crafting_formula')

    event.remove({id:'mekanism:compat/ae2/fluix_crystal_to_dust'})
    event.remove({id:'mekanism:compat/ae2/certus_crystal_to_dust'})
    
    event.custom({
      "type": "mekanism:crushing",
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid": "ae2"
        }
      ],
      "input": {
        "ingredient": {
          "tag": "ae2:fluix_crystal"
        }
      },
      "output": {
        "item": "ae2:fluix_dust",
        "count": 2
      }
    })

    event.custom({
      "type": "mekanism:crushing",
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid": "ae2"
        }
      ],
      "input": {
        "ingredient": {
          "tag": "forge:gems/certus_quartz"
        }
      },
      "output": {
        "item": "ae2:certus_quartz_dust",
        "count": 2
      }
    })

    event.remove({id: 'ae2:charger/charged_certus_quartz_crystal'})
    event.custom({
      "type": "mekanism:enriching",
      "input": {
        "ingredient": {
          "item": Item.of('ae2:certus_quartz_crystal').getId()
        }
      },
      "output": {
        "count": 1,
        "item": Item.of('ae2:charged_certus_quartz_crystal').getId()
      }
    })

    event.custom({
      "type": "mekanism:enriching",
      "input": {
        "ingredient": {
          "item": Item.of('ae2:quartz_block').getId()
        }
      },
      "output": {
        "count": 1,
        "item": Item.of('ae2:damaged_budding_quartz').getId()
      }
    })

    event.custom({
      "type": "mekanism:enriching",
      "input": {
        "ingredient": {
          "item": Item.of('ae2:damaged_budding_quartz').getId()
        }
      },
      "output": {
        "count": 1,
        "item": Item.of('ae2:chipped_budding_quartz').getId()
      }
    })

    event.custom({
      "type": "mekanism:enriching",
      "input": {
        "ingredient": {
          "item": Item.of('ae2:chipped_budding_quartz').getId()
        }
      },
      "output": {
        "count": 1,
        "item": Item.of('ae2:flawed_budding_quartz').getId()
      }
    })

    event.remove({id: 'ae2:transform/certus_quartz_crystals'})
    event.remove({id: 'ae2:transform/fluix_crystal'})
    event.remove({id: 'ae2:transform/fluix_crystals'})

    event.custom({
      "type": "thermal:crystallizer",
      "ingredients": [
        {
          "fluid": Fluid.of('kubejs:silicon_dioxide').getId(),
          "amount": 1000.0
        },
        {
          "item": Item.of('ae2:certus_quartz_dust').getId(),
          "count": 1.0
        }, 
        {
            "item": Item.of('ae2:charged_certus_quartz_crystal').getId(),
            "count": 1
        }
      ],
      "result": [
        {
          "item": Item.of("ae2:certus_quartz_crystal").getId(),
          "count": 2.0
        }
      ],
      "energy": 40000
    })

    event.custom({
      "type": "thermal:crystallizer",
      "ingredients": [
        {
          "fluid": MATERIALS.REDSTONE.fluid,
          "amount": 1000
        },
        {
          "item": Item.of('quartz').getId(),
          "count": 1
        }, 
        {
            "item": Item.of('ae2:charged_certus_quartz_crystal').getId(),
            "count": 1
        }
      ],
      "result": [
        {
          "item": Item.of("ae2:fluix_crystal").getId(),
          "count": 2
        }
      ],
      "energy": 20000
    })


    event.custom({
      "type": "dysonsphere:laser_crafting",
      "input": {
        "item": Item.of('ae2:flawed_budding_quartz').getId()
      },
      "inputEnergy": 500000000,
      "output": {
        "item": Item.of('ae2:flawless_budding_quartz').getId()
      }
    })

    event.replaceInput({id: 'ae2:network/parts/energy_acceptor'}, 'copper_ingot', 'thermal:energy_cell_frame')
    event.replaceInput({id: 'ae2:network/blocks/crystal_processing_growth_accelerator'}, 'ae2:fluix_block', 'clanginghowl:crystal_former')
})