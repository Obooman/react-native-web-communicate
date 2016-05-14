'use strict';

var {
	PopUp,
	Toast,
	NavigatorFrame
} = require('./')

var WebBridgeReducer = function( action, params ){

	if( !action ) return;

	params = decodeURIComponent( params );
	params = JSON.parse( params );

	if( action == 'popUp' ){

		var popUpParams = JSON.parse( params );

		if( !popUpParams.content ) return;

		PopUp.showPopUp( popUpParams.content, popUpParams );

	} else if( action == 'navigate' ){

		NavigatorFrame.push( params.route.targetRoute );
	} else if( action == 'toast' ){
		Toast.toast( params.message );
	} else {
		Toast.toast('unSupported method called')
	}
}

module.exports = WebBridgeReducer;