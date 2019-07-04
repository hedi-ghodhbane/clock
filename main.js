var secondshand = document.querySelector(".seconds-hand");
var minuteshand = document.querySelector(".minutes-hand");
var hourshand = document.querySelector(".hours-hand");
var time = document.querySelector(".time");
var start = document.querySelector("#start");
function rotate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    var hours = now.getHours();
    secondsDegree = ((seconds / 60) * 360) - 90;
    secondshand.style.transform = `rotate(${secondsDegree}deg)`;
    console.log(seconds);
    minutesDegree = ((minutes / 60) * 360) - 90;
    console.log(minutes);
    minuteshand.style.transform = `rotate(${minutesDegree}deg)`;
    console.log(hours);
    var hours1 = hours;
    if (hours > 12) {
        hours1 = hours - 12;
    };
    hoursDegree = ((hours1 / 12) * 360) - 90;
    console.log(hoursDegree);
    hourshand.style.transform = `rotate(${hoursDegree}deg)`;
    if (minutes < 10) {
        time.innerHTML = hours + ":" + "0" + minutes + ":" + seconds;
    }
    else if (seconds < 10) {
        time.innerHTML = hours + ":" + minutes + ":" + "0" + seconds;
    }
    else if (hours < 10) {
        time.innerHTML = "0" + hours + ":" + minutes + ":" + seconds;
    }
    else { time.innerHTML = hours + ":" + minutes + ":" + seconds; }

}
setInterval(rotate, 1000);
