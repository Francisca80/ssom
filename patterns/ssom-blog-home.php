<?php
/**
 * Title: SSOM Blog Home
 * Slug: ssom-blog-home
 * Categories: ssom
 * Keywords: blog, home, posts, muziek, fse
 */

?>

<!-- wp:group {"align":"full","className":"blog-hero","layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull blog-hero">
	<!-- wp:heading {"level":1,"style":{"spacing":{"margin":{"bottom":"2rem"}}}} -->
	<h1>Muziek Notes & Tips</h1>
	<!-- /wp:heading -->
	
	<!-- wp:query {"queryId":99,"query":{"perPage":1,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","sticky":"only"},"layout":{"type":"default"}} -->
	<div class="wp-block-query featured-post-query">
		<!-- wp:post-template -->
			<!-- wp:group {"className":"featured-post-card","layout":{"type":"constrained"}} -->
			<div class="wp-block-group featured-post-card">
				<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"21/9","scale":"cover"} /-->
				<!-- wp:group {"className":"featured-post-overlay","layout":{"type":"constrained"}} -->
				<div class="wp-block-group featured-post-overlay">
					<!-- wp:post-title {"level":2,"isLink":true,"className":"featured-post-title"} /-->
					<!-- wp:post-date {"className":"featured-post-date"} /-->
					<!-- wp:post-author {"className":"featured-post-author"} /-->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:group -->
		<!-- /wp:post-template -->
	</div>
	<!-- /wp:query -->
</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","className":"blog-section","layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull blog-section">
	<!-- wp:heading {"level":2,"className":"section-label"} -->
	<h2 class="section-label">Beginnersgids</h2>
	<!-- /wp:heading -->
	
	<!-- wp:query {"queryId":1,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","categoryName":"beginners"},"layout":{"type":"default"}} -->
	<div class="wp-block-query">
		<!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
			<!-- wp:group {"className":"blog-card","layout":{"type":"constrained"}} -->
			<div class="wp-block-group blog-card">
				<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","scale":"cover"} /-->
				<!-- wp:post-date {"className":"blog-card-date"} /-->
				<!-- wp:post-title {"level":3,"isLink":true,"className":"blog-card-title"} /-->
				<!-- wp:post-excerpt {"moreText":"Lees meer","excerptLength":20} /-->
			</div>
			<!-- /wp:group -->
		<!-- /wp:post-template -->
	</div>
	<!-- /wp:query -->
</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","className":"blog-section","layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull blog-section">
	<!-- wp:heading {"level":2,"className":"section-label"} -->
	<h2 class="section-label">Oefentips</h2>
	<!-- /wp:heading -->
	
	<!-- wp:query {"queryId":2,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","categoryName":"oefeningen"},"layout":{"type":"default"}} -->
	<div class="wp-block-query">
		<!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
			<!-- wp:group {"className":"blog-card","layout":{"type":"constrained"}} -->
			<div class="wp-block-group blog-card">
				<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","scale":"cover"} /-->
				<!-- wp:post-date {"className":"blog-card-date"} /-->
				<!-- wp:post-title {"level":3,"isLink":true,"className":"blog-card-title"} /-->
				<!-- wp:post-excerpt {"moreText":"Lees meer","excerptLength":20} /-->
			</div>
			<!-- /wp:group -->
		<!-- /wp:post-template -->
	</div>
	<!-- /wp:query -->
</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull">
	<!-- wp:query {"queryId":0,"query":{"perPage":6,"pages":0,"offset":1,"postType":"post","order":"desc","orderBy":"date"},"layout":{"type":"default"}} -->
	<div class="wp-block-query">
		<!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
			<!-- wp:group {"className":"blog-card","layout":{"type":"constrained"}} -->
			<div class="wp-block-group blog-card">
				<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","scale":"cover"} /-->
				<!-- wp:post-date {"className":"blog-card-date"} /-->
				<!-- wp:post-title {"level":3,"isLink":true,"className":"blog-card-title"} /-->
				<!-- wp:post-excerpt {"moreText":"Lees meer","excerptLength":20} /-->
			</div>
			<!-- /wp:group -->
		<!-- /wp:post-template -->
		
		<!-- wp:query-pagination {"paginationArrow":"arrow","layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"4rem"}}}} -->
			<!-- wp:query-pagination-previous {"label":"Vorige"} /-->
			<!-- wp:query-pagination-numbers /-->
			<!-- wp:query-pagination-next {"label":"Volgende"} /-->
		<!-- /wp:query-pagination -->
		
		<!-- wp:query-no-results -->
			<!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} -->
			<p>Geen berichten gevonden.</p>
			<!-- /wp:paragraph -->
		<!-- /wp:query-no-results -->
	</div>
	<!-- /wp:query -->
</div>
<!-- /wp:group -->


