// Your JavaScript code using GSAP goes here

// Animate the header on page load
gsap.from('header img', { opacity: 0, duration: 1, delay: 0.5, y: -50 });
gsap.from('header h1, header p', { opacity: 0, duration: 1, delay: 1, y: 50, stagger: 0.3 });

// Animate the other sections on scroll
gsap.registerPlugin(ScrollTrigger);

// Function to create a common animation for sections
function animateSection(sectionId, animation) {
    gsap.from(sectionId, {
        scrollTrigger: {
            trigger: sectionId,
            start: 'top bottom-=100',
        },
        ...animation,
    });
}

// Animate the "About Me" section
animateSection('#about', { opacity: 0, duration: 1, y: 50 });

// Animate the "Projects" section
animateSection('#projects', { opacity: 0, duration: 1, y: 50 });

// Animate the "Contact" section
animateSection('#contact', { opacity: 0, duration: 1, y: 50 });

// Animate project cards on scroll
gsap.utils.toArray('.project-card').forEach((card) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
        },
        opacity: 0,
        y: 50,
        duration: 1,
    });
});
