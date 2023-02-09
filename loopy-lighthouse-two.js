const loopyLighthouse = function(range, multiples, words) {
  let arr = [];
  let start = range[0];
  let end = range[1];
  let divOne = multiples[0];
  let divTwo = multiples[1];
  let wordOne = words[0];
  let wordTwo = words[1];
  //create array from start and end points
  for(let i = start; i <= end; i++){
    arr.push(i);
  }
  for(let j = 0; j < arr.length; j++) {
    if((arr[j] % divOne === 0) && (arr[j] % divTwo === 0)) {
      console.log(wordOne + wordTwo);
    } else if(arr[j] % divOne === 0) {
      console.log(wordOne);
    } else if(arr[j] % divTwo === 0) {
      console.log(wordTwo);
    } else {
      console.log(arr[j]);
    }
  }
}


console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));

/* range should be an array of 2 numbers representing the start and end values for the loop.
multiples should be an array of 2 numbers representing the multiples you want to replace with words.
words should be an array of 2 strings representing the words that will replace the multiples. 

The loopyLighthouse function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty",
 multiples of 5 with "Beacon", 
 and multiples of 2 and 5 with "BattyBeacon". */
