/* ---------------------Clock----------------- */
setInterval(function () {
    hours = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();
    session = "AM";
    function sessions(c) {
        if (c > 12) {
            return "PM";
        }
        
        else if (c < 0) {
            return "AM";
        }
    }

    function addLeadingZero(b) {
        if (b < 10) {
            return "0" + b;
        }
        else {
            return b;
        }
    }
    function tHourFormat(a) {

        if (a > 12) {
            a = a - 12;
            return a;
        } else {
            a = a;
            return a;
        }
    }
    
    
    document.getElementById("hours").innerHTML = addLeadingZero(tHourFormat(hours));
    document.getElementById("minutes").innerHTML = addLeadingZero(minutes);
    document.getElementById("seconds").innerHTML = addLeadingZero(seconds);
    document.getElementById("session").innerHTML = sessions(hours);
    
    
}, 100);

/*------------------------------------Alram-------------------------*/
let reset = document.getElementById("reset");
let submit = document.getElementById("submit");
let input = document.getElementById("input-time");
let remove = document.getElementById("remove");
let pause = document.getElementById("pause");
let alram_sound = new Audio("Alarm Tone.mp3");

reset.onclick = function () {
    input.value = "";

}
document.getElementById("alram-time").innerHTML = localStorage.time;

submit.onclick = function () {
    if (input.value == "") {
        alert("Please enter Any Value");

    } else {

       window.localStorage.setItem("time", input.value.toString());
    }

    if (localStorage.time == "") {
        document.getElementById("alram-time").innerHTML = "None";
    }
    else {
        document.getElementById("alram-time").innerHTML = localStorage.time;

    }
    
}

remove.onclick = function () {
    localStorage.removeItem("time");


    document.getElementById("alram-time").innerHTML = "None";

   
}

pause.onclick = function(){
    alram_sound.pause();

}

/* 
 if(localStorage.time = "4000"){
     if(hours = "4"){
        alram_sound.play();
     }

}
else if(localStorage.time = "4030"){
    if(hours = "4" && minutes=="30"){
        alram_sound.play();
     }
     
}

else if(localStorage.time = "5000"){
    if(hours = "5"){
        alram_sound.play();
     }
     
}

else if(localStorage.time = "5030"){
    if(hours = "5" && minutes=="30"){
        alram_sound.play();
     }
     
}

else if(localStorage.time = "6000"){
    if(hours = "6"){
        alram_sound.play();
     }
     
}

else if(localStorage.time = "6030"){
    if(hours = "6" && minutes=="30"){
        alram_sound.play();
     }
     
}



 
  */