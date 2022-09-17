function currentTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = time;
    // let tick = setTimeout(function(){currentTime() }, 1000);
    let tick = setTimeout( () => currentTime(), 1000)

}

currentTime();

