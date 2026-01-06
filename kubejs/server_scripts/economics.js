// priority: 1

const PRICE_LIST = [
  ["copper", Item.of("thermal:copper_coin")],
  ["tin", Item.of("thermal:tin_coin")],
  ["nickel", Item.of("thermal:nickel_coin")],
  ["iron", Item.of("thermal:iron_coin")],
  ["lead", Item.of("thermal:lead_coin")],
  ["bronze", Item.of("thermal:bronze_coin")],
  ["constantan", Item.of("thermal:constantan_coin")],
  ["invar", Item.of("thermal:invar_coin")],
  ["silver", Item.of("thermal:silver_coin")],
  ["gold", Item.of("thermal:gold_coin")],
  ["electrum", Item.of("thermal:electrum_coin")],
  ["signalum", Item.of("thermal:signalum_coin")],
  ["lumium", Item.of("thermal:lumium_coin")],
  ["enderium", Item.of("thermal:enderium_coin")],
  ["prismalium", Item.of("thermalendergy:prismalium_coin")],
  ["netherite", Item.of("thermal:netherite_coin")],
  ["melodium", Item.of("thermalendergy:melodium_coin")],
  ["stellarium", Item.of("thermalendergy:stellarium_coin")]
]

ServerEvents.recipes(event => {
  event.remove({ input: 'thermal:press_coin_die' })
  event.remove({ type: 'pneumaticcraft:amadron' })

  for (let i = 1; i < PRICE_LIST.length; ++i) {
    console.log(PRICE_LIST[i][0])
    event.custom({
      "type": "thermal:press",
      "ingredients": [
        {
          "item": PRICE_LIST[i - 1][1].getId(),
          "count": 64
        },
        {
          "item": "thermal:press_coin_die"
        }
      ],
      "result": [
        {
          "item": PRICE_LIST[i][1].getId(),
          "count": 1
        }
      ],
      "energy": 100
    })
    event.custom({
      "type": "thermal:press",
      "ingredients": [
        {
          "item": PRICE_LIST[i][1].getId(),
          "count": 1
        },
        {
          "item": Item.of("thermal:press_unpacking_die").getId()
        }
      ],
      "result": [
        {
          "item": PRICE_LIST[i - 1][1].getId(),
          "count": 64
        }
      ],
      "energy": 100
    })

    create_amadron_recipe(event,
      Item.of(PRICE_LIST[i - 1][1].getId(), 64),
      Item.of(PRICE_LIST[i][1].getId()), true
    )

    event.shapeless(Item.of(PRICE_LIST[i - 1][1].getId(), 64), [Item.of(PRICE_LIST[i][1].getId(), 1)])
  }

  WEAPONS.forEach(weapon => {
    create_amadron_recipe(event, price_val(weapon.price_mod, weapon.price), Item.of(weapon.id), weapon.static_trade)
  })

  event.remove({ id: "orbital_railgun:orbital_railgun" })
  create_amadron_recipe(event, price_val(17, 64), Item.of("orbital_railgun:orbital_railgun"), true)

  create_amadron_recipe(event, price_val(17, 1), Item.of("superbwarfare:annihilator_blueprint"), false)
  create_amadron_recipe(event, price_val(16, 14), Item.of("superbwarfare:hpj_11_blueprint"), false)
  create_amadron_recipe(event, price_val(15, 21), Item.of("superbwarfare:bl_132_blueprint"), false)
  create_amadron_recipe(event, price_val(14, 34), Item.of("superbwarfare:mle_1934_blueprint"), false)
  create_amadron_recipe(event, price_val(13, 15), Item.of("superbwarfare:mk_42_blueprint"), false)

  // НОРМАЛЬНАЯ ТОРГОВЛЯ
  // t0
  create_amadron_recipe(event, Item.of("gunpowder"), price_val(0, 32), true)
  create_amadron_recipe(event, price_val(0, 48), Item.of("mekanism:dust_sulfur"), true)

  // t1
  create_amadron_recipe(event, Item.of("tnt"), price_val(1, 1), true)
  create_amadron_recipe(event, price_val(1, 2), Item.of("thermal:niter"), true)
  create_amadron_recipe(event, price_val(1, 40), Item.of("superbwarfare:shotgun_ammo"), true)

  // t2
  create_amadron_recipe(event, Item.of("superbwarfare:high_energy_explosives"), price_val(2, 8), true)
  create_amadron_recipe(event, Item.of("ballistix:repulsive", 1), price_val(2, 11), true)
  create_amadron_recipe(event, price_val(2, 8), Item.of("pneumaticcraft:oil_bucket"), true)

  // t3
  create_amadron_recipe(event, price_val(3, 1), Item.of("minecraft:tuff", 64), false)
  create_amadron_recipe(event, price_val(3, 1), Item.of("minecraft:andesite", 64), false)
  create_amadron_recipe(event, price_val(3, 1), Item.of("minecraft:diorite", 64), false)
  create_amadron_recipe(event, price_val(3, 1), Item.of("minecraft:granite", 64), false)
  create_amadron_recipe(event, price_val(3, 12), Item.of("undergarden:utheric_shard", 32), false)
  create_amadron_recipe(event, Item.of("superbwarfare:mortar_deployer"), price_val(3, 24), true)

  // t4
  create_amadron_recipe(event, price_val(4, 1), Item.of("pneumaticcraft:pcb_blueprint"), true)
  create_amadron_recipe(event, price_val(4, 2), Item.of("pneumaticcraft:assembly_program_laser"), true)
  create_amadron_recipe(event, price_val(4, 4), Item.of("pneumaticcraft:assembly_program_drill"), true)
  create_amadron_recipe(event, price_val(4, 5), Item.of("pneumaticcraft:assembly_program_drill_laser"), true)

  create_amadron_recipe(event, Item.of("superbwarfare:common_material_pack"), price_val(4, 1), true)
  create_amadron_recipe(event, Item.of("superbwarfare:handgun_ammo", 16), price_val(4, 1), true)
  create_amadron_recipe(event, Item.of("superbwarfare:mortar_shell", 1), price_val(4, 12), true)
  create_amadron_recipe(event, price_val(4, 1), Item.of("undergarden:depthrock", 32), true)

  // t6
  create_amadron_recipe(event, Item.of("ballistix:debilitation"), price_val(6, 1), true)
  create_amadron_recipe(event, Item.of("ballistix:chemical"), price_val(6, 16), true)
  create_amadron_recipe(event, price_val(6, 12), Item.of("appliedpneumatics:air_cell_shell"), true)

  // t7
  create_amadron_recipe(event, Item.of("superbwarfare:rare_material_pack"), price_val(7, 2), true)
  create_amadron_recipe(event, price_val(7, 1), Item.of("coal", 4), true)
  create_amadron_recipe(event, price_val(7, 1), Item.of("copper_ore", 8), true)
  create_amadron_recipe(event, price_val(7, 1), Item.of("emerald_ore", 8), true)
  create_amadron_recipe(event, price_val(7, 1), Item.of("diamond", 4), false)
  create_amadron_recipe(event, price_val(7, 1), Item.of("thermal:apatite", 16), false)

  // t8
  create_amadron_recipe(event, price_val(8, 1), Item.of("lava_bucket", 1), true)
  create_amadron_recipe(event, price_val(8, 1), Item.of("thermal:ruby", 16), false)
  create_amadron_recipe(event, price_val(8, 1), Item.of("thermal:sapphire", 16), false)

  // t9
  create_amadron_recipe(event, price_val(9, 1), Item.of("undergarden:depthrock_cloggrum_ore", 32), true)
  create_amadron_recipe(event, price_val(9, 2), Item.of("undergarden:depthrock_regalium_ore", 32), false)
  create_amadron_recipe(event, price_val(9, 2), Item.of("undergarden:shiverstone_froststeel_ore", 32), false)

  // t10
  create_amadron_recipe(event, Item.of("superbwarfare:epic_material_pack"), price_val(10, 1), true)

  // t12
  create_amadron_recipe(event, price_val(12, 1), Item.of("redstone_ore"), true)
  create_amadron_recipe(event, price_val(12, 7), Item.of("ad_astra:moon_desh_ore"), true)
  create_amadron_recipe(event, price_val(12, 40), Item.of("ad_astra:mars_ostrum_ore"), true)

  // t14
  create_amadron_recipe(event, price_val(14, 1), Item.of("mekanism:deepslate_uranium_ore"), true)
  create_amadron_recipe(event, Item.of("superbwarfare:legendary_material_pack"), price_val(14, 1), true)
  create_amadron_recipe(event, Item.of("ballistix:nuclear"), price_val(14, 16), true)

  // t15
  create_amadron_recipe(event, Item.of("ballistix:antimatter"), price_val(15, 20), true)
  create_amadron_recipe(event, price_val(15, 2), Item.of("ad_astra:venus_calorite_ore"), true)

  // t16
  create_amadron_recipe(event, price_val(16, 1), Item.of("silentcompat:voidmetal_ore"), true)
  create_amadron_recipe(event, Item.of("ballistix:largeantimatter"), price_val(16, 3), true)
  create_amadron_recipe(event, Item.of("ballistix:darkmatter"), price_val(16, 3), true)
  create_amadron_recipe(event, price_val(16, 3), Item.of(MATERIALS.NAQUADAH.raw), true)
  create_amadron_recipe(event, price_val(16, 12), Item.of("sgjourney:pure_naquadah"), true)

})

function price_val(power, amount) {
  return Item.of(PRICE_LIST[power][1].getId(), amount)
}

function create_amadron_recipe(event, price, output_item, static_trade) {
  const src_id = price.getId().split(":")[1]
  const output_id = output_item.getId().split(":")[1]
  const id = "pneumaticcraft:amadron/" + src_id + "_to_" + output_id

  event.custom({
    "type": "pneumaticcraft:amadron",
    "id": id,
    "input": {
      "type": "ITEM",
      "amount": price.getCount(),
      "id": price.getId()
    },
    "level": 0,
    "output": {
      "type": "ITEM",
      "amount": output_item.getCount(),
      "id": output_item.getId()
    },
    "static": static_trade
  })
}

MoreJSEvents.playerStartTrading((event) => {
  event.forEachOffers((o, i) => {
    if (o.output.id.toString().startsWith('superb')) {
      o.disabled = true;
    }
    else if (o.output.id.toString().startsWith('computercraft')) {
      o.disabled = true;
    }
    else if (o.output.id.toString().endsWith('circuit_board')) {
      o.disabled = true;
    }
    else if (o.output.id.toString().endsWith('pcb_blueprint')) {
      o.disabled = true;
    }
  });
});
