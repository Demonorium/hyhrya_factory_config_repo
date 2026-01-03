// priority: 1

const meka_levels = ['basic', 'advanced', 'elite', 'ultimate']
const mekanism_extras_levels = ['absolute', 'supreme', 'cosmic', 'infinite']


ServerEvents.recipes(event => {
  console.log("meka recipes loading...")

  event.replaceInput({id: 'mekanism:upgrade/anchor'}, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({id: 'mekanism:upgrade/energy'}, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({id: 'mekanism:upgrade/energy'}, MATERIALS.GOLD.dust, 'superbwarfare:cell')
  event.replaceInput({id: 'mekanism:upgrade/filter'}, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({id: 'mekanism:upgrade/gas'}, 'glass', 'pneumaticcraft:volume_upgrade')
  event.replaceInput({id: 'mekanism:upgrade/muffling'}, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({id: 'mekanism:upgrade/speed'}, 'glass', 'pneumaticcraft:speed_upgrade')
  event.replaceInput({id: 'mekanism:upgrade/stone_generator'}, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({id: 'mekanism_extras:upgrade/filter'}, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({id: 'mekanism_extras:upgrade/stack'}, 'glass', 'thermal:upgrade_augment_3')


  event.remove({id: 'thermal:machines/pulverizer/pulverizer_cobblestone'})
  event.remove({id: 'thermal:machines/pulverizer/pulverizer_venus_sandstone'})
  event.remove({id: 'thermal:machines/pulverizer/pulverizer_venus_sandstone_slab'})
  
 
  event.replaceInput({ id: 'mekanism_extras:metallurgic_infusing/alloy/radiance' }, 'mekanism:alloy_atomic', 'chemlib:yttrium_barium_copper_oxide')

  _mekanism_components(event)
  
  event.shapeless(
    Item.of('mekanism:elite_thermodynamic_conductor', 8),
    [
      Item.of(MATERIALS.CADMIUM.ingot),
      Item.of('mekanism:alloy_infused')
    ]
  )
  
  event.remove({id: 'mekanism_extras:processing/enriched_spectrum/from_enriched_shining'})
  event.remove({id: 'mekanism_extras:metallurgic_infusing/alloy/spectrum'})
  
  event.replaceInput({id: 'bfr:reactor/controller'}, 'mekanism:ultimate_control_circuit', 'mekanism_extras:absolute_control_circuit')
  event.replaceInput({id: 'bfr:reactor/controller'}, 'glass_pane', 'computercraft:computer_advanced')
  event.replaceInput({id: 'bfr:reactor/frame'}, 'mekanism:steel_casing', 'mekanismgenerators:fission_reactor_casing')
  event.replaceInput({id: 'bfr:reactor/frame'}, 'mekanism:alloy_atomic', 'mekanism_extras:alloy_radiance')
  event.replaceInput({id: 'bfr:reactor/port'}, 'mekanism:ultimate_control_circuit', 'mekanism_extras:absolute_control_circuit')
  event.replaceInput({id: 'bfr:laser_focus_matrix'}, 'redstone_block', 'mffs:focus_matrix')

  event.replaceInput({id: "thermal:augments/upgrade_augment_1"}, "glass", "mekanism:upgrade_speed")
  event.replaceInput({id: "thermal:augments/upgrade_augment_2"}, "thermal:signalum_gear", "mekanism:advanced_control_circuit")
  event.replaceInput({id: "thermal:augments/upgrade_augment_3"}, "thermal:lumium_gear", "mekanism:elite_control_circuit")
  event.replaceInput({id: "thermalendergy:endergy_upgrade_1"}, "thermal:enderium_gear", "mekanism:ultimate_control_circuit")
  event.replaceInput({id: "thermalendergy:endergy_upgrade_2"}, "thermalendergy:prismalium_gear", "mekanism_extras:absolute_control_circuit")
  event.replaceInput({id: "thermalendergy:endergy_upgrade_3"}, "thermalendergy:melodium_gear", "mekanism_extras:supreme_control_circuit")
  event.remove({id: 'thermalendergy:vibrating_core'})
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
    }
  )

  event.custom({
    "type": "pneumaticcraft:thermo_plant",
    "air_use_multiplier": 3.0,
    "exothermic": false,
    "fluid_input": {
      "type": "pneumaticcraft:fluid",
      "amount": 1000,
      "fluid": "mekanism:chlorine"
    },
    "item_input": {
      "item": MATERIALS.PLASTIC.ingot
    },
    "item_output": {
      "item": "mekanism:hdpe_pellet"
    },
    "pressure": 4.0,
    "speed": 0.8,
    "temperature": {
      "min_temp": 573
    }
  })


  event.remove({ type: 'thermal:furnace' })
  event.remove({ type: 'thermal:sawmill' })
  event.remove({ id: "thermal:machines/centrifuge/centrifuge_oil_red_sand" })
  event.remove({ id: "thermal:machines/centrifuge/centrifuge_oil_sand" })
  event.remove({ id: "thermal:machines/refinery/refinery_crude_oil" })
  event.remove({ id: "thermal:machines/refinery/refinery_light_oil" })
  event.remove({ id: "thermal:machines/refinery/refinery_heavy_oil" })
  event.remove({ id: "thermal_and_space:machine/centrifuge/centrifuge_venus_oil_sand" })
  event.remove({ id: "thermal_and_space:machine/centrifuge/centrifuge_mars_oil_sand" })
  event.remove({ id: "thermal_and_space:machine/centrifuge/centrifuge_moon_oil_sand" })
  event.remove({ id: "thermal:machines/pyrolyzer/pyrolyzer_bitumen" })

  
  event.remove({ id: 'mekanismelements:radiation_irradiating/americium' })
  event.remove({ id: 'mekanismelements:radiation_irradiating/californium' })
  event.remove({ id: 'mekanismelements:radiation_irradiating/nuclear_waste' })
  event.remove({ id: 'mekanismelements:radiation_irradiating/polonium' })
  event.remove({ id: 'mekanismelements:radiation_irradiating/strontium' })
  event.remove({ id: 'mekanismelements:radiation_irradiating/tritium' })

  COMPOUND_ITEMS.forEach(item => {
    event.remove({ type: 'crafting_shaped', output: item })
    event.remove({ type: 'crafting_shapeless', output: item })
    event.remove({ type: 'thermal:smelter', output: item, mod: 'thermal' })
    event.remove({ type: 'thermal:smelter', output: item, mod: 'thermalendergy' })
    event.remove({ type: 'mekanism:metallurgic_infusing', output: item, mod: 'mekanism' })
  })

  for (const [key, value] of Object.entries(MATERIALS)) {
    console.log('material processing recipes: ' + key)
    if (value.plate && value.ingot) {
      console.log('plate <-> ingot')
      event.remove({ input: value.ingot, output: value.plate })
      event.remove({ input: value.plate, output: value.ingot })

      event.custom({
        "type": "thermal:press",
        "ingredient": {
          "item": value.ingot
        },
        "result": [
          {
            "item": value.plate
          }
        ]
      })

      event.smelting(value.ingot, value.plate)
      event.blasting(value.ingot, value.plate)
    }

    if (value.gear && value.ingot) {
      console.log('gear <-> ingot')
      event.remove({ input: value.ingot, output: value.gear })

      event.shaped(value.gear,
        [
          " A ",
          "ABA",
          " A "
        ],
        {
          "A": value.ingot,
          "B": MATERIALS.IRON.nugget
        }
      )

      event.custom({
        "type": "thermal:press",
        'energy': 3000,
        "ingredients": [{
          "item": value.ingot,
          'count': 3
        },
        {
          "item": "thermal:press_gear_die"
        }],
        "result": [
          {
            "item": value.gear
          }
        ],
      })

      event.smelting("2x " + value.ingot, value.gear)
      event.blasting("2x " + value.ingot, value.gear)
    }


    if (value.plate && value.gear) {
      console.log('plate <-> gear')
      event.custom({
        energy: 2000,
        "type": "thermal:press",
        "ingredients": [{
          "item": value.plate,
          'count': 2
        },
        {
          "item": "thermal:press_gear_die"
        }],
        "result": [
          {
            "item": value.gear
          }
        ]
      })
    }

    if (value.dust && value.plate) {
      console.log('dust <- plate')
      event.custom({
        "type": "mekanism:crushing",
        "input": {
          "ingredient": {
            "item": value.plate
          },
        },
        "output": {
          "item": value.dust
        }
      })
    }

    if (value.dust && value.gear) {
      console.log('dust <- gear')
      event.custom({
        "type": "mekanism:crushing",
        "input": {
          "ingredient": {
            "item": value.gear
          },
        },
        "output": {
          "item": value.dust,
          "count": 2
        }
      })
    }

    if (value.dust && value.ingot) {
      console.log('dust <-> ingot')
      event.remove({ input: value.dust, output: value.ingot })
      event.remove({ input: value.ingot, output: value.dust })
      if (key != 'NAQUADAH' && key != 'CALORITE') {
        event.custom({
          "type": "mekanism:crushing",
          "input": {
            "ingredient": {
              "item": value.ingot
            },
          },
          "output": {
            "item": value.dust
          }
        })
        if (value.metal) {
          event.smelting(value.ingot, value.dust)
          event.blasting(value.ingot, value.dust)
        } else {
          event.custom({
            "type": "thermal:crystallizer",
            "ingredients": [
              {
                "fluid": "minecraft:water",
                "amount": 2000
              },
              {
                "item": value.dust
              }
            ],
            "result": [
              {
                "item": value.ingot
              }
            ]
          })
        }
      }
    }
  }
  console.log("meka recipes loaded")
})


function _mekanism_components(event) {
  event.remove({id: "thermal:fire_charge/"})

  event.replaceInput({id: "thermal:redstone_servo"}, "iron_ingot", "mekanism:basic_control_circuit")
  
  
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

  event.remove({ id: "thermal:machine_frame" })
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "count": 4,
        "tag": "pneumaticcraft:wiring"
      },
      {
        "item": "mekanism:steel_casing"
      }
    ],
    "pressure": 3.0,
    "results": [
      {
        "item": "thermal:machine_frame",
        "count": 1
      }
    ]
  })

  event.remove({ id: 'mekanism:enriching/enriched/carbon' })
  event.custom({
    "type": "mekanism:enriching",
    "input": {
      "ingredient": {
        "item": "thermal:coal_coke"
      }
    },
    "output": {
      "item": "mekanism:enriched_carbon"
    }
  })

  event.replaceInput({ id: 'rechiseled_fans:craft_fan_block' }, 'redstone', 'mekanismgenerators:turbine_blade')
  event.replaceInput({ id: 'rechiseled_fans:craft_fan_block' }, 'minecraft:iron_block', MATERIALS.STEEL.ingot)

  event.remove({id: "thermal:enderium_dust_2"})
  event.remove({id: "thermal:electrum_dust_2"})
  event.remove({id: "thermal:signalum_dust_4"})
  event.remove({id: "thermal:lumium_dust_4"})
}






