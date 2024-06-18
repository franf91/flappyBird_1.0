import {TubeMovement} from "./tube.js"
import { BirdMovement } from "./bird.js";
import { Gravity } from "./gravity.js";

const sky = document.getElementById("sky");
const bird = document.getElementById("bird");
const topTube1 = document.getElementById("top-tube1");
const bottomTube1 = document.getElementById("bottom-tube1");
const topTube2 = document.getElementById("top-tube2");
const bottomTube2 = document.getElementById("bottom-tube2");

let transform1 = {value:480};
let transform2 = {value:800};
let transform3 = {value:0};
let distance = 1;
let distance2 = 40
let distance3 = 2;
let i = {value:1};




function TubeSlide(){

    TubeMovement(topTube1,bottomTube1,transform1,distance,i);

    TubeMovement(topTube2,bottomTube2,transform2,distance,i);



    requestAnimationFrame(TubeSlide);
}

requestAnimationFrame(TubeSlide);

function GameGravity(){

    Gravity(bird,transform3,distance3)

    requestAnimationFrame(GameGravity);
}

requestAnimationFrame(GameGravity);

function BirdFly(){
    BirdMovement(bird,transform3,distance2);
}


sky.addEventListener("click",()=>{
    requestAnimationFrame(BirdFly);
})
requestAnimationFrame(BirdFly);





