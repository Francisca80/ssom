// GSAP Animations for SSOM Theme
document.addEventListener('DOMContentLoaded', function() {
    
    // Hero Section Animations
    const heroTitle = document.querySelector('.hero-title');
    const heroParagraph = document.querySelector('.hero-paragraph');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) {
        // Create a timeline for hero animations
        const heroTl = gsap.timeline();
        
        // Slide in the title from left
        heroTl.from(heroTitle, {
            x: -200,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
        })
        // Fade in paragraph
        .from(heroParagraph, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.3")
        // Slide in buttons from bottom
        .from(heroButtons, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.2");
    }
}); 