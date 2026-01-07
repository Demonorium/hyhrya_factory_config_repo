// priority: 0

ServerEvents.recipes(event => {
    console.log("hnn recipes loading...")

    event.replaceInput({id: "hostilenetworks:deep_learner"}, "#forge:glass_panes", "mekanism:teleportation_core")
    event.replaceInput({id: "hostilenetworks:deep_learner"}, "repeater", "mekanism:ultimate_control_circuit")
    event.replaceInput({id: "hostilenetworks:deep_learner"}, "redstone", "mekanism:seismic_reader")
    event.replaceInput({id: "hostilenetworks:sim_chamber"}, "#forge:glass_panes", "mekanism:teleportation_core")
    event.replaceInput({id: "hostilenetworks:sim_chamber"}, "obsidian", "thermal:machine_frame")
    event.replaceInput({id: "hostilenetworks:loot_fabricator"}, "obsidian", "mekanism:teleportation_core")
    event.replaceInput({id: "hostilenetworks:loot_fabricator"}, "diamon", "mekanism:ultimate_control_circuit")
    event.replaceInput({id: "hostilenetworks:loot_fabricator"}, "comparator", "thermal:machine_frame")
    event.replaceInput({id: "hostilenetworks:prediction_matrix"}, "iron_ingot", 'biomancy:stone_powder')
    event.replaceInput({id: "hostilenetworks:prediction_matrix"}, "clay_ball", 'biomancy:gem_fragments')
    event.replaceInput({id: "hostilenetworks:prediction_matrix"}, "gold_ingot", 'biomancy:mineral_fragment')
    event.replaceInput({id: "hostilenetworks:prediction_matrix"}, "glass_pane", 'ae2:certus_quartz_crystal')


    event.replaceInput({id: "hostilenetworks:framework"}, "smooth_stone", 'mekanism:ultimate_control_circuit')
    event.replaceInput({id: "hostilenetworks:framework"}, "gold_ingot", 'ae2:crafting_pattern')
    event.replaceInput({id: "hostilenetworks:framework"}, "redstone", 'ae2:spatial_cell_component_2')
    event.replaceInput({id: "hostilenetworks:framework"}, "clay_ball", MATERIALS.ALUMINUM.plate)
    
    console.log("hnn recipes loaded")

})