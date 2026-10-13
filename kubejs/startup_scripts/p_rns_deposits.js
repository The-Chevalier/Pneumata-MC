

// Deposit structures go here. Multiple structures can use the same block.
StartupEvents.rnsDepositStructures(event => {
  event.create('kubejs:nether_iron_deposit')
    .block('create_rns:iron_deposit_block')
    .displayName('Nether Iron Deposit')
    .preset('nether_common')
//    .preset('nether_uncommon')
//    .preset('nether_common')
//    .preset('overworld_rare')
//    .preset('overworld_uncommon')
//    .preset('overworld_common')
    .scannerIcon('minecraft:raw_iron')
    .mapIcon('minecraft:raw_iron')
})

StartupEvents.rnsEnableDeposits(event => {
  event.overworld()
    // Keep the deposits you want. Setting the second argument to false will disable worldgen, but keep the deposit enabled.
    .deposit('create_rns:deposit_coal', true)
    .deposit('create_rns:deposit_iron', true)
    .deposit('create_rns:deposit_copper', true)
    .deposit('create_rns:deposit_zinc', true)
    .deposit('create_rns:deposit_gold', true)
    .deposit('create_rns:deposit_lapis', true)
    .deposit('create_rns:deposit_redstone', true)
    .deposit('create_rns:deposit_tin', true)
    .deposit('create_rns:deposit_osmium', false)
    .deposit('create_rns:deposit_lead', true)
    .deposit('create_rns:deposit_nickel', true)
    .deposit('create_rns:deposit_silver', true)
    .deposit('create_rns:deposit_platinum', true)
    .deposit('create_rns:deposit_uranium', false)
    .deposit('create_rns:deposit_thorium', false)
    // Average distance between deposits in chunks
    .spacing(24)
    // Minimum distance between deposits in chunks
    .separation(4)

  event.nether()
    .deposit('create_rns:deposit_nether_gold', true)
    .deposit('kubejs:nether_iron_deposit', true)
    .deposit('create_rns:deposit_nether_quartz', true)
    .deposit('create_rns:deposit_nether_cobalt', false)
    .deposit('create_rns:deposit_nether_wolframite', false)
    .spacing(8)
    .separation(2)
})
