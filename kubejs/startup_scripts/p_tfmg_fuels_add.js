TFMGEvents.registerEngineFuel(event => {
    // This is the ID of the engine fuel, remember this for the server script.
    // Internally, this will be kubejs:water
    // Lang keys go by "engine_fuel.<namespace>.<path>", so this will be "engine_fuel.kubejs.water"
    // TFMGJS will automatically create the lang key, and this will show up as "Water"
    event.create("steam")
        // This is where you tell TFMGJS what items can use this fuel id
        // This can also be a list of items
        .accepts("kubejs:steam_engine_cylinder")
})
