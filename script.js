const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
});

const contactBtn = document.getElementById('contact-btn');
const contactPopup = document.getElementById('contact-popup');
const closeBtn = document.querySelector('.close-btn');

contactBtn.addEventListener('click', () => {
    contactPopup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    contactPopup.style.display = 'none';
});

contactPopup.addEventListener('click', (e) => {
    if (e.target === contactPopup) {
        contactPopup.style.display = 'none';
    }
});
