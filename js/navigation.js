// SOT VOY Tools - Navigation System
const Navigation = {
    init() {
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.mobileMenu = document.querySelector('.mobile-menu');
        
        if (this.mobileMenuBtn && this.mobileMenu) {
            this.setupMobileMenu();
        }
        
        this.setupSmoothScroll();
    },

    setupMobileMenu() {
        // Toggle menu
        this.mobileMenuBtn.addEventListener('click', () => {
            this.toggleMenu();
        });

        // Close on link click
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.mobileMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });

        // Close on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.mobileMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });
    },

    toggleMenu() {
        const isOpen = this.mobileMenu.classList.toggle('active');
        this.mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        this.updateMenuIcon(isOpen);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    },

    closeMenu() {
        this.mobileMenu.classList.remove('active');
        this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
        this.updateMenuIcon(false);
        document.body.style.overflow = '';
    },

    updateMenuIcon(isOpen) {
        const svg = this.mobileMenuBtn.querySelector('svg');
        if (isOpen) {
            svg.innerHTML = '<path d="M6 18L18 6M6 6l12 12"/>';
        } else {
            svg.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16"/>';
        }
    },

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
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
    },

    getAttribute(name) {
        return this.href;
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => Navigation.init());
