<?php
/**
 * Title: SSOM Blog Home
 * Slug: ssom-blog-home
 * Categories: ssom
 * Keywords: blog, home, posts, muziek, fse
 */

?>

<!-- wp:group {"align":"full","className":"blog-header","layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull blog-header">
	<!-- wp:heading {"level":1,"textAlign":"left","style":{"spacing":{"margin":{"bottom":"1rem"}}}} -->
	<h1 class="has-text-align-left">Muziek Notes & Tips</h1>
	<!-- /wp:heading -->
	
	<!-- wp:paragraph {"align":"left","style":{"spacing":{"margin":{"bottom":"3rem"}}}} -->
	<p class="has-text-align-left">Ontdek handige tips, technieken en inzichten voor gitaarspelers van alle niveaus.</p>
	<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull">
	<!-- wp:query {"queryId":0,"query":{"perPage":4,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true}} -->
	<div class="wp-block-query">
		<!-- wp:post-template {"style":{"spacing":{"blockGap":"2rem"}}} -->
		<!-- wp:group {"className":"blog-card","style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"}},"border":{"radius":"12px"}},"backgroundColor":"base","layout":{"type":"constrained"}} -->
		<div class="wp-block-group has-background has-base-background-color blog-card">
			<!-- wp:post-featured-image {"aspectRatio":"16/9","scale":"cover","style":{"border":{"radius":{"topLeft":"12px","topRight":"12px"}}}} /-->
			
			<!-- wp:group {"className":"blog-card-content","style":{"spacing":{"padding":{"top":"1.5rem","right":"1.5rem","bottom":"1.5rem","left":"1.5rem"}}},"layout":{"type":"constrained"}} -->
			<div class="wp-block-group blog-card-content">
				<!-- wp:post-title {"level":3,"isLink":true,"align":"left","style":{"typography":{"fontSize":"1.125rem","fontWeight":"700","lineHeight":"1.3"},"spacing":{"margin":{"bottom":"1rem"}},"color":{"text":"#111111"}}} /-->
				<!-- wp:post-excerpt {"moreText":"","align":"left","style":{"spacing":{"margin":{"bottom":"1rem"}},"color":{"text":"#666666"}},"excerptLength":25} /-->
				<!-- wp:post-date {"align":"left","style":{"typography":{"fontSize":"0.875rem","fontWeight":"500","color":"#888888","spacing":{"margin":{"bottom":"1rem"}}}}} /-->
				<!-- wp:button {"textColor":"accent-dark","backgroundColor":"accent","style":{"typography":{"fontSize":"var(--wp--preset--font-size--medium)","fontWeight":"var(--wp--preset--font-weight--bold)"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-accent-background-color has-accent-dark-color wp-element-button">LEES MEER</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:group -->
		<!-- /wp:post-template -->
		
		<!-- wp:query-pagination {"style":{"spacing":{"margin":{"top":"4rem"}}}} -->
		<!-- wp:query-pagination-previous /-->
		<!-- wp:query-pagination-numbers /-->
		<!-- wp:query-pagination-next /-->
		<!-- /wp:query-pagination -->
	</div>
	<!-- /wp:query -->
	
	<!-- More Posts Button -->
	<!-- wp:group {"align":"center","style":{"spacing":{"margin":{"top":"4rem"}}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group aligncenter">
		<!-- wp:button {"textColor":"accent-dark","backgroundColor":"accent","style":{"typography":{"fontSize":"var(--wp--preset--font-size--medium)","fontWeight":"var(--wp--preset--font-weight--bold)"},"spacing":{"padding":{"top":"var(--wp--preset--spacing--20)","right":"var(--wp--preset--spacing--40)","bottom":"var(--wp--preset--spacing--20)","left":"var(--wp--preset--spacing--40)"}}}} -->
		<div class="wp-block-button"><a class="wp-block-button__link has-accent-background-color has-accent-dark-color wp-element-button" href="/blog/">LEES MEER</a></div>
		<!-- /wp:button -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->
