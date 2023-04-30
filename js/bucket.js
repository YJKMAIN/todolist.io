const bucketForm = document.getElementById("bucket-form");
const bucketInput = bucketForm.querySelector("input");
const bucketList = document.getElementById("bucket-list");
const BUCKET_KEY = "buckets";

let happyThings = [];

function savehappyThings(){
    localStorage.setItem(BUCKET_KEY, JSON.stringify(happyThings));   
}

function deletehappyThings(e){
    const li = e.target.parentElement;
    li.remove(); 
    happyThings = happyThings.filter((happyThings) => happyThings.id !== parseInt(li.id));
    savehappyThings();
}

function painthappyThings(bucketTodo){
    const li = document.createElement("li");
    li.id = bucketTodo.id;
    const span = document.createElement("span");
    span.innerText = bucketTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deletehappyThings);
    li.appendChild(button);
    li.appendChild(span);
    bucketList.appendChild(li);
}
 
function handleBucketSubmit(e){
    e.preventDefault();
    const bucketTodo = bucketInput.value;
    bucketInput.value="";
    const bucketTodoObj ={
        text : bucketTodo,
        id : Date.now(),
    };
    happyThings.push(bucketTodoObj);
    painthappyThings(bucketTodoObj);
    savehappyThings(bucketTodo);
}

bucketForm.addEventListener("submit",handleBucketSubmit);

const savedhappyThings = localStorage.getItem(BUCKET_KEY);

if(savedhappyThings !== null){
    const parsedhappyThings = JSON.parse(savedhappyThings);
    happyThings = parsedhappyThings;
    parsedhappyThings.forEach(painthappyThings);
}

