// priority: 0

ServerEvents.tags("item", event => {
	TAGS_TO_FIX.forEach(el => {
		event.removeAll(el.tag)
		event.add(el.tag, el.item)
	})
    CUSTOM_TAGS.forEach(el => {
        el[1].forEach(item => {
            event.add(el[0], item)
        })
        
    })
})

ServerEvents.tags("fluid", event => {
	event.removeAll('minecraft:water')
	event.add('minecraft:water', 'minecraft:water')
	event.add('minecraft:water', 'minecraft:flowing_water')
})

ServerEvents.recipes(event => {
    ITEMS_TO_REPLACE.forEach(element => {
        event.replaceInput({}, element.from, element.to)
    })

    ITEMS_TO_HIDE.forEach(element => {
        event.remove({output: element})
    })
})


LootJS.modifiers((event) => {
	let mod = event.addLootTypeModifier(LootType.CHEST)
    ITEMS_TO_REPLACE.forEach(element => {
        mod.replaceLoot(element.from, element.to)
    })
	ITEMS_TO_HIDE.forEach(element => {
       	mod.removeLoot(element)
    })
    mod.replaceLoot(item => item.id.endsWith('_blueprint') && item.id.startsWith("superb"), Item.of('thermal:bronze_coin', 3))

	mod = event.addLootTypeModifier(LootType.ENTITY)
    ITEMS_TO_REPLACE.forEach(element => {
        mod.replaceLoot(element.from, element.to)
    })
	ITEMS_TO_HIDE.forEach(element => {
       	mod.removeLoot(element)
    })
    mod.replaceLoot(item => item.id.endsWith('_blueprint') && item.id.startsWith("superb"), Item.of('thermal:bronze_coin', 6))

	mod = event.addLootTypeModifier(LootType.BLOCK)
    ITEMS_TO_REPLACE.forEach(element => {
        mod.replaceLoot(element.from, element.to)
    })

    
});