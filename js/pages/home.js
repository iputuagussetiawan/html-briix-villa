const btnAllPhotos=document.querySelector('#btnAllPhotos');


const swiper = new Swiper('.facilities__slider', {
    loop: true,
    grabCursor: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed:1000,
    autoplay: {
        delay: 3000,
    },
});


const lightboxVideo = GLightbox({
    selector: ".glightboxVideo",
    touchNavigation: true,
    autoplayVideos: true,
});

const swiperGallery = new Swiper('.gallery__slider', {
    loop:true,
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 1,
    speed:1000,
    breakpoints: {
        992: {
            slidesPerView:2,
            initialSlide: 1,
        },
        
    }
});


const gallery = lightGallery(document.getElementById('lightGallery'), {
  thumbnail: true,
  download: false,
  plugins: [lgThumbnail],
  mobileSettings: {
      showCloseIcon: true,
      download: false
  },
});

btnAllPhotos.addEventListener("click", (e) => { 
  e.preventDefault();
  gallery.openGallery(0)
}); 

var flkty = new Flickity( '.main-carousel', {
  //freeScroll: true,
  wrapAround: true,
  pageDots: false,
  prevNextButtons: false,
});

flkty.on('dragStart', () => flkty.slider.style.pointerEvents = 'none');
flkty.on('dragEnd', () => flkty.slider.style.pointerEvents = 'auto');



