<?php
add_action( 'wp_enqueue_scripts', function() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style') );
    
    // Enqueue GSAP
    wp_enqueue_script( 'gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', array(), '3.12.2', true );
    
    // Enqueue GSAP ScrollTrigger plugin
    wp_enqueue_script( 'gsap-scrolltrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', array('gsap'), '3.12.2', true );
    
    // Enqueue custom animations
    wp_enqueue_script( 'ssom-animations', get_stylesheet_directory_uri() . '/script.js', array('gsap', 'gsap-scrolltrigger'), '1.0', true );
} );        
   

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
} );
