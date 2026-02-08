// priority: 0

ServerEvents.recipes(event => {
    event.remove({id: "pneumaticcraft:logistics_core"})
    event.shaped("pneumaticcraft:logistics_core",
        [
            'BAB',
            'BDA',
            'ABD'
        ],
        {
            A: Item.of(MATERIALS.IRON.gear),
            B: Item.of('pneumaticcraft:compressed_stone'),
            D: MATERIALS.REDSTONE.ingot
        }
    )

    event.shaped(Item.of("pneumaticcraft:logistics_core", 8),
        [
            'BAB',
            'BDA',
            'ABD'
        ],
        {
            A: Item.of(MATERIALS.BRONZE.gear),
            B: Item.of(MATERIALS.CHROMIUM.plate),
            D: Item.of('mekanism:alloy_infused')
        }
    )

    event.shaped(Item.of("pneumaticcraft:heat_pipe", 12),
        [
            'AAA',
            'BBB',
            'AAA'
        ],
        {
            A:Item.of('pneumaticcraft:thermal_lagging'),
            B: MATERIALS.CADMIUM.ingot,
        }
    )

    event.shaped(Item.of("pneumaticcraft:thermal_lagging", 48),
        [
            'AAA',
            'BBB',
            'AAA'
        ],
        {
            A: Item.of('chemlib:samarium_iii_oxide_dust'),
            B: Item.of('chemlib:magnesium_oxide_dust')
        }
    )

    event.shaped(Item.of("pneumaticcraft:thermal_lagging", 6),
        [
            'AAA',
            'BBB',
            'AAA'
        ],
        {
            A: Item.of('chemlib:magnesium_oxide_dust'),
            B: Item.of('biomancy:stone_powder')
        }
    )
})