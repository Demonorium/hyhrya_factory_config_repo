// priority: 3
const LOOT_TO_REPLACE = [
	{
		from: "mekanism:dust_lapis_lazuli",
		to: "thermal:lapis_dust",
	},
	{
		from: "thermal:diamond_dust",
		to: "mekanism:dust_diamond",
	},
	{
		from: "thermal:emerald_dust",
		to: "mekanism:dust_emerald",
	},
	{
		from: "thermal:netherite_dust",
		to: "mekanism:dust_netherite",
	},
	{
		from: "sgjourney:naquadah_block",
		to: "mekanism_extras:block_naquadah",
	},
	{
		from: "sgjourney:raw_naquadah",
		to: "mekanism_extras:raw_naquadah",
	},
	{
		from: "sgjourney:raw_naquadah_block",
		to: "mekanism_extras:block_raw_naquadah",
	},
	{
		from: "mffs:steel_ingot",
		to: "mekanism:ingot_steel",
	},
	{
		from: "ad_astra:steel_ingot",
		to: "mekanism:ingot_steel",
	},
	{
		from: "superbwarfare:steel_ingot",
		to: "mekanism:ingot_steel",
	},
	{
		from: "ad_astra:steel_nugget",
		to: "mekanism:nugget_steel",
	},
	{
		from: "ad_astra:steel_block",
		to: "mekanism:block_steel",
	},
	{
		from: "superbwarfare:steel_block",
		to: "mekanism:block_steel",
	},
	{
		from: "moremekanismprocessing:desh_ingot",
		to: "ad_astra:desh_ingot",
	},
	{
		from: "moremekanismprocessing:desh_nugget",
		to: "ad_astra:desh_nugget",
	},
	{
		from: "moremekanismprocessing:ostrum_ingot",
		to: "ad_astra:ostrum_ingot",
	},
	{
		from: "moremekanismprocessing:ostrum_nugget",
		to: "ad_astra:ostrum_nugget",
	},
	{
		from: "moremekanismprocessing:calorite_ingot",
		to: "ad_astra:calorite_ingot",
	},
	{
		from: "moremekanismprocessing:calorite_nugget",
		to: "ad_astra:calorite_nugget",
	},
	{
		from: "moremekanismprocessing:gem_bort",
		to: "silentgear:bort",
	},
	{
		from: "moremekanismprocessing:crimson_iron_ingot",
		to: "silentgear:crimson_iron_ingot",
	},
	{
		from: "moremekanismprocessing:crimson_iron_nugget",
		to: "silentgear:crimson_iron_nugget",
	},
	{
		from: "moremekanismprocessing:dust_crimson_iron",
		to: "silentgear:crimson_iron_dust",
	},
	{
		from: "moremekanismprocessing:azure_silver_ingot",
		to: "silentgear:azure_silver_ingot",
	},
	{
		from: "moremekanismprocessing:azure_silver_nugget",
		to: "silentgear:azure_silver_nugget",
	},
	{
		from: "moremekanismprocessing:dust_azure_silver",
		to: "silentgear:azure_silver_dust",
	},
	{
		from: "silentgear:bronze_ingot",
		to: "mekanism:ingot_bronze",
	},
	{
		from: "thermal:bronze_ingot",
		to: "mekanism:ingot_bronze",
	},
	{
		from: "thermal:bronze_nugget",
		to: "mekanism:nugget_bronze",
	},
	{
		from: "thermal:bronze_block",
		to: "mekanism:block_bronze",
	},
	{
		from: "thermal:bronze_dust",
		to: "mekanism:dust_bronze",
	},
	{
		from: "moremekanismprocessing:dust_ruby",
		to: "thermal:ruby_dust",
	},
	{
		from: "moremekanismprocessing:dust_sapphire",
		to: "thermal:sapphire_dust",
	},
	{
		from: "moremekanismprocessing:nickel_ingot",
		to: "thermal:nickel_ingot",
	},
	{
		from: "chemlib:nickel_ingot",
		to: "thermal:nickel_ingot",
	},
	{
		from: "moremekanismprocessing:nickel_nugget",
		to: "thermal:nickel_nugget",
	},
	{
		from: "chemlib:nickel_nugget",
		to: "thermal:nickel_nugget",
	},
	{
		from: "chemlib:nickel_metal_block",
		to: "thermal:nickel_block",
	},
	{
		from: "chemlib:nickel_plate",
		to: "thermal:nickel_plate",
	},
	{
		from: "moremekanismprocessing:dust_nickel",
		to: "thermal:nickel_dust",
	},
	{
		from: "chemlib:nickel_dust",
		to: "thermal:nickel_dust",
	},
	{
		from: "moremekanismprocessing:dust_apatite",
		to: "thermal:apatite_dust",
	},
	{
		from: "moremekanismprocessing:gem_cinnabar",
		to: "thermal:cinnabar",
	},
	{
		from: "moremekanismprocessing:dust_cinnabar",
		to: "thermal:cinnabar_dust",
	},
	{
		from: "moremekanismprocessing:dust_niter",
		to: "thermal:niter_dust",
	},
	{
		from: "chemlib:lithium_ingot",
		to: "moremekanismprocessing:lithium_ingot",
	},
	{
		from: "chemlib:lithium_nugget",
		to: "moremekanismprocessing:lithium_nugget",
	},
	{
		from: "chemlib:lithium_dust",
		to: "mekanism:dust_lithium",
	},
	{
		from: "chemlib:boron_dust",
		to: "moremekanismprocessing:dust_boron",
	},
	{
		from: "chemlib:magnesium_ingot",
		to: "moremekanismprocessing:magnesium_ingot",
	},
	{
		from: "chemlib:magnesium_nugget",
		to: "moremekanismprocessing:magnesium_nugget",
	},
	{
		from: "chemlib:magnesium_dust",
		to: "moremekanismprocessing:dust_magnesium",
	},
	{
		from: "chemlib:aluminum_ingot",
		to: "moremekanismprocessing:aluminum_ingot",
	},
	{
		from: "chemlib:aluminum_nugget",
		to: "moremekanismprocessing:aluminum_nugget",
	},
	{
		from: "chemlib:aluminum_dust",
		to: "moremekanismprocessing:dust_aluminum",
	},
	{
		from: "chemlib:titanium_ingot",
		to: "moremekanismprocessing:titanium_ingot",
	},
	{
		from: "chemlib:titanium_nugget",
		to: "moremekanismprocessing:titanium_nugget",
	},
	{
		from: "chemlib:titanium_dust",
		to: "moremekanismprocessing:dust_titanium",
	},
	{
		from: "ad_astra:iron_plate",
		to: "thermal:iron_plate",
	},
	{
		from: "chemlib:iron_plate",
		to: "thermal:iron_plate",
	},
	{
		from: "thermal:iron_dust",
		to: "mekanism:dust_iron",
	},
	{
		from: "chemlib:iron_dust",
		to: "mekanism:dust_iron",
	},
	{
		from: "chemlib:cobalt_ingot",
		to: "moremekanismprocessing:cobalt_ingot",
	},
	{
		from: "chemlib:cobalt_nugget",
		to: "moremekanismprocessing:cobalt_nugget",
	},
	{
		from: "chemlib:cobalt_dust",
		to: "moremekanismprocessing:dust_cobalt",
	},
	{
		from: "pneumaticcraft:copper_nugget",
		to: "thermal:copper_nugget",
	},
	{
		from: "superbwarfare:copper_plate",
		to: "thermal:copper_plate",
	},
	{
		from: "chemlib:copper_plate",
		to: "thermal:copper_plate",
	},
	{
		from: "thermal:copper_dust",
		to: "mekanism:dust_copper",
	},
	{
		from: "chemlib:copper_dust",
		to: "mekanism:dust_copper",
	},
	{
		from: "chemlib:zinc_ingot",
		to: "moremekanismprocessing:zinc_ingot",
	},
	{
		from: "chemlib:zinc_nugget",
		to: "moremekanismprocessing:zinc_nugget",
	},
	{
		from: "chemlib:zinc_dust",
		to: "moremekanismprocessing:dust_zinc",
	},
	{
		from: "chemlib:strontium_nugget",
		to: "chemlib:strontium_nugget",
	},
	{
		from: "chemlib:palladium_dust",
		to: "chemlib:palladium_dust",
	},
	{
		from: "superbwarfare:silver_ingot",
		to: "thermal:silver_ingot",
	},
	{
		from: "moremekanismprocessing:silver_ingot",
		to: "thermal:silver_ingot",
	},
	{
		from: "chemlib:silver_ingot",
		to: "thermal:silver_ingot",
	},
	{
		from: "moremekanismprocessing:silver_nugget",
		to: "thermal:silver_nugget",
	},
	{
		from: "chemlib:silver_nugget",
		to: "thermal:silver_nugget",
	},
	{
		from: "superbwarfare:silver_block",
		to: "thermal:silver_block",
	},
	{
		from: "chemlib:silver_metal_block",
		to: "thermal:silver_block",
	},
	{
		from: "superbwarfare:raw_silver",
		to: "thermal:raw_silver",
	},
	{
		from: "chemlib:silver_plate",
		to: "thermal:silver_plate",
	},
	{
		from: "moremekanismprocessing:dust_silver",
		to: "thermal:silver_dust",
	},
	{
		from: "chemlib:silver_dust",
		to: "thermal:silver_dust",
	},
	{
		from: "thermal:tin_ingot",
		to: "mekanism:ingot_tin",
	},
	{
		from: "chemlib:tin_ingot",
		to: "mekanism:ingot_tin",
	},
	{
		from: "thermal:tin_nugget",
		to: "mekanism:nugget_tin",
	},
	{
		from: "chemlib:tin_nugget",
		to: "mekanism:nugget_tin",
	},
	{
		from: "thermal:tin_block",
		to: "mekanism:block_tin",
	},
	{
		from: "chemlib:tin_metal_block",
		to: "mekanism:block_tin",
	},
	{
		from: "thermal:raw_tin",
		to: "mekanism:raw_tin",
	},
	{
		from: "thermal:raw_tin_block",
		to: "mekanism:block_raw_tin",
	},
	{
		from: "chemlib:tin_plate",
		to: "thermal:tin_plate",
	},
	{
		from: "thermal:tin_dust",
		to: "mekanism:dust_tin",
	},
	{
		from: "chemlib:tin_dust",
		to: "mekanism:dust_tin",
	},
	{
		from: "chemlib:holmium_dust",
		to: "chemlib:holmium_dust",
	},
	{
		from: "chemlib:lutetium_dust",
		to: "chemlib:lutetium_dust",
	},
	{
		from: "chemlib:hafnium_dust",
		to: "chemlib:hafnium_dust",
	},
	{
		from: "chemlib:tantalum_dust",
		to: "chemlib:tantalum_dust",
	},
	{
		from: "superbwarfare:tungsten_ingot",
		to: "moremekanismprocessing:tungsten_ingot",
	},
	{
		from: "chemlib:tungsten_ingot",
		to: "moremekanismprocessing:tungsten_ingot",
	},
	{
		from: "chemlib:tungsten_nugget",
		to: "moremekanismprocessing:tungsten_nugget",
	},
	{
		from: "superbwarfare:tungsten_block",
		to: "chemlib:tungsten_metal_block",
	},
	{
		from: "chemlib:tungsten_dust",
		to: "moremekanismprocessing:dust_tungsten",
	},
	{
		from: "chemlib:tungsten_dust",
		to: "moremekanismprocessing:dust_tungsten",
	},
	{
		from: "chemlib:rhenium_dust",
		to: "chemlib:rhenium_dust",
	},
	{
		from: "chemlib:osmium_ingot",
		to: "mekanism:ingot_osmium",
	},
	{
		from: "chemlib:osmium_nugget",
		to: "mekanism:nugget_osmium",
	},
	{
		from: "chemlib:osmium_metal_block",
		to: "mekanism:block_osmium",
	},
	{
		from: "chemlib:osmium_dust",
		to: "mekanism:dust_osmium",
	},
	{
		from: "chemlib:iridium_ingot",
		to: "moremekanismprocessing:iridium_ingot",
	},
	{
		from: "chemlib:iridium_nugget",
		to: "moremekanismprocessing:iridium_nugget",
	},
	{
		from: "chemlib:iridium_dust",
		to: "moremekanismprocessing:dust_iridium",
	},
	{
		from: "chemlib:platinum_ingot",
		to: "moremekanismprocessing:platinum_ingot",
	},
	{
		from: "chemlib:platinum_nugget",
		to: "moremekanismprocessing:platinum_nugget",
	},
	{
		from: "chemlib:platinum_dust",
		to: "moremekanismprocessing:dust_platinum",
	},
	{
		from: "chemlib:gold_plate",
		to: "thermal:gold_plate",
	},
	{
		from: "thermal:gold_dust",
		to: "mekanism:dust_gold",
	},
	{
		from: "chemlib:gold_dust",
		to: "mekanism:dust_gold",
	},
	{
		from: "superbwarfare:lead_ingot",
		to: "mekanism:ingot_lead",
	},
	{
		from: "thermal:lead_ingot",
		to: "mekanism:ingot_lead",
	},
	{
		from: "chemlib:lead_ingot",
		to: "mekanism:ingot_lead",
	},
	{
		from: "thermal:lead_nugget",
		to: "mekanism:nugget_lead",
	},
	{
		from: "chemlib:lead_nugget",
		to: "mekanism:nugget_lead",
	},
	{
		from: "superbwarfare:lead_block",
		to: "mekanism:block_lead",
	},
	{
		from: "thermal:lead_block",
		to: "mekanism:block_lead",
	},
	{
		from: "chemlib:lead_metal_block",
		to: "mekanism:block_lead",
	},
	{
		from: "thermal:raw_lead",
		to: "mekanism:raw_lead",
	},
	{
		from: "thermal:raw_lead_block",
		to: "mekanism:block_raw_lead",
	},
	{
		from: "chemlib:lead_plate",
		to: "thermal:lead_plate",
	},
	{
		from: "thermal:lead_dust",
		to: "mekanism:dust_lead",
	},
	{
		from: "chemlib:lead_dust",
		to: "mekanism:dust_lead",
	},
	{
		from: "chemlib:bismuth_ingot",
		to: "moremekanismprocessing:bismuth_ingot",
	},
	{
		from: "chemlib:bismuth_nugget",
		to: "moremekanismprocessing:bismuth_nugget",
	},
	{
		from: "chemlib:bismuth_dust",
		to: "moremekanismprocessing:dust_bismuth",
	},
	{
		from: "chemlib:thorium_ingot",
		to: "moremekanismprocessing:thorium_ingot",
	},
	{
		from: "chemlib:thorium_nugget",
		to: "moremekanismprocessing:thorium_nugget",
	},
	{
		from: "chemlib:thorium_dust",
		to: "moremekanismprocessing:dust_thorium",
	},
	{
		from: "chemlib:uranium_ingot",
		to: "mekanism:ingot_uranium",
	},
	{
		from: "chemlib:uranium_nugget",
		to: "mekanism:nugget_uranium",
	},
	{
		from: "chemlib:uranium_metal_block",
		to: "mekanism:block_uranium",
	},
	{
		from: "chemlib:uranium_dust",
		to: "mekanism:dust_uranium",
	},
	{
		from: "superbwarfare:coal_powder",
		to: "mekanism:dust_coal",
	},
	{
		from: "chemlib:sulfur_dust",
		to: "mekanism:dust_sulfur",
	},
	{
		from: "thermal:sulfur_dust",
		to: "mekanism:dust_sulfur",
	},
	{
		from: "burnt:sulphur",
		to: "mekanism:dust_sulfur",
	},
	{
		from: "ad_astra:steel_rod",
		to: "mekanism_weaponry:steel_rod",
	},
	{
		from: "ad_astra:fan",
		to: "mekanismgenerators:turbine_blade",
	},
	{
		from: "superbwarfare:mortar_barrel",
		to: "pneumaticcraft:cannon_barrel",
	},
	{
		from: "moremekanismprocessing:gem_niter",
		to: "thermal:niter",
	},
	{
		from: "moremekanismprocessing:dust_niter",
		to: "thermal:niter_dust",
	},
	{
		from: "thermal:sawdust",
		to: "mekanism:sawdust",
	},
	{
		from: "ad_astra:wheel",
		to: "superbwarfare:wheel",
	},
	{
		from: "mffs:battery",
		to: "mekanism:energy_tablet",
	},
	{
		from: "superbwarfare:propeller",
		to: "pneumaticcraft:turbine_rotor",
	},
	{
		from: "philipsruins:broken_bone",
		to: "macabre:bone",
	},
]