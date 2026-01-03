// priority: 0

ServerEvents.recipes(event => {
    event.remove({ id: 'thermal:fire_charge/obsidian_glass_2' })
    event.remove({ id: 'thermal:machines/smelter/smelter_glass_obsidian' })

    event.remove({ id: 'mekanismgenerators:reactor/glass' })
    event.remove({ id: 'mekanism:structural_glass' })
    event.remove({ id: 'mekanismelements:crafting/structural_glass' })
    event.remove({ id: 'mekanismelements:crafting/structural_glass' })

})