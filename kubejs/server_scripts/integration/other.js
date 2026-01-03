// priority: 0
ServerEvents.recipes(event => {
    event.replaceInput({id: "explorerscompass:explorers_compass"}, "minecraft:compass", "ae2:meteorite_compass")
    event.replaceInput({id: "naturescompass:natures_compass"}, "minecraft:compass", "ae2:meteorite_compass")
    event.replaceInput({id: "aquaculture:tin_can_to_iron_nugget"}, "minecraft:iron_nugget", "moremekanismprocessing:aluminum_nugget")

    event.remove({id: "orbital_railgun:orbital_railgun"})
    event.remove({id: "thermal:machines/crucible/crucible_magma_block_to_lava"})

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

    
})