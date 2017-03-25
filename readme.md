# Learning JavaScript in Minecraft - Workshop Files

Kids love Minecraft, so instead of trying to teach them JS in the browser or in Node, why not do it in Minecraft where they can get immediate feedback in the game itself?

This repo is a group of files I use when teaching JavaScript inside Minecraft, demonstrating concepts like event handling, loops, etc. as well as just some "wow demos" like making a pyramid of animals in mid-air.

The *intent* is to update this periodically with new mods and write-ups on how to use them for teaching. For now, it is just my collection of files.

## The Mods

Mods are noted as JS or JSP. JS are functions. JSP are commands. Please consult the ScriptCraftJS documentation to understand the difference.

### airmaze.js (JS)

**What it does**
This is simply a variant on Walter's maze mod. Instead of building it with a wooden material. It builds it with air. Send out your drone a bit, send it down a bit, and it will dig out an underground tunnel maze.

**Why I made it**
To show how you can repurpose existing code to make new things.

### bighole.js (JSP)

**What it does**
It blows a big hole in the ground. A really big hole. But it's really quite simple. It sends the drone out a ways and down a ways, then uses the world object's makeExplosion method to make a very big explosion that results in a very big pit.

**Why I made it**
This and/or boom.js are used to demonstrate digging into the server's class documentation to find methods like makeExplosion. It allows you to extend ScriptCraft beyond the methods already available in the ScriptCraft API.

### boom.js [strength (int)] (JSP)

**What it does**
This is simply an alias for makeExplosion() but it does it a few blocks ahead of the player. It takes an optional commandline integer argument for the strength of the explosion.

**Why I made it**
This and/or bighole.js are used to demonstrate digging into the server's class documentation to find methods like makeExplosion. It allows you to extend ScriptCraft beyond the methods already available in the ScriptCraft API.

### chickenblock.js (JS) - a.k.a. "Chicken Mining"

*commands: *
- */js cbstart();* - sets the listener
- */js cbstop();* - unregisters the listener

**What it does**
Sets a listener for the block break event, gets the location from the event, spawns a chicken at the location.

**Why I made it**
This is used to help understand the concepts of events, event data, and event listeners.

### dospawn.js([mob name - string], [location coordinate]) (JS)

**What it does**
Spawns a mob of the specified type at the specified location and returns a handle for the object that was spawned.

**Why I made it**
This is more of a utility function. It borrows heavily from Walter's spawn command, but makes it easier to run that spawn process programmatically in your scripts (such as pigramid). It also gives you a handle for any mob object you spawn, so you can invoke their methods and get their properties as long as they're in memory.

We use it in examples like:
> /js var bob = doSpawn('SPIDER', self.location);
/js bob.setFireTicks(500);

You can also use that "bob" handle to throw the spider by changing its X, Y, and Z velocities.