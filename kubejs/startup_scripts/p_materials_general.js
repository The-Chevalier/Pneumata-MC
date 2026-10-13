// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

//This file is for adding items to be used in general gameplay, such as mob drop additions and food items

  StartupEvents.registry('item', event => {
//General Items
	event.create('fraktan_war_club', 'sword').tier('netherite').attackDamageBaseline(10.0).displayName('Fraktan War Club')

	event.create('sentry_sword', 'sword').tier('iron').attackDamageBaseline(6.0).displayName('Sentry Sword')

//Mob Drop Items

	event.create('unpowered_hellion_core')
		.displayName('Unpowered Hellion Core')
		.fireResistant(true)

	event.create('speciality_gullhorn_cut')
		.displayName('Speciality Gullhorn Cut')
		.fireResistant(false)

	event.create('vicious_fangs')
		.displayName('Vicious Fangs')
		.fireResistant(false)

	event.create('niteya_hide')
		.displayName('Niteya Hide')
		.fireResistant(false)

	event.create('gullhorn_hide')
		.displayName('Gullhorn Hide')
		.fireResistant(false)

	event.create('tempered_scales')
		.displayName('§eTempered Scales')
		.fireResistant(false)

	event.create('severed_horn')
		.displayName('§eSevered Horn')
		.fireResistant(false)

//Food Items, Generic

	event.create('packaged_mre')
		.displayName('§ePackaged MRE')
		.tooltip('§7Shelf stable food for long distance travel. §3Meal must be prepared in the inventory')
		.fireResistant(false)

	event.create('minced_velocitrod_meat')
		.displayName('Minced Velocitrod Meat')
		.fireResistant(false)

//Items for Ponder

	event.create('dummy_tetra_hammer')
		.displayName('§eWooden Hammer Prop')

		event.create('dummy_tetra_holo')
		.displayName('§eHolosphere Prop')

	event.create('robotic_types')
		.displayName('§eRobotic Types')

	event.create('fraktan_types')
		.displayName('§eFraktan Types')

	event.create('animal_types')
		.displayName('§eAnimal Types')

	event.create('colonist_types')
		.displayName('§eColonist Types')

//Ores and Metals
//NONE CURRENTLY (Removed the old ones)

//Manufacturing Materials

event.create('void_grit')
		.displayName('§eVoid Grit')
		.tooltip('§7This substance seems to warp whatever it mingles with...')

event.create('morphing_precursor_bucket')
		.displayName('§eMorphing Precursor Bucket')
		.tooltip('§7Matter-altering properties suspended in fluid...')		

event.create('blood_juice_bottle')
		.displayName('§eBlood Juice')

event.create('lens_cast')
		.displayName('Lens Cast')

event.create('steel_disc')
		.displayName('Steel Disc')

event.create('basic_lens')
		.displayName('Basic Lens')

//Chest Cavity Organs
	event.create('fraktan_muscle')
		.maxStackSize(16)
		.displayName('Fraktan Muscle')

	event.create('fraktan_heart')
		.maxStackSize(1)
		.displayName('Fraktan Heart')

	event.create('fraktan_rib')
		.maxStackSize(4)
		.displayName('Fraktan Rib')
//Tetra Module Items

    //Deconstructor Omnitool Part
	event.create('deconstructor_part')
		.displayName('§dDeconstructor Part')

	// upgrade kit paraphernalia
	event.create('upgrade_kit_case')
		.displayName('Upgrade Kit Case')
		.maxStackSize(1);
});



//StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
// Dont really need these anymore
	//General Blocks
//	event.create('fabricator_casing')
//		.material('metal')
//		.textureSide(Direction.UP, 'kubejs:block/fabricator_casing_top')
//		.textureSide(Direction.DOWN, 'kubejs:block/fabricator_casing_bottom')

//	event.create('broken_fabricator')
//		.material('metal')
//		.textureSide(Direction.UP, 'kubejs:block/broken_fabricator_top')
//		.textureSide(Direction.DOWN, 'kubejs:block/broken_fabricator_bottom')

//})

BlockEvents.modification(event => {
	event.modify('minecraft:crafting_table', block => {
	  block.soundType = 'metal'
	})
	//event.modify('minecraft:end_portal_frame', block => {
	//	block.destroySpeed = 3.1
	//	.tagBlock("mineable/pickaxe")
	//	.tagBlock("needs_diamond_tool")
	 // })
})
