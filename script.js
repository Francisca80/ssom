// ============================================================================
// SSOM Theme JavaScript - Music School Website
// ============================================================================

// Configuration constants
const SSOM_CONFIG = {
    // Animation durations
    HERO_LINE_DURATION: 1.2,
    HERO_LINE_STAGGER: 0.4,
    HERO_PARAGRAPH_DELAY: 1.8,
    HERO_BUTTONS_DELAY: 2.0,
    
    // Auto-play intervals
    TESTIMONIAL_INTERVAL: 5000,
    
    // Marquee settings
    MARQUEE_DURATION: 40,
    
    // Guitar string settings
    STRING_COUNT: 6,
    STRING_FREQUENCIES: [82.41, 110.00, 146.83, 196.00, 246.94, 329.63], // E, A, D, G, B, E
    STRING_POSITIONS: [0.20, 0.35, 0.50, 0.65, 0.80, 0.95],
    STRING_GRAB_THRESHOLD: 70,
    STRING_RELEASE_THRESHOLD: 110,
    
    // Video settings
    VIDEO_VISIBILITY_THRESHOLD: 0.3,
    VIDEO_VOLUME: 0.7,
    
    // Animation delays
    GUITAR_STRING_DELAY: 2000,
    FALLBACK_LINE_DELAY: 3000
};

// ============================================================================
// Global State Management
// ============================================================================

const SSOM_STATE = {
    audioContext: null,
    audioInitialized: false,
    activeIntervals: [],
    activeAnimations: [],
    cleanupFunctions: []
};

// ============================================================================
// WordPress Compatibility Fixes
// ============================================================================

function fixWordPressDeprecations() {
    if (!window.wp || !window.wp.components) return;
    
    const componentsToFix = [
        'ComboboxControl',
        'SelectControl',
        'TextControl',
        'TextareaControl'
    ];
    
    componentsToFix.forEach(componentName => {
        const originalComponent = window.wp.components[componentName];
        if (originalComponent) {
            window.wp.components[componentName] = function(props) {
                return originalComponent({
                    ...props,
                    __nextHasNoMarginBottom: true
                });
            };
        }
    });
}

// ============================================================================
// Audio System
// ============================================================================

const AudioManager = {
    init() {
        if (SSOM_STATE.audioInitialized) return;
        
        try {
            SSOM_STATE.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            console.log('Audio context created, state:', SSOM_STATE.audioContext.state);
            
            if (SSOM_STATE.audioContext.state === 'suspended') {
                SSOM_STATE.audioContext.resume().then(() => {
                    SSOM_STATE.audioInitialized = true;
                    console.log('Audio context resumed successfully');
                }).catch((error) => {
                    console.log('Audio resume failed:', error);
                });
            } else {
                SSOM_STATE.audioInitialized = true;
                console.log('Audio context ready immediately');
            }
        } catch (error) {
            console.log('Audio not supported:', error);
        }
    },
    
    initOnInteraction() {
        const events = ['click', 'touchstart', 'keydown', 'mousedown'];
        events.forEach(event => {
            document.addEventListener(event, () => this.init(), { once: true });
        });
    },
    
    playGuitarString(frequency) {
        try {
            if (!SSOM_STATE.audioContext || SSOM_STATE.audioContext.state === 'suspended') {
                this.init();
                if (!SSOM_STATE.audioContext) return;
            }
            
            const oscillator = SSOM_STATE.audioContext.createOscillator();
            const gainNode = SSOM_STATE.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(SSOM_STATE.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(frequency, SSOM_STATE.audioContext.currentTime);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0, SSOM_STATE.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, SSOM_STATE.audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, SSOM_STATE.audioContext.currentTime + 0.5);
            
            oscillator.start(SSOM_STATE.audioContext.currentTime);
            oscillator.stop(SSOM_STATE.audioContext.currentTime + 0.5);
        } catch (error) {
            console.log('Audio playback failed:', error);
        }
    }
};

// ============================================================================
// Hero Section Animations
// ============================================================================

const HeroAnimations = {
    init() {
        this.animateHeroLines();
        this.animateHeroContent();
        this.initGuitarStrings();
    },
    
    animateHeroLines() {
        const heroTitle = document.querySelector('.hero .wp-block-heading');
        const heroLines = document.querySelectorAll('.hero-line');
        
        if (!heroTitle || !heroLines.length) {
            this.fallbackAnimation();
            return;
        }
        
        const heroTl = gsap.timeline();
        
        gsap.set(heroLines, {
            opacity: 0,
            x: -150,
            y: 0
        });
        
        heroTl.to(heroLines, {
            duration: SSOM_CONFIG.HERO_LINE_DURATION,
            opacity: 1,
            x: 0,
            stagger: SSOM_CONFIG.HERO_LINE_STAGGER,
            ease: "power2.out"
        }, 0.2);
        
        heroTl.to(heroLines, {
            duration: 0.3,
            y: -5,
            stagger: SSOM_CONFIG.HERO_LINE_STAGGER,
            ease: "power2.out"
        }, 0.2);
        
        heroTl.to(heroLines, {
            duration: 0.3,
            y: 0,
            stagger: SSOM_CONFIG.HERO_LINE_STAGGER,
            ease: "bounce.out"
        }, 0.5);
    },
    
    fallbackAnimation() {
        const heroTitle = document.querySelector('.hero .wp-block-heading');
        if (heroTitle) {
            gsap.from(heroTitle, {
                x: -200,
                opacity: 0,
                duration: SSOM_CONFIG.HERO_LINE_DURATION,
                ease: "power2.out"
            });
        }
    },
    
    animateHeroContent() {
        const heroParagraph = document.querySelector('.hero-paragraph');
        const heroButtons = document.querySelector('.hero-buttons');
        
        if (heroParagraph) {
            gsap.from(heroParagraph, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: SSOM_CONFIG.HERO_PARAGRAPH_DELAY
            });
        }
        
        if (heroButtons) {
            gsap.from(heroButtons, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: SSOM_CONFIG.HERO_BUTTONS_DELAY
            });
        }
    },
    
    initGuitarStrings() {
        setTimeout(() => {
            const heroTitle = document.querySelector('.hero .wp-block-heading');
            if (!heroTitle) return;
            
            for (let i = 0; i < SSOM_CONFIG.STRING_COUNT; i++) {
                const cleanup = this.createGuitarString(heroTitle, i);
                SSOM_STATE.cleanupFunctions.push(cleanup);
            }
            
            // Fallback static lines
            setTimeout(() => {
                if (!heroTitle.querySelector('.elastic-line')) {
                    this.createFallbackLines(heroTitle);
                }
            }, SSOM_CONFIG.FALLBACK_LINE_DELAY);
            
        }, SSOM_CONFIG.GUITAR_STRING_DELAY);
    },
    
    createGuitarString(container, stringIndex) {
        const getContainerRect = () => container.getBoundingClientRect();
        const rect = getContainerRect();
        const containerWidth = rect.width;
        const containerHeight = rect.height;
        
        const lineY = containerHeight * SSOM_CONFIG.STRING_POSITIONS[stringIndex];
        const centerX = containerWidth / 2;
        const currentFrequency = SSOM_CONFIG.STRING_FREQUENCIES[stringIndex];
        
        let isGrabbed = false;
        let currentX = centerX;
        let currentY = lineY;
        
        // Create SVG
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('class', 'elastic-line');
        svg.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;z-index:1;';
        
        const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute('stroke', '#ddd');
        pathElement.setAttribute('stroke-width', '2');
        pathElement.setAttribute('fill', 'none');
        pathElement.setAttribute('stroke-linecap', 'round');
        
        svg.appendChild(pathElement);
        container.appendChild(svg);
        
        // Mouse move handler
        const mouseMoveHandler = (e) => {
            const currentRect = getContainerRect();
            const relativeX = e.clientX - currentRect.left;
            const relativeY = e.clientY - currentRect.top;
            
            // Check bounds
            if (relativeX < 0 || relativeX > currentRect.width || 
                relativeY < 0 || relativeY > currentRect.height) {
                if (isGrabbed) {
                    isGrabbed = false;
                    container.style.cursor = 'default';
                }
                return;
            }
            
            // Check proximity
            const yDistance = Math.abs(relativeY - lineY);
            const xDistance = Math.abs(relativeX - centerX);
            const isNearString = yDistance < 40 && xDistance < 200;
            
            if (isNearString && !isGrabbed) {
                isGrabbed = true;
                container.style.cursor = 'grab';
                AudioManager.playGuitarString(currentFrequency);
            } else if (!isNearString && isGrabbed) {
                isGrabbed = false;
                container.style.cursor = 'default';
            }
            
            // Update position
            if (isGrabbed) {
                const bounceX = (relativeX - centerX) * 0.7;
                const bounceY = (relativeY - lineY) * 0.5;
                currentX = centerX + bounceX;
                currentY = lineY + bounceY;
            } else {
                currentX += (centerX - currentX) * 0.2;
                currentY += (lineY - currentY) * 0.2;
            }
            
            // Update SVG path
            const path = `M 0 ${lineY} Q ${currentX} ${currentY} ${currentRect.width} ${lineY}`;
            pathElement.setAttribute('d', path);
            
            // Visual feedback
            pathElement.setAttribute('stroke', isGrabbed ? '#bbb' : '#ddd');
            pathElement.setAttribute('stroke-width', isGrabbed ? '3' : '2');
        };
        
        // Touch handler
        const touchHandler = (e) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                mouseMoveHandler({ clientX: touch.clientX, clientY: touch.clientY });
            }
        };
        
        // Add event listeners
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('touchmove', touchHandler, { passive: true });
        document.addEventListener('touchstart', touchHandler, { passive: true });
        
        // Initial path
        const path = `M 0 ${lineY} Q ${centerX} ${lineY} ${containerWidth} ${lineY}`;
        pathElement.setAttribute('d', path);
        
        // Return cleanup function
        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('touchmove', touchHandler);
            if (svg.parentNode) svg.parentNode.removeChild(svg);
        };
    },
    
    createFallbackLines(heroTitle) {
        for (let i = 0; i < SSOM_CONFIG.STRING_COUNT; i++) {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
            svg.setAttribute('viewBox', '0 0 100 100');
            svg.setAttribute('preserveAspectRatio', 'none');
            svg.setAttribute('class', 'fallback-line');
            svg.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;z-index:1;';
            
            const lineY = 30 + (i * 10);
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('stroke', '#ddd');
            path.setAttribute('stroke-width', '2');
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('d', `M 0 ${lineY} Q 50 ${lineY} 100 ${lineY}`);
            
            svg.appendChild(path);
            heroTitle.appendChild(svg);
        }
    }
};

// ============================================================================
// Marquee Animation
// ============================================================================

const MarqueeAnimation = {
    init() {
        const marqueeTracks = document.querySelectorAll(".marquee-track");
        
        marqueeTracks.forEach((track, index) => {
            const content = track.querySelector(".marquee-content");
            if (!content) return;
            
            const clone = content.cloneNode(true);
            track.appendChild(clone);
            
            const distance = content.offsetWidth;
            gsap.set(track, { x: 0 });
            
            if (index % 2 === 0) {
                gsap.to(track, {
                    x: -distance,
                    duration: SSOM_CONFIG.MARQUEE_DURATION,
                    ease: "none",
                    repeat: -1
                });
            } else {
                gsap.fromTo(track, 
                    { x: -distance }, 
                    {
                        x: 0,
                        duration: SSOM_CONFIG.MARQUEE_DURATION,
                        ease: "none",
                        repeat: -1
                    }
                );
            }
        });
    }
};

// ============================================================================
// Testimonial Carousel
// ============================================================================

const TestimonialCarousel = {
    init() {
        const testimonialCarousels = document.querySelectorAll('.testimonial-carousel');
        
        testimonialCarousels.forEach(carousel => {
            const testimonials = carousel.querySelectorAll('.testimonial');
            const prevBtn = carousel.parentElement.querySelector('.testimonial-nav.prev');
            const nextBtn = carousel.parentElement.querySelector('.testimonial-nav.next');
            
            if (!testimonials.length || !prevBtn || !nextBtn) return;
            
            let currentIndex = 0;
            
            function showTestimonial(index) {
                testimonials.forEach(testimonial => {
                    testimonial.classList.remove('active');
                });
                
                testimonials[index].classList.add('active');
                
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
            
            nextBtn.addEventListener('click', nextTestimonial);
            prevBtn.addEventListener('click', prevTestimonial);
            
            showTestimonial(currentIndex);
            
            const intervalId = setInterval(nextTestimonial, SSOM_CONFIG.TESTIMONIAL_INTERVAL);
            SSOM_STATE.activeIntervals.push(intervalId);
        });
    }
};

// ============================================================================
// Scroll Animations
// ============================================================================

const ScrollAnimations = {
    init() {
        this.initLessenScroll();
        this.initLessenSection();
    },
    
    initLessenScroll() {
        // Only apply scroll animations to lessen section elements
        const lessenSection = document.querySelector('.lessen-section');
        if (!lessenSection) return;
        
        document.addEventListener("scroll", () => {
            lessenSection.querySelectorAll(".lessen-block, .wp-block-column img").forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add("is-visible");
                }
            });
        });
    },
    
    initLessenSection() {
        const lessenSection = document.querySelector('.lessen-section');
        if (!lessenSection) return;
        
        const lessenObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    lessenSection.classList.add('animate');
                    
                    if (typeof gsap !== 'undefined') {
                        const blocks = lessenSection.querySelectorAll('.wp-block-columns, .lessen-block, .wp-block-image');
                        
                        gsap.fromTo(blocks, 
                            {
                                x: -100,
                                opacity: 0
                            },
                            {
                                x: 0,
                                opacity: 1,
                                duration: 0.8,
                                stagger: 0.2,
                                ease: "power2.out",
                                delay: 0.2
                            }
                        );
                    }
                    
                    lessenObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        lessenObserver.observe(lessenSection);
    }
};

// ============================================================================
// Video Controls
// ============================================================================

const VideoControls = {
    init() {
        const aboutVideo = document.getElementById('about-video');
        if (!aboutVideo) return;
        
        aboutVideo.muted = true;
        
        aboutVideo.addEventListener('error', (e) => {
            console.log('Video error:', e);
        });
        
        aboutVideo.addEventListener('loadeddata', () => {
            console.log('About video loaded and ready');
        });
        
        // Intersection observer
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutVideo.muted = false;
                    aboutVideo.volume = SSOM_CONFIG.VIDEO_VOLUME;
                    
                    aboutVideo.play().catch(error => {
                        console.log('Video autoplay failed:', error);
                    });
                } else {
                    aboutVideo.muted = true;
                    aboutVideo.pause();
                }
            });
        }, {
            threshold: SSOM_CONFIG.VIDEO_VISIBILITY_THRESHOLD,
            rootMargin: '0px 0px -5% 0px'
        });
        
        videoObserver.observe(aboutVideo);
        
        // Click handler
        aboutVideo.addEventListener('click', () => {
            if (aboutVideo.paused) {
                aboutVideo.muted = false;
                aboutVideo.volume = SSOM_CONFIG.VIDEO_VOLUME;
                aboutVideo.play().catch(error => {
                    console.log('Manual play failed:', error);
                });
            }
        });
        
        // Enable audio on interaction
        let audioEnabled = false;
        function enableAudio() {
            if (!audioEnabled) {
                aboutVideo.muted = false;
                aboutVideo.volume = SSOM_CONFIG.VIDEO_VOLUME;
                audioEnabled = true;
                console.log('About video audio enabled');
            }
        }
        
        aboutVideo.addEventListener('click', enableAudio, { once: true });
        aboutVideo.addEventListener('touchstart', enableAudio, { once: true });
    }
};

// ============================================================================
// Contact Form 7 Integration
// ============================================================================

const ContactForm = {
    init() {
        document.addEventListener('wpcf7mailsent', function () {
            const msg = document.querySelector('.form-thank-you');
            if (msg) {
                msg.style.display = 'block';
            }
        }, false);
    }
};

// ============================================================================
// Blog Image Parallax
// ============================================================================

const BlogParallax = {
    init() {
        // Only run on blog pages
        const blogImages = document.querySelectorAll('.blog-section .blog-card .wp-block-post-featured-image img, .blog-hero .wp-block-post-featured-image img');
        
        if (!blogImages.length) return;
        
        // Use GSAP ScrollTrigger for smooth parallax
        blogImages.forEach(img => {
            gsap.to(img, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: img.closest('.blog-card, .featured-post-card'),
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                    invalidateOnRefresh: true
                }
            });
        });
    }
};

// ============================================================================
// Studio Gallery Animations
// ============================================================================

const StudioGalleryAnimations = {
    init() {
        const gallerySection = document.querySelector('.studio-gallery-section');
        if (!gallerySection) return;
        
        // Animate header card
        const headerCard = gallerySection.querySelector('.is-style-section-3');
        if (headerCard) {
            gsap.from(headerCard, {
                scale: 0.9,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: headerCard,
                    start: "top 80%",
                    once: true
                }
            });
        }
        
        // Animate gallery images with stagger
        const galleryImages = gallerySection.querySelectorAll('.wp-block-image');
        if (galleryImages.length > 0) {
            gsap.from(galleryImages, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: galleryImages[0],
                    start: "top 85%",
                    once: true
                }
            });
            
            // Add subtle parallax to images
            galleryImages.forEach(imageBlock => {
                const img = imageBlock.querySelector('img');
                if (img) {
                    gsap.to(img, {
                        yPercent: -10,
                        ease: "none",
                        scrollTrigger: {
                            trigger: imageBlock,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 2,
                            invalidateOnRefresh: true
                        }
                    });
                }
            });
        }
    }
};

// ============================================================================
// Resource Cleanup
// ============================================================================

function cleanup() {
    // Clear intervals
    SSOM_STATE.activeIntervals.forEach(id => clearInterval(id));
    SSOM_STATE.activeIntervals = [];
    
    // Cancel animations
    SSOM_STATE.activeAnimations.forEach(id => cancelAnimationFrame(id));
    SSOM_STATE.activeAnimations = [];
    
    // Run cleanup functions
    SSOM_STATE.cleanupFunctions.forEach(fn => fn());
    SSOM_STATE.cleanupFunctions = [];
    
    console.log('SSOM resources cleaned up');
}

// ============================================================================
// Main Initialization
// ============================================================================

function initSSOM() {
    console.log('=== SCRIPT.JS LOADED ===', new Date().toISOString());
    
    // Check GSAP dependency
    if (typeof gsap === 'undefined') {
        console.error('GSAP is not loaded!');
        return;
    }
    
    // Register GSAP plugins
    if (gsap.registerPlugin) {
        gsap.registerPlugin(ScrollTrigger);
        
        try {
            gsap.registerPlugin(TextPlugin);
        } catch (e) {
            console.error('TextPlugin registration failed:', e);
        }
    }
    
    // Initialize WordPress fixes
    fixWordPressDeprecations();
    
    // Initialize audio system
    AudioManager.initOnInteraction();
    
    // Initialize all features
    HeroAnimations.init();
    MarqueeAnimation.init();
    TestimonialCarousel.init();
    ScrollAnimations.init();
    VideoControls.init();
    ContactForm.init();
    BlogParallax.init();
    StudioGalleryAnimations.init();
    
    console.log('SSOM theme initialized successfully');
}

// ============================================================================
// Event Listeners
// ============================================================================

document.addEventListener('DOMContentLoaded', initSSOM);
window.addEventListener('beforeunload', cleanup);

// ============================================================================
// End of SSOM Theme JavaScript
// ============================================================================
/* Cache buster: Thu Oct 30 2025 - Added studio gallery animations */
