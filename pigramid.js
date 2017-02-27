//setting up the entity list & Canary object (borrowed from Spawn.js)
//var spawn = require('subspawn.js');
var hooks = [];

var animals = [];
	
function pigramid (params, sender){
	
    // Get the type of animal, defaulting to PIG, AVOID CHICKENS - they crash the server
    var type = "PIG"; // animal names should be in upper case
    if (params.length > 0) { 
        //if there's at least one parameter, get it, convert it to upper case, and we'll use it
        var type = params[0].toUpperCase();
    }  

    //set width
    var width = 7; // a width of 7 creates 84 entities in a 4-level pyramid.
    if (params.length > 1) {
        //get the second parameter and convert it to a number.
        width = parseInt(params[1]);
        // since we need at least two layers, we make sure the number is at least 3 
        if(width < 3) width = 3;
    }
    
    var wait = 12000; // set the amount of time the pyramid holds to 12 seconds (12000 milliseconds)
    if (params.length > 2) {
        //if there are three parameters, get the value of the third parameter as an integer
        //people can enter this as a value in seconds and we multiply it to milliseconds for them.
        wait = parseInt(params[2]) * 1000; 
    }

    //Create DRONE to make location easier
    var drone = new Drone(sender.location); 

    drone.fwd(2); // move it a smidge away from the player
    
    //create checkpoint
    drone.chkpt('home');

    //set a loop that creates a series of smaller and smaller layers
    //moving inward each time
		console.log("starting loop");
		
    for(var i = 0; i < width; i += 2){
        //positions the layer
        drone.move('home');
        drone.fwd(i/2);
        drone.right(i/2);
        drone.up(i/2);
        //make the layer
        makeLayer( (width-i) , type, drone); 
    }
	
	if(wait > 0){
        //only set a release timer for the pyramid if the value is greater than 0
        setTimeout(release, wait);
    }
} 
 
function makeLayer(width, type, drone){

    var sideto = "left";
    //loop to make all the lines
    for(var b = 0; b < width; b++){
        //toggle right or left turn
        if(sideto === "left"){
            sideto = "right";
        } else {
            sideto = "left";
        }
    //nesting a loop to make a line
        for(var x = 0; x < width; x++){
            //create the animal object 
            var animal = dospawn(type, drone.getLocation());
            //set the animal's AI and Gravity settings to false so it
            //can't fall and has no urge to move.
            animal.setAI(false);
            animal.setGravity(false);
			animals.push(animal);
            drone.fwd(1);
        }
    //move right/left, turn around, fwd 1
        eval("drone." + sideto + "(1)");
        drone.turn(2);
        drone.fwd(1);
    }    
}    

function release(){
    // loop through the array of animals and give them both AI and gravity. 
	for(var i in animals){
		animals[i].setAI(true);
		animals[i].setGravity(true);
	}	
}

command ( pigramid );