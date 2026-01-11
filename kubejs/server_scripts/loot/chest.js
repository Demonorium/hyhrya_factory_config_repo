// priority: 1

LootJS.modifiers((event) => {

    const food_loots = [
        LootEntry.of("thermal:compost", 6).withChance(0.8),
        LootEntry.of("minecraft:bone_meal", 20).withChance(0.3),
        LootEntry.of("thermal:phytogro", 5).withChance(0.1)
    ]

    const food_tables = [
        "ati_structures:chests/vegetation",
        "ati_structures:chests/food_storage",
        "betterdeserttemples:chests/food_storage",
        "kattersstructures:chests/fisherman",
        "jvs:chest/food",
        "vsnomad:chest/food",
        "philipsruins:chest/ocean_ruin_fortress"
    ]
    food_tables.forEach(table => {
        event.addLootTableModifier(table)
            .addWeightedLoot(
                    [0, 2],
                    food_loots
                );
    })

    const fisher_loots = [
        LootEntry.of("seadwellers:snatcherfish_white").withChance(0.01),
        LootEntry.of("netherdepthsupgrade:wither_bonefish", 4).withChance(0.1),
        LootEntry.of("netherdepthsupgrade:blazefish", 4).withChance(0.1),
        LootEntry.of("netherdepthsupgrade:obsidianfish", 8).withChance(0.1),
        LootEntry.of("thermal:copper_gear", 5).withChance(0.3),
        LootEntry.of("aquaculturedelight:catfish_barbecue", 5).withChance(0.3),
        LootEntry.of("aquaculture:smallmouth_bass", 5).withChance(0.3),
        LootEntry.of("aquaculture:perch", 5).withChance(0.3)
    ]

    const fisher_loots_tables = [
        "kattersstructures:chests/fisherman",
        "kattersstructures:chests/swamp/fisherman",
        "kattersstructures:chests/jungle/fisherman",
        "jvs:chest/fishing",
        "minecraft:chests/village/village_fisher",
        "jvsnomad:chest/fishing",
        "minecraft:chests/shipwreck_supply",
        "farmersdelight:chests/fd_shipwreck_supply",
        "structory:mood/fisherman",
        "philipsruins:chest/ocean_ruin_fortress",
        "u_sea:island/cooled_fish",
        "terralith:village/fortified/fisherman"
    ]
    fisher_loots_tables.forEach(table => {
        event.addLootTableModifier(table)
            .addWeightedLoot(
                    [0, 2],
                    fisher_loots
                );
    })

    const tressure_chest = [
        LootEntry.of("thermal:tin_coin", 15).withChance(0.1),
        LootEntry.of("thermal:iron_coin", 1).withChance(0.1),
        LootEntry.of("thermal:copper_coin", 15).withChance(0.3),
        LootEntry.of("thermal:nickel_coin", 40).withChance(0.7),
        LootEntry.of("mekanism:basic_control_circuit", 4).withChance(0.1),
        LootEntry.of("mekanism:advanced_control_circuit", 2).withChance(0.05),
        LootEntry.of("mekanism:elite_control_circuit", 1).withChance(0.01),
        LootEntry.of("pneumaticcraft:pcb_blueprint", 1).withChance(0.01),
        LootEntry.of("pneumaticcraft:printed_circuit_board", 2).withChance(0.2),
        LootEntry.of("thermal:rf_coil", 3).withChance(0.4),
        LootEntry.of("thermal:machine_frame", 3).withChance(0.4),
        LootEntry.of("pneumaticcraft:compressed_iron_gear", 3).withChance(0.4),
        LootEntry.of("pneumaticcraft:compressed_iron_block", 2).withChance(0.4),
        LootEntry.of(MATERIALS.STEEL.block, 1).withChance(0.2),
    ]

    const tressure_chest_tables = [
        "betterfortresses:chests/obsidian",
        "betterfortresses:chests/beacon",
        "betterfortresses:chests/storage",
        "betterfortresses:chests/worship",
        "minecraft:chests/end_city_treasure",
        "minecraft:chests/buried_treasure",
        "kattersstructures:chests/underground/treasures",
        "cataclysm:chests/acropolis_treasure",
        "underground_bunkers:chests/underground_bunker/underground_bunker_treasure",
        "cataclysm:chests/frosted_prison_treasure",
        "aquaculture:box/treasure_chest",
        "endlessbiomes:chests/bulwark_treasure_loot",
        "ati_structures:chests/crafting",
        "terralith:village/desert/treasure",
        "structory:harvest/manor2/treasure",
        "structory:ruin/taiga/illager_treasure",
        "terralith:village/fortified/treasure",
        "u_desert:desert_ruin/treasure",
        "terralith:spire/treasure",
    ]
    tressure_chest_tables.forEach(table => {
        event.addLootTableModifier(table)
            .addWeightedLoot(
                    [2, 5],
                    tressure_chest
                );
    })

    event.addLootTableModifier("underground_bunkers:chests/underground_bunker/underground_bunker_normal")
        .addWeightedLoot(
            1,
            [
                LootEntry.of('superbwarfare:ak_47_blueprint').withChance(0.05),
                LootEntry.of('superbwarfare:mk_42_blueprint').withChance(0.02),
                LootEntry.of('superbwarfare:rpg_blueprint').withChance(0.05),
                LootEntry.of('superbwarfare:glock_18_blueprint').withChance(0.2),
                LootEntry.of('superbwarfare:handgun_ammo_box', 3).withChance(0.8),
                LootEntry.of('superbwarfare:rifle_ammo_box', 2).withChance(0.7)
            ]
        )

    event.addLootTableModifier("underground_bunkers:chests/underground_bunker/underground_bunker_treasure")
        .addWeightedLoot(
            1,
            [
                LootEntry.of('superbwarfare:qbz_191_blueprint').withChance(0.05),
                LootEntry.of('superbwarfare:m_870_blueprint').withChance(0.2),
                LootEntry.of('superbwarfare:ak_47_blueprint').withChance(0.4),
                LootEntry.of('superbwarfare:mk_42_blueprint').withChance(0.3),
                LootEntry.of('superbwarfare:ancient_cpu').withChance(0.3),
            ]
        )
    event.addLootTableModifier("ati_structures:chests/archer_chest2")
        .addWeightedLoot(
            1,
            [
                LootEntry.of('superbwarfare:glock_17_blueprint').withChance(0.05),
                LootEntry.of('superbwarfare:glock_18_blueprint').withChance(0.01),
                LootEntry.of('superbwarfare:marlin_blueprint').withChance(0.3)
            ]
        )
    event.addLootTableModifier("ati_structures:chests/archer_chest")
        .addWeightedLoot(
            1,
            [
                LootEntry.of('superbwarfare:glock_17_blueprint').withChance(0.05),
                LootEntry.of('superbwarfare:glock_18_blueprint').withChance(0.01),
                LootEntry.of('superbwarfare:marlin_blueprint').withChance(0.3)
            ]
        )
    event.addLootTableModifier("ati_structures:chests/armory")
        .addWeightedLoot(
            1,
            [
                LootEntry.of('superbwarfare:glock_17_blueprint').withChance(0.05),
                LootEntry.of('superbwarfare:glock_18_blueprint').withChance(0.01),
                LootEntry.of('superbwarfare:marlin_blueprint').withChance(0.3)
            ]
        )
    
    event.addLootTableModifier("undergarden:chests/catacombs")
        .addWeightedLoot(
            [0, 5],
            [
                LootEntry.of('undergarden:forgotten_ingot').withChance(0.05),
                LootEntry.of('superbwarfare:ancient_cpu').withChance(0.01),
                LootEntry.of(MATERIALS.CLOGGRUM.ingot).withChance(0.3),
                LootEntry.of(MATERIALS.LITHIUM.ingot).withChance(0.3)
            ]
        )

    event.addLootTableModifier("illagerinvasion:chests/labyrinth")
        .addWeightedLoot(
            [0, 3],
            [
                LootEntry.of('superbwarfare:glock_17_blueprint').withChance(0.05),
                LootEntry.of('superbwarfare:m_79_blueprint').withChance(0.05),
                LootEntry.of(MATERIALS.GOLD.gear, 5).withChance(0.3),
                LootEntry.of(MATERIALS.DIAMOND.gear, 2).withChance(0.3),
                LootEntry.of(MATERIALS.STEEL.ingot, 5).withChance(0.3)
            ]
        )
    
    event.addLootTableModifier("illagerinvasion:chests/labyrinth")
        .addWeightedLoot(
            [0, 3],
            [
                LootEntry.of('superbwarfare:glock_17_blueprint').withChance(0.05),
                LootEntry.of('superbwarfare:m_79_blueprint').withChance(0.05),
                LootEntry.of(MATERIALS.GOLD.gear, 5).withChance(0.3),
                LootEntry.of(MATERIALS.DIAMOND.gear, 2).withChance(0.3),
                LootEntry.of(MATERIALS.STEEL.ingot, 5).withChance(0.3),
                LootEntry.of("thermal:tin_coin", 15).withChance(0.1),
                LootEntry.of("thermal:iron_coin", 1).withChance(0.1),
                LootEntry.of("thermal:copper_coin", 15).withChance(0.3),
                LootEntry.of("thermal:nickel_coin", 40).withChance(0.1),
            ]
        )    
    event.addLootTableModifier("illagerinvasion:chests/illusioner_tower_entrance")
        .addWeightedLoot(
            [0, 3],
            [
                LootEntry.of('mekanism:crafting_formula').withChance(0.2),
                LootEntry.of('superbwarfare:shotgun_ammo_box').withChance(0.05),
                LootEntry.of('superbwarfare:handgun_ammo_box').withChance(0.05),
                LootEntry.of("thermal:tin_coin", 15).withChance(0.1),
                LootEntry.of("thermal:iron_coin", 1).withChance(0.1),
                LootEntry.of("thermal:copper_coin", 15).withChance(0.3),
                LootEntry.of("thermal:nickel_coin", 40).withChance(0.1),
            ]
        ) 
    event.addLootTableModifier("illagerinvasion:chests/illusioner_tower_stairs")
        .addWeightedLoot(
            [0, 3],
            [
                LootEntry.of("thermal:tin_coin", 15).withChance(0.1),
                LootEntry.of("thermal:iron_coin", 1).withChance(0.1),
                LootEntry.of("thermal:copper_coin", 15).withChance(0.3),
                LootEntry.of("thermal:nickel_coin", 40).withChance(0.6),
            ]
        )
    event.addLootTableModifier("illagerinvasion:chests/illager_fort_ground")
        .addWeightedLoot(
            [0, 3],
            [
                LootEntry.of("thermal:tin_coin", 15).withChance(0.1),
                LootEntry.of("thermal:iron_coin", 1).withChance(0.1),
                LootEntry.of("thermal:copper_coin", 15).withChance(0.3),
                LootEntry.of("thermal:nickel_coin", 40).withChance(0.6),
            ]
        )
    event.addLootTableModifier("illagerinvasion:chests/illager_fort_tower")
        .addWeightedLoot(
            [0, 3],
            [
                LootEntry.of("thermal:tin_coin", 15).withChance(0.1),
                LootEntry.of("thermal:iron_coin", 1).withChance(0.1),
                LootEntry.of("thermal:copper_coin", 15).withChance(0.3),
                LootEntry.of("thermal:nickel_coin", 40).withChance(0.6),
            ]
        )
    event.addLootTableModifier("illagerinvasion:chests/labyrinth_map")
        .addWeightedLoot(
            [0, 3],
            [
                LootEntry.of("thermal:tin_coin", 15).withChance(0.1),
                LootEntry.of("thermal:iron_coin", 1).withChance(0.1),
                LootEntry.of("thermal:copper_coin", 15).withChance(0.3),
                LootEntry.of("thermal:nickel_coin", 40).withChance(0.6),
            ]
        )
})