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
flatten_list(LoL);





