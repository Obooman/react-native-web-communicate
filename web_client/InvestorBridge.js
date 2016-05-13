'use strict';

(function( window ){
	var RJBridge = {};
	var tagMessage = "RJMessage::";
	var methods = {
		navigator:'navigator::',
		popUp:'popUp::'
	}

	function changeHash( targetString ){
		var hash = window.location.hash;
		window.location.hash = targetString;
		// window.location.hash = hash;
	}

	function generateCommunicateString( method, params ){
		var paramString = JSON.stringify( params );

		return tagMessage + methods[ method ] + paramString;
	}

	RJBridge.popUp = function( content, configs ){
		if( !content ) return;

		var configParams = configs || {};

		configParams.content = content;

		alert(1)

		changeHash( 'popUp', JSON.stringify(configParams) );
	}

	RJBridge.navigator = function( targetRoute, params ){
		params.keys(function( key ) {
			targetRoute[ key ] = params[ key ]
		})

		changeHash( 'navigator', targetRoute );
	}

	window.RJMessage = RJBridge;

})( window )
