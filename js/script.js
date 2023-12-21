const swiperThumb = new Swiper('.gift__swiper--thumb', {
  spaceBetween: 16,
  slidesPerView: 4,
  freeMode: true,
});
const swiperMain = new Swiper('.gift__swiper--card', {
  spaceBetween: 16,
  thumbs: { swiper: swiperThumb },
});
