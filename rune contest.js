function helper(r, y, rune){
    return translate(math_sqrt(r * r - y * y), y, rune);
}

function stepper(y, steps, yend, r, rend, rune){
    overlay(helper(r, y, rune), rune);
    return y >= yend || r>= rend
        ? helper(rend, yend, rune)
        : stepper(y + steps, steps, yend, r + steps, rend, rune);
}

function runes_contest() {
    return stepper(0, 0.1, 1, 0, 1, scale(0.1, circle));
} 

// Keep this show function call
show(runes_contest());