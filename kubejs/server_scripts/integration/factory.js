// priority: 1

const meka_levels = ['basic', 'advanced', 'elite', 'ultimate']
const alloy_levels = { 'basic': Item.of('mekanism:alloy_infused'), 'advanced': Item.of('mekanism:alloy_infused'), 'elite': Item.of('mekanism:alloy_reinforced'), 'ultimate': Item.of('mekanism:alloy_atomic'), 'absolute': Item.of('mekanism_extras:alloy_radiance'), 'supreme': Item.of('mekanism_extras:alloy_thermonuclear'), 'cosmic': Item.of('mekanism_extras:alloy_shining'), 'infinite': Item.of('mekanism_extras:alloy_spectrum') }
const mekanism_extras_levels = ['absolute', 'supreme', 'cosmic', 'infinite']

ServerEvents.recipes(event => {
  console.log("meka recipes loading...")
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

  event.replaceInput({ id: 'mekanism:upgrade/anchor' }, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({ id: 'mekanism:upgrade/energy' }, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({ id: 'mekanism:upgrade/energy' }, MATERIALS.GOLD.dust, 'superbwarfare:cell')
  event.replaceInput({ id: 'mekanism:upgrade/filter' }, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({ id: 'mekanism:upgrade/gas' }, 'glass', 'pneumaticcraft:volume_upgrade')
  event.replaceInput({ id: 'mekanism:upgrade/muffling' }, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({ id: 'mekanism:upgrade/speed' }, 'glass', 'pneumaticcraft:speed_upgrade')
  event.replaceInput({ id: 'mekanism:upgrade/stone_generator' }, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({ id: 'mekanism_extras:upgrade/filter' }, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({ id: 'mekanism_extras:upgrade/stack' }, 'glass', 'thermal:upgrade_augment_3')

  event.remove({ id: 'thermal:machines/pulverizer/pulverizer_cobblestone' })
  event.remove({ id: 'thermal:machines/pulverizer/pulverizer_venus_sandstone' })
  event.remove({ id: 'thermal:machines/pulverizer/pulverizer_venus_sandstone_slab' })

  event.replaceInput({ id: 'mekanism_extras:metallurgic_infusing/alloy/radiance' }, 'mekanism:alloy_atomic', 'chemlib:yttrium_barium_copper_oxide')

  event.remove({ id: 'mekanism_extras:processing/enriched_spectrum/from_enriched_shining' })
  event.remove({ id: 'mekanism_extras:metallurgic_infusing/alloy/spectrum' })

  event.replaceInput({ id: "thermal:augments/upgrade_augment_1" }, "glass", "mekanism:upgrade_speed")
  event.replaceInput({ id: "thermal:augments/upgrade_augment_2" }, "thermal:signalum_gear", "mekanism:advanced_control_circuit")
  event.replaceInput({ id: "thermal:augments/upgrade_augment_3" }, "thermal:lumium_gear", "mekanism:elite_control_circuit")
  event.replaceInput({ id: "thermalendergy:endergy_upgrade_1" }, "thermal:enderium_gear", "mekanism:ultimate_control_circuit")
  event.replaceInput({ id: "thermalendergy:endergy_upgrade_2" }, "thermalendergy:prismalium_gear", "mekanism_extras:absolute_control_circuit")
  event.replaceInput({ id: "thermalendergy:endergy_upgrade_3" }, "thermalendergy:melodium_gear", "mekanism_extras:supreme_control_circuit")
  

  event.remove({ type: 'thermal:furnace' })
  event.remove({ id: "thermal:machines/centrifuge/centrifuge_oil_red_sand" })
  event.remove({ id: "thermal:machines/centrifuge/centrifuge_oil_sand" })
  event.remove({ id: "thermal:machines/refinery/refinery_crude_oil" })
  event.remove({ id: "thermal:machines/refinery/refinery_light_oil" })
  event.remove({ id: "thermal:machines/refinery/refinery_heavy_oil" })
  event.remove({ id: "thermal_and_space:machine/centrifuge/centrifuge_venus_oil_sand" })
  event.remove({ id: "thermal_and_space:machine/centrifuge/centrifuge_mars_oil_sand" })
  event.remove({ id: "thermal_and_space:machine/centrifuge/centrifuge_moon_oil_sand" })
  event.remove({ id: "thermal:machines/pyrolyzer/pyrolyzer_bitumen" })

  // other
  event.replaceInput({ id: 'rechiseled_fans:craft_fan_block' }, 'redstone', 'mekanismgenerators:turbine_blade')
  event.replaceInput({ id: 'rechiseled_fans:craft_fan_block' }, 'minecraft:iron_block', MATERIALS.STEEL.ingot)

  console.log("meka recipes loaded")
})

ServerEvents.tags("item", event => {
  event.removeAll('forge:sawdust')
  event.add('forge:sawdust', 'mekanism:sawdust')
})
