let donors=[];

function addDonor(){

let name=document.getElementById("name").value;
let blood=document.getElementById("bloodGroup").value;
let city=document.getElementById("city").value;
let phone=document.getElementById("phone").value;

if(name=="" || blood=="" || city=="" || phone==""){

alert("Please fill all fields.");

return;

}

donors.push({
name,
blood,
city,
phone
});

displayDonors();

document.getElementById("name").value="";
document.getElementById("bloodGroup").value="";
document.getElementById("city").value="";
document.getElementById("phone").value="";
}

function displayDonors(){

let table="";

donors.forEach((donor,index)=>{

table+=`
<tr>
<td>${donor.name}</td>
<td>${donor.blood}</td>
<td>${donor.city}</td>
<td>${donor.phone}</td>
<td>
<button class="delete-btn" onclick="deleteDonor(${index})">
Delete
</button>
</td>
</tr>
`;

});

document.getElementById("donorTable").innerHTML=table;

}

function deleteDonor(index){

donors.splice(index,1);

displayDonors();

}