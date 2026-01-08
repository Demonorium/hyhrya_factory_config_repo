StartupEvents.registry("item", event => {
    ITEMS_TO_CREATE.forEach(element => {
        event.create(element.name)
    })

	CUSTOM_MATERIALS.forEach(element => {
		event.create(element.name)
	})
})

StartupEvents.registry("mekanism:slurry", event => {
	SLURRY_TO_CREATE.forEach(element => {
		if (element.id.indexOf('dirty_') >= 0) {
			element.color = element.color ^ 0x010101
			event.create(element.id, 'dirty').color(element.color)
		} else {
			event.create(element.id, 'clean').color(element.color)
		}
	})
})

StartupEvents.registry("mekanism:gas", event => {
    CHEM_ELEMENTS_TO_CREATE.forEach(element => {
		if (element.need_gas) {
			let elb = event.create(element["id"]).color(element["color"])
			if (element.combustion != null && element.combustion > 10) {
				elb.fuel(1, Math.round(0.2797 * element.combustion))
			}
			if (element.radiation > 0) {
				elb.radioactivity(element.radiation)
			}
		}
		if (element.need_superheated) {
			let elb = event.create('superheated_' + element["id"]).color(element["color"]/2)
			if (element.radiation > 0) {
				elb.radioactivity(element.radiation)
			}
			if (element.cooling) {
				elb.coolant(true, element.gas_id, element.cooling.enthalpy, Math.min(1, element.cooling.efficiency))
			}
		}
    })

	CUSTOM_MATERIALS.forEach(element => {
		event.create(element.name).color(element.color)
	})
})

StartupEvents.registry("fluid", event => {
    CHEM_ELEMENTS_TO_CREATE.forEach(element => {
		if (element.need_fluid) {
			let elb = null
			if (element.matter_state == 'solid') {
				elb = event.create(element["id"]).thickTexture(element["color"])
			} else {
				elb = event.create(element["id"]).thinTexture(element["color"])
			}
			
			if (element.temperature > 500) {
				elb.luminosity(Math.round(Math.min(element.temperature / 250 - 1, 15)))
			}
			
			elb.temperature(Math.round(element.temperature - 273))
		}
		if (element.need_superheated) {
			let elb = null
			if (element.matter_state == 'solid') {
				elb = event.create('superheated_' + element["id"]).thickTexture(element["color"])
			} else {
				elb = event.create('superheated_' + element["id"]).thinTexture(element["color"])
			}

			elb.luminosity(Math.round(Math.min(element.temperature / 250 - 1 + 500, 15)))
			elb.temperature(500)
		}
    })

	FLUID_TO_CREATE.forEach(element => {
		const elb = event.create(element["id"]).thickTexture(element["color"])
		if (element.temperature > 500) {
			elb.luminosity(Math.round(Math.min(element.temperature / 250 - 1, 15)))
		}
		elb.temperature(Math.round(element.temperature - 273))
	})

	CUSTOM_MATERIALS.forEach(element => {
		event.create(element.name).thinTexture(element.color)
	})
})

StartupEvents.registry("mekanism:infuse_type", event => {
	event.create("zinc")
		.displayName("Zinc")
		.color(0xccccb5)	
	event.create("nickel")
		.displayName("Nickel")
		.color(0xe8e5c7)	
})

