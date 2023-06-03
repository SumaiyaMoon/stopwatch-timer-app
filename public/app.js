// StopWatch
var displaySWhr = document.getElementById("displaySWhr");
var displaySWmin = document.getElementById("displaySWmin");
var displaySWsec = document.getElementById("displaySWsec");
var startBtnSW= document.getElementById("startBtnSW");
var pauseBtnSW= document.getElementById("pauseBtnSW");
var resetBtnSW= document.getElementById("resetBtnSW");
startBtnSW.disabled = false;
pauseBtnSW.disabled = true;
resetBtnSW.disabled = true;
var hoursSW , minutesSW , secondsSW;
hoursSW = 0;
minutesSW = 0;
secondsSW = 0;
var intervalSW ;


// Timer
var displayThr = document.getElementById("displayThr");
var displayTmin = document.getElementById("displayTmin");
var displayTsec = document.getElementById("displayTsec");
var startBtnT= document.getElementById("startBtnT");
var pauseBtnT= document.getElementById("pauseBtnT");
var resetBtnT= document.getElementById("resetBtnT");
startBtnT.disabled = false;
pauseBtnT.disabled = true;
resetBtnT.disabled = true;
var hoursT , minutesT , secondsT;
var intervalT ;




//StopWatch Funcctionality
function renderValsSW(){
displaySWhr.innerHTML = hoursSW;
displaySWmin.innerHTML =  minutesSW;
displaySWsec.innerHTML =  secondsSW;
}
function timerSW(){
    secondsSW++;
    if(secondsSW == 60){
        minutesSW ++;
        secondsSW=0;
    
    }
    else if(minutesSW == 60){
        hoursSW++;
        minutesSW=0
    }
    else if(hoursSW == 24){
hoursSW =0;
minutesSW =0;
secondsSW =0;
    
    }
   
    renderValsSW();
}
function startSW(){
    startBtnSW.disabled = true;
    resetBtnSW.disabled = false;
    pauseBtnSW.disabled = false;
    intervalSW = setInterval(function(){
        timerSW();
    },1000)
}
function pauseSW(){
clearInterval(intervalSW);
startBtnSW.disabled = false;
resetBtnSW.disabled = false;
pauseBtnSW.disabled = true;
}
function resetSW(){
    startBtnSW.disabled = false;
    resetBtnSW.disabled = true;
    pauseBtnSW.disabled = false;
    hoursSW =0;
    minutesSW=0;
    secondsSW=0;
    pauseSW();
    renderValsSW();
}




//Timer Funcctionality
function onClickTimerStartprompt(){
//     var useTimer = prompt("Do you want to set Timer? or wanna use stopWatch","Timer/StopWatch")
// useTimer = useTimer.toLowerCase();
hoursT = +prompt("Enter Hours","00");
minutesT = +prompt("Enter Minutes","00");
secondsT = +prompt("Enter Seconds","00");
}
function renderValsT(){
    displayThr.innerHTML = hoursT;
    displayTmin.innerHTML =  minutesT;
    displayTsec.innerHTML =  secondsT;
    }
    function timerT(){
        if(secondsT>0){
        secondsT--;
        }
        else if(secondsT == 0 && minutesT>0){
            minutesT --;
            secondsT=59;
        
        }
        else if(minutesT == 0 && hoursT>0){
            hoursT--;
           
        }
        else if(hoursT == 0){
    minutesT =59;
    if(minutesT == 00){
        secondsT =59;
        if(secondsT ==0){
            clearInterval(intervalT);
        
    }
    }
  
        
        }
        else if(hoursT ==0 && minutesT ==0 && secondsT==0){
            clearInterval(intervalT);
            alert("Time Up!")
        }
       
        renderValsT();
    }
    function startT(){

        startBtnT.disabled = true;
        resetBtnT.disabled = false;
        pauseBtnT.disabled = false;
        intervalT = setInterval(function(){
        
            timerT();
        },1000)
    }
    function pauseT(){
    clearInterval(intervalT);
    startBtnT.disabled = false;
    resetBtnT.disabled = false;
    pauseBtnT.disabled = true;
    }
    function resetT(){
        startBtnT.disabled = false;
        resetBtnT.disabled = true;
        pauseBtnT.disabled = false;
        hoursT =0;
        minutesT=0;
        secondsT=0;
        pauseT();
        renderValsT();
    }