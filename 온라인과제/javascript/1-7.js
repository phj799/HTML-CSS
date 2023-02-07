const nums = [1, 2, 3, 4]

// map
const numsMap = nums.map((num) => num**3);

// reduce
const numsReduce = nums.reduce((acc, cur) => {
  acc.push(cur**3);
  return acc;
}, [])


//
