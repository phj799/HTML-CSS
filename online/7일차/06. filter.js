const array = [3, 5, 4, 2];
// 특정 조건을 만족하는 값들을 가져올 수 있다.
const filteredArray = array.filter(data => data > 3);

const bucketList = [
  {
    id: 1,
    text: "스카이 다이빙",
    done: false,
  },
  {
    id: 2,
    text: "배낭 여행",
    done: false,
  },
  {
    id: 3,
    text: "취뽀",
    done: false,
  },
  {
    id: 4,
    text: "피아노 잘치기",
    done: false,
  }
];


console.log(bucketList.filter( value => !value.done ));


