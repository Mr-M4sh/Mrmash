document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation (Hamburger Menu)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle between burger and close icon
        const icon = hamburger.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            }
        });
    });


    // "Fade-in on scroll" Animation
    const scrollTargets = document.querySelectorAll('.scroll-target');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: stop observing once visible
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    scrollTargets.forEach(target => {
        observer.observe(target);
    });

});