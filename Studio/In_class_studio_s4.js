function every_second(item){
    return is_null(tail(item))
        ? null
        : is_null(tail(tail(item)))
        ? pair(head(tail(item)), null)
        : pair(head(tail(item)), every_second(tail(tail(item))));
        
}

every_second(list(0,1,2,3,4,5,6,7));


function sum(item){
    
    function odd(item){
        return is_null(item) || is_null(tail(item))
        ? 0 
        : head(tail(item)) + odd(tail(tail(item)));
    }
    
        function even(item){
        return is_null(item) || is_null(tail(item))
        ? head(item)
        : head(item) + even(tail(tail(item)));
    }
    
    return list(even(item), odd(item));

    
}

sum(list(0));
