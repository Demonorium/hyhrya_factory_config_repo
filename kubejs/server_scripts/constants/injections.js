// priority: 3
const CUSTOM_RECIPES_FIX_INJECTIONS = [
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:yttrium_dust",
			},
		},
		output: {
			item: "chemlib:yttrium_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:yttrium_iii_oxide_dust",
			},
		},
		output: {
			item: "chemlib:yttrium_hydroxide_dust",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 2.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:europium_ii_oxide_dust",
			},
		},
		output: {
			item: "chemlib:europium_iii_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:europium_iii_oxide_dust",
			},
		},
		output: {
			item: "chemlib:europium_iii_hydroxide_dust",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:zirconium_dioxide_dust",
			},
		},
		output: {
			item: "chemlib:zirconium_oxyhydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 2.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:zirconium_dust",
			},
		},
		output: {
			item: "chemlib:zirconium_dioxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:neodymium_dust",
			},
		},
		output: {
			item: "chemlib:neodymium_iii_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 2.0,
			ingredient: {
				item: "moremekanismprocessing:dust_aluminum",
			},
		},
		output: {
			item: "chemlib:aluminum_oxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:magnesium_oxide_dust",
			},
		},
		output: {
			item: "chemlib:magnesium_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "mekanism:dust_sulfur",
			},
		},
		output: {
			item: "chemlib:hydrogen_sulfide",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 2.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "mekanism:dust_tin",
			},
		},
		output: {
			item: "chemlib:tin_oxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:sugar",
			},
		},
		output: {
			item: "chemlib:ethanol",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:zinc_oxide_dust",
			},
		},
		output: {
			item: "chemlib:zinc_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:iron_ii_oxide_dust",
			},
		},
		output: {
			item: "chemlib:iron_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 2.0,
			ingredient: {
				item: "moremekanismprocessing:dust_bismuth",
			},
		},
		output: {
			item: "chemlib:bismuth_iii_oxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "moremekanismprocessing:dust_zinc",
			},
		},
		output: {
			item: "chemlib:zinc_oxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:sodium_hydroxide_dust",
			},
		},
		output: {
			item: "chemlib:sodium_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 2.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:manganese_dust",
			},
		},
		output: {
			item: "chemlib:manganese_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:cobalt_ii_oxide_dust",
			},
		},
		output: {
			item: "chemlib:cobalt_ii_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:barium_oxide_dust",
			},
		},
		output: {
			item: "chemlib:barium_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:copper_ii_oxide_dust",
			},
		},
		output: {
			item: "chemlib:copper_ii_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:sulfur_dioxide",
			},
		},
		output: {
			item: "chemlib:sulfur_trioxide",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 2.0,
			ingredient: {
				item: "mekanism:dust_lithium",
			},
		},
		output: {
			item: "chemlib:lithium_oxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:sodium_carbonate_dust",
			},
		},
		output: {
			item: "chemlib:sodium_hydroxide_dust",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:rubidium_oxide_dust",
			},
		},
		output: {
			item: "chemlib:rubidium_hydroxide_dust",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "thermal:nickel_dust",
			},
		},
		output: {
			item: "chemlib:nickel_oxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "mekanism:dust_iron",
			},
		},
		output: {
			item: "chemlib:iron_ii_oxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:sodium_dust",
			},
		},
		output: {
			item: "chemlib:sodium_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:potassium_carbonate_dust",
			},
		},
		output: {
			item: "chemlib:potassium_hydroxide_dust",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 2.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:strontium_dust",
			},
		},
		output: {
			item: "chemlib:strontium_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:lithium_oxide_dust",
			},
		},
		output: {
			item: "chemlib:lithium_hydroxide_dust",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 2.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "moremekanismprocessing:dust_cobalt",
			},
		},
		output: {
			item: "chemlib:cobalt_ii_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:carbon_monoxide",
			},
		},
		output: {
			item: "chemlib:formic_acid",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:sulfur_trioxide",
			},
		},
		output: {
			item: "chemlib:sulfuric_acid",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 2.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:silicon_dust",
			},
		},
		output: {
			item: "chemlib:silicon_dioxide",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:azanide",
			},
		},
		output: {
			item: "chemlib:ammonia",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "mekanismelements:dust_calcium_oxide",
			},
		},
		output: {
			item: "chemlib:calcium_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 2.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:potassium_dust",
			},
		},
		output: {
			item: "chemlib:potassium_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 2.0,
			ingredient: {
				item: "chemlib:nitrogen_dioxide",
			},
		},
		output: {
			item: "chemlib:ammonia",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 7.0,
		},
		itemInput: {
			amount: 6.0,
			ingredient: {
				item: "chemlib:carbon_dioxide",
			},
		},
		output: {
			item: "chemlib:hexane",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:rubidium_dust",
			},
		},
		output: {
			item: "chemlib:rubidium_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:beryllium_dust",
			},
		},
		output: {
			item: "chemlib:beryllium_oxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 4.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:lead_sulfide_dust",
			},
		},
		output: {
			item: "chemlib:lead_sulfate_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 2.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:carbon_trioxide",
			},
		},
		output: {
			item: "chemlib:carbonic_acid",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:phosgene",
			},
		},
		output: {
			item: "chemlib:hydrochloric_acid",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 2.0,
			ingredient: {
				item: "chemlib:nitrogen",
			},
		},
		output: {
			item: "chemlib:ammonia",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:ozone",
			},
		},
		output: {
			item: "chemlib:hydrogen_peroxide",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 2.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:chlorine",
			},
		},
		output: {
			item: "chemlib:chlorine",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 2.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:calcium_dust",
			},
		},
		output: {
			item: "chemlib:calcium_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:barium_dust",
			},
		},
		output: {
			item: "chemlib:barium_oxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "mekanism:dust_copper",
			},
		},
		output: {
			item: "chemlib:copper_ii_oxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 4.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:phosphorus_dust",
			},
		},
		output: {
			item: "chemlib:phosphoric_acid_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:potassium_oxide_dust",
			},
		},
		output: {
			item: "chemlib:potassium_hydroxide_dust",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:sodium_sulfite_dust",
			},
		},
		output: {
			item: "chemlib:sodium_sulfate_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:magnesium_carbonate_dust",
			},
		},
		output: {
			item: "chemlib:magnesium_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:sodium_oxide_dust",
			},
		},
		output: {
			item: "chemlib:sodium_hydroxide_dust",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:ethylene",
			},
		},
		output: {
			item: "chemlib:ethanol",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 2.0,
		},
		itemInput: {
			amount: 2.0,
			ingredient: {
				item: "chemlib:carbon_dust",
			},
		},
		output: {
			item: "chemlib:methane",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 2.0,
			ingredient: {
				item: "chemlib:bromine",
			},
		},
		output: {
			item: "chemlib:hydrogen_bromide",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:aluminum_oxide_dust",
			},
		},
		output: {
			item: "chemlib:aluminum_hydroxide_dust",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:beryllium_oxide_dust",
			},
		},
		output: {
			item: "chemlib:beryllium_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 2.0,
			ingredient: {
				item: "chemlib:nitric_oxide",
			},
		},
		output: {
			item: "chemlib:ammonia",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "moremekanismprocessing:dust_magnesium",
			},
		},
		output: {
			item: "chemlib:magnesium_oxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:urea_dust",
			},
		},
		output: {
			item: "chemlib:ammonia",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:nitric_acid",
			},
		},
		output: {
			item: "chemlib:ammonia",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:gold_iii_oxide_dust",
			},
		},
		output: {
			item: "mekanism:dust_gold",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 2.0,
			ingredient: {
				item: "chemlib:chromium_dust",
			},
		},
		output: {
			item: "chemlib:chromium_oxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:ammonia",
			},
		},
		output: {
			item: "chemlib:ammonium",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 2.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:acetylene",
			},
		},
		output: {
			item: "chemlib:ethane",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 2.0,
			ingredient: {
				item: "chemlib:europium_dust",
			},
		},
		output: {
			item: "chemlib:europium_iii_oxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "mekanism:dust_lead",
			},
		},
		output: {
			item: "chemlib:lead_oxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:cesium_dust",
			},
		},
		output: {
			item: "chemlib:cesium_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 2.0,
			ingredient: {
				item: "chemlib:fluorine",
			},
		},
		output: {
			item: "chemlib:hydrofluoric_acid",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:acetic_anhydride",
			},
		},
		output: {
			item: "chemlib:acetic_acid",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:phosphorus_pentoxide_dust",
			},
		},
		output: {
			item: "chemlib:phosphoric_acid_dust",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:manganese_ii_oxide_dust",
			},
		},
		output: {
			item: "chemlib:manganese_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:silicon_dioxide",
			},
		},
		output: {
			item: "chemlib:metasilicic_acid",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:strontium_oxide_dust",
			},
		},
		output: {
			item: "chemlib:strontium_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 2.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:carbon_disulfide",
			},
		},
		output: {
			item: "chemlib:hydrogen_sulfide",
			count: 2.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 3.0,
		},
		itemInput: {
			amount: 2.0,
			ingredient: {
				item: "chemlib:antimony_dust",
			},
		},
		output: {
			item: "chemlib:antimony_trioxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:water_vapor",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "chemlib:calcium_carbonate_dust",
			},
		},
		output: {
			item: "chemlib:calcium_hydroxide_dust",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:dead_fire_coral_block",
			},
		},
		output: {
			item: "minecraft:sponge",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:dead_fire_coral_block",
			},
		},
		output: {
			item: "minecraft:sponge",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:dead_horn_coral_block",
			},
		},
		output: {
			item: "minecraft:sponge",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:dead_horn_coral_block",
			},
		},
		output: {
			item: "minecraft:sponge",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:dead_tube_coral_block",
			},
		},
		output: {
			item: "minecraft:sponge",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:dead_tube_coral_block",
			},
		},
		output: {
			item: "minecraft:sponge",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:dead_brain_coral_block",
			},
		},
		output: {
			item: "minecraft:sponge",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:dead_brain_coral_block",
			},
		},
		output: {
			item: "minecraft:sponge",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:dead_bubble_coral_block",
			},
		},
		output: {
			item: "minecraft:sponge",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:dead_bubble_coral_block",
			},
		},
		output: {
			item: "minecraft:sponge",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:wet_sponge",
			},
		},
		output: {
			item: "minecraft:sponge",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:tube_coral_block",
			},
		},
		output: {
			item: "minecraft:dead_tube_coral_block",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:tube_coral_block",
			},
		},
		output: {
			item: "minecraft:dead_tube_coral_block",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:brain_coral_block",
			},
		},
		output: {
			item: "minecraft:dead_brain_coral_block",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:brain_coral_block",
			},
		},
		output: {
			item: "minecraft:dead_brain_coral_block",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:bubble_coral_block",
			},
		},
		output: {
			item: "minecraft:dead_bubble_coral_block",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:bubble_coral_block",
			},
		},
		output: {
			item: "minecraft:dead_bubble_coral_block",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:fire_coral_block",
			},
		},
		output: {
			item: "minecraft:dead_fire_coral_block",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:fire_coral_block",
			},
		},
		output: {
			item: "minecraft:dead_fire_coral_block",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:horn_coral_block",
			},
		},
		output: {
			item: "minecraft:dead_horn_coral_block",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "minecraft:horn_coral_block",
			},
		},
		output: {
			item: "minecraft:dead_horn_coral_block",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:tube_coral",
			},
		},
		output: {
			item: "minecraft:dead_tube_coral",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:tube_coral",
			},
		},
		output: {
			item: "minecraft:dead_tube_coral",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:brain_coral",
			},
		},
		output: {
			item: "minecraft:dead_brain_coral",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:brain_coral",
			},
		},
		output: {
			item: "minecraft:dead_brain_coral",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:bubble_coral",
			},
		},
		output: {
			item: "minecraft:dead_bubble_coral",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:bubble_coral",
			},
		},
		output: {
			item: "minecraft:dead_bubble_coral",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:fire_coral",
			},
		},
		output: {
			item: "minecraft:dead_fire_coral",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:fire_coral",
			},
		},
		output: {
			item: "minecraft:dead_fire_coral",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:horn_coral",
			},
		},
		output: {
			item: "minecraft:dead_horn_coral",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:horn_coral",
			},
		},
		output: {
			item: "minecraft:dead_horn_coral",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:tube_coral_fan",
			},
		},
		output: {
			item: "minecraft:dead_tube_coral_fan",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:tube_coral_fan",
			},
		},
		output: {
			item: "minecraft:dead_tube_coral_fan",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:brain_coral_fan",
			},
		},
		output: {
			item: "minecraft:dead_brain_coral_fan",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:brain_coral_fan",
			},
		},
		output: {
			item: "minecraft:dead_brain_coral_fan",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:bubble_coral_fan",
			},
		},
		output: {
			item: "minecraft:dead_bubble_coral_fan",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:bubble_coral_fan",
			},
		},
		output: {
			item: "minecraft:dead_bubble_coral_fan",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:fire_coral_fan",
			},
		},
		output: {
			item: "minecraft:dead_fire_coral_fan",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:fire_coral_fan",
			},
		},
		output: {
			item: "minecraft:dead_fire_coral_fan",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "kubejs:calcium_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:horn_coral_fan",
			},
		},
		output: {
			item: "minecraft:dead_horn_coral_fan",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanismelements:ammonium_nitrate",
			amount: 1.0,
		},
		itemInput: {
			amount: 4.0,
			ingredient: {
				item: "minecraft:horn_coral_fan",
			},
		},
		output: {
			item: "minecraft:dead_horn_coral_fan",
			count: 4.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:hydrogen_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "mekanism_extras:crystal_naquadah",
			},
		},
		output: {
			item: "mekanism_extras:shard_naquadah",
			count: 1.0,
		},
	},
	{
		type: "mekanism:injecting",
		chemicalInput: {
			gas: "mekanism:hydrogen_chloride",
			amount: 1.0,
		},
		itemInput: {
			amount: 1.0,
			ingredient: {
				item: "moremekanismprocessing:crystal_calorite",
			},
		},
		output: {
			item: "moremekanismprocessing:shard_calorite",
			count: 1.0,
		},
	},
]