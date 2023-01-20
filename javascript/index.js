function showTime() {
    var date = new Date();
    var hour = "00" + date.getHours();
    hour = hour.substr(hour.length - 2);
    var minute = "00" + date.getMinutes();
    minute = minute.substr(minute.length - 2);
    var element = document.getElementById('time');
    element.innerHTML = hour + '<br/>' + minute;
}
setInterval('showTime()', 1);
window.onload = function() {
    var h = new Date().getHours();
    var o = document.documentElement || document.body;
    if (h < 12) {
        o.style.backgroundColor = "#b0e0e6";
        o.style.color = "#ffffff";
    } else if (h < 18) {
        o.style.backgroundColor = "#228b22";
        o.style.color = "#ffffff";
    } else {
        o.style.backgroundColor = "#191970";
        o.style.color = "#ffffff";
    }
}