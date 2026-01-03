// priority: 0

ServerEvents.recipes(event => {
    event.replaceInput({ id: "mekanismgenerators:generator/heat" }, MATERIALS.OSMIUM.ingot, "mekanism:steel_casing")

})