const hamburger = document.querySelector('#hamburger-menu');
const closeBtn = document.querySelector('#close-menu');
const navLinks = document.querySelector('#nav-menu');

// Toggle Mobile Menu
hamburger.onclick = (e) => {
    navLinks.classList.add('active');
    e.preventDefault();
};

// Close Mobile Menu
closeBtn.onclick = (e) => {
    navLinks.classList.remove('active');
    e.preventDefault();
};

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.id !== 'close-menu') {
        link.onclick = () => navLinks.classList.remove('active');
    }
});