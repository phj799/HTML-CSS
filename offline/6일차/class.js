const student1 = {
  name: "",
  age: -1,
  // address: address,
  // 아래와 같이 축약가능
  address,
  constructor: function (name, age) {
    this.name = name;
    this.age = age;
  },
   // 화살표 함수는 this에 접근불가능한 경우가 있음
   // 되도록 function () {} 을 사용할 것
   // sayMyName: () => console.log(`my name is ${this.name}`),
   // 아래와 같이 key, value를 생략한 축약형으로도 사용가능함
   sayMyName() {
    console.log(`my name is ${this.name}`);
  },
  setAddress: (address) => (this.address = address),
  getAddress: () => this.address,
  useMethod: function () {
    this.sayMyName();
  },
};

student1.constructor("jony", 30);
student2.constructor("david", 50); // student2 객체를 또 선언해줘야 함 -> class 이용
student1.sayMyName();
student1.setAddress("경기 군포시 산본동");
console.log(student1.getAddress());
student1.useMethod();



// class StudentInfo {
//   constructor(name, age) {
//     this.name = name;        // this는 student1, student2 을 가리킴
//     this.age = age;
//     this.address = "";
//   }
//   sayMyName() {
//     console.log(`my name is ${this.name}`);
//   }
//   setAddress(address) {
//     this.address = address;
//   }
//   getAddress() {
//     return this.address;
//   }
//   useMethod() {
//     this.sayMyName();
//   }
// }

// const student1 = new StudentInfo("jony", 30);
// const student2 = new StudentInfo("david", 33);
// student1.sayMyName();
// student1.setAddress("경기 군포시 산본동");
// console.log(student1.getAddress());
// student1.useMethod();



