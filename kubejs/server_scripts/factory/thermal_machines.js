// priority: 0

ServerEvents.recipes(event => {
    event.remove({ id: "thermal:machine_pyrolyzer" })
    event.shaped(
        Item.of('thermal:machine_pyrolyzer', 1),
        [
            'FDF',
            'ABA',
            'CEC'
        ],
        {
            A: Item.of('dysonsphere:thermopile'),
            B: Item.of("furnace"),
            C: Item.of("thermal:constantan_gear"),
            D: Item.of("pncepcb:high_temp_finished_pcb"),
            E: Item.of("thermal:rf_coil"),
            F: Item.of("mekanism:basic_control_circuit")
        }
    )
    event.shaped(
        Item.of('thermal:machine_pyrolyzer', 1),
        [
            'FDF',
            'ABA',
            'CEC'
        ],
        {
            A: Item.of(MATERIALS.HAFNIUM.plate),
            B: Item.of("furnace"),
            C: Item.of("thermal:constantan_gear"),
            D: Item.of("pncepcb:high_temp_finished_pcb"),
            E: Item.of("thermal:rf_coil"),
            F: Item.of("mekanism:basic_control_circuit")
        }
    )


    event.replaceInput({ id: 'thermal:machine_press' }, MATERIALS.CONSTANTAN.gear, 'superbwarfare:motor')

    event.remove({ id: 'thermal:machine_centrifuge' })
    event.shaped(
        Item.of('thermal:machine_centrifuge', 1),
        [
            'FAF',
            'BCB',
            'EDE'
        ],
        {
            A: Item.of('minecraft:compass'),
            B: Item.of(MATERIALS.TIN.plate),
            C: Item.of("thermal:machine_frame"),
            D: Item.of("mekanism:logistical_sorter"),
            E: Item.of(MATERIALS.CONSTANTAN.gear),
            F: Item.of("mekanism:advanced_control_circuit"),
        }
    )

    event.replaceInput({id: "thermal:device_tree_extractor"}, "glass", "mekanism:basic_control_circuit")
    event.replaceInput({ id: 'thermal:machine_brewer' }, 'glass', 'mekanism:advanced_control_circuit')

    event.replaceInput({ id: 'thermal:machine_chiller' }, 'minecraft:packed_ice', 'undergarden:froststeel_nugget')
    event.replaceInput({ id: 'thermal:machine_chiller' }, 'minecraft:packed_ice', 'undergarden:froststeel_nugget')
    event.replaceInput({ id: 'thermal:machine_chiller' }, 'thermal:rf_coil', 'pncepcb:high_temp_finished_pcb')

    event.replaceInput({ id: 'thermal:machine_crucible' }, 'minecraft:nether_bricks', MATERIALS.GLOWSTONE.ingot)
    event.replaceInput({ id: 'thermal:machine_crucible' }, 'glass', 'mekanism:advanced_control_circuit')
    event.replaceInput({ id: 'thermal:machine_crucible' }, 'thermal:rf_coil', 'pncepcb:high_temp_finished_pcb')

    event.replaceInput({ id: 'thermal:machine_crafter' }, MATERIALS.TIN.ingot, 'mekanism:elite_control_circuit')
    event.replaceInput({ id: 'thermal:machine_crafter' }, MATERIALS.COPPER.gear, MATERIALS.BRONZE.gear)

    event.replaceInput({ id: 'thermal:machine_crystallizer' }, MATERIALS.SIGNALUM.plate, 'mekanism:elite_control_circuit')
    event.remove({ id: "thermal:machine_smelter" })
    event.shaped(
        Item.of("thermal:machine_smelter"),
        [
            "ABA",
            "CDC",
            "ECE"
        ],
        {
            A: Item.of("mekanism:ultimate_control_circuit"),
            B: Item.of('minecraft:blast_furnace'),
            C: MATERIALS.TITANIUM.plate,
            D: Item.of("thermal:machine_frame"),
            E: Item.of('dysonsphere:thermopile')
        }
    )
    event.shaped(
        Item.of("thermal:machine_smelter"),
        [
            "ABA",
            "CDC",
            "ECE"
        ],
        {
            A: Item.of("mekanism:ultimate_control_circuit"),
            B: Item.of('minecraft:blast_furnace'),
            C: MATERIALS.TITANIUM.plate,
            D: Item.of("thermal:machine_frame"),
            E: Item.of(MATERIALS.HAFNIUM.plate)
        }
    )

    event.remove({ id: "thermal:machine_refinery" })
    event.shaped(
        Item.of('thermal:machine_refinery', 1),
        [
            'AEA',
            'CBC',
            'DFD'
        ],
        {
            A: Item.of('mekanism:advanced_control_circuit'),
            B: Item.of("thermal:machine_frame"),
            C: Item.of(MATERIALS.COPPER.plate),
            D: Item.of("thermal:invar_gear"),
            E: Item.of("hopper"),
            F: Item.of("thermal:rf_coil")
        }
    )



    event.remove({ id: "thermal:machine_pulverizer" })
    event.shaped(
        Item.of('thermal:machine_pulverizer', 1),
        [
            'DFD',
            'BCB',
            'AEA'
        ],
        {
            A: Item.of(MATERIALS.COMPRESSED_IRON.ingot),
            B: Item.of("thermal:copper_gear"),
            C: Item.of("thermal:machine_frame"),
            D: Item.of("mekanism:basic_control_circuit"),
            E: Item.of("thermal:rf_coil"),
            F: Item.of("piston"),
        }
    )

    event.remove({ id: 'thermal:machine_insolator' })
    event.shaped(
        Item.of('thermal:machine_insolator', 1),
        [
            'AAA',
            'FCF',
            'EDE'
        ],
        {
            A: Item.of('minecraft:redstone_lamp'),
            C: Item.of("thermal:machine_frame"),
            D: Item.of("farmersdelight:rich_soil"),
            E: Item.of(MATERIALS.DIAMOND.gear),
            F: Item.of("mekanism:elite_control_circuit"),
        }
    )
})