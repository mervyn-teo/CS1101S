const ultra_sound = ev3_ultrasonicSensor();
let multiplier = 5; // multiplier to calibrate ultrasound sensor
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
    ev3_pause(distance_to_rev(distance) / 250 * 1000); // pause for runtime calculated using speed and distance
    } 

function turn_left(a){ //a is multiple of 90 degree
    ev3_runToRelativePosition(motor_C, a*distance_to_rev(turn_circumference/4), 250);
    ev3_runToRelativePosition(motor_D, a*-distance_to_rev(turn_circumference/4), 250);
    ev3_pause(2000);
}

function ultra_dist(){
    return ev3_ultrasonicSensorDistance(ultra_sound * multiplier);
}

// Qn.1
display(ev3_ultrasonicSensorDistance(ultra_sound * multiplier));

// Qn.2
function avoid(){
    ev3_motorSetSpeed(motor_C, speed);
    ev3_motorSetSpeed(motor_D, speed);
    while (ultra_dist > 10) {
    } 
    ev3_motorSetStopAction(motor_C, "hold");
    ev3_motorSetStopAction(motor_D, "hold");
    run_forward(-30);
}

// Qn.3
function around(){
    ev3_motorSetSpeed(motor_C, speed);
    ev3_motorSetSpeed(motor_D, speed);
    while (ultra_dist > 10) {
    }
    ev3_motorSetStopAction(motor_C, "hold");
    ev3_motorSetStopAction(motor_D, "hold");
    run_forward(-30);
    turn_left(math_random());
    
}
