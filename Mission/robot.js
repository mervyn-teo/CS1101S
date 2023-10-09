const motor_C = ev3_motorC();
const motor_D = ev3_motorD();

ev3_motorSetStopAction(motor_C, "hold");
ev3_motorSetStopAction(motor_D, "hold");

//WHEELS
const diameter = 56;
const circumference = math_PI * diameter; 
const dist_between_wheels = (215 + 165)/2; 
const turn_circumference = math_PI * dist_between_wheels;
//outside 194, inside 136

//HELPER FUNCTIONS
function distance_to_rev(distance) {
    //returns degrees to run distance (mm) forward
    return 360*distance/circumference;
}

function run_forward(distance) {
    ev3_runToRelativePosition(motor_C, distance_to_rev(distance), 250);
    ev3_runToRelativePosition(motor_D, distance_to_rev(distance), 250);
    ev3_pause(2000);
}

function turn_left(a){ //a is multiple of 90 degree
    ev3_runToRelativePosition(motor_C, a*distance_to_rev(turn_circumference/4), 250);
    ev3_runToRelativePosition(motor_D, a*-distance_to_rev(turn_circumference/4), 250);
    ev3_pause(2000);
}


// Pt. 1
ev3_speak("hello world");

// Pt.2
run_forward(10);

// Pt.3
turn_left(1);

// Pt.4
run_forward(100);
turn_left(-1);
run_forward(50);
turn_left(1);
run_forward(150);


