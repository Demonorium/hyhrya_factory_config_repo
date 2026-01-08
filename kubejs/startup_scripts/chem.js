StartupEvents.registry("item", event => {
    event.create('absorbent').food(food => {
        food.hunger(0)
        food.saturation(0)
        food.alwaysEdible(true)
        food.fastToEat(true)
        food.eaten(event => {
            const player = event.getPlayer()
            if (player != null) {
                player.removeAllEffects()
            }
        })
    }).displayName('Активированный абсорбент')

})

ItemEvents.modification(event => {
  event.modify('chemlib:uranium_hexafluoride', mod => {
    mod.setFoodProperties(food => {
      food.alwaysEdible()
      food.fastToEat()
      food.meat(false)
      food.hunger(40)
      food.saturation(2)
      food.effect("voltaic:radiation", 600*20, 5, 1)
    })
  })
})

MoreJSEvents.registerPotionBrewing(event => {
  event.addPotionBrewing(
    Item.of('chemlib:chitin_dust'),
    "water",
    "awkward"
  )
  
  event.addPotionBrewing(
    Item.of('chemlib:potassium_cyanide_dust'),
    "awkward",
    "long_poison"
  )

  event.addPotionBrewing(
    Item.of('chemlib:hydrogen_cyanide'),
    "awkward",
    "strong_poison"
  )

  event.addPotionBrewing(
    Item.of('ballistix:dustpoison'),
    "awkward",
    "strong_harming"
  )

  event.addPotionBrewing(
    Item.of('chemlib:acetylsalicylic_acid_dust'),
    "awkward",
    "strong_healing"
  )

  event.addPotionBrewing(
    Item.of('opposing_force:raincap'),
    "awkward",
    "invisibility"
  )
  event.addPotionBrewing(
    Item.of('opposing_force:cap_of_eye'),
    "awkward",
    "long_night_vision"
  )
  event.addPotionBrewing(
    Item.of('opposing_force:cave_patty'),
    "awkward",
    "night_vision"
  )
  event.addPotionBrewing(
    Item.of('chemlib:hydroxylapatite'),
    "awkward",
    "regeneration"
  )
  event.addPotionBrewing(
    Item.of('chemlib:zirconium_dust'),
    "awkward",
    "regeneration"
  )

  event.addPotionBrewing(
    Item.of('chemlib:lithium_chloride_dust'),
    "awkward",
    "fnm_recrafted:nauseapotion"
  )

  event.addPotionBrewing(
    Item.of('chemlib:zinc_sulfate_dust'),
    "awkward",
    "fnm_recrafted:nauseapotion"
  )
  event.addPotionBrewing(
    Item.of('chemlib:selenium_dust'),
    "awkward",
    "fnm_recrafted:nauseapotion"
  )
  event.addPotionBrewing(
    Item.of('chemlib:glutaric_acid_dust'),
    "awkward",
    "slowness"
  )
  event.addPotionBrewing(
    Item.of('chemlib:mercury'),
    "awkward",
    "slowness"
  )
  event.addPotionBrewing(
    Item.of('chemlib:zinc_sulfate_dust'),
    "slowness",
    "miners_delight:mining_fatigue"
  )

  event.addPotionBrewing(
    Item.of('chemlib:dysprosium'),
    "awkward",
    "slowness"
  )
  event.addPotionBrewing(
    Item.of('chemlib:palladium'),
    "awkward",
    "minecraft:swiftness"
  )
  event.addPotionBrewing(
    Item.of('chemlib:caffeine'),
    "awkward",
    "alexsmobs:speed_iii"
  )
  event.addCustomBrewing(
    Item.of('chemlib:cesium_chloride_dust'),
    Item.of('honey_bottle'),
    Item.of('bio_delight:bottled_bone_marrow')
  )
  event.addCustomBrewing(
    Item.of('chemlib:lithium_chloride_dust'),
    Item.of('honey_bottle'),
    Item.of('bio_delight:bottled_bone_marrow')
  )
  event.addPotionBrewing(
    Item.of('chemlib:ammonium_nitrate_dust'),
    'awkward',
    'cold_sweat:ice_resistance'
  )

})