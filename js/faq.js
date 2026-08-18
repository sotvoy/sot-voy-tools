// SOT VOY Tools - FAQ Accordion
const FAQ = {
    init() {
        this.faqItems = document.querySelectorAll('.faq-item');
        
        if (this.faqItems.length > 0) {
            this.setupAccordion();
        }
    },

    setupAccordion() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other items
                this.faqItems.forEach(faq => {
                    faq.classList.remove('active');
                    faq.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                }
            });

            // Keyboard accessibility
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });
        });
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => FAQ.init());
