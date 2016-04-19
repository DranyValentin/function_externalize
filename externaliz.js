"use strict"

function externalize(document) {
	var $links = document.querySelectorAll("a, area")

	$links.forEach = [ ].forEach

	$links.forEach(function($el) {
		if ( /^(https?:)?\/\//i.test($el.href) ) {
			$el.rel = "external"
			$el.target = "_blank"
		}
	})
}
