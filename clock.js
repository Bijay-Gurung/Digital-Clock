function clock(){
    let datetime = new Date();
    let hours = datetime.getHours();
    let minutes = datetime.getMinutes();
    let seconds = datetime.getSeconds();
    let session = document.getElementById('session');

    if (hours > 12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }
    if (hours > 12){
        hours = hours - 12;
    }
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}
setInterval(clock, 10);