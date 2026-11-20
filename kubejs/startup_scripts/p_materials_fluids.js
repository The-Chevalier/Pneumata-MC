// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

//This file is for adding items to be used in general gameplay, such as mob drop additions and food items
const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

StartupEvents.registry('fluid', event => {
  event.create('nanoichor')
    .tint(0xE5C1FF)
    .displayName('Nano Ichor')
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
      .fallDistanceModifier(0)
      .addDripstoneDripping(1, $ParticleTypes.DRIPPING_DRIPSTONE_WATER, 'minecraft:water_cauldron', $SoundEvents.POINTED_DRIPSTONE_DRIP_WATER)
    )
    .noBucket()
    .noBlock() 

  event.create('morphing_precursor')
    .tint(0xFF4CBD)
    .displayName('Morphing Precursor')
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
      .fallDistanceModifier(0)
      .addDripstoneDripping(1, $ParticleTypes.DRIPPING_DRIPSTONE_WATER, 'minecraft:water_cauldron', $SoundEvents.POINTED_DRIPSTONE_DRIP_WATER)
    )
    .noBucket()
    .noBlock() 

  event.create('pulp')
    .tint(0x602013)
    .displayName('Pulp')
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
      .fallDistanceModifier(0)
      .addDripstoneDripping(1, $ParticleTypes.DRIPPING_DRIPSTONE_WATER, 'minecraft:water_cauldron', $SoundEvents.POINTED_DRIPSTONE_DRIP_WATER)
    )
  
  event.create('blood_juice')
    .tint(0xCE1E00)
    .displayName('Blood Juice')
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
      .fallDistanceModifier(0)
      .addDripstoneDripping(1, $ParticleTypes.DRIPPING_DRIPSTONE_WATER, 'minecraft:water_cauldron', $SoundEvents.POINTED_DRIPSTONE_DRIP_WATER)
    )

    event.create('molten_cast_iron')
    .tint(0xE5C1FF)
    .displayName('Molten Cast Iron')
    .tint(0xff6600)
    .slopeFindDistance(2)
    .type(type => type
      .renderType(0)
      .stillTexture('kubejs:block/thick_fluid_still')
      .flowingTexture('kubejs:block/thick_fluid_flow')
      .canSwim(false)
      .canDrown(false)
      .density(3000)
      .viscosity(6000)
  )
  .noBlock()
});