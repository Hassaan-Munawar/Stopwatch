var milisec = 0
var seconds = 0
var minutes = 0
var getHtmlmsec = document.getElementById('msec')
var getHtmlsec = document.getElementById('sec')
var getHtmlmin = document.getElementById('min')
var interval;

function start(){
    interval = setInterval(function(){
    milisec++
    getHtmlmsec.innerHTML = milisec
    if(milisec >= 100){
        seconds++
        getHtmlsec.innerHTML = seconds
        milisec = 0
    }
    else if(seconds >= 60){
        minutes++
        getHtmlmin.innerHTML = minutes
        getHtmlsec.innerHTML = seconds
        seconds = 0
    }
    
 },10)
 document.getElementById("sss").disabled = true
}


function stop(){
    clearInterval(interval)
    document.getElementById("sss").disabled = false
}


function reset() {
    minutes = "00"
    seconds = "00"
    milisec = "00"
    getHtmlmin.innerHTML = minutes
    getHtmlmsec.innerHTML = seconds
    getHtmlsec.innerHTML = milisec
}