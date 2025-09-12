// Inisialisasi semua elemen .js-swiper di halaman
document.querySelectorAll('.js-swiper').forEach((el) => {
    const effect = el.dataset.effect || 'slide'; // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  
    // Pastikan child selectors unik per container
    const pagination = el.querySelector('.swiper-pagination');
    const nextBtn    = el.querySelector('.swiper-button-next');
    const prevBtn    = el.querySelector('.swiper-button-prev');
  
    // Buat instance Swiper untuk container ini
    new Swiper(el, {
      loop: true,
      effect,
      pagination: { el: pagination, clickable: true },
      navigation: { nextEl: nextBtn, prevEl: prevBtn },
    });
  });
  