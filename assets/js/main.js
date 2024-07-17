/**---------------nav-bar-----------------*/
document.addEventListener('DOMContentLoaded', function() {
        var navbarToggler = document.querySelector('.navbar-toggler');
        var navbarCollapse = document.querySelector('#navbarSupportedContent');
        var navCover = document.querySelector('.nav-cover');
        var navElement = document.querySelector('nav');

        navbarToggler.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navCover.style.height = '95px'; // Reset to default height
                navElement.style.height = '95px'; // Reset to default height
                navElement.style.borderRadius = '0px 0px 160px 160px'; // Reset border-radius
            } else {
                navCover.style.height = '460px'; // Expand to full viewport height
                navElement.style.height = '450px'; // Expand to full viewport height
                navElement.style.borderRadius = '0px 0px 90px 90px'; // Remove border-radius for full height
            }
        });

        // Ensure nav-cover and nav reset height when navbar is collapsed
        navbarCollapse.addEventListener('hidden.bs.collapse', function () {
            navCover.style.height = '95px';
            navElement.style.height = '95px';
            navElement.style.borderRadius = '0px 0px 80px 80px';
        });
});
/**---------------slider-----------------*/
$(document).ready(function(){
    $('.past-projects-slider').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    $(".past-projects-slider").owlCarousel({
        items: 4,  // Number of items to display
        margin: 10, // Margin between items
        loop: true, // Enable loop
        autoplay: true, // Enable autoplay
        autoplayTimeout: 3000, // Autoplay interval
        responsive: {
          0: {
            items: 1 // Items to display on small screens
          },
          600: {
            items: 2 // Items to display on medium screens
          },
          1000: {
            items: 4 // Items to display on large screens
          }
        }
      });
  });
  $(document).ready(function(){
    $('.about-slider').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
        }
    });
  });

/**---------------map-----------------*/
var map = L.map('map').setView([31.211273, 29.945373], 15);
googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);
var marker = L.marker([31.211273, 29.945373]).addTo(map);
var language = window.location.href.endsWith('-ar.html') ? 'ar' : 'en';
var popupContent = language === 'ar' ? "مقرنا الرئيسي<br/>ميناء دمياط ، الغرفه الادارية بجوار مبنى غرفة الملاحة": "Our Main Office<br/>49 Street 5 Somuha,<br/> Alexandria- Egypt";

marker.bindPopup(popupContent).openPopup();

