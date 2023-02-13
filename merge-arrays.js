const merge = function(array1, array2) {
  let mergeArray = array1.concat(array2);
  mergeArray.sort(function(a, b) {
    if(a > b) 
    return 1;
    if(b > a)
    return -1;
    return 0;
  });
  return mergeArray;
}


console.log(merge([ 6, 5, 4 ], [ 1, 6, 3, ]), "=?", [ 1, 3, 4, 5, 6, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 5, 2 ], [9, 8]), "=?", [ 1, 2, 6 ]);