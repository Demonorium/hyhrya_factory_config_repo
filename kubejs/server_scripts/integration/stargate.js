ServerEvents.recipes(event => {
    // event.remove({type: 'sgjourney:crystallizing'})
    // event.remove({type: 'sgjourney:advanced_crystallizing'})

    event.replaceInput({id: 'sgjourney:basic_interface'}, 'copper_ingot', 'superbwarfare:medium_battery_pack')
    event.replaceInput({id: 'sgjourney:basic_interface'}, 'redstone', 'mekanism:elite_control_circuit')
    event.replaceInput({id: 'sgjourney:gdo'}, 'quartz', 'pneumaticcraft:remote')
    event.replaceInput({id: 'sgjourney:gdo'}, 'iron_ingot', MATERIALS.ALUMINUM.plate)
    event.replaceInput({id: 'sgjourney:classic_stargate_base_block'}, 'sgjourney:refined_naquadah', 'mekanism:teleporter')
    event.replaceInput({id: 'sgjourney:classic_stargate_chevron_block'}, 'sgjourney:refined_naquadah', 'mekanism:teleporter')
    event.replaceInput({id: 'sgjourney:classic_stargate_ring_block'}, 'sgjourney:refined_naquadah', 'mekanism:teleporter_frame')
    event.replaceInput({id: 'sgjourney:stargate_shielding_ring'}, '#sgjourney:naquadah_alloy_nugget', MATERIALS.STEEL.nugget)
    event.replaceInput({id: 'sgjourney:naquadah_generator_mark_i'}, 'sgjourney:naquadah_slab', MATERIALS.GADOLINIUM.plate)
    
    event.remove({id: 'sgjourney:naquadah_fuel_rod'})
    event.shaped(
        Item.of('sgjourney:naquadah_fuel_rod', 1),
        [
            "ABA",
            "ABA",
            "DCD"
        ],
        {
            A: Item.of(MATERIALS.GADOLINIUM.plate),
            B: Item.of('sgjourney:refined_naquadah'),
            D: Item.of('sgjourney:naquadah_alloy'),
            C: Item.of('mekanism:ultimate_control_circuit')
        }
    )

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
    
    event.shaped(Item.of('sgjourney:naquadah_wire'), [
        "AAA",
        "CCC",
        "AAA",
    ], {
        A: Item.of('sgjourney:naquadah_alloy_nugget'),
        C: Item.of('mekanism_extras:alloy_radiance')
    })
    event.shaped(Item.of('sgjourney:small_naquadah_cable'), [
        "AAA",
        "CCC",
        "AAA",
    ], {
        A: Item.of('sgjourney:naquadah_wire'),
        C: Item.of('mekanism_extras:alloy_thermonuclear')
    })
    event.shaped(Item.of('sgjourney:medium_naquadah_cable'), [
        "AAA",
        "CCC",
        "AAA",
    ], {
        A: Item.of('sgjourney:naquadah'),
        C: Item.of('sgjourney:small_naquadah_cable')
    })
    event.shaped(Item.of('sgjourney:large_naquadah_cable'), [
        "AAA",
        "CCC",
        "AAA",
    ], {
        A: Item.of('sgjourney:naquadah_alloy'),
        C: Item.of('sgjourney:medium_naquadah_cable')
    })

})

ServerEvents.tags("item", event => {
    event.remove("sgjourney:naquadah")
    event.add("sgjourney:naquadah", "mekanism_extras:ingot_naquadah")
})