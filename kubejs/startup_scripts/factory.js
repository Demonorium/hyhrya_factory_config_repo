
StartupEvents.registry('block', event => {
	event.create("kubejs:primitive_reaction_chamber", "custommachinery").machine("handmade:primitive_reaction_chamber").renderType("cutout")
	event.create("kubejs:atmospheric_adsorption_separator", "custommachinery").machine("handmade:atmospheric_adsorption_separator").renderType("cutout")
	event.create("kubejs:advanced_reaction_chamber", "custommachinery").machine("handmade:advanced_reaction_chamber").renderType("cutout")
	event.create("kubejs:precipitation_bath", "custommachinery").machine("handmade:precipitation_bath").renderType("cutout")
	event.create("kubejs:gas_chemical_furnace", "custommachinery").machine("handmade:gas_chemical_furnace").renderType("cutout")
	
})