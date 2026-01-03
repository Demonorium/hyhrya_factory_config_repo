// priority: 0


ServerEvents.recipes(event => {
    const panel = Item.of('ae2:semi_dark_monitor')
    const spool = Item.of('morered:redwire_spool')

    event.remove({id: 'computercraft:monitor_normal'})
    event.shaped(
        Item.of('computercraft:monitor_normal'),
        [
            "AAA",
            "BDB",
            "BEB"
        ],
        {
            A: panel,
            B: MATERIALS.PLASTIC.ingot,
            D: Item.of('mekanism:basic_control_circuit'),
            E: spool
        }
    )

    event.remove({id: 'computercraft:monitor_advanced'})
    event.remove({id: 'computercraft:monitor_advanced_upgrade'})
    event.shaped(
        Item.of('computercraft:monitor_advanced'),
        [
            "AAA",
            "BDB",
            "BEB"
        ],
        {
            A: 'computercraft:monitor_normal',
            B: MATERIALS.ELECTRUM.ingot,
            D: Item.of('mekanism:elite_control_circuit'),
            E: spool
        }
    )

    event.remove({id: 'computercraft:computer_normal'})
    event.shaped(
        Item.of('computercraft:computer_normal'),
        [
            "BBB",
            "CDA",
            "BEB"
        ],
        {
            A: 'computercraft:monitor_normal',
            B: MATERIALS.PLASTIC.ingot,
            D: Item.of('mekanism:advanced_control_circuit'),
            E: spool,
            C: Item.of('mekanism:crafting_formula')
        }
    )
    event.remove({id: 'computercraft:computer_advanced'})
    event.remove({id: 'computercraft:computer_advanced_upgrade'})
    event.shaped(
        Item.of('computercraft:computer_advanced'),
        [
            "BBB",
            "CDA",
            "BEB"
        ],
        {
            A: 'computercraft:monitor_advanced',
            B: MATERIALS.ELECTRUM.ingot,
            D: Item.of('mekanism:ultimate_control_circuit'),
            E: spool,
            C: Item.of('ae2:memory_card')
        }
    )
    
    event.remove({id: 'computercraft:pocket_computer_advanced'})
    event.remove({id: 'computercraft:pocket_computer_advanced_upgrade'})
    event.shaped(
        Item.of('computercraft:pocket_computer_advanced'),
        [
            "AAA",
            "BDB",
            "BCB"
        ],
        {
            A: 'computercraft:monitor_normal',
            B: MATERIALS.ELECTRUM.plate,
            D: Item.of('mekanism:ultimate_control_circuit'),
            C: Item.of('ae2:memory_card')
        }
    )

    event.remove({id: 'computercraft:pocket_computer_normal'})
    event.shaped(
        Item.of('computercraft:pocket_computer_normal'),
        [
            "AAA",
            "BDB",
            "BCB"
        ],
        {
            A: panel,
            B: MATERIALS.PLASTIC.ingot,
            D: Item.of('mekanism:advanced_control_circuit'),
            C: Item.of('mekanism:crafting_formula')
        }
    )

    event.remove({id: 'computercraft:turtle_normal'})
    event.shaped(
        Item.of('computercraft:turtle_normal'),
        [
            "FFF",
            "CDA",
            "BEB"
        ],
        {
            A: Item.of('pneumaticcraft:assembly_io_unit_import'),
            B: Item.of('superbwarfare:wheel'),
            D: Item.of('computercraft:computer_normal'),
            E: Item.of('superbwarfare:motor'),
            C: Item.of('pneumaticcraft:assembly_io_unit_export'),
            F: MATERIALS.PLASTIC.ingot,
        }
    )

    event.remove({id: 'computercraft:turtle_advanced'})
    event.remove({id: 'computercraft:turtle_advanced_upgrade'})
    event.shaped(
        Item.of('computercraft:turtle_advanced'),
        [
            "FFF",
            "CDA",
            "BEB"
        ],
        {
            A: Item.of('pneumaticcraft:assembly_io_unit_import'),
            B: Item.of('superbwarfare:wheel'),
            D: Item.of('computercraft:computer_advanced'),
            E: Item.of('superbwarfare:large_motor'),
            C: Item.of('pneumaticcraft:assembly_io_unit_export'),
            F: MATERIALS.ELECTRUM.plate,
        }
    )

    event.remove({id: 'computercraft:printer'})
    event.shaped(
        Item.of('computercraft:printer'),
        [
            "CCD",
            "EBA",
            "AEA"
        ],
        {
            A: MATERIALS.PLASTIC.ingot,
            B: Item.of('mekanism:basic_control_circuit'),
            C: Item.of('ink_sac'),
            D: Item.of('pneumaticcraft:logistics_core'),
            E: MATERIALS.IRON.gear,
        }
    )

    event.remove({id: 'computercraft:disk_drive'})
    event.shaped(
        Item.of('computercraft:disk_drive'),
        [
            "CCD",
            "EBA",
            "AEA"
        ],
        {
            A: MATERIALS.PLASTIC.ingot,
            B: Item.of('mekanism:basic_control_circuit'),
            C: Item.of('ae2:certus_quartz_crystal'),
            D: Item.of('pneumaticcraft:logistics_core'),
            E: MATERIALS.IRON.gear,
        }
    )

    event.remove({id: 'computercraft:wired_modem'})
    event.shaped(
        Item.of('computercraft:wired_modem'),
        [
            "AAC",
            "DBC",
            "AAC"
        ],
        {
            A: MATERIALS.PLASTIC.ingot,
            B: Item.of('mekanism:advanced_control_circuit'),
            C: Item.of('ae2:fluix_glass_cable'),
            D: spool
        }
    )

    event.remove({id: 'computercraft:cable'})
    event.shaped(
        Item.of('computercraft:cable', 4),
        [
            " A ",
            "ABA",
            " A "
        ],
        {
            A: spool,
            B: Item.of('ae2:fluix_glass_cable'),
        }
    )

    event.remove({id: 'computercraft:wireless_modem_normal'})
    event.shaped(
        Item.of('computercraft:wireless_modem_normal'),
        [
            "ACA",
            "CBC",
            "ADA"
        ],
        {
            A: MATERIALS.PLASTIC.ingot,
            B: Item.of('mekanism:ultimate_control_circuit'),
            C: Item.of('ae2:wireless_booster'),
            D: spool
        }
    )

    event.remove({id: 'computercraft:wireless_modem_advanced'})
    event.shaped(
        Item.of('computercraft:wireless_modem_advanced'),
        [
            "ACA",
            "CBC",
            "ADA"
        ],
        {
            A: MATERIALS.ELECTRUM.plate,
            B: Item.of('mekanism_extras:absolute_control_circuit'),
            C: Item.of('ae2:wireless_booster'),
            D: spool
        }
    )

    event.remove({id: 'advancedperipherals:peripheral_casing'})
    event.shaped(
        Item.of('advancedperipherals:peripheral_casing'),
        [
            "ACA",
            "CBC",
            "ACA"
        ],
        {
            A: MATERIALS.PLASTIC.ingot,
            B: Item.of('mekanism:steel_casing'),
            C: Item.of('mekanism:advanced_control_circuit')
        }
    )

    event.replaceInput({mod: 'advancedperipherals'}, 'redstone_block', spool)
    event.replaceInput({id: 'advancedperipherals:inventory_manager'}, 'iron_ingot', 'pneumaticcraft:aerial_interface')
    event.replaceInput({mod: 'advancedperipherals'}, 'iron_ingot', MATERIALS.PLASTIC.ingot)
    event.remove({id: 'advancedperipherals:player_detector'})
    event.shapeless(
        Item.of('advancedperipherals:player_detector'),
        [
            Item.of('advancedperipherals:peripheral_casing'),
            Item.of('pneumaticcraft:universal_sensor')
        ]
    )

    event.replaceInput({mod: 'ducky-periphs'}, "redstone", 'mekanism:ultimate_control_circuit')
    event.replaceInput({mod: 'ducky-periphs'}, "stone", MATERIALS.PLASTIC.ingot)

    event.replaceInput({id: 'ducky-periphs:weather_machine_block'}, "observer", 'advancedperipherals:peripheral_casing')
    event.replaceInput({id: 'ducky-periphs:weather_machine_block'}, "grass_block", 'daylight_detector')
    event.replaceInput({id: 'ducky-periphs:duck_block_leather'}, "leather", 'thermal:cured_rubber')
    event.replaceInput({id: 'ducky-periphs:entity_detector_block'}, "ender_eye", 'advancedperipherals:player_detector')
    event.replaceInput({id: 'ducky-periphs:entity_detector_block'}, "glass_pane", 'mekanism:laser')
    event.remove({id: 'advancedperipherals:chunk_controller'})
    event.shapeless(
        Item.of('advancedperipherals:chunk_controller'),
        [
            Item.of('advancedperipherals:peripheral_casing'),
            Item.of('mekanism:upgrade_anchor')
        ]
    )
    
    event.replaceInput({output: 'computercraft:disk'}, 'paper', MATERIALS.PLASTIC.ingot)
    event.replaceInput({id: 'advancedperipherals:weak_automata_core'}, 'diamond', 'meetyourfight:phantoplasm')
    event.replaceInput({id: 'advancedperipherals:overpowered_end_automata_core'}, 'nether_star', 'bosses_of_mass_destruction:ancient_anima')
    event.replaceInput({id: 'advancedperipherals:overpowered_husbandry_automata_core'}, 'nether_star', 'bosses_of_mass_destruction:ancient_anima')
    event.replaceInput({id: 'advancedperipherals:overpowered_weak_automata_core'}, 'nether_star', 'bosses_of_mass_destruction:ancient_anima')
    
    event.shaped(
        Item.of('advancedperipherals:end_automata_core'),
        [
            "ADA",
            "CBC",
            "ACA"
        ],
        {
            A: spool,
            B: Item.of('cataclysm:void_core'),
            C: Item.of(MATERIALS.PLASTIC.ingot),
            D: Item.of('advancedperipherals:peripheral_casing'),
        }
    )

    event.shaped(
        Item.of('advancedperipherals:husbandry_automata_core'),
        [
            "ADA",
            "CBC",
            "ACA"
        ],
        {
            A: spool,
            B: Item.of('bosses_of_mass_destruction:crystal_fruit'),
            C: Item.of(MATERIALS.PLASTIC.ingot),
            D: Item.of('advancedperipherals:peripheral_casing'),
        }
    )

})