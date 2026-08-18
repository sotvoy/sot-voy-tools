// SOT VOY Tools - Main Application
// This is the main entry point that initializes all modules

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Theme System
    if (typeof ThemeSystem !== 'undefined') {
        ThemeSystem.init();
    }

    // Initialize Navigation
    if (typeof Navigation !== 'undefined') {
        Navigation.init();
    }

    // Initialize FAQ
    if (typeof FAQ !== 'undefined') {
        FAQ.init();
    }

    // Initialize animations for cards
    initScrollAnimations();
});

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.tool-card, .category-card, .why-card, .step-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}
