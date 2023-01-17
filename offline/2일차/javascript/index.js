/* 
run은 복사해서 웹브라우저 개발자 페이지 Console 창에서 돌리기
*/

// 출력하기
console.log("hello");

// 변수선언
// 타입이 존재하지 않음
// 변수 선언자 let, var, const
const con = 1;

// number / 숫자는 모두 numver
const a = 1;
const b = 1.2;
console.log(typeof a);
console.log(typeof b);

// string / 큰따옴표("")만 사용
const c = "a";
const d = "abc";
console.log(typeof a);
console.log(typeof b);

// boolean
const e = true;
const f = false;
console.log(typeof e);
console.log(typeof f);

// object (null, 개발자가 의도한 빈 공간 (참고: 0은 그냥 0임))
console.log(typeof null);

// undefined, 개발자가 의도치 않은 빈 공간
console.log(typeof undefined);

// object (array, 선언시 크기 명시 안함에 유의)
const arr = [1, 'a', true];
console.log(typeof arr);

// function 
function addOne(n) {
  console.log("hi")
  return n+1
}
console.log(typeof addOne)







// number를 string으로 첫글자 대문자 주의!
function numToString(n) {
  return String(n);
}

function StringToNum(text) {
  return Number(text);
}

const num = numToString(2);
const string = StringToNum('2');
console.log(typeof num);
console.log(typeof string);



// 함수 표현식 (변수에 함수 할당)
// function 뒤에 함수 이름이 없음 -> lambda
const sampleFunc = function () {
  return 1;
}
const result = sampleFunc();
console.log(result);

// 함수를 변수에 저장
// 함수가 저장된 변수를 호출하면, 해당 함수가 호출 됨
function retA () {
  return 'a';
}
const sample = retA;
console.log(sample);
console.log(typeof retA);   // function 타입 !!!!!!!!!!!!!!
console.log(typeof retA()); // string 타입 !!!!!!!!!!!!!!!!




// 객체 Object: key와 value로 이루어진 property들의 모음
// 배열과 달리 순서 없음
// 배열과 객체의 value는 const여도 바뀔 수 있음 But 배열과 객체 자체를 재선언하는건X
const person = {
  name: "이자룡",
  dateOfBirth: 1993,
  familyMembers: ["아빠", "엄마", "할머니"],
  job: "싸피 강사",
  isMerriaged: true,
};
console.log(person.job);
person.hometown = "경남 함양군";
console.log(person);


// 배열에 value 추가
const arr3 = [1, 2, 3];
arr.push(4);
console.log(arr3);


// + 로 문자열 연결하기
const ex1 = "abc" + "bbq";
const ex2 = "abc" + 10; //자동 형변환(casting)
console.log(ex1);
console.log(ex2);


// 배열 길이 구하기
const arr1 = [1,2,3,4,5];
console.log(arr1.length);


// true일까? false 일까?
console.log(1 == "1"); // true
console.log(1 === "1"); // false, 자료형까지 비교
console.log(1 !== "1"); // true


// Q. 왜 error가 날까?
// A. const i 가 아닌 let i 를 써야함!!
// 이런 경우 외에는 const만 쓰는 것을 권장함
const arr2 = [1,2,3];
for (const i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

