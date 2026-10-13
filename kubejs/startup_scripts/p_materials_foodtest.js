// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {

		event.create('heated_mre')
		.displayName('§dHeated MRE')
		.tooltip('§7Tastes like home; highly processed and full of preservatives! §3Nourishing enough to heal...')
		.food(food => {
			food
			.nutrition(8)
			.saturation(10)
			.effect('regeneration', 200, 1, 1)
			.removeEffect('hunger')
		})

		event.create('trod_tot')
		.displayName('§dTrod Tot')
		.tooltip('§7A delicious snack! §3Reminds me of something else...')
		.food(food => {
			food
			.nutrition(4)
			.saturation(1)
			.effect('resistance', 200, 1, 1)
			.fastToEat()
		})

		event.create('fillet_gullie')
		.displayName('§dFillet Gullié')
		.tooltip('§7A delicious and nutritious cut of meat! §3Nourishing enough to heal...')
		.food(food => {
			food
			.nutrition(6)
			.saturation(1)
			.effect('regeneration', 100, 0.5, 1)
			.removeEffect('hunger')
		})

		event.create('beef_gullington')
		.displayName('§dBeef Gullington')
		.tooltip('§7A dish for the more refined palate! §3Oddly emboldening...')
		.food(food => {
			food
			.nutrition(10)
			.saturation(1)
			.effect('strength', 100, 0.5, 1)
			.removeEffect('hunger')
		})


})
