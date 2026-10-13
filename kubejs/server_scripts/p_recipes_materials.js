console.info('RS Recipes Native')

ServerEvents.recipes((event) => {
	// Change recipes here

    //Lightweight Tough Alloy (Rename it please)
event.recipes.tfmg.vat_machine_recipe(["tfmg:steel_ingot", "tfmg:aluminum_ingot", "chemica:titanium_ingot"], "chemica:lightweight_tough_alloy")
    .superheated() 
    .allowedVatTypes("tfmg:fireproof") 
    .machines("tfmg:graphite_electrode", "tfmg:graphite_electrode", "tfmg:graphite_electrode")
    .processingTime(500)

    //Heat Resistant Tough Alloy (Rename it please)
event.recipes.tfmg.vat_machine_recipe(["chemica:tungsten_ingot", "chemica:vanadium_nugget", "chemica:titanium_dust", "kubejs:void_grit"], "chemica:heat_resistant_tough_alloy")
    .superheated() 
    .allowedVatTypes("tfmg:fireproof") 
    .machines("tfmg:graphite_electrode", "tfmg:graphite_electrode", "tfmg:graphite_electrode")
    .processingTime(500)

    //HRTA to Abysite/Netherite
    event.recipes.create.mixing('minecraft:netherite_ingot', [Fluid.of('kubejs:nanoichor'), '4x chemica:heat_resistant_tough_alloy']).superheated()


//Nanoichor

//Filling and Emptying
event.recipes.create.filling('minecraft:dragon_breath', [Fluid.of('kubejs:nanoichor'), 'minecraft:glass_bottle'])
event.recipes.create.emptying([Fluid.of('kubejs:nanoichor'), 'minecraft:glass_bottle'], 'minecraft:dragon_breath')

//Morphing Precursor
event.recipes.tfmg.vat_machine_recipe(["kubejs:void_grit", Fluid.of('chemica:distilled_water')], Fluid.of('kubejs:morphing_precursor'))
    .heated() 
    .allowedVatTypes("tfmg:steel")
    .machines("tfmg:mixing")
    .processingTime(250)

//Steel Disc
event.recipes.create.cutting('kubejs:steel_disc', 'tfmg:steel_ingot')

//Lens Cast
	event.shaped('kubejs:lens_cast', [
		'XXX',
		'XCX',
        ' X '
	], {
		X: 'minecraft:sand',
		C: 'kubejs:steel_disc'
	})

//Basic Lens
event.recipes.create.filling('kubejs:basic_lens', [Fluid.of('chemica:molten_glass'), 'kubejs:lens_cast'])

//Filling and Emptying
event.recipes.create.filling('kubejs:morphing_precursor_bucket', [Fluid.of('kubejs:morphing_precursor'), 'minecraft:bucket'])
event.recipes.create.emptying([Fluid.of('kubejs:morphing_precursor'), 'minecraft:bucket'], 'kubejs:morphing_precursor_bucket')

event.recipes.create.filling('kubejs:blood_juice_bottle', [Fluid.of('kubejs:blood_juice'), 'minecraft:glass_bottle'])
event.recipes.create.emptying([Fluid.of('kubejs:blood_juice'), 'minecraft:glass_bottle'], 'kubejs:blood_juice_bottle')

//Heated Distilling of Precursor
event.recipes.tfmg.distillation("kubejs:morphing_precursor", ["chemica:waste_slurry", "chemica:aromatic_mix", "kubejs:nanoichor"])

//TFMG Circuit Board Override into PNC Empty PCB
event.recipes.tfmg.vat_machine_recipe(["tfmg:coated_circuit_board", Fluid.of('tfmg:sulfuric_acid', 250)], 
["pneumaticcraft:unassembled_pcb", "pneumaticcraft:unassembled_pcb", "pneumaticcraft:unassembled_pcb", "pneumaticcraft:unassembled_pcb"])
    .machines("tfmg:mixing")
    .processingTime(100)



})