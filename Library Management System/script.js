let books = [];

function addBook(){

let title = document.getElementById("title").value;
let author = document.getElementById("author").value;
let category = document.getElementById("category").value;

if(title=="" || author=="" || category==""){
alert("Please fill all fields");
return;
}

books.push({
title,
author,
category
});

displayBooks();

document.getElementById("title").value="";
document.getElementById("author").value="";
document.getElementById("category").value="";
}

function displayBooks(){

let table="";

books.forEach((book,index)=>{

table+=`
<tr>
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.category}</td>
<td>
<button class="delete-btn" onclick="deleteBook(${index})">
Delete
</button>
</td>
</tr>
`;

});

document.getElementById("bookTable").innerHTML=table;

}

function deleteBook(index){

books.splice(index,1);

displayBooks();

}

function searchBook(){

let search=document.getElementById("search").value.toLowerCase();

let table="";

books.forEach((book,index)=>{

if(book.title.toLowerCase().includes(search)){

table+=`
<tr>
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.category}</td>
<td>
<button class="delete-btn" onclick="deleteBook(${index})">
Delete
</button>
</td>
</tr>
`;

}

});

document.getElementById("bookTable").innerHTML=table;

}