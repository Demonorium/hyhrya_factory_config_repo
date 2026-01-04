// priority: -1

ServerEvents.recipes(event => {
    ITEMS_TO_HIDE.forEach(element => {
        event.remove({output: element})
    })
})