import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import{
    getFirestore,updateDoc ,doc, collection, getDocs, query, where,setDoc,deleteDoc  
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

    initializeApp(firebaseConfig);
    var percentVal;
    var fileItem;
    var fileName;

    function getFile(e){
      fileItem=e.target.files[0];
      fileName=fileItem.name;
      alert(fileItem.name);
    }

    function uploadImage(){
      let storageRef=storage().ref('imgs/'+fileName);
      let uploadTask=storageRef.put(fileItem)

      uploadTask.on('state_changed',(snapshot)=>{
        console.log(snapshot)
        percentVal=math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100)
        console.log(percentVal)
      
      })
    }
