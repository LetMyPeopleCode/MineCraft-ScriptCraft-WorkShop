
function bighole (params, player){
/* //old
	var d = new Drone(player.location);
	d.down(30).fwd(30);
	var loc = d.getLocation();
	loc.world.makeExplosion(player, d.x, d.y, d.z, 300.0, true);
*/

	var d = new Drone(player.location);
	d.down(8).fwd(30);
	var loc = d.getLocation();
	loc.world.createExplosion(d.x, d.y, d.z, 100.0, false, true);
}

command ( bighole )