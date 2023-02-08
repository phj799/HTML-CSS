const names = ["jony", "sylvie", "nana"]

// slice
const newNames1 = names.slice(1,3); // (시작 인덱스, 끝 인덱스(미만))
console.log(names);
console.log(newNames1);


// splice 슬라이싱 범위에 주의!
const newNames2 = names.splice(1,3); // (시작 인덱스, 슬라이싱 할 배열의 크기)
console.log(names);                  // 슬라이스한 부분이 원본에서 삭제됨
console.log(newNames2);

