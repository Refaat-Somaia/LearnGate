function createCourse(name, id, credits) {
  var d = document.createElement('div');

  var d1 = document.createElement('p');
  d1.innerText = 'Course: ' + name;
  d.appendChild(d1)
  d1 = document.createElement('p');
  d1.innerText = 'Credits: ' + credits;
  d.appendChild(d1);
  d1 = document.createElement('p');
  d1.innerText = 'Id: ' + id;
  d.appendChild(d1);


  d.classList.add('announcement')

  document.getElementsByClassName('container')[0].appendChild(d);
}






import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import {
  getFirestore, updateDoc, doc, collection, getDocs, query, where, setDoc, deleteDoc
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js'
import { getStorage, ref, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";




const firebaseConfig = {
  apiKey: "AIzaSyAqgPAy-kFiuhIkPFKwivhadnxB_uWXwpU",
  authDomain: "learngate-3a9bc.firebaseapp.com",
  projectId: "learngate-3a9bc",
  storageBucket: "learngate-3a9bc.appspot.com",
  messagingSenderId: "734755392167",
  appId: "1:734755392167:web:08ee132bdea0a4391fe982"
}
let courses = []
let studentsIds = []
initializeApp(firebaseConfig)
const db = getFirestore()
var colRef = collection(db, 'courses')
getDocs(colRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      courses.push({ ...doc.data(), id: doc.id })
      createCourse(doc.data().title, doc.data().id, doc.data().credits)
      let e = document.getElementsByClassName("announcement")
      for (let i = 0; i < e.length; i++) {
        e[i].addEventListener('click', function () {
          studentsIds = []
          document.getElementById('chaptersList').innerHTML=null
          document.getElementById('studentsList').innerHTML = null
          showStudentInfo(i)
          document.getElementsByClassName('popup')[0].style.display = 'block'
          document.getElementById('title').value = courses[i].title
          document.getElementById('id').value = courses[i].id
          showChapters(courses[i].title)

          

        })

      }


    })
  }
  )



function showChapters(courseTitle){

  const storage = getStorage();
  const listRef = ref(storage, 'chapters/IT');

  listAll(listRef)
            .then((res) => {
              let j = 0
              res.prefixes.forEach((folderRef) => {
                listAll(folderRef).then((res) => {
                  if ( courseTitle == folderRef.name)
                    res.items.forEach((itemRef) => {
                      getDownloadURL(ref(storage, 'chapters/IT' + '/' + folderRef.name + '/' + itemRef.name))
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
                          document.getElementById('chaptersList').innerHTML += `<li>` + itemRef.name + `</li>`

                        })
                        .catch((error) => {
                          alert(error)

                          // Handle any errors
                        });


                      // All the items under listRef.
                    });


                }).catch((error) => {
                  alert(error)
                  // Uh-oh, an error occurred!
                });

              });

            }).catch((error) => {
              alert(error)
              // Uh-oh, an error occurred!
            });
}

async function showStudentInfo(index) {
  colRef = collection(db, 'student_courses')

  // alert(document.getElementById('id').value)
  var q = query(colRef, where("course_id", "==", Number(document.getElementById('id').value)));
  var querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    studentsIds.push(doc.data().student_id)


  });
  console.log(studentsIds)


  colRef = collection(db, 'students')
  getDocs(colRef)

    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        for (let i = 0; i < studentsIds.length; i++) {
          if (doc.data().id == studentsIds[i]) {
            document.getElementById('studentsList').innerHTML += `<li>` + doc.data().first_name + ' ' + doc.data().last_name + `</li>`
            break;
          }
        }
      }
      )
    })


}

var saveFlag = false



document.getElementById('searchBtn').addEventListener('click', function () {
  // alert(document.getElementById('search').value)
  let e1 = document.getElementById('search').value

  let e = document.getElementsByClassName("announcement")
  for (let i = 0; i < e.length; i++) {
    let e3 = e[i].children[1].innerText.substring(6)


    if (e1 == "") {
      for (let i = 0; i < e.length; i++)
        e[i].style.display = 'block'
    }
    else if (e3.toUpperCase() != e1.toUpperCase())
      e[i].style.display = 'none'
  }

})

document.getElementById('registerBtn').addEventListener('click', function () {
  registerNewStudent();
})


$("#closePopup").click(function () {
  if ($(".popup").css("display") == 'block')
    $(".popup").animate({ top: '700px' }, 300, function () {
      $(".popup").css("display", "none");
      $(".popup").animate({ top: '50px' }, 100)

    });
})


