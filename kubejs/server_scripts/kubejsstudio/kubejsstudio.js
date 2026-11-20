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
// kubejsstudio custom: chemica:distillation/air
ServerEvents.generateData('after_mods', event => {
    event.json(
      'chemica:recipe/distillation/air',
      {
        "type": "tfmg:distillation",
        "ingredients": [
          {"type":"neoforge:single","amount":1000,"fluid":"tfmg:air"}
        ],
        "results": [
          {"amount":10,"id":"minecraft:water"},
          {"amount":10,"id":"chemica:helium"},
          {"amount":760,"id":"chemica:nitrogen"},
          {"amount":20,"id":"chemica:argon"},
          {"amount":210,"id":"chemica:oxygen"}
        ]
      }
    )
})
// kubejsstudio custom: sophisticatedbackpacks:backpack
ServerEvents.generateData('after_mods', event => {
    event.json(
      'sophisticatedbackpacks:recipe/backpack',
      {
        "neoforge:conditions": [
          {
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:backpack"
          }
        ],
        "type": "sophisticatedbackpacks:basic_backpack",
        "category": "misc",
        "key": {
          "C": {"tag":"c:chests/wooden"},
          "L": {"tag":"c:backpack_fibers"},
          "S": {"tag":"c:strings"}
        },
        "pattern": ["SLS","SCS","LLL"],
        "result": {"count":1,"id":"sophisticatedbackpacks:backpack"}
      }
    )
})
// kubejsstudio custom: productivemetalworks:melting/gems/diamond
ServerEvents.generateData('after_mods', event => {
    event.json(
      'productivemetalworks:recipe/melting/gems/diamond',
      {
        "type": "productivemetalworks:item_melting",
        "ingredient": {"tag":"c:gems/diamond"},
        "maximum_temperature": 0,
        "minimum_temperature": 1000,
        "result": [{"amount":1000,"id":"productivemetalworks:molten_carbon"}]
      }
    )
})
// kubejsstudio custom: productivemetalworks:melting/diamond_horse_armor
ServerEvents.generateData('after_mods', event => {
    event.json(
      'productivemetalworks:recipe/melting/diamond_horse_armor',
      {
        "type": "productivemetalworks:item_melting",
        "ingredient": {"item":"minecraft:diamond_horse_armor"},
        "maximum_temperature": 0,
        "minimum_temperature": 1000,
        "result": [{"amount":600,"id":"productivemetalworks:molten_carbon"}]
      }
    )
})
// kubejsstudio custom: kubejsstudio:cracking/common_geode
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/cracking/common_geode',
      {
        "type": "farmersdelight:cutting",
        "ingredients": [{"item":"kubejs:common_geode"}],
        "tool": [
          {"type":"farmersdelight:item_ability","action":"knife_dig"},
          {"tag":"c:tools/hammer"}
        ],
        "result": [
          {"item":{"count":1,"id":"create:crushed_raw_iron"},"chance":0.5},
          {"item":{"count":1,"id":"create:crushed_raw_copper"},"chance":0.5},
          {"item":{"count":1,"id":"malum:coal_fragment"},"chance":0.5},
          {"item":{"count":1,"id":"minecraft:amethyst_shard"},"chance":0.5}
        ]
      }
    )
})
// kubejsstudio custom: kubejsstudio:pressure_chamber/carbon_sheet_pressure
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/pressure_chamber/carbon_sheet_pressure',
      {
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [{"count":1,"tag":"kubejs:refined_carbon_hunk"}],
        "pressure": 4.9,
        "results": [{"count":1,"id":"chemica:mixing/carbon_fiber_composite_sheet"}]
      }
    )
})
