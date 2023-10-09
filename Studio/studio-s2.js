function biggie_size(x){
    return (x+4);
}

function unbiggie_size(x){
    return (x-4);
}

function is_biggie_size(x){
    return x >= 5;
}

function combo_price(x){
    return is_biggie_size(x)
        ? unbiggie_size(x) * 1.17 + 0.50
        : x * 1.17;
}

function empty_order(){
    return 0;
}

function add_to_order(x,y){
    return x*10+y;
}

function last_combo(x){
    return x % 10;
}

// function other_combo(x){
//     return (x - last_combo(x))/10;
    
// }

function other_combo(x){
    return math_floor(x / 10);
}
