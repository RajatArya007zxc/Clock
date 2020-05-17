setInterval(setClock,1000);
const hourHand=document.querySelector('[data-hours-hands]');

const minuteHand=document.querySelector('[data-minutes-hands]');

const secondHand=document.querySelector('[data-seconds-hands]');





function setClock(){
    const currentDate=new Date();
    const secondRatio=currentDate.getSeconds() /60;
   // console.log(secondHand);
    const minutesRatio=(secondRatio + currentDate.getMinutes())/60;
    //console.log(minuteHand)
    const hoursRatio=(minutesRatio + currentDate.getHours())/12;
    setRotation(secondHand,secondRatio);
    setRotation(minuteHand,minutesRatio);
    setRotation(hourHand,hoursRatio);

}




function setRotation(element, rotationRatio){
element.style.setProperty('--rotation',rotationRatio * 360);
}
setClock();