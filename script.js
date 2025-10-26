document.addEventListener('DOMContentLoaded', function () {
    
    // Fix Contact Form 7 deprecation warnings
    // This adds the __nextHasNoMarginBottom prop to fix various component warnings
    if (window.wp && window.wp.components) {
        // Fix ComboboxControl
        const originalComboboxControl = window.wp.components.ComboboxControl;
        if (originalComboboxControl) {
            window.wp.components.ComboboxControl = function(props) {
                return originalComboboxControl({
                    ...props,
                    __nextHasNoMarginBottom: true
                });
            };
        }
        
        // Fix SelectControl
        const originalSelectControl = window.wp.components.SelectControl;
        if (originalSelectControl) {
            window.wp.components.SelectControl = function(props) {
                return originalSelectControl({
                    ...props,
                    __nextHasNoMarginBottom: true
                });
            };
        }
        
        // Fix TextControl
        const originalTextControl = window.wp.components.TextControl;
        if (originalTextControl) {
            window.wp.components.TextControl = function(props) {
                return originalTextControl({
                    ...props,
                    __nextHasNoMarginBottom: true
                });
            };
        }
        
        // Fix TextareaControl
        const originalTextareaControl = window.wp.components.TextareaControl;
        if (originalTextareaControl) {
            window.wp.components.TextareaControl = function(props) {
                return originalTextareaControl({
                    ...props,
                    __nextHasNoMarginBottom: true
                });
            };
        }
    }
    
    // Global audio context initialization
    let globalAudioContext = null;
    let audioInitialized = false;
    
    // Initialize audio on first user interaction
    function initGlobalAudio() {
        if (!audioInitialized) {
            try {
                globalAudioContext = new (window.AudioContext || window.webkitAudioContext)();
                if (globalAudioContext.state === 'suspended') {
                    globalAudioContext.resume().then(() => {
                        audioInitialized = true;
                    }).catch((error) => {
                        console.log('Audio resume failed:', error);
                    });
                } else {
                    audioInitialized = true;
                }
            } catch (error) {
                console.log('Audio not supported:', error);
            }
        }
    }
    
    // Initialize audio on any user interaction
    document.addEventListener('click', initGlobalAudio, { once: true });
    document.addEventListener('touchstart', initGlobalAudio, { once: true });
    document.addEventListener('keydown', initGlobalAudio, { once: true });
    document.addEventListener('mousedown', initGlobalAudio, { once: true });
    
            // Check if GSAP is loaded
            if (typeof gsap === 'undefined') {
                console.error('GSAP is not loaded!');
                return;
            }
            
    
    // Register ScrollTrigger plugin
    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
        gsap.registerPlugin(ScrollTrigger);
    }

            // Check if TextPlugin is available
            if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
                try {
                    gsap.registerPlugin(TextPlugin);
                } catch (e) {
                    console.error('TextPlugin registration failed:', e);
                }
            }

           // Hero "Sound Lines" Musical Staff Animation
    const heroTitle = document.querySelector('.hero .wp-block-heading');
           const heroLines = document.querySelectorAll('.hero-line');
    const heroParagraph = document.querySelector('.hero-paragraph');
    const heroButtons = document.querySelector('.hero-buttons');


           if (heroTitle && heroLines.length > 0) {
               
               // Create the main timeline
        const heroTl = gsap.timeline();

               // Set initial states for all lines
               gsap.set(heroLines, {
                   opacity: 0,
                   x: -150,
                   y: 0
               });

               // Musical staff line animation - each line slides in from left
               heroTl.to(heroLines, {
                   duration: 1.2,
                   opacity: 1,
                   x: 0,
                   stagger: 0.4, // Stagger between each line
                   ease: "power2.out"
               }, 0.2); // Start after a brief delay
               
               // Add subtle bounce effect to each line
               heroTl.to(heroLines, {
                   duration: 0.3,
                   y: -5,
                   stagger: 0.4,
                   ease: "power2.out"
               }, 0.2);
               
               heroTl.to(heroLines, {
                   duration: 0.3,
                   y: 0,
                   stagger: 0.4,
                   ease: "bounce.out"
               }, 0.5);
               
           } else {
               
               // Fallback: Simple hero animation
               if (heroTitle) {
                   gsap.from(heroTitle, {
            x: -200,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
                   });
               }
           }

           // Animate paragraph and buttons after hero lines
           if (heroParagraph) {
               gsap.from(heroParagraph, {
            y: 30,
            opacity: 0,
            duration: 0.8,
                   ease: "power2.out",
                   delay: 1.8 // Start after hero lines animation
               });
           }
           
           if (heroButtons) {
               gsap.from(heroButtons, {
            y: 50,
            opacity: 0,
            duration: 0.8,
                   ease: "power2.out",
                   delay: 2.0 // Start after paragraph
               });
           }

           // Elastic Line Effect for Guitar Strings
           function createElasticLine(element, position = 'bottom') {
               // Get element dimensions
               const rect = element.getBoundingClientRect();
               const elementWidth = rect.width;
               const elementHeight = rect.height;
               
               // Center point relative to element
               const centerX = elementWidth / 2;
               const lineY = position === 'top' ? elementHeight * 0.2 : elementHeight * 0.8;
               
               let isGrabbed = false;
               let currentX = centerX;
               let currentY = lineY;
               
               const grabThreshold = 50;
               const releaseThreshold = 100;
               
               // Create SVG container
               const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
               svg.setAttribute('width', '100%');
               svg.setAttribute('height', '100%');
               svg.setAttribute('class', 'elastic-line');
               svg.style.position = 'absolute';
               svg.style.top = '0';
               svg.style.left = '0';
               svg.style.pointerEvents = 'none';
               svg.style.zIndex = '1';
               
               // Create path element
               const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
               pathElement.setAttribute('stroke', '#ddd');
               pathElement.setAttribute('stroke-width', '2');
               pathElement.setAttribute('fill', 'none');
               pathElement.setAttribute('stroke-linecap', 'round');
               
               svg.appendChild(pathElement);
               element.appendChild(svg);
               
               function updateLine(mouseX, mouseY) {
                   // Convert mouse coordinates to element-relative coordinates
                   const elementRect = element.getBoundingClientRect();
                   const relativeX = mouseX - elementRect.left;
                   const relativeY = mouseY - elementRect.top;
                   
                   const distance = Math.sqrt(Math.pow(relativeX - centerX, 2) + Math.pow(relativeY - lineY, 2));
                   
                   if (distance < grabThreshold && !isGrabbed) {
                       isGrabbed = true;
                       element.style.cursor = 'grab';
                   } else if (distance > releaseThreshold && isGrabbed) {
                       isGrabbed = false;
                       element.style.cursor = 'pointer';
                   }
                   
                   if (isGrabbed) {
                       currentX = relativeX;
                       currentY = relativeY;
                   } else {
                       // Spring back to center
                       currentX += (centerX - currentX) * 0.1;
                       currentY += (lineY - currentY) * 0.1;
                   }
                   
                   // Create SVG path for elastic line
                   const startX = 0;
                   const endX = elementWidth;
                   const startY = lineY;
                   const endY = lineY;
                   
                   const controlX = currentX;
                   const controlY = currentY;
                   
                   const path = `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
                   pathElement.setAttribute('d', path);
               }
               
               // Initial line (straight)
               updateLine(centerX, lineY);
               
               document.addEventListener('mousemove', (e) => {
                   updateLine(e.clientX, e.clientY);
               });
               
               return updateLine;
           }

           // Create 6 guitar strings equally spaced around the hero title
           function createGuitarString(container, stringIndex) {
               
               // Get fresh container dimensions
               const getContainerRect = () => container.getBoundingClientRect();
               const rect = getContainerRect();
               const containerWidth = rect.width;
               const containerHeight = rect.height;
               
               // Calculate 6 positions centered around the text
               const positions = [0.20, 0.35, 0.50, 0.65, 0.80, 0.95]; // More centered with text
               const lineY = containerHeight * positions[stringIndex];
               
               const centerX = containerWidth / 2;
               let isGrabbed = false;
               let currentX = centerX;
               let currentY = lineY;
               
               const grabThreshold = 70; // Adjusted for better spacing
               const releaseThreshold = 110; // Adjusted for better spacing
               
               // Guitar string frequencies (in Hz) - standard guitar tuning
               const stringFrequencies = [82.41, 110.00, 146.83, 196.00, 246.94, 329.63]; // E, A, D, G, B, E
               const currentFrequency = stringFrequencies[stringIndex];
               
               // Create audio context for sound generation
               let audioContext = null;
               let oscillator = null;
               let gainNode = null;
               
               // Initialize audio context
               function initAudio() {
                   if (!audioContext) {
                       // Use global audio context if available and initialized
                       if (globalAudioContext && audioInitialized) {
                           audioContext = globalAudioContext;
                       } else {
                           // Don't create new audio context, wait for user interaction
                           return false;
                       }
                   }
                   
                   // Resume audio context if suspended (browser autoplay policy)
                   if (audioContext.state === 'suspended') {
                       audioContext.resume().then(() => {
                       }).catch((error) => {
                           console.log('Audio context resume failed:', error);
                           return false;
                       });
                   }
                   
                   return true;
               }
               
               // Play string sound
               function playStringSound() {
                   try {
                       if (!initAudio()) {
                           return; // Audio not available
                       }
                       
                       // Create oscillator for the string frequency
                       oscillator = audioContext.createOscillator();
                       gainNode = audioContext.createGain();
                       
                       // Connect oscillator to gain to audio context
                       oscillator.connect(gainNode);
                       gainNode.connect(audioContext.destination);
                       
                       // Set frequency for this string
                       oscillator.frequency.setValueAtTime(currentFrequency, audioContext.currentTime);
                       oscillator.type = 'sine'; // Smooth sine wave
                       
                       // Set volume envelope (quick attack, slow decay)
                       gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                       gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01); // Quick attack
                       gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5); // Slow decay
                       
                       // Start and stop the sound
                       oscillator.start(audioContext.currentTime);
                       oscillator.stop(audioContext.currentTime + 0.5);
                   } catch (error) {
                       console.log('Audio playback failed:', error);
                   }
               }
               
               // Create SVG container
               const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
               svg.setAttribute('width', '100%');
               svg.setAttribute('height', '100%');
               svg.setAttribute('class', 'elastic-line');
               svg.style.position = 'absolute';
               svg.style.top = '0';
               svg.style.left = '0';
               svg.style.pointerEvents = 'none';
               svg.style.zIndex = '1';
               
               // Create path element
               const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
               pathElement.setAttribute('stroke', '#ddd');
               pathElement.setAttribute('stroke-width', '2');
               pathElement.setAttribute('fill', 'none');
               pathElement.setAttribute('stroke-linecap', 'round');
               
               svg.appendChild(pathElement);
               container.appendChild(svg);
               
               // Create a dedicated mouse move handler for this specific string only
               const mouseMoveHandler = (e) => {
                   // Get fresh container rect in case of resize
                   const currentRect = getContainerRect();
                   const relativeX = e.clientX - currentRect.left;
                   const relativeY = e.clientY - currentRect.top;
                   
                   // Check if mouse is within container bounds
                   if (relativeX < 0 || relativeX > currentRect.width || 
                       relativeY < 0 || relativeY > currentRect.height) {
                       if (isGrabbed) {
                           isGrabbed = false;
                           container.style.cursor = 'default';
                       }
                       return;
                   }
                   
                   // Check if mouse is near THIS SPECIFIC string only
                   // Use only Y distance for more precise detection
                   const yDistance = Math.abs(relativeY - lineY);
                   const xDistance = Math.abs(relativeX - centerX);
                   
                   // More lenient X threshold, stricter Y threshold
                   const isNearString = yDistance < 40 && xDistance < 200;
                   
                   // Only this string responds to mouse proximity
                   if (isNearString && !isGrabbed) {
                       isGrabbed = true;
                       container.style.cursor = 'grab';
                       
                       // Play sound when string is grabbed
                       playStringSound();
                   } else if (!isNearString && isGrabbed) {
                       isGrabbed = false;
                       container.style.cursor = 'default';
                   }
                   
                   // Only update THIS string's position
                   if (isGrabbed) {
                       // Follow cursor with elastic effect - only for this string
                       const bounceX = (relativeX - centerX) * 0.7;
                       const bounceY = (relativeY - lineY) * 0.5;
                       
                       currentX = centerX + bounceX;
                       currentY = lineY + bounceY;
                   } else {
                       // Spring back to center with elastic damping - only for this string
                       currentX += (centerX - currentX) * 0.2;
                       currentY += (lineY - currentY) * 0.2;
                   }
                   
                   // Update only THIS string's SVG path
                   const startX = 0;
                   const endX = currentRect.width;
                   const startY = lineY;
                   const endY = lineY;
                   
                   const controlX = currentX;
                   const controlY = currentY;
                   
                   const path = `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
                   pathElement.setAttribute('d', path);
                   
                   // Add visual feedback only to THIS string
                   if (isGrabbed) {
                       pathElement.setAttribute('stroke', '#bbb');
                       pathElement.setAttribute('stroke-width', '3');
                   } else {
                       pathElement.setAttribute('stroke', '#ddd');
                       pathElement.setAttribute('stroke-width', '2');
                   }
               };
               
               // Add event listeners for both mouse and touch
               document.addEventListener('mousemove', mouseMoveHandler);
               
               // Touch support for mobile devices
               const touchHandler = (e) => {
                   if (e.touches.length > 0) {
                       const touch = e.touches[0];
                       // Convert touch to mouse-like event
                       const mouseEvent = {
                           clientX: touch.clientX,
                           clientY: touch.clientY
                       };
                       mouseMoveHandler(mouseEvent);
                   }
               };
               
               document.addEventListener('touchmove', touchHandler, { passive: true });
               
               // Initial line (straight)
               const path = `M 0 ${lineY} Q ${centerX} ${lineY} ${containerWidth} ${lineY}`;
               pathElement.setAttribute('d', path);
               
               // Return cleanup function
               return () => {
                   document.removeEventListener('mousemove', mouseMoveHandler);
                   document.removeEventListener('touchmove', touchHandler);
               };
           }

           setTimeout(() => {
               
               const heroTitle = document.querySelector('.hero .wp-block-heading');
               if (heroTitle) {
                   // Create 6 completely independent strings
                   const stringCleanupFunctions = [];
                   
                   for (let i = 0; i < 6; i++) {
                       const cleanup = createGuitarString(heroTitle, i);
                       stringCleanupFunctions.push(cleanup);
                   }
                   
                   // Store cleanup functions for potential cleanup later
                   heroTitle._stringCleanupFunctions = stringCleanupFunctions;
               }
           }, 2000);

           // Fallback: Add simple static lines if elastic lines don't work
           setTimeout(() => {
               // Only create fallback if no elastic lines were created
               const heroTitle = document.querySelector('.hero .wp-block-heading');
               if (heroTitle && !heroTitle.querySelector('.elastic-line')) {
                   // Create exactly 6 lines for the fallback
                   for (let i = 0; i < 6; i++) {
                       const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                       svg.setAttribute('width', '100%');
                       svg.setAttribute('height', '100%');
                       svg.setAttribute('viewBox', '0 0 100 100');
                       svg.setAttribute('preserveAspectRatio', 'none');
                       svg.setAttribute('class', 'fallback-line');
                       svg.style.position = 'absolute';
                       svg.style.top = '0';
                       svg.style.left = '0';
                       svg.style.pointerEvents = 'none';
                       svg.style.zIndex = '1';
                       
                       // Position each line at different heights (6 strings) - centered with text
                       const lineY = 30 + (i * 10); // Space lines evenly, more centered
                       
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
           }, 3000);

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

// Lessen Section - Scroll-triggered fade-in animation
document.addEventListener("scroll", () => {
    document.querySelectorAll(".lessen-block, .wp-block-column img").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("is-visible");
        }
    });
});

// Reviews Section - Testimonial Carousel
document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial");
    const nextBtn = document.querySelector(".testimonial-nav.next a");
    const prevBtn = document.querySelector(".testimonial-nav.prev a");
    let current = 0;

    if (testimonials.length === 0 || !nextBtn || !prevBtn) return;

    function showTestimonial(index) {
        testimonials.forEach(t => t.classList.remove("active"));
        testimonials[index].classList.add("active");
    }

    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        current = (current + 1) % testimonials.length;
        showTestimonial(current);
    });

    prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        current = (current - 1 + testimonials.length) % testimonials.length;
        showTestimonial(current);
    });

// Initialize first testimonial
showTestimonial(0);
});

// Contact Form 7 - Success message
document.addEventListener('wpcf7mailsent', function () {
  const msg = document.querySelector('.form-thank-you');
  if (msg) {
    msg.style.display = 'block';
  }
}, false);

// Swiper.js Carousel Initialization
document.addEventListener('DOMContentLoaded', function() {
  // Check if Swiper is available
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper.js is not loaded');
    return;
  }

  // Initialize Swiper for over-ons carousel
  const overOnsCarousel = document.querySelector('.over-ons-carousel .swiper');
  if (overOnsCarousel) {
    new Swiper(overOnsCarousel, {
      // Basic settings
      slidesPerView: 'auto',
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      
      // Navigation
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: false,
      },
      
      // Pagination - Disabled
      pagination: {
        enabled: false,
      },
      
      // Responsive breakpoints
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      },
      
      // Touch/swipe settings
      touchRatio: 1,
      touchAngle: 45,
      grabCursor: true,
      
      // Animation settings
      speed: 600,
      effect: 'slide',
      
      // Accessibility
      a11y: {
        enabled: true,
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
    });
  }
});