LootJS.modifiers((event) => {
    event.addEntityLootModifier("undergarden:nargoyle")
        .addLoot("minecraft:leather")
        .randomChanceWithEnchantment("minecraft:looting", [0, 0.1, 0.5, 1])
        .addLoot("undergarden:blood_globule")

})