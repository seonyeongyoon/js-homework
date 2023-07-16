const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
  - false면 해당 input에 is--invalid 추가
			node.classList.remove('is--invalid')
  - true면 해당 input에 is--invalid 제거
			node.classList.add('is--invalid')

2. pw 정규표현식을 사용한 validation
  - false면 해당 input에 is--invalid 추가
			node.classList.remove('is--invalid')
  - true면 해당 input에 is--invalid 제거
			node.classList.add('is--invalid')

3. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
  value === user.id

4. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
  value === user.pw

5. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동
  window.location.href = 'welcome.html'

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const lognBtn = document.querySelector(".btn-login");

//이메일이 제대로 통과됬는지 따지는 상태변수 만들기
let emailPass = false;
let pwPass = false;

//email 정규표현식을 사용한 validation
userEmail.addEventListener("input", function () {
  console.log(this.value);

  console.log(emailReg(this.value));
  if (emailReg(this.value)) {
    this.classList.remove("is--invalid");
    emailPass = true;
  } else {
    this.classList.add("is--invalid");
    emailPass = false;
  }
});

//pw 정규표현식을 사용한 validation
userPassword.addEventListener("input", function () {
  console.log(this.value);

  console.log(pwReg(this.value));
  if (pwReg(this.value)) {
    this.classList.remove("is--invalid");
    pwPass = true;
  } else {
    this.classList.add("is--invalid");
    pwPass = false;
  }
});

lognBtn.addEventListener("click", (e) => {
  if (
    emailPass &&
    userEmail.value === user.id &&
    pwPass &&
    userPassword.value === user.pw
  ) {
    console.log("로그인");
    window.location.href = "/mission01/naver_login/welcome.html";
    e.preventDefault();
  } else {
    return false;
  }
});
