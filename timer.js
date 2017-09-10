var timeDisplay = document.getElementById("time");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("start");

var sectionButtons = [document.getElementById("case"), document.getElementById("rebuttal"), 
                      document.getElementById("sum"), document.getElementById("ff"),
                     document.getElementById("cross"), document.getElementById("gcross")];

var selectedColor = "#999";
var deselectedColor = "#CCC";

var defaults = [240, 240, 180, 120, 120, 180];

var times = {
    case: {"state": false, time: defaults[0], default: defaults[0]},
    rebuttal: {state: false, time: defaults[1], default: defaults[1]},
    sum: {state: false, time: defaults[2], default: defaults[2]},
    ff: {state: false, time: defaults[3], default: defaults[3]},
    cross: {state: false, time: defaults[4], default: defaults[4]},
    gcross: {state: false, time: defaults[5], default: defaults[5]}
}

var timerOn = false;

function start() {
    if (!timerOn) {
        timerOn = true;
        updateTime();
    }
}

function stop() {
    timerOn = false;
}

function reset() {
    for (var section in times) {
        if (times.hasOwnProperty(section)) {
            if (times[section].state == true) {
                times[section].time = times[section].default;
                timeDisplay.innerHTML = toTimeString(times[section].time);
            }
        }
    }
    stop();
}

function updateTime() {
    if (timerOn) {
        for (var section in times) {
            if (times.hasOwnProperty(section)) {
                if (times[section].state == true) {
                    if (times[section].time > 0) {
                        times[section].time --;
                    }
                    timeDisplay.innerHTML = toTimeString(times[section].time);
                }
            }
        }

        setTimeout(updateTime, 1000);
    }
}

//this sucks, but i dont care enough to make it suck less.

function selectCase(index) {
    times.case.state = !times.case.state;
    times.rebuttal.state = false;
    times.sum.state = false;
    times.ff.state = false;
    times.cross.state = false;
    times.gcross.state = false;
    timeDisplay.innerHTML = toTimeString(times.case.time);
    updateColors();
    stop();
}

function selectRebuttal(index) {
    times.rebuttal.state = !times.rebuttal.state;
    times.case.state = false;
    times.sum.state = false;
    times.ff.state = false;
    times.cross.state = false;
    times.gcross.state = false;
    timeDisplay.innerHTML = toTimeString(times.rebuttal.time);
    updateColors();
    stop();
}

function selectSum(index) {
    times.sum.state = !times.sum.state;
    times.rebuttal.state = false;
    times.case.state = false;
    times.ff.state = false;
    times.cross.state = false;
    times.gcross.state = false;
    timeDisplay.innerHTML = toTimeString(times.sum.time);
    updateColors();
    stop();
}

function selectFF(index) {
    times.ff.state = !times.ff.state;
    times.rebuttal.state = false;
    times.sum.state = false;
    times.case.state = false;
    times.cross.state = false;
    times.gcross.state = false;
    timeDisplay.innerHTML = toTimeString(times.ff.time);
    updateColors();
    stop();
}

function selectCross(index) {
    times.cross.state = !times.cross.state;
    times.rebuttal.state = false;
    times.sum.state = false;
    times.case.state = false;
    times.ff.state = false;
    times.gcross.state = false;
    timeDisplay.innerHTML = toTimeString(times.cross.time);
    updateColors();
    stop();
}

function selectGCross(index) {
    times.gcross.state = !times.gcross.state;
    times.rebuttal.state = false;
    times.sum.state = false;
    times.case.state = false;
    times.ff.state = false;
    times.cross.state = false;
    timeDisplay.innerHTML = toTimeString(times.gcross.time);
    updateColors();
    stop();
}

function updateColors () {
    if (times.case.state) {
        sectionButtons[0].style.backgroundColor = selectedColor;
    }
    else {
        sectionButtons[0].style.backgroundColor = deselectedColor;
    }
    if (times.rebuttal.state) {
        sectionButtons[1].style.backgroundColor = selectedColor;
    }
    else {
        sectionButtons[1].style.backgroundColor = deselectedColor;
    }
    if (times.sum.state) {
        sectionButtons[2].style.backgroundColor = selectedColor;
    }
    else {
        sectionButtons[2].style.backgroundColor = deselectedColor;
    }
    if (times.ff.state) {
        sectionButtons[3].style.backgroundColor = selectedColor;
    }
    else {
        sectionButtons[3].style.backgroundColor = deselectedColor;
    }
    if (times.cross.state) {
        sectionButtons[4].style.backgroundColor = selectedColor;
    }
    else {
        sectionButtons[4].style.backgroundColor = deselectedColor;
    }
    if (times.gcross.state) {
        sectionButtons[5].style.backgroundColor = selectedColor;
    }
    else {
        sectionButtons[5].style.backgroundColor = deselectedColor;
    }
}

function deselect() {
    for (var section in times) {
        if (times.hasOwnProperty(section)) {
            times[section].state = false;
        }
    }
    
    for (i = 0; i < sectionButtons.length; i ++) {
        sectionButtons[i].style.backgroundColor = deselectedColor;
    }
    
}

function toTimeString(time) {
    if ((time - (Math.floor(time / 60) * 60)).toString().length == 1) {
        return Math.floor(time / 60) + ":" + "0" + (time - (Math.floor(time / 60) * 60));
    }
    else {
        return Math.floor(time / 60) + ":" + (time - (Math.floor(time / 60) * 60));
    }
}