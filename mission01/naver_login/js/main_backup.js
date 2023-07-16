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

// function checkValidEmail(form) {
//   if (form.email.value == "") {
//       document.getElementById('alert_email').innerText = "Please enter email.";
//       //form.email.focus();
//       return false;
//   }

//   const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

//   // "ㅁ@ㅁ.ㅁ" 이메일 형식 검사.
//   if (exptext.test(form.email.value) === false) {
//       document.getElementById('alert_email').innerText = "Email is not valid.";
//       //form.email.select();
//       return false;
//   }

//   return true;
// }

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function login() {
  const userEmail = document.querySelector("#userEmail");
  let emailValue = userEmail.value;

  userEmail.addEventListener("input", () => {
    if (emailReg(emailValue) === false) {
      userEmail.classList.add("is--invalid");
    } else {
      userEmail.classList.remove("is--invalid");
    }
    //console.log(emailValue === "hello");
  });

  const userPassword = document.querySelector("#userPassword");
  let pwValue = userPassword.value;

  userPassword.addEventListener("input", () => {
    if (!pwReg(pwValue)) {
      userPassword.classList.add("is--invalid");
    } else {
      userPassword.classList.remove("is--invalid");
    }
    //console.log(userPassword === "hello");
  });

  let loginBtn = document.querySelector(".btn-login");
  loginBtn.addEventListener("click", () => {
    if (value === user.pw || value === user.pw) {
      window.location.href = "welcome.html";
    } else {
      return false;
    }
  });
}

login();

//   if (user.id === undefined || user.id === null) {
//     userEmail.classList.remove("is--invalid");
//   } else {
//     userEmail.classList.add("is--invalid");
//   }
// }

// 콜백 함수 (표현)식 : 나중에 실행시켜준다.
// let login = function (isActive, success, fail) {
//   // const callback = function(){console.log('콜백 함수 실행!')};

//   if (isActive) {
//     success();
//     return;
//   }
//   fail();
// };

// login(
//   true,
//   function () {
//     console.log("성공!");
//   },
//   function () {
//     console.log("실패!");
//   }
// );

// //https://www.naver.com
// let loginBtn = document.querySelector(".btn-login");
// const movePage = function (url, success, fail) {
//   loginBtn.addEventListener("click", () => {
//     if (value === user.pw || value === user.pw) {
//       success(url);
//     } else {
//       fail();
//     }
//   });
// };

// movePage(
//   function (url) {
//     console.log("성공 몇초 뒤 해당 페이지로 이동합니다.");

//     setTimeout(() => {
//       window.location.href = "welcome.html";
//     }, 3000);
//   },
//   function () {
//     console.log("올바르지 않은 주소입니다.");
//     // ????
//   }
// );

//선생님 코드 참고
// const input = document.querySelector("#todo");

// let value = input.value;

// input.addEventListener("input", () => {
//   value = input.value;
//   console.log(value === "hello");
// });

//input.classList.add('is-active');
//input.classList.remove('is-active');
