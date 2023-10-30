function stream_pairs(s) {
return is_null(s)
? null
: stream_append(
stream_map(
sn => pair(head(s), sn),
stream_tail(s)),
stream_pairs(stream_tail(s)));
}
