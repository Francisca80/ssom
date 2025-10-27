<?php
/**
 * Title: Blog Section – Studio Journal Layout
 * Slug: ssom/blog
 * Categories: blog, featured
 * Keywords: blog, nieuws, artikelen, gitaar, studio, journal
 */
?>

<!-- wp:group {"layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group blog-journal-section">

  <!-- wp:paragraph -->
  <p class="section-intro">
    Studio Journal
  </p>
  <!-- /wp:paragraph -->
  
  <!-- wp:heading {"level":2} -->
  <h2 class="section-heading">Notes from the Studio</h2>
  <!-- /wp:heading -->

  <!-- wp:query {"queryId":1,"query":{"perPage":2,"postType":"post","order":"desc","orderBy":"date"},"displayLayout":{"type":"list"}} -->
  <div class="wp-block-query">
    <!-- wp:post-template -->
    <!-- wp:group {"className":"blog-post-card","style":{"spacing":{"padding":{"top":"2rem","bottom":"2rem","left":"0","right":"0"}}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group blog-post-card">
      
      <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","style":{"border":{"radius":"8px"}}} /-->
      
      <!-- wp:post-date {"format":"j F Y","style":{"typography":{"fontSize":"0.875rem","fontWeight":"600","textTransform":"uppercase","letterSpacing":"0.05em"},"spacing":{"margin":{"top":"1rem","bottom":"0.5rem"}}}} /-->
      
      <!-- wp:post-title {"isLink":true,"level":3} /-->
      
      <!-- wp:post-excerpt {"moreText":"Lees meer →","style":{"typography":{"fontSize":"1rem","lineHeight":"1.6"},"spacing":{"margin":{"top":"1rem","bottom":"0"}}}} /-->
      
    </div>
    <!-- /wp:group -->
    <!-- /wp:post-template -->
  </div>
  <!-- /wp:query -->

  <!-- wp:buttons {"style":{"spacing":{"margin":{"top":"3rem"}}}} -->
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