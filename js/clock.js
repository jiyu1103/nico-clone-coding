const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    //1을 01로 보이도록함
    const hours = String(date.getHours()).padStart(2,"0"); 
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //이 코드가 없을 경우 함수를 1초 후에 실행행
setInterval(getClock, 1000); //함수를 1초마다 실행