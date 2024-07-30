// if (sessionStorage.getItem('fname') === null) {
//   window.location.href = 'index.html';
// }
document.getElementsByClassName('wrapper')[0].classList.add("blur")
document.getElementsByClassName('loader')[0].style.borderTopColor=localStorage.getItem('bodyColor')
document.getElementById('d').style.display = 'block';

document.getElementsByClassName('spinner')[0].style.display='block'


$("#closeCoursesPopup").click(function () {
  if($("#coursesPopup").css("display")=='block')
  $("#coursesPopup").animate({ top: '700px' }, 400, function () {
      $("#coursesPopup").css("display", "none");
      $("#coursesPopup").animate({ top: '50px' },100)
  });
document.getElementById('d').style.display = 'none';

  document.getElementsByClassName('wrapper')[0].classList.remove('open')


});

function createCourse(Title,comp){
  var d= document.createElement('div');
  var p=document.createElement('p');
  p.innerText=Title;
  p.classList.add('courseTitle')
  var d1=document.createElement('div');
  var d2=document.createElement('div');

  d.classList.add("coursebtn");
  d1.classList.add('progressBar');
  d2.classList.add("innerBar");
  d2.style.width=comp+"%"

  d.appendChild(p);
  d1.appendChild(d2);
  d.appendChild(d1);

  for(let i=0;i<document.getElementsByClassName("innerBar").length;i++){
    document.getElementsByClassName("innerBar")[i].style.backgroundColor=localStorage.getItem('bodyColor')
  }
  
  return d;
}


function createCourseFile(title,url){
 var e= document.createElement('li')
 e.classList.add('fileItem')
 var e1 =document.createElement('a')

 e1.innerHTML=title
 e1.setAttribute('href',url)
 e1.download=url
 e.appendChild(e1)
 e.innerHTML+='<i class="fa-regular fa-square-check"></i><i class="fa-solid fa-file-arrow-down"></i>'
document.getElementById('coursesFiles').appendChild(e)
e.classList.add('insertFile')

let e3=document.getElementsByClassName("fileItem")
  e3[e3.length-1].style.backgroundColor=localStorage.getItem("bodybg");
    e3[e3.length-1].style.color=localStorage.getItem("bodyColor");

}


document.getElementById('myCourses').style.color = localStorage.getItem("bodyColor");
document.getElementById('coursesPopup').style.backgroundColor = localStorage.getItem("secondColor");
document.getElementsByClassName('fa-solid fa-book')[0].style.color=localStorage.getItem("bodyColor");
document.getElementById('footer').style.backgroundColor=localStorage.getItem("secondColor");



import { initializeApp,getApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import{
    getFirestore , collection, getDocs, query, where
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js'
import { getStorage, ref, getDownloadURL, listAll  } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";



const firebaseConfig = {
    apiKey: "AIzaSyAqgPAy-kFiuhIkPFKwivhadnxB_uWXwpU",
    authDomain: "learngate-3a9bc.firebaseapp.com",
    projectId: "learngate-3a9bc",
    storageBucket: "learngate-3a9bc.appspot.com",
    messagingSenderId: "734755392167",
    appId: "1:734755392167:web:08ee132bdea0a4391fe982"
  }
  let coursesList=[]
  let coursescomps=[]

initializeApp(firebaseConfig)
  const db = getFirestore()
  const citiesRef = collection(db, "student_courses");
  const coursesRef = collection(db, "courses");


const storage = getStorage();
      
const q = query(citiesRef, where("student_id", "==", sessionStorage.getItem("id")));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  coursesList.push(doc.data().course_id);
  coursescomps.push(doc.data().comp)
});
const e= document.getElementsByClassName("courses-container");
let a=0
for(let i=0;i<coursesList.length;i++){
const q = query(coursesRef, where("id", "==", coursesList[i]));
let j=0;
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    e[0].appendChild(createCourse(doc.data().title,coursescomps[a]))
    a++
   
});}


const e3= document.getElementsByClassName("courses-container")[0];
//changing popup title
const e1=document.getElementById('courseTitle');

 for(let i=0;i<e3.children.length;i++){
   e3.children[i].addEventListener('click',function(){
     e1.innerHTML=e3.children[i].children[0].innerHTML
   })    
 }

for(let i=0;i<document.getElementsByClassName("coursebtn").length;i++){

    document.getElementsByClassName("coursebtn")[i].style.backgroundColor=localStorage.getItem("secondColor");
document.getElementsByClassName("coursebtn")[i].addEventListener('click',function(){
document.getElementById('d').style.display = 'block';

  document.getElementById('coursesFiles').innerHTML=''

    document.getElementById('coursesPopup').style.display='block';
    document.getElementsByClassName('wrapper')[0].classList.add('open')
    const listRef = ref(storage, 'chapters/IT');
  
  // Find all the prefixes and items.
  listAll(listRef)
    .then((res) => {
      let j=0
      document.getElementsByClassName('spinner')[0].style.display='block'
      res.prefixes.forEach((folderRef) => {
        listAll(folderRef).then((res) => {
          if(document.getElementById('courseTitle').innerText==folderRef.name)
          res.items.forEach((itemRef) => {
            getDownloadURL(ref(storage,'chapters/IT'+'/'+folderRef.name+'/'+itemRef.name ))
            .then((url) => {
              // `url` is the download URL for 'images/stars.jpg'
          
              // This can be downloaded directly:
              const xhr = new XMLHttpRequest();
              xhr.responseType = 'blob';
              xhr.onload = (event) => {
                const blob = xhr.response;
              };
              xhr.open('GET', url);
              xhr.send();
              // Or inserted into an <img> element
              createCourseFile(itemRef.name,url)

            })
            .catch((error) => {
              alert(error)
              
              // Handle any errors
            });
            
      
            // All the items under listRef.
          });
    document.getElementsByClassName('spinner')[0].style.display='none'

        
        }).catch((error) => {
          alert(error)
          // Uh-oh, an error occurred!
        });
        
      });
      
    }).catch((error) => {
      alert(error)
      // Uh-oh, an error occurred!
    });
    
})

}


document.getElementsByClassName('wrapper')[0].classList.remove("blur")
document.getElementById('d').style.display = 'none';

document.getElementsByClassName('spinner')[0].style.display='none'




