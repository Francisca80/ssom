<?php
/**
 * Title: Hero Section
 * Slug: ssom/hero
 * Categories: hero, featured
 * Keywords: hero, banner, studio, sound, call to action
 */
?>

<!-- wp:group {"tagName":"section","style":{"spacing":{"padding":{"top":"6rem","bottom":"8rem","left":"2rem","right":"2rem"}},"color":{"background":"#ffffff","text":"#0a0a0a"}},"layout":{"type":"constrained","contentSize":"1200px"}} -->
<section class="wp-block-group hero has-text-color has-background" style="background-color:#ffffff;color:#0a0a0a;padding-top:6rem;padding-bottom:8rem;padding-left:2rem;padding-right:2rem;">
  
  <!-- wp:heading {"level":1,"style":{"typography":{"fontSize":"clamp(3rem, 8vw, 8rem)","fontFamily":"var(--wp--preset--font-family--manrope)","fontWeight":"900","lineHeight":"1","letterSpacing":"-0.02em"},"spacing":{"margin":{"bottom":"3rem"}}}} -->
  <h1 class="wp-block-heading hero-title" style="font-size:clamp(3rem, 8vw, 8rem);font-family:var(--wp--preset--font-family--manrope);font-weight:900;line-height:1;letter-spacing:-0.02em;margin-bottom:3rem;">
    <span class="hero-line">STUDIO</span>
    <span class="hero-line">SOUND OF</span>
    <span class="hero-line">MUSIC</span>
  </h1>
  <!-- /wp:heading -->

  <!-- wp:group {"layout":{"type":"constrained","contentSize":"1200px"},"style":{"spacing":{"margin":{"bottom":"3rem"}}}} -->
  <div class="wp-block-group hero-paragraph" style="margin-bottom:3rem;">
    <!-- wp:paragraph {"style":{"typography":{"fontSize":"1.25rem","lineHeight":"1.5","textAlign":"left"}}} -->
    <p style="font-size:1.25rem;line-height:1.5;text-align:left;">Leer gitaar spelen — op jouw tempo.<br>Persoonlijke lessen in Nieuwegein en omgeving.</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:group -->

  <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left","flexWrap":"wrap"}} -->
  <div class="wp-block-buttons hero-buttons">
    <!-- wp:button {"backgroundColor":"accent","textColor":"dark"} -->
    <div class="wp-block-button">
      <a class="wp-block-button__link has-dark-color has-accent-background-color has-text-color has-background wp-element-button" href="#proefles">GRATIS PROEFLES</a>
    </div>
    <!-- /wp:button -->

    <!-- wp:button {"textColor":"dark","style":{"border":{"width":"2px","color":"var(--wp--preset--color--accent)"}}} -->
    <div class="wp-block-button">
      <a class="wp-block-button__link has-dark-color has-text-color wp-element-button" href="/lessen">BEKIJK LESSEN</a>
    </div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->

</section>
<!-- /wp:group -->
