/* 
import { getNode } from './getNode';

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = getNode(".nav");
const navUl = getNode(".nav ul");
const list = [...navUl.children];

//setBgColor(nav 클릭시 배경 색상 변경)
const setBgColor = (e) => {
  e.preventDefault();
  const target = e.target.closest("li");
  const anchor = e.target.closest("a");
  const index = attr(target, "data-index");
  const body = getNode("body");

  //*------is-active클래스 추가 / 제거-------*
  list.forEach((li) => {
    removeClass(li, "is-active");
  });
  addClass(target, "is-active");

  //*------배경색상 변경-------*
  body.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color[0]
  },${data[index - 1].color[1]})`;

  // console.log(`${data[index].color[0]}`);
  // console.log(`${data[index].color[1]}`);
};

//setImage(이미지 변경)
const setImage = (e) => {
  const target = e.target.closest("li");
  const anchor = e.target.closest("a");
  const index = attr(target, "data-index");
  const visualImg = getNode(".visual img");

  attr(visualImg, "src", `./assets/${data[index - 1].src}`);
  attr(visualImg, "alt", data[index - 1].alt);
};

//setNameText(텍스트 변경)
const setNameText = (e) => {
  const target = e.target.closest("li");
  const anchor = e.target.closest("a");
  const index = attr(target, "data-index");
  const nickName = getNode(".nickName");

  nickName.textContent = `${data[index - 1].name}`;
};

nav.addEventListener("click", setBgColor);
nav.addEventListener("click", setImage);
nav.addEventListener("click", setNameText);
