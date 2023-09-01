import {
blank,
circle,
corner,
heart,
nova,
pentagram,
rcross,
ribbon,
sail,
square,
triangle,
turn_upside_down,
black,
blue,
brown,
color,
green,
indigo,
orange,
pink,
purple,
random_color,
red,
white,
yellow,

anaglyph,
animate_anaglyph,
animate_rune,
beside,
beside_frac,
flip_horiz,
flip_vert,
from_url,
hollusion,
hollusion_magnitude,
make_cross,
overlay,
overlay_frac,
quarter_turn_left,
quarter_turn_right,
repeat_pattern,
rotate,
scale,
scale_independent,
show,
stack,
stack_frac,
stackn,
translate} from "rune";

function helper(r, y, rune){
    return translate(math_sqrt(r * r - y * y), y, rune);
}

function stepper(y, steps, yend, r, rune){
    overlay(helper(r, y, rune), rune);
    return y >= yend
        ? helper(r, yend, rune)
        : stepper(y + steps, steps, yend, r , rune);
}

function runes_contest() {
    return stepper(0, 0.1, 1, 0.5, scale(0.1, circle));
} 

// Keep this show function call
show(runes_contest());