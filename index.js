function formatClock(){
    let format = 24;
    document.querySelector("#s-label").innerHTML = "Change to 12hr clock";
    if (document.getElementById('checkbox').checked){
        format = 12;
        document.querySelector("#s-label").innerHTML = "Change to 24hr clock";
    }
    return format;
}

function currentTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let format = formatClock();
    let meridiem = "";
    if (format === 12){
        meridiem = " AM";
        if (hours > 12){
            hours = hours - 12;
            meridiem = " PM"
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

