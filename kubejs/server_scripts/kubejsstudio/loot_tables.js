// kubejsstudio loot tables; re-apply merges by table id
ServerEvents.generateData('after_mods', event => {
    event.json('lootjs:loot_table/robotic_drops', {"type":"minecraft:chest","random_sequence":"lootjs:robotic_drops","pools":[{"rolls":1.0,"bonus_rolls":0.0,"entries":[{"functions":[{"count":{"min":2.0,"max":5.0,"type":"minecraft:uniform"},"add":false,"function":"minecraft:set_count"}],"name":"minecraft:iron_nugget","weight":10,"type":"minecraft:item"},{"name":"scguns:depleted_energy_core","weight":5,"type":"minecraft:item"},{"name":"minecraft:iron_ingot","weight":5,"type":"minecraft:item"},{"name":"scguns:energy_core","type":"minecraft:item"},{"type":"minecraft:item","name":"kubejs:robotic_ichor_cell","weight":3,"functions":[{"function":"minecraft:set_count","count":2}]}]}]})
})
