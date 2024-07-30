function createCourse(name,id){
    var d= document.createElement('div');
    var p=document.createElement('img');
    p.setAttribute('src','assests/blank-pic.png')
    d.appendChild(p)
    var d1=document.createElement('p');
   d1.innerText='Name: '+name;
   d.appendChild(d1) 
   d1=document.createElement('p');
   d1.innerText='Id: '+id;
    d.appendChild(d1);
    d.classList.add('announcement')
  
    document.getElementsByClassName('container')[0].appendChild(d);
  }
  

  document.getElementsByClassName('spinner')[0].style.display='block'



  
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import{
    getFirestore,updateDoc ,doc, collection, getDocs, query, where,setDoc,deleteDoc  
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js'

  
  
  const firebaseConfig = {
      apiKey: "AIzaSyAqgPAy-kFiuhIkPFKwivhadnxB_uWXwpU",
      authDomain: "learngate-3a9bc.firebaseapp.com",
      projectId: "learngate-3a9bc",
      storageBucket: "learngate-3a9bc.appspot.com",
      messagingSenderId: "734755392167",
      appId: "1:734755392167:web:08ee132bdea0a4391fe982"
    }
  let students=[]
  initializeApp(firebaseConfig)
  const db = getFirestore()
  const colRef = collection(db,'students')
  getDocs(colRef)
   .then((snapshot)=>{
   snapshot.docs.forEach((doc)=>{
    students.push({...doc.data(),id: doc.id})
    createCourse(doc.data().first_name +" "+doc.data().last_name,doc.data().id)
    let e =document.getElementsByClassName("announcement")
    for(let i=0;i<e.length;i++){
       e[i].addEventListener('click',function(){
           showStudentInfo(i)
           document.getElementsByClassName('popup')[0].style.display='block'
        })
    }
    document.getElementById('numberOfStudents').innerText=e.length
    document.getElementsByClassName('spinner')[0].style.display='none'
   })
})



async function showStudentInfo(index){
  document.getElementsByClassName('spinner')[0].style.display='block'
  const citiesRef = collection(db, "student_courses");
  const coursesRef = collection(db, "courses");
  let coursesIds=[]
  let coursesNames=[]
  const q = query(citiesRef, where("student_id", "==",students[index].ID));
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    coursesIds.push(doc.data().course_id);
  });
  let select = document.getElementById('courses');

  let a=0
  for(let i=0;i<coursesIds.length;i++){
  const q = query(coursesRef, where("id", "==", coursesIds[i]));
  let j=0;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    var opt = document.createElement('option');
    coursesNames.push(doc.data().title);
    opt.value = doc.data().title;
  opt.innerHTML = doc.data().title;
  select.appendChild(opt);
  });}




  document.getElementById('addBtn').style.display='none'

  document.getElementById('removeBtn').style.display='block'
  document.getElementById('updateBtn').style.display='block'
  document.getElementById('updateBtn').innerHTML='Edit<i id="icon" class="fa-solid fa-pen"></i>'
  document.getElementById('name').value=students[index].first_name +" "+ students[index].last_name;
  document.getElementById('id').value=students[index].ID;
  document.getElementById('password').value=students[index].password;
  document.getElementById('gpa').value=students[index].gpa;
  document.getElementById('credites').value=students[index].credits;
  document.getElementById('year').value=students[index].year;
  document.getElementById('specialization').value=students[index].specialization;
  document.getElementById('phoneNumber').value=students[index].phone_number;
  document.getElementById('status').value=students[index].status;

  document.getElementsByClassName('spinner')[0].style.display='none'
}

var saveFlag=false


document.getElementById('updateBtn').addEventListener('click',function(){
  updateStudentInfo();
})
document.getElementById('searchBtn').addEventListener('click',function(){
  // alert(document.getElementById('search').value)
  let e1=document.getElementById('search').value

  let e =document.getElementsByClassName("announcement")
  for(let i=0;i<e.length;i++){
    let e3=e[i].children[1].innerText.substring(6)

  
   if(e1==""){
  for(let i=0;i<e.length;i++)
  e[i].style.display='block'
  }
  else if(e3.toUpperCase() != e1.toUpperCase())
  e[i].style.display='none'
  }

})

document.getElementById('registerBtn').addEventListener('click',function(){
  registerNewStudent();
})

document.getElementById('removeBtn').addEventListener('click',async function(){
  
  await deleteDoc(doc(db, "students", document.getElementById('id').value));
  $(".popup").animate({ top: '700px' }, 400, function () {
    $(".popup").css("display", "none");
    $(".popup").animate({ top: '50px' },100)
});
})




function registerNewStudent(){
  document.getElementById('addBtn').style.display='block'
  document.getElementById('removeBtn').style.display='none'
  document.getElementById('updateBtn').style.display='none'


  for(let i=0;i<document.getElementsByClassName('input-field').length;i++){
    document.getElementsByClassName('input-field')[i].removeAttribute("disabled");
    document.getElementsByClassName('input-field')[i].value=null
  }
  document.getElementsByClassName('popup')[0].style.display='block'

}

document.getElementById('addBtn').addEventListener('click',async function(){


  let fullName=document.getElementById('name').value.split(' ') 
  await setDoc(doc(db, "students", document.getElementById('id').value), {
    first_name:fullName[0],
    // last_name:fullName[1],
    gpa:(document.getElementById('gpa').value!='')?document.getElementById('gpa').value:null,
    phone_number:(document.getElementById('phoneNumber').value!='')?document.getElementById('phoneNumber').value:null,
    credits:(document.getElementById('credites').value!='')?document.getElementById('credites').value:null,
    year:(document.getElementById('year').value!='')?document.getElementById('year').value:null,
    status:(document.getElementById('status').value!='')?document.getElementById('status').value:null
    
  });

  $(".popup").animate({ top: '700px' }, 400, function () {
    $(".popup").css("display", "none");
    $(".popup").animate({ top: '50px' },100)
});

})

async function  updateStudentInfo(){
  document.getElementsByClassName('spinner')[0].style.display='block'

  if(!saveFlag){
  for(let i=0;i<document.getElementsByClassName('input-field').length;i++){
    document.getElementsByClassName('input-field')[i].removeAttribute("disabled");
    document.getElementById('updateBtn').innerHTML='Update <i class="fa-solid fa-cloud-arrow-up"></i>'
    saveFlag=true
    
  }
}

else{
  {const washingtonRef = doc(db, "students", document.getElementById('id').value );
  let fullName=document.getElementById('name').value.split(' ') 
  // Set the "capital" field of the city 'DC'
   updateDoc(washingtonRef, {
    first_name:fullName[0],
    last_name:fullName[1],
    gpa:(document.getElementById('gpa').value!='')?document.getElementById('gpa').value:null,
    phone_number:(document.getElementById('phoneNumber').value!='')?document.getElementById('phoneNumber').value:null,
    credits:(document.getElementById('credites').value!='')?document.getElementById('credites').value:null,
    year:(document.getElementById('year').value!='')?document.getElementById('year').value:null,
    status:(document.getElementById('status').value!='')?document.getElementById('status').value:null

   });
   saveFlag=false
   $(".popup").animate({ top: '700px' }, 400, function () {
    $(".popup").css("display", "none");
    $(".popup").animate({ top: '50px' },100)
});}
} 
document.getElementsByClassName('spinner')[0].style.display='none'
}




$("#closePopup").click(function () {
  if($(".popup").css("display")=='block')
  $(".popup").animate({ top: '700px' }, 300, function () {
      $(".popup").css("display", "none");
      $(".popup").animate({ top: '50px' },100)


  });
  for(let i=0;i<document.getElementsByClassName('input-field').length;i++){
  document.getElementsByClassName('input-field')[i].disabled = true;
  }
  document.getElementById('updateBtn').innerHTML='Edit<i id="icon" class="fa-solid fa-pen"></i>'
  document.getElementById('courses').innerHTML=null
  saveFlag=false


});




  