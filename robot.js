const motor_C = ev3_motorC();
const motor_D = ev3_motorD();

function turn_left(a){ //a is multiple of 90 degree
    ev3_runToRelativePosition(motor_C, a * 250, 250);
    ev3_runToRelativePosition(motor_D, a * -250, 250);
}

function turn_right(a){ //a is multiple of 90 degree
    ev3_runToRelativePosition(motor_C, a * -250, 250);
    ev3_runToRelativePosition(motor_D, a * 250, 250);
}

ev3_speak("turn_left");
turn_left(1);
ev3_pause(1000);
ev3_speak("turn_right");
turn_right(1);
ev3_pause(1000);
