// priority: 0

ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:crushing",
        "input": {
          "ingredient": {
            "item": 'undergarden:sediment'
          }
        },
        "output": {
          "item": 'undergarden:utheric_shard'
        }
    })

    event.replaceInput({id: 'mekanism:control_circuit/advanced'}, 'mekanism:alloy_infused', MATERIALS.UTHERIUM.crystal)
})