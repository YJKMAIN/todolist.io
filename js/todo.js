const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];
/*
toDos를 애초에 비워두면
handleToDoSubmit를 실행할 때마다 빈 배열에 요소를 푸쉬하는 것이 되서
새로 추가를 하면 요소를 덮어쓰는것밖에 안됨
이상태에서 saveTodos를 실행하면 이전의 리스트들은 없고
항상 새로운 투두리스트만 남음
=>해결 방안 : const가 아닌 let으로 배열을 선언
그리고 로컬스토리지에 투두들이 있으면
투두배열에 parsedTodos를 넣어서 전에 있던 리스트들을 복원
*/

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify(toDos)로 배열 자체를 스트링으로 만듦
    //"[1,2,3,4]"  ->얘를 살아있는 배열로 만들어야함
    
}
//JSON.stringify(배열이름)는 배열 요소를 문자열로 만들어줌

function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove(); 
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    /*button.innerText = "❌"*/
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    li.appendChild(button);
    li.appendChild(span);
    
    todoList.appendChild(li);
}
 
function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj ={
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos(newTodo);
}

todoForm.addEventListener("submit",handleToDoSubmit);

/*function sayHello(item){ 
//자바스크립트가 event객체를 제공한것처럼
//지금 사용하는 배열의 요소가 뭔지 item으로 제공해줌
console.log("This is the turn of", item);
}*/

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos !== null){
   const parsedTodos = JSON.parse(savedTodos);
   toDos = parsedTodos;
   //parsedTodos.forEach((item) => console.log("This is the turn of", item));
    //forEach : 배열의 각 요소별로 함수를 실행할수 있게함
    //배열별로 sayHello라는 함수를 실행하게 함
    //parsedTodos.forEach(sayHello);와 같음
    /*배열에 저장된 투두리스트들을 화면에 나타나게 하기*/
    parsedTodos.forEach(paintTodo);


}

