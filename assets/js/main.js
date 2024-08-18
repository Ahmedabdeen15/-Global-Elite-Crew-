/**---------------nav-bar-----------------*/
document.addEventListener('DOMContentLoaded', function () {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('#navbarSupportedContent');
  var navCover = document.querySelector('.nav-cover');
  var navElement = document.querySelector('nav');

  navbarToggler.addEventListener('click', function () {
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
$(document).ready(function () {
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
$(document).ready(function () {
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
/**---------------counter-----------------*/
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText.replace(/[+%]/g, ''); // Remove any existing + or % symbols
    const increment = target / 3000; // Adjust the increment value for slower counting

    if (count < target) {
      if (target === 99) {
        counter.innerText = `${Math.ceil(count + increment)}%`;
      } else {
        counter.innerText = `${Math.ceil(count + increment)}+`;
      }
      setTimeout(updateCounter, 10); // Adjust the timeout duration for slower counting
    } else {
      if (target === 99) {
        counter.innerText = `${target}%`;
      } else {
        counter.innerText = `${target}+`;
      }
    }
  };
  updateCounter();
});
/**---------------phone-no-----------------*/
const phoneInputField = document.querySelector("#phone-number");
if (phoneInputField) {
  const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "eg", // Set the initial country, e.g., Egypt
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // For formatting the number
  });
}
// JavaScript
const content_Form = document.getElementById('contact-form');
const content_message = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    onSubmit();
}

function onSubmit() {
    var first_name = document.forms["contact-form"]["first_name"].value;
    var last_name = document.forms["contact-form"]["last_name"].value;
    var email = document.forms["contact-form"]["email"].value;
    var phone_number = document.forms["contact-form"]["phone_number"].value;
    var address = document.forms["contact-form"]["address"].value;
    var message = document.forms["contact-form"]["message"].value;

    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validRegex.test(email) || first_name.includes("http://") || email.includes("http://") || first_name.length <= 2 || message.length < 10) {
        content_message.textContent = "Potential spam detected. Please enter valid data.";
        setTimeout(() => {
            content_message.textContent = '';
        }, 5000);
        return;
    }

    emailjs.sendForm('service_5ouy7vo', 'template_6i35tfc', '#contact-form', '5LOaCugdX_NzN06Xi')
        .then(function () {
            content_message.textContent = 'Message sent successfully ✔';
            setTimeout(() => {
                content_message.textContent = '';
            }, 5000);
            content_Form.reset();
        }, function (error) {
            content_message.textContent = 'Message sending failed ❌';
        });
}

if (content_Form) {
  content_Form.addEventListener('submit', sendEmail);
}








/**---------------map-----------------*/
var map = L.map('map').setView([31.211273, 29.945373], 15);
googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);
var marker = L.marker([31.211273, 29.945373]).addTo(map);
var language = window.location.href.endsWith('-ar.html') ? 'ar' : 'en';
var popupContent = language === 'ar' ? "مقرنا الرئيسي<br/>ميناء دمياط ، الغرفه الادارية بجوار مبنى غرفة الملاحة" : "Our Main Office<br/>49 Street 5 Somuha,<br/> Alexandria- Egypt";

marker.bindPopup(popupContent).openPopup();

