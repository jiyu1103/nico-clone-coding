const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

//반복적으로 사용하는 string은 오탈자로 인한 오류 방지를 위해 변수화
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event){
	event.preventDefault(); //submit의 디폴트 동작인 새로고침 막기
    loginForm.classList.add(HIDDEN_CLASSNAME) //display: none;
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username); //데이터 저장하기
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = "Hello " + username; //`Hello ${username}`도 가능, 따옴표 아니고 백틱
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){ //데이터가 없을 때
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{ //데이터가 있을 때
    paintGreetings();
}