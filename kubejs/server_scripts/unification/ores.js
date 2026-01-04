// priority: 0


ServerEvents.recipes(event => {
    console.log("ore process loading...")
    
    event.remove({id: 'sgjourney:refined_naquadah_from_blasting'})
    event.remove({id: 'sgjourney:naquadah_alloy_from_naquadah_block'})
    event.remove({id: 'sgjourney:naquadah_alloy'})
    event.remove({id: 'sgjourney:naquadah_alloy_from_naquadah_slab'})
    event.remove({id: 'sgjourney:naquadah_alloy_from_naquadah_stairs'})
    event.remove({id: 'sgjourney:naquadah_from_blasting'})

    event.custom({
      "type": "dysonsphere:laser_crafting",
      "input": {
        "item": MATERIALS.CALORITE.dirty
      },
      "inputEnergy": 500000,
      "output": {
        "item": MATERIALS.CALORITE.dust
      }
    })

    event.custom({
      "type": "dysonsphere:laser_crafting",
      "input": {
        "item": MATERIALS.NAQUADAH.dirty
      },
      "inputEnergy": 100000,
      "output": {
        "item": MATERIALS.NAQUADAH.dust
      }
    })

    event.custom({
      "type": "dysonsphere:laser_crafting",
      "input": {
        "item": MATERIALS.NAQUADAH.raw
      },
      "inputEnergy": 10000000,
      "output": {
        "item": Item.of("sgjourney:pure_naquadah").getId()
      }
    })

    event.custom({
      "type": "dysonsphere:laser_crafting",
      "input": {
        "item": "sgjourney:pure_naquadah"
      },
      "inputEnergy": 1000000,
      "output": {
        "item": Item.of("sgjourney:naquadah").getId()
      }
    })

    event.custom({
      "type": "thermal:pulverizer",
      "ingredient": {
        "item": Item.of('ad_astra:venus_calorite_ore').getId(),
        "count": 1.0
      },
      "result": [
        {
          "item": MATERIALS.CALORITE.raw,
          "chance": 2.5
        },
        {
          "item": MATERIALS.CALORITE.raw,
          "chance": 0.5
        },
        {
          "item": "ad_astra:venus_sand",
          "chance": 0.25
        }
      ],
      "experience": 1.0
    })

    event.custom({
      "type": "thermal:pulverizer",
      "ingredient": {
        "item": Item.of('ad_astra:deepslate_calorite_ore').getId(),
        "count": 1.0
      },
      "result": [
        {
          "item": MATERIALS.CALORITE.raw,
          "chance": 2.5
        },
        {
          "item": MATERIALS.CALORITE.raw,
          "chance": 0.5
        },
        {
          "item": "minecraft:sand",
          "chance": 0.25
        }
      ],
      "experience": 1.0
    })

    event.custom({
      "type": "thermal:pulverizer",
      "ingredient": {
        "item": Item.of('sgjourney:naquadah_ore').getId(),
        "count": 1.0
      },
      "result": [
        {
          "item": MATERIALS.NAQUADAH.raw,
          "chance": 3.
        },
        {
          "item": Item.of('sgjourney:pure_naquadah').getId(),
          "chance": 0.5
        },
        {
          "item": "ad_astra:venus_sand",
          "chance": 0.25
        }
      ],
      "experience": 1.0
    })

    event.custom({
      "type": "thermal:pulverizer",
      "ingredient": {
        "item": Item.of('sgjourney:deepslate_naquadah_ore').getId(),
        "count": 1.0
      },
      "result": [
        {
          "item": MATERIALS.NAQUADAH.raw,
          "chance": 3.
        },
        {
          "item": Item.of('sgjourney:pure_naquadah').getId(),
          "chance": 0.5
        },
        {
          "item": "minecraft:sand",
          "chance": 0.25
        }
      ],
      "experience": 1.0
    })
    
    event.custom({
        "type": "mekanism:reaction",
        "duration": 600,
        "energyRequired": 150,
        "fluidInput": {
          "amount": 100,
          "fluid": Fluid.of('sgjourney:liquid_naquadah').getId()
        },
        "gasInput": {
          "amount": 5000,
          "gas": "mekanism:superheated_sodium"
        },
        "itemInput": {
          "amount": 5,
          "ingredient": {
            "item": MATERIALS.CLOGGRUM.ingot
          }
        },
        "itemOutput": {
          "count": 1,
          "item": 'sgjourney:naquadah_alloy'
        },
        "gasOutput": {
          "amount": 5000,
          "gas": "mekanism:sodium"
        }
    })

    console.log("ore process loaded")
})


ServerEvents.recipes(event => {
    event.remove({id: "bfr:irradiating/polonium_from_waste"})
    event.remove({id: "bfr:irradiating/dirty_netherite_scrap"})
})