import '../scss/style.scss';
import '../scss/font.scss';
import '../scss/header-menu.scss';
import '../scss/aside-menu.scss';
import '../scss/section-brands.scss';
import '../scss/section-repair.scss';
import '../scss/price-list.scss';
import '../scss/footer.scss';
import '../scss/call-dialog.scss';
import '../scss/chat-dialog.scss';

// модалка "заказать звонок"
callBtn.addEventListener('click', () => {
	callDialog.showModal()
})
callBtnAside.addEventListener('click', () => {
	callDialog.showModal()
})
callClose.addEventListener('click', () => {
	callDialog.close()
})
callDialog.addEventListener('click', (e) => {
	const modal = e.currentTarget;
	const isClickOnBackDrop = e.target === modal;

	if (isClickOnBackDrop) {
		callDialog.close();
	}
})
// модалка "обратная связь"
chatBtn.addEventListener('click', () => {
	chatDialog.showModal()
})
chatBtnAside.addEventListener('click', () => {
	chatDialog.showModal()
})
chatClose.addEventListener('click', () => {
	chatDialog.close()
})
chatDialog.addEventListener('click', (e) => {
	const modal = e.currentTarget;
	const isClickOnBackDrop = e.target === modal;

	if (isClickOnBackDrop) {
		chatDialog.close();
	}
})
// боковое меню aside 
const menu = document.querySelector('#menuBtn');
const close = document.querySelector('#closeBtn');
const asideMenu = document.querySelector('.aside-menu');
const blur = document.querySelector('.blur');

menu.addEventListener('click', () => {
		asideMenu.classList.add('aside-menu--position');
		blur.classList.add('blur--active');
})

close.addEventListener('click', () => {
	if (asideMenu.classList.contains('aside-menu--position') == true) {
		asideMenu.classList.remove('aside-menu--position');
		blur.classList.remove('blur--active')
	} else {
		return;
	}
})
//закрытие меню aside при клике на backdrop
blur.addEventListener('click', () => {
	if (blur.classList.contains('blur--active')) {
		if (asideMenu.classList.contains('aside-menu--position')){
			asideMenu.classList.remove('aside-menu--position');
		}
		blur.classList.remove('blur--active');
	}
})
//кнопка с текстом 
const text = document.querySelector('.blog__text:nth-of-type(2)');
const textNextBtn = document.querySelector('.blog__next-button');
textNextBtn.addEventListener('click', () => {
	text.classList.toggle('blog__text--visible');
	textNextBtn.classList.toggle('blog__next-button--active');
	textNextBtn.textContent = textNextBtn.classList.contains('blog__next-button--active') ? 'Скрыть' : 'Читать далее';
})
//кнопка показать все section-brands
let buttonShow = document.querySelector('.brands__show-all');
buttonShow.addEventListener('click', (event) => {
	let forHidden = document.querySelectorAll('.hidden-slide, .hidden-for-tablet');
	if (forHidden[0].classList.contains('show-hidden')) {
		forHidden.forEach(element => {
			element.classList.remove('show-hidden');
		});
		buttonShow.textContent = 'Показать все';
		buttonShow.classList.remove('brands__show-all--active');
	} else {
		forHidden.forEach(element => {
			element.className += ' show-hidden';
		});
		buttonShow.textContent = 'Скрыть';
		buttonShow.className += ' brands__show-all--active';
	}
})
//кнопка показать все section-repair 
let btnShowRepair = document.querySelector('.repair__show-all');
btnShowRepair.addEventListener('click', (event) => {
	let hiddenSlide = document.querySelectorAll('.repair-slide-hidden');
	if (hiddenSlide[0].classList.contains('show-hidden-forRepair')) {
		hiddenSlide.forEach(element => {
			element.classList.remove('show-hidden-forRepair');
		});
		btnShowRepair.textContent = 'Показать все';
		btnShowRepair.classList.remove('repair__show-all--active');
	} else {
		hiddenSlide.forEach(element => {
			element.className += ' show-hidden-forRepair';
		});
		btnShowRepair.textContent = 'Скрыть';
		btnShowRepair.className += ' repair__show-all--active';
	}
})
//слайдеры
let slideAll = document.querySelector('.swiper-wrapper');
let listLength = document.querySelectorAll('.swiper-slide');
let slide11 = slideAll.querySelector('.swiper-slide:last-child');
let slide10 = slideAll.querySelector('.swiper-slide:nth-last-of-type(2)');
let slide9 = slideAll.querySelector('.swiper-slide:nth-last-of-type(3)');

if (window.innerWidth <= 767) {
	slide9.remove();
	slide10.remove();
	slide11.remove();
}

let swiperBrands = new Swiper('.swiper-brands', {

	direction: 'horizontal',
	loop: true,
	grabCursor: true,
	spaceBetween: 20,
	slidesPerView: 'auto',
	speed: 500,

	pagination: {
		el: '.swiper-brands__swiper-pagination',
		clickable: true
	},

	keyboard: {
		enable: true,
		onlyInViewport: true
	},

	autoplay: {
		delay: 2000,
		disableOnInteraction: true,
		stopOnLastSlide: false
	},
});

let swiperRepair = new Swiper('.swiper-repair', {

	direction: 'horizontal',
	loop: true,
	grabCursor: true,
	spaceBetween: 20,
	slidesPerView: 'auto',
	speed: 500,

	pagination: {
		el: '.swiper-repair__swiper-pagination',
		clickable: true
	},

	keyboard: {
		enable: true,
		onlyInViewport: true
	},

	autoplay: {
		delay: 2000,
		disableOnInteraction: true,
		stopOnLastSlide: false
	},
});

let swiperPrice = new Swiper('.swiper-price', {

	direction: 'horizontal',
	loop: true,
	grabCursor: true,
	spaceBetween: 20,
	slidesPerView: 'auto',
	speed: 500,

	pagination: {
		el: '.swiper-price__swiper-pagination',
		clickable: true
	},

	keyboard: {
		enable: true,
		onlyInViewport: true
	},

	autoplay: {
		delay: 2000,
		disableOnInteraction: true,
		stopOnLastSlide: false
	},
});

if (window.innerWidth > 767) {
	swiperBrands.destroy();
	swiperBrands = 0;
	swiperRepair.destroy();
	swiperRepair = 0;
	swiperPrice.destroy();
	swiperPrice = 0;
}

window.addEventListener('resize', function(event) {
	if (event.target.innerWidth > 767 && swiperBrands) {
		swiperBrands.destroy();
		swiperBrands = 0;
		swiperRepair.destroy();
		swiperRepair = 0;
		swiperPrice.destroy();
		swiperPrice = 0;
	} else if (event.target.innerWidth <= 767 && !swiperBrands) {
			swiperBrands = new Swiper('.swiper-brands', {

			direction: 'horizontal',
			loop: true,

			pagination: {
				el: '.swiper-brands__swiper-pagination',
				clickable: true
			},

			grabCursor: true,
			spaceBetween: 20,
			slidesPerView: 'auto',

			keyboard: {
				enable: true,
				onlyInViewport: true,
			},

			autoplay: {
				delay: 2000,
				disableOnInteraction: true,
				stopOnLastSlide: false
			},
		});

		swiperRepair = new Swiper('.swiper-repair', {

			direction: 'horizontal',
			loop: true,
			grabCursor: true,
			spaceBetween: 20,
			slidesPerView: 'auto',
			speed: 500,
		
			pagination: {
				el: '.swiper-repair__swiper-pagination',
				clickable: true
			},
		
			keyboard: {
				enable: true,
				onlyInViewport: true
			},
		
			autoplay: {
				delay: 2000,
				disableOnInteraction: true,
				stopOnLastSlide: false
			},
		});

		swiperPrice = new Swiper('.swiper-price', {

			direction: 'horizontal',
			loop: true,
			grabCursor: true,
			spaceBetween: 20,
			slidesPerView: 'auto',
			speed: 500,
		
			pagination: {
				el: '.swiper-price__swiper-pagination',
				clickable: true
			},
		
			keyboard: {
				enable: true,
				onlyInViewport: true
			},
		
			autoplay: {
				delay: 2000,
				disableOnInteraction: true,
				stopOnLastSlide: false
			},
		});
	}
}, true);