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
		langSelector.arrow?.classList.remove('langSelector__arrow_selected')
		langSelector.popup?.classList.remove('langSelector__popup_enabled')
	}
})

const header = document.querySelector('.header')
const headerButton = document.querySelector('.header__button')
const bodyWrapper = document.querySelector('.body__wrapper')

document.addEventListener('scroll', () => {
	if (bodyWrapper) {
		if (window.scrollY == 0) {
			header?.classList.remove('header_postScroll')
			headerButton?.classList.remove('header__button_postScroll')
		} else {
			header?.classList.add('header_postScroll')
			headerButton?.classList.add('header__button_postScroll')
		}
	}
})
