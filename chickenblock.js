// ChickenBlock

var cbListener = {};

exports.cbpos = function(){	
	cbListener = events.blockBreak(evtReveal);	
}


exports.cbstart = function(){
	cbListener = events.blockBreak(chickenblock);
}


exports.cbstop = function(){
	cbListener.unregister();
}


function evtReveal(event){
	if(event.block.getType() == "2:0[minecraft:grass]"){
		echo(event.player , "You Broke Grass");
	} else {
		echo(event.player , "You Broke Something Else");
		chickenblock(event);
	}
}

function chickenblock(event){
	position = event.block.location;
	position.x += .5;
	position.y += .5;	
	position.z += .5;
	dospawn('CHICKEN', position);
}

