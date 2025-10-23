document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, checking GSAP...');
    
            // Check if GSAP is loaded
            if (typeof gsap === 'undefined') {
                console.error('GSAP is not loaded!');
                return;
            }
            
            console.log('GSAP loaded successfully');
            console.log('GSAP version:', gsap.version);
            console.log('Available GSAP plugins:', Object.keys(gsap));
    
            // Register ScrollTrigger plugin
            if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
                gsap.registerPlugin(ScrollTrigger);
                console.log('ScrollTrigger registered');
            }
            
            // Check if TextPlugin is available
            if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
                try {
                    gsap.registerPlugin(TextPlugin);
                    console.log('TextPlugin registered successfully');
                } catch (e) {
                    console.error('TextPlugin registration failed:', e);
                }
            }

    // Hero Typewriter Animation (GSAP "Animate Anything" style)
    const heroTitle = document.querySelector('.hero-title');
    const heroParagraph = document.querySelector('.hero-paragraph');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroChars = document.querySelectorAll('.hero-char');

            console.log('Hero elements found:', {
                heroTitle: !!heroTitle,
                heroParagraph: !!heroParagraph,
                heroButtons: !!heroButtons,
                heroChars: heroChars.length
            });

    if (heroTitle && heroChars.length > 0) {
        console.log('Starting simple GSAP animation...');
        
        // Create the main timeline
        const heroTl = gsap.timeline();

        // Set initial states for all characters
        gsap.set(heroChars, {
            opacity: 0,
            y: 50,
            scale: 0.8,
            transformOrigin: "center center"
        });

        // Simple entrance animation
        heroTl.to(heroChars, {
            duration: 0.8,
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            ease: "power2.out"
        });
        
    } else {
        console.log('Hero characters not found, using fallback animation...');
        
        // Fallback: Simple hero animation
        if (heroTitle) {
            gsap.from(heroTitle, {
                x: -200,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out"
            });
        }
        
        if (heroParagraph) {
            gsap.from(heroParagraph, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.3
            });
        }
        
        if (heroButtons) {
            gsap.from(heroButtons, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.5
            });
        }
    }

    // Marquee animation
    const marqueeTracks = document.querySelectorAll(".marquee-track");

    marqueeTracks.forEach((track, index) => {
        const content = track.querySelector(".marquee-content");
        if (!content) return;
        
        // Clone the content for seamless loop
        const clone = content.cloneNode(true);
        track.appendChild(clone);
    
        const distance = content.offsetWidth;
    
        gsap.set(track, { x: 0 });
    
        if (index % 2 === 0) {
            // Move left for even tracks
            gsap.to(track, {
                x: -distance,
                duration: 40,
                ease: "none",
                repeat: -1
            });
        } else {
            // Move right for odd tracks
            gsap.fromTo(track, 
                { x: -distance }, 
                {
                    x: 0,
                    duration: 40,
                    ease: "none",
                    repeat: -1
                }
            );
        }
    });

    // Testimonial Carousel
    const testimonialCarousels = document.querySelectorAll('.testimonial-carousel');
    
    testimonialCarousels.forEach(carousel => {
        const testimonials = carousel.querySelectorAll('.testimonial');
        const prevBtn = carousel.parentElement.querySelector('.testimonial-nav.prev');
        const nextBtn = carousel.parentElement.querySelector('.testimonial-nav.next');
        
        if (!testimonials.length || !prevBtn || !nextBtn) return;
        
        let currentIndex = 0;
        
        function showTestimonial(index) {
            // Hide all testimonials
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            
            // Show current testimonial
            testimonials[index].classList.add('active');
            
            // Update button states
            prevBtn.style.opacity = index === 0 ? '0.5' : '1';
            nextBtn.style.opacity = index === testimonials.length - 1 ? '0.5' : '1';
        }
        
        function nextTestimonial() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }
        
        function prevTestimonial() {
            currentIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
            showTestimonial(currentIndex);
        }
        
        // Event listeners
        nextBtn.addEventListener('click', nextTestimonial);
        prevBtn.addEventListener('click', prevTestimonial);
        
        // Initialize
        showTestimonial(currentIndex);
        
        // Auto-advance every 5 seconds
        setInterval(nextTestimonial, 5000);
    });
});