// priority: 3
const CUSTOM_RECIPES_FIX_PURIFICATION = [
	{
		type: "mekanism:purifying",
		chemicalInput: {
			gas: "mekanism:uranium_oxide",
			amount: 4.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "mekanism_extras:ingot_naquadah",
			},
		},
		output: {
			item: "sgjourney:refined_naquadah",
			count: 1.0,
		},
	},
	{
		type: "mekanism:purifying",
		chemicalInput: {
			gas: "mekanism:oxygen",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "mekanism_extras:shard_naquadah",
			},
		},
		output: {
			item: "mekanism_extras:clump_naquadah",
			count: 1.0,
		},
	},
	{
		type: "mekanism:purifying",
		chemicalInput: {
			gas: "mekanism:oxygen",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "moremekanismprocessing:shard_calorite",
			},
		},
		output: {
			item: "moremekanismprocessing:clump_calorite",
			count: 1.0,
		},
	},
	{
		type: "mekanism:purifying",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				tag: "minecraft:coals",
			},
		},
		output: {
			item: "chemlib:carbonic_acid",
			count: 1.0,
		},
	},
]