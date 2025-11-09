document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;
        
        window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Dynamic content padding (optional - can be removed if not needed)
const content = document.querySelectorAll(".content");
const container = document.querySelector(".container");

function contentPadding() {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const containerWidth = document.querySelector(".container").clientWidth + 30;

    const padding = (viewport_width - containerWidth) / 2;

    for (let i = 0; i < content.length; i++) {
        content[i].style.paddingLeft = padding + "px";
    }
}

contentPadding();
window.addEventListener("resize", contentPadding);