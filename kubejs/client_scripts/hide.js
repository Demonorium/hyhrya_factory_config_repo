// priority: 0

JEIEvents.hideItems(event => {
    event.hide('ae2:facade')

    ITEMS_TO_HIDE.forEach(element => {
        event.hide(element)
    })
})

JEIEvents.hideFluids(event => {
    FLUIDS_TO_HIDE.forEach(element => {
        event.hide(element)
    })
})
