// Theme Toggle Functionality
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleButton.textContent = '☀️ Light Theme';
} else {
    toggleButton.textContent = '🌙 Dark Theme';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleButton.textContent = isDark ? '☀️ Light Theme' : '🌙 Dark Theme';
});

// Contact Popup Functionality
const contactBtn = document.getElementById('contact-btn');
const contactPopup = document.getElementById('contact-popup');
const closeBtn = document.querySelector('.close-btn');

contactBtn.addEventListener('click', () => {
    contactPopup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    contactPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
});

contactPopup.addEventListener('click', (e) => {
    if (e.target === contactPopup) {
        contactPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect to name
const nameElement = document.getElementById('name');
const originalText = nameElement.textContent;
nameElement.textContent = '';
let charIndex = 0;

function typeWriter() {
    if (charIndex < originalText.length) {
        nameElement.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Add current year to footer if exists
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
});
