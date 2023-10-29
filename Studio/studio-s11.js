function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}
const A = pair(1, () => scale_stream(2, A));
display_list(eval_stream(A, 10));

function mul_streams(a,b) {
    return pair(head(a) * head(b),
                () => mul_streams(stream_tail(a), stream_tail(b)));
}

let integers = integers_from(1);
const B = pair(1, () => mul_streams(B, integers));
display_list(eval_stream(B, 10));

let sum = 1;
const n = 5;
for (let i = 1; i < n; i = i + 1){
    sum = sum * i;
    
}

/* 
Stream A uses the value of the previous multiplied by constant 2 to generate the next number,
This means that each value of the list will become a power of 2

Stream B is a multiplication of the current value of the stream multiplied by the integer that
is in the same position from the "integer" stream, the effect is stream of factorials.
*/

function add_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
            ? s1
            : pair(head(s1) + head(s2), () =>
                add_streams(stream_tail(s1), stream_tail(s2))
            );
}

const add_series = add_streams;
const scale_series = scale_stream;

function negate_series(s) {
    return scale_series(-1, s);
}

function subtract_series(s1, s2) {
    return add_series(s1, negate_series(s2));
}

function coeffs_to_series(list_of_coeffs) {
    const zeros = pair(0, () => zeros);
    
    function iter(list) {
        return is_null(list)
            ? zeros
            : pair(head(list), () => iter(tail(list)));
    }
    
    return iter(list_of_coeffs);
}

function fun_to_series(fun) {
    return stream_map(fun, integers_from(0));
}



//alt_one
const F = f => f%2 === 0 ? 1 : -1;
const alt_one1 = fun_to_series(F);
display("alt_one1: " + stringify(eval_stream(alt_one1, 10)));

const alt = pair(1, pair(-1, null));
set_tail(tail(alt), alt);
const alt_one2 = coeffs_to_series(alt);
display("alt_one2: " + stringify(eval_stream(alt_one2,10)));

// zeros
const zeros1 = add_series(alt_one1, stream_tail(alt_one1));
display("zeros 1: " + stringify(eval_stream(zeros1, 10)));

const zeros2 = subtract_series(alt_one1,alt_one1);
display("zeros 2: " + stringify(eval_stream(zeros2, 10)));

const zeros3 = scale_series(0, alt_one1);
display("zeros 3: " + stringify(eval_stream(zeros3, 10)));

//S1

const ones = pair(1,null);
set_tail(ones, ones);
const S1 = coeffs_to_series(ones);
display("S1: " + stringify(eval_stream(S1,10)));

//S2

const ints = integers_from(1);
const S2 = fun_to_series(f => f + 1);
display("S2: " + stringify(eval_stream(S2,10)));














