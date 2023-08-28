import {blank, show, circle, overlay_frac, scale, beside, stack, square, ribbon, beside_frac, stack_frac} from "rune";

function moony_1(bottom_right){
    return beside(stack(circle, square), stack(blank, bottom_right));
}

function moony_2 (n){
    return n === 0
    ? circle
    : moony(moony_2(n-1));
}

function moony (n){
    return n === 1
    ? circle
    : beside_frac(1/n, stack_frac(1/n, circle, square), stack_frac(1/n, blank, moony(n-1)));
}

show(moony(5));


