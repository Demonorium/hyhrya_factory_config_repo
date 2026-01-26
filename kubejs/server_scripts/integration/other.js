// priority: 0
ServerEvents.recipes(event => {
  _blueprint_recipes(event)
  event.remove({ id: "silentcompat:midnight_iron_ingot" })
  event.remove({ id: "burnt:gunpowder_recipe" })
  event.replaceInput({ id: "explorerscompass:explorers_compass" }, "minecraft:compass", "ae2:meteorite_compass")
  event.replaceInput({ id: "naturescompass:natures_compass" }, "minecraft:compass", "ae2:meteorite_compass")
  event.replaceInput({ id: "aquaculture:tin_can_to_iron_nugget" }, "minecraft:iron_nugget", "moremekanismprocessing:aluminum_nugget")

  
  event.remove({ id: "thermal:machines/crucible/crucible_magma_block_to_lava" })

  event.custom({
    "type": "dysonsphere:laser_crafting",
    "input": {
      "item": Item.of('sgjourney:sulfur_sand').getId()
    },
    "inputEnergy": 50000000,
    "output": {
      "item": Item.of('sgjourney:budding_unity').getId()
    }
  })

  event.replaceInput({ mod: 'mffs' }, "diamond", 'mekanism:ultimate_control_circuit')
  event.replaceInput({ mod: 'mffs' }, "redstone", 'pncepcb:crystal_clear_finished_pcb')
  event.replaceInput({ mod: 'mffs' }, "ender_pearl", 'mekanism_extras:cosmic_control_circuit')
  event.replaceInput({ id: 'undergarden:catalyst' }, 'diamond', 'meetyourfight:phantoplasm')
  event.replaceInput({ mod: 'wirelesschargers' }, 'iron_ingot', MATERIALS.STEEL.plate)
  event.replaceInput({ mod: 'wirelesschargers' }, 'blaze_powder', 'mekanism:advanced_control_circuit')
  event.replaceInput({ mod: 'wirelesschargers' }, 'redstone_block', 'thermal:machine_frame')
  event.replaceInput({ mod: 'wirelesschargers' }, 'gold_ingot', 'mekanism:ultimate_control_circuit')

  event.smelting(Item.of('iron_ingot'), Item.of('bucket', 3))
  event.blasting(Item.of('iron_ingot'), Item.of('bucket', 3))
  event.shapeless(
    Item.of('silentgear:blazing_dust', 5),

    [
      Item.of('silentgear:glowing_dust'),
      Item.of('thermal:cinnabar_dust'),
      Item.of('thermal:cinnabar_dust'),
      Item.of(MATERIALS.GOLD.dust),
      Item.of(MATERIALS.OSMIUM.dust)
    ]
  )

  event.shapeless(
    Item.of('silentgear:glowing_dust', 5),

    [
      Item.of(MATERIALS.GLOWSTONE.dust),
      Item.of('ae2:fluix_dust'),
      Item.of('ae2:fluix_dust'),
    ]
  )
  event.shapeless(
    Item.of('silentgear:glowing_dust', 6),

    [
      Item.of(MATERIALS.URANIUM.dust),
      Item.of('ae2:fluix_dust'),
      Item.of('ae2:fluix_dust'),
    ]
  )

  event.shapeless(
    Item.of('silentgear:starmetal_dust', 3),

    [
      MATERIALS.OSTRUM.dust,
      MATERIALS.DESH.dust,
      Item.of('silentgear:blazing_dust', 1)
    ]
  )
})

ServerEvents.tags("item", event => {
  event.add("silentgear:grader_catalysts/tier1", MATERIALS.URANIUM.dust)
  event.add("silentgear:grader_catalysts/tier1", MATERIALS.CHROMIUM.dust)
  event.add("silentgear:grader_catalysts/tier2", "mekanism_extras:dust_radiance")
  event.add("silentgear:grader_catalysts/tier2", MATERIALS.HOLMIUM.dust)
  
  event.add("silentgear:grader_catalysts/tier3", MATERIALS.RUTHENIUM.dust)

  event.add("silentgear:grader_catalysts/tier4", MATERIALS.POLONIUM.dust)
    
  event.add("silentgear:grader_catalysts/tier5", MATERIALS.NAQUADAH.dust)
  event.add("silentgear:grader_catalysts/tier5", MATERIALS.CALORITE.dust)
})


function _blueprint_recipes(event) {
  event.remove({ id: 'portable_blueprints:crafting_table/tablet2' })
  event.remove({ id: 'portable_blueprints:crafting_table/scanner2' })

  event.replaceInput({ id: 'portable_blueprints:crafting_table/scanner' }, 'redstone', 'dysonsphere:universe_whisper')
  event.replaceInput({ id: 'portable_blueprints:crafting_table/scanner' }, 'glass', 'mekanism:ultimate_control_circuit')
  event.replaceInput({ id: 'portable_blueprints:crafting_table/scanner' }, 'iron_ingot', MATERIALS.TUNGSTEN.ingot)

  event.replaceInput({ id: 'portable_blueprints:crafting_table/tablet' }, 'redstone', 'dysonsphere:universe_whisper')
  event.replaceInput({ id: 'portable_blueprints:crafting_table/tablet' }, 'glass_pane', 'mekanism_extras:infinite_control_circuit')
  event.replaceInput({ id: 'portable_blueprints:crafting_table/tablet' }, 'iron_ingot', MATERIALS.TUNGSTEN.ingot)

  event.replaceInput({ id: 'buildinggadgets2:template_manager' }, 'lapis_lazuli', 'computercraft:printer')
  event.replaceInput({ id: 'buildinggadgets2:template_manager' }, 'paper', 'mekanism_extras:absolute_control_circuit')
  event.replaceInput({ id: 'buildinggadgets2:template_manager' }, 'iron_ingot', MATERIALS.STEEL.ingot)
  event.replaceInput({ id: 'buildinggadgets2:gadget_building' }, 'diamond', 'mekanism:teleportation_core')
  event.replaceInput({ id: 'buildinggadgets2:gadget_cut_paste' }, 'shears', 'mekanism_extras:supreme_control_circuit')
  event.replaceInput({ id: 'buildinggadgets2:gadget_cut_paste' }, 'lapis_lazuli', 'ae2:formation_core')
  event.replaceInput({ id: 'buildinggadgets2:gadget_destruction' }, 'ender_pearl', 'mekanism_extras:supreme_control_circuit')
  event.replaceInput({ id: 'buildinggadgets2:gadget_destruction' }, 'lapis_lazuli', 'ae2:annihilation_core')
  event.replaceInput({ id: 'buildinggadgets2:gadget_copy_paste' }, 'lapis_lazuli', 'buildinggadgets2:gadget_building')
  event.replaceInput({ id: 'buildinggadgets2:gadget_copy_paste' }, 'emerald', 'advancedperipherals:weak_automata_core')
  event.replaceInput({ id: 'buildinggadgets2:gadget_exchanging' }, 'lapis_lazuli', 'mekanism_extras:supreme_control_circuit')
  event.replaceInput({ id: 'buildinggadgets2:gadget_exchanging' }, 'diamond', 'dysonsphere:universe_whisper')

  event.replaceInput({ mod: 'buildinggadgets2' }, 'iron_ingot', MATERIALS.SILVER.plate)
  event.replaceInput({ mod: 'buildinggadgets2' }, 'redstone', 'ae2:semi_dark_monitor')
  
}