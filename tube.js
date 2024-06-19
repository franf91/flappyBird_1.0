export function TubeMovement(topTube,bottomTube,transform,distance,i){

    if (transform.value === -100){
        transform.value = 480;
        let newGradient = `linear-gradient(to right, green 0px, transparent 0px)`
        TubeBackgroundColor(topTube,bottomTube,newGradient)

          
        if (i.value === 1){
            SetTubeHeight(topTube,100,bottomTube,400);
        } else if (i.value === 2){
            SetTubeHeight(topTube,400,bottomTube,100);
        }else{
            SetTubeHeight(topTube,250,bottomTube,250);
            i.value = 0;
        }

        i.value +=1;
    } 

    if(transform.value < 480 && transform.value > 380){
        let greenPercentage = 480 - Math.abs(transform.value);
        let newGradient = `linear-gradient(to right, green ${greenPercentage}px, transparent 0px)`;

        TubeBackgroundColor(topTube,bottomTube,newGradient)

    } else if (transform.value < 0){
        let greenPercentage = 100 - Math.abs(transform.value);
        let newGradient = `linear-gradient(to left, green ${greenPercentage}px,transparent 0px)`;

        TubeBackgroundColor(topTube,bottomTube,newGradient)

    }
    else if(transform.value <= 380 && transform.value >=0){
        let newGradient = `linear-gradient(to right, green 100 px, transparent 0px)`;
        TubeBackgroundColor(topTube,bottomTube,newGradient)

    }

    transform.value -= distance;
    setTubeTranslateX(topTube,bottomTube,transform);
    

}

export function TubeCollision(topTube,bottomTube,bird){
   let birdCenterX = CenterX(bird);
   let birdCenterY = CenterY(bird);

   let topTubeCenterX = CenterX(topTube);
   let topTubeCenterY = CenterY(topTube);

   let bottomTubeCenterX = CenterX(bottomTube);
   let bottomTubeCenterY = CenterY(bottomTube);

   let upperX = Width(bird)/2 + Width(topTube)/2
   let upperY = Height(bird)/2 + Height(topTube)/2

   let lowerX = Width(bird)/2 + Width(bottomTube)/2
   let lowerY = Height(bird)/2 + Height(bottomTube)/2

   if(Math.abs(birdCenterX - topTubeCenterX) <= upperX && Math.abs(birdCenterY - topTubeCenterY) <= upperY ){
        return true;
   }

   if(Math.abs(birdCenterX-bottomTubeCenterX) <= lowerX && Math.abs(birdCenterY-bottomTubeCenterY) <= lowerY){
    return true;
   }

   return false;

}

function TubeBackgroundColor(topTube,bottomTube,newGradient){
    topTube.style.background = newGradient;
    bottomTube.style.background = newGradient;
}

function SetTubeHeight(topTube,topTubeHeight,bottomTube,bottomTubeHeight){
    topTube.style.height = `${topTubeHeight}px`;
    bottomTube.style.height = `${bottomTubeHeight}px`;
}

function setTubeTranslateX(topTube,bottomTube,transform){
    topTube.style.transform = `translateX(${transform.value}px)`;
    bottomTube.style.transform = `translateX(${transform.value}px)`;
}

 function CenterX(item){
   return Left(item) + Width(item)/2
}

 function CenterY(item){
    return Top(item) + Height(item)/2
}

 function Top(item){
    return item.getBoundingClientRect().top 
}

 function Left(item){
    return item.getBoundingClientRect().left
}

 function Height(item){
return item.getBoundingClientRect().height
}

 function Width(item){
    return item.getBoundingClientRect().width
}


