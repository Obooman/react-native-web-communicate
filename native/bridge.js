'use strict';

const messageReducer = require('./WebBridgeReducer');

function bridgeInfoHandler( message ,  ){
	if( !message.match('RJBridge::') ) return;

	const msgParam = message.split('::') ;
	messageReducer( msgParam[1], msgParam[2] )
}

module.exports = bridgeInfoHandler;