import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import{
    getFirestore , collection, getDocs, query, where
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js'






document.getElementsByClassName('wrapper')[0].classList.add("blur")
document.body.style.cursor = 'none';
document.getElementsByClassName('loader')[0].style.borderTopColor=localStorage.getItem('bodyColor')

document.getElementsByClassName('spinner')[0].style.display='block'


document.getElementById("toDoInput").style.backgroundColor = localStorage.getItem("bodybg");
document.getElementsByClassName("timer")[0].style.backgroundColor = localStorage.getItem("secondColor");
document.getElementsByClassName('timer-container')[0].style.backgroundColor = localStorage.getItem("secondColor");
document.getElementsByClassName('grades-diagram')[0].style.backgroundColor = localStorage.getItem("secondColor");
//document.getElementsByClassName('grades-diagram')[0].style.backgroundColor = localStorage.getItem("secondColor");
document.getElementById('footer').style.backgroundColor=localStorage.getItem("secondColor");
document.getElementsByClassName('timer-container')[0].style.borderColor=localStorage.getItem('bodyColor') 
document.getElementsByClassName('toDo')[0].style.backgroundColor = localStorage.getItem("secondColor");

for(let i=0;i<document.getElementsByClassName("line").length;i++)
document.getElementsByClassName("line")[i].style.backgroundColor=localStorage.getItem("bodybg");


document.getElementsByClassName("hero")[0].style.backgroundColor=localStorage.getItem("secondColor");
    for(let i=0;i<document.getElementsByClassName("in-overView").length;i++){
    document.getElementsByClassName("in-overView")[i].style.backgroundColor=localStorage.getItem("secondColor");
    document.getElementsByClassName("in-overView")[i].addEventListener('click',function(){
        window.location.href='acadamicFile.html'
    })

}
    document.getElementById('upComing').style.backgroundColor=localStorage.getItem("secondColor");

let today = new Date().toString().slice(0, 20).split(" ")
let time = today[4].slice(0, 2);
if (time < "12") {
    document.getElementById("welcomeTxt").innerHTML = "Good Morning, " + sessionStorage.getItem("fname")
}
else document.getElementById("welcomeTxt").innerHTML = "Good Evening, " + sessionStorage.getItem("fname")
document.getElementById("dateTxt").innerHTML = today[0] + " ,&nbsp " + today[2] + " &nbsp " + today[1] + " &nbsp " + today[3];

document.getElementById('gpaTxt').innerHTML = sessionStorage.getItem("gpa");
document.getElementById('creditsTxt').innerHTML = sessionStorage.getItem("credits");
document.getElementById('yearTxt').innerHTML = sessionStorage.getItem("year");

document.getElementById('home').style.color = localStorage.getItem("bodyColor");
document.getElementById('icon').style.color = localStorage.getItem("bodyColor");
// document.getElementsByClassName("diagram")[0].style.opacity = localStorage.getItem("diagramOpacity");



for(let i=0;i<7;i++){
    if(localStorage.getItem('toDo'+i)!=""){
        if(localStorage.getItem('toDo'+i)){
document.getElementById("toDoList").children[i].innerHTML+=localStorage.getItem('toDo'+i);
 document.getElementById("toDoList").children[i].children[0].style.color=localStorage.getItem('toDoCheck'+i);
    }}
}
var snd = new Audio("assests/mixkit-correct-answer-tone-2870.wav");

// if (sessionStorage.getItem('fname') === null) {
//     window.location.href = 'index.html';

// }


switch (localStorage.getItem('bodyColor')) {
    case "#3F72AF":
        document.getElementById('heroImg').setAttribute('src',"assests/hero-blue.png");
        break;

    case "#176B87":
        document.getElementById('heroImg').setAttribute('src',"assests/hero-cyan.png");


        break;
    case "#22668D":

        break;
    case "#F875AA":
        document.getElementById('heroImg').setAttribute('src',"assests/hero-pink.png");
        break;
    case "#EB6440":
        document.getElementById('heroImg').setAttribute('src',"assests/hero-green.png");

        break;
    case "#FFD369":

        break;
    case "#D2DE32":
        document.getElementById('heroImg').setAttribute('src',"assests/hero-lime.png");

        break;

    case "#F05454":
        document.getElementById('heroImg').setAttribute('src',"assests/hero-red.png");

        break;
    case "#0E5E6F":
        document.getElementById('heroImg').setAttribute('src',"assests/hero-brown.png");

        break;
    case "#7743DB":
        document.getElementById('heroImg').setAttribute('src',"assests/hero-purble.png");

        break;
        case "#5C4B99":
            document.getElementById('heroImg').setAttribute('src',"assests/hero-purble2.png");

            break;
            case "#F99417":
                document.getElementById('heroImg').setAttribute('src',"assests/hero-orange.png");

                break;


}
if (localStorage.getItem('bodybg') == "#171717") {
    document.getElementById('heroImg').setAttribute('src',"assests/hero-dark.png");}





// show grades for diagram


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


var i=0
while(courseGrades[i]){
    let e=document.createElement('div')
    document.getElementsByClassName('grades-diagram')[0].appendChild(e)
    e.classList.add('bar')
    e.style.height=(Number(courseGrades[i].f7)*0.11)+'rem'
    e.style.top=(14.5-(Number(courseGrades[i].f7)*0.108))+'rem'
    e.style.left=3*(i+2)+'rem'
    i++;
}






document.getElementById("addToDo").addEventListener('click',function(){
    for(let i=0;i<7;i++){
        if(document.getElementById("toDoList").children[i].innerHTML=='<i class="fa-regular fa-square-check" aria-hidden="true"></i><i class="fa-solid fa-circle-minus" aria-hidden="true"></i>'){
    var e=document.getElementById("toDoInput").value;
    if(e!=null){
        document.getElementById("toDoList").children[i].classList.add("animate")
        document.getElementById("toDoList").children[i].innerHTML+=e;

        document.getElementById("toDoList").children[i].children[1].addEventListener('click',function(){
        document.getElementById("toDoList").children[i].classList.remove("animate")
        document.getElementById("toDoList").children[i].classList.remove('finish')

         
            localStorage.setItem("toDo"+i,"")
            document.getElementById("toDoList").children[i].innerHTML='<i class="fa-regular fa-square-check" aria-hidden="true"></i><i class="fa-solid fa-circle-minus" aria-hidden="true"></i>'
        })
        document.getElementById("toDoList").children[i].children[0].addEventListener('click',function(){
            if(document.getElementById("toDoList").children[i].children[0].style.color!=localStorage.getItem('bodyColor')){
            document.getElementById("toDoList").children[i].children[0].style.color=localStorage.getItem('bodyColor')
            let c=(Number(localStorage.getItem('tasksDone')));
            localStorage.setItem('tasksDone',c+1)
        document.getElementById("toDoList").children[i].classList.add('finish')

            localStorage.setItem('toDoCheck'+i,localStorage.getItem('bodyColor'));}
            else{
                document.getElementById("toDoList").children[i].children[0].style.color='red'
                localStorage.setItem('toDoCheck'+i,localStorage.setItem('bodyColor','#DADADA'));}
          
        })
    localStorage.setItem("toDo"+i,e)
    document.getElementById("toDoInput").value=""
    break;}}
  

    }
})

for(let i=0;i<document.getElementById("toDoList").children.length;i++){
   
    document.getElementById("toDoList").children[i].children[1].addEventListener('click',function(){
        document.getElementById("toDoList").children[i].innerHTML='<i class="fa-regular fa-square-check" aria-hidden="true"></i><i class="fa-solid fa-circle-minus" aria-hidden="true"></i>'
        localStorage.setItem("toDo"+i,"")
        localStorage.setItem("toDoCheck"+i,"#DADADA")
        document.getElementById("toDoList").children[i].classList.remove('finish')
    })
}
for(let i=0;i<document.getElementById("toDoList").children.length;i++){
    document.getElementById("toDoList").children[i].children[0].addEventListener('click',function(){
        if(document.getElementById("toDoList").children[i].innerHTML!='<i class="fa-regular fa-square-check" aria-hidden="true"></i><i class="fa-solid fa-circle-minus" aria-hidden="true"></i>'){
        localStorage.setItem('toDoCheck'+i,localStorage.getItem('bodyColor'));
        let c=(Number(localStorage.getItem('tasksDone')));
        localStorage.setItem('tasksDone',c+1)
        document.getElementById("toDoList").children[i].children[0].style.color=localStorage.getItem('bodyColor')
        document.getElementById("toDoList").children[i].classList.add('finish')
    }
  
    })
}





if(localStorage.getItem('timer')!=null)
document.getElementById("timer").value=localStorage.getItem('timer')


document.getElementById('timerUp').addEventListener('click',function(){
    if(document.getElementById('startTime').innerHTML!="Reset"){

   let e= document.getElementById('timer').value.split(":");
  let a= Number(e[1])+15
   if(a<=45)
   document.getElementById('timer').value=e[0]+":"+a+':'+e[2]
    else{
   document.getElementById('timer').value=(Number(e[0])+1)+":"+((a-60)>0 ? (a-60):0)+':'+e[2]
}

}})

document.getElementById('timerDown').addEventListener('click',function(){
    if(document.getElementById('startTime').innerHTML!="Reset"){
        var e= document.getElementById('timer').value.split(":");
   let a= Number(e[1])
   let a2=(Number(e[0])-1)
    if(a>=15)
    document.getElementById('timer').value=e[0]+":"+(a-15)+':'+e[2]
     else
     if(e[0]>0)
     document.getElementById('timer').value=(a2>0?a2:0)+":"+(60+(Number(e[1]))-15)+':'+e[2]
     else 
    document.getElementById('timer').value=0+":"+0+':'+e[2]
}
 
 })




function timer() {if(document.getElementById("timer").value!="0:00:00"&&document.getElementById("timer").value!="0:0:0"&&document.getElementById("timer").value!="00:0:0"){
document.getElementById('startTime').innerHTML="Reset"
document.getElementById('timerDown').style.opacity=0.5
document.getElementById('timerUp').style.opacity=0.5
let e=document.getElementById("timer").value.split(':')
let sec=Number(e[2])

var x = setInterval(function() {
let e=document.getElementById("timer").value.split(':')

let min= Number(e[1])
var hour= Number(e[0])
if(sec==0&&min==0&&hour==0){
    
}
else{
    document.body.classList.add('op')

if(sec==0||sec=="00"){
    sec=59
    if(min>0)
    min--
else if(hour==1 &&min==0){
min=59
hour=0}
}
if(min==0 && sec==0){
    if(hour==0)
    min=0
else{
    if(hour>0){
    hour--}
    min=59
  
}}
document.getElementById("timer").value=hour+':'+min+':'+sec
localStorage.setItem('timer',document.getElementById("timer").value=hour+':'+min+':'+sec)
    sec--
    
}

   }, 1000);
}
}
timer()

document.getElementById('startTime').addEventListener('click',function(){
    if(document.getElementById('startTime').innerHTML=="Reset"){
        localStorage.setItem('timerFinish',document.getElementById('timer').value)
        let ts= localStorage.getItem('timerStart').split(':')
        let tf= localStorage.getItem('timerFinish').split(':')
        let h=Number(ts[0])-Number(tf[0])
        let m=Number(ts[1])-Number(tf[1])

       let totalTimeVlaue= localStorage.getItem('totalTimer').split(' ')
       let h1=Number(totalTimeVlaue[0])
        let m1=Number(totalTimeVlaue[2])

        if(m1+m>=60){
        localStorage.setItem('totalTimer',+(h1+h+1)+" h "+((m1+m)-60)+" m");
        localStorage.setItem('timer','00:0:0'); 
        location.reload();}
    else{
        localStorage.setItem('totalTimer',+(h1+h)+" h "+(m1+m)+" m");
        localStorage.setItem('timer','00:0:0'); 
        location.reload();}
    }
    

        else{
            document.getElementById("timer").value!="0:0:00"
            timer()
            localStorage.setItem('timerStart',document.getElementById('timer').value)
            localStorage.setItem('timer',document.getElementById('timer').value)
            document.body.classList.add('op')

        }

})

document.getElementsByClassName('wrapper')[0].classList.remove("blur")
document.body.style.cursor = 'auto';
document.getElementsByClassName('spinner')[0].style.display='none'


