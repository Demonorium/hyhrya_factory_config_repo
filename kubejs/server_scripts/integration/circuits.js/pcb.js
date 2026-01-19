// priority: 0

ServerEvents.recipes(event => {
  event.remove({ id: 'pneumaticcraft:pressure_chamber/capacitor' })
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "count": 2,
        "tag": "pneumaticcraft:wiring"
      },
      {
        "tag": "forge:slimeballs"
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "item": "paper",
        "count": 2
      }
    ],
    "pressure": 1.0,
    "results": [
      {
        "item": "pneumaticcraft:capacitor",
        "count": 2
      }
    ]
  })
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "count": 2,
        "tag": "pneumaticcraft:wiring"
      },
      {
        "item": Item.of('chemlib:niobium_oxide_dust').getId()
      },
    ],
    "pressure": 1.0,
    "results": [
      {
        "item": "pneumaticcraft:capacitor",
        "count": 12
      }
    ]
  })
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "count": 2,
        "tag": "pneumaticcraft:wiring"
      },
      {
        "item": Item.of('chemlib:tantalum_nugget', 9).getId()
      },
    ],
    "pressure": 1.0,
    "results": [
      {
        "item": "pneumaticcraft:capacitor",
        "count": 9
      }
    ]
  })

  event.remove({ id: 'pneumaticcraft:pressure_chamber/transistor' })
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "count": 2,
        "tag": "pneumaticcraft:wiring"
      },
      {
        "item": "flint"
      },
      {
        "item": "paper"
      }
    ],
    "pressure": 1.0,
    "results": [
      {
        "item": "pneumaticcraft:transistor",
        "count": 2
      }
    ]
  })
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "count": 2,
        "tag": "pneumaticcraft:wiring"
      },
      {
        "item": "chemlib:germanium_dust"
      }
    ],
    "pressure": 1.0,
    "results": [
      {
        "item": "pneumaticcraft:transistor",
        "count": 8
      }
    ]
  })
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "count": 2,
        "item": MATERIALS.LEAD.nugget
      },
      {
        "item": "chemlib:tellurium_dust"
      }
    ],
    "pressure": 1.0,
    "results": [
      {
        "item": "pneumaticcraft:transistor",
        "count": 8
      }
    ]
  })
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "count": 2,
        "item": MATERIALS.COPPER.nugget
      },
      {
        "item": "chemlib:zinc_oxide_dust"
      }
    ],
    "pressure": 1.0,
    "results": [
      {
        "item": "pneumaticcraft:transistor",
        "count": 1
      }
    ]
  })

  event.replaceInput({ id: 'pneumaticcraft:pneumatic_dynamo' }, 'pneumaticcraft:printed_circuit_board', 'pncepcb:primitive_finished_pcb')
  event.replaceInput({ id: 'pneumaticcraft:pneumatic_dynamo' }, 'pneumaticcraft:advanced_pressure_tube', 'pneumaticcraft:reinforced_pressure_tube')
  event.replaceInput({ id: 'pneumaticcraft:flux_compressor' }, 'pneumaticcraft:printed_circuit_board', 'pncepcb:primitive_finished_pcb')
  event.replaceInput({ id: 'pneumaticcraft:flux_compressor' }, 'pneumaticcraft:adadvanced_pressure_tube', 'pneumaticcraft:reinforced_pressure_tube')

  assembly_laser(event, Item.of('chemlib:beryllium_oxide_dust'), Item.of('pncepcb:smd_transistor', 12))
  assembly_laser(event, Item.of('chemlib:bismuth_dust'), Item.of('pncepcb:smd_transistor', 9))
  assembly_laser(event, Item.of('chemlib:germanium_dust'), Item.of('pncepcb:smd_transistor', 9))
  assembly_laser(event, Item.of('chemlib:tellurium_dust'), Item.of('pncepcb:smd_transistor', 4))
  assembly_laser(event, Item.of('chemlib:phosphorus_dust'), Item.of('pncepcb:smd_transistor', 1))
  assembly_laser(event, Item.of('chemlib:zinc_oxide_dust', 3), Item.of('pncepcb:smd_transistor', 1))

  assembly_laser(event, Item.of('chemlib:cesium_sulfate_dust'), Item.of('pncepcb:smd_capacitor', 1))
  assembly_laser(event, Item.of('chemlib:tantalum_nugget'), Item.of('pncepcb:smd_capacitor', 1))
  assembly_laser(event, Item.of('chemlib:niobium_nugget'), Item.of('pncepcb:smd_capacitor', 2))
  assembly_laser(event, Item.of('chemlib:titanium_dioxide_dust'), Item.of('pncepcb:smd_capacitor', 9))

  _primitive_pcb(event)
  _high_temp_pcb(event)
  _high_power_pcb(event)
  _bio_compatible_pcb(event)
  _flexible_pcb(event)
  _high_quantum_pcb(event)
  _crystal_clear_pcb(event)
})

function assembly_laser(event, source, result) {
  event.custom(
    {
      "type": "pneumaticcraft:assembly_laser",
      "input": {
        "item": source.getId(),
        "count": source.getCount()
      },
      "program": "laser",
      "result": {
        "item": result.getId(),
        "count": result.getCount()
      }
    }
  )
}


function assembly_drill(event, source, result) {
  event.custom(
    {
      "type": "pneumaticcraft:assembly_drill",
      "input": {
        "item": source.getId(),
        "count": source.getCount()
      },
      "program": "drill",
      "result": {
        "item": result.getId(),
        "count": result.getCount()
      }
    }
  )
}

function fail_pcb_recipe(event, failed, sbs, compoents) {
  const rs = [
    {
      "item": sbs.getId()
    }
  ]

  compoents.forEach(c => {
    rs.push({
      "item": c.getId(),
      "chance": 0.1
    })
  })

  event.custom({
    "conditions": [
      {
        "type": "forge:false"
      }
    ],
    "type": "thermal:pulverizer",
    "ingredient": {
      "value": [
        {
          "item": failed.getId()
        }
      ]
    },
    "result": compoents,
    "experience": 0.1
  })
}

function _primitive_pcb(event) {
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "item": "paper",
        "count": 12
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "tag": "minecraft:planks",
        "count": 1
      }
    ],
    "pressure": 1.0,
    "results": [
      {
        "item": "pncepcb:primitive_substrate",
        "count": 4
      }
    ]
  })
  event.custom({
    "type": "thermal:bottler",
    "ingredients": [
      {
        "item": "paper"
      },
      {
        "fluid": "thermal:creosote",
        "amount": 100
      }
    ],
    "result": [
      {
        "item": "pncepcb:primitive_substrate"
      }
    ],
    "energy": 1000,
    "experience": 0.1
  })

  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "item": "pncepcb:primitive_substrate",
        "count": 1
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "item": MATERIALS.REDSTONE.ingot,
        "count": 1
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "item": MATERIALS.COPPER.nugget,
        "count": 2
      }
    ],
    "pressure": 1.0,
    "results": [
      {
        "item": "pncepcb:primitive_empty_pcb"
      }
    ]
  })

  assembly_laser(event, Item.of('pncepcb:primitive_empty_pcb'), Item.of('pncepcb:primitive_unassembled_pcb'))
  fail_pcb_recipe(event,
    Item.of('pncepcb:primitive_failed_pcb'),
    Item.of("pncepcb:primitive_substrate"),
    [
      Item.of(MATERIALS.REDSTONE.ingot),
      Item.of(MATERIALS.COPPER.nugget)
    ]
  )
  
  event.shapeless(
    Item.of('pncepcb:primitive_finished_pcb', 1),
    [
      Item.of('pncepcb:primitive_unassembled_pcb'),
      Item.of('pneumaticcraft:capacitor'),
      Item.of('pneumaticcraft:transistor')
    ]
  )
}

function _high_temp_pcb(event) {
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "item": "obsidian",
        "count": 1
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "item": Item.of('quartz').getId(),
        "count": 2
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "item": MATERIALS.DIAMOND.nugget,
        "count": 1
      }
    ],
    "pressure": 3.0,
    "results": [
      {
        "item": "pncepcb:high_temp_empty_pcb"
      }
    ]
  })
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "item": MATERIALS.HAFNIUM.plate,
        "count": 1
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "item": MATERIALS.DIAMOND.nugget,
        "count": 1
      }
    ],
    "pressure": 3.0,
    "results": [
      {
        "item": "pncepcb:high_temp_empty_pcb"
      }
    ]
  })

  assembly_laser(event, Item.of('pncepcb:high_temp_empty_pcb'), Item.of('pncepcb:high_temp_unassembled_pcb'))
  event.smelting('pncepcb:high_temp_empty_pcb', 'pncepcb:high_temp_failed_pcb')

  event.shaped(
    Item.of('pncepcb:high_temp_finished_pcb', 1),
    [
      ' C ',
      'BAB',
      ' C '
    ],
    {
      A: Item.of('pncepcb:high_temp_unassembled_pcb'),
      B: Item.of('pneumaticcraft:capacitor'),
      C: Item.of('pneumaticcraft:transistor')
    }
  )
}

function _high_power_pcb(event) {
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "item": MATERIALS.PRISMALIUM.plate,
        "count": 1
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "item": MATERIALS.HAFNIUM.plate,
        "count": 1
      }
    ],
    "pressure": 4.0,
    "results": [
      {
        "item": "pncepcb:high_power_empty_pcb"
      }
    ]
  })

  assembly_laser(event, Item.of('pncepcb:high_power_empty_pcb'), Item.of('pncepcb:high_power_unassembled_pcb'))
  event.smelting('pncepcb:high_power_empty_pcb', 'pncepcb:high_power_failed_pcb')

  event.shaped(
    Item.of('pncepcb:high_power_finished_pcb', 1),
    [
      'EEE',
      'CDC',
      'BAB'
    ],
    {
      A: Item.of('pncepcb:high_power_unassembled_pcb'),
      B: Item.of('pncepcb:high_temp_finished_pcb'),
      C: Item.of(MATERIALS.FROSTSTEEL.ingot),
      D: Item.of(MATERIALS.ETRIUM.plate),
      E: Item.of('pneumaticcraft:heat_sink')
    }
  )
}

function _bio_compatible_pcb(event) {
  event.custom({
    "type": "thermal:crystallizer",
    "ingredients": [
      {
        "fluid": "biomesoplenty:blood",
        "amount": 250.0
      },
      {
        "item": MATERIALS.ZIRCONIUM.plate,
        "count": 1.0
      },
      {
        "item": MATERIALS.PALLADIUM.nugget,
        "count": 8.0
      }
    ],
    "result": [
      {
        "item": "pncepcb:bio_compatible_empty_pcb",
        "count": 1.0
      }
    ],
    "energy": 30000
  })

  assembly_laser(event, Item.of('pncepcb:bio_compatible_empty_pcb'), Item.of('pncepcb:bio_compatible_unassembled_pcb'))
  event.smelting('pncepcb:bio_compatible_empty_pcb', 'pncepcb:bio_compatible_failed_pcb')

  event.shaped(
    Item.of('pncepcb:bio_compatible_finished_pcb', 1),
    [
      ' C ',
      'BAB',
      ' C '
    ],
    {
      A: Item.of('pncepcb:bio_compatible_unassembled_pcb'),
      B: Item.of('pncepcb:smd_capacitor'),
      C: Item.of('pncepcb:smd_transistor')
    }
  )
}


function _flexible_pcb(event) {
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "item": "thermal:cured_rubber",
        "count": 1
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "item": "ae2:silicon",
        "count": 1
      }
    ],
    "pressure": 1.0,
    "results": [
      {
        "item": "pncepcb:flexible_substrate"
      }
    ]
  })

  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "item": "pncepcb:flexible_substrate",
        "count": 1
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "item": MATERIALS.SILVER.nugget,
        "count": 2
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "item": MATERIALS.REDSTONE.ingot,
        "count": 1
      }
    ],
    "pressure": 1.0,
    "results": [
      {
        "item": "pncepcb:flexible_empty_pcb"
      }
    ]
  })

  assembly_laser(event, Item.of('pncepcb:flexible_empty_pcb'), Item.of('pncepcb:flexible_unassembled_pcb'))
  fail_pcb_recipe(event,
    Item.of('pncepcb:flexible_failed_pcb'),
    Item.of("pncepcb:flexible_substrate"),
    [
      Item.of(MATERIALS.REDSTONE.ingot),
      Item.of(MATERIALS.SILVER.nugget)
    ]
  )

  event.shaped(
    Item.of('pncepcb:flexible_finished_pcb', 1),
    [
      ' C ',
      'BAB',
      ' C '
    ],
    {
      A: Item.of('pncepcb:flexible_unassembled_pcb'),
      B: Item.of('pncepcb:smd_capacitor'),
      C: Item.of('pncepcb:smd_transistor')
    }
  )
}

function _high_quantum_pcb(event) {
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "item": MATERIALS.ENDERIUM.plate,
        "count": 1
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "item": MATERIALS.CALORITE.plate,
        "count": 1
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "item": MATERIALS.NIOBIUM.nugget,
        "count": 4
      }
    ],
    "pressure": 4.0,
    "results": [
      {
        "item": "pncepcb:quantum_empty_pcb"
      }
    ]
  })

  assembly_laser(event, Item.of('pncepcb:quantum_empty_pcb'), Item.of('pncepcb:quantum_unassembled_pcb'))
  event.smelting('pncepcb:quantum_empty_pcb', 'pncepcb:quantum_failed_pcb')

  event.shaped(
    Item.of('pncepcb:quantum_finished_pcb', 1),
    [
      'CDC',
      'BAB'
    ],
    {
      A: Item.of('pncepcb:quantum_unassembled_pcb'),
      B: Item.of('pncepcb:high_power_finished_pcb'),
      C: Item.of('ae2:singularity'),
      D: Item.of(MATERIALS.STELLARIUM.plate)
    }
  )
}


function _crystal_clear_pcb(event) {
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      {
        "type": "pneumaticcraft:stacked_item",
        "item": Item.of('ae2:fluix_crystal').getId(),
        "count": 3
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "item": Item.of('chemlib:barium_oxide_dust').getId(),
        "count": 1
      },
      {
        "type": "pneumaticcraft:stacked_item",
        "item": MATERIALS.SILVER.nugget,
        "count": 4
      }
    ],
    "pressure": 2.0,
    "results": [
      {
        "item": "pncepcb:crystal_clear_empty_pcb"
      }
    ]
  })

  assembly_laser(event, Item.of('pncepcb:crystal_clear_empty_pcb'), Item.of('pncepcb:crystal_clear_unassembled_pcb'))
  event.smelting('pncepcb:crystal_clear_empty_pcb', 'pncepcb:crystal_clear_failed_pcb')

  event.shaped(
    Item.of('pncepcb:crystal_clear_finished_pcb', 1),
    [
      ' C ',
      'BAB',
      ' C '
    ],
    {
      A: Item.of('pncepcb:crystal_clear_unassembled_pcb'),
      B: Item.of('pncepcb:smd_capacitor'),
      C: Item.of('pncepcb:smd_transistor')
    }
  )
}
