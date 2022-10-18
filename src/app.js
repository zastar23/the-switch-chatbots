const navBtn = document.querySelector('.square > img')
const nav = document.querySelector('.header-nav')
const links = document.querySelectorAll('.nav-list-link')
const desktopList = document.querySelector('.desktop-nav-list')
const desktopLinks = document.querySelectorAll('.desktop-nav-list-link')

navBtn.addEventListener('click', () => {
	nav.classList.toggle('slide-in-top')
	nav.classList.toggle('slide-out-top')
})

links.forEach((link) => {
	link.addEventListener('click', () => {
		nav.classList.toggle('slide-in-top')
		nav.classList.toggle('slide-out-top')
	})
})

desktopLinks.forEach((link) => {
	link.addEventListener('click', () => {
		if (link.innerHTML === 'Home') {
			return
		}
		desktopList.style.display = 'none'
		document.querySelector('.square').style.opacity = '1'
	})
})
