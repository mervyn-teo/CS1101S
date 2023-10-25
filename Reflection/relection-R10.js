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