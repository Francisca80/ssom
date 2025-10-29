// IMMEDIATE TEST - This should show immediately
console.log('=== SCRIPT.JS LOADED ===', new Date().toISOString());

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
    
    // Initialize audio context
    function initGlobalAudio() {
        if (!audioInitialized) {
            try {
                globalAudioContext = new (window.AudioContext || window.webkitAudioContext)();
                console.log('Audio context created, state:', globalAudioContext.state);
                
                if (globalAudioContext.state === 'suspended') {
                    globalAudioContext.resume().then(() => {
                        audioInitialized = true;
                        console.log('Audio context resumed successfully');
                    }).catch((error) => {
                        console.log('Audio resume failed:', error);
                    });
                } else {
                    audioInitialized = true;
                    console.log('Audio context ready immediately');
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
    
    // Try to initialize audio on page load
    document.addEventListener('DOMContentLoaded', function() {
        initGlobalAudio();
    });
    
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

           // Hero audio will use the global audio context
           // No need for separate initialization

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
                       // Use global audio context if available
                       if (globalAudioContext) {
                           audioContext = globalAudioContext;
                       } else {
                           // Create a new audio context for this string
                           try {
                               audioContext = new (window.AudioContext || window.webkitAudioContext)();
                           } catch (error) {
                               console.log('Audio context creation failed:', error);
                               return false;
                           }
                       }
                   }
                   
                   // Resume audio context if suspended
                   if (audioContext.state === 'suspended') {
                       audioContext.resume().catch((error) => {
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
               document.addEventListener('touchstart', touchHandler, { passive: true });
               
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

// Mouse Trail with Plectrum Shape for Hero Section
document.addEventListener('DOMContentLoaded', function() {
  // Check if GSAP is available
  if (typeof gsap === 'undefined') {
    console.warn('GSAP is not loaded');
    return;
  }

  // Try multiple selectors to find the hero section
  let heroSection = document.querySelector('.hero') || 
                   document.querySelector('.wp-block-group.hero') || 
                   document.querySelector('.alignfull.hero') ||
                   document.querySelector('.wp-block-group.alignfull') ||
                   document.querySelector('.wp-block-group[class*="hero"]') ||
                   document.querySelector('.wp-block-group:has(.hero-line)');
                   
  if (!heroSection) {
    console.warn('Hero section not found. Available elements:', document.querySelectorAll('[class*="hero"]'));
    // Try to find the parent container of hero-line elements
    const heroLines = document.querySelectorAll('.hero-line');
    if (heroLines.length > 0) {
      heroSection = heroLines[0].closest('.wp-block-group');
    }
    
    if (!heroSection) {
      console.warn('Hero section not found');
      return;
    }
  }

  // Create plectrum trail elements
  const trailElements = [];
  const trailCount = 8; // Number of plectrum elements in trail

  // Create logo elements
  for (let i = 0; i < trailCount; i++) {
    const logo = document.createElement('div');
    logo.className = 'logo-trail';
    logo.style.opacity = 0;
    logo.style.position = 'fixed';
    logo.style.pointerEvents = 'none';
    logo.style.zIndex = '9999';
    logo.style.width = '40px';
    logo.style.height = '40px';
    logo.style.background = 'var(--wp--preset--color--accent)';
    logo.style.borderRadius = '50%';
    logo.style.transformOrigin = 'center';
    logo.style.boxShadow = '0 3px 12px rgba(184, 234, 63, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
    logo.style.border = 'none';
    logo.style.display = 'flex';
    logo.style.alignItems = 'center';
    logo.style.justifyContent = 'center';
    logo.style.fontSize = '8px';
    logo.style.fontWeight = 'bold';
    logo.style.color = 'var(--wp--preset--color--accent-dark)';
    logo.style.textAlign = 'center';
    logo.style.lineHeight = '1';
    logo.style.fontFamily = 'var(--wp--preset--font-family--manrope)';
    
    // Simple green circle - no inner content needed
    logo.innerHTML = '';
    
    document.body.appendChild(logo);
    trailElements.push(logo);
  }
  

  let mouseX = 0;
  let mouseY = 0;
  let isMouseInHero = false;

  // Track mouse movement
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Check if mouse is in hero section
    const heroRect = heroSection.getBoundingClientRect();
    isMouseInHero = (
      mouseX >= heroRect.left &&
      mouseX <= heroRect.right &&
      mouseY >= heroRect.top &&
      mouseY <= heroRect.bottom
    );
    
  });

  // Mouse enter/leave hero section
  heroSection.addEventListener('mouseenter', () => {
    isMouseInHero = true;
  });

  heroSection.addEventListener('mouseleave', () => {
    isMouseInHero = false;
  });

  // Animation loop with performance optimization
  let animationId;
  function animateTrail() {
    if (isMouseInHero) {
      trailElements.forEach((plectrum, index) => {
        const delay = index * 0.1; // Stagger the trail elements
        const targetX = mouseX - 20; // Center the logo (40px / 2)
        const targetY = mouseY - 20; // Center the logo (40px / 2)
        
        gsap.to(plectrum, {
          x: targetX,
          y: targetY,
          opacity: Math.max(0.3, 1 - (index * 0.1)), // Fade out along the trail
          scale: Math.max(0.5, 1 - (index * 0.05)), // Scale down along the trail
          rotation: Math.sin(Date.now() * 0.005 + index) * 20, // Gentle rotation
          duration: 0.3 + (index * 0.05),
          ease: 'power2.out',
          delay: delay
        });
      });
    } else {
      // Fade out trail when not in hero section
      trailElements.forEach((plectrum, index) => {
        gsap.to(plectrum, {
          opacity: 0,
          scale: 0.3,
          duration: 0.5,
          delay: index * 0.05,
          ease: 'power2.out'
        });
      });
    }
    
    animationId = requestAnimationFrame(animateTrail);
  }

  // Start animation loop
  animateTrail();
  

  // Add some interactive effects
  heroSection.addEventListener('mousemove', (e) => {
    // Add subtle rotation based on mouse position
    const heroRect = heroSection.getBoundingClientRect();
    const centerX = heroRect.left + heroRect.width / 2;
    const centerY = heroRect.top + heroRect.height / 2;
    
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    
    trailElements.forEach((plectrum, index) => {
      gsap.to(plectrum, {
        rotation: angle + (index * 8) + Math.sin(Date.now() * 0.005 + index) * 5,
        duration: 0.15,
        ease: 'power2.out'
      });
    });
  });

  // Cleanup function
  function cleanup() {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    trailElements.forEach(plectrum => {
      if (plectrum.parentNode) {
        plectrum.parentNode.removeChild(plectrum);
      }
    });
  }

  // Cleanup on page unload
  window.addEventListener('beforeunload', cleanup);
});

// Test if script is loading
console.log('Script.js loaded at', new Date().toISOString());

// GSAP Carousel Initialization for Over Ons Page - Based on CodePen
document.addEventListener('DOMContentLoaded', function() {
  console.log('GSAP Carousel script loaded');
  
  // Check if GSAP is available
  if (typeof gsap === 'undefined') {
    console.warn('GSAP is not loaded');
    return;
  }
  
  console.log('GSAP is available');

  // Function to initialize carousel
  function initCarousel() {
    console.log('Looking for carousel...');
    
    // Try finding the Swiper structure first
    let carousel = document.querySelector('.over-ons-carousel .swiper-wrapper');
    
    if (!carousel) {
      // Fallback to GSAP structure
      carousel = document.querySelector('.over-ons-carousel .carousel-container .carousel-wrapper') ||
                document.querySelector('.over-ons-carousel .carousel-wrapper');
    }
    
    if (!carousel) {
      console.log('Carousel not found');
      return false;
    }

    // Try Swiper slides first
    let slides = carousel.querySelectorAll('.swiper-slide');
    if (slides.length === 0) {
      // Fallback to GSAP slides
      slides = carousel.querySelectorAll('.carousel-slide');
    }
    
    if (slides.length === 0) {
      console.log('No slides found');
      return false;
    }
    
    console.log('Carousel found with', slides.length, 'slides');
    return { carousel, slides };
  }

  // Try to initialize immediately
  let result = initCarousel();
  if (result) {
    initializeCarousel(result.carousel, result.slides);
    return;
  }

  // If not found, wait a bit and try again
  setTimeout(() => {
    result = initCarousel();
    if (result) {
      initializeCarousel(result.carousel, result.slides);
      return;
    }
    
    // If still not found, use MutationObserver to wait for it
    const observer = new MutationObserver(() => {
      result = initCarousel();
      if (result) {
        initializeCarousel(result.carousel, result.slides);
        observer.disconnect();
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Timeout after 5 seconds
    setTimeout(() => {
      observer.disconnect();
      console.warn('Carousel not found after 5 seconds');
    }, 5000);
  }, 500);
  
  function initializeCarousel(carousel, slides) {
    console.log('Initializing carousel with', slides.length, 'slides');

    // Set up carousel
    gsap.set(carousel, {
      display: 'flex',
      gap: '0',
      width: '100%',
      overflow: 'hidden'
    });

    gsap.set(slides, {
      flex: '0 0 300px',
      height: '250px',
      overflow: 'hidden'
    });

    // Set up images to fill their containers
    const images = [];
    slides.forEach(slide => {
      const img = slide.querySelector('img');
      if (img) images.push(img);
    });
    
    gsap.set(images, {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    });

    // Set up slides in a row
    gsap.set(slides, {
      x: (i) => i * 305 // 300px width + 5px margin
    });

  let currentIndex = 0;
  let isAnimating = false;

  // Animate to specific slide
  function goToSlide(index) {
    if (isAnimating) return;
    
    isAnimating = true;
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    
    gsap.to(slides, {
      x: (i) => (i - currentIndex) * 305,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => {
        isAnimating = false;
      }
    });
  }

  // Navigation buttons - try both Swiper and GSAP styles
  const prevBtn = document.querySelector('.carousel-button-prev') || 
                  document.querySelector('.swiper-button-prev');
  const nextBtn = document.querySelector('.carousel-button-next') || 
                  document.querySelector('.swiper-button-next');

  console.log('Navigation buttons found:', { prevBtn: !!prevBtn, nextBtn: !!nextBtn });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      goToSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      goToSlide(currentIndex + 1);
    });
  }

  // Add keyboard navigation as fallback
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      goToSlide(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      goToSlide(currentIndex + 1);
    }
  });

  // Add click navigation on carousel
  carousel.addEventListener('click', (e) => {
    const rect = carousel.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const centerX = rect.width / 2;
    
    if (clickX < centerX) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(currentIndex + 1);
    }
  });

  // Draggable functionality
  if (typeof Draggable !== 'undefined') {
    console.log('Initializing Draggable...');
    let dragInstance = Draggable.create(carousel, {
      type: 'x',
      bounds: carousel.parentElement,
      inertia: true,
      onDrag: function() {
        gsap.set(slides, {
          x: (i) => (i - currentIndex) * 305 + this.x
        });
      },
      onThrowComplete: function() {
        const velocity = this.getVelocity('x');
        if (velocity > 500) {
          goToSlide(currentIndex - 1);
        } else if (velocity < -500) {
          goToSlide(currentIndex + 1);
        } else {
          goToSlide(currentIndex);
        }
      }
    })[0];
    console.log('Draggable initialized:', dragInstance);
  } else {
    console.log('Draggable not available');
  }

  // Auto-play
  let autoPlayInterval;
  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(0);
      }
    }, 3000);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  // Pause on hover
  carousel.addEventListener('mouseenter', stopAutoPlay);
  carousel.addEventListener('mouseleave', startAutoPlay);

  // Initialize
  goToSlide(0);
  startAutoPlay();
  }
  
});

// About Section - Scroll-based Video Playback
document.addEventListener('DOMContentLoaded', function() {
  const aboutVideo = document.getElementById('about-video');
  
  if (!aboutVideo) return;
  
  // Start with video muted for autoplay compliance
  aboutVideo.muted = true;
  
  // Add error handling
  aboutVideo.addEventListener('error', function(e) {
    console.log('Video error:', e);
  });
  
  // Add load event to ensure video is ready
  aboutVideo.addEventListener('loadeddata', function() {
    console.log('About video loaded and ready');
  });
  
  // Create intersection observer for video visibility
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Video is visible - unmute and try to play it
        aboutVideo.muted = false;
        aboutVideo.volume = 0.7; // Set a comfortable volume level
        
        aboutVideo.play().catch(error => {
          console.log('Video autoplay failed:', error);
          // If autoplay fails, show a play button or let user click
        });
      } else {
        // Video is not visible - mute and pause it
        aboutVideo.muted = true;
        aboutVideo.pause();
      }
    });
  }, {
    threshold: 0.3, // Play when 30% of video is visible
    rootMargin: '0px 0px -5% 0px' // Start playing slightly before fully visible
  });
  
  // Start observing the video
  videoObserver.observe(aboutVideo);
  
  // Add click handler to play video if autoplay fails
  aboutVideo.addEventListener('click', function() {
    if (aboutVideo.paused) {
      aboutVideo.muted = false;
      aboutVideo.volume = 0.7;
      aboutVideo.play().catch(error => {
        console.log('Manual play failed:', error);
      });
    }
  });
  
  // Add user interaction to enable audio (browser requirement)
  let audioEnabled = false;
  function enableAudio() {
    if (!audioEnabled) {
      aboutVideo.muted = false;
      aboutVideo.volume = 0.7;
      audioEnabled = true;
      console.log('About video audio enabled');
    }
  }
  
  // Enable audio on first user interaction
  aboutVideo.addEventListener('click', enableAudio, { once: true });
  aboutVideo.addEventListener('touchstart', enableAudio, { once: true });
  document.addEventListener('click', enableAudio, { once: true });
  document.addEventListener('touchstart', enableAudio, { once: true });
});

// Lessen Page Animations
document.addEventListener('DOMContentLoaded', function() {
  const lessenSection = document.querySelector('.lessen-section');
  
  if (!lessenSection) return;
  
  // Create intersection observer for lessen animations
  const lessenObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animate class to trigger CSS animations
        lessenSection.classList.add('animate');
        
        // Also use GSAP for more advanced animations if available
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
        
        // Stop observing after animation
        lessenObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Start observing the lessen section
  lessenObserver.observe(lessenSection);
});/* Cache buster: Wed Oct 29 12:56:33 CET 2025 */
/* Cache buster: Wed Oct 29 13:06:41 CET 2025 */
/* Cache buster: Wed Oct 29 14:38:48 CET 2025 */
/* Cache buster: Wed Oct 29 14:40:31 CET 2025 */
/* Cache buster: Wed Oct 29 14:43:48 CET 2025 */
/* Cache buster: Wed Oct 29 14:44:45 CET 2025 */
/* Cache buster: Wed Oct 29 14:47:07 CET 2025 */
/* Cache buster: Wed Oct 29 14:48:46 CET 2025 */
/* Cache buster: Wed Oct 29 14:56:50 CET 2025 */
/* Cache buster: Wed Oct 29 14:58:41 CET 2025 */
/* Cache buster: Wed Oct 29 15:03:02 CET 2025 */
/* Cache buster: Wed Oct 29 15:06:07 CET 2025 */
/* Cache buster: Wed Oct 29 15:07:01 CET 2025 */
/* Cache buster: Wed Oct 29 15:09:05 CET 2025 */
/* Cache buster: Wed Oct 29 15:13:16 CET 2025 */
/* Cache buster: Wed Oct 29 15:14:47 CET 2025 */
/* Cache buster: Wed Oct 29 15:15:22 CET 2025 */
/* Cache buster: Wed Oct 29 15:20:10 CET 2025 */
/* Cache buster: Wed Oct 29 15:20:44 CET 2025 */
/* Cache buster: Wed Oct 29 15:21:30 CET 2025 */
/* Cache buster: Wed Oct 29 15:21:58 CET 2025 */
/* Cache buster: Wed Oct 29 15:22:21 CET 2025 */
/* Cache buster: Wed Oct 29 15:23:43 CET 2025 */
/* Cache buster: Wed Oct 29 15:25:15 CET 2025 */
/* Cache buster: Wed Oct 29 15:25:59 CET 2025 */
/* Cache buster: Wed Oct 29 15:27:13 CET 2025 */
/* Cache buster: Wed Oct 29 15:29:18 CET 2025 */
/* Cache buster: Wed Oct 29 15:31:15 CET 2025 */
/* Cache buster: Wed Oct 29 15:33:58 CET 2025 */
/* Cache buster: Wed Oct 29 15:35:04 CET 2025 */
/* Cache buster: Wed Oct 29 15:36:42 CET 2025 */
/* Cache buster: Wed Oct 29 15:38:00 CET 2025 */
/* Cache buster: Wed Oct 29 15:42:05 CET 2025 */
