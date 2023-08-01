import '@scripts/header'
import '@styles/index.scss'

const sectionThreeTabs = [
	...document.querySelectorAll('.sectionThree__tab'),
	...document.querySelectorAll('.sectionThree__tabSelector')
]
const sectionThreeTabsMap = new Map<string, NodeListOf<Element>>([
	['sectionThree__tab_1', document.querySelectorAll('.sectionThree__tab_1')],
	['sectionThree__tab_2', document.querySelectorAll('.sectionThree__tab_2')],
	['sectionThree__tab_3', document.querySelectorAll('.sectionThree__tab_3')]
])

const sectionThreeTabSelectors = document.querySelectorAll('.sectionThree__tabSelector')

sectionThreeTabSelectors.forEach((e) =>
	e.addEventListener('click', (event) => {
		if (!(event.target instanceof HTMLElement)) return

		const { target } = event
		sectionThreeTabs.forEach((tab) => {
			tab.classList.remove('selected')
		})

		const { id } = target
		sectionThreeTabsMap.get(id)?.forEach((tab) => {
			tab.classList.add('selected')
		})
	})
)
