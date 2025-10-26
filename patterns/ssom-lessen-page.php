<?php
/**
 * Title: SSOM Lessen Page (FSE Compatible)
 * Slug: ssom-lessen-page
 * Categories: ssom
 * Keywords: lessen, gitaar, muziek, prijzen, fse
 * Enqueue Style: assets/css/lessen.css
 */

// PHPDoc stub for get_field function to satisfy linter
if (!function_exists('get_field')) {
    /**
     * Get ACF field value
     * @param string $field_name
     * @param mixed $post_id
     * @return mixed
     */
    function get_field($field_name, $post_id = false) {
        return '';
    }
}
?>
<!-- wp:group {"align":"full","className":"lessen-page fse-compatible","style":{"color":{"background":"var(--wp--preset--color--base)"},"spacing":{"padding":{"top":"0px","bottom":"0px"}},"layout":{}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull lessen-page fse-compatible" style="background-color:var(--wp--preset--color--base);padding-top:0px;padding-bottom:0px">
	
	<!-- Page Header Block -->
	<!-- wp:group {"align":"full","className":"lessen-page-header","style":{"spacing":{"padding":{"top":"var(--wp--preset--spacing--60)","right":"var(--wp--preset--spacing--50)","bottom":"var(--wp--preset--spacing--60)","left":"var(--wp--preset--spacing--50)"}},"layout":{}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignfull lessen-page-header" style="padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--50)">
		<!-- wp:group {"style":{"spacing":{"blockGap":"var(--wp--preset--spacing--40)"}},"layout":{"type":"flex","orientation":"vertical"}} -->
		<div class="wp-block-group">
			<!-- wp:group {"className":"hero-title-badge","style":{"color":{"background":"var(--wp--preset--color--accent)"},"border":{"radius":"16px"},"spacing":{"padding":{"top":"var(--wp--preset--spacing--20)","right":"var(--wp--preset--spacing--20)","bottom":"var(--wp--preset--spacing--20)","left":"var(--wp--preset--spacing--20)"}},"layout":{}},"layout":{"type":"constrained"}} -->
			<div class="wp-block-group hero-title-badge has-accent-background-color" style="border-radius:16px;padding-top:var(--wp--preset--spacing--20);padding-right:var(--wp--preset--spacing--20);padding-bottom:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--20)">
				<!-- wp:heading {"level":1,"textColor":"accent-dark","textAlign":"left"} -->
				<h1 class="has-accent-dark-color has-text-align-left"><?php echo function_exists('get_field') ? esc_html(get_field('hero_title')) : 'Gitaarlessen'; ?></h1>
				<!-- /wp:heading -->
			</div>
			<!-- /wp:group -->

			<!-- wp:paragraph -->
			<p><?php echo function_exists('get_field') ? esc_html(get_field('hero_subtitle')) : 'Meer informatie over gitaarles in Nieuwegein'; ?></p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:group -->
	</div>
	<!-- /wp:group -->

	<!-- Content Block -->
	<!-- wp:group {"align":"full","className":"content-block","style":{"spacing":{"padding":{"top":"var(--wp--preset--spacing--40)","right":"var(--wp--preset--spacing--50)","bottom":"var(--wp--preset--spacing--40)","left":"var(--wp--preset--spacing--50)"}},"layout":{}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignfull content-block" style="padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--50)">
		<!-- wp:group {"style":{"spacing":{"blockGap":"var(--wp--preset--spacing--40)"}},"layout":{"type":"flex","orientation":"vertical"}} -->
		<div class="wp-block-group">
			<!-- wp:paragraph {"style":{"typography":{"fontSize":"var(--wp--preset--font-size--medium)","fontWeight":"var(--wp--preset--font-weight--regular)"},"color":{"text":"var(--wp--preset--color--text)"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--20)"}}}} -->
			<p class="has-text-color" style="margin-bottom:var(--wp--preset--spacing--20);font-size:var(--wp--preset--font-size--medium);font-weight:var(--wp--preset--font-weight--regular);color:var(--wp--preset--color--text)"><?php echo function_exists('get_field') ? esc_html(get_field('content_text')) : 'Bij Studio Sound of Music leer je gitaar spelen op een manier die bij jóu past. Of je nu net begint of al wat akkoorden kent, onze lessen zijn persoonlijk, creatief en motiverend. Je leert de nummers die jij leuk vindt in jouw eigen tempo, met aandacht voor techniek, muzikaliteit en speelplezier. Van rock tot klassiek en van pop tot blues – alles is mogelijk.'; ?></p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph {"style":{"typography":{"fontSize":"var(--wp--preset--font-size--medium)","fontWeight":"var(--wp--preset--font-weight--regular)"},"color":{"text":"var(--wp--preset--color--text)"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--20)"}}}} -->
			<p class="has-text-color" style="margin-bottom:var(--wp--preset--spacing--20);font-size:var(--wp--preset--font-size--medium);font-weight:var(--wp--preset--font-weight--regular);color:var(--wp--preset--color--text)">Ontdek hoe leuk en toegankelijk gitaarspelen kan zijn, onder begeleiding van gepassioneerde en ervaren docenten. Probeer het zelf met een vrijblijvende proefles en krijg korting bij het aanschaffen van het eerste lespakket!!</p>
			<!-- /wp:paragraph -->

			<!-- wp:buttons {"style":{"spacing":{"margin":{"bottom":"0px"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button -->
				<div class="wp-block-button">
					<a class="wp-block-button__link wp-element-button" href="<?php echo function_exists('get_field') ? esc_url(get_field('content_cta_link')) : '#'; ?>"><?php echo function_exists('get_field') ? esc_html(get_field('content_cta_text')) : 'Gratis proefles aanvragen'; ?></a>
				</div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:group -->
	</div>
	<!-- /wp:group -->

	<!-- Pricing Block -->
	<!-- wp:group {"align":"full","className":"pricing-block","style":{"spacing":{"padding":{"top":"var(--wp--preset--spacing--40)","right":"var(--wp--preset--spacing--50)","bottom":"var(--wp--preset--spacing--40)","left":"var(--wp--preset--spacing--50)"}},"layout":{}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignfull pricing-block" style="padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--50)">
		<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"var(--wp--preset--spacing--30)"}}}} -->
		<div class="wp-block-columns pricing-columns-2">
			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:group {"className":"pricing-card","style":{"border":{"width":"2px","color":"var(--wp--preset--color--accent-dark)","radius":"16px"},"spacing":{"padding":{"top":"var(--wp--preset--spacing--30)","right":"var(--wp--preset--spacing--30)","bottom":"var(--wp--preset--spacing--30)","left":"var(--wp--preset--spacing--30)"}},"layout":{}},"layout":{"type":"constrained"}} -->
				<div class="wp-block-group pricing-card" style="border-width:2px;border-color:var(--wp--preset--color--accent-dark);border-radius:16px;padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)">
					<!-- wp:group {"style":{"spacing":{"blockGap":"var(--wp--preset--spacing--40)"}},"layout":{"type":"flex","orientation":"vertical"}} -->
					<div class="wp-block-group">
						<!-- wp:image {"style":{"border":{"radius":"12px"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--20)"}}}} -->
						<figure class="wp-block-image" style="border-radius:12px;margin-bottom:var(--wp--preset--spacing--20)">
							<img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Private guitar lesson" />
						</figure>
						<!-- /wp:image -->

						<!-- wp:heading {"level":2,"style":{"typography":{"fontSize":"var(--wp--preset--font-size--large)","fontWeight":"var(--wp--preset--font-weight--bold)"},"color":{"text":"var(--wp--preset--color--text)"}}} -->
						<h2 class="has-text-color" style="font-size:var(--wp--preset--font-size--large);font-weight:var(--wp--preset--font-weight--bold);color:var(--wp--preset--color--text)">Prive Gitaarles</h2>
						<!-- /wp:heading -->

						<!-- wp:paragraph {"style":{"typography":{"fontSize":"var(--wp--preset--font-size--medium)","fontWeight":"var(--wp--preset--font-weight--regular)"},"color":{"text":"var(--wp--preset--color--text)"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--10)"}}}} -->
						<p class="has-text-color" style="margin-bottom:var(--wp--preset--spacing--10);font-size:var(--wp--preset--font-size--medium);font-weight:var(--wp--preset--font-weight--regular);color:var(--wp--preset--color--text)">Introductieprijs <strong>€210,00.</strong></p>
						<!-- /wp:paragraph -->

						<!-- wp:paragraph {"style":{"typography":{"fontSize":"var(--wp--preset--font-size--medium)","fontWeight":"var(--wp--preset--font-weight--regular)"},"color":{"text":"var(--wp--preset--color--text)"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--20)"}}}} -->
						<p class="has-text-color" style="margin-bottom:var(--wp--preset--spacing--20);font-size:var(--wp--preset--font-size--medium);font-weight:var(--wp--preset--font-weight--regular);color:var(--wp--preset--color--text)">10 lessen van 30 minuten</p>
						<!-- /wp:paragraph -->

						<!-- wp:paragraph {"style":{"typography":{"fontSize":"var(--wp--preset--font-size--medium)","fontWeight":"var(--wp--preset--font-weight--regular)"},"color":{"text":"var(--wp--preset--color--text)"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--10)"}}}} -->
						<p class="has-text-color" style="margin-bottom:var(--wp--preset--spacing--10);font-size:var(--wp--preset--font-size--medium);font-weight:var(--wp--preset--font-weight--regular);color:var(--wp--preset--color--text)">Vervolgprijs <strong>€229,00</strong></p>
						<!-- /wp:paragraph -->

						<!-- wp:paragraph {"style":{"typography":{"fontSize":"var(--wp--preset--font-size--medium)","fontWeight":"var(--wp--preset--font-weight--regular)"},"color":{"text":"var(--wp--preset--color--text)"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--20)"}}}} -->
						<p class="has-text-color" style="margin-bottom:var(--wp--preset--spacing--20);font-size:var(--wp--preset--font-size--medium);font-weight:var(--wp--preset--font-weight--regular);color:var(--wp--preset--color--text)">per lespakket van 10 lessen van 30 minuten</p>
						<!-- /wp:paragraph -->

						<!-- wp:paragraph {"style":{"typography":{"fontSize":"var(--wp--preset--font-size--small)","fontWeight":"var(--wp--preset--font-weight--regular)"},"color":{"text":"var(--wp--preset--color--text)"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--40)"}}}} -->
						<p class="has-text-color" style="margin-bottom:var(--wp--preset--spacing--40);font-size:var(--wp--preset--font-size--small);font-weight:var(--wp--preset--font-weight--regular);color:var(--wp--preset--color--text)">Ben je ouder dan 21 jaar? Dan komt er 21% BTW bij.<br>Wij werken ook met de Nieuwegein Stadspas.</p>
						<!-- /wp:paragraph -->

					<!-- wp:buttons {"style":{"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--30)"}}}} -->
					<div class="wp-block-buttons">
					<!-- wp:button -->
					<div class="wp-block-button">
						<a class="wp-block-button__link wp-element-button" href="#">Start je prive lessen</a>
					</div>
					<!-- /wp:button -->
					</div>
					<!-- /wp:buttons -->

						<!-- wp:separator {"style":{"color":{"background":"var(--wp--preset--color--accent-dark)"},"spacing":{"padding":{"top":"var(--wp--preset--spacing--20)","bottom":"var(--wp--preset--spacing--20)"}}}} -->
						<hr class="wp-block-separator has-accent-dark-background-color has-background" style="padding-top:var(--wp--preset--spacing--20);padding-bottom:var(--wp--preset--spacing--20)"/>
						<!-- /wp:separator -->

						<!-- wp:list {"style":{"spacing":{"padding":{"left":"0px"}},"typography":{"fontSize":"var(--wp--preset--font-size--medium)"}}} -->
						<ul style="font-size:var(--wp--preset--font-size--medium);padding-left:0px">
							<li class="checklist-item">Je krijgt extra aandacht voor jouw uitdagingen.</li>
							<li class="checklist-item">Je leert op je eigen tempo.</li>
							<li class="checklist-item">Je leert gitaarspelen aan de hand van jouw lievelingsnummers.</li>
						</ul>
						<!-- /wp:list -->
					</div>
					<!-- /wp:group -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:group {"className":"pricing-card","style":{"border":{"width":"2px","color":"var(--wp--preset--color--accent-dark)","radius":"16px"},"spacing":{"padding":{"top":"var(--wp--preset--spacing--30)","right":"var(--wp--preset--spacing--30)","bottom":"var(--wp--preset--spacing--30)","left":"var(--wp--preset--spacing--30)"}},"layout":{}},"layout":{"type":"constrained"}} -->
				<div class="wp-block-group pricing-card" style="border-width:2px;border-color:var(--wp--preset--color--accent-dark);border-radius:16px;padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)">
					<!-- wp:group {"style":{"spacing":{"blockGap":"var(--wp--preset--spacing--40)"}},"layout":{"type":"flex","orientation":"vertical"}} -->
					<div class="wp-block-group">
						<!-- wp:image {"style":{"border":{"radius":"12px"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--20)"}}}} -->
						<figure class="wp-block-image" style="border-radius:12px;margin-bottom:var(--wp--preset--spacing--20)">
							<img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Duo guitar lesson" />
						</figure>
						<!-- /wp:image -->

						<!-- wp:heading {"level":2,"style":{"typography":{"fontSize":"var(--wp--preset--font-size--large)","fontWeight":"var(--wp--preset--font-weight--bold)"},"color":{"text":"var(--wp--preset--color--text)"}}} -->
						<h2 class="has-text-color" style="font-size:var(--wp--preset--font-size--large);font-weight:var(--wp--preset--font-weight--bold);color:var(--wp--preset--color--text)">Duo Gitaarles</h2>
						<!-- /wp:heading -->

						<!-- wp:paragraph {"style":{"typography":{"fontSize":"var(--wp--preset--font-size--medium)","fontWeight":"var(--wp--preset--font-weight--regular)"},"color":{"text":"var(--wp--preset--color--text)"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--10)"}}}} -->
						<p class="has-text-color" style="margin-bottom:var(--wp--preset--spacing--10);font-size:var(--wp--preset--font-size--medium);font-weight:var(--wp--preset--font-weight--regular);color:var(--wp--preset--color--text)">Introductieprijs <strong>€150,00</strong></p>
						<!-- /wp:paragraph -->

						<!-- wp:paragraph {"style":{"typography":{"fontSize":"var(--wp--preset--font-size--medium)","fontWeight":"var(--wp--preset--font-weight--regular)"},"color":{"text":"var(--wp--preset--color--text)"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--20)"}}}} -->
						<p class="has-text-color" style="margin-bottom:var(--wp--preset--spacing--20);font-size:var(--wp--preset--font-size--medium);font-weight:var(--wp--preset--font-weight--regular);color:var(--wp--preset--color--text)">per persoon. 10 lessen van 30 minuten</p>
						<!-- /wp:paragraph -->

						<!-- wp:paragraph {"style":{"typography":{"fontSize":"var(--wp--preset--font-size--medium)","fontWeight":"var(--wp--preset--font-weight--regular)"},"color":{"text":"var(--wp--preset--color--text)"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--10)"}}}} -->
						<p class="has-text-color" style="margin-bottom:var(--wp--preset--spacing--10);font-size:var(--wp--preset--font-size--medium);font-weight:var(--wp--preset--font-weight--regular);color:var(--wp--preset--color--text)">Vervolgprijs <strong>€165,00</strong></p>
						<!-- /wp:paragraph -->

						<!-- wp:paragraph {"style":{"typography":{"fontSize":"var(--wp--preset--font-size--medium)","fontWeight":"var(--wp--preset--font-weight--regular)"},"color":{"text":"var(--wp--preset--color--text)"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--20)"}}}} -->
						<p class="has-text-color" style="margin-bottom:var(--wp--preset--spacing--20);font-size:var(--wp--preset--font-size--medium);font-weight:var(--wp--preset--font-weight--regular);color:var(--wp--preset--color--text)">per lespakket van 10 lessen van 30 minuten per persoon.</p>
						<!-- /wp:paragraph -->

						<!-- wp:paragraph {"style":{"typography":{"fontSize":"var(--wp--preset--font-size--small)","fontWeight":"var(--wp--preset--font-weight--regular)"},"color":{"text":"var(--wp--preset--color--text)"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--40)"}}}} -->
						<p class="has-text-color" style="margin-bottom:var(--wp--preset--spacing--40);font-size:var(--wp--preset--font-size--small);font-weight:var(--wp--preset--font-weight--regular);color:var(--wp--preset--color--text)">Ben je ouder dan 21 jaar? Dan komt er 21% BTW bij.<br>Wij werken ook met de Nieuwegein Stadspas.</p>
						<!-- /wp:paragraph -->

					<!-- wp:buttons {"style":{"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--30)"}}}} -->
					<div class="wp-block-buttons">
					<!-- wp:button -->
					<div class="wp-block-button">
						<a class="wp-block-button__link wp-element-button" href="#">Start duo lessen</a>
					</div>
					<!-- /wp:button -->
					</div>
					<!-- /wp:buttons -->

						<!-- wp:separator {"style":{"color":{"background":"var(--wp--preset--color--accent-dark)"},"spacing":{"padding":{"top":"var(--wp--preset--spacing--20)","bottom":"var(--wp--preset--spacing--20)"}}}} -->
						<hr class="wp-block-separator has-accent-dark-background-color has-background" style="padding-top:var(--wp--preset--spacing--20);padding-bottom:var(--wp--preset--spacing--20)"/>
						<!-- /wp:separator -->

						<!-- wp:list {"style":{"spacing":{"padding":{"left":"0px"}},"typography":{"fontSize":"var(--wp--preset--font-size--medium)"}}} -->
						<ul style="font-size:var(--wp--preset--font-size--medium);padding-left:0px">
							<li class="checklist-item">Je leert samen met een ander en motiveert elkaar.</li>
							<li class="checklist-item">Je leert direct samenspelen.</li>
							<li class="checklist-item">Je leert gitaarspelen aan de hand van jouw lievelingsnummers.</li>
						</ul>
						<!-- /wp:list -->
					</div>
					<!-- /wp:group -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:column -->
		</div>
		<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->

	<!-- Media Text Block -->
	<!-- wp:group {"align":"full","className":"media-text-block","style":{"spacing":{"padding":{"top":"var(--wp--preset--spacing--60)","right":"var(--wp--preset--spacing--50)","bottom":"var(--wp--preset--spacing--60)","left":"var(--wp--preset--spacing--50)"}},"layout":{}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignfull media-text-block" style="padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--50)">
		<!-- wp:group {"style":{"spacing":{"blockGap":"var(--wp--preset--spacing--60)"}},"layout":{"type":"flex","orientation":"vertical"}} -->
		<div class="wp-block-group">
			<!-- wp:group {"className":"media-text-title-badge","style":{"color":{"background":"var(--wp--preset--color--accent)"},"border":{"radius":"16px"},"spacing":{"padding":{"top":"var(--wp--preset--spacing--20)","right":"var(--wp--preset--spacing--20)","bottom":"var(--wp--preset--spacing--20)","left":"var(--wp--preset--spacing--20)"}},"layout":{}},"layout":{"type":"constrained"}} -->
			<div class="wp-block-group media-text-title-badge has-accent-background-color" style="border-radius:16px;padding-top:var(--wp--preset--spacing--20);padding-right:var(--wp--preset--spacing--20);padding-bottom:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--20)">
				<!-- wp:heading {"level":2,"style":{"typography":{"fontSize":"var(--wp--preset--font-size--large)","fontWeight":"var(--wp--preset--font-weight--bold)"},"color":{"text":"var(--wp--preset--color--accent-dark)"}},"layout":{"selfStretch":"fit"}} -->
				<h2 class="has-accent-dark-color has-text-color" style="font-size:var(--wp--preset--font-size--large);font-weight:var(--wp--preset--font-weight--bold);color:var(--wp--preset--color--accent-dark)">Extra's</h2>
				<!-- /wp:heading -->
			</div>
			<!-- /wp:group -->

			<!-- wp:paragraph {"style":{"typography":{"fontSize":"var(--wp--preset--font-size--medium)","fontWeight":"var(--wp--preset--font-weight--regular)"},"color":{"text":"var(--wp--preset--color--text)"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--20)"}}}} -->
			<p class="has-text-color" style="margin-bottom:var(--wp--preset--spacing--20);font-size:var(--wp--preset--font-size--medium);font-weight:var(--wp--preset--font-weight--regular);color:var(--wp--preset--color--text)">Welke vorm van gitaarles je ook kiest, onze gitaardocenten zorgen er altijd voor dat je de beste begeleiding krijgt en zullen je ook een andere methode aanraden als blijkt dat je daar meer baat bij hebt.</p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph {"style":{"typography":{"fontSize":"var(--wp--preset--font-size--medium)","fontWeight":"var(--wp--preset--font-weight--regular)"},"color":{"text":"var(--wp--preset--color--text)"},"spacing":{"margin":{"bottom":"var(--wp--preset--spacing--20)"}}}} -->
			<p class="has-text-color" style="margin-bottom:var(--wp--preset--spacing--20);font-size:var(--wp--preset--font-size--medium);font-weight:var(--wp--preset--font-weight--regular);color:var(--wp--preset--color--text)">Ons doel is natuurlijk om jou zo snel en plezierig mogelijk gitaar te leren spelen. Als je voor duo les kiest, zullen wij er altijd voor zorgen dat je in een groep komt met iemand van hetzelfde niveau en dezelfde interesses.</p>
			<!-- /wp:paragraph -->

			<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"var(--wp--preset--spacing--50)"}}}} -->
			<div class="wp-block-columns media-text-columns media-position-right">
				<!-- wp:column -->
				<div class="wp-block-column media-text-content">
					<!-- wp:group {"style":{"spacing":{"blockGap":"var(--wp--preset--spacing--40)"}},"layout":{"type":"flex","orientation":"vertical"}} -->
					<div class="wp-block-group">
						<!-- wp:list {"style":{"spacing":{"padding":{"left":"0px"}},"typography":{"fontSize":"var(--wp--preset--font-size--medium)"}}} -->
						<ul style="font-size:var(--wp--preset--font-size--medium);padding-left:0px">
							<li class="extras-list-item">Plectrums zijn gratis.</li>
							<li class="extras-list-item">Kortingen op nieuwe snaren.</li>
							<li class="extras-list-item">Alle bladmuziek, papier en gitaar TABs inbegrepen.</li>
							<li class="extras-list-item">Gratis afstelbeurten voor electrische gitaren!</li>
						</ul>
						<!-- /wp:list -->

						<!-- wp:buttons -->
						<div class="wp-block-buttons">
						<!-- wp:button -->
						<div class="wp-block-button">
							<a class="wp-block-button__link wp-element-button" href="#">Gratis proefles aanvragen</a>
						</div>
						<!-- /wp:button -->
						</div>
						<!-- /wp:buttons -->
					</div>
					<!-- /wp:group -->
				</div>
				<!-- /wp:column -->

				<!-- wp:column -->
				<div class="wp-block-column media-text-media">
					<!-- wp:image {"style":{"border":{"radius":"16px"}}} -->
					<figure class="wp-block-image" style="border-radius:16px">
						<img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Gitaarles bij Studio Sound of Music" />
					</figure>
					<!-- /wp:image -->
				</div>
				<!-- /wp:column -->
			</div>
			<!-- /wp:columns -->
		</div>
		<!-- /wp:group -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->