function addTask(){

const input=document.getElementById("taskInput");

const task=input.value.trim();

if(task===""){

alert("Please enter a task.");

return;

}

const li=document.createElement("li");

const span=document.createElement("span");

span.innerText=task;

span.onclick=function(){

span.classList.toggle("completed");

};

const delBtn=document.createElement("button");

delBtn.innerText="Delete";

delBtn.className="delete-btn";

delBtn.onclick=function(){

li.remove();

};

li.appendChild(span);

li.appendChild(delBtn);

document.getElementById("taskList").appendChild(li);

input.value="";

}