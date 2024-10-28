
new WOW().init();

var largSwiper = new Swiper('.larg-swiper', {
    slidesPerView:1, 
    spaceBetween: 0, 
    navigation:false,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.larg-next',
        prevEl: '.larg-prev',
    },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
 
});
const scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
};
// Select all accordion titles
const accordionTitles = document.querySelectorAll('.accordion-title');

// Add click event to each accordion title
accordionTitles.forEach(title => {
    title.addEventListener('click', function () {
        // Get the parent accordion item
        const item = this.parentNode;

        // Toggle the "active" class to show or hide the content
        item.classList.toggle('active');

        // Close other accordion items if opened
        accordionTitles.forEach(otherTitle => {
            const otherItem = otherTitle.parentNode;
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;

        content.classList.toggle('active');

        this.classList.toggle('open');
    });
});
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function () {
    const swiperContainer = document.querySelector('.swiper-container');
    const swiperSlides = swiperContainer.querySelectorAll('.swiper-slide');
    
    if (swiperSlides.length === 1) {
      swiperContainer.querySelector('.swiper-button-next').style.display = 'none';
      swiperContainer.querySelector('.swiper-button-prev').style.display = 'none';
    }
  });
  