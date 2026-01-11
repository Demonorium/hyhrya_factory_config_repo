// priority: 0
ServerEvents.recipes(event => {
  event.remove({ id: "silentcompat:midnight_iron_ingot" })
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
  event.replaceInput({ id: 'undergarden:catalyst' }, 'dimaond', 'meetyourfight:phantoplasm')
  event.replaceInput({ mod: 'wirelesschargers' }, 'iron_ingot', MATERIALS.STEEL.plate)
  event.replaceInput({ mod: 'wirelesschargers' }, 'blaze_powder', 'mekanism:advanced_control_circuit')
  event.replaceInput({ mod: 'wirelesschargers' }, 'redstone_block', 'thermal:machine_frame')
  event.replaceInput({ mod: 'wirelesschargers' }, 'gold_ingot', 'mekanism:ultimate_control_circuit')

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