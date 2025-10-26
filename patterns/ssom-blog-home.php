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
	<!-- wp:heading {"level":1,"textAlign":"center","style":{"spacing":{"margin":{"bottom":"1rem"}}}} -->
	<h1 class="has-text-align-center">Muziek Notes & Tips</h1>
	<!-- /wp:heading -->
	
	<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"bottom":"3rem"}}}} -->
	<p class="has-text-align-center">Ontdek handige tips, technieken en inzichten voor gitaarspelers van alle niveaus.</p>
	<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull">
	<!-- wp:query {"queryId":0,"query":{"perPage":6,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true}} -->
	<div class="wp-block-query">
		<!-- wp:post-template {"style":{"spacing":{"blockGap":"2rem"}}} -->
		<!-- wp:group {"className":"blog-magazine-layout","layout":{"type":"constrained"}} -->
		<div class="wp-block-group blog-magazine-layout">
			<!-- Main featured post -->
			<!-- wp:group {"className":"main-post","style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"}},"border":{"radius":"8px","color":"#e0e0e0","width":"1px"}},"backgroundColor":"base","layout":{"type":"constrained"}} -->
			<div class="wp-block-group has-background has-base-background-color has-border-color main-post">
				<!-- wp:post-featured-image {"aspectRatio":"16/9","scale":"cover","style":{"border":{"radius":{"topLeft":"8px","topRight":"8px"}}}} /-->
				
				<!-- wp:group {"className":"main-post-overlay","style":{"spacing":{"padding":{"top":"2rem","right":"2rem","bottom":"2rem","left":"2rem"}}},"layout":{"type":"constrained"}} -->
				<div class="wp-block-group main-post-overlay">
					<!-- wp:post-title {"isLink":true,"style":{"typography":{"fontSize":"2.5rem","fontWeight":"700","lineHeight":"1.1"},"spacing":{"margin":{"bottom":"1rem"}},"color":{"text":"#ffffff"}}} /-->
					<!-- wp:post-excerpt {"moreText":"Lees meer","style":{"spacing":{"margin":{"bottom":"1rem"}},"color":{"text":"#ffffff"}},"excerptLength":30} /-->
					<!-- wp:post-date {"style":{"typography":{"fontSize":"0.875rem","fontWeight":"500","color":"#ffffff"}}} /-->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:group -->
			
			<!-- Side posts -->
			<!-- wp:group {"className":"side-posts","layout":{"type":"constrained"}} -->
			<div class="wp-block-group side-posts">
				<!-- wp:group {"className":"side-post","style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"}},"border":{"radius":"8px","color":"#e0e0e0","width":"1px"}},"backgroundColor":"base","layout":{"type":"constrained"}} -->
				<div class="wp-block-group has-background has-base-background-color has-border-color side-post">
					<!-- wp:post-featured-image {"aspectRatio":"4/3","scale":"cover","style":{"border":{"radius":{"topLeft":"8px","topRight":"8px"}}}} /-->
					
					<!-- wp:group {"className":"side-post-overlay","style":{"spacing":{"padding":{"top":"1.5rem","right":"1.5rem","bottom":"1.5rem","left":"1.5rem"}}},"layout":{"type":"constrained"}} -->
					<div class="wp-block-group side-post-overlay">
						<!-- wp:post-title {"isLink":true,"style":{"typography":{"fontSize":"1.25rem","fontWeight":"700","lineHeight":"1.2"},"spacing":{"margin":{"bottom":"0.75rem"}},"color":{"text":"#ffffff"}}} /-->
						<!-- wp:post-excerpt {"moreText":"Lees meer","style":{"spacing":{"margin":{"bottom":"0.75rem"}},"color":{"text":"#ffffff"}},"excerptLength":20} /-->
						<!-- wp:post-date {"style":{"typography":{"fontSize":"0.75rem","fontWeight":"500","color":"#ffffff"}}} /-->
					</div>
					<!-- /wp:group -->
				</div>
				<!-- /wp:group -->
				
				<!-- wp:group {"className":"side-post","style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"}},"border":{"radius":"8px","color":"#e0e0e0","width":"1px"}},"backgroundColor":"base","layout":{"type":"constrained"}} -->
				<div class="wp-block-group has-background has-base-background-color has-border-color side-post">
					<!-- wp:post-featured-image {"aspectRatio":"4/3","scale":"cover","style":{"border":{"radius":{"topLeft":"8px","topRight":"8px"}}}} /-->
					
					<!-- wp:group {"className":"side-post-overlay","style":{"spacing":{"padding":{"top":"1.5rem","right":"1.5rem","bottom":"1.5rem","left":"1.5rem"}}},"layout":{"type":"constrained"}} -->
					<div class="wp-block-group side-post-overlay">
						<!-- wp:post-title {"isLink":true,"style":{"typography":{"fontSize":"1.25rem","fontWeight":"700","lineHeight":"1.2"},"spacing":{"margin":{"bottom":"0.75rem"}},"color":{"text":"#ffffff"}}} /-->
						<!-- wp:post-excerpt {"moreText":"Lees meer","style":{"spacing":{"margin":{"bottom":"0.75rem"}},"color":{"text":"#ffffff"}},"excerptLength":20} /-->
						<!-- wp:post-date {"style":{"typography":{"fontSize":"0.75rem","fontWeight":"500","color":"#ffffff"}}} /-->
					</div>
					<!-- /wp:group -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:group -->
		
		<!-- Additional posts in 3-column grid -->
		<!-- wp:group {"className":"additional-posts","layout":{"type":"constrained"}} -->
		<div class="wp-block-group additional-posts">
			<!-- wp:group {"className":"additional-post","style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"}},"border":{"radius":"8px","color":"#e0e0e0","width":"1px"}},"backgroundColor":"base","layout":{"type":"constrained"}} -->
			<div class="wp-block-group has-background has-base-background-color has-border-color additional-post">
				<!-- wp:post-featured-image {"aspectRatio":"16/9","scale":"cover","style":{"border":{"radius":{"topLeft":"8px","topRight":"8px"}}}} /-->
				
				<!-- wp:group {"className":"additional-post-overlay","style":{"spacing":{"padding":{"top":"1.5rem","right":"1.5rem","bottom":"1.5rem","left":"1.5rem"}}},"layout":{"type":"constrained"}} -->
				<div class="wp-block-group additional-post-overlay">
					<!-- wp:post-title {"isLink":true,"style":{"typography":{"fontSize":"1.25rem","fontWeight":"700","lineHeight":"1.2"},"spacing":{"margin":{"bottom":"0.75rem"}},"color":{"text":"#ffffff"}}} /-->
					<!-- wp:post-excerpt {"moreText":"Lees meer","style":{"spacing":{"margin":{"bottom":"0.75rem"}},"color":{"text":"#ffffff"}},"excerptLength":25} /-->
					<!-- wp:post-date {"style":{"typography":{"fontSize":"0.75rem","fontWeight":"500","color":"#ffffff"}}} /-->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:group -->
			
			<!-- wp:group {"className":"additional-post","style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"}},"border":{"radius":"8px","color":"#e0e0e0","width":"1px"}},"backgroundColor":"base","layout":{"type":"constrained"}} -->
			<div class="wp-block-group has-background has-base-background-color has-border-color additional-post">
				<!-- wp:post-featured-image {"aspectRatio":"16/9","scale":"cover","style":{"border":{"radius":{"topLeft":"8px","topRight":"8px"}}}} /-->
				
				<!-- wp:group {"className":"additional-post-overlay","style":{"spacing":{"padding":{"top":"1.5rem","right":"1.5rem","bottom":"1.5rem","left":"1.5rem"}}},"layout":{"type":"constrained"}} -->
				<div class="wp-block-group additional-post-overlay">
					<!-- wp:post-title {"isLink":true,"style":{"typography":{"fontSize":"1.25rem","fontWeight":"700","lineHeight":"1.2"},"spacing":{"margin":{"bottom":"0.75rem"}},"color":{"text":"#ffffff"}}} /-->
					<!-- wp:post-excerpt {"moreText":"Lees meer","style":{"spacing":{"margin":{"bottom":"0.75rem"}},"color":{"text":"#ffffff"}},"excerptLength":25} /-->
					<!-- wp:post-date {"style":{"typography":{"fontSize":"0.75rem","fontWeight":"500","color":"#ffffff"}}} /-->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:group -->
			
			<!-- wp:group {"className":"additional-post","style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"}},"border":{"radius":"8px","color":"#e0e0e0","width":"1px"}},"backgroundColor":"base","layout":{"type":"constrained"}} -->
			<div class="wp-block-group has-background has-base-background-color has-border-color additional-post">
				<!-- wp:post-featured-image {"aspectRatio":"16/9","scale":"cover","style":{"border":{"radius":{"topLeft":"8px","topRight":"8px"}}}} /-->
				
				<!-- wp:group {"className":"additional-post-overlay","style":{"spacing":{"padding":{"top":"1.5rem","right":"1.5rem","bottom":"1.5rem","left":"1.5rem"}}},"layout":{"type":"constrained"}} -->
				<div class="wp-block-group additional-post-overlay">
					<!-- wp:post-title {"isLink":true,"style":{"typography":{"fontSize":"1.25rem","fontWeight":"700","lineHeight":"1.2"},"spacing":{"margin":{"bottom":"0.75rem"}},"color":{"text":"#ffffff"}}} /-->
					<!-- wp:post-excerpt {"moreText":"Lees meer","style":{"spacing":{"margin":{"bottom":"0.75rem"}},"color":{"text":"#ffffff"}},"excerptLength":25} /-->
					<!-- wp:post-date {"style":{"typography":{"fontSize":"0.75rem","fontWeight":"500","color":"#ffffff"}}} /-->
				</div>
				<!-- /wp:group -->
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
</div>
<!-- /wp:group -->
