
function velFrom0(a,t){
    var vX = a*t
    return vX;
}

/*
noInitVel solves for initial velocity when
only distance, acceleration, and time are given
*/

const ob = {

    vel: 0,
    bruh: 19,
    
    ob2: {
        test1: 0,
    }

}

console.log(ob.ob2.test1);


function noInitVel(x,a,t){
    t2 = t*t
    vx0 = (x-a*t2)/t;
    return vx0;
}


function velFromUnk(x,a,t){
    var vXF = noInitVel(x,a,t) + a*t;
}