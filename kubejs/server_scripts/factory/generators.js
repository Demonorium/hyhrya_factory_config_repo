// priority: 0

ServerEvents.recipes(event => {
    event.replaceInput({ id: "mekanismgenerators:generator/heat" }, MATERIALS.OSMIUM.ingot, "mekanism:steel_casing")
    event.replaceInput({ id: "mekanismgenerators:generator/wind" }, MATERIALS.OSMIUM.ingot, "pneumaticcraft:turbine_blade")

})