// priority: 0

console.info('RS Recipes 1')

ServerEvents.recipes((event) => {
	// Change recipes here

	//Fireclay Ball
	event.shapeless('6x tfmg:fireclay_ball', ['2x minecraft:clay_ball', '2x chemica:quartz_dust', '2x tfmg:bauxite_powder'])
	//Fireclay Block
	event.shapeless('3x productivemetalworks:fire_clay', ['minecraft:clay', '4x chemica:quartz_dust', '4x tfmg:bauxite_powder'])
	//TFMG Fireproof Bricks from PM Fireclay Bricks
	event.shaped('tfmg:fireproof_bricks', [
		' NP',
		' PN'
	], {
		P: 'productivemetalworks:fire_brick',
		N: 'minecraft:nether_brick'
	})

	//TFMG Casting Basin from PM Fireclay Bricks
	event.shaped('tfmg:casting_basin', [
		'BPB',
		'IBI',
		'III'
	], {
		B: 'productivemetalworks:fire_brick',
		P: 'tfmg:cast_iron_pipe',
		I: 'tfmg:cast_iron_ingot'
	})

	//PNC Minigun Rebalance
	event.shaped('pneumaticcraft:minigun', [
		'L  ',
		'VPB',
		'DC '
	], {
		L: 'minecraft:lever',
		V: 'create:item_vault',
		P: 'pneumaticcraft:reinforced_pressure_tube',
		B: 'pneumaticcraft:cannon_barrel',
		D: 'chemica:steel_based_tough_alloy',
		C: 'pneumaticcraft:air_canister'
	})
	//TFMG fireclay into PM fire bricks
	event.smelting('productivemetalworks:fire_brick', 'tfmg:fireclay')

	//Quartz Dust from Sand
	event.recipes.create.splashing(['2x chemica:quartz_dust', CreateItem.of('2x chemica:quartz_dust', 0.3)], 'minecraft:sand')

	//Deepslate Into Nether Block Materials
	event.recipes.create.crushing([CreateItem.of('minecraft:netherrack', 0.5), CreateItem.of('minecraft:soul_soil', 0.3), CreateItem.of('minecraft:soul_sand', 0.1)], 'minecraft:deepslate')

	//Soul Sand pressed into Soul Soil
	event.recipes.create.pressing('minecraft:soul_soil', 'minecraft:soul_sand')

	//Soul Soil crushed into Soul Sand
	event.recipes.create.crushing('minecraft:soul_sand', 'minecraft:soul_soil')

	//Soul Soil into Netherrack
	event.smelting('minecraft:netherrack', 'minecraft:soul_soil')

	//Millstone Bauxite Powder
	event.recipes.create.milling([CreateItem.of('tfmg:bauxite_powder', 0.5), CreateItem.of('tfmg:bauxite_powder', 0.2)], 'tfmg:bauxite')

	//Voideye Crushed into Void Grit
	//event.recipes.create.crushing('kubejs:void_grit', 'minecraft:ender_eye')

	//Polyvinyl Chloride Sheet into cheaper plastic pipe
	event.shaped('8x tfmg:plastic_pipe', [
		' PP'
	], {
		P: 'chemica:polyvinyl_chloride_sheet'
	})

	//Needles
	//	event.shaped('2x scguns:needle', [
	//	' SS'
	//], {
	//	S: 'tfmg:steel_nugget'
	//})


	//PVC to more plastic conversion
	event.shapeless('4x tfmg:plastic_sheet', 'chemica:polyvinyl_chloride_sheet')

	// mixing tfmg steel
	event.recipes.create.mixing(Fluid.of('tfmg:molten_steel', 144), ['tfmg:limesand', 'minecraft:raw_iron', 'tfmg:coal_coke_dust']).heated();

	// basalt
	event.recipes.create.mixing('minecraft:basalt', [Fluid.of('minecraft:lava', 500), 'chemica:quartz_dust', 'minecraft:cobbled_deepslate']).heated();

	// graphene
	event.recipes.create.compacting('chemica:electrochemically_exfoliated_graphene', '3x createaddition:diamond_grit').superheated();

	event.recipes.create.compacting('chemica:carbon_fiber_composite_sheet', '5x chemica:electrochemically_exfoliated_graphene').superheated();

	event.shaped('scguns:diamond_bayonet', [
		' I',
		'S '
	], {
		I: 'chemica:lightweight_tough_alloy',
		S: '#forge:rods/wooden'
	}
	)

  event.recipes.create.pressing('scguns:anthralite_nugget', 'minecraft:coal')

//Plastic Unification
  event.replaceInput(
  { input: 'pneumaticcraft:plastic' },         // Arg 1: the filter
  'pneumaticcraft:plastic',                    // Arg 2: the item to replace
  Ingredient.of('#c:ingots/plastic')  // Arg 3: the item to replace it with 
  // Do /kjs hand with the items you want to use to see all their tags.
)

event.replaceInput(
  { input: 'tfmg:plastic_sheet' },         // Arg 1: the filter
  'tfmg:plastic_sheet',                    // Arg 2: the item to replace
  Ingredient.of('#c:ingots/plastic')  // Arg 3: the item to replace it with 
  // Do /kjs hand with the items you want to use to see all their tags.
)

//Circuit Board Unification
event.replaceInput(
  { input: 'tfmg:circuit_board' },         // Arg 1: the filter
  'tfmg:circuit_board',                    // Arg 2: the item to replace
  Ingredient.of('pneumaticcraft:printed_circuit_board')  // Arg 3: the item to replace it with 
  // Do /kjs hand with the items you want to use to see all their tags.
)

//PMW Melting TFMG Plastic into PNC Molten Plastic
PMW.melt(event, 'tfmg:plastic_sheet', 'pneumaticcraft:plastic', 1000, 1000, 0, 1200)

//Black Ice Infused Sail for Nether Washing
	event.shaped(Item.of('dndesires:splashing_sail', 4), [
		'WIW',
		'ISI',
		'WIW'
	], {
		W: 'create:sail_frame',
		I: 'netherexp:black_ice',
		S: 'minecraft:soul_sand'
	})

//PNC Minigun Ammo
	event.shapeless('pneumaticcraft:gun_ammo', ['2x minecraft:copper_ingot', '2x scguns:sheol', '2x scguns:depleted_diamond_steel_ingot'])

//Voideye into Void Grit
	event.recipes.create.crushing('kubejs:void_grit', 'minecraft:ender_eye')
//Voideye from Void Pearl
	event.shaped('minecraft:ender_eye', [
		' N ',
		'NPN',
		' N '
	], {
		P: 'minecraft:ender_pearl',
		N: 'scguns:peal'
	})
//Grappling Hook From Silent Gear Pickaxe Head
event.shapeless('grapplemod:grapplinghook', ['minecraft:lead', 'silentgear:pickaxe_head'])
//-----------------------------------------------
//SCORCHED GUNS FLARES
//Making a separate section to keep track of them

	event.shaped('scguns:antique_flare', [
		' N ',
		'NSN',
		'NGN'
	], {
		S: 'minecraft:redstone', //Main thematic component
		N: '#c:plates/copper', //Flare casing component
		G: 'minecraft:gunpowder' //The fuel for the flare
	})

	event.shaped('scguns:frontier_flare', [
		' N ',
		'NSN',
		'NGN'
	], {
		S: '#c:dusts/gold', //Main thematic component
		N: '#c:plates/iron', //Flare casing component
		G: 'minecraft:gunpowder' //The fuel for the flare
	})

	event.shaped('scguns:copper_flare', [
		' N ',
		'NSN',
		'NGN'
	], {
		S: '#c:dusts/copper', //Main thematic component
		N: '#c:plates/copper', //Flare casing component
		G: 'minecraft:gunpowder' //The fuel for the flare
	})	

	event.shaped('scguns:iron_flare', [
		' N ',
		'NSN',
		'NGN'
	], {
		S: '#c:dusts/coal', //Main thematic component
		N: '#c:plates/iron', //Flare casing component
		G: 'minecraft:gunpowder' //The fuel for the flare
	})		

	event.shaped('scguns:wrecker_flare', [
		' T ',
		'NSN',
		'NGN'
	], {
		S: '#c:dusts/phosphorus', //Main thematic component
		N: '#c:plates/steel', //Flare casing component
		G: 'minecraft:gunpowder', //The fuel for the flare
		T: 'scguns:treated_iron_ingot' //Tipped part for more advanced flares
	})

	event.shaped('scguns:gold_flare', [
		' T ',
		'NSN',
		'NGN'
	], {
		S: '#c:dusts/sulfur', //Main thematic component
		N: '#c:plates/gold', //Flare casing component
		G: 'minecraft:gunpowder', //The fuel for the flare
		T: '#c:ingots/electrum' //Tipped part for more advanced flares
	})	

	event.shaped('scguns:diamond_steel_flare', [
		' T ',
		'NSN',
		'NGN'
	], {
		S: 'create:experience_nugget', //Main thematic component
		N: 'scguns:depleted_diamond_steel_ingot', //Flare casing component
		G: 'minecraft:gunpowder', //The fuel for the flare
		T: '#c:gems/diamond' //Tipped part for more advanced flares
	})	

	event.shaped('scguns:treated_brass_flare', [
		' T ',
		'NSN',
		'NGN'
	], {
		S: 'minecraft:blaze_powder', //Main thematic component
		N: 'scguns:treated_brass_ingot', //Flare casing component
		G: 'minecraft:gunpowder', //The fuel for the flare
		T: '#c:ingots/iron' //Tipped part for more advanced flares
	})		

	event.shaped('scguns:ocean_flare', [
		' T ',
		'NSN',
		'NGN'
	], {
		S: 'minecraft:nautilus_shell', //Main thematic component
		N: 'minecraft:prismarine_shard', //Flare casing component
		G: 'minecraft:gunpowder', //The fuel for the flare
		T: 'minecraft:prismarine_crystals' //Tipped part for more advanced flares
	})	

	event.shaped('scguns:sculk_flare', [
		' T ',
		'NSN',
		'NGN'
	], {
		S: 'minecraft:sculk', //Main thematic component
		N: '#c:ingots/tungsten', //Flare casing component
		G: 'minecraft:gunpowder', //The fuel for the flare
		T: 'minecraft:sculk_shrieker' //Tipped part for more advanced flares
	})

//Black Ice into Water	
event.recipes.pneumaticcraft.thermo_plant({
    inputs: { item: { amount: 1, item: 'netherexp:black_ice' }},
    outputs: { fluid_output: { amount: 500, id: 'minecraft:water' } },
    pressure: -0.9,
    temperature: { min: 0}
}).id('kubejs:thermo/netherwater')

	//Nether Dough
	event.shapeless('mynethersdelight:ghast_dough', ['mynethersdelight:strider_egg', 'minecraft:nether_wart'])

	//Nether Slime
	event.shapeless('minecraft:slime_ball', ['mynethersdelight:ghast_dough', 'minecraft:green_dye'])

	//Thin Black Ice from Soul Magma
	event.recipes.create.splashing('netherexp:thin_black_ice', 'netherexp:soul_magma_block')

	//Thin Black Ice into Black Ice
	event.shaped('netherexp:black_ice', [
		'II',
		'II'
	], {
		I: 'netherexp:thin_black_ice'
	})	

//Cactus from Nether
 event.recipes.create.haunting('minecraft:cactus', 'minecraft:warped_stem')

//Netherexp Silt into random materials 
event.recipes.create.milling(
	[CreateItem.of('minecraft:gold_nugget', 0.05), 
		CreateItem.of('minecraft:iron_nugget', 0.05), 
		CreateItem.of('create:copper_nugget', 0.05), 
		CreateItem.of('create:zinc_nugget', 0.05)], 
		'netherexp:silt') 
})