// priority: 0

ServerEvents.recipes(event => {
    event.replaceInput({ id: "mekanismgenerators:generator/heat" }, MATERIALS.OSMIUM.ingot, "thermal:machine_frame")
    event.replaceInput({ id: "mekanismgenerators:generator/heat" }, MATERIALS.COPPER.ingot, MATERIALS.BRONZE.gear)
    event.replaceInput({ id: "mekanismgenerators:generator/wind" }, MATERIALS.OSMIUM.ingot, "pneumaticcraft:turbine_blade")

})