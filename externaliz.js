"use strict"

function externalize(){
	var $links = document.querySelectorAll("a")

	$links.forEach = [ ].forEach

	$links.forEach(function(el, index, arr){
		if ( el.href.match(/^(https?:)?\/\/.+$/im) ){
			el.rel = "external"
			el.target = "_blank"
		}
	})
}