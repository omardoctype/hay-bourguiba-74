// Loading Page Fade Out
window.addEventListener('load', () => {
    setTimeout(() => {
        const loading = document.getElementById('loading');
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
            document.getElementById('main-content').classList.add('loaded');
        }, 1000);
    }, 3000);
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Smooth Scroll for Navigation
document.querySelectorAll('#bottom-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Section Function
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
}

// WhatsApp Button Function
function openWhatsApp() {
    const phoneNumber = '+21623528679';
    const message = 'مرحباً، أريد الاستفسار عن دورة حي بورقيبة';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}