// priority: 0

ServerEvents.recipes(event => {
    event.replaceInput({id: 'mekanism_weaponry:fire_rate_chip_1'}, 'green_dye', 'pneumaticcraft:unassembled_pcb')
    event.replaceInput({id: 'mekanism_weaponry:energy_usage_chip_1'}, 'green_dye', 'pneumaticcraft:unassembled_pcb')
    event.replaceInput({id: 'mekanism_weaponry:heat_per_shot_chip_1'}, 'green_dye', 'pneumaticcraft:unassembled_pcb')

    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "air_use_multiplier": 3.0,
        "exothermic": false,
        "fluid_input": {
            "type": "pneumaticcraft:fluid",
            "amount": 1000,
            "fluid": "mekanism:chlorine"
        },
        "item_input": {
            "item": MATERIALS.PLASTIC.ingot
        },
        "item_output": {
            "item": "mekanism:hdpe_pellet"
        },
        "pressure": 4.0,
        "speed": 0.8,
        "temperature": {
            "min_temp": 573
        }
    })

    event.replaceInput({ id: 'mekanismgenerators:turbine/blade' }, 'mekanism:alloy_infused', 'mekanism_weaponry:steel_rod')
    event.replaceInput({ id: 'mekanismgenerators:turbine/blade' }, 'mekanism:ingot_steel', 'pneumaticcraft:turbine_blade')

    event.remove({ id: "mekanism:electrolytic_core" })
    event.shaped(
        Item.of('mekanism:electrolytic_core', 1),
        [
            'ADA',
            'BEC',
            'A A'
        ],
        {
            A: Item.of("mekanism:alloy_infused"),
            B: Item.of(MATERIALS.COPPER.plate),
            C: Item.of(MATERIALS.TIN.plate),
            D: Item.of("mekanism:basic_control_circuit"),
            E: Item.of("thermal:rf_coil")
        }
    )
    event.shaped(
        Item.of('mekanism:electrolytic_core', 2),
        [
            'A A',
            'BEB',
            'A A'
        ],
        {
            A: Item.of("mekanism:alloy_infused"),
            B: Item.of(MATERIALS.RUTHENIUM.nugget),
            E: Item.of("thermal:rf_coil")
        }
    )


    event.remove({ id: 'superbwarfare:motor' })
    event.shaped(
        Item.of('superbwarfare:motor', 1),
        [
            ' D ',
            'BAB',
            'ECE'
        ],
        {
            A: Item.of("dysonsphere:coil_copper"),
            B: Item.of(MATERIALS.CONSTANTAN.ingot),
            C: Item.of("mekanism:advanced_control_circuit"),
            D: Item.of(MATERIALS.STEEL.ingot),
            E: Item.of('pneumaticcraft:pneumatic_cylinder')
        }
    )
    event.shaped(
        Item.of('superbwarfare:motor', 2),
        [
            ' D ',
            'BAB',
            'ECE'
        ],
        {
            A: Item.of("dysonsphere:coil_copper"),
            B: Item.of(MATERIALS.NEODYMIUM.ingot),
            C: Item.of("mekanism:advanced_control_circuit"),
            D: Item.of(MATERIALS.STEEL.ingot),
            E: Item.of('pneumaticcraft:pneumatic_cylinder')
        }
    )
    event.shaped(
        Item.of('superbwarfare:motor', 1),
        [
            ' D ',
            'BAB',
            'ECE'
        ],
        {
            A: Item.of("dysonsphere:coil_copper"),
            B: Item.of(MATERIALS.MIDNIGHT_IRON.ingot),
            C: Item.of("mekanism:advanced_control_circuit"),
            D: Item.of(MATERIALS.STEEL.ingot),
            E: Item.of('pneumaticcraft:pneumatic_cylinder')
        }
    )

    event.remove({ id: 'superbwarfare:large_motor' })
    event.shaped(
        Item.of('superbwarfare:large_motor', 1),
        [
            ' D ',
            'BDB',
            'BCB'
        ],
        {
            B: Item.of('superbwarfare:motor'),
            C: Item.of("mekanism:ultimate_control_circuit"),
            D: Item.of(MATERIALS.TUNGSTEN.ingot),
        }
    )

    event.remove({ id: "mekanism:teleportation_core" })
    event.shaped(
        Item.of('mekanism:teleportation_core', 1),
        [
            'CEC',
            'BAB',
            'CDC'
        ],
        {
            A: Item.of("mekanism_extras:absolute_control_circuit"),
            B: Item.of("ender_pearl"),
            C: Item.of(MATERIALS.STRONTIUM.plate),
            D: Item.of("ae2:formation_core"),
            E: Item.of("ae2:annihilation_core"),
        }
    )

    event.remove({ id: 'superbwarfare:cell' })
    event.remove({ id: 'superbwarfare:battery' })
    event.remove({ id: 'superbwarfare:battery_from_cell' })
    event.remove({ id: 'superbwarfare:small_battery_pack_assembling' })
    event.remove({ id: 'superbwarfare:small_battery_pack_from_battery' })
    event.remove({ id: 'superbwarfare:medium_battery_pack_assembling' })
    event.remove({ id: 'superbwarfare:medium_battery_pack' })
    event.remove({ id: 'superbwarfare:large_battery_pack' })
    event.remove({ id: 'superbwarfare:large_battery_pack_assembling' })
    event.remove({ id: 'mekanism:energy_tablet' })

    event.remove({ id: "mekanism:transmitter/universal_cable/basic" })
    event.shaped(
        Item.of('mekanism:basic_universal_cable', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: Item.of("copper_ingot"),
            B: Item.of('thermal:rf_coil')
        }
    )
    event.remove({ id: "mekanism:transmitter/pressurized_tube/basic" })
    event.shaped(
        Item.of('mekanism:basic_pressurized_tube', 8),
        [
            'BBB',
            'BAB',
            'BBB'
        ],
        {
            A: "#minecraft:wool",
            B: Item.of('mekanism:basic_mechanical_pipe')
        }
    )
    
    event.remove({ id: "mekanism:transmitter/logistical_transporter/basic" })
    event.shaped(
        Item.of('mekanism:basic_logistical_transporter', 8),
        [
            ' C ',
            'B B',
            ' C '
        ],
        {
            B: MATERIALS.STEEL.gear,
            C: MATERIALS.STEEL.ingot
        }
    )

    event.remove({ id: "mekanism:transmitter/mechanical_pipe/basic"})
    event.shaped(
        Item.of('mekanism:basic_mechanical_pipe', 8),
        [
            'ACA',
            'B B',
            'ACA'
        ],
        {
            A: "#forge:glass/silica",
            B: MATERIALS.STEEL.gear,
            C: MATERIALS.STEEL.ingot
        }
    )

    function energy_cell(level, battery, sides, corners) {

        let id = ''
        let prev_id = Item.of('mekanism:steel_casing')
        const meka_level = meka_levels.findIndex(e => e === level)
        if (meka_level > -1) {
            id = Item.of('mekanism:' + level + '_energy_cube')
            event.remove('mekanism:energy_cube/' + level)
            if (meka_level > 0) {
                prev_id = Item.of('mekanism:' + meka_levels[meka_level - 1] + '_energy_cube')
            }
        } else {
            meka_level = mekanism_extras_levels.findIndex(e => e === level)
            id = Item.of('mekanism_extras:' + level + '_energy_cube')
            event.remove('mekanism_extras:energy_cube/' + level)
            if (meka_level > 0) {
                prev_id = Item.of('mekanism_extras:' + mekanism_extras_levels[meka_level - 1] + '_energy_cube')
            } else {
                prev_id = Item.of('mekanism:ultimate_energy_cube')
            }
        }

        event.shaped(
            id,
            [
                'ABA',
                'CDC',
                'ABA'
            ],
            {
                A: corners,
                B: battery,
                C: sides,
                D: prev_id
            }
        )
    }

    energy_cell('basic', 'superbwarfare:small_battery_pack', Item.of('iron_ingot'), Item.of('redstone'))
    energy_cell('advanced', 'superbwarfare:small_battery_pack', Item.of('mekanism:ingot_osmium'), Item.of('mekanism:alloy_infused'))
    energy_cell('elite', 'superbwarfare:medium_battery_pack', Item.of('gold_ingot'), Item.of('mekanism:alloy_reinforced'))
    energy_cell('ultimate', 'superbwarfare:medium_battery_pack', Item.of('diamond'), Item.of('mekanism:alloy_atomic'))
    energy_cell('absolute', 'superbwarfare:large_battery_pack', Item.of('ad_astra:etrionic_core'), Item.of('mekanism_extras:alloy_radiance'))
    energy_cell('supreme', 'superbwarfare:large_battery_pack', Item.of('netherite_ingot'), Item.of('mekanism_extras:alloy_thermonuclear'))
    energy_cell('cosmic', 'superbwarfare:large_battery_pack', Item.of('mekanism:ingot_refined_obsidian'), Item.of('mekanism_extras:alloy_shining'))
    energy_cell('infinite', 'superbwarfare:large_battery_pack', Item.of('mekanism:pellet_plutonium'), Item.of('mekanism_extras:alloy_spectrum'))

    event.shaped(
        Item.of('mekanism:energy_tablet', 2),
        [
            'A A',
            'DBD',
            'DBD'
        ],
        {
            A: Item.of("mekanism:alloy_infused"),
            B: Item.of(MATERIALS.ETRIUM.nugget),
            D: Item.of(MATERIALS.SIGNALUM.plate)
        }
    )

    event.shaped(
        Item.of('superbwarfare:small_battery_pack', 1),
        [
            'CAC',
            'CBC'
        ],
        {
            A: Item.of("mekanism:alloy_infused"),
            B: Item.of('mekanism:advanced_control_circuit'),
            C: Item.of("superbwarfare:battery")
        }
    )
    event.shaped(
        Item.of('superbwarfare:small_battery_pack', 4),
        [
            'ABA',
            'DCD',
            'DED'
        ],
        {
            A: Item.of("mekanism:alloy_infused"),
            B: Item.of('mekanism:advanced_control_circuit'),
            D: Item.of(MATERIALS.PLASTIC.ingot),
            C: Item.of(MATERIALS.CESIUM.dust),
            E: Item.of(MATERIALS.ALUMINUM.dust),
        }
    )

    event.shaped(
        Item.of('superbwarfare:medium_battery_pack', 1),
        [
            'CAC',
            'CBC'
        ],
        {
            A: Item.of("mekanism:alloy_reinforced"),
            B: Item.of('mekanism:elite_control_circuit'),
            C: Item.of("superbwarfare:small_battery_pack")
        }
    )
    event.shaped(
        Item.of('superbwarfare:medium_battery_pack', 1),
        [
            'ACD',
            'DEB'
        ],
        {
            A: Item.of("mekanism:alloy_reinforced"),
            B: Item.of('mekanism:elite_control_circuit'),
            D: Item.of(MATERIALS.PLASTIC.ingot),
            C: Item.of(MATERIALS.CESIUM.dust),
            E: Item.of(MATERIALS.ALUMINUM.dust),
        }
    )

    event.shaped(
        Item.of('superbwarfare:large_battery_pack', 1),
        [
            'CAC',
            'CBC'
        ],
        {
            A: Item.of("mekanism:alloy_atomic"),
            B: Item.of('mekanism:ultimate_control_circuit'),
            C: Item.of("superbwarfare:medium_battery_pack")
        }
    )

    event.shaped(
        Item.of('mekanism:energy_tablet', 1),
        [
            'CDC',
            'ABA',
            'ABA'
        ],
        {
            A: Item.of("superbwarfare:battery"),
            B: Item.of('mekanism:alloy_infused'),
            C: Item.of("redstone"),
            D: Item.of("gold_ingot"),
        }
    )
    event.shaped(
        Item.of('mekanism:energy_tablet', 2),
        [
            'CDC',
            'ABA',
            'ABA'
        ],
        {
            A: Item.of("superbwarfare:battery"),
            B: Item.of(MATERIALS.ETRIUM.nugget),
            C: Item.of("redstone"),
            D: Item.of("gold_ingot"),
        }
    )

    event.shaped(
        Item.of('superbwarfare:cell', 4),
        [
            ' A ',
            'DCD',
            ' A '
        ],
        {
            A: Item.of('mekanism:alloy_infused'),
            C: Item.of(MATERIALS.REDSTONE.ingot),
            D: Item.of(MATERIALS.SILVER.ingot),
        }
    )
    event.shaped(
        Item.of('superbwarfare:cell', 1),
        [
            ' A ',
            'DCD',
            ' A '
        ],
        {
            A: Item.of('mekanism:alloy_infused'),
            C: Item.of(MATERIALS.REDSTONE.ingot),
            D: Item.of(MATERIALS.IRON.ingot),
        }
    )
    event.shaped(
        Item.of('superbwarfare:cell', 8),
        [
            ' A ',
            'DCD',
            ' A '
        ],
        {
            A: Item.of('mekanism:alloy_infused'),
            C: Item.of('silentcompat:arcmetal_nugget'),
            D: Item.of(MATERIALS.IRON.ingot),
        }
    )
    event.shaped(
        Item.of('superbwarfare:cell', 12),
        [
            ' A ',
            'DCD',
            ' A '
        ],
        {
            A: Item.of('mekanism:alloy_infused'),
            C: Item.of('silentcompat:arcmetal_nugget'),
            D: Item.of('mekanism:hdpe_sheet'),
        }
    )

    event.shaped(
        Item.of('superbwarfare:battery', 1),
        [
            'ABA',
            'ABA'
        ],
        {
            A: Item.of('superbwarfare:cell'),
            B: Item.of(MATERIALS.COPPER.ingot)
        }
    )
    event.shaped(
        Item.of('superbwarfare:battery', 2),
        [
            'ABA',
            'ABA'
        ],
        {
            A: Item.of('superbwarfare:cell'),
            B: Item.of('silentcompat:arcmetal_nugget')
        }
    )
    event.shaped(
        Item.of('superbwarfare:battery', 4),
        [
            'D D',
            'BAC',
            'BAC'
        ],
        {
            A: Item.of('chemlib:lithium_perchlorate_dust'),
            B: Item.of(MATERIALS.NICKEL.plate),
            C: Item.of(MATERIALS.IRON.plate),
            D: Item.of(MATERIALS.COPPER.ingot),
        }
    )

})


function steel_casing_recipes(event) {
    event.remove({ id: 'mekanism:steel_casing' })
    event.shaped(
        Item.of('mekanism:steel_casing', 1),
        [
            'ACA',
            'C C',
            'ACA'
        ],
        {
            A: Item.of("pneumaticcraft:compressed_iron_gear"),
            C: Item.of("mekanism:ingot_steel"),
        }
    )
    event.shaped(
        Item.of('mekanism:steel_casing', 1),
        [
            'BCA',
            'C C',
            'ACB'
        ],
        {
            A: Item.of("pneumaticcraft:compressed_iron_gear"),
            C: Item.of("mekanism:ingot_steel"),
            B: Item.of(MATERIALS.CHROMIUM.ingot)
        }
    )
    event.shaped(
        Item.of('mekanism:steel_casing', 4),
        [
            'ABA',
            'B B',
            'ABA'
        ],
        {
            A: Item.of("thermal:invar_gear"),
            B: Item.of("mekanism:ingot_steel")
        }
    )
    event.shaped(
        Item.of('mekanism:steel_casing', 4),
        [
            'CBA',
            'B B',
            'ABC'
        ],
        {
            A: Item.of("thermal:invar_gear"),
            B: Item.of("mekanism:ingot_steel"),
            C: Item.of(MATERIALS.CHROMIUM.ingot)
        }
    )
    event.shaped(
        Item.of('mekanism:steel_casing', 8),
        [
            'ABA',
            'B B',
            'ABA'
        ],
        {
            A: Item.of("thermal:invar_gear"),
            B: Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.plate)
        }
    )
    event.shaped(
        Item.of('mekanism:steel_casing', 8),
        [
            'CBA',
            'B B',
            'ABC'
        ],
        {
            A: Item.of("thermal:invar_gear"),
            B: Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.plate),
            C: Item.of(MATERIALS.CHROMIUM.ingot)
        }
    )

    event.shaped(
        Item.of('dysonsphere:thermopile', 3),
        [
            'ABA',
            'ABA',
            'ABA'
        ],
        {
            A: Item.of(MATERIALS.HAFNIUM.ingot),
            B: Item.of(MATERIALS.CADMIUM.ingot)
        }
    )
}