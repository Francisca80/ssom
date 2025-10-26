<?php
/**
 * Title: SSOM Contact Page (FSE Compatible)
 * Slug: ssom-contact-page
 * Categories: ssom
 * Keywords: contact, muziek, fse
 * Enqueue Style: assets/css/contact.css
 */
?>

<!-- wp:group {"align":"full","className":"contact-section","layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull contact-section">

  <!-- wp:columns {"verticalAlignment":"top"} -->
  <div class="wp-block-columns are-vertically-aligned-top">

    <!-- wp:column -->
    <div class="wp-block-column contact-left">
      <!-- wp:paragraph -->
      <p class="contact-label">Contact</p>
      <!-- /wp:paragraph -->

      <!-- wp:heading {"level":2} -->
      <h2 class="contact-title">Neem contact<br>met ons op</h2>
      <!-- /wp:heading -->

      <!-- wp:paragraph -->
      <p class="contact-description">Heb je vragen over gitaarlessen, tarieven of een proefles? Stuur ons een bericht — we reageren meestal binnen één dag.</p>
      <!-- /wp:paragraph -->

      <!-- wp:image {"url":"http://studio-sound-of-music.local/wp-content/uploads/2025/05/fischer_portrait-marlowe_webres-9googleresize-Copy.jpg","sizeSlug":"large","style":{"border":{"radius":"12px"}}} /-->
    </div>
    <!-- /wp:column -->

    <!-- wp:column {"width":"50%"} -->
    <div class="wp-block-column contact-right" style="flex-basis:50%;">
      <!-- wp:group {"className":"contact-form-wrapper","style":{"color":{"background":"#f9f9f9","text":"#000000"},"border":{"radius":"12px"},"spacing":{"padding":{"top":"3rem","bottom":"3rem","left":"3rem","right":"3rem"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group contact-form-wrapper" style="background-color:#f9f9f9;color:#000000 !important;border-radius:12px;padding:3rem;">
        <!-- wp:heading {"level":3,"style":{"typography":{"fontWeight":"700","fontSize":"1.5rem"},"spacing":{"margin":{"bottom":"1.5rem"}}}} -->
        <h3 style="font-weight:700;font-size:1.5rem;margin-bottom:1.5rem;">Stuur ons een bericht</h3>
        <!-- /wp:heading -->

        <!-- wp:contact-form-7/contact-form-selector {"id":150,"hash":"91f4a93","title":"Contact form SSOM General"} -->
        [contact-form-7 id="91f4a93" title="Contact form SSOM General"]
        <!-- /wp:contact-form-7/contact-form-selector -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->