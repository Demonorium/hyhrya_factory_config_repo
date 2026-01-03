// priority: 0

ServerEvents.tags("item", event => {
    for (const [key, value] of Object.entries(MATERIALS)) {
        event.removeAll(value.normal_ores_tag.substring(1))
        event.add(value.normal_ores_tag.substring(1), value.normal_ores)
    }
})

ServerEvents.recipes(event => {
    console.log("ore process loading...")
    const injection_ore_recipe = (from, from_amount, to, to_amount, injection_material_amount) => {
        event.custom({
            "type": "mekanism:injecting",
            "chemicalInput": {
                "amount": injection_material_amount,
                "gas": "mekanism:hydrogen_chloride"
            },
            "itemInput": {
                "amount": from_amount,
                "ingredient": {
                    "item": from
                }
            },
            "output": {
                "item": to,
                "count": to_amount
            }
        })
    }
    
    event.remove({id: 'mekanism:processing/quartz/to_ore'})
    event.remove({id: 'moremekanismprocessing:processing/calorite/.'})
    event.remove({output: MATERIALS.NAQUADAH.ingot, mod: 'mekanism_extras'})
    event.remove({output: MATERIALS.NAQUADAH.dust, mod: 'mekanism_extras'})
    event.remove({output: MATERIALS.NAQUADAH.clean_slurry, mod: 'mekanism_extras'})
    event.remove({output: MATERIALS.NAQUADAH.dirty_slurry, mod: 'mekanism_extras'})
    event.remove({output: MATERIALS.NAQUADAH.shard, mod: 'mekanism_extras'})
    event.remove({output: MATERIALS.NAQUADAH.clump, mod: 'mekanism_extras'})
    event.remove({output: MATERIALS.NAQUADAH.crystal, mod: 'mekanism_extras'})
    event.remove({id: 'mekanism_extras:processing/naquadah/dust/from_ingot'})
    event.remove({id: 'mekanism_extras:processing/naquadah/ingot/from_dust_blasting'})
    event.remove({id: 'mekanism_extras:processing/naquadah/ingot/from_dust_smelting'})
    event.remove({id: 'sgjourney:refined_naquadah_from_blasting'})
    event.remove({id: 'mekanism_extras:processing/naquadah/dirty_dust/from_clump'})
    event.remove({id: 'mekanism_extras:processing/naquadah/dirt'})
    event.remove({id: 'mekanism_extras:processing/naquadah/slurry/dirty/from_ore'})
    event.remove({id: 'mekanism_extras:processing/naquadah/slurry/dirty/from_raw_ore'})
    event.remove({id: 'mekanism_extras:processing/naquadah/slurry/dirty/from_raw_block'})
    event.remove({id: 'mekanism_extras:processing/naquadah/slurry/dirty/from_raw'})
    event.remove({id: 'mekanism_extras:processing/naquadah/slurry/clean'})
    event.remove({output: 'mekanism_extras:ingot_naquadah', mod: 'mekanism_extras'})
    event.remove({id: 'sgjourney:naquadah_alloy_from_naquadah_block'})
    event.remove({id: 'sgjourney:naquadah_alloy'})
    event.remove({id: 'sgjourney:naquadah_alloy_from_naquadah_slab'})
    event.remove({id: 'sgjourney:naquadah_alloy_from_naquadah_stairs'})
    event.remove({id: 'sgjourney:naquadah_from_blasting'})

    event.remove({output: MATERIALS.CALORITE.ingot, mod: 'ad_astra', type: 'smelting'})
    event.remove({output: MATERIALS.CALORITE.ingot, mod: 'ad_astra', type: 'blasting'})
    event.remove({output: MATERIALS.CALORITE.dust, mod: 'moremekanismprocessing'})
    event.remove({output: MATERIALS.CALORITE.dirty, mod: 'moremekanismprocessing'})
    event.remove({output: MATERIALS.CALORITE.shard, mod: 'moremekanismprocessing'})
    event.remove({output: MATERIALS.CALORITE.clump, mod: 'moremekanismprocessing'})
    event.remove({output: MATERIALS.CALORITE.crystal, mod: 'moremekanismprocessing'})
    event.remove({id: 'moremekanismprocessing:processing/calorite/slurry/clean'})
    event.remove({id: 'moremekanismprocessing:processing/calorite/slurry/dirty/ore'})
    event.remove({id: 'moremekanismprocessing:processing/calorite/slurry/dirty/raw_ore'})
    event.remove({id: 'moremekanismprocessing:processing/calorite/slurry/dirty/raw_storage_blocks'})
    
    event.custom({
      "type": "dysonsphere:laser_crafting",
      "input": {
        "item": MATERIALS.CALORITE.dirty
      },
      "inputEnergy": 500000,
      "output": {
        "item": MATERIALS.CALORITE.dust
      }
    })

    event.custom({
      "type": "dysonsphere:laser_crafting",
      "input": {
        "item": MATERIALS.NAQUADAH.dirty
      },
      "inputEnergy": 100000,
      "output": {
        "item": MATERIALS.NAQUADAH.dust
      }
    })

    event.custom({
      "type": "dysonsphere:laser_crafting",
      "input": {
        "item": MATERIALS.NAQUADAH.raw
      },
      "inputEnergy": 10000000,
      "output": {
        "item": Item.of("sgjourney:pure_naquadah").getId()
      }
    })

    event.custom({
      "type": "dysonsphere:laser_crafting",
      "input": {
        "item": "sgjourney:pure_naquadah"
      },
      "inputEnergy": 1000000,
      "output": {
        "item": Item.of("sgjourney:naquadah").getId()
      }
    })

    event.custom({
      "type": "thermal:pulverizer",
      "ingredient": {
        "item": Item.of('ad_astra:venus_calorite_ore').getId(),
        "count": 1.0
      },
      "result": [
        {
          "item": MATERIALS.CALORITE.raw,
          "chance": 2.5
        },
        {
          "item": MATERIALS.CALORITE.raw,
          "chance": 0.5
        },
        {
          "item": "ad_astra:venus_sand",
          "chance": 0.25
        }
      ],
      "experience": 1.0
    })

    event.custom({
      "type": "thermal:pulverizer",
      "ingredient": {
        "item": Item.of('ad_astra:deepslate_calorite_ore').getId(),
        "count": 1.0
      },
      "result": [
        {
          "item": MATERIALS.CALORITE.raw,
          "chance": 2.5
        },
        {
          "item": MATERIALS.CALORITE.raw,
          "chance": 0.5
        },
        {
          "item": "minecraft:sand",
          "chance": 0.25
        }
      ],
      "experience": 1.0
    })

    event.custom({
      "type": "thermal:pulverizer",
      "ingredient": {
        "item": Item.of('sgjourney:naquadah_ore').getId(),
        "count": 1.0
      },
      "result": [
        {
          "item": MATERIALS.NAQUADAH.raw,
          "chance": 3.
        },
        {
          "item": Item.of('sgjourney:pure_naquadah').getId(),
          "chance": 0.5
        },
        {
          "item": "ad_astra:venus_sand",
          "chance": 0.25
        }
      ],
      "experience": 1.0
    })

    event.custom({
      "type": "thermal:pulverizer",
      "ingredient": {
        "item": Item.of('sgjourney:deepslate_naquadah_ore').getId(),
        "count": 1.0
      },
      "result": [
        {
          "item": MATERIALS.NAQUADAH.raw,
          "chance": 3.
        },
        {
          "item": Item.of('sgjourney:pure_naquadah').getId(),
          "chance": 0.5
        },
        {
          "item": "minecraft:sand",
          "chance": 0.25
        }
      ],
      "experience": 1.0
    })

    event.custom({
      "type": "dysonsphere:laser_crafting",
      "input": {
        "item": MATERIALS.NAQUADAH.dust
      },
      "inputEnergy": 30000000,
      "output": {
        "item": MATERIALS.NAQUADAH.ingot
      }
    })
    event.custom({
      "type": "dysonsphere:laser_crafting",
      "input": {
        "item": MATERIALS.CALORITE.dust
      },
      "inputEnergy": 10000000,
      "output": {
        "item": MATERIALS.CALORITE.ingot
      }
    })
    
    event.custom({
        "type": "mekanism:reaction",
        "duration": 800,
        "energyRequired": 200,
        "fluidInput": {
          "amount": 10000,
          "fluid": "mekanism:superheated_sodium"
        },
        "gasInput": {
          "amount": 10000,
          "gas": "mekanism:water_vapor"
        },
        "itemInput": {
          "amount": 1,
          "ingredient": {
            "item": MATERIALS.NAQUADAH.dust
          }
        },
        "itemOutput": {
          "count": 1,
          "item":MATERIALS.NAQUADAH.ingot
        },
        "gasOutput": {
          "amount": 10000,
          "gas": "mekanism:sodium"
        }
    })

    event.custom({
        "type": "mekanism:reaction",
        "duration": 600,
        "energyRequired": 150,
        "fluidInput": {
          "amount": 3000,
          "fluid": "mekanism:superheated_sodium"
        },
        "gasInput": {
          "amount": 3000,
          "gas": "mekanism:water_vapor"
        },
        "itemInput": {
          "amount": 1,
          "ingredient": {
            "item": MATERIALS.CALORITE.dust
          }
        },
        "itemOutput": {
          "count": 1,
          "item":MATERIALS.CALORITE.ingot
        },
        "gasOutput": {
          "amount": 3000,
          "gas": "mekanism:sodium"
        }
    })

    event.custom({
        "type": "mekanism:reaction",
        "duration": 600,
        "energyRequired": 150,
        "fluidInput": {
          "amount": 100,
          "fluid": Fluid.of('sgjourney:liquid_naquadah').getId()
        },
        "gasInput": {
          "amount": 5000,
          "gas": "mekanism:superheated_sodium"
        },
        "itemInput": {
          "amount": 5,
          "ingredient": {
            "item": MATERIALS.CLOGGRUM.ingot
          }
        },
        "itemOutput": {
          "count": 1,
          "item": 'sgjourney:naquadah_alloy'
        },
        "gasOutput": {
          "amount": 5000,
          "gas": "mekanism:sodium"
        }
    })
    
    for (const [key, value] of Object.entries(MATERIALS)) {
        if (key == "CALORITE" || key == "NAQUADAH") {
            continue
        }
        if (value.normal_ores.length > 0) {
            value.normal_ores.forEach(element => {
                event.remove({"type": "thermal:pulverizer", mod: "thermal", "input": element})
                event.remove({"type": "thermal:smelter", mod: "thermal", "input": element})

                event.remove({"type": "mekanism:combining", "output": element})
            });
        }
        
        if (value.dirty) {
            event.remove({type: "mekanism:crushing", output: value.dirty})
        }
        
        if (value.clump) {
            event.remove({type: 'mekanism:purifying', output: value.clump})
            
            if (value.normal_ores_tag && value.normal_ores.length > 0) {
                event.custom({
                    "type": "mekanism:crushing",
                    "input": {
                    "ingredient": {
                        "tag": value.normal_ores_tag.substring(1)
                    }
                    },
                    "output": {
                        "item": value.clump,
                        "count": 2
                    }
                })
            }

            if (value.raw) {
                event.custom({
                    "type": "mekanism:crushing",
                    "input": {
                    "ingredient": {
                        "item": value.raw
                    }
                    },
                    "output": {
                        "item": value.clump
                    }
                })
            }

            if (value.raw_block) {
                event.custom({
                    "type": "mekanism:crushing",
                    "input": {
                    "ingredient": {
                        "item": value.raw_block
                    }
                    },
                    "output": {
                        "item": value.clump,
                        "count": 9
                    }
                })
            }

            if (value.dirty_slurry) {
                event.custom({
                    "type": "mekanism:dissolution",
                    "gasInput": {
                        "amount": 1,
                        "gas": "mekanism:sulfuric_acid"
                    },
                    "itemInput": {
                        "ingredient": {
                            "item": value.clump
                        }
                    },
                    "output": {
                        "amount": 600,
                        "chemicalType": "slurry",
                        "slurry": value.dirty_slurry
                    }
                })
            }

            if (value.shard) {
                event.custom({
                    "type": "mekanism:injecting",
                    "chemicalInput": {
                        "amount": 1,
                        "gas": "mekanism:hydrogen_chloride"
                    },
                    "itemInput": {
                        "ingredient": {
                            "item": value.clump
                        }
                    },
                    "output": {
                        "count": 2,
                        "item": value.shard
                    }
                })
            }
        }

        if (value.shard && value.dust) {
            event.custom({
                "type": "mekanism:purifying",
                "chemicalInput": {
                    "amount": 1,
                    "gas": "mekanism:oxygen"
                },
                "itemInput": {
                    "ingredient": {
                        "item": value.shard
                    }
                },
                "output": {
                    "item": value.dust
                }
            })
        } else if (value.shard && value.ingot) {
             event.custom({
                "type": "mekanism:purifying",
                "chemicalInput": {
                    "amount": 1,
                    "gas": "mekanism:oxygen"
                },
                "itemInput": {
                    "ingredient": {
                        "item": value.shard
                    }
                },
                "output": {
                    "item": value.ingot
                }
            })
        }

        if (value.generated_slurry) {
            if (value.normal_ores_tag && value.normal_ores.length > 0) {
                event.custom({
                    "type": "mekanism:dissolution",
                    "gasInput": {
                        "amount": 1,
                        "gas": "mekanism:sulfuric_acid"
                    },
                    "itemInput": {
                        "ingredient": {
                            "tag": value.normal_ores_tag.substring(1)
                        }
                    },
                    "output": {
                        "amount": 1000,
                        "chemicalType": "slurry",
                        "slurry": value.dirty_slurry
                    }
                })
            }

            if (value.raw) {
                event.custom({
                    "type": "mekanism:dissolution",
                    "gasInput": {
                        "amount": 1,
                        "gas": "mekanism:sulfuric_acid"
                    },
                    "itemInput": {
                        "amount": 3,
                        "ingredient": {
                            "item": value.raw
                        }
                    },
                    "output": {
                        "amount": 2000,
                        "chemicalType": "slurry",
                        "slurry": value.dirty_slurry
                    }
                })
            }

            if (value.raw_block) {
                event.custom({
                    "type": "mekanism:dissolution",
                    "gasInput": {
                        "amount": 2,
                        "gas": "mekanism:sulfuric_acid"
                    },
                    "itemInput": {
                        "amount": 1,
                        "ingredient": {
                            "item": value.raw_block
                        }
                    },
                    "output": {
                        "amount": 6000,
                        "chemicalType": "slurry",
                        "slurry": value.dirty_slurry
                    }
                })
            }
        }

        if ((value.generated_slurry || value.crystal_generated) && value.crystal && value.clean_slurry) {
            event.custom({
                "type": "mekanism:crystallizing",
                "chemicalType": "slurry",
                "input": {
                    "amount": 200,
                    "slurry": value.clean_slurry
                },
                "output": {
                    "item": value.crystal
                }
            })
        }
        
        if ((value.shard_generated || value.crystal_generated) && value.shard && value.crystal) {
            injection_ore_recipe(value.crystal, 1, value.shard, 1, 1)
        }

        if (value.shard_generated && value.raw) {
            injection_ore_recipe(value.raw, 3, value.shard, 8, 1)
        }

        if (value.shard_generated && value.raw_block) {
            injection_ore_recipe(value.raw_block, 1, value.shard, 24, 2)
        }

        if (value.shard_generated && value.normal_ores.length > 0) {
            event.custom({
                "type": "mekanism:injecting",
                "chemicalInput": {
                    "amount": 1,
                    "gas": "mekanism:hydrogen_chloride"
                },
                "itemInput": {
                    "ingredient": {
                        "tag": value.normal_ores_tag.substring(1)
                    }
                },
                "output": {
                    "count": 4,
                    "item": value.shard
                }
            })
        }

        if (value.dirty_generated) {
            if (value.dust) {
                event.custom({
                    "type": "mekanism:enriching",
                    "input": {
                      "ingredient": {
                        "item": value.dirty
                      }
                    },
                    "output": {
                      "item": value.dust
                    }
                })
            } else if (value.ingot) {
                event.custom({
                    "type": "mekanism:enriching",
                    "input": {
                      "ingredient": {
                        "item": value.dirty
                      }
                    },
                    "output": {
                      "item": value.ingot
                    }
                })
            }
        }
    }

    console.log("ore process loaded")
})


ServerEvents.recipes(event => {
    event.remove({id: "bfr:irradiating/polonium_from_waste"})
    event.remove({id: "bfr:irradiating/dirty_netherite_scrap"})
})