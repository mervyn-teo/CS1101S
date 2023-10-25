function zip_list_of_streams(xs){
    function helper(ys){
        let tmp = undefined;
        if (is_null(ys)){
            set_head(ys, head(stream_tail(ys)));
            return helper(ys);
        } else{
            tmp = head(ys);
            set_head(ys, head(stream_tail(ys)));
            return pair(tmp, () => helper(tail(ys)));
        }
    }
    return helper(xs);
}

function add_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) + head(s2),
                () => add_streams(stream_tail(s1),
                                    stream_tail(s2)));
}

function partial_sum(s) {
  return pair(head(s), () => add_streams(stream_tail(s), partial_sum(s)));
}

let a = enum_stream(0,100);
display(eval_stream(a, 30));
eval_stream(partial_sum(a),30);
