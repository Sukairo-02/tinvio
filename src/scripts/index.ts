import '@styles/index.scss'

const langSelector = {
	wrapper: document.getElementById('langSelector'),
	text: document.getElementById('langSelector__text'),
	arrow: document.getElementById('langSelector__arrow'),
	popup: document.getElementById('langSelector__popup')
}

langSelector.wrapper?.addEventListener('click', () => {
	langSelector.arrow?.classList.toggle('langSelector__arrow_selected')
	langSelector.popup?.classList.toggle('langSelector__popup_enabled')
})

window.addEventListener('click', (event) => {
	if (!(event.target instanceof HTMLElement)) return

	const { target } = event
	if (!target.matches('#langSelector')) {
		const langSelector = {
			wrapper: document.getElementById('langSelector'),
			text: document.getElementById('langSelector__text'),
			arrow: document.getElementById('langSelector__arrow'),
			popup: document.getElementById('langSelector__popup')
		}

		langSelector.arrow?.classList.remove('langSelector__arrow_selected')
		langSelector.popup?.classList.remove('langSelector__popup_enabled')
	}
})
