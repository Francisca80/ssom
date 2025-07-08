<?php
/**
 * Title: Blog Section
 * Slug: ssom/blog
 * Categories: blog, featured
 * Keywords: blog, nieuws, artikelen, posts
 */
?>

<!-- wp:group {"align":"full","backgroundColor":"base","layout":{"type":"constrained","contentSize":"1200px"},"style":{"spacing":{"padding":{"top":"4rem","bottom":"4rem","left":"2rem","right":"2rem"}}},"className":"blog-section"} -->
<div class="wp-block-group alignfull blog-section has-base-background-color has-background" style="padding-top:4rem;padding-bottom:4rem;padding-left:2rem;padding-right:2rem">
  
  <!-- wp:heading {"level":2,"textColor":"primary","style":{"typography":{"fontSize":"2.5rem","fontFamily":"var(--wp--preset--font-family--manrope)","fontWeight":"700","lineHeight":"1.2"},"spacing":{"margin":{"bottom":"2rem"}}}} -->
  <h2 class="wp-block-heading has-primary-color has-text-color" style="font-size:2.5rem;font-family:var(--wp--preset--font-family--manrope);font-weight:700;line-height:1.2;margin-bottom:2rem">Nieuws & Artikelen</h2>
  <!-- /wp:heading -->

  <!-- wp:query {"queryId":1,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"displayLayout":{"type":"flex","columns":3}} -->
  <div class="wp-block-query">
    <!-- wp:post-template -->
    <!-- wp:group {"style":{"spacing":{"blockGap":"1rem"}},"layout":{"type":"constrained"},"className":"blog-column"} -->
    <div class="wp-block-group blog-column">
      
      <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","style":{"border":{"radius":"8px"},"spacing":{"margin":{"bottom":"1rem"}}}} /-->

      <!-- wp:post-title {"isLink":true,"style":{"typography":{"fontSize":"1.25rem","fontFamily":"var(--wp--preset--font-family--manrope)","fontWeight":"600"}}} /-->

      <!-- wp:post-date {"format":"j F Y","style":{"typography":{"fontSize":"0.875rem","color":{"text":"#666666"}}}} /-->

      <!-- wp:post-excerpt {"moreText":"Lees meer →","style":{"typography":{"fontSize":"1rem"}}} /-->

    </div>
    <!-- /wp:group -->
    <!-- /wp:post-template -->

    <!-- wp:query-no-results -->
    <!-- wp:group {"style":{"spacing":{"blockGap":"2rem"}},"className":"blog-columns-equal-height"} -->
    <div class="wp-block-group blog-columns-equal-height" style="gap:2rem">
      <!-- wp:column {"className":"blog-column"} -->
      <div class="wp-block-column blog-column">
        <!-- wp:image {"url":"http://studio-sound-of-music.local/wp-content/uploads/2025/05/fischer_portrait-marlowe_webres-6-683x1024.jpg","sizeSlug":"large","style":{"border":{"radius":"8px"},"spacing":{"margin":{"bottom":"1rem"}}}} /-->
        <!-- wp:heading {"level":3,"style":{"typography":{"fontSize":"1.25rem","fontFamily":"var(--wp--preset--font-family--manrope)","fontWeight":"600"}}} -->
        <h3 style="font-size:1.25rem;font-family:var(--wp--preset--font-family--manrope);font-weight:600">Voorbeeld Artikel 1</h3>
        <!-- /wp:heading -->
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"0.875rem","color":{"text":"#666666"}}}} -->
        <p style="font-size:0.875rem;color:#666666">15 januari 2025</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph -->
        <p>Dit is een voorbeeld van een blog post excerpt. Hier komt een korte beschrijving van het artikel...</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph {"style":{"typography":{"fontWeight":"600"}}} -->
        <p style="font-weight:600">Lees meer →</p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:column -->

      <!-- wp:column {"className":"blog-column"} -->
      <div class="wp-block-column blog-column">
        <!-- wp:image {"url":"http://studio-sound-of-music.local/wp-content/uploads/2025/05/fischer_portrait-marlowe_webres-8-1024x683.jpg","sizeSlug":"large","style":{"border":{"radius":"8px"},"spacing":{"margin":{"bottom":"1rem"}}}} /-->
        <!-- wp:heading {"level":3,"style":{"typography":{"fontSize":"1.25rem","fontFamily":"var(--wp--preset--font-family--manrope)","fontWeight":"600"}}} -->
        <h3 style="font-size:1.25rem;font-family:var(--wp--preset--font-family--manrope);font-weight:600">Voorbeeld Artikel 2</h3>
        <!-- /wp:heading -->
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"0.875rem","color":{"text":"#666666"}}}} -->
        <p style="font-size:0.875rem;color:#666666">10 januari 2025</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph -->
        <p>Dit is een voorbeeld van een blog post excerpt. Hier komt een korte beschrijving van het artikel...</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph {"style":{"typography":{"fontWeight":"600"}}} -->
        <p style="font-weight:600">Lees meer →</p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:column -->

      <!-- wp:column {"className":"blog-column"} -->
      <div class="wp-block-column blog-column">
        <!-- wp:image {"url":"http://studio-sound-of-music.local/wp-content/uploads/2025/05/fischer_portrait-marlowe_webres-9googleresize-Copy.jpg","sizeSlug":"large","style":{"border":{"radius":"8px"},"spacing":{"margin":{"bottom":"1rem"}}}} /-->
        <!-- wp:heading {"level":3,"style":{"typography":{"fontSize":"1.25rem","fontFamily":"var(--wp--preset--font-family--manrope)","fontWeight":"600"}}} -->
        <h3 style="font-size:1.25rem;font-family:var(--wp--preset--font-family--manrope);font-weight:600">Voorbeeld Artikel 3</h3>
        <!-- /wp:heading -->
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"0.875rem","color":{"text":"#666666"}}}} -->
        <p style="font-size:0.875rem;color:#666666">5 januari 2025</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph -->
        <p>Dit is een voorbeeld van een blog post excerpt. Hier komt een korte beschrijving van het artikel...</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph {"style":{"typography":{"fontWeight":"600"}}} -->
        <p style="font-weight:600">Lees meer →</p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:column -->
    </div>
    <!-- /wp:group -->
    <!-- /wp:query-no-results -->
  </div>
  <!-- /wp:query -->

  <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"3rem"}}}} -->
  <div class="wp-block-buttons" style="margin-top:3rem">
    <!-- wp:button {"className":"is-style-ctabutton"} -->
    <div class="wp-block-button is-style-ctabutton">
      <a class="wp-block-button__link wp-element-button" href="/blog">Lees meer</a>
    </div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->

</div>
<!-- /wp:group -->
