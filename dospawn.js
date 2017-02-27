//sets up entity list and Canary variable (borrowed from spawn command)
var entities = [];
var entityType = null;
if (__plugin.canary){  
  entityType = Packages.net.canarymod.api.entity.EntityType;
}else {
  entityType = org.bukkit.entity.EntityType;
}
var entitytypes = entityType.values();
for ( var t in entitytypes ) {
  if ( entitytypes[t] && entitytypes[t].ordinal ) { 
    entities.push(entitytypes[t].name());
  }
}

var Canary = Packages.net.canarymod.Canary;

// we export the function for use in Scriptcraft by other functions
exports.dospawn = function(type, location){
    // checks to make sure type is in the entity list and sets it to "PIG" if not.
    var usetype = (entities.indexOf(type.toUpperCase()) == -1) ? "PIG" : type.toUpperCase(); 
	if (__plugin.canary){
		var entity = Canary.factory().entityFactory.newEntity(entityType[usetype], location);
		entity.spawn();
	} else {
		var world = location.world;
		var entity = world.spawnEntity(location, entityType[usetype]);
	}
    return entity;
}

