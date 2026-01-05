// priority: 0

ColdSweatEvents.registries(event =>
{
   event.addInsulator(insulator =>
      insulator.items("alexsmobs:bison_fur")
               // Insulation that the item provides (cold, heat)
               .insulation(1, 2)
               // Insulation type (item, armor, or curio)
               .slot("item")
               // operation types (1.20-): add, multiply_base, multiply_total
               // operation types (1.21+): add_value, add_multiplied_base, add_multipled_total
               .attribute("minecraft:generic.armor", 1.0, "addition")
               .attribute("superbwarfare:bullet_resistance", 0.01, "addition")
               .hideIfUnmet(false))

   event.addInsulator(insulator =>
        insulator.items("alexsmobs:mimicream")
                 .adaptiveInsulation(4, 0.005)
                 // Insulation type (item, armor, or curio)
                 .slot("item")
                 .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items("alexsmobs:bear_fur")
               // Insulation that the item provides (cold, heat)
               .insulation(4, 0)
               // Insulation type (item, armor, or curio)
               .slot("item")
               .attribute("minecraft:generic.armor", 1.0, "addition")
               .attribute("superbwarfare:bullet_resistance", 0.01, "addition")
               .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items("macabre:limb_splitter_fur")
               // Insulation that the item provides (cold, heat)
               .insulation(0, 4)
               // Insulation type (item, armor, or curio)
               .slot("item")
               .attribute("minecraft:generic.armor", 1.0, "addition")
               .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items("netherdepthsupgrade:soul_sucker_leather")
               // Insulation that the item provides (cold, heat)
               .insulation(0, 2)
               // Insulation type (item, armor, or curio)
               .slot("item")
               .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items("biomancy:living_flesh")
               // Insulation that the item provides (cold, heat)
               .insulation(2, 2)
               // Insulation type (item, armor, or curio)
               .slot("item")
               .attribute("minecraft:generic.max_health", 2.0, "addition")
               .attribute("puffish_attributes:player.healing", 0.25, "addition")
               .hideIfUnmet(false))
   event.addInsulator(insulator =>
      insulator.items("clanginghowl:chunk_of_technoflesh")
               // Insulation that the item provides (cold, heat)
               .insulation(2, 2)
               // Insulation type (item, armor, or curio)
               .slot("item")
               .attribute("minecraft:generic.armor", 1.0, "addition")
               .attribute("minecraft:generic.max_health", 3.0, "addition")
               .attribute("puffish_attributes:player.healing", 0.4, "addition")
               .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items("deeperdarker:resonarium_plate")
               // Insulation that the item provides (cold, heat)
               .adaptiveInsulation(6, 0.005)
               // Insulation type (item, armor, or curio)
               .slot("item")
               .attribute("minecraft:generic.armor", 2.0, "addition")
               .attribute("minecraft:generic.armor_toughness", 1.0, "addition")
               .hideIfUnmet(false))
   
   event.addInsulator(insulator =>
      insulator.items("biomancy:tough_fibers")
               .slot("item")
               .attribute("minecraft:generic.armor_toughness", 1.0, "addition")
               .attribute("superbwarfare:bullet_resistance", 0.02, "addition")
               .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items(MATERIALS.IRON.plate)
               .slot("item")
               .attribute("minecraft:generic.armor", 1.0, "addition")
               .attribute("minecraft:generic.movement_speed", -0.01, "multiply_total")
               .attribute("superbwarfare:bullet_resistance", 0.01, "addition")
               .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items(MATERIALS.ALUMINUM.plate)
               .slot("item")
               .attribute("minecraft:generic.armor", 1.0, "addition")
               .hideIfUnmet(false))
      
   event.addInsulator(insulator =>
      insulator.items(MATERIALS.TITANIUM.plate)
               .slot("item")
               .attribute("minecraft:generic.armor", 2.0, "addition")
               .attribute("minecraft:generic.armor_toughness", 1.0, "addition")
               .attribute("minecraft:generic.movement_speed", -0.03, "multiply_total")
               .attribute("superbwarfare:bullet_resistance", 0.02, "addition")
               .hideIfUnmet(false))      

   event.addInsulator(insulator =>
      insulator.items(MATERIALS.FROSTSTEEL.ingot)
               .slot("item")
               .insulation(0, 5)
               .attribute("minecraft:generic.armor", 1.0, "addition")
               .attribute("minecraft:generic.movement_speed", -0.02, "multiply_total")
               .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items(MATERIALS.TUNGSTEN.plate)
               .slot("item")
               .attribute("minecraft:generic.armor", 3.0, "addition")
               .attribute("minecraft:generic.armor_toughness", 2.0, "addition")
               .attribute("minecraft:generic.movement_speed", -0.03, "multiply_total")
               .attribute("superbwarfare:bullet_resistance", 0.03, "addition")
               .hideIfUnmet(false))
   
   event.addInsulator(insulator =>
      insulator.items(MATERIALS.NETHERITE.plate)
            .slot("item")
            .attribute("minecraft:generic.armor", 2.0, "addition")
            .attribute("minecraft:generic.armor_toughness", 2.0, "addition")
            .attribute("minecraft:generic.movement_speed", -0.05, "multiply_total")
            .attribute("superbwarfare:bullet_resistance", 0.03, "addition")
            .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items(MATERIALS.ENDERIUM.plate)
            .slot("item")
            .attribute("minecraft:generic.armor", 2.0, "addition")
            .attribute("minecraft:generic.armor_toughness", 1.0, "addition")
            .attribute("superbwarfare:bullet_resistance", 0.02, "addition")
            .hideIfUnmet(false))
   
   event.addInsulator(insulator =>
      insulator.items(MATERIALS.STELLARIUM.plate)
            .slot("item")
            .insulation(3, 1)
            .attribute("minecraft:generic.armor", 3.0, "addition")
            .attribute("minecraft:generic.armor_toughness", 2.0, "addition")
            .attribute("superbwarfare:bullet_resistance", 0.03, "addition")
            .hideIfUnmet(false))

   event.addInsulator(insulator =>
      insulator.items('pncepcb:flexible_finished_pcb')
               .slot("item")
               .attribute("obscure_api:critical_hit", 0.05, "addition")
               .attribute("minecraft:generic.armor", -2.0, "addition")
               .hideIfUnmet(false))
   event.addInsulator(insulator =>
      insulator.items('pncepcb:bio_compatible_finished_pcb')
               .slot("item")
               .attribute("obscure_api:critical_hit", 0.05, "addition")
               .attribute("minecraft:generic.movement_speed", 0.02, "addition")
               .attribute("minecraft:generic.armor", -1.0, "addition")
               .hideIfUnmet(false))

   event.addBlockTemperature(block => 
      block.blocks("burnt:sulphur_block")
         .units("c")
         .maxTemperature(40)
         .minTemperature(0)
         .maxEffect(35)
         .range(5),
         (level, entity, state, pos, distance) => {
            return 10;
         }
   )

   event.addBlockTemperature(block => 
      block.blocks(
         "mekanismgenerators:heat_generator",
      "mekanism:resistive_heater",
      "mekanism:fuelfood_heater"
   )
         .units("c")
         .maxTemperature(300)
         .minTemperature(0)
         .maxEffect(300)
         .range(5),
         (level, entity, state, pos, distance) => {

            const bentity = level.getBlockEntity().orElse(null)
            if (bentity == null) {
               return 0
            }
            
            console.log(bentity)
            return 10;
         }
   )
})