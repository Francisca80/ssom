<?php
// Add SEO Meta Tags and Open Graph
add_action('wp_head', function() {
    $site_name = 'Studio Sound of Music';
    $default_description = 'Gitaarlessen in Nieuwegein voor alle leeftijden en niveaus. Persoonlijke begeleiding door ervaren docenten. Boek nu een gratis proefles!';
    $default_image = get_stylesheet_directory_uri() . '/screenshot.png';
    
    // Get current page info
    $title = is_front_page() ? $site_name . ' - Gitaarlessen Nieuwegein' : wp_get_document_title();
    $description = $default_description;
    $url = get_permalink();
    $image = $default_image;
    
    // Page-specific descriptions
    if (is_page('gitaarles')) {
        $description = 'Ontdek onze gitaarlessen in Nieuwegein. Van beginners tot gevorderden, privé of duo-lessen. Flexibel, persoonlijk en betaalbaar. Vraag nu een gratis proefles aan!';
    } elseif (is_page('over-ons')) {
        $description = 'Leer meer over Studio Sound of Music en onze gepassioneerde gitaardocent Marlowe McQueen. Ervaren, professioneel en met liefde voor muziek.';
    } elseif (is_page('contact')) {
        $description = 'Neem contact op met Studio Sound of Music. Vragen over gitaarlessen, tarieven of een proefles? We helpen je graag verder!';
    } elseif (is_single()) {
        $description = get_the_excerpt() ?: $default_description;
        if (has_post_thumbnail()) {
            $image = get_the_post_thumbnail_url(get_the_ID(), 'large');
        }
    }
    
    ?>
    <!-- SEO Meta Tags -->
    <meta name="description" content="<?php echo esc_attr($description); ?>">
    <meta name="keywords" content="gitaarles, gitaarlessen, Nieuwegein, muziekles, gitaardocent, muziekschool, gitaar leren, proefles">
    
    <!-- Open Graph -->
    <meta property="og:site_name" content="<?php echo esc_attr($site_name); ?>">
    <meta property="og:title" content="<?php echo esc_attr($title); ?>">
    <meta property="og:description" content="<?php echo esc_attr($description); ?>">
    <meta property="og:type" content="<?php echo is_single() ? 'article' : 'website'; ?>">
    <meta property="og:url" content="<?php echo esc_url($url); ?>">
    <meta property="og:image" content="<?php echo esc_url($image); ?>">
    <meta property="og:locale" content="nl_NL">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo esc_attr($title); ?>">
    <meta name="twitter:description" content="<?php echo esc_attr($description); ?>">
    <meta name="twitter:image" content="<?php echo esc_url($image); ?>">
    
    <!-- Additional SEO -->
    <link rel="canonical" href="<?php echo esc_url($url); ?>">
    <?php
});

// Add Schema.org Structured Data for LocalBusiness
add_action('wp_head', function() {
    if (is_front_page() || is_page('over-ons') || is_page('contact')) {
        ?>
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "MusicSchool",
            "name": "Studio Sound of Music",
            "image": "<?php echo get_stylesheet_directory_uri(); ?>/screenshot.png",
            "url": "<?php echo home_url(); ?>",
            "telephone": "+31657461677",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Florijnburg 41",
                "addressLocality": "Nieuwegein",
                "postalCode": "3435 CM",
                "addressCountry": "NL"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "52.0293",
                "longitude": "5.0931"
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday"],
                    "opens": "14:00",
                    "closes": "21:00"
                }
            ],
            "priceRange": "€€",
            "areaServed": ["Nieuwegein", "IJsselstein", "Houten", "Vianen", "Utrecht"],
            "sameAs": [
                "https://www.instagram.com/marlowemcqueen/",
                "https://facebook.com/studiosoundofmusic"
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "25"
            }
        }
        </script>
        <?php
    }
});

add_action( 'wp_enqueue_scripts', function() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'), '1.2.0' );
    
    // Enqueue Google Fonts (Manrope with all weights)
    wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800;900&display=swap', array(), null );

    // Enqueue GSAP with cache busting
    wp_enqueue_script( 'gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', array(), time(), true );
    
    // Enqueue GSAP ScrollTrigger plugin
    wp_enqueue_script( 'gsap-scrolltrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', array('gsap'), time(), true );
    
                // Enqueue GSAP TextPlugin for text animations
                wp_enqueue_script( 'gsap-textplugin', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js', array('gsap'), time(), true );
                
                // Enqueue GSAP Draggable for carousel drag/swipe functionality
                wp_enqueue_script( 'gsap-draggable', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js', array('gsap'), time(), true );
                
                // Enqueue custom animations with cache busting
                wp_enqueue_script( 'ssom-animations', get_stylesheet_directory_uri() . '/script.js', array('gsap', 'gsap-scrolltrigger', 'gsap-textplugin', 'gsap-draggable'), time(), true );
    
    // Enqueue page-specific CSS
    wp_enqueue_style( 'about-css', get_stylesheet_directory_uri() . '/assets/css/about.css', array('child-style'), time() );
    wp_enqueue_style( 'gitaarles-page-css', get_stylesheet_directory_uri() . '/assets/css/gitaarles.css', array('child-style'), time() );
    wp_enqueue_style( 'over-page-css', get_stylesheet_directory_uri() . '/assets/css/over.css', array('child-style'), time() );
    wp_enqueue_style( 'footer-css', get_stylesheet_directory_uri() . '/assets/css/footer.css', array('child-style'), time() . '.1' );
    wp_enqueue_style( 'header-css', get_stylesheet_directory_uri() . '/assets/css/header.css', array('child-style'), time() );
    wp_enqueue_style( 'blog-css', get_stylesheet_directory_uri() . '/assets/css/blog.css', array('child-style'), time() );
    wp_enqueue_style( 'lessen-css', get_stylesheet_directory_uri() . '/assets/css/lessen.css', array('child-style'), time() );
    wp_enqueue_style( 'cta-css', get_stylesheet_directory_uri() . '/assets/css/cta.css', array('child-style'), time() );
    wp_enqueue_style( 'journal-css', get_stylesheet_directory_uri() . '/assets/css/journal.css', array('child-style'), time() );

    // Enqueue page-specific JS
    wp_enqueue_script( 'contact-page-js', get_stylesheet_directory_uri() . '/assets/js/contact.js', array('child-style'), time(), true );

} );        


   

// Clear WordPress caches for development
add_action( 'init', function() {
    if (current_user_can('manage_options')) {
        // Clear theme cache
        wp_cache_flush();
        // Clear object cache
        if (function_exists('wp_cache_flush_group')) {
            wp_cache_flush_group('themes');
        }
        // Clear pattern cache
        if (function_exists('wp_cache_flush_group')) {
            wp_cache_flush_group('block_patterns');
        }
        
        // Clear FSE pattern cache
        if (function_exists('wp_cache_flush_group')) {
            wp_cache_flush_group('patterns');
        }
        
        // Clear theme cache
        if (function_exists('wp_cache_flush_group')) {
            wp_cache_flush_group('theme');
        }
    }
});

// Force pattern cache refresh on theme activation
add_action( 'after_switch_theme', function() {
    wp_cache_flush();
    if (function_exists('wp_cache_flush_group')) {
        wp_cache_flush_group('block_patterns');
        wp_cache_flush_group('patterns');
        wp_cache_flush_group('theme');
        wp_cache_flush_group('template-parts');
    }
});

// Clear FSE cache on any file save
add_action( 'save_post', function() {
    wp_cache_flush();
    if (function_exists('wp_cache_flush_group')) {
        wp_cache_flush_group('block_patterns');
        wp_cache_flush_group('patterns');
        wp_cache_flush_group('theme');
        wp_cache_flush_group('template-parts');
    }
});

// Manual cache clear - add ?clear_cache=1 to any URL to clear FSE cache
// Note: Only use in development, disable or remove for production
add_action( 'init', function() {
    // Only allow cache clearing for admin users
    if (isset($_GET['clear_cache']) && $_GET['clear_cache'] === '1' && current_user_can('manage_options')) {
        wp_cache_flush();
        if (function_exists('wp_cache_flush_group')) {
            wp_cache_flush_group('block_patterns');
            wp_cache_flush_group('patterns');
            wp_cache_flush_group('theme');
            wp_cache_flush_group('template-parts');
        }
        
        // Redirect to remove the parameter
        wp_redirect(remove_query_arg('clear_cache'));
        exit;
    }
});

// Force pattern cache refresh
add_action( 'init', function() {
    // Clear any cached patterns
    if (function_exists('wp_cache_delete')) {
        wp_cache_delete('block_patterns', 'themes');
        wp_cache_delete('ssom/hero', 'block_patterns');
    }
});

add_action( 'init', function () {
	register_block_pattern_category( 'hero', [
		'label' => __( 'Hero Sections', 'ssom' ),
	] );
	register_block_pattern_category( 'about', [
		'label' => __( 'About Sections', 'ssom' ),
	] );
	register_block_pattern_category( 'cta', [
		'label' => __( 'CTA Sections', 'ssom' ),
	] );
	register_block_pattern_category( 'blog', [
		'label' => __( 'Blog Sections', 'ssom' ),
	] );
	register_block_pattern_category( 'journal', [
		'label' => __( 'Journal Sections', 'ssom' ),
	] );
	register_block_pattern_category( 'lessen', [
		'label' => __( 'Lessen Sections', 'ssom' ),
	] );
	register_block_pattern_category( 'reviews', [
		'label' => __( 'Reviews Sections', 'ssom' ),
	] );
	register_block_pattern_category( 'contact', [
		'label' => __( 'Contact Sections', 'ssom' ),
	] );
    register_block_pattern_category( 'ssom', [
		'label' => __( 'Ssom Sections', 'ssom' ),
	] );
    register_block_pattern_category( 'ssom-over-ons-page', [
		'label' => __( 'Ssom Over Ons Page Sections', 'ssom' ),
	] );
    register_block_pattern_category( 'ssom-gitaarles-page', [   
        'label' => __( 'SSOM Gitaarles Page Sections', 'ssom' ),
    ] );
    register_block_pattern_category( 'ssom-contact-page', [
        'label' => __( 'SSOM Contact Page Sections', 'ssom' ),
    ] );
    register_block_pattern_category( 'ssom-blog-home', [
        'label' => __( 'SSOM Blog Home Sections', 'ssom' ),
    ] );
    register_block_pattern_category( 'ssom-privacy-policy-page', [
        'label' => __( 'SSOM Privacy Policy Page Sections', 'ssom' ),
    ] );
} );

// Explicitly register the blog home pattern
add_action( 'init', function() {
    register_block_pattern(
        'ssom/ssom-blog-home',
        array(
            'title'       => 'SSOM Blog Home',
            'description' => 'Blog home page with posts query and pagination',
            'content'     => file_get_contents(get_stylesheet_directory() . '/patterns/ssom-blog-home.php'),
            'categories'  => array( 'ssom-blog-home' ),
        )
    );
} );

// Explicitly register the privacy policy pattern
add_action( 'init', function() {
    register_block_pattern(
        'ssom/privacy-policy',
        array(
            'title'       => 'Privacy Policy Page',
            'description' => 'Privacy policy page with GDPR compliance',
            'content'     => file_get_contents(get_stylesheet_directory() . '/patterns/privacy-policy.php'),
            'categories'  => array( 'ssom-privacy-policy-page' ),
        )
    );
} );/* Cache buster: Wed Oct 29 13:31:30 CET 2025 */
