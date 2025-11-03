// Бургер-меню
const burgerMenu = document.querySelector('.burger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');

burgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
});

// Закрытие меню при клике на оверлей или ссылку
overlay.addEventListener('click', closeMenu);

document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

function closeMenu() {
    burgerMenu.classList.remove('active');
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Применяем анимацию к элементам
document.querySelectorAll('.content-grid, .gallery-grid, .section-title, .benefits-list').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Анимация для элементов героя
document.querySelectorAll('.hero h1, .hero p, .hero .btn').forEach(el => {
    el.classList.add('fade-in');
});