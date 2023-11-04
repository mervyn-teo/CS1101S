//``````STON Past Midterm`````````

const my_ston = list( list(1, 2, list(3, 4),5), 6, list(7), 8, 9,
list( list(10),  list(12, 13, list(14, 15)) ) );

function smallest(ston){
    return is_number(head(ston)) ? head(ston) : smallest(head(ston));
}

function largest(ston){
    return is_null(tail(ston))
            ? (is_number(head(ston)) ? head(ston) : largest(head(ston)))
            : largest(tail(ston));
}

function find(ston,x){
    if(is_null(ston)){
        return false;
    }else if(is_null(tail(ston))){
        return is_number(head(ston)) ? x === head(ston) : find(head(ston),x);
    }else {
        const smallest_r_branch = smallest(tail(ston));
        return x < smallest_r_branch
                ? is_number(head(ston)) ? x === head(ston) : find(head(ston),x)
                : find(tail(ston),x);
    }
}

find(my_ston,11);

//`````````````````````````````



//`````````````make STON Past PA``````````````````````

function map_tree(f,T){
    return is_null(T)
            ? null
            : is_list(head(T))
            ? pair(map_tree(f,head(T)),map_tree(f,tail(T)))
            : pair(f(head(T)),map_tree(f,tail(T)));
}

function accumulate_tree(f,init,T){
    return is_null(T)
            ? init
            : f((is_list(head(T)) ? accumulate_tree(f,init,head(T)) : head(T)),
                    accumulate_tree(f,init,tail(T)));
}

function insert(x,xs){
    return is_null(xs)
            ? list(x)
            : x < head(xs)
            ? pair(x,xs)
            : pair(head(xs),insert(x,tail(xs)));
}

function insertion_sort(xs){
    return is_null(xs)
            ? null
            : insert(head(xs),insertion_sort(tail(xs)));
}



function make_SToN(T) {

    // WRITE YOUR SOLUTION HERE.
    let lon = accumulate_tree((current,wish) => is_list(current) ? append(current,wish) : pair(current,wish),null,T);
    lon = insertion_sort(lon);
    
    function helper(T){
        if(is_null(T)){
            return null;
        }else if(is_list(head(T))) {
            return pair(helper(head(T)),helper(tail(T)));
        }else {
            const number = head(lon);
            lon = tail(lon);
            return pair(number,helper(tail(T)));
        }
    }

    return helper(T);
}

//``````````````````````````````````````````



//`````````````````Subsets  & perm```````````````````````````

function perm2(xs){
    return is_null(xs)
            ? list(null)
            : accumulate(append,null,map(x => map(perm => pair(x,perm),perm2(remove(x,xs))),xs));
}


function subsets2(xs) {
  return is_null(xs)
    ? list(null)
    : append(
        map((subset) => pair(head(xs), subset), subsets2(tail(xs))),
        subsets2(tail(xs))
      );
}

//``````````````````````````````````````



//``````````````Nqueens`````````````````````

function solve(n) {
  // const make_queen = (row,col) => f => f(row,col);
  // const get_row = q => q((row,col) => row);
  // const get_col = q => q((row,col) => col);
  const make_queen = (row, col) => pair(row, col);
  const get_row = (q) => head(q);
  const get_col = (q) => tail(q);

  function attack_any(q, queens) {
    return accumulate(
      (current, wish) => math_abs(get_row(q) - get_row(current)) === math_abs(get_col(q) - get_col(current)) || get_row(q) === get_row(current) || get_col(q) === get_col(current) || wish,
      false,
      queens
    );
  }
  
  function n_queens(queens) {
    if (length(queens) === n) {
      display_list(queens);
      return 1;
    } else {
      const lst = build_list((row) => {
        return attack_any(make_queen(row, length(queens)), queens) ? 0 : n_queens(pair(make_queen(row, length(queens)), queens));
      }, n);
      return accumulate((current, wish) => current + wish, 0, lst);
    }
  }
  
  return n_queens(null);
}

solve(8);

//```````````````````````````````````````````



//``````````````````Tower of Hanoi (not efficient)````````````````````````

function reverse_steps(steps){
    const rev = reverse(steps);
    return map(step => pair(head(step),reverse(tail(step))),rev);
}
function tower_of_hanoi(n){
    if(n === 1){
        return list(list(1,"A","C"));
    }else {
        const wish = tower_of_hanoi(n - 1);
        return accumulate(append,null,list(wish,list(list(n,"A","B")),reverse_steps(wish),list(list(n,"B","C")),wish));
    }
}

function step_to_english(step){
    const ring = list_ref(step,0);
    const from = list_ref(step,1);
    const to = list_ref(step,2);
    return "Move ring #" + stringify(ring) + " from " + from + " to " + to;
}

const steps = map(step => step_to_english(step),tower_of_hanoi(5));
display_list(steps);

//```````````````````````````````````````````````



//```````````````````Graph coloring``````````````````````````````````

const adjL = [
        [1,2,3,4,5],
        [0,2,3,4,5],
        [0,1,3,4,5],
        [0,1,2,4,5],
        [0,1,2,3,5],
        [0,1,2,3,4]
    ];
                
const vertex_colour = [];
const visited = [];

for(let i = 0;i < array_length(adjL);i = i + 1){
    vertex_colour[i] = undefined;
    visited[i] = false;
}


function graphColour(v){
    if(!visited[v]){
        visited[v] = true;
        for(let i = 0;i < array_length(adjL[v]);i = i + 1){
            graphColour(adjL[v][i]);
        }
        let LoN = enum_list(0,50);
        for(let i = 0;i < array_length(adjL[v]);i = i + 1){
           LoN = remove(vertex_colour[adjL[v][i]],LoN); 
        }
        vertex_colour[v] = head(LoN);
    }
}

function array_to_list(arr){
    function helper(i){
        return i < array_length(arr)
                ? pair(arr[i],helper(i + 1))
                : null;
    }
    return helper(0);
}

graphColour(0);

const vcL = array_to_list(vertex_colour);

function remove_duplicates(xs){
    return is_null(xs)
            ? null
            :pair(head(xs),remove_duplicates(filter(x => x !== head(xs),tail(xs))));
}

display(vertex_colour);

display(length(remove_duplicates(vcL)));

//`````````````````````````````````````




//```````````````````Longest increasing subsequnce`````````````````

const arr = [6,2,5,1,7,4,8,3];

function longest_increasing_subsequence(array){
    
    const mem = [];

    function length(k){
        if(mem[k] !== undefined){
            return mem[k];
        }else {
            let best = 0;
            for(let i = 0;i < k;i = i + 1){
                if(array[i] < array[k]){
                    best = math_max(best,length(i));
                }
            }
            mem[k] = best + 1;
            return mem[k];
        }
    }
    
    let best = -1 * Infinity;
    
    for(let i = 0;i < array_length(array);i = i + 1){
        best = math_max(best,length(i));
    }
    
    return best;
}

longest_increasing_subsequence(arr);


//`````````````````````````````````


//````````Levenshtein Edit distance`````````````````

const x = "ACAATCC";
const y = "AGCATGC";

function levenshtein_dist(a,b){
    return a === -1
            ? b + 1
            : b === -1
            ? a + 1
            : math_min(levenshtein_dist(a,b - 1) + 1,
                       levenshtein_dist(a - 1,b) + 1,
                       levenshtein_dist(a - 1,b - 1) + (char_at(x,a) === char_at(y,b) ? 0 : 1));
}

levenshtein_dist(array_length(x) - 1,array_length(y) - 1);

//```````````````````````````````````````````````




////`````````````````Max subarray sum```````````````````````


function max_subarray_sum(arr){
    const mem = [];
    let best = 0;
    
    function sum(k){
        if(k === -1){
            return 0;
        } if(mem[k] !== undefined){
            return mem[k];
        }else {
            mem[k] = math_max(arr[k],arr[k] + sum(k - 1));
            best = math_max(best,mem[k]);
            return mem[k];
        }
    }
    
    sum(array_length(arr) - 1);
    return best;
}

max_subarray_sum([-1,2,4,-3,5,2,-5,2]);


//```````````````````````````````````````````````````````



//``````````````````Max subarray sum with loops```````````


function max_subarray_sum(arr){
    const mem = [];
    let best = -1 * Infinity;
    
    for(let i = 0;i < array_length(arr);i = i + 1){
        mem[i] = math_max(arr[i],arr[i] + (i !== 0 ? mem[i - 1] : 0));
        best = math_max(best,mem[i]);
    }
    
    return best;
}

max_subarray_sum( [-1, -2, -3, -4, -5]);


//`````````````````````````````````````````````````````````````





//`````````````Kth Perm but first perm starting from index 1`````````````````````````````````````

function factorial(n){
    return n === 1
            ? 1
            : n * factorial(n - 1);
}

function kth_permutation(k,xs){
    // 1 <= k <= n!
    if(k === 1){
        return xs;
    }else {
        const tail_perm_size = factorial(length(xs) - 1);
        const start = list_ref(xs,math_ceil(k / tail_perm_size) - 1);
        const max_tps_multiple = (math_ceil(k / tail_perm_size) - 1) * tail_perm_size; //tps refers to tail_perm_size
        return pair(start,kth_permutation(k - max_tps_multiple,remove(start,xs)));
    }
}

kth_permutation(24,list(1,2,3,4));


//````````````````````````````````````````````````````````````````



//````````````````Nth Perm but first perm starting from 0````````````````

function factorial(n){
    return n === 1
            ? 1
            : n * factorial(n - 1);
}

function nth_perm(xs,n){ //n from 0
    if(n === 0){
        return xs;
    }else {
        const pos = math_floor(n/factorial(length(xs) - 1));
        return pair(list_ref(xs,pos),nth_perm(remove(list_ref(xs,pos),xs),n % factorial(length(xs) - 1)));
    }
}

nth_perm(list(1,2,3,4),5);

//`````````````````````````````````````````````````````````````````



//``````````````````N Queens backtracking```````````````````````````

function n_queens(n){
    const queens = [];
    let number_of_queens = 0;
    let number_of_valid_placements = 0;
    
    function can_place(q,n){
        let can = true;
        
        for(let i = 0;i < n;i = i + 1){
            if((tail(q) === tail(queens[i])) || (math_abs(head(q) - head(queens[i])) === math_abs(tail(q) - tail(queens[i])))){
                can = false;
                break;
            }
        }
        
        return can;
    }
    
    function backtrack(row){
        if(row >= n){
            number_of_valid_placements = number_of_valid_placements + 1;
            // display(queens);
        }else {
            for(let col = 0;col < n;col = col + 1){
                if(can_place(pair(row,col),row)){
                    queens[row] = pair(row,col);
                    backtrack(row + 1);
                    queens[row] = undefined;
                }
            }
        }
    }
    
    backtrack(0);
    
    return number_of_valid_placements;
}

n_queens(8);


//```````````````````````````````````````````````````



//``````````````Tower of hanoi min ops in list``````````````````

function tower_of_hanoi(n){
    if(n === 1){
        return list(pair('A','C'));
    }else {
        const wish = tower_of_hanoi(n - 1);
        const first_shift = map(op => pair(head(op) === 'A' 
                                                    ? 'A'
                                                    : head(op) === 'B'
                                                    ? 'C'
                                                    : 'B',
                                           tail(op) === 'A' 
                                                    ? 'A'
                                                    : tail(op) === 'B'
                                                    ? 'C'
                                                    : 'B' 
                                                ),wish);
        const second_shift = map(op => pair(head(op) === 'C' 
                                                    ? 'C'
                                                    : head(op) === 'A'
                                                    ? 'B'
                                                    : 'A',
                                           tail(op) === 'C' 
                                                    ? 'C'
                                                    : tail(op) === 'A'
                                                    ? 'B'
                                                    : 'A' 
                                                ),wish);
                                                
        return append(second_shift,pair(pair('A','C'),first_shift));
    }
}

reverse(tower_of_hanoi(5));


//```````````````````````````````````````````````````````




//```````````````Union Intersection Ordered Sets``````````````

// Union and Intersection on SETS where each set is represented using an ordered list
// Remember NO duplicate entries in any set!

function union(s1,s2){
    return is_null(s1)
            ? s2
            : is_null(s2)
            ? s1
            : head(s1) < head(s2)
            ? pair(head(s1),union(tail(s1),s2))
            : head(s1) === head(s2)
            ? pair(head(s1),union(tail(s1),tail(s2)))
            : pair(head(s2),union(s1,tail(s2)));
}

function intersection(s1,s2){
    return is_null(s1) || is_null(s2)
            ? null
            : head(s1) < head(s2)
            ? intersection(tail(s1),s2)
            : head(s1) === head(s2)
            ? pair(head(s1),intersection(tail(s1),tail(s2)))
            : intersection(s1,tail(s2));
}


//````````````````````````````````````````````````````````````




//````````````````````Grid paths TL to BR max weighted path (Competitive programmers handbook chapter 7)```


let mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function grid_path_tl_br(grid) {
    const nRows = array_length(grid);
    const nCols = array_length(grid[0]);
    
    write(nRows - 1, nCols - 1, grid[nRows - 1][nCols - 1]);
    
    function get_max_weighted_path(i, j) {
        if(i < 0 || i >= nRows || j < 0 || j >= nCols) {
            return -Infinity;
        } else if(read(i, j) !== undefined) {
            return read(i, j);
        } else {
            const result = grid[i][j] + math_max(get_max_weighted_path(i, j + 1),
                                                 get_max_weighted_path(i + 1, j));
                                                 
            write(i, j, result);
            return result;
        }
    }
    
    return get_max_weighted_path(0, 0);
}



grid_path_tl_br([
                    [3,7,9,2,7],
                    [9,8,3,5,5],
                    [1,7,9,8,5],
                    [3,8,6,4,10],
                    [6,3,9,7,8]
                ]
                );
                
display(mem);


//`````````````````````````````````````````