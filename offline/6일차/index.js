const studentInfo = {
  name: "이자룡",
  age: 31,
  address: "경기도 군포시",
  family: ["나", "와이프", "고양이"],
  skill: {
    client: ["vue.js", "navilla", "react"],
    server: ["django", "php", "node.js"],
    db: ["sqlite", "mongo", "mysql", "postgresql"],
  },
  sayHi: () => console.log("hi!!!!!!!"),
};

studentInfo.sayHi(); // 객체 안에 존재하는 함수는 메서드