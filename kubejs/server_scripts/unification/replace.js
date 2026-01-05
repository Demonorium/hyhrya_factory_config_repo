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
    for (const [key, value] of Object.entries(MATERIALS)) {
        event.removeAll(value.normal_ores_tag.substring(1))
        event.add(value.normal_ores_tag.substring(1), value.normal_ores)
    }
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
})


LootJS.modifiers((event) => {
	let mod = event.addLootTypeModifier(LootType.CHEST)
    LOOT_TO_REPLACE.forEach(element => {
        mod.replaceLoot(element.from, element.to)
    })
	ITEMS_TO_HIDE.forEach(element => {
        if (!(element.endsWith('_bucket'))) {
       	    mod.removeLoot(element)
        }
    })
    LOOT_TO_HIDE.forEach(element => {
        if (!(element.endsWith('_bucket'))) {
       	    mod.removeLoot(element)
        }
    })
    
	mod = event.addLootTypeModifier(LootType.ENTITY)
    LOOT_TO_REPLACE.forEach(element => {
        mod.replaceLoot(element.from, element.to)
    })
	ITEMS_TO_HIDE.forEach(element => {
        if (!(element.endsWith('_bucket'))) {
       	    mod.removeLoot(element)
        }
    })
    LOOT_TO_HIDE.forEach(element => {
        if (!(element.endsWith('_bucket'))) {
       	    mod.removeLoot(element)
        }
    })
    
	mod = event.addLootTypeModifier(LootType.BLOCK)
    LOOT_TO_REPLACE.forEach(element => {
        mod.replaceLoot(element.from, element.to)
    })
});