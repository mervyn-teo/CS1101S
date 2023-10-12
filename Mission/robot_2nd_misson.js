
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
    ev3_pause(a * -distance_to_rev(turn_circumference / 4) / 250 * 1000);
}//turn a * 90 degrees leftwards 

function ultra_dist(){
    return ev3_ultrasonicSensorDistance(ultra_sound * multiplier);
}//the distance ultrasound sensor senses

function check_obsticle(){//Check if the robot is facing obsticle
    if (ultra_dist() > 35){
        return false;
    } else{
        return true;
    }
        
}

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
    ev3_motorSetSpeed(motor_C, 250);
    ev3_motorSetSpeed(motor_D, 250);
    while (ultra_dist > 10) {
    }
    ev3_motorSetStopAction(motor_C, "hold");
    ev3_motorSetStopAction(motor_D, "hold");
    run_forward(-30);
    if (math_random() < 0.5){
        turn_left(1);
        let is_blocked = true;
        while (is_blocked){
            run_forward(10);
            turn_left(-1);
            is_blocked = check_obsticle();
        }
        around();
    } else{
        turn_left(-1);
        let is_blocked = true;
        while (is_blocked){
            run_forward(10);
            turn_left(1);
            is_blocked = check_obsticle();
    }
    
    
}
}