'use strict';

(function( window ){
	var RJBridge = {};
	var tagMessage = "RJMessage::";
	var methods = {
		navigate:'navigate::',
		popUp:'popUp::',
		toast:'toast::'
	}

	function changeHash( method ,content ){
		var hash = window.location.hash;
		var parseString = tagMessage + 
						  methods[ method ] + 
						  JSON.stringify( content );

		window.location.hash = parseString;
		window.location.hash = hash;
	}

	function generateCommunicateString( method, params ){
		var paramString = JSON.stringify( params );

		return tagMessage + methods[ method ] + paramString;
	}

	RJBridge.popUp = function( content, configs ){
		if( !content ) return;

		var configParams = configs || {};

		configParams.content = content;

		changeHash( 'popUp', JSON.stringify(configParams) );
	}

	RJBridge.navigate = function( targetRoute, params ){
		var route = {};
		route.targetRoute = targetRoute;

		if( params ){

			params.keys( function( key ){
				route[ key ] = params[ key ]
			})
		}

		changeHash( 'navigate', { route:route } );
	}

	RJBridge.toast = function( message ){
		changeHash( 'toast', { message:message } );
	}

	window.RJMessage = RJBridge;

}( window ))
