const students = [
  {
    name: "김도훈",
    age: 26,
    address: "경남 창원시"
  },
  {
    name: "김기홍", 
    age: 27,
    address:"광주광역시"
  },
  {
    name: "김택우",
    age: 30,
    address:"인천광역시"
  }
];


// forEach
// return이 void -> return 쓸 수 없음
students.forEach((student)=>{
  console.log(student.name);
})


// map
students.map((student) => {
  return student.name;
})


// filter
const over30people = students.filter((student) => {
  return student.age >= 30;
});
console.log(over30people);


// filter + map #1
const under30people = students.filter((student) => {
  return student.age < 30;
});

const names = under30people.map((under30) => under30.name);


// filter + map #2
const arr = [1,2,3,4,5,6,7,8,9,10];

const isEven = arr.filter((num) => {
  return num%2===0;
})

const gopTen = isEven.map((num) => {
  return num*10;
})


// filter + map #3
const orderList = [
  {
    menu: "치킨",
    price: 17000,
    event: false,
    count: 50,
  },
  {
    menu: "돈까스",
    price: 8500,
    event: true,
    count: 99,
  },
  {
    menu: "마라탕",
    price: 8000,
    event: false,
    count: 100,
  },
  {
    menu: "쫄면",
    price: 6500,
    event: false,
    count: 0,
  },
  {
    menu: "짜장면",
    price: 5500,
    event: true,
    count: 30,
  }
];

// solved #1.
const menus = orderList.filter((count) => {
  return count.count!==0;
})

const menu = menus.map((saleList) => {
  if(saleList.event===true)
  {
    saleList.price *= 0.9;
  }
  else
  {
    saleList.price = saleList.price;
  }
  return saleList;
})

// solved #2.
const newOrderList = orderList
  .filter((order) => order.count !== 0)
  .map((order) => {
    const newOrder = structuredClone(order);
    if (order.event) {
      newOrder.saledPrice = (newOrder.price * 9) / 10;
      return newOrder;
    }
    newOrder.saledPrice = newOrder.price;
    return newOrder;
  });
console.log(orderList); // 원래 배열은 손상되지 않는다.
console.log(newOrderList); // 새로운 메뉴 리스트




// 긍정 / 부정의 의미

const dataFromServer = [];

// "있다"가 나온다
if(dataFromServer) {
  console.log("있다");
}
else {
  console.log("없다");
}

// .length로 해결 
if(dataFromServer.length) {
  console.log("있다");
}
else {
  console.log("없다");
}

// 근데 아래는 왜 있다로 나오지?
if(dataFromServer !== []) {
  console.log("있다");
}
else {
  console.log("없다");
}

// 함 알아보자
const arr1 = [1,2,3];
const arr2 = [1,2,3];

console.log(arr1 === arr2); // false ???

// 하나더
const sampleObject = {};

if(sampleObject === {}){ // 애초에 비교가 불가능하므로 이렇게 사용xxx
  console.log("데이터 없음");
}
else {
  console.log("데이터 있음");
} // 데이터 있음



// Destructing

const abc = {
  menuName: "치킨",
  type: "후라이드"
}

const {type} = abc;
console.log(type);



const sampleFunc = () => {
  return [1, 2];
}

const [one, two] = sampleFunc();

console.log(one); // 1
console.log(two); // 2



// Spread

const square = {
  width: 200,
  height: 200,
}

const colorSquare = {
  ...square, // 그냥 square로 해버리면 객체안에 객체가 들어간 형태가 됨
  color: 'red'
}
// colorSquare = {width: 200, height: 200, color: 'red'};
console.log(colorSquare)


const catTypeAnimals = ["고양이", "호랑이", "사자"];
const dogTypeAnimals = ["개", "늑대", "여우"];

const animals = [...catTypeAnimals, ...dogTypeAnimals, "비버"];
console.log(animals);



// Rest

const chicken = {
  sauceType: '양념',
  drumsticks: 2,
  wing:2
}

const {sauceType, ...another} = chicken; // another

console.log(another);



// Reduce

const datas = [1, 2, 3, 4, 5];
const accResult = datas.reduce((acc, cur) => {
  console.log(acc, cur);
  return acc + cur;
}, 1); // 초기값 1이 빠지면 (acc, cur)에 datas의 첫번째와 두번째 값이 들어감
console.log(accResult);


const studentInfo = [
  {
    name: "jony",
    age: 30,
  },
  {
    name: "sylvie",
    age: 30,
  },
  {
    name: "nana",
    age: 1,
  },
];

// name 만 가진 새 배열을 만들어라.
const newStudentInfo = studentInfo.map((student) => student.name);
console.log(newStudentInfo);

// Reduce로 구현
const newStudentInfo2 = studentInfo.reduce((acc, cur) => {
  acc.push(cur.name);
  return acc;
}, []);
console.log(newStudentInfo2);

// age가 30 인 "이름" 만 골라내기
const newStudentInfo3 = studentInfo.reduce((acc, cur) => {
  if(cur.age===30)
  {
    acc.push(cur.name);
  } 
  return acc;
}, []);
console.log(newStudentInfo3);






// 배열 고차함수 연습하기(2)

const bucketLists = [
  {id: 3, text: '여행가기', done: false},
  {id: 2, text: '치킨 먹기', done: true},
  {id: 1, text: '코딩 하기', done: false},
];

// function getValues(indecator) {
//   return bucketLists.map((bucketList) => bucketList[indecator])
// };

const getValues = (indecator) =>
  bucketLists.map((bucketList) => bucketList[indecator]);
  

console.log(getValues('id'));
console.log(getValues('text'));
console.log(getValues('done'));



// 배열 고차함수 연습하기(4)

// let bucketLists = [
//   {id: 3, text: '여행가기', done: false},
//   {id: 2, text: '치킨 먹기', done: true},
//   {id: 1, text: '코딩 하기', done: false},
// ];
// function removeList(id) {
//   return bucketLists.filter((bucketList) => bucketList.id!==id);
// }

// const removeLists = removeList(2);

const removeList = (id) => bucketLists.filter((el) => el.id !== id);

removeList(2);

console.log(removeLists);



// 배열 고차함수 연습하기(5)

// let bucketLists = [
//   {id: 3, text: '여행가기', done: false},
//   {id: 2, text: '치킨 먹기', done: true},
//   {id: 1, text: '코딩 하기', done: false},
// ];

// function toggle(id) { 
//   bucketLists.filter((el) => el.id === id)[0].done
//   = !bucketLists.filter((el) => el.id === id)[0].done;
// } // 내부 함수가 어떤 형태로 반환되는지를 확인해야됨 [0].done이 핵심~

const toggle = (id) => {
  bucketLists.filter((el) => el.id === id)[0].done
  = !bucketLists.filter((el) => el.id === id)[0].done;
} 

toggle(2);

console.log(bucketLists);