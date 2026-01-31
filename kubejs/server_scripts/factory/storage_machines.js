// priority: 0

ServerEvents.recipes(event => {
    event.replaceInput({ id: "mekanism:bin/basic" }, 'mekanism:basic_control_circuit', 'chest')
    let lastLevel = 'basic'
    meka_levels.forEach(level => {
        event.remove({ id: 'mekanism:fluid_tank/' + level })

        if (level != 'basic') {
            event.remove({ id: "mekanism:bin/" + level })
            event.custom({
                "type": "mekanism:mek_data",
                "key": {
                    "A": {
                        "item": MATERIALS.COMPRESSED_IRON.ingot
                    },
                    "B": {
                        "item": 'mekanism:' + level + '_control_circuit'
                    },
                    "C": {
                        "item": alloy_levels[level].getId()
                    },
                    "D": {
                        "item": 'mekanism:' + lastLevel + '_bin'
                    }
                },
                "pattern": [
                    "ABA",
                    "CDC",
                    "AAA"
                ],
                "result": {
                    "item": 'mekanism:' + level + '_bin'
                }
            })

            if (level != 'advanced') {
                event.custom({
                    "type": "mekanism:mek_data",
                    "key": {
                        "A": {
                            "item": MATERIALS.COMPRESSED_IRON.ingot
                        },
                        "C": {
                            "item": alloy_levels[level].getId()
                        },
                        "D": {
                            "item": 'mekanism:' + lastLevel + '_fluid_tank'
                        }
                    },
                    "pattern": [
                        "CAC",
                        "ADA",
                        "CAC"
                    ],
                    "result": {
                        "item": 'mekanism:' + lastLevel + '_fluid_tank'
                    }
                })
            } else {
                event.custom({
                    "type": "mekanism:mek_data",
                    "key": {
                        "A": {
                            "item": MATERIALS.COMPRESSED_IRON.ingot
                        },
                        "C": {
                            "item": alloy_levels[level].getId()
                        },
                        "D": {
                            "item": 'pneumaticcraft:small_tank'
                        }
                    },
                    "pattern": [
                        "CAC",
                        "ADA",
                        "CAC"
                    ],
                    "result": {
                        "item": 'mekanism:' + lastLevel + '_fluid_tank'
                    }
                })
            }
        }
        lastLevel = level
    })

    mekanism_extras_levels.forEach(level => {
        event.remove({ id: "mekanism_extras:bin/" + level })
        event.remove({ id: 'mekanism_extras:fluid_tank/' + level })
        if (level != 'absolute') {
            event.custom({
                "type": "mekanism:mek_data",
                "key": {
                    "A": {
                        "item": MATERIALS.COMPRESSED_IRON.ingot
                    },
                    "B": {
                        "item": 'mekanism_extras:' + level + '_control_circuit'
                    },
                    "C": {
                        "item": alloy_levels[level].getId()
                    },
                    "D": {
                        "item": 'mekanism_extras:' + lastLevel + '_bin'
                    }
                },
                "pattern": [
                    "ABA",
                    "CDC",
                    "AAA"
                ],
                "result": {
                    "item": 'mekanism_extras:' + level + '_bin'
                }
            })

            event.custom({
                "type": "mekanism:mek_data",
                "key": {
                    "A": {
                        "item": MATERIALS.COMPRESSED_IRON.ingot
                    },
                    "C": {
                        "item": alloy_levels[level].getId()
                    },
                    "D": {
                        "item": 'mekanism_extras:' + lastLevel + '_fluid_tank'
                    }
                },
                "pattern": [
                    "CAC",
                    "ADA",
                    "CAC"
                ],
                "result": {
                    "item": 'mekanism_extras:' + lastLevel + '_fluid_tank'
                }
            })
        } else {
            event.custom({
                "type": "mekanism:mek_data",
                "key": {
                    "A": {
                        "item": MATERIALS.COMPRESSED_IRON.ingot
                    },
                    "B": {
                        "item": 'mekanism_extras:' + level + '_control_circuit'
                    },
                    "C": {
                        "item": alloy_levels[lastLevel].getId()
                    },
                    "D": {
                        "item": 'mekanism:' + lastLevel + '_bin'
                    }
                },
                "pattern": [
                    "ABA",
                    "CDC",
                    "AAA"
                ],
                "result": {
                    "item": 'mekanism_extras:' + level + '_bin'
                }
            })

            event.custom({
                "type": "mekanism:mek_data",
                "key": {
                    "A": {
                        "item": MATERIALS.COMPRESSED_IRON.ingot
                    },
                    "C": {
                        "item": alloy_levels[lastLevel].getId()
                    },
                    "D": {
                        "item": 'mekanism:' + lastLevel + '_fluid_tank'
                    }
                },
                "pattern": [
                    "CAC",
                    "ADA",
                    "CAC"
                ],
                "result": {
                    "item": 'mekanism_extras:' + lastLevel + '_fluid_tank'
                }
            })
        }
        lastLevel = level
    })

    event.remove({ id: 'mekanism:qio_drive_array' })
    event.custom({
        "type": "mekanism:mek_data",
        "key": {
            "#": {
                "item": "ae2:drive"
            },
            "C": {
                "item": "mekanism_extras:supreme_control_circuit"
            },
            "G": {
                "item": "ae2:semi_dark_monitor"
            },
            "I": {
                "tag": "forge:pellets/polonium"
            },
            "T": {
                "item": "mekanism:teleportation_core"
            }
        },
        "pattern": [
            "IGI",
            "C#C",
            "ITI"
        ],
        "result": {
            "item": "mekanism:qio_drive_array"
        }
    })

    event.remove({ id: "mekanism:transmitter/universal_cable/basic" })
    event.shaped(
        Item.of('mekanism:basic_universal_cable', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: MATERIALS.COPPER.ingot,
            B: Item.of('thermal:rf_coil')
        }
    )
    event.shaped(
        Item.of('mekanism:elite_universal_cable', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: MATERIALS.SILVER.ingot,
            B: Item.of('thermal:rf_coil')
        }
    )
    event.shaped(
        Item.of('mekanism_extras:absolute_universal_cable', 16),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: MATERIALS.CERIUM.ingot,
            B: Item.of('mekanism_extras:alloy_radiance')
        }
    )
    event.shaped(
        Item.of('mekanism_extras:supreme_universal_cable', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: MATERIALS.CERIUM.ingot,
            B: Item.of('mekanism_extras:alloy_thermonuclear')
        }
    )
    event.shaped(
        Item.of('mekanism_extras:cosmic_universal_cable', 16),
        [
            'ABA',
            'BBB',
            'ABA'
        ],
        {
            A: MATERIALS.NAQUADAH.ingot,
            B: Item.of('chemlib:lanthanum_carbide_dust'),
            B: Item.of('mekanism_extras:alloy_shining')
        }
    )
    
    event.shaped(
        Item.of('mekanism_extras:infinite_universal_cable', 8),
        [
            'ABA',
            'BBB',
            'ABA'
        ],
        {
            A: MATERIALS.NAQUADAH.ingot,
            B: Item.of('chemlib:lanthanum_carbide_dust'),
            B: Item.of('mekanism_extras:alloy_spectrum')
        }
    )

    event.remove({ id: "mekanism:transmitter/pressurized_tube/basic" })
    event.shaped(
        Item.of('mekanism:basic_pressurized_tube', 8),
        [
            'ACA',
            'B B',
            'ACA'
        ],
        {
            A: Item.of('thermal:tar'),
            B: MATERIALS.OSMIUM.gear,
            C: MATERIALS.OSMIUM.ingot
        }
    )
    event.shaped(
        Item.of('mekanism:advanced_pressurized_tube', 8),
        [
            'ACA',
            'B B',
            'ACA'
        ],
        {
            A: Item.of('thermal:tar'),
            B: MATERIALS.PLATINUM.gear,
            C: MATERIALS.PLATINUM.ingot
        }
    )
    event.shaped(
        Item.of('mekanism:ultimate_pressurized_tube', 8),
        [
            'ACA',
            'B B',
            'ACA'
        ],
        {
            A: Item.of('thermal:tar'),
            B: MATERIALS.CHROMIUM.gear,
            C: MATERIALS.MOLYBDENUM.ingot
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
    event.shaped(
        Item.of('mekanism:advanced_logistical_transporter', 8),
        [
            ' C ',
            'B B',
            ' C '
        ],
        {
            B: MATERIALS.ALUMINUM.gear,
            C: MATERIALS.ALUMINUM.ingot
        }
    )
    event.shaped(
        Item.of('mekanism:ultimate_logistical_transporter', 8),
        [
            ' C ',
            'B B',
            ' C '
        ],
        {
            B: MATERIALS.TITANIUM.gear,
            C: MATERIALS.TITANIUM.ingot
        }
    )

    event.remove({ id: "mekanism:transmitter/mechanical_pipe/basic" })
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
    event.shaped(
        Item.of('mekanism:advanced_mechanical_pipe', 8),
        [
            'ACA',
            'B B',
            'ACA'
        ],
        {
            A: "#forge:glass/silica",
            B: MATERIALS.ALUMINUM.gear,
            C: MATERIALS.ALUMINUM.ingot
        }
    )
    event.shaped(
        Item.of('mekanism:ultimate_mechanical_pipe', 8),
        [
            'ACA',
            'B B',
            'ACA'
        ],
        {
            A: "#forge:glass/silica",
            B: MATERIALS.TITANIUM.gear,
            C: MATERIALS.TITANIUM.ingot
        }
    )

    event.remove({ id: "mekanism:transmitter/thermodynamic_conductor/basic" })
    event.shaped(
        Item.of('mekanism:basic_thermodynamic_conductor', 8),
        [
            'CCC',
            'ABA',
            'CCC'
        ],
        {
            A: MATERIALS.STEEL.ingot,
            B: MATERIALS.COMPRESSED_IRON.block,
            C: Item.of('pneumaticcraft:thermal_lagging')
        }
    )
    event.shaped(
        Item.of('mekanism:ultimate_thermodynamic_conductor', 8),
        [
            'CCC',
            'ABA',
            'CCC'
        ],
        {
            A: MATERIALS.STEEL.ingot,
            B: MATERIALS.CADMIUM.ingot,
            C: Item.of('pneumaticcraft:thermal_lagging')
        }
    )

    meka_levels.forEach(level => {
        event.shaped(
            Item.of('mekanism:' + level + '_mechanical_pipe', 4),
            [
                ' BA',
                'B B',
                'AB '
            ],
            {
                A: "#forge:glass/silica",
                B: 'mekanism:' + level + '_logistical_transporter',
            }
        )
    })

    mekanism_extras_levels.forEach(level => {
        event.shaped(
            Item.of('mekanism_extras:' + level + '_mechanical_pipe', 4),
            [
                ' BA',
                'B B',
                'AB '
            ],
            {
                A: "#forge:glass/silica",
                B: 'mekanism_extras:' + level + '_logistical_transporter',
            }
        )
    })
})