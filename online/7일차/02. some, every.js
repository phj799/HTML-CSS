const array = [1, 2, 3, 4, 5];

//some 하나의 조건만 만족해도 true 반환
const result1 = array.some(element => element < 0); // false

let flag = true;

// array.some((element) => {return element<0;})
const result2 = array.some(element => element > 4); // true

//every 모든 조건을 만족해야 true 반환
const everyResult1 = array.every(element => element > 0);
const everyResult2 = array.every(element => element > 3);
