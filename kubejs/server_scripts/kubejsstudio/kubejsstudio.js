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
