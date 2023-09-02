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

function stack_hor(rune, n, count, result, layer){ //n defalt 1
    return n === count + 1
        ? translate(1*(layer-count)/layer , 0 ,beside_frac(count / layer, result, blank))
        : stack_hor(rune, n + 1, count, beside_frac(1/n, rune, result), layer);
}

function stack_vert(hor, rune, n, layer, result){ // rune should be result of stack hor
    return n === layer + 1
        ? result
        : stack_vert(hor, rune, n + 1, layer, stack_frac((n-1) / n, result, hor(rune, 1, n, blank, layer)));
}


// function runes_contest() {
//     return stack_vert(triangle, 0, 4, blank);
// } 

// Keep this show function call
show(stack_vert(stack_hor, heart, 1, 2, blank));
