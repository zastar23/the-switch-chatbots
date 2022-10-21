const navBtnImg = document.querySelector('.square > img')
const square = document.querySelector('.square')
const nav = document.querySelector('.header-nav')
const links = document.querySelectorAll('.nav-list-link')
const desktopList = document.querySelector('.desktop-nav-list')
const desktopLinks = document.querySelectorAll('.desktop-nav-list-link')
const hero = document.querySelector('.hero')

navBtnImg.addEventListener('click', () => {
	nav.classList.toggle('slide-in-top')
	nav.classList.toggle('slide-out-top')
})

links.forEach((link) => {
	link.addEventListener('click', () => {
		nav.classList.toggle('slide-in-top')
		nav.classList.toggle('slide-out-top')
		square.classList.remove('rotate-square-clock')
	})
})

square.addEventListener('click', () => {
	square.classList.toggle('rotate-square-clock')
})

// intersection observer for toggling navigations

let options = {
	root: null,
	treshold: 1,
}

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			desktopList.classList.add('scroll-change-hidden')
			square.classList.add('scroll-change-visible')
		} else {
			desktopList.classList.remove('scroll-change-hidden')
			square.classList.remove('scroll-change-visible')
		}
	})
}, options)

observer.observe(desktopList)
