// #1
class Lawyer {
  constructor(name, age, brief) {
    this.name = name;
    this.age = age;
    this.brief = brief;
  }

  introduce() {
    console.log(`이름: ${this.name}`);
    console.log(`나이: ${this.age}`);
    console.log(`자기소개: ${this.brief}`);
  }
}

const person1 = new Lawyer("우영우", 27, "기러기 토마토 스위스 역삼역");
const person2 = new Lawyer("최수연", 27, "봄날의 햇살");
person1.introduce();
person2.introduce();



// #2
class Hero {
  constructor(HP=100) {
    this.HP = HP;
  }

  showHP() {
    console.log(this.HP);
  }

  run() {
    this.HP -= 10;
  }
}

const batman = new Hero();
batman.showHP();
batman.run();
batman.run();
batman.showHP();

// #3
class Person {
  constructor(name="batman", hp=100) {
    this.name = name;
    this.hp = hp;
  }

  hello() {
    console.log(this.name);
  }
}

class Avengers extends Person {
  constructor(name, hp, power, skill) {
    super(name, hp);
    this.power = power;
    this.skill = skill;
  }

  hello(){
    super.hello();
  }

  information() {
    console.log(this.name);
    console.log(this.hp);
    console.log(this.power);
    console.log(this.skill);
  }

  fly() {
    console.log("비행중");
  }
}


1, 7, 9, 5, 2-1, 2-4