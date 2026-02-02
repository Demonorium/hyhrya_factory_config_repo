Ponder.tags((event) => {
    event.createTag("kubejs:thermal_evaporation", "mekanism:thermal_evaporation_controller", "Тепловой испаритель", "Производим рассол, аккумуляторы и удобрения!", [
        "mekanism:thermal_evaporation_controller",
        "mekanism:thermal_evaporation_valve",
        "mekanism:thermal_evaporation_block",
    ]);


    event.createTag("kubejs:oil_production", "pneumaticcraft:refinery", "Нефтеперарботка", "Жидкая демократия!", [
        "pneumaticcraft:refinery_output",
        "pneumaticcraft:refinery",
    ]);

    event.createTag("kubejs:primitive_energy_production", "pneumaticcraft:pressure_chamber_interface", "Барокамера", "Газовые технологии!", [
        "pneumaticcraft:air_compressor",
        "pneumaticcraft:pressure_chamber_wall",
        "pneumaticcraft:pressure_chamber_interface",
        "pneumaticcraft:pressure_chamber_valve",
        "pneumaticcraft:safety_tube_module"
    ]);

})