ServerEvents.recipes((event) => {
	// event.shaped('minecraft:diamond_sword', [
	// 	'S  ',
	// 	' L ',
	// 	'  L'
	// ], {
	// 	S: 'minecraft:iron_sword',
	// 	L: 'minecraft:emerald'
	// }).modifyResult((grid, result) => {
	// 	let item = grid.find(Item.of("minecraft:iron_sword"))
	// 	return result.withNBT(item.nbt)
	// })
	// Upgrade Kit Case

	event.shaped('kubejs:upgrade_kit_case', [
		'SPS',
		'P P',
		'SPS'
	], {
		P: '#c:plates/iron',
		S: 'tfmg:screw'
	});

	// Generic

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 1), [
		'QNQ',
		' C ',
		'QNQ'
	], {
		Q: '#c:ingots/iron',
		N: '#c:stones',
		C: 'kubejs:upgrade_kit_case'
	});

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 3), [
		'QNQ',
		' C ',
		'QNQ'
	], {
		Q: '#c:ingots/steel',
		N: '#c:obsidians',
		C: Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 1)
	});

	// Tools - Speed

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 1), [
		'QNQ',
		' C ',
		' Q '
	], {
		Q: '#c:stones',
		N: '#c:nuggets/iron',
		C: 'kubejs:upgrade_kit_case'
	});

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 3), [
		'QNQ',
		' C ',
		' Q '
	], {
		Q: '#c:gems/quartz',
		N: '#c:nuggets/gold',
		C: Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 1)
	});

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 5), [
		'QNQ',
		' C ',
		' Q '
	], {
		Q: '#c:gems/diamond',
		N: '#c:nuggets/steel',
		C: Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 3)
	});


	// Tools - Luck

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 1), [
		'QNQ',
		' C ',
		' Q ']
		, {
			N: '#c:gems/emerald',
			Q: '#c:gems/lapis',
			C: 'kubejs:upgrade_kit_case'
		})

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 2), [
		'QNQ',
		' C ',
		' Q '
	], {
		N: 'minecraft:prismarine_shard',
		Q: '#c:storage_blocks/lapis',
		C: Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 1)
	})
	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 3), [
		'QNQ',
		' C ',
		' Q '
	], {
		N: '#c:gems/amethyst',
		Q: '#c:storage_blocks/lapis',
		C: Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 2)
	})




	// Tools - Special

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1), [
		'SXS',
		'XCX'
	], {
		X: '#minecraft:wool',
		S: '#c:strings',
		C: 'kubejs:upgrade_kit_case'
	})

	// Weapons - Damage

	// Weapons - Special

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 1), [
		' N ',
		' C ',
		' Q ']
		, {
			N: '#c:gems/emerald',
			Q: '#c:gems/lapis',
			C: 'kubejs:upgrade_kit_case'
		})
	
	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 2), [
		' N ',
		' C ',
		' Q '
	], {
		N: 'minecraft:prismarine_shard',
		Q: '#c:storage_blocks/lapis',
		C: Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 1)
	})

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 3), [
		' N ',
		' C ',
		' Q '
	], {
		N: '#c:gems/amethyst',
		Q: '#c:storage_blocks/lapis',
		C: Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 2)
	})

	// Armor - Protections

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 2), [
		'PPP',
		'XCX'
	], {
		P: '#c:plates/iron',
		X: 'protection_pixel:reinforcedfiber',
		C: 'kubejs:upgrade_kit_case'
	})
	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 4), [
		'PPP',
		'XCX'
	], {
		P: '#c:plates/steel',
		X: 'protection_pixel:reinforcedfiber',
		C: Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 2)
	})

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 2), [
		'PPP',
		'XCX'
	], {
		P: '#c:plates/iron',
		X: '#c:plates/lead',
		C: 'kubejs:upgrade_kit_case'
	})

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 4), [
		'PPP',
		'XCX'
	], {
		P: '#c:plates/steel',
		X: '#c:plates/lead',
		C: Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 2)
	})

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 2), [
		'PPP',
		'XCX'
	], {
		P: '#c:plates/iron',
		X: '#c:chains',
		C: 'kubejs:upgrade_kit_case'
	})

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 4), [
		'PPP',
		'XCX'
	], {
		P: '#c:plates/steel',
		X: '#c:chains',
		C: Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 2)
	})

	//Armor - Special

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:aqua_affinity', 1), [
		'LAL',
		'ACA'
	], {
		A: '#c:nuggets/steel',
		L: 'kubejs:basic_lens',
		C: 'kubejs:upgrade_kit_case'
	})

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', 3), [
		'RXR',
		'RCR'
	], {
		R: '#c:nuggets/copper',
		X: 'create:copper_diving_helmet',
		C: 'kubejs:upgrade_kit_case'
	})

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 1), [
		'SSS',
		'RCR'
	], {
		R: '#c:ingots/rubber',
		S: '#c:strings',
		C: 'kubejs:upgrade_kit_case'
	})


});