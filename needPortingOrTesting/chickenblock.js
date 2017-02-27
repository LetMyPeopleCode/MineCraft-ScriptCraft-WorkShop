//available at http://pastebin.com/Bfw8W374

//borrowed from Walter's spawn command
//sets up entity list and Canary variable (borrowed from spawn.js)
var entities = [];  
var entityType = null;
entityType = entityType = org.bukkit.entity.EntityType;;
var entitytypes = entityType.values();
for ( var t in entitytypes ) {
    if ( entitytypes[t] && entitytypes[t].ordinal ) { 
        entities.push(entitytypes[t].name());
    }
}
var Canary = Packages.net.canarymod.Canary;

// ChickenBlock

var cbListener = {};

exports.cbpos = function(){	
	cbListener = events.blockDestroy(evtReveal);	
}


exports.cbstart = function(){
	cbListener = events.blockDestroy(chickenblock);
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
	world.spawnEntity(location, entityType[type])
}

