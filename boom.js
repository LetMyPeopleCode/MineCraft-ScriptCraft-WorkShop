
function boom (params, player){

	var strength = 5; // sets a default value for the strength of the explosion

	if(params.length > 0){ // if there are parameters, take the first as the strength
		strength = parseInt(params[0]); // converts the first parameter to an integer value.
		if(strength <= 0) strength = 5; // if that value is 0 or less, it's set to the default of 5
	}

	var d = new Drone(player.location); // create a drone at the player's location
	d.fwd(5); // send the drone forward 5
	var loc = d.getLocation(); // get the full 3D location of the drone as a location object
	// the location object contains a reference to a world object which has a 
	// createExplosion method. We'll invoke it.
	loc.world.createExplosion(d.x, d.y, d.z, strength, false, true);
}

command ( boom )