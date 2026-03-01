// priority: 0

ServerEvents.recipes(event => {
    event.remove({ id: 'mekanismelements:reaction/pellet_neutron_source' })
    event.remove({ id: 'mekanism:isotopic_centrifuge' })
    event.shaped(
        Item.of('mekanism:isotopic_centrifuge', 1),
        [
            ' D ',
            'CEC',
            'ABA'
        ],
        {
            A: Item.of('mekanism:basic_chemical_tank'),
            B: Item.of('superbwarfare:large_motor'),
            C: Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.ingot),
            D: Item.of("mekanism_extras:absolute_control_circuit"),
            E: Item.of(MATERIALS.NEODYMIUM.ingot),
        }
    )

    event.replaceInput({id: "mekanism:solar_neutron_activator"}, "mekanism:alloy_reinforced", MATERIALS.CERIUM.plate)
    event.replaceInput({id: "mekanism:solar_neutron_activator"}, "mekanism:ingot_bronze", MATERIALS.PALLADIUM.plate)
    event.replaceInput({id: "mekanism:solar_neutron_activator"}, "mekanism:elite_control_circuit", 'mekanism:ultimate_control_circuit')
    event.replaceInput({id: "mekanism:solar_neutron_activator"}, "mekanism:hdpe_sheet", 'mekanismgenerators:reactor_glass')
    event.remove({ id: 'mekanismgenerators:fission_reactor/control_rod_assembly' })
    event.shaped(
        Item.of('mekanismgenerators:control_rod_assembly', 1),
        [
            'EDE',
            'ACA',
            'ABA'
        ],
        {
            A: Item.of(MATERIALS.CADMIUM.plate),
            B: Item.of(MATERIALS.BORON.ingot),
            C: Item.of("chemlib:carbon_dust"),
            D: Item.of("mekanism_extras:absolute_control_circuit"),
            E: Item.of(MATERIALS.NEODYMIUM.ingot),
        }
    )
    event.shaped(
        Item.of('mekanismgenerators:control_rod_assembly', 2),
        [
            'EDE',
            'ACA',
            'ABA'
        ],
        {
            A: Item.of(MATERIALS.CADMIUM.plate),
            B: Item.of(MATERIALS.HAFNIUM.ingot),
            C: Item.of("chemlib:carbon_dust"),
            D: Item.of("mekanism_extras:absolute_control_circuit"),
            E: Item.of(MATERIALS.NEODYMIUM.ingot),
        }
    )

    event.remove({ id: 'mekanismgenerators:fission_reactor/casing' })
    event.shaped(
        Item.of('mekanismgenerators:fission_reactor_casing', 1),
        [
            'ADA',
            'CBC',
            'ADA'
        ],
        {
            A: Item.of('mekanismelements:high_quality_concrete'),
            B: Item.of('thermal:machine_frame'),
            C: Item.of(MATERIALS.LEAD.block),
            D: Item.of(MATERIALS.EUROPIUM.plate),
        }
    )
    event.shaped(
        Item.of('mekanismgenerators:fission_reactor_casing', 1),
        [
            'ADA',
            'CBC',
            'ADA'
        ],
        {
            A: Item.of('mekanismelements:high_quality_concrete'),
            B: Item.of('thermal:machine_frame'),
            C: Item.of(MATERIALS.VANADIUM.block),
            D: Item.of(MATERIALS.EUROPIUM.plate),
        }
    )

    event.replaceInput({ id: 'mekanismgenerators:fission_reactor/port' }, 'mekanism:elite_control_circuit', 'mekanism_extras:absolute_control_circuit')
    event.replaceInput({ id: 'bfr:irradiator' }, 'mekanism:ultimate_control_circuit', 'mekanism_extras:absolute_control_circuit')
    event.replaceInput({ id: 'bfr:reactor/controller' }, 'mekanism:ultimate_control_circuit', 'mekanism_extras:absolute_control_circuit')
    event.replaceInput({ id: 'bfr:reactor/controller' }, 'glass_pane', 'computercraft:computer_advanced')
    event.replaceInput({ id: 'bfr:reactor/port' }, 'mekanism:ultimate_control_circuit', 'mekanism_extras:absolute_control_circuit')
    event.replaceInput({ id: 'bfr:laser_focus_matrix' }, 'redstone_block', 'mffs:focus_matrix')

    event.remove({ id: 'bfr:reactor/frame' })
    event.shaped(Item.of('bfr:fusion_reactor_frame'), [
        "ACD",
        "DBD",
        "DCA",
    ], {
        A: Item.of('mekanism_weaponry:magnetic_circuit'),
        B: 'mekanismgenerators:fission_reactor_casing',
        C: Item.of('mekanism:pellet_polonium'),
        D: 'mekanism_extras:alloy_radiance'
    })

    event.replaceInput({ id: 'mekanismelements:crafting/radiation_irradiator' }, 'mekanism:ultimate_control_circuit', 'mekanism_extras:absolute_control_circuit')

    event.remove({ id: 'mekanism:supercharged_coil' })
    event.shaped(
        Item.of('mekanism:supercharged_coil', 1),
        [
            ' D ',
            'CEC',
            'ABA'
        ],
        {
            A: Item.of('mekanism_extras:supreme_control_circuit'),
            B: Item.of('chemlib:lanthanum_iii_bromide_dust'),
            C: Item.of(MATERIALS.CERIUM.ingot),
            D: Item.of(MATERIALS.RUBIDIUM.plate),
            E: Item.of('mekanism_lasers:ultimate_laser'),
        }
    )

    event.remove({ id: 'mekanism:sps_casing' })
    event.shaped(
        Item.of('mekanism:sps_casing', 1),
        [
            'EDA',
            'CBC',
            'ADE'
        ],
        {
            A: Item.of('mekanism_extras:alloy_thermonuclear'),
            B: Item.of('bfr:fusion_reactor_frame'),
            C: Item.of(MATERIALS.NAQUADAH.block),
            D: Item.of('thermalendergy:melodium_block'),
            E: Item.of(MATERIALS.PRASEODYMIUM.gear)
        }
    )

    event.replaceInput({ id: 'mekanism:sps_port' }, 'mekanism:ultimate_control_circuit', 'mekanism_extras:supreme_control_circuit')

    event.remove({ id: 'mekanism:antiprotonic_nucleosynthesizer' })
    event.shaped(
        Item.of('mekanism:antiprotonic_nucleosynthesizer', 1),
        [
            'ADA',
            'CBC',
            'ADA'
        ],
        {
            A: Item.of('mekanism:sps_port'),
            B: Item.of('mekanism:sps_casing'),
            C: Item.of(MATERIALS.PRASEODYMIUM.block),
            D: Item.of('pncepcb:quantum_finished_pcb'),
        }
    )

    event.remove({ id: 'mekanismgenerators:fission_reactor/fuel_assembly' })
    event.shaped(
        Item.of('mekanismgenerators:fission_fuel_assembly', 1),
        [
            'CBC',
            'ABA',
            'DCD'
        ],
        {
            A: Item.of(MATERIALS.EUROPIUM.plate),
            B: Item.of('mekanism:basic_chemical_tank'),
            C: Item.of(MATERIALS.GADOLINIUM.plate),
            D: Item.of(MATERIALS.LEAD.plate),
        }
    )

    event.remove({ id: 'mekanism_extras:naquadah_reactor/casing' })
    event.remove({ id: 'mekanism:antiprotonic_nucleosynthesizer' })
    event.shaped(
        Item.of('mekanism_extras:naquadah_reactor_casing', 1),
        [
            'ACA',
            'CBC',
            'ACA'
        ],
        {
            A: Item.of('mekanism:pellet_antimatter'),
            B: Item.of('bfr:fusion_reactor_frame'),
            C: Item.of('sgjourney:naquadah_alloy')
        }
    )

    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "duration": 3000,
        "gasInput": {
            "amount": 1,
            "gas": "mekanism:antimatter"
        },
        "itemInput": {
            "ingredient": {
                "item": "bfr:fusion_reactor_frame"
            }
        },
        "output": {
            "item": "mekanism_extras:naquadah_reactor_casing"
        }
    })
})