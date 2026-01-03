// priority: 0

function crushing(event, from, to) {
  event.custom({
    "type": "mekanism:crushing",
    "input": {
      "ingredient": {
        "item": from.getId()
      }
    },
    "output": {
      "item": to.getId(),
      "count": to.getCount()
    }
  })

}

function compacting(event, from, to) {
  event.custom(
    {
      "type": "mekanism:compressing",
      "chemicalInput": {
        "amount": 1,
        "gas": "mekanism:osmium"
      },
      "itemInput": {
        "ingredient": {
          "item": from.getId()
        }
      },
      "output": {
        "item": to.getId(),
        "count": to.getCount()
      }
    }
  )
}

ServerEvents.recipes(event => {
  console.log("chem recipes loading...")
  event.remove({id: "mekanismelements:adsorption/nitrogen"})
  event.remove({mod: 'chemlib'})

  event.remove({id: 'mekanism:infusion_conversion/carbon/from_charcoal'})
  event.remove({id: 'mekanism:infusion_conversion/carbon/from_charcoal_block'})
  event.remove({id: 'mekanism:infusion_conversion/carbon/from_coal'})
  event.remove({id: 'mekanism:infusion_conversion/carbon/from_coal_block'})
  event.remove({id: 'mekanism_hack:separator/separator_i_chemlib_water_o_chemlib_hydrogen_o_chemlib_oxygen'})

  event.remove({id: 'thermal:machines/pulverizer/pulverizer_andesite'})
  event.remove({id: 'thermal:machines/pulverizer/pulverizer_diorite'})
  event.remove({id: 'thermal:machines/pulverizer/pulverizer_granite'})
  event.remove({id: 'ad_astra_giselle_addon:compat/thermal/pulverizer/to_venus_sand'})
  event.remove({id: 'mekanism:processing/uranium/yellow_cake_uranium'})
  event.remove({id: 'mekanism:processing/uranium/sulfuric_acid'})
  event.remove({id: 'mekanism_extras:processing/naquadah/silicon_tetrafluoride'})
  event.remove({id: 'biomancy:decomposing/echo_shard'})

  event.remove({id: 'thermal:smelting/cured_rubber_from_smelting'})
  event.remove({id: 'thermal:rubber_from_dandelion'})
  event.remove({id: 'thermal:rubber_from_vine'})


  console.log("chem recipes injections...")
  CUSTOM_RECIPES_FIX_INJECTIONS.forEach(element => {
    console.log("recipes loading: " + JSON.stringify(element))
    event.custom(element)
  })  
  console.log("chem recipes purification...")
  CUSTOM_RECIPES_FIX_PURIFICATION.forEach(element => {
    console.log("recipes loading: " + JSON.stringify(element))
    event.custom(element)
  })

  console.log("chem recipes loaded...")
})


