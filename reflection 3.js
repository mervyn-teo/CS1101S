function my_sum(n){
    return n === 1
        ? 2
        : n*(n+1) + my_sum(n-1);
}

my_sum(4);