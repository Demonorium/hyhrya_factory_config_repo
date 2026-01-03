

StartupEvents.registry("item", event => {

    event.create('nanomachines').displayName('Наномашины')
    event.create('nanomachines_injection').food(food => {
        food.hunger(0)
        food.saturation(0)
        food.alwaysEdible(true)
        food.fastToEat(true)
    }).displayName('Инъекция с наномашинами')

    event.create('neural_nanomachines').displayName('Нейро-совместимые наномашины')
    event.create('neural_nanomachines_injection').food(food => {
        food.hunger(0)
        food.saturation(0)
        food.alwaysEdible(true)
        food.fastToEat(true)
    }).displayName('Инъекция с нейро-совместимыми наномашинами')

    event.create('stimulator_injection').food(food => {
        food.hunger(0)
        food.saturation(0)
        food.alwaysEdible(true)
        food.fastToEat(true)
    }).displayName('Инъекция стимулирующая развитие генома')

    event.create('empty_injection').displayName('Шприц для инъекции')

})