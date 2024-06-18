export function BirdMovement(bird,transform3,distance2){
   
    if(transform3.value > -250){
        transform3.value -=distance2;
        bird.style.transform = `translateY(${transform3.value}px)`;
    }
        
}