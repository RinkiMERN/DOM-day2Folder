let form=document.createElement("form");
form.setAttribute("method","post");
form.setAttribute("id","formSection")
// console.log(form);
let b=document.createElement("br");



let division=document.createElement("div");
division.setAttribute("class","formDiv");
// division.innerText="hello"
// console.log(division);


let label=document.createElement("label");
label.setAttribute("for","user");
// console.log(label);
let labelPass=document.createElement("label");
label.setAttribute("for","pass");
// console.log(labelPass);

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","user");
input.setAttribute("placeholder","Enter Your Name");
// console.log(input);

let inputPass=document.createElement("input");
inputPass.setAttribute("type","password");
inputPass.setAttribute("id","pass");
// console.log(inputPass);

label.innerText="USERNAME"
division.appendChild(label);
division.appendChild(input);
division.appendChild(b);

labelPass.innerText="PASSWORD"
division.appendChild(labelPass);
division.appendChild(inputPass);
// console.log(division);

form.appendChild(division);
console.log(form);
document.body.appendChild(form);

// form.appendChild(division);
// console.log(form);

