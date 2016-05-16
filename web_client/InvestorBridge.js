/*
 * InvestorBridge for react-native based investor_react_ios
 * author:oboochin
 * email:oboochin@gmail.com 
**/

'use strict';

(function( window ){

	if( window.RJMessage ) return;

	var RJBridge = {};
	var tagMessage = "RJMessage::";
	var methods = {
		navigate:'navigate::',
		popUp:'popUp::',
		toast:'toast::',
		share:'share::',
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

	/*
	* @func popUp
	* @param content object 
	* 	Main content showen in the popUp mathod
	* @param configs
	*	popUp window configs.
	* @example 
	* 	RJBridge.popUp('Hello Nancy',{
	*		title:'Greeting',
	*		buttons:[
	*			['cancel',function(){ console.log('cancel') }],
	*			['Hello',function(){ console.log('Hello') }]
	*	 	]
	*	})
	**/


	RJBridge.popUp = function( content, configs ){
		if( !content ) return;

		var configParams = configs || {};

		configParams.content = content;

		changeHash( 'popUp', JSON.stringify(configParams) );
	}

	/*
	* @func push
	* @param targetRoute string 
	* 	route want to push.Been listed at investor_react_ios/app/components/RouteMap.js.
	* @param params
	*	params transer to next route.
	* @example 
	* 	RJBridge.push('login/login',{
	*		user_id:12,
	*	})
	**/

	RJBridge.push = function( targetRoute, params ){
		var route = {};
		route.targetRoute = targetRoute;

		if( params ){

			params.keys( function( key ){
				route[ key ] = params[ key ]
			})
		}

		changeHash( 'navigate', { route:route } );
	}


	/*
	* @func toast
	* @param message string 
	* 	toast message.
	* @example 
	* 	RJBridge.share( 'error here.' )
	**/

	RJBridge.toast = function( message ){
		changeHash( 'toast', { message:message } );
	}


	/*
	* @func share
	* @param shareUrl string 
	* 		url want to share.
	* @example 
	* 	RJBridge.share( window.location.href )
	**/

	RJBridge.share = function( shareUrl ){

		changeHash( 'share', { shareUrl:shareUrl } );
	}

	window.RJMessage = RJBridge;

}( window ))
