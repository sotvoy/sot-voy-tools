// SOT VOY Tools - Theme System
const ThemeSystem = {
    init() {
        this.html = document.documentElement;
        this.themeOptions = document.querySelectorAll('.theme-option');
        this.mobileThemeBtns = document.querySelectorAll('.mobile-theme-btn');
        
        // Initialize theme
        const savedTheme = localStorage.getItem('theme') || 'system';
        this.applyTheme(savedTheme);

        // Event listeners
        this.setupEventListeners();
        
        // Listen for system theme changes
        this.setupSystemThemeListener();
    },

    applyTheme(theme) {
        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            this.html.setAttribute('data-theme', 'system');
        } else {
            this.html.setAttribute('data-theme', theme);
        }
        
        // Update theme icons
        this.updateThemeIcons(theme);
        
        // Update active states
        this.updateActiveStates(theme);
        
        // Save preference
        localStorage.setItem('theme', theme);
    },

    updateThemeIcons(theme) {
        const lightIcon = document.querySelector('.theme-icon');
        const darkIcon = document.querySelector('.theme-icon-dark');
        
        if (lightIcon && darkIcon) {
            if (theme === 'dark') {
                lightIcon.style.display = 'none';
                darkIcon.style.display = 'block';
            } else {
                lightIcon.style.display = 'block';
                darkIcon.style.display = 'none';
            }
        }
    },

    updateActiveStates(theme) {
        this.themeOptions?.forEach(opt => {
            opt.classList.toggle('active', opt.dataset.theme === theme);
        });
        this.mobileThemeBtns?.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });
    },

    setupEventListeners() {
        // Desktop theme options
        this.themeOptions?.forEach(option => {
            option.addEventListener('click', () => {
                this.applyTheme(option.dataset.theme);
            });
        });

        // Mobile theme buttons
        this.mobileThemeBtns?.forEach(btn => {
            btn.addEventListener('click', () => {
                this.applyTheme(btn.dataset.theme);
            });
        });
    },

    setupSystemThemeListener() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (localStorage.getItem('theme') === 'system') {
                this.applyTheme('system');
            }
        });
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => ThemeSystem.init());
