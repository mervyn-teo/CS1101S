//qn 1

draw_data(list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9)));

function flatten_list(lst){
    function helper(l1, l2) {
        return is_null(l1) 
            ? l2 
            : pair(head(l1), helper(tail(l1), l2));
    }
    return accumulate(helper, null, lst);
}


const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
flatten_list(LoL); // Returns list(1, 2, 3, 4, 5, 6, 7, 8, 9)




//qn 2

// function tree_sum(tree) {
//     return is_null(tree)
//         ? 0
//         : (is_list(head(tree))
//             ? tree_sum(head(tree))
//             : head(tree))
//         +
//         tree_sum(tail(tree));
// }




//qn 3

function accumulate_tree(f, op, initial, tree) {
    return accumulate(
             /* your answer here */,
             initial,
             tree);
}

function tree_sum(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0 , tree);
}

function count_data_items(tree) {
    return accumulate_tree(x => 1, (x, y) => x + y, 0 , tree);
}

function flatten(tree) {
    return accumulate_tree(x => list(x), append, null , tree);
}

// Test
const tree1 = list(1, 2, list(3, 4), list(5, list(6, 7)));

const tree2 = list(1, list(list(8, 9), 10, list(11, list(12))), 
                   null, list(3, 4), list(5, list(6, 7)));

display( tree_sum(tree1) ); // Result: 28
display( tree_sum(tree2) ); // Result: 76

display( count_data_items(tree1) ); // Result: 7
display( count_data_items(tree2) ); // Result: 11

display_list( flatten(tree1) );
// Result: list(1, 2, 3, 4, 5, 6, 7)
display_list( flatten(tree2) );
// Result: list(1, 8, 9, 10, 11, 12, 3, 4, 5, 6, 7)















