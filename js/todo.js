 const toDoForm = document.getElementById("todo-form");
 const toDoInput = document.querySelector("#todo-form input");
 const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos가 string인 리스트로 저장됨
}

 function deleteToDo(event){ //❌버튼 누르면 해당 리스트 지우기 함수
    const li = event.target.parentElement; //누른 버튼이 속한 html 리스트 가져오기
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDos 리스트에서 특정 오브젝트 지우기
    saveToDos()
 }
 
 function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
 }
 
 function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo, 
        id: Date.now() //특정한(랜덤한) id값 부여
    };
    toDos.push(newTodoObj); //toDos에 요소 추가
    paintToDo(newTodoObj);
    saveToDos();
 }

 toDoForm.addEventListener("submit", handleToDoSubmit);

 const savedToDos = localStorage.getItem(TODOS_KEY);

 if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
 }