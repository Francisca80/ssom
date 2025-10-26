<?php
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
    
    // Enqueue custom animations with cache busting
    wp_enqueue_script( 'ssom-animations', get_stylesheet_directory_uri() . '/script.js', array('gsap', 'gsap-scrolltrigger', 'gsap-textplugin'), time(), true );
    
    // Enqueue page-specific CSS
    wp_enqueue_style( 'about-css', get_stylesheet_directory_uri() . '/assets/css/about.css', array('child-style'), time() );
    wp_enqueue_style( 'over-page-css', get_stylesheet_directory_uri() . '/assets/css/over.css', array('child-style'), time() );
    wp_enqueue_style( 'footer-css', get_stylesheet_directory_uri() . '/assets/css/footer.css', array('child-style'), time() );
    wp_enqueue_style( 'header-css', get_stylesheet_directory_uri() . '/assets/css/header.css', array('child-style'), time() );
    
    // Clear caches to ensure patterns load properly
    if (isset($_GET['clear_cache']) && current_user_can('manage_options')) {
        wp_cache_flush();
        if (function_exists('wp_cache_flush_group')) {
            wp_cache_flush_group('block_patterns');
            wp_cache_flush_group('patterns');
            wp_cache_flush_group('theme');
        }
        echo '<div style="background: #4CAF50; color: white; padding: 10px; margin: 10px 0;">Cache cleared successfully!</div>';
    }

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
add_action( 'init', function() {
    if (isset($_GET['clear_cache']) && $_GET['clear_cache'] === '1') {
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
} );



