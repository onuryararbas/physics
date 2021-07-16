

timeForfreeFall(20);



function fireNoRes(v0, angle, maxHeight){
    //use the y dimension of cannonball travel to solve for time
    //plug in time to find the distance traveled


    //Here, I break velocity into x and y dimensions
    let vY = Math.sin(angle)*v0;
    let vX = Math.cos(angle)*v0;

    let accelY = -(vY*vY)/(2*maxHeight);


    let time = -vY/accelY;

    let dist = vX * time; 

    console.log("With these parameters: Initial speed " + v0 + 
    ", Angle of fire " + angle + " and max Height " + maxHeight + 
    ", the distance travelled in the x direction is " + dist);

}

function timeForfreeFall(h){
    let g = 9.81; 
    
   console.log("It will take you " + Math.sqrt((2*h)/g) + " seconds to hit the ground from " + h + " height (meters)");
}