const menuOpenButton = document.querySelector('#menu-open-button');

menuOpenButton.addEventListener("click", () =>{
    document.body.classList.toggle("show-mobile-menu");
});

const menuCloseButton = document.querySelector('#menu-close-button');

menuCloseButton.addEventListener("click", () =>
    menuOpenButton.click()
);

// close menu when nav-link is clicked
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click())
})

// initialize swiper 
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween:25,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // responsive breakpoint
  breakpoints :{
    0:{
        slidesPreView: 1
    },
    768:{
        slidesPreView: 2
    },
    102:{
        slidesPreView: 3
    }
  }
});


// ✅ Your next code added (NO CHANGES)
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
