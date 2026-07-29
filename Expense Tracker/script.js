let total = 0;

function addExpense(){

let title = document.getElementById("title").value;

let amount = Number(document.getElementById("amount").value);

if(title=="" || amount<=0){

alert("Please enter valid data.");

return;

}

const li = document.createElement("li");

li.innerHTML = `${title} - Rs.${amount}`;

document.getElementById("expenseList").appendChild(li);

total += amount;

document.getElementById("total").innerHTML = `Total: Rs.${total}`;

document.getElementById("title").value = "";

document.getElementById("amount").value = "";

}