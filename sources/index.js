import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import{
    getFirestore , collection, getDocs
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js'
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js'

var hi="jfkls";
const firebaseConfig = {
    apiKey: "AIzaSyAqgPAy-kFiuhIkPFKwivhadnxB_uWXwpU",
    authDomain: "learngate-3a9bc.firebaseapp.com",
    projectId: "learngate-3a9bc",
    storageBucket: "learngate-3a9bc.appspot.com",
    messagingSenderId: "734755392167",
    appId: "1:734755392167:web:08ee132bdea0a4391fe982"
  }

  document.getElementById("logIn").addEventListener('click',function(){
    document.getElementById('errMsg').style.display="none";

    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    if(email==0 ||password==0){
   document.getElementById('errMsg').innerHTML='Please fill all fields';
   document.getElementById('errMsg').style.display="block";
        
    }
    else{

  let students=[]

  initializeApp(firebaseConfig)
  const db = getFirestore()
  const colRef = collection(db,'students')
  getDocs(colRef)
   .then((snapshot)=>{
   snapshot.docs.forEach((doc)=>{
    students.push({...doc.data(),id: doc.id})
   })
   for(let i=0;i<students.length;i++){
    if(students[i].email==email && students[i].password==password){
      sessionStorage.setItem("ID", students[i].id);
      sessionStorage.setItem("email", students[i].email);
        sessionStorage.setItem("fname", students[i].first_name);
        sessionStorage.setItem("lname", students[i].last_name);
        sessionStorage.setItem("faculty", students[i].faculty);
        sessionStorage.setItem("gpa", students[i].gpa);
        sessionStorage.setItem("year", students[i].year);
        sessionStorage.setItem("id", students[i].ID);
        sessionStorage.setItem("password", students[i].password);
        sessionStorage.setItem("credits", students[i].credits);
        sessionStorage.setItem("phone_number", students[i].phone_number);
        sessionStorage.setItem("status", students[i].status);
        sessionStorage.setItem("specialization", students[i].specialization);
        sessionStorage.setItem('php','assests/1111.jpg');
        window.location.href = 'home.html'
        break;
      }

   }

   })

   let m=[]
   const managaresRef = collection(db,'managers')
  getDocs(managaresRef)
   .then((snapshot)=>{
   snapshot.docs.forEach((doc)=>{
    m.push({...doc.data(),id: doc.id})
   })
   for(let i=0;i<m.length;i++){
    if(m[i].email==email && m[i].password==password){
      sessionStorage.setItem("ID", m[i].id);
      sessionStorage.setItem("email", m[i].email);
        sessionStorage.setItem("fname", m[i].first_name);
        window.location.href = 'managemnt.html'
        break;
      }
    else{
      document.getElementById('errMsg').innerHTML='User was not found';
      document.getElementById('errMsg').style.display="block";
      document.getElementById('pic').setAttribute('src','assests/not-found.png');
      document.getElementById('pic').classList.add('img')
      
    }
   }

   })
   
}
  })

  /* document.getElementById("logIn").addEventListener('click',function(){
    const auth = getAuth();
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert(user.uid);
    const q = query(citiesRef, where(user.uid, "==", "id"));
    onSnapshot(q,(snapshot)=>{
        let students[i]=[]
        snapshot.docs.forEach((doc)=>{
            students[i].push({...doc.data(),id: doc.id})
        })
    })

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

   })*/
