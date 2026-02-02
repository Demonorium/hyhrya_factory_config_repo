

Ponder.registry(event => {
    event.create([
        "pneumaticcraft:refinery_output",
        "pneumaticcraft:refinery",
    ])
    .scene(
        "thermal_evaporation",
        "Очистительный завод",
        "kubejs:oil",
        (scene, util) => {
            scene.showStructure()
        }
    )
})