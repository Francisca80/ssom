<?php
/**
 * Title: Blog Section – Studio Journal Layout
 * Slug: ssom/blog-journal
 * Categories: blog, featured
 * Keywords: blog, nieuws, artikelen, gitaar, studio, journal
 */
?>

<!-- wp:group {"align":"full","className":"blog-journal-section","style":{"color":{"background":"#ffffff"},"spacing":{"padding":{"top":"6rem","bottom":"6rem","left":"2rem","right":"2rem"}}},"layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull blog-journal-section">

  <!-- wp:group {"layout":{"type":"constrained"},"style":{"spacing":{"margin":{"bottom":"4rem"}}}} -->
  <div class="wp-block-group">
    <!-- wp:paragraph {"textColor":"accent","style":{"typography":{"textTransform":"uppercase","fontWeight":"700","letterSpacing":"0.05em","fontSize":"0.875rem"}}} -->
    <p class="has-accent-color has-text-color">Journal</p>
    <!-- /wp:paragraph -->

    <!-- wp:heading {"level":2} -->
    <h2>Notes from the Studio</h2>
    <!-- /wp:heading -->
  </div>
  <!-- /wp:group -->

  <!-- wp:query {"queryId":1,"query":{"perPage":3,"postType":"post","order":"desc","orderBy":"date"},"displayLayout":{"type":"list"}} -->
  <div class="wp-block-query">

    <!-- wp:post-template -->
    <!-- wp:group {"className":"journal-item","layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"center"},"style":{"spacing":{"blockGap":"4rem","margin":{"bottom":"5rem"}}}} -->
    <div class="wp-block-group journal-item">

      <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"3/2","width":"50%","style":{"border":{"radius":"12px"},"boxShadow":"0 8px 30px rgba(0,0,0,0.05)"}} /-->
      
      <!-- wp:html -->
      <div class="fallback-image">
        🎸 Gitaar
      </div>
      <!-- /wp:html -->

      <!-- wp:group {"style":{"spacing":{"blockGap":"1rem"}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group">
        <!-- wp:post-date {"format":"j F Y","textColor":"accent","style":{"typography":{"fontSize":"0.875rem","fontWeight":"700","letterSpacing":"0.05em","textTransform":"uppercase"}}} /-->

        <!-- wp:post-title {"isLink":true} /-->

        <!-- wp:post-excerpt {"moreText":"Lees verder →","style":{"typography":{"fontSize":"1.125rem","lineHeight":"1.6"}}} /-->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:group -->
    <!-- /wp:post-template -->
  </div>
  <!-- /wp:query -->

  <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"3rem"}}}} -->
  <div class="wp-block-buttons">
    <!-- wp:button -->
    <div class="wp-block-button">
      <a class="wp-block-button__link wp-element-button" href="/blog">Bekijk alle artikelen</a>
    </div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->

</div>
<!-- /wp:group -->
