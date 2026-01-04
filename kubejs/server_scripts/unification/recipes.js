// priority: 1

ServerEvents.recipes(event => {
    console.log('recipe loading...')
    CUSTOM_RECIPES.forEach(element => {
        event.custom(element)
    })
    RECIPES_TO_HIDE.forEach(element => {
        event.remove({id: element})
    })
    console.log('recipes loaded')
})