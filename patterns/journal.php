<?php
/**
 * Title: Journal Section – Studio Journal Layout
 * Slug: ssom/journal
 * Categories: journal, featured
 * Keywords: journal, nieuws, artikelen, gitaar, studio, blog
 */
?>

<!-- wp:group {"align":"full","className":"journal-section","layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull journal-section">

  <!-- wp:paragraph {"className":"section-intro"} -->
  <p class="section-intro">Journal</p>
  <!-- /wp:paragraph -->

  <!-- wp:heading {"level":2,"className":"section-heading"} -->
  <h2 class="wp-block-heading section-heading">Studio Journal</h2>
  <!-- /wp:heading -->

  <!-- wp:query {"queryId":1,"query":{"perPage":2,"postType":"post","order":"desc","orderBy":"date"},"layout":{"type":"default"}} -->
  <div class="wp-block-query">
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":2}} -->
      <!-- wp:group {"className":"journal-card","layout":{"type":"constrained"}} -->
      <div class="wp-block-group journal-card">
        <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","scale":"cover"} /-->
        <!-- wp:post-date {"className":"journal-card-date"} /-->
        <!-- wp:post-title {"level":3,"isLink":true,"className":"journal-card-title"} /-->
      </div>
      <!-- /wp:group -->
    <!-- /wp:post-template -->
  </div>
  <!-- /wp:query -->

  <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"3rem"}}}} -->
  <div class="wp-block-buttons">
    <!-- wp:button {"textColor":"accent-dark","backgroundColor":"accent"} -->
    <div class="wp-block-button">
      <a class="wp-block-button__link has-accent-background-color has-accent-dark-color wp-element-button" href="/blog">Bekijk alle artikelen</a>
    </div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->

</div>
<!-- /wp:group -->

<!-- Pattern updated: Thu Oct 30 2025 - v7 Reviews Style Headings -->