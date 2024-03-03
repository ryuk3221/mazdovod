const benefitsSlider = new Swiper('.benefits__slider', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    prevEl: '.benefits-slider-prev',
    nextEl: '.benefits-slider-next',
  }
});

const reviewsSlider = new Swiper('.reviews__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    prevEl: '.reviews-slider-prev',
    nextEl: '.reviews-slider-next',
  }
});


const burgerOpen = document.querySelector('.header__burger');
const burgerClose = document.querySelector('.drawer-menu__close-btn');
const drawerMenu = document.querySelector('.drawer-menu');

const drawerMenuShow = () => {
  drawerMenu.classList.toggle('drawer-menu--open');
};

burgerOpen.onclick = drawerMenuShow;
burgerClose.onclick = drawerMenuShow;