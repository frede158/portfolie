const slider = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

if (slider && slides.length && prevButton && nextButton) {
    let currentSlide = 0;
    
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });
    
    nextButton.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlider();
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll-based animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.section, .project-section').forEach((section) => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // script.js
    document.addEventListener('DOMContentLoaded', function() {
        // Add scroll event listener to handle header visibility
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const currentScrollY = window.scrollY;
            
            // Add/remove shadow based on scroll position
            if (currentScrollY > 0) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
            
            lastScrollY = currentScrollY;
        });

        // Add click event listeners to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                // You can add navigation to project detail pages here
                const projectTitle = card.querySelector('.project-title').textContent;
                console.log(`Clicked project: ${projectTitle}`);
            });
        });
    });
}

const tools = [
    { name: 'Figma', image: 'images/figma.svg', link: 'https://www.figma.com' },
    { name: 'WordPress', image: 'images/wordpress.svg', link: 'https://wordpress.org' },
    { name: 'GitHub', image: 'images/github.svg', link: 'https://github.com' },
    { name: 'Shopify', image: 'images/shopify.svg', link: 'https://www.shopify.com' },
    { name: 'Adobe', image: 'images/adobe.svg', link: 'https://www.adobe.com' },
    { name: 'VS Code', image: 'images/visual-studio-code.svg', link: 'https://code.visualstudio.com' },
    { name: 'Canva', image: 'images/canva.svg', link: 'https://www.canva.com' },
    { name: 'CSS3', image: 'images/css.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'HTML5', image: 'images/html.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'JavaScript', image: 'images/js.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Cursor', image: 'images/cursor-logo.svg', link: 'https://cursor.sh' },
    { name: 'Claude', image: 'images/claude.svg', link: 'https://claude.ai' },
    { name: 'Copilot', image: 'images/copilot.svg', link: 'https://github.com/features/copilot' },
    { name: 'Deepseek', image: 'images/deepseek.svg', link: 'https://deepseek.ai' },
    { name: 'Perplexity', image: 'images/perplexity.svg', link: 'https://www.perplexity.ai' },
    { name: 'ChatGPT', image: 'images/chatgpt.svg', link: 'https://chat.openai.com' }
];

const toolsContainer = document.getElementById('toolsContainer');

tools.forEach(tool => {
    const toolElement = document.createElement('div');
    toolElement.className = 'tool';
    toolElement.style.cursor = 'pointer';
    toolElement.innerHTML = `
        <img src="${tool.image}" alt="${tool.name} icon">
        <span>${tool.name}</span>
    `;
    toolElement.addEventListener('click', () => {
        window.open(tool.link, '_blank');
    });
    toolsContainer.appendChild(toolElement);
});