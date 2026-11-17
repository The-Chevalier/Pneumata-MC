// kubejsstudio custom: kubejsstudio:advanced_pressure_tube
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/advanced_pressure_tube',
      {
        "type": "kubejs:shaped",
        "result": {"id":"pneumaticcraft:advanced_pressure_tube","count":4},
        "pattern": ["#A#","ABA","#A#"],
        "key": {
          "A": {"item":"create:industrial_iron_block"},
          "B": {"item":"pneumaticcraft:reinforced_pressure_tube"},
          "#": {"tag":"c:rods/steel"}
        },
        "_kubejs_changed_marker": {
          "source": "server_scripts:kubejsstudio/recipes.js",
          "line": 37
        }
      }
    )
})
// kubejsstudio custom: kubejs:pmw/item_casting/kubejs_molten_cast_iron_to_tfmg_cast_iron_nugget
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejs:recipe/pmw/item_casting/kubejs_molten_cast_iron_to_tfmg_cast_iron_nugget',
      {
        "type": "productivemetalworks:item_casting",
        "cast": {"item":"productivemetalworks:nugget_cast"},
        "consume_cast": false,
        "fluid": {"fluid":"kubejs:molten_cast_iron","amount":9},
        "result": {"id":"tfmg:cast_iron_nugget","count":1},
        "_kubejs_changed_marker": {"source":"","line":0}
      }
    )
})
// kubejsstudio custom: chemica:vat_machine_recipe/vat_reaction/steam
ServerEvents.generateData('after_mods', event => {
    event.json(
      'chemica:recipe/vat_machine_recipe/vat_reaction/steam',
      {
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
          "tfmg:cast_iron_vat",
          "tfmg:steel_vat",
          "tfmg:firebrick_lined_vat"
        ],
        "heat_requirement": "superheated",
        "ingredients": [
          {
            "type": "neoforge:single",
            "amount": 1000,
            "fluid": "minecraft:water"
          }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 350,
        "results": [
          {"amount":500,"id":"embers:steam"},
          {"amount":500,"id":"minecraft:water"}
        ]
      }
    )
})
