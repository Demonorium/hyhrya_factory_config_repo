ServerEvents.recipes(event => {
    // event.remove({type: 'sgjourney:crystallizing'})
    // event.remove({type: 'sgjourney:advanced_crystallizing'})
    
    event.remove({id: 'sgjourney:reaction_chamber'})
    event.shaped(
        Item.of('sgjourney:reaction_chamber', 4),
        [
            "ABA",
            "BDB",
            "ABA"
        ],
        {
            A: Item.of('sgjourney:naquadah_alloy'),
            B: Item.of('mekanismgenerators:fission_reactor_casing'),
            D: Item.of(MATERIALS.GADOLINIUM.block)
        }
    )


})