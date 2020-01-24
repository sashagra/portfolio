new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    grabCursor: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletClass: 'project-bullet',
        bulletActiveClass: 'project-bullet-active',
        clickable: true,
      },
});