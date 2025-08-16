// Language translations
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'lang-en': 'EN',
        'lang-pt': 'PT',
        'hero-greeting': 'Hello, I\'m',
        'hero-tagline': 'Product Designer',
        'hero-description': 'Creating meaningful digital experiences through user-centered design and innovative solutions.',
        'hero-cta-primary': 'View My Work',
        'hero-cta-secondary': 'Learn More',
        'about-title': 'About Me',
        'about-subtitle': 'Passionate about creating user-centered digital experiences',
        'about-description': 'I\'m a product designer with over 5 years of experience crafting digital experiences that users love. My approach combines user research, strategic thinking, and creative problem-solving to deliver solutions that not only look great but also solve real user problems.',
        'about-description-2': 'I believe in the power of design to create positive change and improve people\'s lives. Every project I work on is an opportunity to learn, grow, and make a meaningful impact.',
        'about-experience': 'Experience',
        'about-download-resume': 'Download Resume',
        'timeline-1': 'Leading design initiatives for web and mobile applications',
        'timeline-2': 'Designed user experiences for SaaS products',
        'timeline-3': 'Created visual designs for various client projects',
        'skills-title': 'Skills & Tools',
        'skills-subtitle': 'Technologies and methodologies I work with',
        'skills-design-tools': 'Design Tools',
        'skills-ux': 'UX Skills',
        'skills-soft': 'Soft Skills',
        'projects-title': 'Featured Projects',
        'projects-subtitle': 'A selection of my recent work',
        'project-1-description': 'Redesigned the mobile shopping experience for a major retailer, improving conversion rates by 35%.',
        'project-2-description': 'Created an intuitive dashboard for a B2B SaaS platform, reducing user onboarding time by 50%.',
        'project-3-description': 'Modernized a financial app\'s interface, improving user engagement and trust scores significantly.',
        'project-view-case': 'View Case Study',
        'contact-title': 'Get In Touch',
        'contact-subtitle': 'Let\'s work together on your next project',
        'contact-info-title': 'Let\'s Connect',
        'contact-description': 'I\'m always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!',
        'contact-name': 'Name',
        'contact-email': 'Email',
        'contact-subject': 'Subject',
        'contact-message': 'Message',
        'contact-send': 'Send Message',
        'footer-text': '© 2024 Your Name. All rights reserved.',
        'footer-home': 'Home',
        'footer-about': 'About',
        'footer-projects': 'Projects',
        'footer-contact': 'Contact',
        'modal-role': 'Role',
        'modal-duration': 'Duration',
        'modal-tools': 'Tools',
        'modal-challenges': 'Challenges',
        'modal-outcomes': 'Outcomes'
    },
    pt: {
        'nav-home': 'Início',
        'nav-about': 'Sobre',
        'nav-skills': 'Habilidades',
        'nav-projects': 'Projetos',
        'nav-contact': 'Contato',
        'lang-en': 'EN',
        'lang-pt': 'PT',
        'hero-greeting': 'Olá, eu sou',
        'hero-tagline': 'Designer de Produto',
        'hero-description': 'Criando experiências digitais significativas através de design centrado no usuário e soluções inovadoras.',
        'hero-cta-primary': 'Ver Meus Trabalhos',
        'hero-cta-secondary': 'Saiba Mais',
        'about-title': 'Sobre Mim',
        'about-subtitle': 'Apaixonado por criar experiências digitais centradas no usuário',
        'about-description': 'Sou um designer de produto com mais de 5 anos de experiência criando experiências digitais que os usuários adoram. Minha abordagem combina pesquisa de usuário, pensamento estratégico e resolução criativa de problemas para entregar soluções que não apenas parecem ótimas, mas também resolvem problemas reais dos usuários.',
        'about-description-2': 'Acredito no poder do design para criar mudanças positivas e melhorar a vida das pessoas. Cada projeto em que trabalho é uma oportunidade de aprender, crescer e causar um impacto significativo.',
        'about-experience': 'Experiência',
        'about-download-resume': 'Baixar Currículo',
        'timeline-1': 'Liderando iniciativas de design para aplicações web e mobile',
        'timeline-2': 'Desenvolveu experiências de usuário para produtos SaaS',
        'timeline-3': 'Criou designs visuais para diversos projetos de clientes',
        'skills-title': 'Habilidades & Ferramentas',
        'skills-subtitle': 'Tecnologias e metodologias com as quais trabalho',
        'skills-design-tools': 'Ferramentas de Design',
        'skills-ux': 'Habilidades UX',
        'skills-soft': 'Habilidades Interpessoais',
        'projects-title': 'Projetos em Destaque',
        'projects-subtitle': 'Uma seleção dos meus trabalhos recentes',
        'project-1-description': 'Redesenhou a experiência de compra mobile para uma grande varejista, melhorando as taxas de conversão em 35%.',
        'project-2-description': 'Criou um dashboard intuitivo para uma plataforma SaaS B2B, reduzindo o tempo de onboarding em 50%.',
        'project-3-description': 'Modernizou a interface de um app financeiro, melhorando significativamente o engajamento e confiança dos usuários.',
        'project-view-case': 'Ver Estudo de Caso',
        'contact-title': 'Entre em Contato',
        'contact-subtitle': 'Vamos trabalhar juntos no seu próximo projeto',
        'contact-info-title': 'Vamos Conectar',
        'contact-description': 'Sempre estou interessado em novas oportunidades e projetos emocionantes. Se você tem uma pergunta ou só quer dizer oi, sinta-se à vontade para entrar em contato!',
        'contact-name': 'Nome',
        'contact-email': 'Email',
        'contact-subject': 'Assunto',
        'contact-message': 'Mensagem',
        'contact-send': 'Enviar Mensagem',
        'footer-text': '© 2024 Seu Nome. Todos os direitos reservados.',
        'footer-home': 'Início',
        'footer-about': 'Sobre',
        'footer-projects': 'Projetos',
        'footer-contact': 'Contato',
        'modal-role': 'Função',
        'modal-duration': 'Duração',
        'modal-tools': 'Ferramentas',
        'modal-challenges': 'Desafios',
        'modal-outcomes': 'Resultados'
    }
};

// Project data for modal
const projectData = {
    1: {
        title: 'E-commerce Mobile App',
        description: 'A comprehensive redesign of the mobile shopping experience for a major retailer, focusing on improving user engagement and conversion rates.',
        role: 'Lead Product Designer',
        duration: '4 months',
        tools: 'Figma, Sketch, Principle, Maze',
        challenges: 'The main challenge was to simplify the complex checkout process while maintaining all necessary functionality. We also needed to improve the product discovery experience and reduce cart abandonment rates.',
        outcomes: 'Successfully improved conversion rates by 35%, reduced cart abandonment by 28%, and increased average session duration by 42%. The app received positive user feedback and improved App Store ratings.'
    },
    2: {
        title: 'SaaS Dashboard',
        description: 'Designed an intuitive and powerful dashboard for a B2B SaaS platform, enabling users to efficiently manage their business operations.',
        role: 'UX/UI Designer',
        duration: '3 months',
        tools: 'Figma, Adobe XD, InVision, Hotjar',
        challenges: 'The platform had complex data visualization requirements and needed to serve multiple user personas with different technical backgrounds. We had to balance simplicity with powerful functionality.',
        outcomes: 'Reduced user onboarding time by 50%, increased feature adoption by 65%, and improved customer satisfaction scores. The dashboard became a key differentiator for the platform.'
    },
    3: {
        title: 'Fintech App Redesign',
        description: 'Modernized the interface of a financial application to improve user trust, engagement, and overall experience.',
        role: 'Product Designer',
        duration: '5 months',
        tools: 'Figma, Sketch, After Effects, UserTesting',
        challenges: 'Financial apps require high levels of trust and security perception. We needed to modernize the interface while maintaining the professional appearance and ensuring all security features were clearly communicated.',
        outcomes: 'Significantly improved user engagement metrics, increased trust scores by 40%, and reduced support tickets by 35%. The redesign helped position the app as a modern, trustworthy financial tool.'
    }
};

// Current language state
let currentLanguage = 'en';

// DOM elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const languageToggle = document.getElementById('language-toggle');
const themeToggle = document.getElementById('theme-toggle');
const projectModal = document.getElementById('project-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const contactForm = document.getElementById('contact-form');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTheme();
    initializeLanguage();
    initializeSmoothScrolling();
    initializeProjectModals();
    initializeContactForm();
    initializeScrollEffects();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
}

// Theme switching functionality
function initializeTheme() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = `${savedTheme}-mode`;

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.className = `${newTheme}-mode`;
        localStorage.setItem('theme', newTheme);
    });
}

// Language switching functionality
function initializeLanguage() {
    languageToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
        updateLanguage();
        updateLanguageToggle();
    });
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

function updateLanguageToggle() {
    const enSpan = languageToggle.querySelector('[data-lang="lang-en"]');
    const ptSpan = languageToggle.querySelector('[data-lang="lang-pt"]');
    
    if (currentLanguage === 'en') {
        enSpan.style.display = 'inline';
        ptSpan.style.display = 'none';
    } else {
        enSpan.style.display = 'none';
        ptSpan.style.display = 'inline';
    }
}

// Smooth scrolling functionality
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Project modal functionality
function initializeProjectModals() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    // Close modal events
    modalOverlay.addEventListener('click', closeProjectModal);
    modalClose.addEventListener('click', closeProjectModal);
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Update modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-role').textContent = project.role;
    document.getElementById('modal-duration').textContent = project.duration;
    document.getElementById('modal-tools').textContent = project.tools;
    document.getElementById('modal-challenges-text').textContent = project.challenges;
    document.getElementById('modal-outcomes-text').textContent = project.outcomes;

    // Show modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Contact form functionality
function initializeContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(data.email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you! Your message has been sent successfully.', 'success');
        this.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Scroll effects and animations
function initializeScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

function initializeAnimations() {
    // Add CSS for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        .skill-category, .project-card, .timeline-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .skill-category.fade-in, .project-card.fade-in, .timeline-item.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .navbar.scrolled {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
        }
        
        .dark-mode .navbar.scrolled {
            background: rgba(10, 10, 10, 0.98);
        }
        
        .notification {
            font-family: var(--font-primary);
            font-weight: 500;
        }
    `;
    document.head.appendChild(style);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization: Debounce scroll events
const debouncedScrollHandler = debounce(function() {
    // Any additional scroll-based functionality can be added here
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Export functions for potential external use
window.PortfolioApp = {
    changeLanguage: function(lang) {
        currentLanguage = lang;
        updateLanguage();
        updateLanguageToggle();
    },
    toggleTheme: function() {
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.className = `${newTheme}-mode`;
        localStorage.setItem('theme', newTheme);
    },
    openProject: function(projectId) {
        openProjectModal(projectId);
    }
};
