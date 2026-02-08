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
                        "item": 'mekanism:' + level + '_fluid_tank'
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
                    "item": 'mekanism_extras:' + level + '_fluid_tank'
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
                    "item": 'mekanism_extras:' + level + '_fluid_tank'
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

})