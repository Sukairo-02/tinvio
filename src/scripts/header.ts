import '@styles/components/header.scss'

const langSelector = {
	wrapper: document.getElementById('langSelector'),
	text: document.getElementById('langSelector__text'),
	arrow: document.getElementById('langSelector__arrow'),
	popup: document.getElementById('langSelector__popup')
}

langSelector.wrapper?.addEventListener('click', () => {
	langSelector.arrow?.classList.toggle('selected')
	langSelector.popup?.classList.toggle('enabled')
})

window.addEventListener('click', (event) => {
	if (!(event.target instanceof HTMLElement)) return

	const { target } = event
	if (!target.matches('#langSelector')) {
		langSelector.arrow?.classList.remove('selected')
		langSelector.popup?.classList.remove('enabled')
	}
})

const header = document.querySelector('.header')
const headerButton = document.querySelector('.header__button')

document.addEventListener('scroll', () => {
	if (window.scrollY == 0) {
		header?.classList.remove('postScroll')
		headerButton?.classList.remove('postScroll')
	} else {
		header?.classList.add('postScroll')
		headerButton?.classList.add('postScroll')
	}
})

const modalButton = document.getElementById('header__modalButton')
const modalWindow = document.getElementById('header__mobileModal')

modalButton?.addEventListener('click', () => {
	modalButton.classList.toggle('activated')
	modalWindow?.classList.toggle('enabled')
	langSelector.wrapper?.classList.toggle('enabled')
})

const logoWrapper = document.getElementById('header__logoWrapper')

logoWrapper?.addEventListener('click', () => {
	window.scroll(0, 0)
})
