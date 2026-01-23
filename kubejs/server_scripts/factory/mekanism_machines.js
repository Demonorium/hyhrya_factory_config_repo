// priority: 0

ServerEvents.recipes(event => {
    event.replaceInput({ id: "mekanism:chemical_dissolution_chamber" }, "mekanism:ultimate_control_circuit", "mekanism:elite_control_circuit")
    event.replaceInput({ id: "mekanism:chemical_washer" }, "mekanism:ultimate_control_circuit", "mekanism:elite_control_circuit")
    
    event.replaceInput({id: 'mekanism:energized_smelter'}, 'glass', 'dysonsphere:thermopile')
    event.replaceInput({id: 'mekanism:energized_smelter'}, 'mekanism:steel_casing', 'furnace')

    event.remove({id: 'mekanism:chemical_washer'})
    event.custom({
      "type": "mekanism:mek_data",
      "key": {
        "B": {
          "item": Item.of('pneumaticcraft:small_tank').getId()
        },
        "C": {
          "tag": "forge:circuits/ultimate"
        },
        "I": {
          "tag": "forge:ingots/refined_obsidian"
        },
        "T": {
          "item": "mekanism:basic_chemical_tank"
        },
        "X": {
          "item": "mekanism:steel_casing"
        }
      },
      "pattern": [
        "IBI",
        "CXC",
        "ITI"
      ],
      "result": {
        "item": "mekanism:chemical_washer"
      }
    })
    event.remove({id: 'mekanism:rotary_condensentrator'})
    event.custom({
      "type": "mekanism:mek_data",
      "key": {
        "#": {
          "item": Item.of('pncepcb:high_temp_finished_pcb').getId()
        },
        "C": {
          "tag": "forge:circuits/basic"
        },
        "E": {
          "item": "mekanism:energy_tablet"
        },
        "G": {
          "tag": "forge:glass/silica"
        },
        "T": {
          "item": "mekanism:basic_chemical_tank"
        }
      },
      "pattern": [
        "GCG",
        "TE#",
        "GCG"
      ],
      "result": {
        "item": "mekanism:rotary_condensentrator"
      }
    })

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

    event.remove({id: 'mekanism:resistive_heater'})
    event.custom({
      "type": "mekanism:mek_data",
      "key": {
        "E": {
          "item": "pncepcb:high_temp_finished_pcb"
        },
        "I": {
          "item": "pneumaticcraft:heat_sink"
        },
        "R": {
          "tag": "forge:dusts/redstone"
        },
        "X": {
          "item": "mekanism:steel_casing"
        },
        "D": {
          "item": MATERIALS.STEEL.ingot
        }
      },
      "pattern": [
        "IRI",
        "RXR",
        "DED"
      ],
      "result": {
        "item": "mekanism:resistive_heater"
      }
    })
})