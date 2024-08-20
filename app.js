var milisec = 0;
var seconds = 0;
var minutes = 0;
var getHtmlmsec = document.getElementById('msec');
var getHtmlsec = document.getElementById('sec');
var getHtmlmin = document.getElementById('min');
var interval;

function start() {
    interval = setInterval(function() {
        milisec++;
        if (milisec < 10) {
            getHtmlmsec.innerHTML = "0" + milisec;
        } else {
            getHtmlmsec.innerHTML = milisec;
        }
        if (milisec >= 100) {
            seconds++;
            if (seconds < 10) {
                getHtmlsec.innerHTML = "0" + seconds;
            } else {
                getHtmlsec.innerHTML = seconds;
            }
            milisec = 0;
        } 
        if (seconds >= 60) {
            minutes++;
            if (minutes < 10) {
                getHtmlmin.innerHTML = "0" + minutes;
            } else {
                getHtmlmin.innerHTML = minutes;
            }
            seconds = 0;
        }
    }, 10);
    document.getElementById("sss").disabled = true;
}

function stop() {
    clearInterval(interval);
    document.getElementById("sss").disabled = false;
}

function reset() {
    minutes = "00";
    seconds = "00";
    milisec = "00";
    getHtmlmin.innerHTML = minutes;
    getHtmlmsec.innerHTML = milisec;
    getHtmlsec.innerHTML = seconds;
    document.getElementById("sss").disabled = false;
}
