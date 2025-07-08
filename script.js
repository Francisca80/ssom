document.addEventListener('DOMContentLoaded', function () {
    // Register ScrollTrigger plugin
    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
        gsap.registerPlugin(ScrollTrigger);
    }

    // Hero animation
    const heroTitle = document.querySelector('.hero-title');
    const heroParagraph = document.querySelector('.hero-paragraph');
    const heroButtons = document.querySelector('.hero-buttons');

    if (heroTitle) {
        const heroTl = gsap.timeline();

        heroTl.from(heroTitle, {
            x: -200,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
        })
        .from(heroParagraph, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.3")
        .from(heroButtons, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.2");
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
});