// ===== MUSCLE LEVELS - JAVASCRIPT PRINCIPAL =====

// ===== CAROUSEL FUNCTIONALITY =====
class MuscleCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.carousel-slide, .hero-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = null;
        this.init();
    }

    init() {
        if (this.slides.length === 0) return;
        
        this.setupEventListeners();
        this.startAutoPlay();
        
        console.log('🎠 Carousel inicializado com', this.totalSlides, 'slides');
    }

    setupEventListeners() {
        // Indicator click handlers
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });

        // Pause on hover
        const carouselContainer = document.querySelector('.carousel-container, .hero-carousel');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', () => this.pauseAutoPlay());
            carouselContainer.addEventListener('mouseleave', () => this.startAutoPlay());
        }
    }

    goToSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        this.indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        
        this.currentSlide = index;
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(next);
    }

    previousSlide() {
        const prev = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prev);
    }

    startAutoPlay() {
        this.pauseAutoPlay(); // Clear any existing interval
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 2500); // 2.5 seconds
    }

    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// ===== PROMO MODAL FUNCTIONALITY =====
class PromoModal {
    constructor() {
        this.modal = document.getElementById('promoModal');
        this.isShown = false;
        this.init();
    }

    init() {
        if (!this.modal) return;

        this.setupEventListeners();
        this.scheduleDisplay();
        
        console.log('🎉 Modal promocional configurado');
    }

    setupEventListeners() {
        // Close button
        const closeBtn = this.modal.querySelector('.promo-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // Click outside to close
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isShown) {
                this.close();
            }
        });
    }

    show() {
        if (this.isShown) return;
        
        this.modal.style.display = 'flex';
        this.isShown = true;
        
        // Prevent scrolling
        document.body.style.overflow = 'hidden';
        
        console.log('🎉 Modal promocional exibido');
    }

    close() {
        this.modal.style.display = 'none';
        this.isShown = false;
        
        // Restore scrolling
        document.body.style.overflow = '';
        
        console.log('❌ Modal promocional fechado');
    }

    scheduleDisplay() {
        // Show after 4 seconds
        setTimeout(() => {
            if (!this.isShown) {
                this.show();
            }
        }, 4000);

        // Auto-close after 11 seconds total (7 seconds display)
        setTimeout(() => {
            if (this.isShown) {
                this.close();
            }
        }, 11000);
    }
}

// ===== MOBILE MENU FUNCTIONALITY =====
class MobileMenu {
    constructor() {
        this.menuBtn = document.getElementById('mobile-menu-btn');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.isOpen = false;
        this.init();
    }

    init() {
        if (!this.menuBtn || !this.mobileMenu) return;

        this.setupEventListeners();
        console.log('📱 Menu mobile configurado');
    }

    setupEventListeners() {
        this.menuBtn.addEventListener('click', () => this.toggle());
        
        // Close on link click
        this.mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.mobileMenu.contains(e.target) && !this.menuBtn.contains(e.target)) {
                this.close();
            }
        });
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.mobileMenu.classList.remove('hidden');
        this.isOpen = true;
        this.menuBtn.innerHTML = '<i class="fas fa-times text-xl"></i>';
    }

    close() {
        this.mobileMenu.classList.add('hidden');
        this.isOpen = false;
        this.menuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
    }
}

// ===== HEADER SCROLL EFFECT =====
class HeaderScrollEffect {
    constructor() {
        this.header = document.getElementById('main-header');
        this.lastScrollY = 0;
        this.init();
    }

    init() {
        if (!this.header) return;

        this.setupScrollListener();
        console.log('📜 Efeito de scroll do header configurado');
    }

    setupScrollListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            // Add background blur effect
            if (scrollY > 100) {
                this.header.classList.add('bg-white/95', 'backdrop-blur-sm');
            } else {
                this.header.classList.remove('bg-white/95', 'backdrop-blur-sm');
            }

            this.lastScrollY = scrollY;
        });
    }
}

// ===== SMOOTH SCROLLING =====
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = anchor.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        console.log('🌊 Smooth scroll configurado');
    }
}

// ===== NEWSLETTER FUNCTIONALITY =====
class Newsletter {
    constructor() {
        this.form = document.querySelector('.newsletter-form');
        this.emailInput = document.getElementById('newsletter-email');
        this.submitBtn = document.querySelector('.newsletter-button');
        this.init();
    }

    init() {
        if (!this.emailInput || !this.submitBtn) return;

        this.setupEventListeners();
        console.log('📧 Newsletter configurada');
    }

    setupEventListeners() {
        this.submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        this.emailInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.handleSubmit();
            }
        });
    }

    handleSubmit() {
        const email = this.emailInput.value.trim();
        
        if (!email) {
            this.showMessage('Por favor, insira um e-mail válido.', 'error');
            return;
        }

        if (!this.isValidEmail(email)) {
            this.showMessage('Por favor, insira um e-mail válido.', 'error');
            return;
        }

        // Simulate API call
        this.submitBtn.innerHTML = '<span class="loading"></span> Cadastrando...';
        this.submitBtn.disabled = true;

        setTimeout(() => {
            this.showMessage('Obrigado! Você receberá nossas dicas em breve.', 'success');
            this.emailInput.value = '';
            this.submitBtn.innerHTML = 'Cadastrar';
            this.submitBtn.disabled = false;
        }, 1500);
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showMessage(message, type) {
        // Create and show toast message
        const toast = document.createElement('div');
        toast.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 transition-all duration-300 ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => toast.classList.add('opacity-100'), 100);
        
        // Remove after 4 seconds
        setTimeout(() => {
            toast.classList.add('opacity-0');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 4000);
    }
}

// ===== SCROLL ANIMATIONS =====
class ScrollAnimations {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        console.log('🎭 Animações de scroll configuradas');
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    this.observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observe elements
        document.querySelectorAll('.feature-card, .newsletter-section > *, footer > *').forEach(el => {
            this.observer.observe(el);
        });
    }
}

// ===== SEARCH FUNCTIONALITY =====
class SearchSystem {
    constructor() {
        this.searchInput = document.getElementById('search-input');
        this.init();
    }

    init() {
        if (!this.searchInput) return;

        this.setupEventListeners();
        console.log('🔍 Sistema de busca configurado');
    }

    setupEventListeners() {
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch(this.searchInput.value);
            }
        });

        // Add search button functionality if exists
        const searchBtn = document.querySelector('.fa-search').parentElement;
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                this.performSearch(this.searchInput.value);
            });
        }
    }

    performSearch(query) {
        if (!query.trim()) return;

        console.log('🔍 Buscando por:', query);
        // Implement actual search logic here
        alert(`Buscando por: "${query}"`);
    }
}

// ===== PERFORMANCE MONITORING =====
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        this.logLoadTime();
        this.setupErrorHandling();
    }

    logLoadTime() {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`⚡ Página carregada em ${Math.round(loadTime)}ms`);
        });
    }

    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            console.error('❌ Erro JavaScript:', e.error);
        });
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🏋️ MUSCLE LEVELS - Inicializando sistema...');
    
    // Initialize all components
    new MuscleCarousel();
    new PromoModal();
    new MobileMenu();
    new HeaderScrollEffect();
    new SmoothScroll();
    new Newsletter();
    new ScrollAnimations();
    new SearchSystem();
    new PerformanceMonitor();
    
    console.log('✅ Sistema MUSCLE LEVELS carregado com sucesso!');
    console.log('🎠 Carrossel: ativo (2.5s auto-play)');
    console.log('🎉 Modal promocional: configurado');
    console.log('📱 Menu responsivo: ativo');
    console.log('📧 Newsletter: funcional');
    console.log('🎭 Animações: ativas');
});

// ===== UTILITY FUNCTIONS =====
const MuscleUtils = {
    // Format currency
    formatCurrency: (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    },

    // Debounce function
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Local storage helpers
    storage: {
        set: (key, value) => {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
                console.warn('Erro ao salvar no localStorage:', e);
            }
        },
        get: (key) => {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : null;
            } catch (e) {
                console.warn('Erro ao ler do localStorage:', e);
                return null;
            }
        }
    }
};

// Export for use in other files
window.MuscleUtils = MuscleUtils;