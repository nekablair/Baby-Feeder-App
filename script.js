// PSEUDO CODE
// We add an event (click) to the radio buttons to indicate which breast is the food canteen at the moment
// Add event(click) to Start and Stop buttons. This event should show the timer and also start/stop the timer.
// The stop button also should capture the feeding duration and display(store) the feeding duration. This will also reset the timer.
// The feeding logs will be a different page
// CHange feeding logs to an icon(like paper/stack of papers)

// Declaring the Variable
const leftFoodBank = document.querySelector(".left");
const rightFoodBank = document.querySelector(".right");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
let foodBankChosen;

// console.log(leftFoodBank);
// console.log(rightFoodBank);
// console.log(startBtn);
// console.log(stopBtn);
const getStopWatchEl = document.querySelector("#watch")

let [hrs,min,sec,millisec]=[0,0,0,0]
let integer = null
// Add event listerner
leftFoodBank.addEventListener("click", () => {
  foodBankChosen = 'leftFoodBank'
})

startBtn.addEventListener("click",displayTimer )

function displayTimer(){
if(integer !== null){
  clearInterval(integer)
}
integer =  setInterval(getInterval,10)
}

const getInterval =()=>{
  millisec +=10;
    if(millisec===1000){
     millisec = 0;
      sec++;  
    }if(sec===60){
      sec=0;
      min++;
    
    }if(min===60){
      min = 0
      hrs++
   
    }else if(hrs === 24){
      console.log("stop")
    }

		let ms = millisec < 10 ? "00" + millisec : millisec < 100 ? "0" + millisec : millisec

    let h =  hrs < 10 ?"0"+ hrs : hrs
    let s =  sec < 10? '0' + sec : sec;
    let m =  min < 10? '0' + min : min;
    getStopWatchEl.textContent = `${h}:${m}:${s}:${ms}`
  
}

const getResetBtn = document.querySelector(".reset")

getResetBtn.addEventListener("click",()=>{

  [hrs,min,sec,millisec]=[00,00,00,00]
  clearInterval(integer)
    getStopWatchEl.textContent= '00:00:00:00'
   console.log(getStopWatchEl)
})

const pauseBtn = document.querySelector(".stop")

pauseBtn.addEventListener("click",()=>{
clearInterval(integer)
  
})





