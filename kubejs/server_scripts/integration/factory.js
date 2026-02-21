// priority: 1

const meka_levels = ['basic', 'advanced', 'elite', 'ultimate']
const alloy_levels = { 'basic': Item.of('mekanism:alloy_infused'), 'advanced': Item.of('mekanism:alloy_infused'), 'elite': Item.of('mekanism:alloy_reinforced'), 'ultimate': Item.of('mekanism:alloy_atomic'), 'absolute': Item.of('mekanism_extras:alloy_radiance'), 'supreme': Item.of('mekanism_extras:alloy_thermonuclear'), 'cosmic': Item.of('mekanism_extras:alloy_shining'), 'infinite': Item.of('mekanism_extras:alloy_spectrum') }
const mekanism_extras_levels = ['absolute', 'supreme', 'cosmic', 'infinite']


CustomMachineryEvents.upgrades(event => {
  const all_machines = [
    "handmade:primitive_reaction_chamber",
    "handmade:gas_chemical_furnace",
    "handmade:precipitation_bath",
    "handmade:atmospheric_adsorption_separator",
    "handmade:advanced_reaction_chamber"
  ]

  const energy_machines = [
    "handmade:primitive_reaction_chamber",
    "handmade:precipitation_bath",
    "handmade:atmospheric_adsorption_separator",
    "handmade:advanced_reaction_chamber"
  ]

  console.log('loading machine updates')
  event.create(Item.of('mekanism:upgrade_speed'), 8)
    .machine(all_machines)
    .tooltip("Можно использовать в CustomMachinery. Удваивает скорость CustomMachinery (экспоненциально). Максимально улучшений: 8")
    .modifier(CMRecipeModifierBuilder.expInput('custommachinery:energy_per_tick', 2))
    .modifier(CMRecipeModifierBuilder.expInput('custommachinery:energy', 2))
    .modifier(CMRecipeModifierBuilder.expInput('custommachinery:speed', 0.5))

  event.create(Item.of('mekanism:upgrade_energy'), 8)
    .machine(energy_machines)
    .tooltip("Можно использовать в CustomMachinery. Снижает энергопотребление на 10% (экспоненциально). Максимально улучшений: 8")
    .modifier(CMRecipeModifierBuilder.expInput('custommachinery:energy', 0.9))
    .modifier(CMRecipeModifierBuilder.expInput('custommachinery:energy_per_tick', 0.9))

  event.create(Item.of('mekanism_extras:upgrade_stack'), 4)
    .machine(all_machines)
    .tooltip("Можно использовать в CustomMachinery. Удаивает паралельную обработку машины. Максимально улучшений: 4")
    .modifier(CMRecipeModifierBuilder.mulInput('custommachinery:item', 2))
    .modifier(CMRecipeModifierBuilder.mulOutput('custommachinery:item', 2))
    .modifier(CMRecipeModifierBuilder.mulInput('custommachinery:fluid', 2))
    .modifier(CMRecipeModifierBuilder.mulOutput('custommachinery:fluid', 2))
    .modifier(CMRecipeModifierBuilder.mulInput('custommachinery:fluid_per_tick', 2))
    .modifier(CMRecipeModifierBuilder.mulOutput('custommachinery:fluid_per_tick', 2))
    .modifier(CMRecipeModifierBuilder.mulInput('custommachinery:gas', 2))
    .modifier(CMRecipeModifierBuilder.mulOutput('custommachinery:gas', 2))
    .modifier(CMRecipeModifierBuilder.mulInput('custommachinery:slurry', 2))
    .modifier(CMRecipeModifierBuilder.mulOutput('custommachinery:slurry', 2))
    .modifier(CMRecipeModifierBuilder.mulInput('custommachinery:energy', 2))
    .modifier(CMRecipeModifierBuilder.mulOutput('custommachinery:energy', 2))
    .modifier(CMRecipeModifierBuilder.mulInput('custommachinery:energy_per_tick', 2))
    .modifier(CMRecipeModifierBuilder.mulOutput('custommachinery:energy_per_tick', 2))

})

ServerEvents.tags("item", event => {
  event.add("custommachinery:upgrades", 
    'mekanism:upgrade_speed',
    'mekanism:upgrade_energy',
    'mekanism_extras:upgrade_stack'
  )
})

ServerEvents.recipes(event => {
  console.log("Custom Machinery Recipes loading...")
  MACHINERY_RECIPES.forEach(recipe => {
    const recipe_builder = event.recipes.custommachinery.custom_machine(recipe.machine, recipe.time)
    // if (recipe.priority) {
    //   recipe_builder.priority(priority)
    // }

    if (recipe.biomes) {
      recipe_builder.biomeWhitelist(recipe.biomes)
    }
    if (recipe.dimensions) {
      recipe_builder.dimensionWhitelist(recipe.dimensions)
    }

    if (recipe.energy) {
      recipe_builder.requireEnergyPerTick(recipe.energy)
    }
    if (recipe.produce_energy) {
      recipe_builder.produceEnergyPerTick(recipe.produce_energy)
    }

    if (recipe.filter) {
      recipe_builder.requireItemFilter(recipe.filter.item)
    }
    if (recipe.req_rad) {
      recipe_builder.requireRadiationPerTick(recipe.req_rad)
    }
    if (recipe.rs_rad) {
      recipe_builder.emitRadiationPerTick(recipe.rs_rad)
    }
    if (recipe.fuel) {
      recipe_builder.requireFuel(recipe.fuel)
    }

    const add_element = (element, setter, setterTag, perTick, perTickTag, id, amount) => {
      let tag = id.startsWith('#')
      if (tag) {
        id = id.substring(1)
      }

      if (amount == null && element.chance) {
        amount = Math.ceil(element.chance)
      }
      let builder = null
      if (element.per_tick) {
        if (tag) {
          builder = perTickTag(id, amount)
        } else {
          builder = perTick(id, amount)
        }

      } else {
        if (tag) {
          builder = setterTag(id, amount)
        } else {
          builder = setter(id, amount)
        }
      }

      if (element.chance) {
        setter.chance(chance)
      }
    }

    if (recipe.source_items) {
      recipe.source_items.forEach(element => add_element(element,
        (id, count) => recipe_builder.requireItem(Item.of(id, count)),
        (id, count) => recipe_builder.requireItemTag(id, count),
        (id, count) => null,
        (id, count) => null,
        element.item != null ? element.item : element.tag, element.count))
    }
    if (recipe.result_items) {
      recipe.result_items.forEach(element => add_element(element,
        (id, count) => recipe_builder.produceItem(Item.of(id, count)),
        (id, count) => null,
        (id, count) => null,
        (id, count) => null,
        element.item != null ? element.item : element.tag, element.count))
    }

    if (recipe.source_fluids) {
      recipe.source_fluids.forEach(element => add_element(element,
        (id, count) => recipe_builder.requireFluid(Fluid.of(id, count)),
        (id, count) => recipe_builder.requireFluidTag(id, count),
        (id, count) => recipe_builder.requireFluidPerTick(Fluid.of(id, count)),
        (id, count) => recipe_builder.requireFluidTagPerTick(id, count),
        element.fluid != null ? element.fluid : element.tag, element.amount))
    }
    if (recipe.result_fluids) {
      recipe.result_fluids.forEach(element => add_element(element,
        (id, count) => recipe_builder.produceFluid(Fluid.of(id, count)),
        (id, count) => null,
        (id, count) => recipe_builder.produceFluidPerTick(Fluid.of(id, count)),
        (id, count) => null,
        element.fluid != null ? element.fluid : element.tag, element.amount))
    }

    if (recipe.source_gases) {
      recipe.source_gases.forEach(element => add_element(element,
        (id, count) => recipe_builder.requireGas(id + " " + count),
        (id, count) => null,
        (id, count) => recipe_builder.requireGasPerTick(id + " " + count),
        (id, count) => null,
        element.gas != null ? element.gas : element.tag, element.amount))
    }
    if (recipe.result_gases) {
      recipe.result_gases.forEach(element => add_element(element,
        (id, count) => recipe_builder.produceGas(id + " " + count),
        (id, count) => null,
        (id, count) => recipe_builder.produceGasPerTick(id + " " + count),
        (id, count) => null,
        element.gas != null ? element.gas : element.tag, element.amount))
    }

    if (recipe.source_infuse_type) {
      recipe.source_infuse_type.forEach(element => add_element(element,
        (id, count) => recipe_builder.requireInfusion(id + " " + count),
        (id, count) => null,
        (id, count) => recipe_builder.requireInfusionPerTick(id + " " + count),
        (id, count) => null,
        element.infuse_type != null ? element.infuse_type : element.tag, element.amount))
    }
    if (recipe.result_infuse_type) {
      recipe.result_infuse_type.forEach(element => add_element(element,
        (id, count) => recipe_builder.produceInfusion(id + " " + count),
        (id, count) => null,
        (id, count) => recipe_builder.produceInfusionPerTick(id + " " + count),
        (id, count) => null,
        element.infuse_type != null ? element.infuse_type : element.tag, element.amount))
    }

    if (recipe.source_slurry) {
      recipe.source_slurry.forEach(element => add_element(element,
        (id, count) => recipe_builder.requireSlurry(id + " " + count),
        (id, count) => null,
        (id, count) => recipe_builder.requireSlurryPerTick(id + " " + count),
        (id, count) => null,
        element.slurry != null ? element.slurry : element.tag, element.amount))
    }
    if (recipe.result_slurry) {
      recipe.result_slurry.forEach(element => add_element(element,
        (id, count) => recipe_builder.produceSlurry(id + " " + count),
        (id, count) => null,
        (id, count) => recipe_builder.produceSlurryPerTick(id + " " + count),
        (id, count) => null,
        element.slurry != null ? element.slurry : element.tag, element.amount))
    }
  })

  event.shaped(
    Item.of("kubejs:primitive_reaction_chamber"),
    [
      "AAA",
      "BCB",
      "DED",
    ],
    {
      A: Item.of(MATERIALS.STEEL.ingot),
      B: Item.of("mekanism:basic_control_circuit"),
      C: Item.of('pneumaticcraft:thermopneumatic_processing_plant'),
      D: Item.of(MATERIALS.STEEL.gear),
      E: Item.of("furnace"),
    }
  )

  event.shaped(
    Item.of("kubejs:precipitation_bath"),
    [
      "AAA",
      "BCB",
      "DED",
    ],
    {
      A: Item.of(MATERIALS.STEEL.ingot),
      B: Item.of("mekanism:advanced_control_circuit"),
      C: Item.of('pneumaticcraft:fluid_mixer'),
      D: Item.of(MATERIALS.STEEL.gear),
      E: Item.of("superbwarfare:motor"),
    }
  )

  event.shaped(
    Item.of("kubejs:atmospheric_adsorption_separator"),
    [
      "AAA",
      "BCB",
      "DED",
    ],
    {
      A: Item.of('pneumaticcraft:heat_sink'),
      B: Item.of("mekanism:elite_control_circuit"),
      C: Item.of('mekanismelements:air_compressor'),
      D: Item.of(MATERIALS.IRIDIUM.gear),
      E: Item.of("mekanismelements:adsorption_separator"),
    }
  )

 event.shaped(
    Item.of("kubejs:gas_chemical_furnace"),
    [
      "DBA",
      "ACB",
      "BEA",
    ],
    {
      A: Item.of('pneumaticcraft:advanced_pressure_tube'),
      B: Item.of(MATERIALS.STEEL.gear),
      C: Item.of('pneumaticcraft:thermopneumatic_processing_plant'),
      D: Item.of('mekanism:basic_control_circuit'),
      E: Item.of("furnace"),
    }
  )

  event.shaped(
    Item.of("kubejs:advanced_reaction_chamber"),
    [
      "AAA",
      "BCB",
      "DED",
    ],
    {
      A: Item.of(MATERIALS.IRIDIUM.plate),
      B: Item.of("mekanism:ultimate_control_circuit"),
      C: Item.of('kubejs:primitive_reaction_chamber'),
      D: Item.of(MATERIALS.PLATINUM.gear),
      E: Item.of("mekanism:pressurized_reaction_chamber"),
    }
  )

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
  event.replaceInput({ id: 'mekanism:upgrade/filter' }, 'mekanism:tin_dust', MATERIALS.RUTHENIUM.dust)
  event.replaceInput({ id: 'mekanism:upgrade/gas' }, 'glass', 'pneumaticcraft:volume_upgrade')
  event.replaceInput({ id: 'mekanism:upgrade/muffling' }, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({ id: 'mekanism:upgrade/speed' }, 'glass', 'pneumaticcraft:speed_upgrade')
  event.replaceInput({ id: 'mekanism:upgrade/stone_generator' }, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({ id: 'mekanism_extras:upgrade/filter' }, 'glass', '#pneumaticcraft:upgrade_components')
  event.replaceInput({ id: 'mekanism_extras:upgrade/stack' }, 'glass', 'thermal:upgrade_augment_3')

  event.remove({ id: 'thermal:machines/pulverizer/pulverizer_cobblestone' })
  event.remove({ id: 'thermal:machines/pulverizer/pulverizer_venus_sandstone' })
  event.remove({ id: 'thermal:machines/pulverizer/pulverizer_venus_sandstone_slab' })

  event.replaceInput({ id: 'mekanism_extras:metallurgic_infusing/alloy/radiance' }, 'mekanism:alloy_atomic', 'chemlib:yttrium_barium_copper_oxide_dust')

  event.remove({ id: 'mekanism_extras:processing/enriched_spectrum/from_enriched_shining' })
  event.remove({ id: 'mekanism_extras:metallurgic_infusing/alloy/spectrum' })

  event.replaceInput({ id: "thermal:augments/upgrade_augment_1" }, "glass", "mekanism:upgrade_speed")
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "conditions": [
      {
        "type": "thermal:flag",
        "flag": "upgrade_augments"
      }
    ],
    "key": {
      "G": {
        "item": MATERIALS.EUROPIUM.gear
      },
      "I": {
        "item": MATERIALS.EUROPIUM.plate
      },
      "R": {
        "tag": "forge:dusts/redstone"
      },
      "X": {
        "tag": "forge:gears/gold"
      }
    },
    "pattern": [
      "IGI",
      "RXR",
      "IGI"
    ],
    "result": {
      "item": "thermal:upgrade_augment_1"
    },
    "show_notification": true
  })

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
