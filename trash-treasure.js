const smartGarbage = function(trash, bins = { waste: 0, recycling: 0, compost: 0 } ) {
  if(trash === 'recycling') {
    bins.recycling += 1
    return bins;
  } else if(trash === 'waste') {
    bins.waste += 1
    return bins;
  } else if(trash === 'compost') {
    bins.compost += 1
    return bins
  } else {
    return "There is no trash to sort!";
  }
};

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));



// smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
/* 
returns {
  waste: 4,
  recycling: 3,
  compost: 5
} */