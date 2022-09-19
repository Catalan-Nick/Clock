function formatClock(){
    let format = 24;
    document.getElementById("s-label").innerText = "Change to 12hr clock";
    if (document.getElementById('checkbox').checked){
        format = 12;
        document.getElementById("s-label").innerText = "Change to 24hr clock";
    }
    return format;
}
function sunlight(){
    
if (document.getElementById("sun-checkbox").checked){
    document.getElementById("d-label").innerText = "Switch to Night Mode";
    document.getElementById('clock').style.backgroundImage = "url('https://images.unsplash.com/photo-1630148180214-417337ce9652?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80')";
    // document.getElementById('clock').style.color = "blue";
}
else{
    document.getElementById("d-label").innerText = "Switch to Day Mode";
    document.getElementById('clock').style.backgroundImage = "url('https://images.unsplash.com/photo-1481819613568-3701cbc70156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80')"
}
}
function currentTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let format = formatClock();
    let meridiem = "";
    // if format is in 12hr clock position
    if (format === 12){
        //meridiem has to be checked before hours are converted
        if (hours >= 12){
            meridiem = " PM";
        }
        else if (hours < 12 || hours == 24){
            meridiem = " AM"
        }

        if (hours > 12){
            hours = hours - 12;
        }
    }
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + meridiem;
    document.getElementById("clock").innerText = time;
    // let tick = setTimeout(function(){currentTime() }, 1000);
    let tick = setTimeout( () => currentTime(), 1000)

}
currentTime();

