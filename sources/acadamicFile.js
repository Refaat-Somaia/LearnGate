document.getElementById('acadamicFile').style.color = localStorage.getItem("bodyColor");
document.getElementsByClassName('fa-solid fa-file-lines')[0].style.color=localStorage.getItem("bodyColor");


document.getElementById('name').innerText=sessionStorage.getItem('fname')+' '+sessionStorage.getItem('lname')
document.getElementById('id').innerText=sessionStorage.getItem('id')
document.getElementById('gpa').innerText=sessionStorage.getItem('gpa')
document.getElementById('credits').innerText=sessionStorage.getItem('credits')
document.getElementById('status').innerText=sessionStorage.getItem('status')
document.getElementById('year').innerText=sessionStorage.getItem('year')
document.getElementById('specialization').innerText=sessionStorage.getItem('specialization')

