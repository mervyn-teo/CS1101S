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

function run_forward(distance) {
    ev3_runToRelativePosition(motorC, distance*17, 250);
    ev3_runToRelativePosition(motorD, distance*17, 250);
    ev3_pause(5000);
}

