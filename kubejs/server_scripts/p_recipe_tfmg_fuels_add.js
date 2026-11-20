TFMGEvents.engineFuel(event => {
    // Use the same ID as from the startup script
    event.fuel("steam")
        // A list of fluids and fluid tags are also accepted
        // ["magic_mod:rainbow_fluid", "some_mod:evil_fluid"]
        // #namespace:special_fuel
        .fluids("embers:steam")
        // Instead of carbon dioxide as an exhaust, other fluids can be used
        .exhaust("minecraft:water")
        // Speed modifier
        .speed(1.5)
        // Efficiency modifier (affects fuel consumption)
        .efficiency(1.0)
        // Torque modifier (affects Stress Units)
        .torque(3.0)
})
