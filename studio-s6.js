function my_map(f, xs) {
    return accumulate((x, y) => pair(f(x), y), null, xs);
}
//Example calls:
my_map(x => x + 1, list(1, 2, 3));
// Result: list(2, 3, 4)