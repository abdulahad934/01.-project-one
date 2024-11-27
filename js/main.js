const navbarMenu = document.getElementById('menu');
const burgerMenu = document.getElementById('burger');
const headerMenu = document.getElementById('header');
const overlayMenu = document.querySelector('.overlay');

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
	burgerMenu.addEventListener('click', () => {
		burgerMenu.classList.toggle('is-active');
		navbarMenu.classList.toggle('is-active');
	});
}

// Close Navbar Menu on Click Links
document.querySelectorAll('.menu-link').forEach((link) => {
	link.addEventListener('click', () => {
		burgerMenu.classList.remove('is-active');
		navbarMenu.classList.remove('is-active');
	});
});

// Fixed Navbar Menu on Window Resize
window.addEventListener('resize', () => {
	if (window.innerWidth >= 992) {
		if (navbarMenu.classList.contains('is-active')) {
			navbarMenu.classList.remove('is-active');
			overlayMenu.classList.remove('is-active');
		}
	}
});

// Dark and Light Mode on Switch Click
document.addEventListener('DOMContentLoaded', () => {
	const darkSwitch = document.getElementById('switch');

	darkSwitch.addEventListener('click', () => {
		document.documentElement.classList.toggle('darkmode');
		document.body.classList.toggle('darkmode');
	});
});
