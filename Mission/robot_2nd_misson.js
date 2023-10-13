const ultra_sound = ev3_ultrasonicSensor(2);
let multiplier = 0.1*1.09*0.91743; // multiplier to calibrate ultrasound sensor
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
    ev3_pause(math_abs(distance_to_rev(distance)) / 250 * 1000); // pause for runtime calculated using speed and distance
    } //move forward, distance in mm

function turn_left(a){ //a is multiple of 90 degree
    ev3_runToRelativePosition(motor_C, a*distance_to_rev(turn_circumference/4), 250);
    ev3_runToRelativePosition(motor_D, a*-distance_to_rev(turn_circumference/4), 250);
    ev3_pause(math_abs(a) * distance_to_rev(turn_circumference / 4) / 250 * 1000);
}//turn a * 90 degrees leftwards 

function ultra_dist(){
    return ev3_ultrasonicSensorDistance(ultra_sound) * multiplier;
}//the distance ultrasound sensor senses

function check_obsticle(){//Check if the robot is facing obsticle
    if (ultra_dist() > 35){
        return false;
    } else{
        return true;
    }
        
}

// Qn.1
// Displays the ultra_dist every second for 10s
let i = 0;
for(i = 0; i <= 10; i = i+ 1) {
    display(ultra_dist());
    ev3_pause(1000);
}

// Qn. 2
function avoid(){
    ev3_motorSetSpeed(motor_C, 100);
    ev3_motorSetSpeed(motor_D, 100);
    ev3_motorStart(motor_C);
    ev3_motorStart(motor_D);
    while (ultra_dist() > 10) {
    } 
    ev3_motorStop(motor_C);
    ev3_motorStop(motor_D);
    run_forward(-300);
}

avoid();

// Qn.3
function around(){
    ev3_motorSetSpeed(motor_C, 250);
    ev3_motorSetSpeed(motor_D, 250);
    ev3_motorStart(motor_C);
    ev3_motorStart(motor_D);
    while (ultra_dist() > 10) {
    }
    ev3_motorStop(motor_C);
    ev3_motorStop(motor_D);

    //turn_left
    if (math_random() < 0.5){
        turn_left(1);
        run_forward(300);
        turn_left(-1);
    } else{
        turn_left(-1);
        run_forward(300);
        turn_left(1);
    }
    
    run_forward(500);
    
}

around();