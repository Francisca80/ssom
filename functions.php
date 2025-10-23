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

} );        

add_action('after_setup_theme', function(){
	$dir = get_stylesheet_directory() . '/acf/';
	foreach (['fields-options.php','fields-home.php','fields-lessen.php','fields-about.php','fields-contact.php'] as $f) {
	  $p = $dir . $f;
	  if (file_exists($p)) require_once $p;
	}
  });

  if( function_exists('acf_add_options_page') ){
	acf_add_options_page([
	  'page_title' => 'Studio Settings',
	  'menu_title' => 'Studio Settings',
	  'menu_slug'  => 'ssof-settings',
	  'capability' => 'edit_posts',
	  'redirect'   => false
	]);
  }
   

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
	
} );
