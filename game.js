import {TubeMovement} from "./movement.js"


const topTube1 = document.getElementById("top-tube1");
const bottomTube1 = document.getElementById("bottom-tube1");
const topTube2 = document.getElementById("top-tube2");
const bottomTube2 = document.getElementById("bottom-tube2");

let transform1 = {value:480};
let transform2 = {value:800};
let distance = 1;
let i = {value:1};


function Movement(){

    TubeMovement(topTube1,bottomTube1,transform1,distance,i);

    TubeMovement(topTube2,bottomTube2,transform2,distance,i);

    requestAnimationFrame(Movement);
}

requestAnimationFrame(Movement);




