const array = [1, 2, 3, 4, 5, 6]

// const result1 = array.map(data => {return data});
// map을 사용하면 원본 변화없이 새로 만듦
const result1 = array.map(data => {
  return data + 1
});
console.log(result1);

const arr = [1,2,3,4,5];
const result2 = arr.map(data => data ** 2)
console.log(result2);

const arr2 = ["a", "bcd", "ef", "g"];
const result3 = arr2.map(data => data.length)
console.log(result3);