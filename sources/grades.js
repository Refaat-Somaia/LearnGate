



import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import{
    getFirestore , collection, getDocs, query, where
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js'

document.getElementById('grades').style.color = localStorage.getItem("bodyColor");
document.getElementsByClassName('fa-solid fa-square-poll-horizontal fa-lg')[0].style.color=localStorage.getItem("bodyColor");
document.getElementById('table').style.backgroundColor=localStorage.getItem('secondColor')


document.getElementsByClassName('wrapper')[0].classList.add("blur")
document.getElementById('d').style.display = 'block';
document.getElementsByClassName('loader')[0].style.borderTopColor=localStorage.getItem('bodyColor')
for(let i=0;i<document.getElementsByClassName("grade-container").length;i++){
document.getElementsByClassName('grade-container')[i].style.backgroundColor=localStorage.getItem('secondColor')
}
document.getElementsByClassName('spinner')[0].style.display='block'

// function createCourse(Title){
//   var d= document.createElement('div');
//   var p=document.createElement('p');
//   p.innerText=Title;
//   var d1=document.createElement('div');
//   var d2=document.createElement('div');

//   d.classList.add("coursebtn");
//   d1.classList.add('progressBar');
//   d2.classList.add("innerBar");

//   d.appendChild(p);
//   d1.appendChild(d2);
//   d.appendChild(d1);

//   return d;
// }


const firebaseConfig = {
    apiKey: "AIzaSyAqgPAy-kFiuhIkPFKwivhadnxB_uWXwpU",
    authDomain: "learngate-3a9bc.firebaseapp.com",
    projectId: "learngate-3a9bc",
    storageBucket: "learngate-3a9bc.appspot.com",
    messagingSenderId: "734755392167",
    appId: "1:734755392167:web:08ee132bdea0a4391fe982"
  }
let coursesList=[]
initializeApp(firebaseConfig)
  const db = getFirestore()
  const citiesRef = collection(db, "student_courses");
  const coursesRef = collection(db, "courses");


const q = query(citiesRef, where("student_id", "==", sessionStorage.getItem("id")));
let j=0
var table=document.getElementById('table')
let courseGrades =[]

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  let a={f1:"",f2:"",f3:"",f4:"",f5:"",f6:"",f7:0}
  coursesList.push(doc.data().course_id);
  a.f1=doc.data().first_quiz
  a.f7+=Number(a.f1)
  a.f2=doc.data().lab_first
  a.f7+=Number(a.f2)
  a.f3=doc.data().mid
  a.f7+=Number(a.f3)
  a.f4=doc.data().second_quiz
  a.f7+=Number(a.f4)
  a.f5=doc.data().lab_second
  a.f7+=Number(a.f5)
  a.f6=doc.data().final
  a.f7+=Number(a.f6)
  courseGrades.push(a)
});
var x=0

for(let i=0;i<coursesList.length;i++){
  const q = query(coursesRef, where("id", "==", coursesList[i]));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    var row = table.insertRow(table.rows.length);
  var cell = row.insertCell(0)
  cell.innerHTML=doc.data().title
  cell = row.insertCell(1)
  cell.innerHTML=courseGrades[x].f1
  cell = row.insertCell(2)
  cell.innerHTML=courseGrades[x].f2
  cell = row.insertCell(3)
  cell.innerHTML=courseGrades[x].f3
  cell = row.insertCell(4)
  cell.innerHTML=courseGrades[x].f4
  cell = row.insertCell(5)
  cell.innerHTML=courseGrades[x].f5
  cell = row.insertCell(6)
  cell.innerHTML=courseGrades[x].f6
  cell = row.insertCell(7)
  cell.innerHTML=check_grade(courseGrades[x].f7)
  x++
  });}
  

function check_grade(grade){
  if(grade>=98)
  return "A+"
else if(grade>=95)
return 'A'
else if(grade>=90)
return 'A-'
else if (grade>=85)
return "B+"

}




document.getElementsByTagName('tr')[0].style.backgroundColor=localStorage.getItem("secondColor");


document.getElementsByClassName('wrapper')[0].classList.remove("blur")
document.getElementById('d').style.display = 'none';

document.getElementsByClassName('spinner')[0].style.display='none'
