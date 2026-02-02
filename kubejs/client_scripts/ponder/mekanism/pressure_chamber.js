Ponder.registry(event => {
    event.create([
        "pneumaticcraft:air_compressor",
        "pneumaticcraft:pressure_chamber_wall",
        "pneumaticcraft:pressure_chamber_interface",
        "pneumaticcraft:pressure_chamber_valve",
        "pneumaticcraft:safety_tube_module",
    ])
    .scene(
        "thermal_evaporation",
        "Давление и барокамера",
        "kubejs:pressure_chamber",
        (scene, util) => {
            scene.showStructure();
        }
    )
})