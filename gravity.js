export function Gravity(bird,transform3,distance){
    
    if(transform3.value < 295){
        transform3.value +=distance
        bird.style.transform = `translateY(${transform3.value}px)`;
        return false;
    }
    return true;
}