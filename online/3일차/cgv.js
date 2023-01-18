
// 문제 1
// 인기순위 1등 영화 제목 / 예매율 / 개봉일자 가져와 console로 출력하기
const no1title = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > a > strong");
console.log("제목: " + no1title.textContent);
const no1rate = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > div > strong > span");
console.log("예매율: " + no1rate.textContent);
const no1open = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > span.txt-info > strong");
console.log("개봉일: " + no1open.textContent.trimEnd());


// 문제 2
// 인기순위 2등 영화 정보 변경
// 영화제목 : 삼겹살과 그대라면
// 예매율 : 1등 예매율 - 5%
// 개봉일 : 1985.07.07로 변경
const no2title = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > a > strong");
no2title.textContent = "삼겹살과 그대라면"

// const no1rate = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > div > strong > span");
const no2rate = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > div > strong > span");
no2rate.textContent = "5%";

const no2open = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > span.txt-info > strong");
no2open.textContent = "1985.07.07";

const no1img = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-image > a > span > img");
const no3img = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-image > a > span > img");
// const no1title = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > a > strong");
const no3title = document.querySelector("#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-contents > a > strong");



// 문제 3
// 인기순위 3등과 1등 정보 변경하기
// 이미지 SWAP
// URL SWAP
// 글자 정보 모두 SWAP
let temp1 = no1img.src;
no1img.src = no3img.src;
no3img.src = temp1;

let temp2 = no1title.textContent;
no1title.textContent = no3title.textContent;
no3title.textContent = temp2;

