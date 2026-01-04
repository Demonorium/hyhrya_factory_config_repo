// priority: 3
const TAGS_TO_FIX = [
	{
		tag: "forge:ingots/redstone",
		item: "minecraft:redstone",
	},
	{
		tag: "forge:storage_blocks/redstone",
		item: "minecraft:redstone_block",
	},
	{
		tag: "mekanism:enriched/redstone",
		item: "mekanism:enriched_redstone",
	},
	{
		tag: "mekanism:crystals/redstone",
		item: "moremekanismprocessing:crystal_redstone",
	},
	{
		tag: "mekanism:dirty_dusts/redstone",
		item: "moremekanismprocessing:dirty_dust_redstone",
	},
	{
		tag: "mekanism:clumps/redstone",
		item: "moremekanismprocessing:clump_redstone",
	},
	{
		tag: "mekanism:shards/redstone",
		item: "moremekanismprocessing:shard_redstone",
	},
	{
		tag: "forge:ingots/lapis",
		item: "minecraft:lapis_lazuli",
	},
	{
		tag: "forge:storage_blocks/lapis",
		item: "minecraft:lapis_block",
	},
	{
		tag: "forge:gears/lapis",
		item: "thermal:lapis_gear",
	},
	{
		tag: "forge:dusts/lapis",
		item: "thermal:lapis_dust",
	},
	{
		tag: "mekanism:crystals/lapis",
		item: "moremekanismprocessing:crystal_lapis",
	},
	{
		tag: "mekanism:dirty_dusts/lapis",
		item: "moremekanismprocessing:dirty_dust_lapis",
	},
	{
		tag: "mekanism:clumps/lapis",
		item: "moremekanismprocessing:clump_lapis",
	},
	{
		tag: "mekanism:shards/lapis",
		item: "moremekanismprocessing:shard_lapis",
	},
	{
		tag: "forge:ingots/diamond",
		item: "minecraft:diamond",
	},
	{
		tag: "forge:nuggets/diamond",
		item: "silentgear:diamond_shard",
	},
	{
		tag: "forge:storage_blocks/diamond",
		item: "minecraft:diamond_block",
	},
	{
		tag: "forge:gears/diamond",
		item: "thermal:diamond_gear",
	},
	{
		tag: "forge:dusts/diamond",
		item: "mekanism:dust_diamond",
	},
	{
		tag: "mekanism:enriched/diamond",
		item: "mekanism:enriched_diamond",
	},
	{
		tag: "mekanism:crystals/diamond",
		item: "moremekanismprocessing:crystal_diamond",
	},
	{
		tag: "mekanism:dirty_dusts/diamond",
		item: "moremekanismprocessing:dirty_dust_diamond",
	},
	{
		tag: "mekanism:clumps/diamond",
		item: "moremekanismprocessing:clump_diamond",
	},
	{
		tag: "mekanism:shards/diamond",
		item: "moremekanismprocessing:shard_diamond",
	},
	{
		tag: "forge:ingots/emerald",
		item: "minecraft:emerald",
	},
	{
		tag: "forge:storage_blocks/emerald",
		item: "minecraft:emerald_block",
	},
	{
		tag: "forge:gears/emerald",
		item: "thermal:emerald_gear",
	},
	{
		tag: "forge:dusts/emerald",
		item: "mekanism:dust_emerald",
	},
	{
		tag: "mekanism:crystals/emerald",
		item: "moremekanismprocessing:crystal_emerald",
	},
	{
		tag: "mekanism:dirty_dusts/emerald",
		item: "moremekanismprocessing:dirty_dust_emerald",
	},
	{
		tag: "mekanism:clumps/emerald",
		item: "moremekanismprocessing:clump_emerald",
	},
	{
		tag: "mekanism:shards/emerald",
		item: "moremekanismprocessing:shard_emerald",
	},
	{
		tag: "forge:ingots/netherite",
		item: "minecraft:netherite_ingot",
	},
	{
		tag: "forge:nuggets/netherite",
		item: "thermal:netherite_nugget",
	},
	{
		tag: "forge:storage_blocks/netherite",
		item: "minecraft:netherite_block",
	},
	{
		tag: "forge:plates/netherite",
		item: "thermal:netherite_plate",
	},
	{
		tag: "forge:gears/netherite",
		item: "thermal:netherite_gear",
	},
	{
		tag: "forge:dusts/netherite",
		item: "mekanism:dust_netherite",
	},
	{
		tag: "forge:ingots/glowstone",
		item: "mekanism:ingot_refined_glowstone",
	},
	{
		tag: "forge:nuggets/glowstone",
		item: "mekanism:nugget_refined_glowstone",
	},
	{
		tag: "forge:storage_blocks/glowstone",
		item: "mekanism:block_refined_glowstone",
	},
	{
		tag: "forge:dusts/glowstone",
		item: "minecraft:glowstone_dust",
	},
	{
		tag: "forge:ingots/ender_pearl",
		item: "minecraft:ender_pearl",
	},
	{
		tag: "forge:dusts/ender_pearl",
		item: "thermal:ender_pearl_dust",
	},
	{
		tag: "forge:ingots/coal",
		item: "minecraft:coal",
	},
	{
		tag: "forge:storage_blocks/coal",
		item: "minecraft:coal_block",
	},
	{
		tag: "forge:dusts/coal",
		item: "mekanism:dust_coal",
	},
	{
		tag: "mekanism:crystals/coal",
		item: "moremekanismprocessing:crystal_coal",
	},
	{
		tag: "mekanism:dirty_dusts/coal",
		item: "moremekanismprocessing:dirty_dust_coal",
	},
	{
		tag: "mekanism:clumps/coal",
		item: "moremekanismprocessing:clump_coal",
	},
	{
		tag: "mekanism:shards/coal",
		item: "moremekanismprocessing:shard_coal",
	},
	{
		tag: "forge:ingots/nether_star",
		item: "minecraft:nether_star",
	},
	{
		tag: "forge:nuggets/nether_star",
		item: "silentgear:nether_start_fragment",
	},
	{
		tag: "forge:ingots/fluorite",
		item: "mekanism:fluorite_gem",
	},
	{
		tag: "forge:storage_blocks/fluorite",
		item: "mekanism:block_fluorite",
	},
	{
		tag: "forge:dusts/fluorite",
		item: "mekanism:dust_fluorite",
	},
	{
		tag: "forge:ingots/naquadah",
		item: "mekanism_extras:ingot_naquadah",
	},
	{
		tag: "forge:storage_blocks/naquadah",
		item: "mekanism_extras:block_naquadah",
	},
	{
		tag: "forge:raw_materials/naquadah",
		item: "mekanism_extras:raw_naquadah",
	},
	{
		tag: "forge:storage_blocks/raw_naquadah",
		item: "mekanism_extras:block_raw_naquadah",
	},
	{
		tag: "forge:dusts/naquadah",
		item: "mekanism_extras:dust_naquadah",
	},
	{
		tag: "mekanism:crystals/naquadah",
		item: "mekanism_extras:crystal_naquadah",
	},
	{
		tag: "mekanism:dirty_dusts/naquadah",
		item: "mekanism_extras:dirty_dust_naquadah",
	},
	{
		tag: "mekanism:clumps/naquadah",
		item: "mekanism_extras:clump_naquadah",
	},
	{
		tag: "mekanism:shards/naquadah",
		item: "mekanism_extras:shard_naquadah",
	},
	{
		tag: "forge:ingots/uranium",
		item: "mekanism:ingot_uranium",
	},
	{
		tag: "forge:nuggets/uranium",
		item: "mekanism:nugget_uranium",
	},
	{
		tag: "forge:storage_blocks/uranium",
		item: "mekanism:block_uranium",
	},
	{
		tag: "forge:raw_materials/uranium",
		item: "mekanism:raw_uranium",
	},
	{
		tag: "forge:storage_blocks/raw_uranium",
		item: "mekanism:block_raw_uranium",
	},
	{
		tag: "forge:plates/uranium",
		item: "chemlib:uranium_plate",
	},
	{
		tag: "forge:dusts/uranium",
		item: "mekanism:dust_uranium",
	},
	{
		tag: "mekanism:crystals/uranium",
		item: "mekanism:crystal_uranium",
	},
	{
		tag: "mekanism:dirty_dusts/uranium",
		item: "mekanism:dirty_dust_uranium",
	},
	{
		tag: "mekanism:clumps/uranium",
		item: "mekanism:clump_uranium",
	},
	{
		tag: "mekanism:shards/uranium",
		item: "mekanism:shard_uranium",
	},
	{
		tag: "forge:ingots/steel",
		item: "mekanism:ingot_steel",
	},
	{
		tag: "forge:nuggets/steel",
		item: "mekanism:nugget_steel",
	},
	{
		tag: "forge:storage_blocks/steel",
		item: "mekanism:block_steel",
	},
	{
		tag: "forge:plates/steel",
		item: "ad_astra:steel_plate",
	},
	{
		tag: "forge:dusts/steel",
		item: "mekanism:dust_steel",
	},
	{
		tag: "forge:ingots/desh",
		item: "ad_astra:desh_ingot",
	},
	{
		tag: "forge:nuggets/desh",
		item: "ad_astra:desh_nugget",
	},
	{
		tag: "forge:storage_blocks/desh",
		item: "ad_astra:desh_block",
	},
	{
		tag: "forge:raw_materials/desh",
		item: "ad_astra:raw_desh",
	},
	{
		tag: "forge:storage_blocks/raw_desh",
		item: "ad_astra:raw_desh_block",
	},
	{
		tag: "forge:plates/desh",
		item: "ad_astra:desh_plate",
	},
	{
		tag: "forge:dusts/desh",
		item: "moremekanismprocessing:dust_desh",
	},
	{
		tag: "mekanism:crystals/desh",
		item: "moremekanismprocessing:crystal_desh",
	},
	{
		tag: "mekanism:dirty_dusts/desh",
		item: "moremekanismprocessing:dirty_dust_desh",
	},
	{
		tag: "mekanism:clumps/desh",
		item: "moremekanismprocessing:clump_desh",
	},
	{
		tag: "mekanism:shards/desh",
		item: "moremekanismprocessing:shard_desh",
	},
	{
		tag: "forge:ingots/ostrum",
		item: "ad_astra:ostrum_ingot",
	},
	{
		tag: "forge:nuggets/ostrum",
		item: "ad_astra:ostrum_nugget",
	},
	{
		tag: "forge:storage_blocks/ostrum",
		item: "ad_astra:ostrum_block",
	},
	{
		tag: "forge:raw_materials/ostrum",
		item: "ad_astra:raw_ostrum",
	},
	{
		tag: "forge:storage_blocks/raw_ostrum",
		item: "ad_astra:raw_ostrum_block",
	},
	{
		tag: "forge:plates/ostrum",
		item: "ad_astra:ostrum_plate",
	},
	{
		tag: "forge:dusts/ostrum",
		item: "moremekanismprocessing:dust_ostrum",
	},
	{
		tag: "mekanism:crystals/ostrum",
		item: "moremekanismprocessing:crystal_ostrum",
	},
	{
		tag: "mekanism:dirty_dusts/ostrum",
		item: "moremekanismprocessing:dirty_dust_ostrum",
	},
	{
		tag: "mekanism:clumps/ostrum",
		item: "moremekanismprocessing:clump_ostrum",
	},
	{
		tag: "mekanism:shards/ostrum",
		item: "moremekanismprocessing:shard_ostrum",
	},
	{
		tag: "forge:ingots/calorite",
		item: "ad_astra:calorite_ingot",
	},
	{
		tag: "forge:nuggets/calorite",
		item: "ad_astra:calorite_nugget",
	},
	{
		tag: "forge:storage_blocks/calorite",
		item: "ad_astra:calorite_block",
	},
	{
		tag: "forge:raw_materials/calorite",
		item: "ad_astra:raw_calorite",
	},
	{
		tag: "forge:storage_blocks/raw_calorite",
		item: "ad_astra:raw_calorite_block",
	},
	{
		tag: "forge:plates/calorite",
		item: "ad_astra:calorite_plate",
	},
	{
		tag: "forge:dusts/calorite",
		item: "moremekanismprocessing:dust_calorite",
	},
	{
		tag: "mekanism:crystals/calorite",
		item: "moremekanismprocessing:crystal_calorite",
	},
	{
		tag: "mekanism:dirty_dusts/calorite",
		item: "moremekanismprocessing:dirty_dust_calorite",
	},
	{
		tag: "mekanism:clumps/calorite",
		item: "moremekanismprocessing:clump_calorite",
	},
	{
		tag: "mekanism:shards/calorite",
		item: "moremekanismprocessing:shard_calorite",
	},
	{
		tag: "forge:ingots/etrium",
		item: "ad_astra:etrium_ingot",
	},
	{
		tag: "forge:nuggets/etrium",
		item: "ad_astra:etrium_nugget",
	},
	{
		tag: "forge:storage_blocks/etrium",
		item: "ad_astra:etrium_block",
	},
	{
		tag: "forge:plates/etrium",
		item: "ad_astra:etrium_plate",
	},
	{
		tag: "forge:ingots/blaze_gold",
		item: "silentgear:blaze_gold_ingot",
	},
	{
		tag: "forge:nuggets/blaze_gold",
		item: "silentgear:blaze_gold_nugget",
	},
	{
		tag: "forge:storage_blocks/blaze_gold",
		item: "silentgear:blaze_gold_block",
	},
	{
		tag: "forge:dusts/blaze_gold",
		item: "silentgear:blaze_gold_dust",
	},
	{
		tag: "forge:ingots/arcmetal",
		item: "silentcompat:arcmetal_ingot",
	},
	{
		tag: "forge:nuggets/arcmetal",
		item: "silentcompat:arcmetal_nugget",
	},
	{
		tag: "forge:storage_blocks/arcmetal",
		item: "silentcompat:arcmetal_block",
	},
	{
		tag: "forge:raw_materials/arcmetal",
		item: "silentcompat:raw_arcmetal",
	},
	{
		tag: "mekanism:crystals/arcmetal",
		item: "kubejs:crystal_arcmetal",
	},
	{
		tag: "mekanism:dirty_dusts/arcmetal",
		item: "kubejs:dirty_dust_arcmetal",
	},
	{
		tag: "mekanism:clumps/arcmetal",
		item: "kubejs:clump_arcmetal",
	},
	{
		tag: "mekanism:shards/arcmetal",
		item: "kubejs:shard_arcmetal",
	},
	{
		tag: "forge:ingots/voidmetal",
		item: "silentcompat:voidmetal_ingot",
	},
	{
		tag: "forge:nuggets/voidmetal",
		item: "silentcompat:voidmetal_nugget",
	},
	{
		tag: "forge:storage_blocks/voidmetal",
		item: "silentcompat:voidmetal_block",
	},
	{
		tag: "forge:raw_materials/voidmetal",
		item: "silentcompat:raw_voidmetal",
	},
	{
		tag: "mekanism:crystals/voidmetal",
		item: "kubejs:crystal_voidmetal",
	},
	{
		tag: "mekanism:dirty_dusts/voidmetal",
		item: "kubejs:dirty_dust_voidmetal",
	},
	{
		tag: "mekanism:clumps/voidmetal",
		item: "kubejs:clump_voidmetal",
	},
	{
		tag: "mekanism:shards/voidmetal",
		item: "kubejs:shard_voidmetal",
	},
	{
		tag: "forge:ingots/solarmetal",
		item: "silentcompat:solarmetal_ingot",
	},
	{
		tag: "forge:nuggets/solarmetal",
		item: "silentcompat:solarmetal_nugget",
	},
	{
		tag: "forge:storage_blocks/solarmetal",
		item: "silentcompat:solarmetal_block",
	},
	{
		tag: "forge:raw_materials/solarmetal",
		item: "silentcompat:raw_solarmetal",
	},
	{
		tag: "mekanism:crystals/solarmetal",
		item: "kubejs:crystal_solarmetal",
	},
	{
		tag: "mekanism:dirty_dusts/solarmetal",
		item: "kubejs:dirty_dust_solarmetal",
	},
	{
		tag: "mekanism:clumps/solarmetal",
		item: "kubejs:clump_solarmetal",
	},
	{
		tag: "mekanism:shards/solarmetal",
		item: "kubejs:shard_solarmetal",
	},
	{
		tag: "forge:ingots/plasteel",
		item: "silentcompat:plasteel_ingot",
	},
	{
		tag: "forge:nuggets/plasteel",
		item: "silentcompat:plasteel_nugget",
	},
	{
		tag: "forge:storage_blocks/plasteel",
		item: "silentcompat:plasteel_block",
	},
	{
		tag: "forge:raw_materials/plasteel",
		item: "silentcompat:raw_plasteel",
	},
	{
		tag: "mekanism:crystals/plasteel",
		item: "kubejs:crystal_plasteel",
	},
	{
		tag: "mekanism:dirty_dusts/plasteel",
		item: "kubejs:dirty_dust_plasteel",
	},
	{
		tag: "mekanism:clumps/plasteel",
		item: "kubejs:clump_plasteel",
	},
	{
		tag: "mekanism:shards/plasteel",
		item: "kubejs:shard_plasteel",
	},
	{
		tag: "forge:ingots/bort",
		item: "silentgear:bort",
	},
	{
		tag: "forge:storage_blocks/bort",
		item: "silentgear:bort_block",
	},
	{
		tag: "forge:dusts/bort",
		item: "moremekanismprocessing:dust_bort",
	},
	{
		tag: "mekanism:crystals/bort",
		item: "moremekanismprocessing:crystal_bort",
	},
	{
		tag: "mekanism:dirty_dusts/bort",
		item: "moremekanismprocessing:dirty_dust_bort",
	},
	{
		tag: "mekanism:clumps/bort",
		item: "moremekanismprocessing:clump_bort",
	},
	{
		tag: "mekanism:shards/bort",
		item: "moremekanismprocessing:shard_bort",
	},
	{
		tag: "forge:ingots/crimson_iron",
		item: "silentgear:crimson_iron_ingot",
	},
	{
		tag: "forge:nuggets/crimson_iron",
		item: "silentgear:crimson_iron_nugget",
	},
	{
		tag: "forge:storage_blocks/crimson_iron",
		item: "silentgear:crimson_iron_block",
	},
	{
		tag: "forge:raw_materials/crimson_iron",
		item: "silentgear:raw_crimson_iron",
	},
	{
		tag: "forge:storage_blocks/raw_crimson_iron",
		item: "silentgear:raw_crimson_iron_block",
	},
	{
		tag: "forge:dusts/crimson_iron",
		item: "silentgear:crimson_iron_dust",
	},
	{
		tag: "mekanism:crystals/crimson_iron",
		item: "moremekanismprocessing:crystal_crimson_iron",
	},
	{
		tag: "mekanism:dirty_dusts/crimson_iron",
		item: "moremekanismprocessing:dirty_dust_crimson_iron",
	},
	{
		tag: "mekanism:clumps/crimson_iron",
		item: "moremekanismprocessing:clump_crimson_iron",
	},
	{
		tag: "mekanism:shards/crimson_iron",
		item: "moremekanismprocessing:shard_crimson_iron",
	},
	{
		tag: "forge:ingots/azure_silver",
		item: "silentgear:azure_silver_ingot",
	},
	{
		tag: "forge:nuggets/azure_silver",
		item: "silentgear:azure_silver_nugget",
	},
	{
		tag: "forge:storage_blocks/azure_silver",
		item: "silentgear:azure_silver_block",
	},
	{
		tag: "forge:raw_materials/azure_silver",
		item: "silentgear:raw_azure_silver",
	},
	{
		tag: "forge:storage_blocks/raw_azure_silver",
		item: "silentgear:raw_azure_silver_block",
	},
	{
		tag: "forge:dusts/azure_silver",
		item: "silentgear:azure_silver_dust",
	},
	{
		tag: "mekanism:crystals/azure_silver",
		item: "moremekanismprocessing:crystal_azure_silver",
	},
	{
		tag: "mekanism:dirty_dusts/azure_silver",
		item: "moremekanismprocessing:dirty_dust_azure_silver",
	},
	{
		tag: "mekanism:clumps/azure_silver",
		item: "moremekanismprocessing:clump_azure_silver",
	},
	{
		tag: "mekanism:shards/azure_silver",
		item: "moremekanismprocessing:shard_azure_silver",
	},
	{
		tag: "forge:ingots/bronze",
		item: "mekanism:ingot_bronze",
	},
	{
		tag: "forge:nuggets/bronze",
		item: "mekanism:nugget_bronze",
	},
	{
		tag: "forge:storage_blocks/bronze",
		item: "mekanism:block_bronze",
	},
	{
		tag: "forge:plates/bronze",
		item: "thermal:bronze_plate",
	},
	{
		tag: "forge:gears/bronze",
		item: "thermal:bronze_gear",
	},
	{
		tag: "forge:dusts/bronze",
		item: "mekanism:dust_bronze",
	},
	{
		tag: "forge:ingots/tyrian_steel",
		item: "silentgear:tyrian_steel_ingot",
	},
	{
		tag: "forge:nuggets/tyrian_steel",
		item: "silentgear:tyrian_steel_nugget",
	},
	{
		tag: "forge:storage_blocks/tyrian_steel",
		item: "silentgear:tyrian_steel_block",
	},
	{
		tag: "forge:dusts/tyrian_steel",
		item: "silentgear:tyrian_steel_dust",
	},
	{
		tag: "forge:ingots/midnight_iron",
		item: "silentcompat:midnight_iron_ingot",
	},
	{
		tag: "forge:nuggets/midnight_iron",
		item: "silentcompat:midnight_iron_nugget",
	},
	{
		tag: "forge:storage_blocks/midnight_iron",
		item: "silentcompat:midnight_iron_block",
	},
	{
		tag: "forge:ingots/sculk_alloy",
		item: "silentcompat:sculk_alloy_ingot",
	},
	{
		tag: "forge:nuggets/sculk_alloy",
		item: "silentcompat:sculk_alloy_nugget",
	},
	{
		tag: "forge:storage_blocks/sculk_alloy",
		item: "silentcompat:sculk_alloy_block",
	},
	{
		tag: "forge:ingots/bunny_steel",
		item: "silentcompat:bunny_steel_ingot",
	},
	{
		tag: "forge:nuggets/bunny_steel",
		item: "silentcompat:bunny_steel_nugget",
	},
	{
		tag: "forge:storage_blocks/bunny_steel",
		item: "silentcompat:bunny_steel_block",
	},
	{
		tag: "forge:ingots/capsid_alloy",
		item: "silentcompat:capsid_alloy_ingot",
	},
	{
		tag: "forge:nuggets/capsid_alloy",
		item: "silentcompat:capsid_alloy_nugget",
	},
	{
		tag: "forge:storage_blocks/capsid_alloy",
		item: "silentcompat:capsid_alloy_block",
	},
	{
		tag: "forge:ingots/source_steel",
		item: "silentcompat:source_steel_ingot",
	},
	{
		tag: "forge:nuggets/source_steel",
		item: "silentcompat:source_steel_nugget",
	},
	{
		tag: "forge:storage_blocks/source_steel",
		item: "silentcompat:source_steel_block",
	},
	{
		tag: "forge:ingots/crimson_steel",
		item: "silentgear:crimson_steel_ingot",
	},
	{
		tag: "forge:nuggets/crimson_steel",
		item: "silentgear:crimson_steel_nugget",
	},
	{
		tag: "forge:storage_blocks/crimson_steel",
		item: "silentgear:crimson_steel_block",
	},
	{
		tag: "forge:dusts/crimson_steel",
		item: "silentgear:crimson_steel_dust",
	},
	{
		tag: "forge:ingots/regalium",
		item: "undergarden:regalium_crystal",
	},
	{
		tag: "forge:storage_blocks/regalium",
		item: "undergarden:regalium_block",
	},
	{
		tag: "mekanism:crystals/regalium",
		item: "kubejs:crystal_regalium",
	},
	{
		tag: "mekanism:dirty_dusts/regalium",
		item: "kubejs:dirty_dust_regalium",
	},
	{
		tag: "mekanism:clumps/regalium",
		item: "kubejs:clump_regalium",
	},
	{
		tag: "mekanism:shards/regalium",
		item: "kubejs:shard_regalium",
	},
	{
		tag: "forge:ingots/cloggrum",
		item: "undergarden:cloggrum_ingot",
	},
	{
		tag: "forge:nuggets/cloggrum",
		item: "undergarden:cloggrum_nugget",
	},
	{
		tag: "forge:storage_blocks/cloggrum",
		item: "undergarden:cloggrum_block",
	},
	{
		tag: "forge:raw_materials/cloggrum",
		item: "undergarden:raw_cloggrum",
	},
	{
		tag: "forge:storage_blocks/raw_cloggrum",
		item: "undergarden:raw_cloggrum_block",
	},
	{
		tag: "mekanism:crystals/cloggrum",
		item: "kubejs:crystal_cloggrum",
	},
	{
		tag: "mekanism:dirty_dusts/cloggrum",
		item: "kubejs:dirty_dust_cloggrum",
	},
	{
		tag: "mekanism:clumps/cloggrum",
		item: "kubejs:clump_cloggrum",
	},
	{
		tag: "mekanism:shards/cloggrum",
		item: "kubejs:shard_cloggrum",
	},
	{
		tag: "forge:ingots/froststeel",
		item: "undergarden:froststeel_ingot",
	},
	{
		tag: "forge:nuggets/froststeel",
		item: "undergarden:froststeel_nugget",
	},
	{
		tag: "forge:storage_blocks/froststeel",
		item: "undergarden:froststeel_block",
	},
	{
		tag: "forge:raw_materials/froststeel",
		item: "undergarden:raw_froststeel",
	},
	{
		tag: "forge:storage_blocks/raw_froststeel",
		item: "undergarden:raw_froststeel_block",
	},
	{
		tag: "mekanism:crystals/froststeel",
		item: "kubejs:crystal_froststeel",
	},
	{
		tag: "mekanism:dirty_dusts/froststeel",
		item: "kubejs:dirty_dust_froststeel",
	},
	{
		tag: "mekanism:clumps/froststeel",
		item: "kubejs:clump_froststeel",
	},
	{
		tag: "mekanism:shards/froststeel",
		item: "kubejs:shard_froststeel",
	},
	{
		tag: "forge:ingots/utherium",
		item: "undergarden:utherium_crystal",
	},
	{
		tag: "forge:nuggets/utherium",
		item: "undergarden:utheric_shard",
	},
	{
		tag: "forge:storage_blocks/utherium",
		item: "undergarden:utherium_block",
	},
	{
		tag: "mekanism:crystals/utherium",
		item: "kubejs:crystal_utherium",
	},
	{
		tag: "mekanism:dirty_dusts/utherium",
		item: "kubejs:dirty_dust_utherium",
	},
	{
		tag: "mekanism:clumps/utherium",
		item: "kubejs:clump_utherium",
	},
	{
		tag: "mekanism:shards/utherium",
		item: "kubejs:shard_utherium",
	},
	{
		tag: "forge:ingots/forgotten",
		item: "undergarden:forgotten_ingot",
	},
	{
		tag: "forge:nuggets/forgotten",
		item: "undergarden:forgotten_nugget",
	},
	{
		tag: "forge:storage_blocks/forgotten",
		item: "undergarden:forgotten_block",
	},
	{
		tag: "forge:ingots/sky_steel",
		item: "megacells:sky_steel_ingot",
	},
	{
		tag: "forge:storage_blocks/sky_steel",
		item: "megacells:sky_steel_block",
	},
	{
		tag: "forge:ingots/ruby",
		item: "thermal:ruby",
	},
	{
		tag: "forge:storage_blocks/ruby",
		item: "thermal:ruby_block",
	},
	{
		tag: "forge:gears/ruby",
		item: "thermal:ruby_gear",
	},
	{
		tag: "forge:dusts/ruby",
		item: "thermal:ruby_dust",
	},
	{
		tag: "mekanism:crystals/ruby",
		item: "moremekanismprocessing:crystal_ruby",
	},
	{
		tag: "mekanism:dirty_dusts/ruby",
		item: "moremekanismprocessing:dirty_dust_ruby",
	},
	{
		tag: "mekanism:clumps/ruby",
		item: "moremekanismprocessing:clump_ruby",
	},
	{
		tag: "mekanism:shards/ruby",
		item: "moremekanismprocessing:shard_ruby",
	},
	{
		tag: "forge:ingots/sapphire",
		item: "thermal:sapphire",
	},
	{
		tag: "forge:storage_blocks/sapphire",
		item: "thermal:sapphire_block",
	},
	{
		tag: "forge:gears/sapphire",
		item: "thermal:sapphire_gear",
	},
	{
		tag: "forge:dusts/sapphire",
		item: "thermal:sapphire_dust",
	},
	{
		tag: "mekanism:crystals/sapphire",
		item: "moremekanismprocessing:crystal_sapphire",
	},
	{
		tag: "mekanism:dirty_dusts/sapphire",
		item: "moremekanismprocessing:dirty_dust_sapphire",
	},
	{
		tag: "mekanism:clumps/sapphire",
		item: "moremekanismprocessing:clump_sapphire",
	},
	{
		tag: "mekanism:shards/sapphire",
		item: "moremekanismprocessing:shard_sapphire",
	},
	{
		tag: "forge:ingots/green_sapphire",
		item: "moremekanismprocessing:gem_green_sapphire",
	},
	{
		tag: "forge:dusts/green_sapphire",
		item: "moremekanismprocessing:dust_green_sapphire",
	},
	{
		tag: "forge:ingots/compressed_iron",
		item: "pneumaticcraft:ingot_iron_compressed",
	},
	{
		tag: "forge:storage_blocks/compressed_iron",
		item: "pneumaticcraft:compressed_iron_block",
	},
	{
		tag: "forge:gears/compressed_iron",
		item: "pneumaticcraft:compressed_iron_gear",
	},
	{
		tag: "forge:ingots/enderium",
		item: "thermal:enderium_ingot",
	},
	{
		tag: "forge:nuggets/enderium",
		item: "thermal:enderium_nugget",
	},
	{
		tag: "forge:storage_blocks/enderium",
		item: "thermal:enderium_block",
	},
	{
		tag: "forge:plates/enderium",
		item: "thermal:enderium_plate",
	},
	{
		tag: "forge:gears/enderium",
		item: "thermal:enderium_gear",
	},
	{
		tag: "forge:dusts/enderium",
		item: "thermal:enderium_dust",
	},
	{
		tag: "forge:ingots/melodium",
		item: "thermalendergy:melodium_ingot",
	},
	{
		tag: "forge:nuggets/melodium",
		item: "thermalendergy:melodium_nugget",
	},
	{
		tag: "forge:storage_blocks/melodium",
		item: "thermalendergy:melodium_block",
	},
	{
		tag: "forge:plates/melodium",
		item: "thermalendergy:melodium_plate",
	},
	{
		tag: "forge:gears/melodium",
		item: "thermalendergy:melodium_gear",
	},
	{
		tag: "forge:dusts/melodium",
		item: "thermalendergy:melodium_dust",
	},
	{
		tag: "forge:ingots/stellarium",
		item: "thermalendergy:stellarium_ingot",
	},
	{
		tag: "forge:nuggets/stellarium",
		item: "thermalendergy:stellarium_nugget",
	},
	{
		tag: "forge:storage_blocks/stellarium",
		item: "thermalendergy:stellarium_block",
	},
	{
		tag: "forge:plates/stellarium",
		item: "thermalendergy:stellarium_plate",
	},
	{
		tag: "forge:gears/stellarium",
		item: "thermalendergy:stellarium_gear",
	},
	{
		tag: "forge:dusts/stellarium",
		item: "thermalendergy:stellarium_dust",
	},
	{
		tag: "forge:ingots/cemented_carbide",
		item: "superbwarfare:cemented_carbide_ingot",
	},
	{
		tag: "forge:storage_blocks/cemented_carbide",
		item: "superbwarfare:cemented_carbide_block",
	},
	{
		tag: "forge:dusts/cemented_carbide",
		item: "superbwarfare:raw_cemented_carbide_powder",
	},
	{
		tag: "forge:ingots/plastic",
		item: "pneumaticcraft:plastic",
	},
	{
		tag: "forge:ingots/antimatter",
		item: "mekanism:pellet_antimatter",
	},
	{
		tag: "forge:ingots/smart_alloy",
		item: "dysonsphere:ingot_smart_alloy",
	},
	{
		tag: "forge:ingots/extraterrestrial_steel",
		item: "clanginghowl:extraterrestrial_steel_ingot",
	},
	{
		tag: "forge:nuggets/extraterrestrial_steel",
		item: "clanginghowl:extraterrestrial_steel_nugget",
	},
	{
		tag: "forge:storage_blocks/extraterrestrial_steel",
		item: "clanginghowl:extraterrestrial_steel_block",
	},
	{
		tag: "forge:raw_materials/extraterrestrial_steel",
		item: "clanginghowl:extraterrestrial_steel",
	},
	{
		tag: "forge:storage_blocks/raw_extraterrestrial_steel",
		item: "clanginghowl:raw_extraterrestrial_steel_block",
	},
	{
		tag: "forge:plates/extraterrestrial_steel",
		item: "clanginghowl:extraterrestrial_steel_plate",
	},
	{
		tag: "mekanism:crystals/extraterrestrial_steel",
		item: "kubejs:crystal_extraterrestrial_steel",
	},
	{
		tag: "mekanism:dirty_dusts/extraterrestrial_steel",
		item: "kubejs:dirty_dust_extraterrestrial_steel",
	},
	{
		tag: "mekanism:clumps/extraterrestrial_steel",
		item: "kubejs:clump_extraterrestrial_steel",
	},
	{
		tag: "mekanism:shards/extraterrestrial_steel",
		item: "kubejs:shard_extraterrestrial_steel",
	},
	{
		tag: "forge:ingots/thorium",
		item: "moremekanismprocessing:thorium_ingot",
	},
	{
		tag: "forge:nuggets/thorium",
		item: "moremekanismprocessing:thorium_nugget",
	},
	{
		tag: "forge:storage_blocks/thorium",
		item: "chemlib:thorium_metal_block",
	},
	{
		tag: "forge:plates/thorium",
		item: "chemlib:thorium_plate",
	},
	{
		tag: "forge:dusts/thorium",
		item: "moremekanismprocessing:dust_thorium",
	},
	{
		tag: "forge:ingots/magnesium",
		item: "moremekanismprocessing:magnesium_ingot",
	},
	{
		tag: "forge:nuggets/magnesium",
		item: "moremekanismprocessing:magnesium_nugget",
	},
	{
		tag: "forge:storage_blocks/magnesium",
		item: "chemlib:magnesium_metal_block",
	},
	{
		tag: "forge:plates/magnesium",
		item: "chemlib:magnesium_plate",
	},
	{
		tag: "forge:dusts/magnesium",
		item: "moremekanismprocessing:dust_magnesium",
	},
	{
		tag: "forge:ingots/aluminum",
		item: "moremekanismprocessing:aluminum_ingot",
	},
	{
		tag: "forge:nuggets/aluminum",
		item: "moremekanismprocessing:aluminum_nugget",
	},
	{
		tag: "forge:storage_blocks/aluminum",
		item: "chemlib:aluminum_metal_block",
	},
	{
		tag: "forge:plates/aluminum",
		item: "chemlib:aluminum_plate",
	},
	{
		tag: "forge:dusts/aluminum",
		item: "moremekanismprocessing:dust_aluminum",
	},
	{
		tag: "forge:ingots/scandium",
		item: "chemlib:scandium_ingot",
	},
	{
		tag: "forge:nuggets/scandium",
		item: "chemlib:scandium_nugget",
	},
	{
		tag: "forge:storage_blocks/scandium",
		item: "chemlib:scandium_metal_block",
	},
	{
		tag: "forge:plates/scandium",
		item: "chemlib:scandium_plate",
	},
	{
		tag: "forge:dusts/scandium",
		item: "chemlib:scandium_dust",
	},
	{
		tag: "forge:ingots/chromium",
		item: "chemlib:chromium_ingot",
	},
	{
		tag: "forge:nuggets/chromium",
		item: "chemlib:chromium_nugget",
	},
	{
		tag: "forge:storage_blocks/chromium",
		item: "chemlib:chromium_metal_block",
	},
	{
		tag: "forge:plates/chromium",
		item: "chemlib:chromium_plate",
	},
	{
		tag: "forge:dusts/chromium",
		item: "chemlib:chromium_dust",
	},
	{
		tag: "forge:ingots/cobalt",
		item: "moremekanismprocessing:cobalt_ingot",
	},
	{
		tag: "forge:nuggets/cobalt",
		item: "moremekanismprocessing:cobalt_nugget",
	},
	{
		tag: "forge:storage_blocks/cobalt",
		item: "chemlib:cobalt_metal_block",
	},
	{
		tag: "forge:plates/cobalt",
		item: "chemlib:cobalt_plate",
	},
	{
		tag: "forge:dusts/cobalt",
		item: "moremekanismprocessing:dust_cobalt",
	},
	{
		tag: "forge:ingots/nickel",
		item: "thermal:nickel_ingot",
	},
	{
		tag: "forge:nuggets/nickel",
		item: "thermal:nickel_nugget",
	},
	{
		tag: "forge:storage_blocks/nickel",
		item: "thermal:nickel_block",
	},
	{
		tag: "forge:raw_materials/nickel",
		item: "thermal:raw_nickel",
	},
	{
		tag: "forge:storage_blocks/raw_nickel",
		item: "thermal:raw_nickel_block",
	},
	{
		tag: "forge:plates/nickel",
		item: "thermal:nickel_plate",
	},
	{
		tag: "forge:gears/nickel",
		item: "thermal:nickel_gear",
	},
	{
		tag: "forge:dusts/nickel",
		item: "thermal:nickel_dust",
	},
	{
		tag: "mekanism:crystals/nickel",
		item: "moremekanismprocessing:crystal_nickel",
	},
	{
		tag: "mekanism:dirty_dusts/nickel",
		item: "moremekanismprocessing:dirty_dust_nickel",
	},
	{
		tag: "mekanism:clumps/nickel",
		item: "moremekanismprocessing:clump_nickel",
	},
	{
		tag: "mekanism:shards/nickel",
		item: "moremekanismprocessing:shard_nickel",
	},
	{
		tag: "forge:ingots/invar",
		item: "thermal:invar_ingot",
	},
	{
		tag: "forge:nuggets/invar",
		item: "thermal:invar_nugget",
	},
	{
		tag: "forge:storage_blocks/invar",
		item: "thermal:invar_block",
	},
	{
		tag: "forge:plates/invar",
		item: "thermal:invar_plate",
	},
	{
		tag: "forge:gears/invar",
		item: "thermal:invar_gear",
	},
	{
		tag: "forge:dusts/invar",
		item: "thermal:invar_dust",
	},
	{
		tag: "forge:ingots/electrum",
		item: "thermal:electrum_ingot",
	},
	{
		tag: "forge:nuggets/electrum",
		item: "thermal:electrum_nugget",
	},
	{
		tag: "forge:storage_blocks/electrum",
		item: "thermal:electrum_block",
	},
	{
		tag: "forge:plates/electrum",
		item: "thermal:electrum_plate",
	},
	{
		tag: "forge:gears/electrum",
		item: "thermal:electrum_gear",
	},
	{
		tag: "forge:dusts/electrum",
		item: "thermal:electrum_dust",
	},
	{
		tag: "forge:ingots/azure_electrum",
		item: "silentgear:azure_electrum_ingot",
	},
	{
		tag: "forge:nuggets/azure_electrum",
		item: "silentgear:azure_electrum_nugget",
	},
	{
		tag: "forge:storage_blocks/azure_electrum",
		item: "silentgear:azure_electrum_block",
	},
	{
		tag: "forge:dusts/azure_electrum",
		item: "silentgear:azure_electrum_dust",
	},
	{
		tag: "forge:ingots/constantan",
		item: "thermal:constantan_ingot",
	},
	{
		tag: "forge:nuggets/constantan",
		item: "thermal:constantan_nugget",
	},
	{
		tag: "forge:storage_blocks/constantan",
		item: "thermal:constantan_block",
	},
	{
		tag: "forge:plates/constantan",
		item: "thermal:constantan_plate",
	},
	{
		tag: "forge:gears/constantan",
		item: "thermal:constantan_gear",
	},
	{
		tag: "forge:dusts/constantan",
		item: "thermal:constantan_dust",
	},
	{
		tag: "forge:ingots/signalum",
		item: "thermal:signalum_ingot",
	},
	{
		tag: "forge:nuggets/signalum",
		item: "thermal:signalum_nugget",
	},
	{
		tag: "forge:storage_blocks/signalum",
		item: "thermal:signalum_block",
	},
	{
		tag: "forge:plates/signalum",
		item: "thermal:signalum_plate",
	},
	{
		tag: "forge:gears/signalum",
		item: "thermal:signalum_gear",
	},
	{
		tag: "forge:dusts/signalum",
		item: "thermal:signalum_dust",
	},
	{
		tag: "forge:ingots/prismalium",
		item: "thermalendergy:prismalium_ingot",
	},
	{
		tag: "forge:nuggets/prismalium",
		item: "thermalendergy:prismalium_nugget",
	},
	{
		tag: "forge:storage_blocks/prismalium",
		item: "thermalendergy:prismalium_block",
	},
	{
		tag: "forge:plates/prismalium",
		item: "thermalendergy:prismalium_plate",
	},
	{
		tag: "forge:gears/prismalium",
		item: "thermalendergy:prismalium_gear",
	},
	{
		tag: "forge:dusts/prismalium",
		item: "thermalendergy:prismalium_dust",
	},
	{
		tag: "forge:ingots/lumium",
		item: "thermal:lumium_ingot",
	},
	{
		tag: "forge:nuggets/lumium",
		item: "thermal:lumium_nugget",
	},
	{
		tag: "forge:storage_blocks/lumium",
		item: "thermal:lumium_block",
	},
	{
		tag: "forge:plates/lumium",
		item: "thermal:lumium_plate",
	},
	{
		tag: "forge:gears/lumium",
		item: "thermal:lumium_gear",
	},
	{
		tag: "forge:dusts/lumium",
		item: "thermal:lumium_dust",
	},
	{
		tag: "forge:ingots/amethyst",
		item: "minecraft:amethyst_shard",
	},
	{
		tag: "forge:nuggets/amethyst",
		item: "minecraft:amethyst_shard",
	},
	{
		tag: "forge:storage_blocks/amethyst",
		item: "minecraft:amethyst_block",
	},
	{
		tag: "forge:dusts/amethyst",
		item: "moremekanismprocessing:dust_amethyst",
	},
	{
		tag: "forge:ingots/bismuth",
		item: "moremekanismprocessing:bismuth_ingot",
	},
	{
		tag: "forge:nuggets/bismuth",
		item: "moremekanismprocessing:bismuth_nugget",
	},
	{
		tag: "forge:storage_blocks/bismuth",
		item: "chemlib:bismuth_metal_block",
	},
	{
		tag: "forge:plates/bismuth",
		item: "chemlib:bismuth_plate",
	},
	{
		tag: "forge:dusts/bismuth",
		item: "moremekanismprocessing:dust_bismuth",
	},
	{
		tag: "forge:ingots/apatite",
		item: "thermal:apatite",
	},
	{
		tag: "forge:storage_blocks/apatite",
		item: "thermal:apatite_block",
	},
	{
		tag: "forge:dusts/apatite",
		item: "thermal:apatite_dust",
	},
	{
		tag: "mekanism:crystals/apatite",
		item: "moremekanismprocessing:crystal_apatite",
	},
	{
		tag: "mekanism:dirty_dusts/apatite",
		item: "moremekanismprocessing:dirty_dust_apatite",
	},
	{
		tag: "mekanism:clumps/apatite",
		item: "moremekanismprocessing:clump_apatite",
	},
	{
		tag: "mekanism:shards/apatite",
		item: "moremekanismprocessing:shard_apatite",
	},
	{
		tag: "forge:ingots/cinnabar",
		item: "thermal:cinnabar",
	},
	{
		tag: "forge:storage_blocks/cinnabar",
		item: "thermal:cinnabar_block",
	},
	{
		tag: "forge:dusts/cinnabar",
		item: "thermal:cinnabar_dust",
	},
	{
		tag: "mekanism:crystals/cinnabar",
		item: "moremekanismprocessing:crystal_cinnabar",
	},
	{
		tag: "mekanism:dirty_dusts/cinnabar",
		item: "moremekanismprocessing:dirty_dust_cinnabar",
	},
	{
		tag: "mekanism:clumps/cinnabar",
		item: "moremekanismprocessing:clump_cinnabar",
	},
	{
		tag: "mekanism:shards/cinnabar",
		item: "moremekanismprocessing:shard_cinnabar",
	},
	{
		tag: "forge:ingots/niter",
		item: "thermal:niter",
	},
	{
		tag: "forge:storage_blocks/niter",
		item: "thermal:niter_block",
	},
	{
		tag: "forge:dusts/niter",
		item: "thermal:niter_dust",
	},
	{
		tag: "mekanism:crystals/niter",
		item: "moremekanismprocessing:crystal_niter",
	},
	{
		tag: "mekanism:dirty_dusts/niter",
		item: "moremekanismprocessing:dirty_dust_niter",
	},
	{
		tag: "mekanism:clumps/niter",
		item: "moremekanismprocessing:clump_niter",
	},
	{
		tag: "mekanism:shards/niter",
		item: "moremekanismprocessing:shard_niter",
	},
	{
		tag: "forge:ingots/lithium",
		item: "moremekanismprocessing:lithium_ingot",
	},
	{
		tag: "forge:nuggets/lithium",
		item: "moremekanismprocessing:lithium_nugget",
	},
	{
		tag: "forge:storage_blocks/lithium",
		item: "chemlib:lithium_metal_block",
	},
	{
		tag: "forge:plates/lithium",
		item: "chemlib:lithium_plate",
	},
	{
		tag: "forge:dusts/lithium",
		item: "mekanism:dust_lithium",
	},
	{
		tag: "forge:ingots/beryllium",
		item: "chemlib:beryllium_ingot",
	},
	{
		tag: "forge:nuggets/beryllium",
		item: "chemlib:beryllium_nugget",
	},
	{
		tag: "forge:storage_blocks/beryllium",
		item: "chemlib:beryllium_metal_block",
	},
	{
		tag: "forge:plates/beryllium",
		item: "chemlib:beryllium_plate",
	},
	{
		tag: "forge:dusts/beryllium",
		item: "chemlib:beryllium_dust",
	},
	{
		tag: "forge:ingots/boron",
		item: "moremekanismprocessing:boron_ingot",
	},
	{
		tag: "forge:nuggets/boron",
		item: "moremekanismprocessing:boron_nugget",
	},
	{
		tag: "forge:dusts/boron",
		item: "moremekanismprocessing:dust_boron",
	},
	{
		tag: "forge:ingots/sodium",
		item: "chemlib:sodium_ingot",
	},
	{
		tag: "forge:nuggets/sodium",
		item: "chemlib:sodium_nugget",
	},
	{
		tag: "forge:storage_blocks/sodium",
		item: "chemlib:sodium_metal_block",
	},
	{
		tag: "forge:plates/sodium",
		item: "chemlib:sodium_plate",
	},
	{
		tag: "forge:dusts/sodium",
		item: "chemlib:sodium_dust",
	},
	{
		tag: "forge:ingots/potassium",
		item: "chemlib:potassium_ingot",
	},
	{
		tag: "forge:nuggets/potassium",
		item: "chemlib:potassium_nugget",
	},
	{
		tag: "forge:storage_blocks/potassium",
		item: "chemlib:potassium_metal_block",
	},
	{
		tag: "forge:plates/potassium",
		item: "chemlib:potassium_plate",
	},
	{
		tag: "forge:dusts/potassium",
		item: "chemlib:potassium_dust",
	},
	{
		tag: "forge:ingots/calcium",
		item: "chemlib:calcium_ingot",
	},
	{
		tag: "forge:nuggets/calcium",
		item: "chemlib:calcium_nugget",
	},
	{
		tag: "forge:storage_blocks/calcium",
		item: "chemlib:calcium_metal_block",
	},
	{
		tag: "forge:plates/calcium",
		item: "chemlib:calcium_plate",
	},
	{
		tag: "forge:dusts/calcium",
		item: "chemlib:calcium_dust",
	},
	{
		tag: "forge:ingots/titanium",
		item: "moremekanismprocessing:titanium_ingot",
	},
	{
		tag: "forge:nuggets/titanium",
		item: "moremekanismprocessing:titanium_nugget",
	},
	{
		tag: "forge:storage_blocks/titanium",
		item: "chemlib:titanium_metal_block",
	},
	{
		tag: "forge:plates/titanium",
		item: "chemlib:titanium_plate",
	},
	{
		tag: "forge:dusts/titanium",
		item: "moremekanismprocessing:dust_titanium",
	},
	{
		tag: "forge:ingots/vanadium",
		item: "chemlib:vanadium_ingot",
	},
	{
		tag: "forge:nuggets/vanadium",
		item: "chemlib:vanadium_nugget",
	},
	{
		tag: "forge:storage_blocks/vanadium",
		item: "chemlib:vanadium_metal_block",
	},
	{
		tag: "forge:plates/vanadium",
		item: "chemlib:vanadium_plate",
	},
	{
		tag: "forge:dusts/vanadium",
		item: "chemlib:vanadium_dust",
	},
	{
		tag: "forge:ingots/manganese",
		item: "chemlib:manganese_ingot",
	},
	{
		tag: "forge:nuggets/manganese",
		item: "chemlib:manganese_nugget",
	},
	{
		tag: "forge:storage_blocks/manganese",
		item: "chemlib:manganese_metal_block",
	},
	{
		tag: "forge:plates/manganese",
		item: "chemlib:manganese_plate",
	},
	{
		tag: "forge:dusts/manganese",
		item: "chemlib:manganese_dust",
	},
	{
		tag: "forge:ingots/iron",
		item: "minecraft:iron_ingot",
	},
	{
		tag: "forge:nuggets/iron",
		item: "minecraft:iron_nugget",
	},
	{
		tag: "forge:storage_blocks/iron",
		item: "minecraft:iron_block",
	},
	{
		tag: "forge:raw_materials/iron",
		item: "minecraft:raw_iron",
	},
	{
		tag: "forge:storage_blocks/raw_iron",
		item: "minecraft:raw_iron_block",
	},
	{
		tag: "forge:plates/iron",
		item: "thermal:iron_plate",
	},
	{
		tag: "forge:gears/iron",
		item: "thermal:iron_gear",
	},
	{
		tag: "forge:dusts/iron",
		item: "mekanism:dust_iron",
	},
	{
		tag: "mekanism:enriched/iron",
		item: "mekanism:enriched_iron",
	},
	{
		tag: "mekanism:crystals/iron",
		item: "mekanism:crystal_iron",
	},
	{
		tag: "mekanism:dirty_dusts/iron",
		item: "mekanism:dirty_dust_iron",
	},
	{
		tag: "mekanism:clumps/iron",
		item: "mekanism:clump_iron",
	},
	{
		tag: "mekanism:shards/iron",
		item: "mekanism:shard_iron",
	},
	{
		tag: "forge:ingots/copper",
		item: "minecraft:copper_ingot",
	},
	{
		tag: "forge:nuggets/copper",
		item: "thermal:copper_nugget",
	},
	{
		tag: "forge:storage_blocks/copper",
		item: "minecraft:copper_block",
	},
	{
		tag: "forge:raw_materials/copper",
		item: "minecraft:raw_copper",
	},
	{
		tag: "forge:storage_blocks/raw_copper",
		item: "minecraft:raw_copper_block",
	},
	{
		tag: "forge:plates/copper",
		item: "thermal:copper_plate",
	},
	{
		tag: "forge:gears/copper",
		item: "thermal:copper_gear",
	},
	{
		tag: "forge:dusts/copper",
		item: "mekanism:dust_copper",
	},
	{
		tag: "mekanism:crystals/copper",
		item: "mekanism:crystal_copper",
	},
	{
		tag: "mekanism:dirty_dusts/copper",
		item: "mekanism:dirty_dust_copper",
	},
	{
		tag: "mekanism:clumps/copper",
		item: "mekanism:clump_copper",
	},
	{
		tag: "mekanism:shards/copper",
		item: "mekanism:shard_copper",
	},
	{
		tag: "forge:ingots/zinc",
		item: "moremekanismprocessing:zinc_ingot",
	},
	{
		tag: "forge:nuggets/zinc",
		item: "moremekanismprocessing:zinc_nugget",
	},
	{
		tag: "forge:storage_blocks/zinc",
		item: "chemlib:zinc_metal_block",
	},
	{
		tag: "forge:plates/zinc",
		item: "chemlib:zinc_plate",
	},
	{
		tag: "forge:dusts/zinc",
		item: "moremekanismprocessing:dust_zinc",
	},
	{
		tag: "forge:ingots/gallium",
		item: "chemlib:gallium_ingot",
	},
	{
		tag: "forge:nuggets/gallium",
		item: "chemlib:gallium_nugget",
	},
	{
		tag: "forge:storage_blocks/gallium",
		item: "chemlib:gallium_metal_block",
	},
	{
		tag: "forge:plates/gallium",
		item: "chemlib:gallium_plate",
	},
	{
		tag: "forge:dusts/gallium",
		item: "chemlib:gallium_dust",
	},
	{
		tag: "forge:ingots/rubidium",
		item: "chemlib:rubidium_ingot",
	},
	{
		tag: "forge:nuggets/rubidium",
		item: "chemlib:rubidium_nugget",
	},
	{
		tag: "forge:storage_blocks/rubidium",
		item: "chemlib:rubidium_metal_block",
	},
	{
		tag: "forge:plates/rubidium",
		item: "chemlib:rubidium_plate",
	},
	{
		tag: "forge:dusts/rubidium",
		item: "chemlib:rubidium_dust",
	},
	{
		tag: "forge:ingots/strontium",
		item: "chemlib:strontium_ingot",
	},
	{
		tag: "forge:nuggets/strontium",
		item: "chemlib:strontium_nugget",
	},
	{
		tag: "forge:storage_blocks/strontium",
		item: "chemlib:strontium_metal_block",
	},
	{
		tag: "forge:plates/strontium",
		item: "chemlib:strontium_plate",
	},
	{
		tag: "forge:dusts/strontium",
		item: "chemlib:strontium_dust",
	},
	{
		tag: "forge:ingots/yttrium",
		item: "chemlib:yttrium_ingot",
	},
	{
		tag: "forge:nuggets/yttrium",
		item: "chemlib:yttrium_nugget",
	},
	{
		tag: "forge:storage_blocks/yttrium",
		item: "chemlib:yttrium_metal_block",
	},
	{
		tag: "forge:plates/yttrium",
		item: "chemlib:yttrium_plate",
	},
	{
		tag: "forge:dusts/yttrium",
		item: "chemlib:yttrium_dust",
	},
	{
		tag: "forge:ingots/zirconium",
		item: "chemlib:zirconium_ingot",
	},
	{
		tag: "forge:nuggets/zirconium",
		item: "chemlib:zirconium_nugget",
	},
	{
		tag: "forge:storage_blocks/zirconium",
		item: "chemlib:zirconium_metal_block",
	},
	{
		tag: "forge:plates/zirconium",
		item: "chemlib:zirconium_plate",
	},
	{
		tag: "forge:dusts/zirconium",
		item: "chemlib:zirconium_dust",
	},
	{
		tag: "forge:ingots/niobium",
		item: "chemlib:niobium_ingot",
	},
	{
		tag: "forge:nuggets/niobium",
		item: "chemlib:niobium_nugget",
	},
	{
		tag: "forge:storage_blocks/niobium",
		item: "chemlib:niobium_metal_block",
	},
	{
		tag: "forge:plates/niobium",
		item: "chemlib:niobium_plate",
	},
	{
		tag: "forge:dusts/niobium",
		item: "chemlib:niobium_dust",
	},
	{
		tag: "forge:ingots/molybdenum",
		item: "chemlib:molybdenum_ingot",
	},
	{
		tag: "forge:nuggets/molybdenum",
		item: "chemlib:molybdenum_nugget",
	},
	{
		tag: "forge:storage_blocks/molybdenum",
		item: "chemlib:molybdenum_metal_block",
	},
	{
		tag: "forge:plates/molybdenum",
		item: "chemlib:molybdenum_plate",
	},
	{
		tag: "forge:dusts/molybdenum",
		item: "chemlib:molybdenum_dust",
	},
	{
		tag: "forge:ingots/ruthenium",
		item: "chemlib:ruthenium_ingot",
	},
	{
		tag: "forge:nuggets/ruthenium",
		item: "chemlib:ruthenium_nugget",
	},
	{
		tag: "forge:storage_blocks/ruthenium",
		item: "chemlib:ruthenium_metal_block",
	},
	{
		tag: "forge:plates/ruthenium",
		item: "chemlib:ruthenium_plate",
	},
	{
		tag: "forge:dusts/ruthenium",
		item: "chemlib:ruthenium_dust",
	},
	{
		tag: "forge:ingots/rhodium",
		item: "chemlib:rhodium_ingot",
	},
	{
		tag: "forge:nuggets/rhodium",
		item: "chemlib:rhodium_nugget",
	},
	{
		tag: "forge:storage_blocks/rhodium",
		item: "chemlib:rhodium_metal_block",
	},
	{
		tag: "forge:plates/rhodium",
		item: "chemlib:rhodium_plate",
	},
	{
		tag: "forge:dusts/rhodium",
		item: "chemlib:rhodium_dust",
	},
	{
		tag: "forge:ingots/palladium",
		item: "chemlib:palladium_ingot",
	},
	{
		tag: "forge:nuggets/palladium",
		item: "chemlib:palladium_nugget",
	},
	{
		tag: "forge:storage_blocks/palladium",
		item: "chemlib:palladium_metal_block",
	},
	{
		tag: "forge:plates/palladium",
		item: "chemlib:palladium_plate",
	},
	{
		tag: "forge:dusts/palladium",
		item: "chemlib:palladium_dust",
	},
	{
		tag: "forge:ingots/silver",
		item: "thermal:silver_ingot",
	},
	{
		tag: "forge:nuggets/silver",
		item: "thermal:silver_nugget",
	},
	{
		tag: "forge:storage_blocks/silver",
		item: "thermal:silver_block",
	},
	{
		tag: "forge:raw_materials/silver",
		item: "thermal:raw_silver",
	},
	{
		tag: "forge:storage_blocks/raw_silver",
		item: "thermal:raw_silver_block",
	},
	{
		tag: "forge:plates/silver",
		item: "thermal:silver_plate",
	},
	{
		tag: "forge:gears/silver",
		item: "thermal:silver_gear",
	},
	{
		tag: "forge:dusts/silver",
		item: "thermal:silver_dust",
	},
	{
		tag: "mekanism:crystals/silver",
		item: "moremekanismprocessing:crystal_silver",
	},
	{
		tag: "mekanism:dirty_dusts/silver",
		item: "moremekanismprocessing:dirty_dust_silver",
	},
	{
		tag: "mekanism:clumps/silver",
		item: "moremekanismprocessing:clump_silver",
	},
	{
		tag: "mekanism:shards/silver",
		item: "moremekanismprocessing:shard_silver",
	},
	{
		tag: "forge:ingots/cadmium",
		item: "chemlib:cadmium_ingot",
	},
	{
		tag: "forge:nuggets/cadmium",
		item: "chemlib:cadmium_nugget",
	},
	{
		tag: "forge:storage_blocks/cadmium",
		item: "chemlib:cadmium_metal_block",
	},
	{
		tag: "forge:plates/cadmium",
		item: "chemlib:cadmium_plate",
	},
	{
		tag: "forge:dusts/cadmium",
		item: "chemlib:cadmium_dust",
	},
	{
		tag: "forge:ingots/indium",
		item: "chemlib:indium_ingot",
	},
	{
		tag: "forge:nuggets/indium",
		item: "chemlib:indium_nugget",
	},
	{
		tag: "forge:storage_blocks/indium",
		item: "chemlib:indium_metal_block",
	},
	{
		tag: "forge:plates/indium",
		item: "chemlib:indium_plate",
	},
	{
		tag: "forge:dusts/indium",
		item: "chemlib:indium_dust",
	},
	{
		tag: "forge:ingots/tin",
		item: "mekanism:ingot_tin",
	},
	{
		tag: "forge:nuggets/tin",
		item: "mekanism:nugget_tin",
	},
	{
		tag: "forge:storage_blocks/tin",
		item: "mekanism:block_tin",
	},
	{
		tag: "forge:raw_materials/tin",
		item: "mekanism:raw_tin",
	},
	{
		tag: "forge:storage_blocks/raw_tin",
		item: "mekanism:block_raw_tin",
	},
	{
		tag: "forge:plates/tin",
		item: "thermal:tin_plate",
	},
	{
		tag: "forge:gears/tin",
		item: "thermal:tin_gear",
	},
	{
		tag: "forge:dusts/tin",
		item: "mekanism:dust_tin",
	},
	{
		tag: "mekanism:enriched/tin",
		item: "mekanism:enriched_tin",
	},
	{
		tag: "mekanism:crystals/tin",
		item: "mekanism:crystal_tin",
	},
	{
		tag: "mekanism:dirty_dusts/tin",
		item: "mekanism:dirty_dust_tin",
	},
	{
		tag: "mekanism:clumps/tin",
		item: "mekanism:clump_tin",
	},
	{
		tag: "mekanism:shards/tin",
		item: "mekanism:shard_tin",
	},
	{
		tag: "forge:ingots/cesium",
		item: "chemlib:cesium_ingot",
	},
	{
		tag: "forge:nuggets/cesium",
		item: "chemlib:cesium_nugget",
	},
	{
		tag: "forge:storage_blocks/cesium",
		item: "chemlib:cesium_metal_block",
	},
	{
		tag: "forge:plates/cesium",
		item: "chemlib:cesium_plate",
	},
	{
		tag: "forge:dusts/cesium",
		item: "chemlib:cesium_dust",
	},
	{
		tag: "forge:ingots/barium",
		item: "chemlib:barium_ingot",
	},
	{
		tag: "forge:nuggets/barium",
		item: "chemlib:barium_nugget",
	},
	{
		tag: "forge:storage_blocks/barium",
		item: "chemlib:barium_metal_block",
	},
	{
		tag: "forge:plates/barium",
		item: "chemlib:barium_plate",
	},
	{
		tag: "forge:dusts/barium",
		item: "chemlib:barium_dust",
	},
	{
		tag: "forge:ingots/lanthanum",
		item: "chemlib:lanthanum_ingot",
	},
	{
		tag: "forge:nuggets/lanthanum",
		item: "chemlib:lanthanum_nugget",
	},
	{
		tag: "forge:storage_blocks/lanthanum",
		item: "chemlib:lanthanum_metal_block",
	},
	{
		tag: "forge:plates/lanthanum",
		item: "chemlib:lanthanum_plate",
	},
	{
		tag: "forge:dusts/lanthanum",
		item: "chemlib:lanthanum_dust",
	},
	{
		tag: "forge:ingots/cerium",
		item: "chemlib:cerium_ingot",
	},
	{
		tag: "forge:nuggets/cerium",
		item: "chemlib:cerium_nugget",
	},
	{
		tag: "forge:storage_blocks/cerium",
		item: "chemlib:cerium_metal_block",
	},
	{
		tag: "forge:plates/cerium",
		item: "chemlib:cerium_plate",
	},
	{
		tag: "forge:dusts/cerium",
		item: "chemlib:cerium_dust",
	},
	{
		tag: "forge:ingots/praseodymium",
		item: "chemlib:praseodymium_ingot",
	},
	{
		tag: "forge:nuggets/praseodymium",
		item: "chemlib:praseodymium_nugget",
	},
	{
		tag: "forge:storage_blocks/praseodymium",
		item: "chemlib:praseodymium_metal_block",
	},
	{
		tag: "forge:plates/praseodymium",
		item: "chemlib:praseodymium_plate",
	},
	{
		tag: "forge:dusts/praseodymium",
		item: "chemlib:praseodymium_dust",
	},
	{
		tag: "forge:ingots/neodymium",
		item: "chemlib:neodymium_ingot",
	},
	{
		tag: "forge:nuggets/neodymium",
		item: "chemlib:neodymium_nugget",
	},
	{
		tag: "forge:storage_blocks/neodymium",
		item: "chemlib:neodymium_metal_block",
	},
	{
		tag: "forge:plates/neodymium",
		item: "chemlib:neodymium_plate",
	},
	{
		tag: "forge:dusts/neodymium",
		item: "chemlib:neodymium_dust",
	},
	{
		tag: "forge:ingots/samarium",
		item: "chemlib:samarium_ingot",
	},
	{
		tag: "forge:nuggets/samarium",
		item: "chemlib:samarium_nugget",
	},
	{
		tag: "forge:storage_blocks/samarium",
		item: "chemlib:samarium_metal_block",
	},
	{
		tag: "forge:plates/samarium",
		item: "chemlib:samarium_plate",
	},
	{
		tag: "forge:dusts/samarium",
		item: "chemlib:samarium_dust",
	},
	{
		tag: "forge:ingots/europium",
		item: "chemlib:europium_ingot",
	},
	{
		tag: "forge:nuggets/europium",
		item: "chemlib:europium_nugget",
	},
	{
		tag: "forge:storage_blocks/europium",
		item: "chemlib:europium_metal_block",
	},
	{
		tag: "forge:plates/europium",
		item: "chemlib:europium_plate",
	},
	{
		tag: "forge:dusts/europium",
		item: "chemlib:europium_dust",
	},
	{
		tag: "forge:ingots/gadolinium",
		item: "chemlib:gadolinium_ingot",
	},
	{
		tag: "forge:nuggets/gadolinium",
		item: "chemlib:gadolinium_nugget",
	},
	{
		tag: "forge:storage_blocks/gadolinium",
		item: "chemlib:gadolinium_metal_block",
	},
	{
		tag: "forge:plates/gadolinium",
		item: "chemlib:gadolinium_plate",
	},
	{
		tag: "forge:dusts/gadolinium",
		item: "chemlib:gadolinium_dust",
	},
	{
		tag: "forge:ingots/terbium",
		item: "chemlib:terbium_ingot",
	},
	{
		tag: "forge:nuggets/terbium",
		item: "chemlib:terbium_nugget",
	},
	{
		tag: "forge:storage_blocks/terbium",
		item: "chemlib:terbium_metal_block",
	},
	{
		tag: "forge:plates/terbium",
		item: "chemlib:terbium_plate",
	},
	{
		tag: "forge:dusts/terbium",
		item: "chemlib:terbium_dust",
	},
	{
		tag: "forge:ingots/dysprosium",
		item: "chemlib:dysprosium_ingot",
	},
	{
		tag: "forge:nuggets/dysprosium",
		item: "chemlib:dysprosium_nugget",
	},
	{
		tag: "forge:storage_blocks/dysprosium",
		item: "chemlib:dysprosium_metal_block",
	},
	{
		tag: "forge:plates/dysprosium",
		item: "chemlib:dysprosium_plate",
	},
	{
		tag: "forge:dusts/dysprosium",
		item: "chemlib:dysprosium_dust",
	},
	{
		tag: "forge:ingots/holmium",
		item: "chemlib:holmium_ingot",
	},
	{
		tag: "forge:nuggets/holmium",
		item: "chemlib:holmium_nugget",
	},
	{
		tag: "forge:storage_blocks/holmium",
		item: "chemlib:holmium_metal_block",
	},
	{
		tag: "forge:plates/holmium",
		item: "chemlib:holmium_plate",
	},
	{
		tag: "forge:dusts/holmium",
		item: "chemlib:holmium_dust",
	},
	{
		tag: "forge:ingots/erbium",
		item: "chemlib:erbium_ingot",
	},
	{
		tag: "forge:nuggets/erbium",
		item: "chemlib:erbium_nugget",
	},
	{
		tag: "forge:storage_blocks/erbium",
		item: "chemlib:erbium_metal_block",
	},
	{
		tag: "forge:plates/erbium",
		item: "chemlib:erbium_plate",
	},
	{
		tag: "forge:dusts/erbium",
		item: "chemlib:erbium_dust",
	},
	{
		tag: "forge:ingots/thulium",
		item: "chemlib:thulium_ingot",
	},
	{
		tag: "forge:nuggets/thulium",
		item: "chemlib:thulium_nugget",
	},
	{
		tag: "forge:storage_blocks/thulium",
		item: "chemlib:thulium_metal_block",
	},
	{
		tag: "forge:plates/thulium",
		item: "chemlib:thulium_plate",
	},
	{
		tag: "forge:dusts/thulium",
		item: "chemlib:thulium_dust",
	},
	{
		tag: "forge:ingots/ytterbium",
		item: "chemlib:ytterbium_ingot",
	},
	{
		tag: "forge:nuggets/ytterbium",
		item: "chemlib:ytterbium_nugget",
	},
	{
		tag: "forge:storage_blocks/ytterbium",
		item: "chemlib:ytterbium_metal_block",
	},
	{
		tag: "forge:plates/ytterbium",
		item: "chemlib:ytterbium_plate",
	},
	{
		tag: "forge:dusts/ytterbium",
		item: "chemlib:ytterbium_dust",
	},
	{
		tag: "forge:ingots/lutetium",
		item: "chemlib:lutetium_ingot",
	},
	{
		tag: "forge:nuggets/lutetium",
		item: "chemlib:lutetium_nugget",
	},
	{
		tag: "forge:storage_blocks/lutetium",
		item: "chemlib:lutetium_metal_block",
	},
	{
		tag: "forge:plates/lutetium",
		item: "chemlib:lutetium_plate",
	},
	{
		tag: "forge:dusts/lutetium",
		item: "chemlib:lutetium_dust",
	},
	{
		tag: "forge:ingots/hafnium",
		item: "chemlib:hafnium_ingot",
	},
	{
		tag: "forge:nuggets/hafnium",
		item: "chemlib:hafnium_nugget",
	},
	{
		tag: "forge:storage_blocks/hafnium",
		item: "chemlib:hafnium_metal_block",
	},
	{
		tag: "forge:plates/hafnium",
		item: "chemlib:hafnium_plate",
	},
	{
		tag: "forge:dusts/hafnium",
		item: "chemlib:hafnium_dust",
	},
	{
		tag: "forge:ingots/tantalum",
		item: "chemlib:tantalum_ingot",
	},
	{
		tag: "forge:nuggets/tantalum",
		item: "chemlib:tantalum_nugget",
	},
	{
		tag: "forge:storage_blocks/tantalum",
		item: "chemlib:tantalum_metal_block",
	},
	{
		tag: "forge:plates/tantalum",
		item: "chemlib:tantalum_plate",
	},
	{
		tag: "forge:dusts/tantalum",
		item: "chemlib:tantalum_dust",
	},
	{
		tag: "forge:ingots/tungsten",
		item: "moremekanismprocessing:tungsten_ingot",
	},
	{
		tag: "forge:nuggets/tungsten",
		item: "moremekanismprocessing:tungsten_nugget",
	},
	{
		tag: "forge:storage_blocks/tungsten",
		item: "chemlib:tungsten_metal_block",
	},
	{
		tag: "forge:plates/tungsten",
		item: "chemlib:tungsten_plate",
	},
	{
		tag: "forge:dusts/tungsten",
		item: "moremekanismprocessing:dust_tungsten",
	},
	{
		tag: "forge:ingots/rhenium",
		item: "chemlib:rhenium_ingot",
	},
	{
		tag: "forge:nuggets/rhenium",
		item: "chemlib:rhenium_nugget",
	},
	{
		tag: "forge:storage_blocks/rhenium",
		item: "chemlib:rhenium_metal_block",
	},
	{
		tag: "forge:plates/rhenium",
		item: "chemlib:rhenium_plate",
	},
	{
		tag: "forge:dusts/rhenium",
		item: "chemlib:rhenium_dust",
	},
	{
		tag: "forge:ingots/osmium",
		item: "mekanism:ingot_osmium",
	},
	{
		tag: "forge:nuggets/osmium",
		item: "mekanism:nugget_osmium",
	},
	{
		tag: "forge:storage_blocks/osmium",
		item: "mekanism:block_osmium",
	},
	{
		tag: "forge:raw_materials/osmium",
		item: "mekanism:raw_osmium",
	},
	{
		tag: "forge:storage_blocks/raw_osmium",
		item: "mekanism:block_raw_osmium",
	},
	{
		tag: "forge:plates/osmium",
		item: "chemlib:osmium_plate",
	},
	{
		tag: "forge:dusts/osmium",
		item: "mekanism:dust_osmium",
	},
	{
		tag: "mekanism:enriched/osmium",
		item: "mekanism_extras:enriched_osmium",
	},
	{
		tag: "mekanism:crystals/osmium",
		item: "mekanism:crystal_osmium",
	},
	{
		tag: "mekanism:dirty_dusts/osmium",
		item: "mekanism:dirty_dust_osmium",
	},
	{
		tag: "mekanism:clumps/osmium",
		item: "mekanism:clump_osmium",
	},
	{
		tag: "mekanism:shards/osmium",
		item: "mekanism:shard_osmium",
	},
	{
		tag: "forge:ingots/iridium",
		item: "moremekanismprocessing:iridium_ingot",
	},
	{
		tag: "forge:nuggets/iridium",
		item: "moremekanismprocessing:iridium_nugget",
	},
	{
		tag: "forge:storage_blocks/iridium",
		item: "chemlib:iridium_metal_block",
	},
	{
		tag: "forge:plates/iridium",
		item: "chemlib:iridium_plate",
	},
	{
		tag: "forge:dusts/iridium",
		item: "moremekanismprocessing:dust_iridium",
	},
	{
		tag: "forge:ingots/platinum",
		item: "moremekanismprocessing:platinum_ingot",
	},
	{
		tag: "forge:nuggets/platinum",
		item: "moremekanismprocessing:platinum_nugget",
	},
	{
		tag: "forge:storage_blocks/platinum",
		item: "chemlib:platinum_metal_block",
	},
	{
		tag: "forge:plates/platinum",
		item: "chemlib:platinum_plate",
	},
	{
		tag: "forge:dusts/platinum",
		item: "moremekanismprocessing:dust_platinum",
	},
	{
		tag: "forge:ingots/gold",
		item: "minecraft:gold_ingot",
	},
	{
		tag: "forge:nuggets/gold",
		item: "minecraft:gold_nugget",
	},
	{
		tag: "forge:storage_blocks/gold",
		item: "minecraft:gold_block",
	},
	{
		tag: "forge:raw_materials/gold",
		item: "minecraft:raw_gold",
	},
	{
		tag: "forge:storage_blocks/raw_gold",
		item: "minecraft:raw_gold_block",
	},
	{
		tag: "forge:plates/gold",
		item: "thermal:gold_plate",
	},
	{
		tag: "forge:gears/gold",
		item: "thermal:gold_gear",
	},
	{
		tag: "forge:dusts/gold",
		item: "mekanism:dust_gold",
	},
	{
		tag: "mekanism:enriched/gold",
		item: "mekanism:enriched_gold",
	},
	{
		tag: "mekanism:crystals/gold",
		item: "mekanism:crystal_gold",
	},
	{
		tag: "mekanism:dirty_dusts/gold",
		item: "mekanism:dirty_dust_gold",
	},
	{
		tag: "mekanism:clumps/gold",
		item: "mekanism:clump_gold",
	},
	{
		tag: "mekanism:shards/gold",
		item: "mekanism:shard_gold",
	},
	{
		tag: "forge:ingots/thallium",
		item: "chemlib:thallium_ingot",
	},
	{
		tag: "forge:nuggets/thallium",
		item: "chemlib:thallium_nugget",
	},
	{
		tag: "forge:storage_blocks/thallium",
		item: "chemlib:thallium_metal_block",
	},
	{
		tag: "forge:plates/thallium",
		item: "chemlib:thallium_plate",
	},
	{
		tag: "forge:dusts/thallium",
		item: "chemlib:thallium_dust",
	},
	{
		tag: "forge:ingots/lead",
		item: "mekanism:ingot_lead",
	},
	{
		tag: "forge:nuggets/lead",
		item: "mekanism:nugget_lead",
	},
	{
		tag: "forge:storage_blocks/lead",
		item: "mekanism:block_lead",
	},
	{
		tag: "forge:raw_materials/lead",
		item: "mekanism:raw_lead",
	},
	{
		tag: "forge:storage_blocks/raw_lead",
		item: "mekanism:block_raw_lead",
	},
	{
		tag: "forge:plates/lead",
		item: "thermal:lead_plate",
	},
	{
		tag: "forge:gears/lead",
		item: "thermal:lead_gear",
	},
	{
		tag: "forge:dusts/lead",
		item: "mekanism:dust_lead",
	},
	{
		tag: "mekanism:enriched/lead",
		item: "mekanism_extras:enriched_lead",
	},
	{
		tag: "mekanism:crystals/lead",
		item: "mekanism:crystal_lead",
	},
	{
		tag: "mekanism:dirty_dusts/lead",
		item: "mekanism:dirty_dust_lead",
	},
	{
		tag: "mekanism:clumps/lead",
		item: "mekanism:clump_lead",
	},
	{
		tag: "mekanism:shards/lead",
		item: "mekanism:shard_lead",
	},
	{
		tag: "forge:ingots/polonium",
		item: "chemlib:polonium_ingot",
	},
	{
		tag: "forge:nuggets/polonium",
		item: "chemlib:polonium_nugget",
	},
	{
		tag: "forge:storage_blocks/polonium",
		item: "chemlib:polonium_metal_block",
	},
	{
		tag: "forge:plates/polonium",
		item: "chemlib:polonium_plate",
	},
	{
		tag: "forge:dusts/polonium",
		item: "chemlib:polonium_dust",
	},
	{
		tag: "forge:ingots/francium",
		item: "chemlib:francium_ingot",
	},
	{
		tag: "forge:nuggets/francium",
		item: "chemlib:francium_nugget",
	},
	{
		tag: "forge:storage_blocks/francium",
		item: "chemlib:francium_metal_block",
	},
	{
		tag: "forge:plates/francium",
		item: "chemlib:francium_plate",
	},
	{
		tag: "forge:dusts/francium",
		item: "chemlib:francium_dust",
	},
	{
		tag: "forge:ingots/radium",
		item: "chemlib:radium_ingot",
	},
	{
		tag: "forge:nuggets/radium",
		item: "chemlib:radium_nugget",
	},
	{
		tag: "forge:storage_blocks/radium",
		item: "chemlib:radium_metal_block",
	},
	{
		tag: "forge:plates/radium",
		item: "chemlib:radium_plate",
	},
	{
		tag: "forge:dusts/radium",
		item: "chemlib:radium_dust",
	},
	{
		tag: "forge:ingots/actinium",
		item: "chemlib:actinium_ingot",
	},
	{
		tag: "forge:nuggets/actinium",
		item: "chemlib:actinium_nugget",
	},
	{
		tag: "forge:storage_blocks/actinium",
		item: "chemlib:actinium_metal_block",
	},
	{
		tag: "forge:plates/actinium",
		item: "chemlib:actinium_plate",
	},
	{
		tag: "forge:dusts/actinium",
		item: "chemlib:actinium_dust",
	},
	{
		tag: "forge:ingots/protactinium",
		item: "chemlib:protactinium_ingot",
	},
	{
		tag: "forge:nuggets/protactinium",
		item: "chemlib:protactinium_nugget",
	},
	{
		tag: "forge:storage_blocks/protactinium",
		item: "chemlib:protactinium_metal_block",
	},
	{
		tag: "forge:plates/protactinium",
		item: "chemlib:protactinium_plate",
	},
	{
		tag: "forge:dusts/protactinium",
		item: "chemlib:protactinium_dust",
	},
	{
		tag: "forge:dusts/coal",
		item: "mekanism:dust_coal",
	},
	{
		tag: "forge:dusts/charcoal",
		item: "mekanism:dust_charcoal",
	},
	{
		tag: "forge:dusts/sulfur",
		item: "mekanism:dust_sulfur",
	},
]