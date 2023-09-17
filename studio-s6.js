//Write the function map using accumulate. Name your function my_map.
function my_map(f, xs) {
    return accumulate((x, y) => pair(f(x), y), null, xs);
}
//Example calls:
my_map(x => x + 1, list(1, 2, 3));
// Result: list(2, 3, 4)

//Write a function called remove_duplicates that takes in a list as its only argument and
// returns a list with duplicate elements removed. The order of the elements in the returned
// list does not matter. Use filter in your function.
function remove_duplicates(lst) {
    return is_null(lst)
        ? null
        : pair(head(lst), remove_duplicates(filter(x => !equal(head(lst), x), tail(lst))));
}
//Example calls:
display(remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2)));
// Result: list(1, 2, 3, 4)
remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));
// Result: list("a", "x", "b", "c", "d")