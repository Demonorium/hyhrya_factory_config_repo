// priority: 0

ServerEvents.recipes(event => {
    event.replaceInput({ id: "mekanism:chemical_dissolution_chamber" }, "mekanism:ultimate_control_circuit", "mekanism:elite_control_circuit")
    event.replaceInput({ id: "mekanism:chemical_washer" }, "mekanism:ultimate_control_circuit", "mekanism:elite_control_circuit")

    event.remove({ id: "mekanism:pressurized_reaction_chamber" })
    event.shaped(
        Item.of("mekanism:pressurized_reaction_chamber"),
        [
            "ABA",
            "CDE",
            "FGF"
        ],
        {
            A: Item.of("mekanism:ultimate_control_circuit"),
            B: Item.of('mekanism:alloy_reinforced'),
            C: MATERIALS.PLATINUM.plate,
            D: Item.of("mekanism:chemical_dissolution_chamber"),
            E: MATERIALS.IRIDIUM.plate,
            F: Item.of('mekanism:advanced_chemical_tank'),
            G: Item.of('mekanism:dynamic_tank')
        }
    )
    event.shaped(
        Item.of("mekanism:pressurized_reaction_chamber"),
        [
            "ABA",
            "CDE",
            "FGF"
        ],
        {
            A: Item.of("mekanism:ultimate_control_circuit"),
            B: Item.of('mekanism:alloy_reinforced'),
            C: MATERIALS.CHROMIUM.plate,
            D: Item.of("mekanism:chemical_dissolution_chamber"),
            E: MATERIALS.MOLYBDENUM.plate,
            F: Item.of('mekanism:advanced_chemical_tank'),
            G: Item.of('mekanism:dynamic_tank')
        }
    )

    event.remove({ id: "mekanism:metallurgic_infuser" })
    event.shaped(
        Item.of('mekanism:metallurgic_infuser', 1),
        [
            'AEA',
            'ABA',
            'CDC'
        ],
        {
            A: Item.of(MATERIALS.COMPRESSED_IRON.ingot),
            B: Item.of("furnace"),
            C: Item.of("iron_ingot"),
            D: Item.of("pncepcb:primitive_finished_pcb"),
            E: Item.of("hopper"),
        }
    )

    event.remove({ id: "mekanism:crusher" })
    event.shaped(
        Item.of('mekanism:crusher', 1),
        [
            'ADA',
            'BCB',
            'AEA'
        ],
        {
            A: Item.of(MATERIALS.OSMIUM.ingot),
            B: Item.of("thermal:diamond_gear"),
            C: Item.of("thermal:machine_pulverizer"),
            D: Item.of("mekanism:basic_control_circuit"),
            E: Item.of("hopper"),
        }
    )

    event.replaceInput({ id: 'mekanism:osmium_compressor' }, 'mekanism:steel_casing', 'thermal:machine_press')
    event.replaceInput({ id: 'mekanism:osmium_compressor' }, 'mekanism:advanced_control_circuit', 'mekanism:elite_control_circuit')
    event.replaceInput({ id: 'mekanism:osmium_compressor' }, 'mekanism:alloy_infused', 'mekanism:alloy_reinforced')
    event.replaceInput({ id: "mekanism:combiner" }, "cobblestone", "superbwarfare:motor")
})