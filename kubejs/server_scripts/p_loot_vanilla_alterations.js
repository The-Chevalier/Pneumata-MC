console.info('Regalian Survival Loot Tables VA Added')

//VANILLA MOB DROPS
//!!DO NOT ADD MODDED ENTITIES TO THIS FILE!!

//Robotic Types include:
//Skeleton, Creeper, Skeleton Horse, Wither Skeleton, Stray, Enderman
//N O T E: Iron Golems are exempt from the requirements of this entity type for balance reasons

//Colonist Types include:
//Zombie, Husk, Drowned, Villager

//Fraktan Types include:
//Pillager, Vindicator, Illusioner

//Create Loot Tables here and append them to entities as needed. It's more efficient.

LootJS.lootTables(event => {
    event.create("lootjs:robotic_drops").createPool(pool => {

        pool.addEntry(LootEntry.of("minecraft:iron_nugget")
        .withWeight(10)
        .setCount([2, 5])
        )

        pool.addEntry(LootEntry.of("scguns:depleted_energy_core").withWeight(5))

        pool.addEntry(LootEntry.of("minecraft:iron_ingot").withWeight(5))

        pool.addEntry(LootEntry.of("scguns:energy_core").withWeight(1))
    })

    event.create("lootjs:voideye_addition").createPool(pool => {

        pool.addEntry(LootEntry.of("scguns:peal_dust")
        .withWeight(10)
        .setCount([1, 3])
        )
        pool.addEntry(LootEntry.empty().withWeight(8))

        pool.addEntry(LootEntry.of("scguns:peal").withWeight(5))

        pool.addEntry(LootEntry.empty().withWeight(3))

        pool.addEntry(LootEntry.of("minecraft:ender_eye").withWeight(1))
    })

    event.create("lootjs:strider_eggs").createPool(pool => {

        pool.addEntry(LootEntry.of("mynethersdelight:strider_rock")
        .withWeight(10)
        .setCount([1, 3])
        )
        pool.addEntry(LootEntry.empty().withWeight(8))

        pool.addEntry(LootEntry.of("mynethersdelight:strider_egg").withWeight(5))

        pool.addEntry(LootEntry.empty().withWeight(3))

        pool.addEntry(LootEntry.of("mynethersdelight:strider_rock").withWeight(1))
    })
//----------------------------------------------------------------------------------------
//ROBOTIC TYPES
//All Robotic Types need energy cores and iron type items in their loot tables

//Skeleton AKA Rogue Sentry
//Do Loot Pool Removals

    event.getLootTable("minecraft:entities/skeleton").firstPool().removeItem("minecraft:bone")

    event.getLootTable("minecraft:entities/skeleton").firstPool(pool => {
        pool.addEntry(LootEntry.reference("lootjs:robotic_drops").randomChance(0.8))
    })

//Creeper AKA Demolitionist
    event.getLootTable("minecraft:entities/creeper").firstPool(pool => {
        pool.addEntry(LootEntry.reference("lootjs:robotic_drops").randomChance(0.8))
    })

//Wither Skeleton AKA Abyssal Sentry
//Do Loot Pool Removals
    event.getLootTable("minecraft:entities/wither_skeleton").firstPool().removeItem("minecraft:bone")

    event.getLootTable("minecraft:entities/wither_skeleton").firstPool(pool => {
        pool.addEntry(LootEntry.reference("lootjs:robotic_drops").randomChance(0.8))
    })

//Stray AKA Hiemal Sentry
//Do Loot Pool Removals
    event.getLootTable("minecraft:entities/stray").firstPool().removeItem("minecraft:bone")

    event.getLootTable("minecraft:entities/stray").firstPool(pool => {
        pool.addEntry(LootEntry.reference("lootjs:robotic_drops").randomChance(0.8))
    })

//Skeleton Horse AKA Autosteed
//Do Loot Pool Removals

    event.getLootTable("minecraft:entities/skeleton_horse").firstPool().removeItem("minecraft:bone")

    event.getLootTable("minecraft:entities/skeleton_horse").firstPool(pool => {
        pool.addEntry(LootEntry.reference("lootjs:robotic_drops").randomChance(0.8))
    })

//Enderman, AKA Errant Watcher
    event.getLootTable("minecraft:entities/enderman").firstPool(pool => {
        pool.addEntry(LootEntry.reference("lootjs:voideye_addition").randomChance(0.9))
        pool.addEntry(LootEntry.reference("lootjs:robotic_drops").randomChance(0.8))
    })
   
//----------------------------------------------------------------------------------------
//Strider
    event.getLootTable("minecraft:entities/strider").firstPool(pool => {
        pool.addEntry(LootEntry.reference("lootjs:strider_eggs").randomChance(0.9))
    })
})  