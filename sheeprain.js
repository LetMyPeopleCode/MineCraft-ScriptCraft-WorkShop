//makes it rain flaming sheep

var countsheep = 0;
var thisdrone;

function sheeprain(params, player){
    //set up the drone, raise it up 40 blocks, and set a checkpoint
    thisdrone = new Drone(player.location);
    thisdrone.up(40);
    thisdrone.chkpt('first');
    //set a randomly long time between sheep and call the dropper
    tov = setTimeout(dropper, intervaler());-+
}


function dropper(){
    //control function
    countsheep++;
    //move the drone to the checkpoint 40 blocks above you
    thisdrone.move('first');
    //move the drone to a random location within 13 blocks
    mover();
    //create the sheep and set it on fire
    var sheep = dospawn('sheep',thisdrone.getLocation());
    sheep.setFireTicks(500);
    //set a randomly long time to wait and then another sheep
    if(countsheep < 300) tov = setTimeout(dropper, intervaler());
}

function mover(){
    //generate random movement and turn values
    var turn = Math.round(Math.random() * 3);
    var left = genXY();
    var fwd = genXY();
    //apply the random movement and turn values to the drone
    thisdrone.turn(turn);
    thisdrone.left(left);
    thisdrone.fwd(fwd);
}


function genXY(){
    var limit = 25;
    //returns a random integer between -limit and limit
    var isneg = Math.round(Math.random() * 1);
    var move = Math.floor(Math.random() * limit);
    if(isneg === 1) move = move * -1;
    return move;
}

function intervaler(){
    //sets the value of the random interval between sheep
    var interval = Math.floor(Math.random() * 200);
    return interval;
}    
    


command( sheeprain );