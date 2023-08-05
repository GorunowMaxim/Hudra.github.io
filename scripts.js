const button = document.querySelector('.header-top__burger-button');
const menu = document.querySelector('.header-top__list');
const body = document.querySelector('.body');

button.addEventListener('click', () => {
  if (! menu.classList.contains('header-top__list_active')) {
    menu.classList.add('header-top__list_active');
  } else {
    menu.classList.remove('header-top__list_active');
  }
});


new Swiper('.swiper',{
  slidesPerView: 1,
  spaceBetween: 80,
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
});

new SwiperOpportunities('.opportunities__swiper',{
  slidesPerView: 1,
  spaceBetween: 120,
});
new SwiperLogo('.logos__block-swiper',{
  slidesPerView: 1,
  spaceBetween: 10,
});
new SwiperBuilding('.bulding-construction',{
  slidesPerView: 1,
  spaceBetween: 10,
});
