// priority: 0

console.info('RS Recipes 1')

ServerEvents.recipes((event) => {
	// Change recipes here

	// Blaze Burner
	event.shaped('create:blaze_burner', [
		' M ',
		' I ',
		' B '
	], {
		B: 'create:empty_blaze_burner',
		I: 'kubejs:unpowered_hellion_core',
		M: 'scguns:energy_core'
	})

	// Prismarine Shards from Block Prismarine
	event.shapeless(
		Item.of('minecraft:prismarine_shard', 4),
		[
			'minecraft:prismarine'
		]
	)

	// Prismarine Crystals from Shard and Glowstone
	event.shapeless(
		Item.of('minecraft:prismarine_crystals', 2),
		[
			'minecraft:prismarine_shard',
			'#c:dusts/glowstone'
		])

	// Turtle Helmet (Improvised Diving Helmet)
	event.shaped(
		Item.of('minecraft:turtle_helmet', 1),
		[
			'   ',
			'XXX',
			'XCX'
		], {
		X: 'minecraft:turtle_scute',
		C: 'minecraft:chainmail_helmet'
	})

	// Craftable Wither Skeleton Skull
	//Make this use the pressure chamber
	//event.shaped(
	//	Item.of('minecraft:wither_skeleton_skull', 1), 
	//[
	//	'SAS',
	//	'H H',
	//	'SAS'
	//], {
	//	S: 'tetra:metal_scrap',
	//	A: '#c:nuggets/gold',
	//	H: '#c:dusts/glowstone'
	//})

	// Leather from Niteya Hide
	event.shapeless(
		Item.of('minecraft:leather', 2),
		[
			'2x kubejs:niteya_hide'
		])

	// Leather from Gullhorn Hide
	event.shapeless(
		Item.of('minecraft:leather'),
		[
			'1x kubejs:gullhorn_hide'
		])

	// Azure Bluet > Green Firebulb
	event.shapeless(
		Item.of('minecraft:green_dye'),
		[
			'1x minecraft:azure_bluet'
		])

	// Beef Gullington
	event.recipes.createMixing('kubejs:beef_gullington', [
		'kubejs:speciality_gullhorn_cut',
		'create:dough',
	]).heated()

	//Leather from Rotten Flesh
	event.smelting('minecraft:leather', 'minecraft:rotten_flesh')

	//Name Tag
	event.shaped(
		Item.of('minecraft:name_tag'),
		[
			'S  ',
			' L ',
			'  L'
		], {
		S: 'minecraft:string',
		L: 'minecraft:leather'
	})
	//Saddle
	event.shaped(
		Item.of('minecraft:saddle'),
		[
			'LLL',
			'L L',
			'I I'
		], {
		I: 'minecraft:iron_ingot',
		L: 'minecraft:leather'
	})

	//Smelt Iron Sheet into Iron Ingot
	event.smelting('minecraft:iron_ingot', 'create:iron_sheet')

	//Packaged MRE to Heated MRE
	event.shapeless(Item.of('kubejs:heated_mre'),
		[
			'kubejs:packaged_mre'
		])

	event.recipes.create.milling('minecraft:green_dye', 'minecraft:azure_bluet')

	//Minced Velocitrod Meat
	event.recipes.createCrushing([
		'1x kubejs:minced_velocitrod_meat',
		CreateItem.of('1x kubejs:minced_velocitrod_meat', 0.5)
	], 'minecraft:chicken')

	// Trod Tot
	event.shapeless(Item.of('kubejs:trod_tot', 6),
		[
			'1x kubejs:minced_velocitrod_meat',
			'1x minecraft:egg',
			'1x create:wheat_flour'
		])

	// carbon helmet
	event.shaped(Item.of('minecraft:diamond_helmet'),
		[
			'CCC',
			'CSC'
		], {
		C: 'chemica:carbon_fiber_composite_sheet',
		S: 'minecraft:iron_helmet'
	});

	// carbon chestplate
	event.shaped(Item.of('minecraft:diamond_chestplate'),
		[
			'C C',
			'CSC',
			'CCC'
		], {
		C: 'chemica:carbon_fiber_composite_sheet',
		S: 'minecraft:iron_chestplate'
	});

	// carbon leggings
	event.shaped(Item.of('minecraft:diamond_leggings'),
		[
			'CSC',
			'C C',
			'C C'
		], {
		C: 'chemica:carbon_fiber_composite_sheet',
		S: 'minecraft:iron_leggings'
	});

	// carbon boots
	event.shaped(Item.of('minecraft:diamond_boots'),
		[
			'C C',
			'CSC'
		], {
		C: 'chemica:carbon_fiber_composite_sheet',
		S: 'minecraft:iron_boots'
	});

	//End Portal Frame
	event.shaped(
		Item.of('minecraft:end_portal_frame', 12),
		[
			'XPX',
			'P P',
			'XPX'
		], {
		X: 'tfmg:steel_pipe',
		P: 'minecraft:netherite_ingot'
	})


	//Nether Mushroom Stew
	event.shapeless(Item.of('minecraft:mushroom_stew'),
		[
			'minecraft:bowl',
			'minecraft:crimson_fungus',
			'minecraft:crimson_fungus'
		])

	// Gilded blackstone
	ServerEvents.recipes(event => {
		event.shaped('minecraft:gilded_blackstone', ['AAA', 'ABA', 'AAA'], {
			A: '#chipped:blackstone',
			B: 'minecraft:gold_nugget'
		})
	})
})