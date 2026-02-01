// priority: 0

ServerEvents.recipes(event => {
    console.log("ad astra recipes loading...")

    event.remove({id: 'ad_astra:rocket_nose_cone'})
    event.shaped(
        Item.of('ad_astra:rocket_nose_cone'),
        [
            " A ",
            "ACA",
            "ABA"
        ],
        {
            A: Item.of('dysonsphere:heat_shielding'),
            B: Item.of('pncepcb:high_temp_finished_pcb'),
            C: Item.of('pneumaticcraft:universal_sensor')
        }
    )
    
    event.remove({id: 'ad_astra:steel_tank'})
    event.shaped(
        Item.of('ad_astra:steel_tank'),
        [
            "CAB",
            "D D",
            "BDC"
        ],
        {
            A: Item.of('pneumaticcraft:plastic_bucket'),
            B: Item.of(MATERIALS.GOLD.plate),
            C: Item.of(MATERIALS.TITANIUM.plate),
            D: Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.plate)
        }
    )

    event.remove({id: 'ad_astra:desh_tank'})
    event.shaped(
        Item.of('ad_astra:desh_tank'),
        [
            "CAB",
            "D D",
            "BDC"
        ],
        {
            A: Item.of('pneumaticcraft:plastic_bucket'),
            B: Item.of(MATERIALS.GOLD.plate),
            C: Item.of(MATERIALS.TITANIUM.plate),
            D: Item.of(MATERIALS.DESH.plate)
        }
    )

    event.remove({id: 'ad_astra:ostrum_tank'})
    event.shaped(
        Item.of('ad_astra:ostrum_tank'),
        [
            "CAB",
            "D D",
            "BDC"
        ],
        {
            A: Item.of(MATERIALS.PLASTEEL.plate),
            B: Item.of(MATERIALS.PLATINUM.plate),
            C: Item.of(MATERIALS.CLOGGRUM.plate),
            D: Item.of(MATERIALS.OSTRUM.plate)
        }
    )

    event.remove({id: 'ad_astra:calorite_tank'})
    event.shaped(
        Item.of('ad_astra:calorite_tank'),
        [
            "CAB",
            "D D",
            "BDC"
        ],
        {
            A: Item.of(MATERIALS.PLASTEEL.plate),
            B: Item.of(MATERIALS.PLATINUM.plate),
            C: Item.of(MATERIALS.CLOGGRUM.plate),
            D: Item.of(MATERIALS.CALORITE.plate)
        }
    )


    event.remove({id: 'ad_astra:engine_frame'})
    event.shaped(
        Item.of('ad_astra:engine_frame'),
        [
            "CDB",
            "D D",
            "BDC"
        ],
        {
            B: Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.plate),
            C: Item.of(MATERIALS.CLOGGRUM.plate),
            D: Item.of(MATERIALS.CHROMIUM.plate)
        }
    )

    event.remove({id: 'ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench'})
    event.custom({
      "type": "ad_astra:nasa_workbench",
      "ingredients": [
        {
          "item": "ad_astra:rocket_nose_cone"
        },
        {
          "item": "mekanism:steel_casing"
        },
        {
          "item": "mekanism:steel_casing"
        },
        {
          "item": MATERIALS.TITANIUM.block
        },
        {
          "item": MATERIALS.TITANIUM.block
        },
        {
          "item": "mekanism:steel_casing"
        },
        {
          "item": "mekanism:steel_casing"
        },
        {
          "item": "ad_astra:rocket_fin"
        },
        {
          "item": "ad_astra:steel_tank"
        },
        {
          "item": "ad_astra:steel_tank"
        },
        {
          "item": "ad_astra:rocket_fin"
        },
        {
          "item": "ad_astra:rocket_fin"
        },
        {
          "item": "ad_astra:steel_engine"
        },
        {
          "item": "ad_astra:rocket_fin"
        }
      ],
      "result": {
        "count": 1,
        "id": "ad_astra:tier_1_rocket"
      }
    })

    event.remove({id: 'ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench'})
    event.custom({
      "type": "ad_astra:nasa_workbench",
      "ingredients": [
        {
          "item": "ad_astra:rocket_nose_cone"
        },
        {
          "item": MATERIALS.TITANIUM.block
        },
        {
          "item": MATERIALS.TITANIUM.block
        },
        {
          "tag": "ad_astra:desh_blocks"
        },
        {
          "tag": "ad_astra:desh_blocks"
        },
        {
          "item": MATERIALS.TITANIUM.block
        },
        {
          "item": MATERIALS.TITANIUM.block
        },
        {
          "item": "ad_astra:rocket_fin"
        },
        {
          "item": "ad_astra:desh_tank"
        },
        {
          "item": "ad_astra:desh_tank"
        },
        {
          "item": "ad_astra:rocket_fin"
        },
        {
          "item": "ad_astra:rocket_fin"
        },
        {
          "item": "ad_astra:desh_engine"
        },
        {
          "item": "ad_astra:rocket_fin"
        }
      ],
      "result": {
        "count": 1,
        "id": "ad_astra:tier_2_rocket"
      }
    })

    event.remove({id: 'ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench'})
    event.custom({
      "type": "ad_astra:nasa_workbench",
      "ingredients": [
        {
          "item": "ad_astra:rocket_nose_cone"
        },
        {
          "item": MATERIALS.CLOGGRUM.block
        },
        {
          "item": MATERIALS.CLOGGRUM.block
        },
        {
          "item": MATERIALS.CLOGGRUM.block
        },
        {
          "item": MATERIALS.CLOGGRUM.block
        },
        {
          "item": MATERIALS.CLOGGRUM.block
        },
        {
          "item": MATERIALS.CLOGGRUM.block
        },
        {
          "item": "ad_astra:rocket_fin"
        },
        {
          "item": "ad_astra:ostrum_tank"
        },
        {
          "item": "ad_astra:ostrum_tank"
        },
        {
          "item": "ad_astra:rocket_fin"
        },
        {
          "item": "ad_astra:rocket_fin"
        },
        {
          "item": "ad_astra:ostrum_engine"
        },
        {
          "item": "ad_astra:rocket_fin"
        }
      ],
      "result": {
        "count": 1,
        "id": "ad_astra:tier_3_rocket"
      }
    })

    event.remove({id: 'ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench'})
    event.custom({
      "type": "ad_astra:nasa_workbench",
      "ingredients": [
        {
          "item": "mffs:projector"
        },
        {
          "item": MATERIALS.CLOGGRUM.block
        },
        {
          "item": MATERIALS.CLOGGRUM.block
        },
        {
          "item": MATERIALS.CLOGGRUM.block
        },
        {
          "item": MATERIALS.CLOGGRUM.block
        },
        {
          "item": MATERIALS.CLOGGRUM.block
        },
        {
          "item": MATERIALS.CLOGGRUM.block
        },
        {
          "item": "ad_astra:rocket_fin"
        },
        {
          "item": "ad_astra:calorite_tank"
        },
        {
          "item": "ad_astra:calorite_tank"
        },
        {
          "item": "ad_astra:rocket_fin"
        },
        {
          "item": "ad_astra:rocket_fin"
        },
        {
          "item": "ad_astra:calorite_engine"
        },
        {
          "item": "ad_astra:rocket_fin"
        }
      ],
      "result": {
        "count": 1,
        "id": "ad_astra:tier_4_rocket"
      }
    })

    event.replaceInput({id: 'ad_astra:ostrum_engine'}, 'ad_astra:fan', MATERIALS.HAFNIUM.plate)
    event.replaceInput({id: 'ad_astra:calorite_engine'}, 'ad_astra:fan', 'mekanism:teleportation_core')
    event.replaceInput({id: 'ad_astra:nasa_workbench'}, 'redstone_torch', 'mekanism:ultimate_control_circuit')
    event.replaceInput({id: 'ad_astra_giselle_addon:crafting/automation_nasa_workbench'}, 'redstone', 'mekanism:ultimate_control_circuit')

    event.remove({ id: 'ad_astra:solar_panel' })
    event.remove({ id: 'ad_astra:oxygen_loading/oxygen_from_oxygen_loading_oxygen' })
    event.remove({ id: 'ad_astra:oxygen_loading/oxygen_from_oxygen_loading_water' })
    event.remove({ id: 'ad_astra:refining/fuel_from_refining_oil' })
    event.remove({ mod: 'ad_astra', type: 'ad_astra:compressing' })
    event.remove({ mod: 'ad_astra', type: 'ad_astra:alloying' })

    _etrium(event)
    event.replaceInput({id: 'ad_astra:cable_duct'}, 'ad_astra:steel_cable', 'pipez:energy_pipe')
    event.replaceInput({id: 'ad_astra:fluid_pipe_duct'}, 'ad_astra:desh_fluid_pipe', 'pipez:fluid_pipe')
    
    event.remove({id: 'ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_blue_ice'})
    event.remove({id: 'ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_ice'})
    event.remove({id: 'ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_ice_shard'})
    event.remove({id: 'ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_packed_ice'})

    event.custom(
      {
        "type": "ad_astra:cryo_freezing",
        "cookingtime": 120,
        "energy": 40,
        "ingredient": {
          "item": Item.of('clanginghowl:extraterrestrial_energy_crystal').getId()
        },
        "result": {
          "fluid": "ad_astra:cryo_fuel",
          "millibuckets": 80
        }
      }
    )

    event.custom(
      {
        "type": "thermal:chiller",
        "ingredient": {
          "fluid": "ad_astra:cryo_fuel",
          "amount": 10
        },
        "result": [
          {
            "item": Item.of('clanginghowl:cryogenic_fuel').getId(),
            "count": 1
          }
        ],
        "energy": 100
      }
    )

    event.remove({id: 'ad_astra:cryo_freezer'})
    event.shaped(
        Item.of('ad_astra:cryo_freezer', 1), 
        [
            'DED',
            'CAC',
            'DBD'
        ],
        {
            A: Item.of('ad_astra:large_gas_tank'),
            B: Item.of('mekanism:ultimate_control_circuit'),
            C: Item.of('chemlib:strontium_ingot'),
            D: MATERIALS.OSTRUM.plate,
            E: Item.of('mekanism:steel_casing')
        }
    )

    event.remove({id: 'ad_astra:fuel_refinery'})
    event.shaped(
        Item.of('ad_astra:fuel_refinery', 1), 
        [
            'DED',
            'CAC',
            'DED'
        ],
        {
            A: Item.of('mekanism:chemical_dissolution_chamber'),
            C: Item.of('mekanism:ultimate_control_circuit'),
            D: Item.of(MATERIALS.PLATINUM.plate),
            E: Item.of('pneumaticcraft:small_tank')
        }
    )

    event.custom({
        "type": "ad_astra:oxygen_loading",
        "cookingtime": 1,
        "energy": 30,
        "input": {
            "ingredient": {
                "fluid": "mekanism:oxygen"
            },
            "millibuckets": 25
        },
        "result": {
            "fluid": "ad_astra:oxygen",
            "millibuckets": 25
        }
    })
    event.custom({
        "type": "ad_astra:refining",
        "cookingtime": 1,
        "energy": 100,
        "input": {
            "ingredient": {
                "fluid": "kubejs:hydrazine"
            },
            "millibuckets": 10
        },
        "result": {
            "fluid": "ad_astra:fuel",
            "millibuckets": 5
        }
    })
    event.custom({
        "type": "ad_astra:refining",
        "cookingtime": 2,
        "energy": 150,
        "input": {
            "ingredient": {
                "fluid": "kubejs:nitrosyl_perchlorate"
            },
            "millibuckets": 5
        },
        "result": {
            "fluid": "ad_astra:fuel",
            "millibuckets": 5
        }
    })
    event.custom({
        "type": "ad_astra:refining",
        "cookingtime": 1,
        "energy": 150,
        "input": {
            "ingredient": {
                "fluid": "pneumaticcraft:kerosene"
            },
            "millibuckets": 6
        },
        "result": {
            "fluid": "ad_astra:fuel",
            "millibuckets": 2
        }
    })

    console.log("ad astra recipes loaded...")
})


function _etrium(event) {
    event.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 5,
			"infuse_type": "mekanism:diamond"
		},
		"itemInput": {
			"amount": 1,
			"ingredient": {
				"item": "silentcompat:arcmetal_nugget"
			}
		},
		"output": {
			"item": MATERIALS.ETRIUM.nugget,
			"count": 1
		}
	})

    event.remove({id: 'ad_astra:etrionic_blast_furnace'})
    event.shaped(
        Item.of('ad_astra:etrionic_blast_furnace', 1), 
        [
            'AAA',
            'CBC',
            'ADA'
        ],
        {
            A: MATERIALS.STEEL.plate,
            B: 'mekanism:energized_smelter',
            C: 'mekanism:ultimate_control_circuit',
            D: MATERIALS.ETRIUM.plate
        }
    )
    
    event.remove({id: 'ad_astra:etrionic_capacitor'})
    event.shaped(
        Item.of('ad_astra:etrionic_capacitor', 1), 
        [
            'BAB',
            'CEC',
            'AAA'
        ],
        {
            A: MATERIALS.STEEL.plate,
            B: Item.of('thermal:rf_coil'),
            C: "#forge:glass/silica",
            E: Item.of('ad_astra:etrionic_core'),
        }
    )

    event.shaped(
        Item.of('ad_astra:etrionic_core', 1), 
        [
            'ACA',
            'CBC',
            'ACA'
        ],
        {
            A: MATERIALS.STEEL.plate,
            B: Item.of('diamond'),
            C: MATERIALS.ETRIUM.plate,
        }
    )

    event.shapeless(
        Item.of(MATERIALS.ETRIUM.ingot, 1), 
        [
            '9x ' + MATERIALS.ETRIUM.nugget
        ]
    )
    event.shapeless(
        Item.of(MATERIALS.ETRIUM.nugget, 9), 
        [
            MATERIALS.ETRIUM.ingot
        ]
    )
    event.shapeless(
        Item.of(MATERIALS.ETRIUM.block, 1), 
        [
            '9x ' + MATERIALS.ETRIUM.ingot
        ]
    )
    event.shapeless(
        Item.of(MATERIALS.ETRIUM.ingot, 9), 
        [
            MATERIALS.ETRIUM.block
        ]
    )

    event.shaped(
        Item.of('ad_astra:etrium_rod', 4), 
        [
            'A',
            'A'
        ],
        {
            A: MATERIALS.ETRIUM.plate
        }
    )

    event.shaped(
        Item.of('ad_astra:etrium_factory_block', 64), 
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: MATERIALS.ETRIUM.plate,
            B: MATERIALS.ETRIUM.ingot
        }
    )

    event.shaped(
        Item.of('ad_astra:etrium_plateblock', 64), 
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: MATERIALS.ETRIUM.plate,
            B: 'ad_astra:etrium_rod'
        }
    )

    event.shaped(
        Item.of('ad_astra:etrium_panel', 64), 
        [
            'ABA',
            'BBB',
            'ABA'
        ],
        {
            A: MATERIALS.ETRIUM.plate,
            B: MATERIALS.ETRIUM.ingot
        }
    )
    event.shaped(
        Item.of('ad_astra:encased_etrium_block', 64), 
        [
            'AAA',
            'BBB',
            'AAA'
        ],
        {
            A: MATERIALS.ETRIUM.ingot,
            B: MATERIALS.ETRIUM.plate
        }
    )

}