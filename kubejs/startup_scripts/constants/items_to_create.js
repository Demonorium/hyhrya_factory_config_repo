// priority: 3
const ITEMS_TO_CREATE = [
	{
		name: "naquadah_plate",
	},
	{
		name: "naquadah_gear",
	},
	{
		name: "steel_gear",
	},
	{
		name: "crystal_arcmetal",
	},
	{
		name: "dirty_dust_arcmetal",
	},
	{
		name: "clump_arcmetal",
	},
	{
		name: "shard_arcmetal",
	},
	{
		name: "arcmetal_plate",
	},
	{
		name: "arcmetal_gear",
	},
	{
		name: "arcmetal_dust",
	},
	{
		name: "crystal_voidmetal",
	},
	{
		name: "dirty_dust_voidmetal",
	},
	{
		name: "clump_voidmetal",
	},
	{
		name: "shard_voidmetal",
	},
	{
		name: "voidmetal_plate",
	},
	{
		name: "voidmetal_gear",
	},
	{
		name: "voidmetal_dust",
	},
	{
		name: "crystal_solarmetal",
	},
	{
		name: "dirty_dust_solarmetal",
	},
	{
		name: "clump_solarmetal",
	},
	{
		name: "shard_solarmetal",
	},
	{
		name: "solarmetal_plate",
	},
	{
		name: "solarmetal_gear",
	},
	{
		name: "solarmetal_dust",
	},
	{
		name: "crystal_plasteel",
	},
	{
		name: "dirty_dust_plasteel",
	},
	{
		name: "clump_plasteel",
	},
	{
		name: "shard_plasteel",
	},
	{
		name: "plasteel_plate",
	},
	{
		name: "plasteel_gear",
	},
	{
		name: "plasteel_dust",
	},
	{
		name: "crystal_regalium",
	},
	{
		name: "dirty_dust_regalium",
	},
	{
		name: "clump_regalium",
	},
	{
		name: "shard_regalium",
	},
	{
		name: "crystal_cloggrum",
	},
	{
		name: "dirty_dust_cloggrum",
	},
	{
		name: "clump_cloggrum",
	},
	{
		name: "shard_cloggrum",
	},
	{
		name: "cloggrum_plate",
	},
	{
		name: "cloggrum_gear",
	},
	{
		name: "cloggrum_dust",
	},
	{
		name: "crystal_froststeel",
	},
	{
		name: "dirty_dust_froststeel",
	},
	{
		name: "clump_froststeel",
	},
	{
		name: "shard_froststeel",
	},
	{
		name: "froststeel_plate",
	},
	{
		name: "froststeel_gear",
	},
	{
		name: "froststeel_dust",
	},
	{
		name: "crystal_utherium",
	},
	{
		name: "dirty_dust_utherium",
	},
	{
		name: "clump_utherium",
	},
	{
		name: "shard_utherium",
	},
	{
		name: "crystal_extraterrestrial_steel",
	},
	{
		name: "dirty_dust_extraterrestrial_steel",
	},
	{
		name: "clump_extraterrestrial_steel",
	},
	{
		name: "shard_extraterrestrial_steel",
	},
	{
		name: "extraterrestrial_steel_gear",
	},
	{
		name: "extraterrestrial_steel_dust",
	},
	{
		name: "azure_electrum_plate",
	},
	{
		name: "azure_electrum_gear",
	},
	{
		name: "lithium_gear",
	},
	{
		name: "beryllium_gear",
	},
	{
		name: "boron_plate",
	},
	{
		name: "boron_gear",
	},
	{
		name: "sodium_gear",
	},
	{
		name: "magnesium_gear",
	},
	{
		name: "aluminum_gear",
	},
	{
		name: "potassium_gear",
	},
	{
		name: "calcium_gear",
	},
	{
		name: "scandium_gear",
	},
	{
		name: "titanium_gear",
	},
	{
		name: "vanadium_gear",
	},
	{
		name: "chromium_gear",
	},
	{
		name: "manganese_gear",
	},
	{
		name: "cobalt_gear",
	},
	{
		name: "zinc_gear",
	},
	{
		name: "gallium_gear",
	},
	{
		name: "rubidium_gear",
	},
	{
		name: "strontium_gear",
	},
	{
		name: "yttrium_gear",
	},
	{
		name: "zirconium_gear",
	},
	{
		name: "niobium_gear",
	},
	{
		name: "molybdenum_gear",
	},
	{
		name: "ruthenium_gear",
	},
	{
		name: "rhodium_gear",
	},
	{
		name: "palladium_gear",
	},
	{
		name: "cadmium_gear",
	},
	{
		name: "indium_gear",
	},
	{
		name: "cesium_gear",
	},
	{
		name: "barium_gear",
	},
	{
		name: "lanthanum_gear",
	},
	{
		name: "cerium_gear",
	},
	{
		name: "praseodymium_gear",
	},
	{
		name: "neodymium_gear",
	},
	{
		name: "samarium_gear",
	},
	{
		name: "europium_gear",
	},
	{
		name: "gadolinium_gear",
	},
	{
		name: "terbium_gear",
	},
	{
		name: "dysprosium_gear",
	},
	{
		name: "holmium_gear",
	},
	{
		name: "erbium_gear",
	},
	{
		name: "thulium_gear",
	},
	{
		name: "ytterbium_gear",
	},
	{
		name: "lutetium_gear",
	},
	{
		name: "hafnium_gear",
	},
	{
		name: "tantalum_gear",
	},
	{
		name: "tungsten_gear",
	},
	{
		name: "rhenium_gear",
	},
	{
		name: "osmium_gear",
	},
	{
		name: "iridium_gear",
	},
	{
		name: "platinum_gear",
	},
	{
		name: "thallium_gear",
	},
	{
		name: "bismuth_gear",
	},
	{
		name: "polonium_gear",
	},
	{
		name: "francium_gear",
	},
	{
		name: "radium_gear",
	},
	{
		name: "actinium_gear",
	},
	{
		name: "thorium_gear",
	},
	{
		name: "protactinium_gear",
	},
	{
		name: "uranium_gear",
	},
]