// Scroll reveal
document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal({ 
    reset: true ,
    distance :'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form' ,{ origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar
    menuIcon.forEach(icon => {
        icon.classList.remove('bx-x');
    });
    navbar.forEach(nav => {
        nav.classList.remove('active');
    });
};

// Toggle
let menuIcon = document.querySelectorAll('#menu-icon');
let navbar = document.querySelectorAll('.navbar');

menuIcon.forEach(icon => {
    icon.onclick = () => {
        menuIcon.forEach(icon => {
            icon.classList.toggle('bx-x');
        });
        navbar.forEach(nav => {
            nav.classList.toggle('active');
        });
    };
});

// Typed.js
const typed = new Typed('.multiple-text', {
    strings: ['Student','Fresher', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
});


