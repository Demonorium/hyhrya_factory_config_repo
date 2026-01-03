// priority: 0

WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            'superbwarfare:silver_ore',
            'superbwarfare:deepslate_silver_ore',
            'superbwarfare:galena_ore',
            'superbwarfare:deepslate_galena_ore',
            'thermal:lead_ore',
            'thermal:deepslate_lead_ore',
            'thermal:tin_ore',
            'thermal:deepslate_tin_ore',

            'thermal:sulfur_ore',
            'thermal:deepslate_sulfur_ore',
            'thermal_and_space:glacio_sulfur_ore',
            'thermal_and_space:mars_sulfur_ore',
            'thermal_and_space:moon_sulfur_ore',
            'thermal_and_space:oil_venus_sand',
            'thermal_and_space:mars_apatite_ore',
            'thermal_and_space:mercury_apatite_ore',
            'thermal_and_space:moon_apatite_ore',
            'thermal_and_space:venus_apatite_ore',
            'thermal_and_space:mars_sapphire_ore',
            'thermal_and_space:mercury_sapphire_ore',
            'thermal_and_space:moon_sapphire_ore',
            'thermal_and_space:venus_sapphire_ore',
            'thermal_foundation:deepslate_sapphire_ore',
            'thermal_and_space:mars_cinnabar_ore',
            'thermal_and_space:moon_cinnabar_ore',
            'thermal:deepslate_ruby_ore',
            'thermal_and_space:glacio_ruby_ore',
            'thermal_and_space:mars_ruby_ore',
            'thermal_and_space:mercury_ruby_ore',
            'thermal_and_space:moon_ruby_ore',
            
            'mekanism:uranium_ore',
            'mekanismaaa:mars_uranium_ore',
            'mekanismaaa:venus_uranium_ore',
            'mekanismaaa:glacio_uranium_ore',
            'mekanismaaa:mercury_uranium_ore',

            'mekanism_extras:naquadah_ore',
            'mekanism_extras:end_naquadah_ore',
            'sgjourney:nether_naquadah_ore',
        ]
    })

    event.removeFeatureById("underground_ores", [
        "mekanism:ore_uranium_small",
        "mekanism:ore_uranium_buried",
        "superbwarfare:deepslate_scheelite_ore",
        "superbwarfare:scheelite_ore",
        "thermal:apatite_ore",
        "thermal:cinnabar_ore",
        "mekanism:ore_lead_normal",
        "mekanism:ore_lead_normal_retrogen",
        "silentcompat:voidmetal_ore",
        "silentcompat:solarmetal_ore"
    ])

    event.removeFeatureById("raw_generation", [
        "silentcompat:solarmetal_ore"
    ])

    event.removeFeatureById("sgjourney:cavum_tenebrae_shattered_crust", "underground_ores", [
        "minecraft:ore_tuff",
        "minecraft:ore_coal_upper",
        "minecraft:ore_coal_lower",
        "minecraft:ore_iron_upper",
        "minecraft:ore_iron_middle",
        "minecraft:ore_iron_small",
        "minecraft:ore_redstone",
        "minecraft:ore_redstone_lower",
        "minecraft:ore_lapis",
        "minecraft:ore_lapis_buried",
        "minecraft:ore_copper",
        "minecraft:disk_gravel",
        
    ])

    event.removeFeatureById("sgjourney:rima_shattered_plains", "underground_ores", [
        "minecraft:ore_coal_upper",
        "minecraft:ore_coal_lower",
        "minecraft:ore_iron_upper",
        "minecraft:ore_iron_middle",
        "minecraft:ore_iron_small",
        "minecraft:ore_redstone",
        "minecraft:ore_redstone_lower",
        "minecraft:ore_copper"
    ])
    event.removeFeatureById("sgjourney:rima_cracks", "underground_ores", [
        "minecraft:ore_coal_upper",
        "minecraft:ore_coal_lower",
        "minecraft:ore_iron_upper",
        "minecraft:ore_iron_middle",
        "minecraft:ore_iron_small",
        "minecraft:ore_redstone",
        "minecraft:ore_redstone_lower",
        "minecraft:ore_copper"
    ])

    event.removeFeatureById("sgjourney:lantean_deep_ocean", "underground_ores", [
        "minecraft:ore_coal_upper",
        "minecraft:ore_coal_lower",
        "minecraft:ore_iron_upper",
        "minecraft:ore_iron_middle",
        "minecraft:ore_iron_small",
        "minecraft:ore_gold",
        "minecraft:ore_gold_lower",
        "minecraft:ore_redstone",
        "minecraft:ore_redstone_lower",
        "minecraft:ore_diamond",
        "minecraft:ore_diamond_large",
        "minecraft:ore_diamond_buried",
        "minecraft:ore_copper",
    ])

    event.removeFeatureById("#minecraft:is_overworld", "underground_ores", [
        "silentcompat:voidmetal_ore_placed",
        "silentcompat:plasteel_ore_placed"
    ])
})
