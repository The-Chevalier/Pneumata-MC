ServerEvents.recipes((event) => {
	event.shaped('minecraft:diamond_sword', [
			'S  ',
			' L ',
			'  L'
		], {
			S: 'minecraft:iron_sword',
			L: 'minecraft:emerald'
		}).modifyResult((grid, result) => {
		let item = grid.find(Item.of("minecraft:iron_sword"))
		return result.withNBT(item.nbt)
	})

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 1), [
			'SXS',
			'XCX'
		], {
			X: 'create:iron_sheet',
			S: 'chemica:magnesium_dust',
			C: 'kubejs:upgrade_kit_case'
	})

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 1), [
			'XXX',
			'SCS'
		], {
			X: 'tfmg:steel_ingot',
			S: 'chemica:lightweight_tough_alloy',
			C: 'kubejs:upgrade_kit_case'
	})

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1), [
			'SXS',
			'XCX'
		], {
			X: 'minecraft:white_wool',
			S: 'minecraft:string',
			C: 'kubejs:upgrade_kit_case'
	})

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 1), [
			'SSS',
			'RCR'
		], {
			R: 'tfmg:rubber_sheet',
			S: 'minecraft:string',
			C: 'kubejs:upgrade_kit_case'
	})

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 1), [
			'SAS',
			'ACA'
		], {
			A: 'minecraft:chain',
			S: 'minecraft:string',
			C: 'kubejs:upgrade_kit_case'
	})

	event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:aqua_affinity', 1), [
			'LAL',
			'ACA'
		], {
			A: 'tfmg:steel_nugget',
			L: 'kubejs:basic_lens',
			C: 'kubejs:upgrade_kit_case'
	})

	event.shaped('kubejs:upgrade_kit_case', [
		'SPS',
		'P P',
		'SPS'
	], {
		P: 'create:iron_sheet',
		S: 'tfmg:screw'
	});
});