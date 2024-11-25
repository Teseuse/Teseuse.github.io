const circular = document.querySelector('.header .navigation .navigation-list .circular');
const mobile_menu = document.querySelector('.header .navigation .navigation-list ul');
const menu_item = document.querySelectorAll('.header .navigation .navigation-list ul li a');
const header = document.querySelector('.header.container');

circular.addEventListener('click', () => {
	circular.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#2c2c54';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		circular.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});