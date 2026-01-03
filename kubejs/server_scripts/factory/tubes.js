ServerEvents.recipes(event => {



    
    event.remove({ mod: 'curvy_pipes' })
    event.shaped(
        Item.of('curvy_pipes:tiny_item_pipe', 2),
        [
            'A A',
            'B B',
            'A A'
        ],
        {
            A: Item.of(MATERIALS.IRON.ingot),
            B: Item.of(MATERIALS.IRON.gear)
        }
    )
    event.shaped(
        Item.of('curvy_pipes:tiny_item_pipe', 4),
        [
            'A A',
            'B B',
            'A A'
        ],
        {
            A: Item.of(MATERIALS.IRON.plate),
            B: Item.of(MATERIALS.IRON.gear)
        }
    )
    event.shaped(
        Item.of('curvy_pipes:tiny_item_pipe', 8),
        [
            'A A',
            'B B',
            'A A'
        ],
        {
            A: Item.of(MATERIALS.ALUMINUM.plate),
            B: Item.of(MATERIALS.IRON.gear)
        }
    )


    event.shaped(
        Item.of('curvy_pipes:small_item_pipe', 2),
        [
            'ACA',
            'BCB',
            'ACA'
        ],
        {
            A: Item.of(MATERIALS.IRON.ingot),
            B: Item.of(MATERIALS.IRON.gear),
            C: Item.of('curvy_pipes:tiny_item_pipe')
        }
    )
    event.shaped(
        Item.of('curvy_pipes:small_item_pipe', 4),
        [
            'ACA',
            'BCB',
            'ACA'
        ],
        {
            A: Item.of(MATERIALS.IRON.plate),
            B: Item.of(MATERIALS.IRON.gear),
            C: Item.of('curvy_pipes:tiny_item_pipe')
        }
    )
    event.shaped(
        Item.of('curvy_pipes:small_item_pipe', 8),
        [
            'ACA',
            'BCB',
            'ACA'
        ],
        {
            A: Item.of(MATERIALS.ALUMINUM.plate),
            B: Item.of(MATERIALS.IRON.gear),
            C: Item.of('curvy_pipes:tiny_item_pipe')
        }
    )

    event.shaped(
        Item.of('curvy_pipes:medium_item_pipe', 2),
        [
            'ACA',
            'BCB',
            'ACA'
        ],
        {
            A: Item.of(MATERIALS.TIN.ingot),
            B: Item.of(MATERIALS.TIN.gear),
            C: Item.of('curvy_pipes:small_item_pipe')
        }
    )
    event.shaped(
        Item.of('curvy_pipes:medium_item_pipe', 4),
        [
            'ACA',
            'BCB',
            'ACA'
        ],
        {
            A: Item.of(MATERIALS.TIN.plate),
            B: Item.of(MATERIALS.TIN.gear),
            C: Item.of('curvy_pipes:small_item_pipe')
        }
    )
    event.shaped(
        Item.of('curvy_pipes:medium_item_pipe', 8),
        [
            'ACA',
            'BCB',
            'ACA'
        ],
        {
            A: Item.of(MATERIALS.ALUMINUM.plate),
            B: Item.of(MATERIALS.IRON.gear),
            C: Item.of('curvy_pipes:small_item_pipe')
        }
    )

    event.shaped(
        Item.of('curvy_pipes:large_item_pipe', 4),
        [
            'ACA',
            'BCB',
            'ACA'
        ],
        {
            A: Item.of('mekanism:alloy_reinforced'),
            B: Item.of(MATERIALS.DIAMOND.gear),
            C: Item.of('curvy_pipes:medium_item_pipe')
        }
    )
    event.shaped(
        Item.of('curvy_pipes:large_item_pipe', 8),
        [
            'ACA',
            'BCB',
            'ACA'
        ],
        {
            A: Item.of(MATERIALS.TITANIUM.plate),
            B: Item.of(MATERIALS.DIAMOND.gear),
            C: Item.of('curvy_pipes:medium_item_pipe')
        }
    )

    event.shaped(
        Item.of('curvy_pipes:huge_item_pipe', 4),
        [
            'ACA',
            'BCB',
            'ACA'
        ],
        {
            A: Item.of('mekanism:alloy_atomic'),
            B: Item.of(MATERIALS.DIAMOND.gear),
            C: Item.of('curvy_pipes:large_item_pipe')
        }
    )
    event.shaped(
        Item.of('curvy_pipes:huge_item_pipe', 8),
        [
            'ACA',
            'BCB',
            'ACA'
        ],
        {
            A: Item.of(MATERIALS.TITANIUM.plate),
            B: Item.of(MATERIALS.DIAMOND.gear),
            C: Item.of('curvy_pipes:large_item_pipe')
        }
    )

    const pipes = [
        "tiny",
        "small",
        "medium",
        "large",
        "huge"
    ]

    event.shaped(
        Item.of('curvy_pipes:huge_energy_pipe', 1),
        [
            'ABA',
            'ABA',
            'ABA'
        ],
        {
            A: Item.of('mekanism:alloy_infused'),
            B: Item.of("mekanism_extras:absolute_universal_cable")
        }
    )

    let i = 0
    pipes.forEach(type => {
        if (type != 'huge') {
            event.shaped(
                Item.of('curvy_pipes:' + type + '_energy_pipe', 1),
                [
                    'ABA',
                    'ABA',
                    'ABA'
                ],
                {
                    A: Item.of('mekanism:alloy_infused'),
                    B: Item.of("mekanism:" + meka_levels[i] + "_universal_cable")
                }
            )
        }
        
        i += 1
        
        event.shaped(
            Item.of('curvy_pipes:' + type + '_fluid_pipe', 1),
            [
                'ABA'
            ],
            {
                A: "#minecraft:wool",
                B: Item.of("curvy_pipes:" + type + "_item_pipe")
            }
        )
    })

    event.shaped(
        Item.of('curvy_pipes:redstone_cable', 1),
        [
            'ABA'
        ],
        {
            A: Item.of('clay_ball'),
            B: Item.of("morered:redwire_spool")
        }
    )

    event.replaceInput({mod: 'morered'}, 'morered:red_alloy_ingot', 'mekanism:alloy_infused')
})