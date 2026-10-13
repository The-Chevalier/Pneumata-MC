StartupEvents.modifyCreativeTab('kubejs:tab', event => {
	// Change tab icon
	event.icon = 'kubejs:fraktan_types'
	// Change display name. Technically supports formatting, but it's not recommended
	event.displayName = Text.darkRed('Regalian Survival Core')
})