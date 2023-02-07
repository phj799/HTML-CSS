// 배열 메소드 Array.함수(콜백함수)
// addEventListener('click', function() {})

//Array.forEach

const arr = [1,2,3,4];

arr.forEach((value) => {
  console.log(value);
})

for(let i = 0 ; i < arr.length; i++){
  console.log(arr[i]);
}

const test = (value) => {console.log(value)};
arr.forEach(test);


// #01.
const arr2 = [4,3,5,1,6,5];
let cnt = 0;
arr2.forEach((value) => {
  if(value%2==1) cnt++;
})
console.log(cnt);


// #02.
const arr3 = [-5, 3, 4, 2, -7, -2 ,7];
let pplus = new Array;
let mminus = [];
arr3.forEach(value => {
  if(value>0) pplus.push(value);
  else if (value<0) mminus.push(value);
})