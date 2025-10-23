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

           // Hero "Sound Lines" Musical Staff Animation
           const heroTitle = document.querySelector('.hero-title');
           const heroLines = document.querySelectorAll('.hero-line');
           const heroParagraph = document.querySelector('.hero-paragraph');
           const heroButtons = document.querySelector('.hero-buttons');

           console.log('Hero elements found:', {
               heroTitle: !!heroTitle,
               heroLines: heroLines.length,
               heroParagraph: !!heroParagraph,
               heroButtons: !!heroButtons
           });

           if (heroTitle && heroLines.length > 0) {
               console.log('Starting Sound Lines musical staff animation...');
               
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
               console.log('Hero lines not found, using fallback animation...');
               
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
               console.log('Creating elastic line for:', element, 'position:', position);
               
               // Get element dimensions
               const rect = element.getBoundingClientRect();
               const elementWidth = rect.width;
               const elementHeight = rect.height;
               
               console.log('Element dimensions:', { width: elementWidth, height: elementHeight });
               
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
               
               console.log('SVG created and added to element');
               
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
               console.log(`Creating guitar string ${stringIndex + 1}`);
               
               // Get fresh container dimensions
               const getContainerRect = () => container.getBoundingClientRect();
               const rect = getContainerRect();
               const containerWidth = rect.width;
               const containerHeight = rect.height;
               
               // Calculate 6 positions centered around the text
               const positions = [0.15, 0.30, 0.45, 0.60, 0.75, 0.90]; // Better centered around text
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
                       audioContext = new (window.AudioContext || window.webkitAudioContext)();
                   }
                   
                   // Resume audio context if suspended (browser autoplay policy)
                   if (audioContext.state === 'suspended') {
                       audioContext.resume();
                   }
               }
               
               // Play string sound
               function playStringSound() {
                   try {
                       initAudio();
                       
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
                       
                       console.log(`String ${stringIndex + 1} played note: ${currentFrequency.toFixed(2)}Hz`);
                   } catch (error) {
                       console.log('Audio not available:', error);
                   }
               }
               
               // Create SVG container
               const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
               svg.setAttribute('width', '100%');
               svg.setAttribute('height', '100%');
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
                           console.log(`String ${stringIndex + 1} released (out of bounds)!`);
                       }
                       return;
                   }
                   
                   // Check if mouse is near THIS SPECIFIC string only
                   // Use only Y distance for more precise detection
                   const yDistance = Math.abs(relativeY - lineY);
                   const xDistance = Math.abs(relativeX - centerX);
                   
                   // More lenient X threshold, stricter Y threshold
                   const isNearString = yDistance < 40 && xDistance < 200;
                   
                   // Debug: Log distance for all strings
                   console.log(`String ${stringIndex + 1}: Y=${yDistance.toFixed(1)}, X=${xDistance.toFixed(1)}, Near=${isNearString}`);
                   
                   // Only this string responds to mouse proximity
                   if (isNearString && !isGrabbed) {
                       isGrabbed = true;
                       container.style.cursor = 'grab';
                       console.log(`String ${stringIndex + 1} grabbed! Y: ${yDistance.toFixed(1)}`);
                       
                       // Play sound when string is grabbed
                       playStringSound();
                   } else if (!isNearString && isGrabbed) {
                       isGrabbed = false;
                       container.style.cursor = 'default';
                       console.log(`String ${stringIndex + 1} released! Y: ${yDistance.toFixed(1)}`);
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
               console.log('Creating 6 independent guitar strings...');
               
               const heroTitle = document.querySelector('.hero-title');
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
               console.log('Adding fallback static lines...');
               heroLines.forEach((line, index) => {
                   if (!line.querySelector('svg')) {
                       console.log(`Adding fallback line for ${index + 1}`);
                       const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                       svg.setAttribute('width', '100%');
                       svg.setAttribute('height', '100%');
                       svg.style.position = 'absolute';
                       svg.style.top = '0';
                       svg.style.left = '0';
                       svg.style.pointerEvents = 'none';
                       svg.style.zIndex = '1';
                       
                       const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                       path.setAttribute('stroke', '#ddd');
                       path.setAttribute('stroke-width', '2');
                       path.setAttribute('fill', 'none');
                       path.setAttribute('stroke-linecap', 'round');
                       path.setAttribute('d', 'M 0 50% Q 50% 50% 100% 50%');
                       
                       svg.appendChild(path);
                       line.appendChild(svg);
                   }
               });
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