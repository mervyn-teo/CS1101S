import {ev3_ambientLightIntensity,
ev3_colorSensor,
ev3_colorSensorBlue,
ev3_colorSensorGetColor,
ev3_colorSensorGreen,
ev3_colorSensorRed,
ev3_connected,
ev3_gyroSensor,
ev3_gyroSensorAngle,
ev3_gyroSensorRate,
ev3_hello,
ev3_ledGetBrightness,
ev3_ledLeftGreen,
ev3_ledLeftRed,
ev3_ledRightGreen,
ev3_ledRightRed,
ev3_ledSetBrightness,
ev3_motorA,
ev3_motorB,
ev3_motorC,
ev3_motorD,
ev3_motorGetPosition,
ev3_motorGetSpeed,
ev3_motorSetSpeed,
ev3_motorSetStopAction,
ev3_motorStart,
ev3_motorStop,
ev3_pause,
ev3_playSequence,
ev3_reflectedLightIntensity,
ev3_runForTime,
ev3_runToAbsolutePosition,
ev3_runToRelativePosition,
ev3_speak,
ev3_touchSensor1,
ev3_touchSensor2,
ev3_touchSensor3,
ev3_touchSensor4,
ev3_touchSensorPressed,
ev3_ultrasonicSensor,
ev3_ultrasonicSensorDistance,
ev3_waitForButtonPress} from "ev3";

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
} // converts distance to wheel revolutions

function run_forward(distance) {
    ev3_runToRelativePosition(motor_C, distance_to_rev(distance), 250);
    ev3_runToRelativePosition(motor_D, distance_to_rev(distance), 250);
    ev3_pause(distance_to_rev(distance) / 250 * 1000); // pause for runtime calculated using speed and distance
    } //move forward, distance in cm

function turn_left(a){ //a is multiple of 90 degree
    ev3_runToRelativePosition(motor_C, a*distance_to_rev(turn_circumference/4), 250);
    ev3_runToRelativePosition(motor_D, a*-distance_to_rev(turn_circumference/4), 250);
    ev3_pause(2000);
}//turn a * 90 degrees leftwards 

function ultra_dist(){
    return ev3_ultrasonicSensorDistance(ultra_sound * multiplier);
}//the distance ultrasound sensor senses

// Qn.1
display(ev3_ultrasonicSensorDistance(ultra_sound * multiplier));

// Qn.2
function avoid(){
    ev3_motorSetSpeed(motor_C, 250);
    ev3_motorSetSpeed(motor_D, 250);
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
    turn_left(x => (x > 0.5 ? 1 : -1)(math_random()));
    
}
