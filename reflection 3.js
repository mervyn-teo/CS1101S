// qn2
function my_sum(n){
    return n === 1
        ? 2
        : n*(n+1) + my_sum(n-1);
}

my_sum(4);

// qn5
function sum(term, a, next, b, result) {
    return a > b
       ? result
       : sum(term, next(a), next, b, result + term(a));
}

sum(x => x, 1, y=> y + 1, 6, 0);