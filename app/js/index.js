const benefitsSlider = new Swiper('.benefits__slider', {
  
  navigation: {
    prevEl: '.benefits-slider-prev',
    nextEl: '.benefits-slider-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
});

const reviewsSlider = new Swiper('.reviews__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    prevEl: '.reviews-slider-prev',
    nextEl: '.reviews-slider-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
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


function init() {
  let map = new ymaps.Map('map', {
    center: [55.686269069036435,37.51147249999994],
    zoom: 10,
  });

  let placemark = new ymaps.Placemark([55.686269069036435,37.51147249999994], {}, {
    iconLayout: 'default#image',
    
  });
  
  map.geoObjects.add(placemark);
  
};
ymaps.ready(init);
