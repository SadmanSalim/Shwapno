var swiper = new Swiper(".bannerSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  // categorise

  var swiper = new Swiper("#product_categories .mySwiper", {
    slidesPerView: 5,
    spaceBetween: 5,
    navigation: {
      nextEl: "#product_categories .swiper-button-next",
      prevEl: "#product_categories .swiper-button-prev",
    },
  });