import {blank, show, circle, overlay_frac, scale} from "rune";

function iter(counter, n, result, rune) {
    return counter === 0
    ? result
    : iter(counter - 1, n ,overlay_frac(1 / (counter+1), scale(counter / n, rune), result), rune);
}

function cone(n, rune) {
    return iter(n, n, blank, rune);
}

show(cone(4, circle));