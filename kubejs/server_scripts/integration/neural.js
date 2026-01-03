// priority: 0

ServerEvents.recipes(event => {
    console.log("hnn recipes loading...")

    event.replaceInput({id: "hostilenetworks:deep_learner"}, "#forge:glass_panes", "mekanism:teleportation_core")
    event.replaceInput({id: "hostilenetworks:sim_chamber"}, "#forge:glass_panes", "mekanism:teleportation_core")
    event.replaceInput({id: "hostilenetworks:loot_fabricator"}, "obsidian", "mekanism:teleportation_core")
    event.replaceInput({id: "hostilenetworks:loot_fabricator"}, "diamon", "mekanism:ultimate_control_circuit")
    event.replaceInput({id: "hostilenetworks:loot_fabricator"}, "comparator", "thermal:machine_frame")
    event.replaceInput({id: "hostilenetworks:prediction_matrix"}, "iron", 'biomancy:stone_powder')
    event.replaceInput({id: "hostilenetworks:prediction_matrix"}, "clay_ball", 'biomancy:gem_fragments')
    event.replaceInput({id: "hostilenetworks:prediction_matrix"}, "gold", 'biomancy:mineral_fragment')
    event.replaceInput({id: "hostilenetworks:prediction_matrix"}, "glass_pane", 'ae2:certus_quartz_crystal')

    console.log("hnn recipes loaded")

})