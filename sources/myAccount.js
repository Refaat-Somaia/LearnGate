
// if (sessionStorage.getItem('fname') === null) {
//   window.location.href = 'index.html';
// }

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import{
    getFirestore,updateDoc ,doc, collection, getDocs, query, where
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

  // firebase v8
// var db = firebase.firestore();

// db.collection("users").doc(doc.id).update({foo: "bar"});
initializeApp(firebaseConfig)

//firebase v9
const db = getFirestore();


$("#confirmBtn").click(function () {

  document.body.classList.remove('open')  
  document.getElementById('errMsg').innerHTML="Account info updated succefully"
  const washingtonRef = doc(db, "students", sessionStorage.getItem('ID'));

  // Set the "capital" field of the city 'DC'
   updateDoc(washingtonRef, {
    password: (document.getElementById('passwordNew').value!='')?document.getElementById('passwordNew').value:sessionStorage.getItem('password'),
    phone_number:(document.getElementById('phone').value!='')?document.getElementById('phone').value:sessionStorage.getItem('phone_number')
  });
  if(document.getElementById('phone').value)
  sessionStorage.setItem('phone_number',document.getElementById('phone').value)
  if(document.getElementById('passwordNew').value)
  sessionStorage.setItem('password',document.getElementById('passwordNew').value)
  document.getElementById('passwordNew').value=""
  document.getElementById('passwordNew2').value=""
  document.getElementById('password').value=""
  $("#errMsg").css("display", "block")
  $("#confirmNote").animate({ scale:1.1 },200)

  $("#confirmNote").animate({ scale:0 },300)
        setTimeout(function(){  
  $("#d").css('display','none')

          $("#confirmNote").css("display", "none")},1000)
  $("#d").css('display','none')

          $("#errMsg").animate({ top:"00px" },700)
  setTimeout(function(){
    $("#errMsg").animate({ top:"-100px" },700)
  },5000)

  document.getElementsByClassName('wrapper')[0].classList.remove('open')  

  }
);

$("#updateBtn").click(function(){
  if(document.getElementById('passwordNew').value||document.getElementById('phone').value)
  if(document.getElementById('password').value==sessionStorage.getItem('password')){
    if(document.getElementById('passwordNew').value &&document.getElementById('passwordNew').value.length>6){
  document.getElementById('confirmNote').children[0].innerHTML="Are you sure you want to update your account info?"
  document.getElementById("confirmBtn").style.display='inline'
  document.getElementById("cancelBtn").innerHTML="Cancel<i style='margin-left: 10px ;' class='fa-solid fa-x'></i></button>"
  if(document.getElementById('passwordNew').value!=""){
    if(document.getElementById('passwordNew').value==document.getElementById('passwordNew2').value){
    $("#confirmNote").css('scale',1)
    $("#confirmNote").css('display','block')
  $("#d").css('display','block')

    document.getElementsByClassName('wrapper')[0].classList.add('open')}
    else{
  document.getElementsByClassName('wrapper')[0].classList.add('open')  

      document.getElementById('confirmNote').children[0].innerHTML="Incorrect new password confirm"
  document.getElementById("confirmNote").style.textAlign='center'

      document.getElementById("cancelBtn").innerHTML='Ok'

      document.getElementById("confirmBtn").style.display='none'
  $("#confirmNote").css("display", "block")
  $("#d").css('display','block')


      $("#confirmNote").animate({ scale:1 },200)

      
        
    }

    }
  }
else{
  $("#confirmNote").css('scale',1)
  document.getElementById('confirmNote').children[0].innerHTML="New password is weak"
  document.getElementById("cancelBtn").innerHTML='Ok'

      document.getElementById("confirmBtn").style.display='none'
  document.getElementById("confirmNote").style.textAlign='center'

  $("#confirmNote").css('display','block')
  $("#d").css('display','block')
  document.getElementsByClassName('wrapper')[0].classList.add('open')
}
}
else{
  document.getElementsByClassName('wrapper')[0].classList.add('open')  

      document.getElementById('confirmNote').children[0].innerHTML="Incorrect current password"
      document.getElementById("confirmNote").style.textAlign='center'

      document.getElementById("cancelBtn").innerHTML='Ok'

      document.getElementById("confirmBtn").style.display='none'
  $("#confirmNote").css("display", "block")
  $("#d").css('display','block')


      $("#confirmNote").animate({ scale:1 },200)

}
})

document.getElementById('email').value=sessionStorage.getItem('email');
document.getElementById('phone').value=sessionStorage.getItem('phone_number');


document.getElementById('pix3').addEventListener('change',function(){
  const reader =new FileReader();

  const storage = getStorage();

// Create a reference to 'mountains.jpg'
const mountainsRef = ref(storage, 'blank-pic.png');

// Create a reference to 'images/mountains.jpg'
const mountainImagesRef = ref(storage, 'assests/blank-pic.png');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name;           // true
mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 




  reader.addEventListener('load',function(){
    
    document.getElementById('pix').setAttribute('src',reader.result)
    document.getElementById('pix2').setAttribute('src',reader.result)


    sessionStorage.setItem('profilePic',reader.result)
  })

  reader.readAsDataURL(this.files[0])
})

document.getElementById('errMsg').style.backgroundColor = "#30E3CA";


if(sessionStorage.getItem('profilePic'))
document.getElementById('pix2').setAttribute('src',sessionStorage.getItem('profilePic'))
else{
document.getElementById('pix2').setAttribute('src','assests/blank-pic.png')

}



for(let i=0;i<document.getElementsByClassName('input-field').length;i++)
document.getElementsByClassName('input-field')[i].style.backgroundColor=localStorage.getItem('secondColor')

document.getElementById('myAccount').style.color = localStorage.getItem("bodyColor");
document.getElementsByClassName('fa-solid fa-user')[0].style.color=localStorage.getItem("bodyColor");


document.getElementById("cancelBtn").addEventListener('click',function(){
  document.getElementsByClassName('wrapper')[0].classList.remove('open')  
  document.getElementById('confirmNote').style.display='none'
  document.getElementById('d').style.display='none'

})

