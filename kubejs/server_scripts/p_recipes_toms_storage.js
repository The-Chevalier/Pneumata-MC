// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes((event) => {
	// Change recipes here

	//Remove recipes here
	event.remove({output: 'toms_storage:crafting_terminal'}) // Removes default TS Crafting Terminal recipe
	event.remove({output: 'toms_storage:storage_terminal'}) // Removes default TS Storage Terminal recipe
	event.remove({output: 'toms_storage:inventory_connector'}) // Removes default TS Storage Terminal recipe
	event.remove({output: 'toms_storage:inventory_cable'}) // Removes default TS Storage Terminal recipe
	event.remove({output: 'toms_storage:inventory_cable_connector'}) // Removes default TS Storage Terminal recipe
	event.remove({output: 'toms_storage:trim'}) // Removes default TS Trim recipe
	// Crafting Terminal
	event.shaped('toms_storage:crafting_terminal', [
		'cac',
		'dtd',
		'cec'
	], {
		c: '#c:nuggets/iron',
		d: '#c:nuggets/gold',
		t: 'toms_storage:storage_terminal',
		e: 'create:electron_tube',
		a: 'minecraft:glowstone'
	})
	// Storage Terminal
	event.shaped('toms_storage:storage_terminal', [
		'pCp',
		'cGi',
		'pCp'
	], {
		p: '#minecraft:planks',
		C: 'minecraft:comparator',
		c: '#c:chests/wooden',
		G: 'create:andesite_casing',
		i: '#c:ingots/iron'
	})
	//Inventory Connector
	event.shaped('toms_storage:inventory_connector', [
		"MSM",
		"HRH",
		"MSM"
	], {
		M: '#minecraft:planks',
		S: 'create:cogwheel',
		H: 'create:andesite_alloy',
		R: 'create:electron_tube'
	})
	//Inventory Cable
	event.shapeless('16x toms_storage:inventory_cable', ['create:andesite_alloy','#c:dusts/redstone','create:iron_sheet'])
	//Inventory Cable Connector
	event.shaped('toms_storage:inventory_cable_connector', [
		" DP",
		"Ccg",
		" DP"
	], {
		D: '#minecraft:planks',
		P: 'create:cogwheel',
		C: 'toms_storage:inventory_cable',
		c: 'create:andesite_casing',
		g: '#c:nuggets/gold'
	})
	//Inventory Trim
	event.shaped('toms_storage:trim', [
		"MSM",
		"SRS",
		"MSM"
	], {
		M: '#minecraft:planks',
		S: 'create:cogwheel',
		R: 'create:andesite_casing'
	})
})

//ServerEvents.tags((event) => {
	// Get the #c:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #c:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
//})