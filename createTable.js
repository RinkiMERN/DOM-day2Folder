let table=document.createElement("table");
console.log(table);


let tHead=document.createElement("thead");
console.log(tHead);


let tBody=document.createElement("tbody");
console.log(tBody);

let tr1=document.createElement("tr");
console.log(tr1);

let tr2=document.createElement("tr");
console.log(tr2);

let td1=document.createElement("td");
// console.log(td1);
td1.innerText="1";
let td2=document.createElement("td");
// console.log(td2);
td2.innerText="2";
let td3=document.createElement("td");
// console.log(td3);
td3.innerText="3";
let td4=document.createElement("td");
// console.log(td4);
td4.innerText="4";
let td5=document.createElement("td");
// console.log(td5);
td5.innerText="5";

tr1.appendChild(td1);
tr1.appendChild(td2);
tr1.appendChild(td3);
tr1.appendChild(td4);
tr1.appendChild(td5);
// console.log(tr1);
tr2.appendChild(td1);
tr2.appendChild(td2);
tr2.appendChild(td3);
tr2.appendChild(td4);
tr2.appendChild(td5);
// console.log(tr2);

tBody.appendChild(tr1);
tBody.appendChild(tr2);
table.appendChild(tBody)
// document.body.appendChild(table);


// let employees=[{
//     empId:12,
//     empName:'rinki',
//     empSalary:10000,
//     empExp:"3yrs",
//     empEdu:"MCA"
// },
// {
//     empId:13,
//     empName:'Vaibhavi',
//     empSalary:17000,
//     empExp:"3yrs",
//     empEdu:"MCA"
// },
// {
//     empId:14,
//     empName:'julee',
//     empSalary:12000,
//     empExp:"3yrs",
//     empEdu:"BCA"
// }
//]

// let table_body="";
// for(let emp of employees)
// {
//     let {empId,empName,empSalary,empExp,empEdu}=emp;
//     table_body += `<tr>
//     <td>${empId}</td>
//     <td>${empName}</td>
//     <td>${empSalary}</td>
//     <td>${empExp}</td>
//     <td>${empEdu}</td>
//     </tr>`
// }
// document.querySelector("tbody").innerHTML=table_body;