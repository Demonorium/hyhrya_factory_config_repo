// priority: 0

JEIEvents.hideItems(event => {
    event.hide('ae2:facade')
    event.hide('mekanism:creative_fluid_tank')
    event.hide('mekanism:creative_chemical_tank')

    ITEMS_TO_HIDE.forEach(element => {
        event.hide(element)
    })
})

JEIEvents.hideFluids(event => {
    FLUIDS_TO_HIDE.forEach(element => {
        event.hide(element)
    })
})