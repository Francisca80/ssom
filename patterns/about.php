<?php
/**
 * Title: About Studio (Modern Card with Video)
 * Slug: ssom/about
 * Categories: about, featured, text
 * Keywords: studio, intro, about, video, modern
 */
?>

<!-- wp:group {"tagName":"section","layout":{"type":"constrained","contentSize":"1200px"},"style":{"spacing":{"padding":{"top":"6rem","bottom":"6rem"},"margin":{"top":"0","bottom":"0"}}}} -->
<section class="wp-block-group about-studio" style="padding-top:6rem;padding-bottom:6rem;">
  <!-- wp:columns {"verticalAlignment":"center"} -->
  <div class="wp-block-columns are-vertically-aligned-center">
    
    <!-- wp:column {"width":"50%"} -->
    <div class="wp-block-column" style="flex-basis:50%">
      
      <!-- wp:paragraph {"className":"about-intro","style":{"typography":{"textTransform":"uppercase","fontWeight":"600","letterSpacing":"0.08em","fontSize":"0.875rem"},"color":{"text":"var(--wp--preset--color--accent-dark)"}}} -->
      <p class="about-intro has-text-color" style="color:var(--wp--preset--color--accent-dark);text-transform:uppercase;font-weight:600;letter-spacing:0.08em;font-size:0.875rem;">
        Welkom bij Studio Sound of Music
      </p>
      <!-- /wp:paragraph -->
      
      <!-- wp:heading {"level":2,"className":"about-heading","style":{"typography":{"fontWeight":"900","fontSize":"clamp(2rem, 5vw, 3rem)","lineHeight":"1.2"},"spacing":{"margin":{"bottom":"1.5rem"}}}} -->
      <h2 class="about-heading" style="font-weight:900;font-size:clamp(2rem, 5vw, 3rem);line-height:1.2;margin-bottom:1.5rem;">
        De gitaarschool waar jouw sound centraal staat
      </h2>
      <!-- /wp:heading -->

      <!-- wp:paragraph {"className":"about-text","style":{"typography":{"fontSize":"1.125rem","lineHeight":"1.6"},"color":{"text":"#333"},"spacing":{"margin":{"bottom":"2.5rem"}}}} -->
      <p class="about-text" style="font-size:1.125rem;line-height:1.6;color:#333;margin-bottom:2.5rem;">
        Studio Sound of Music is dé plek om gitaar te leren spelen met plezier. In onze lessen draait het om persoonlijke begeleiding, muzikaliteit en ontspanning. Je leert in jouw tempo, met aandacht voor techniek, gevoel en jouw favoriete muziekstijl. We geven les in Nieuwegein, dichtbij Vianen, IJsselstein, Houten en Utrecht.
      </p>
      <!-- /wp:paragraph -->

      <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"}} -->
      <div class="wp-block-buttons">
        <!-- wp:button {"backgroundColor":"accent","textColor":"dark","style":{"border":{"radius":"8px"},"typography":{"fontWeight":"600"}}} -->
        <div class="wp-block-button">
          <a href="/over-ons" class="wp-block-button__link has-dark-color has-accent-background-color has-text-color has-background wp-element-button">Over Ons</a>
        </div>
        <!-- /wp:button -->
      </div>
      <!-- /wp:buttons -->

    </div>
    <!-- /wp:column -->

    <!-- wp:column {"width":"50%"} -->
    <div class="wp-block-column" style="flex-basis:50%">
      <!-- wp:html -->
      <figure class="about-video" style="border-radius:12px;overflow:hidden;position:relative;">
        <video autoplay playsinline preload="auto" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:cover;">
          <source src="/wp-content/uploads/2025/10/Ssom.mp4" type="video/mp4" />
          Je browser ondersteunt geen video-tag.
        </video>
      </figure>
      <!-- /wp:html -->
    </div>
    <!-- /wp:column -->

  </div>
  <!-- /wp:columns -->
</section>
<!-- /wp:group -->
