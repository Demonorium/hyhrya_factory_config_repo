// priority: 0


ServerEvents.recipes(event => {
    event.remove({id: 'sophisticatedbackpacks:tank_upgrade'})
    event.shaped(
        Item.of('sophisticatedbackpacks:tank_upgrade'),
        [
            "ABA",
            "CDC",
            "ACA",
        ],
        {
            "A": Item.of(MATERIALS.PLASTIC.ingot),
            'B': Item.of('pneumaticcraft:small_tank'),
            "C": Item.of(MATERIALS.COMPRESSED_IRON.ingot),
            "D": Item.of('sophisticatedbackpacks:upgrade_base')
        }
    )
    
})