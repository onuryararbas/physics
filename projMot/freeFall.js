console.log(timeForFreeFall(30));

function timeForfreeFall(h){
    let g = 9.81; 
    
   console.log("It will take you " + Math.sqrt((2*h)/g) + " seconds to hit the ground from " + h + " height (meters)");
}