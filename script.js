// JavaScript for smooth scroll to sections when clicking buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth',
        });
    });
});

// JavaScript for subtle fade-in effect when scrolling through sections
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('fade-in');
        }
    });
});

// Adding CSS animation class when scrolling into view
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
});
