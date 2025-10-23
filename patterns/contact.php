<?php
/**
 * Title: Contact Section (Modern)
 * Slug: ssom/contact
 * Categories: contact, featured
 * Keywords: contact, form, gitaarles, studio, sound of music
 */
?>

<!-- wp:group {"align":"full","style":{"color":{"background":"#ffffff","text":"#000000"},"spacing":{"padding":{"top":"6rem","bottom":"6rem","left":"2rem","right":"2rem"}}},"layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull contact-section" style="background-color:#ffffff;color:#000000 !important;padding-top:6rem;padding-bottom:6rem;padding-left:2rem;padding-right:2rem;">

  <!-- wp:columns {"verticalAlignment":"top","style":{"spacing":{"blockGap":"4rem"}}} -->
  <div class="wp-block-columns are-vertically-aligned-top" style="gap:4rem;">

    <!-- wp:column {"width":"50%"} -->
    <div class="wp-block-column contact-left" style="flex-basis:50%;">
      <!-- wp:paragraph {"style":{"typography":{"textTransform":"uppercase","fontWeight":"700","letterSpacing":"0.05em"},"spacing":{"margin":{"bottom":"1rem"}}}} -->
      <p style="text-transform:uppercase;font-weight:700;letter-spacing:0.05em;margin-bottom:1rem;">Contact</p>
      <!-- /wp:paragraph -->

      <!-- wp:heading {"level":2,"style":{"typography":{"fontWeight":"900","fontSize":"clamp(2.5rem, 6vw, 4rem)","lineHeight":"1.1","letterSpacing":"-0.02em"},"spacing":{"margin":{"bottom":"2rem"}}}} -->
      <h2 style="font-weight:900;font-size:clamp(2.5rem, 6vw, 4rem);line-height:1.1;letter-spacing:-0.02em;margin-bottom:2rem;">Neem contact<br>met ons op</h2>
      <!-- /wp:heading -->

      <!-- wp:paragraph {"style":{"typography":{"fontSize":"1.25rem","lineHeight":"1.6"},"spacing":{"margin":{"bottom":"3rem"}}}} -->
      <p style="font-size:1.25rem;line-height:1.6;margin-bottom:3rem;">Heb je vragen over gitaarlessen, tarieven of een proefles? Stuur ons een bericht — we reageren meestal binnen één dag.</p>
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

        <!-- wp:paragraph {"className":"form-thank-you","style":{"typography":{"fontSize":"1rem","fontWeight":"600"},"color":{"text":"var(--wp--preset--color--accent)"},"spacing":{"margin":{"top":"1rem"}}}} -->
        <p class="form-thank-you" style="font-size:1rem;font-weight:600;color:var(--wp--preset--color--accent);margin-top:1rem;display:none;">
          Bedankt! Je bericht is verzonden. 🎸
        </p>
        <!-- /wp:paragraph -->

      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->
