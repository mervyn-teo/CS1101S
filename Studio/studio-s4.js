
function pascal(row, position){
  return position === 0 || position === row 
        ? 1
        : pascal(row - 1, position - 1) + pascal(row - 1, position);
}

pascal(0, 0);
