// priority: 0


ServerEvents.recipes(event => {
    
  event.remove({id: 'dysonsphere:heat_shielding'})
  event.remove({id: 'ad_astra:photovoltaic_etrium_cell'})
  event.remove({id: 'dysonsphere:solar_foil'})
  event.shaped(
    Item.of('dysonsphere:solar_foil', 6),
    [
      'AAA',
      'BCB',
      'DDD'
    ],
    {
      A: Item.of("mekanismgenerators:solar_panel"),
      C: Item.of('thermal:rf_coil'),
      B: Item.of('dysonsphere:coil_iron'),
      D: Item.of('ad_astra:photovoltaic_etrium_cell'),
    }
  )

  event.remove({id: 'mekanismgenerators:solar_panel'})
  event.shaped(
    Item.of('mekanismgenerators:solar_panel', 1),
    [
      'AAA',
      'FCF',
      'EDE'
    ],
    {
      A: Item.of('pneumaticcraft:solar_cell'),
      C: Item.of("pncepcb:primitive_finished_pcb"),
      D: Item.of(MATERIALS.OSMIUM.plate),
      E: Item.of('mekanism:alloy_infused'),
      F: Item.of(MATERIALS.REDSTONE.ingot),
    }
  )

  event.remove({id: 'dysonsphere:capsule_empty'})
  event.shaped(
    Item.of('dysonsphere:capsule_empty', 1),
    [
      'AAA',
      'FCF',
      'DED'
    ],
    {
      A: Item.of('dysonsphere:heat_shielding'),
      C: Item.of("mekanism:advanced_control_circuit"),
      D: Item.of(MATERIALS.OSMIUM.plate),
      E: Item.of('superbwarfare:battery'),
      F: Item.of('dysonsphere:ingot_smart_alloy'),
    }
  )
  
  event.remove({id: 'dysonsphere:capsule_laser'})
  event.shaped(
    Item.of('dysonsphere:capsule_laser', 1),
    [
      'CAC',
      'ADA',
      'EFE'
    ],
    {
      A: Item.of('mekanism:laser'),
      C: Item.of('mekanism_extras:lead_coated_laser_focus_matrix'),
      D: Item.of('dysonsphere:capsule_empty'),
      E: Item.of("mekanism:ultimate_control_circuit"),
      F: Item.of("superbwarfare:missile_engine"),
    }
  )

  event.remove({id: 'dysonsphere:capsule_solar'})
  event.shaped(
    Item.of('dysonsphere:capsule_solar', 1),
    [
      'AAA',
      'FCF',
      'DED'
    ],
    {
      A: Item.of('dysonsphere:solar_foil'),
      C: Item.of("dysonsphere:capsule_empty"),
      D: Item.of(MATERIALS.LUMIUM.gear),
      E: Item.of('superbwarfare:missile_engine'),
      F: Item.of('dysonsphere:ingot_smart_alloy'),
    }
  )

  event.remove({id: 'dysonsphere:railgun_block'})
  event.shaped(
    Item.of('dysonsphere:railgun_block', 1),
    [
      ' A ',
      'FCF',
      'DED'
    ],
    {
      A: Item.of('dysonsphere:railgun'),
      C: Item.of("pneumaticcraft:stone_base"),
      D: Item.of('mekanism:steel_casing'),
      E: Item.of('mekanism_extras:absolute_control_circuit'),
      F: Item.of('ad_astra:etrionic_capacitor'),
    }
  )

  event.remove({id: 'dysonsphere:railgun'})
  event.shaped(
    Item.of('dysonsphere:railgun', 1),
    [
      'ABA',
      'ABA',
      'DED'
    ],
    {
      A: Item.of('mekanism_extras:alloy_thermonuclear'),
      B: Item.of('dysonsphere:ingot_smart_alloy'),
      D: Item.of('dysonsphere:heat_shielding'),
      E: Item.of('pneumaticcraft:cannon_barrel')
    }
  )

  event.remove({id: 'dysonsphere:dysonsphere_monitor_block'})
  event.shaped(
    Item.of('dysonsphere:dysonsphere_monitor_block', 1),
    [
      'BDB',
      'BAC',
      'BBB'
    ],
    {
      A: Item.of('mekanism:advanced_control_circuit'),
      B: Item.of('dysonsphere:ingot_smart_alloy'),
      C: Item.of("ae2:semi_dark_monitor"),
      D: Item.of('pneumaticcraft:universal_sensor')
    }
  )

  event.replaceInput({id: 'dysonsphere:dysonsphere_energy_receiver_block'}, 'dysonsphere:coil_copper', MATERIALS.CADMIUM.plate)
  event.replaceInput({id: 'dysonsphere:dysonsphere_energy_receiver_block'}, 'iron_ingot', 'mekanism:ultimate_control_circuit')
  event.replaceInput({id: 'dysonsphere:heat_pipe_block'}, 'copper_ingot', MATERIALS.CADMIUM.ingot)
  event.replaceInput({id: 'dysonsphere:heat_pipe_block'}, 'copper_block', 'mekanism:ultimate_control_circuit')

  event.remove({id: 'dysonsphere:laser_crafter_block'})
  event.shaped(
    Item.of('dysonsphere:laser_crafter_block', 1),
    [
      'EAE',
      'ABA',
      'DCD'
    ],
    {
      A: Item.of('thermal:ruby'),
      B: Item.of('ae2:molecular_assembler'),
      C: Item.of("mekanism_extras:supreme_control_circuit"),
      D: Item.of(MATERIALS.TUNGSTEN.block),
      E: Item.of('mekanism_extras:lead_coated_laser_focus_matrix')
    }
  )

  event.replaceInput({id: 'dysonsphere:laser_controller'}, '#forge:circuits', 'mekanism_extras:cosmic_control_circuit')
  event.replaceInput({id: 'dysonsphere:laser_pattern'}, '#forge:circuits', 'ae2:crafting_pattern')
  event.replaceInput({id: 'dysonsphere:laser_pattern_controller_block'}, '#forge:circuits', 'mekanism_extras:cosmic_control_circuit')
  event.replaceInput({id: 'dysonsphere:laser_pattern_controller_block'}, 'glass', 'ae2:semi_dark_monitor')
  event.replaceInput({id: 'dysonsphere:laser_pattern_controller_block'}, 'redstone_lamp', 'ae2:inscriber')
  event.replaceInput({id: 'dysonsphere:laser_controller_block'}, 'iron_ingot', 'mekanism_extras:cosmic_control_circuit')

})