const motor_C = ev3_motorC();
const motor_D = ev3_motorD();
let buffer = 10;    //time buffer for ev3_pause function
function turn_left(a){ //a is in degrees
    ev3_runToRelativePosition(motor_C, a / 90 * 250, 250);
    ev3_runToRelativePosition(motor_D, a / 90 * -250, 250);
    ev3_pause(5000);
}

function turn_right(a){ //a is in 90 degree
    ev3_runToRelativePosition(motor_C, a / 90 * -250, 250);
    ev3_runToRelativePosition(motor_D, a / 90 * 250, 250);
    ev3_pause(5000);
}

function run_forward(distance) {//distance is in cm
    ev3_runToRelativePosition(motor_C, distance*17, 250);
    ev3_runToRelativePosition(motor_D, distance*17, 250);
    ev3_pause(5000);
}

// Pt. 1
ev3_speak("hello world");

// Pt.2
run_forward(10);

// Pt.3
turn_left(90);

// Pt.4
run_forward(10);
turn_left(90);
run_forward(5);
turn_right(90);


