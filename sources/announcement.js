function createAnnouncement(author,announcement,subject,date){
    let e=document.createElement('div')
    e.classList.add('announcement')
    let e1=document.createElement('img')
    e1.setAttribute('src','./assests/1111.jpg')
    e.appendChild(e1)
    let e2=document.createElement('div')
    e2.classList.add('info')
    e1=document.createElement('p')
    e1.innerText='From: '+author
    e2.appendChild(e1)

   
    e1=document.createElement('p')
    e1.innerText='Subject: '+subject
    e2.appendChild(e1) 
    e1=document.createElement('p')
    e1.innerText=announcement
    e2.appendChild(e1)

    e.appendChild(e2)
    e1=document.createElement('p')
    e1.innerText='Date: '+date
    e1.classList.add('date')

    e.appendChild(e1)


    document.getElementsByClassName('container')[0].appendChild(e)

}
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
let courses=[]
initializeApp(firebaseConfig)
const db = getFirestore()
const colRef = collection(db,'announcements')
getDocs(colRef)
 .then((snapshot)=>{
 snapshot.docs.forEach((doc)=>{
  createAnnouncement(doc.data().author,doc.data().announcement ,doc.data().subject,doc.data().date)})
})

document.getElementsByClassName('info')[0].addEventListener('click',function(){
    alert('fhdsjfh')
    createAnnouncement();
})