// priority: 0


ColdSweatEvents.registries(event => {
   event.addInsulator(insulator =>
      insulator.items("alexsmobs:bison_fur")
         // Insulation that the item provides (cold, heat)
         .insulation(1, 2)
         // Insulation type (item, armor, or curio)
         .slot("item")
         // operation types (1.20-): add, multiply_base, multiply_total
         // operation types (1.21+): add_value, add_multiplied_base, add_multipled_total
         .fillSlots(false)
         .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items("alexsmobs:mimicream")
         .adaptiveInsulation(4, 0.005)
         // Insulation type (item, armor, or curio)
         .slot("item")
         .fillSlots(false)
         .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items("alexsmobs:bear_fur")
         // Insulation that the item provides (cold, heat)
         .insulation(4, 0)
         // Insulation type (item, armor, or curio)
         .slot("item")
         .fillSlots(false)
         .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items("macabre:limb_splitter_fur")
         // Insulation that the item provides (cold, heat)
         .insulation(0, 4)
         // Insulation type (item, armor, or curio)
         .slot("item")
         .fillSlots(false)
         .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items("netherdepthsupgrade:soul_sucker_leather")
         // Insulation that the item provides (cold, heat)
         .insulation(0, 2)
         // Insulation type (item, armor, or curio)
         .slot("item")
         .fillSlots(false)
         .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items("biomancy:living_flesh")
         // Insulation that the item provides (cold, heat)
         .insulation(2, 2)
         // Insulation type (item, armor, or curio)
         .slot("item")
         .fillSlots(false)
         .hideIfUnmet(false))
   event.addInsulator(insulator =>
      insulator.items("clanginghowl:chunk_of_technoflesh")
         // Insulation that the item provides (cold, heat)
         .insulation(2, 2)
         // Insulation type (item, armor, or curio)
         .slot("item")
         .fillSlots(false)
         .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items("deeperdarker:resonarium_plate")
         // Insulation that the item provides (cold, heat)
         .adaptiveInsulation(6, 0.005)
         // Insulation type (item, armor, or curio)
         .slot("item")
         .fillSlots(false)
         .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items(MATERIALS.FROSTSTEEL.ingot)
         .slot("item")
         .insulation(0, 6)
         .fillSlots(false)
         .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items(MATERIALS.STELLARIUM.plate)
         .slot("item")
         .insulation(3, 1)
         .fillSlots(false)
         .hideIfUnmet(false))

   event.addBlockTemperature(block =>
      block.blocks("burnt:sulphur_block")
         .units("c")
         .maxTemperature(35)
         .minTemperature(0)
         .maxEffect(20)
         .range(5),
      (level, entity, state, pos, distance) => {
         return 15 / distance;
      }
   )

   event.addBlockTemperature(block =>
      block.blocks("farmersdelight:stove")
         .units("c")
         .maxTemperature(35)
         .minTemperature(0)
         .maxEffect(25)
         .range(7),
      (level, entity, state, pos, distance) => {
         return 20 / distance;
      }
   )
})