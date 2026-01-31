
ServerEvents.recipes(event => {
    event.remove({ id: 'biomancy:crafting/primordial_core' })
    event.shaped(Item.of('biomancy:primordial_core'), [
        "DCD",
        "AEA",
        "BBB"
    ], {
        A: Item.of('macabre:rootofinfestation'),
        E: Item.of('macabre:eye'),
        B: Item.of('macabre:tooth'),
        C: Item.of('pncepcb:bio_compatible_finished_pcb'),
        D: Item.of('macabre:ferrum_ingot')
    })

    event.replaceInput({ id: 'biomancy:crafting/bio_forge' }, 'slime_ball', 'pncepcb:bio_compatible_finished_pcb')
    event.replaceInput({ id: 'biomancy:crafting/decomposer' }, 'c:fangs', 'pncepcb:bio_compatible_finished_pcb')
    event.replaceInput({ id: 'biomancy:crafting/decomposer' }, 'c:fangs', 'pncepcb:bio_compatible_finished_pcb')
    event.replaceInput({ id: 'biomancy:bio_forging/digester' }, 'biomancy:bone_fragments', 'pncepcb:bio_compatible_finished_pcb')
    event.replaceInput({ id: 'biomancy:bio_forging/bio_lab' }, 'c:fangs', 'pncepcb:bio_compatible_finished_pcb')

    event.shaped(
        Item.of("kubejs:empty_injection"),
        [
            "ABA",
            " A ",
            " C "
        ],
        {
            A: MATERIALS.CHROMIUM.nugget,
            B: Item.of('mekanismelements:syringe'),
            C: MATERIALS.PALLADIUM.nugget
        }
    )
    
    event.custom({
        "type": "biomancy:bio_brewing",
        "ingredients": [
            {
                "item": "biomancy:genetic_compound"
            },
            {
                "item": "chemlib:chitin_dust"
            }
        ],
        "nutrientsCost": 2,
        "processingTime": 80,
        "reactant": {
            "item": "kubejs:empty_injection"
        },
        "result": {
            "item": "kubejs:stimulator_injection"
        }
    })

    event.custom({
        "type": "biomancy:bio_brewing",
        "ingredients": [
            {
                "count": 3,
                "item": 'chemlib:lanthanum_carbide_dust'
            },
            {
                "count": 3,
                "item": Item.of('pncepcb:smd_transistor').getId()
            }
        ],
        "nutrientsCost": 2,
        "processingTime": 80,
        "reactant": {
            "item": MATERIALS.PALLADIUM.dust
        },
        "result": {
            "item": 'kubejs:nanomachines'
        }
    })
    
    event.custom({
        "type": "biomancy:bio_brewing",
        "ingredients": [
            {
                "item": "kubejs:nanomachines"
            },
            {
                "item": "chemlib:chitin_dust"
            }
        ],
        "nutrientsCost": 2,
        "processingTime": 80,
        "reactant": {
            "item": "kubejs:empty_injection"
        },
        "result": {
            "item": 'kubejs:nanomachines_injection'
        }
    })

    event.custom({
        "type": "biomancy:bio_brewing",
        "ingredients": [
            {
                "item": MATERIALS.NAQUADAH.dust
            },
            {
                "item": 'chemlib:lanthanum_hydroxide_dust'
            },
            {
                "item": Item.of("macabre:plasma").getId()
            },
            {
                "item": Item.of("macabre:raw_blood_clot").getId()
            }
        ],
        "nutrientsCost": 2,
        "processingTime": 160,
        "reactant": {
            "item": "kubejs:nanomachines"
        },
        "result": {
            "item": Item.of('kubejs:neural_nanomachines').getId()
        }
    })

    event.custom({
        "type": "biomancy:bio_brewing",
        "ingredients": [
            {
                "item": "kubejs:neural_nanomachines"
            },
            {
                "item": "chemlib:chitin_dust"
            }
        ],
        "nutrientsCost": 4,
        "processingTime": 320,
        "reactant": {
            "item": "kubejs:empty_injection"
        },
        "result": {
            "item": Item.of('kubejs:neural_nanomachines_injection').getId()
        }
    })

    event.custom({
        "type": "biomancy:bio_forging",
        "bio_forge_tab": "biomancy:components",
        "ingredients": [
            {
                "count": 1,
                "item": Item.of('biomancy:living_flesh').getId()
            },
            {
                "count": 1,
                "item": Item.of(MATERIALS.EXTRATERRESTRIAL_STEEL.ingot).getId()
            }
        ],
        "nutrientsCost": 1,
        "result": {
            "item": Item.of('clanginghowl:chunk_of_technoflesh').getId(),
            "count": 3
        }
    })

})

ServerEvents.tags('item', event => {
    event.add('c:fangs', 'mowziesmobs:naga_fang')
    event.add('c:fangs', 'opposing_force:umber_fang')
    event.add('c:fangs', 'ophidiophobia:poisoness_fang')
    event.add('c:fangs', 'spidermod:huntsman_fang')
    event.add('c:fangs', 'spidermod:ogre_face_fang')
    event.add('c:fangs', 'spidermod:orbweaver_fang')
    event.add('c:fangs', 'spidermod:tarantula_fang')
    event.add('c:fangs', 'spidermod:wolf_spider_fang')
    event.add('c:fangs', 'spidermod:funnel_web_fang')
    event.add('c:fangs', 'spidermod:wandering_spider_fang')
})