// if (sessionStorage.getItem('fname') === null) {
//     window.location.href = 'index.html';
// }

function changeTheme(bodybg,bodyColor,secondColor,sidePanelColor){
    localStorage.setItem("bodybg",bodybg);
    localStorage.setItem("sidePanelColor",sidePanelColor);
    localStorage.setItem("bodyColor",bodyColor);
    localStorage.setItem("secondColor",secondColor);
    localStorage.setItem("diagramOpacity", 1);

    location.reload()
}


$("#closePopup").click(function () {
    if($(".popup").css("display")=='block')
    $(".popup").animate({ top: '700px' }, 400, function () {
        $(".popup").css("display", "none");
        $(".popup").animate({ top: '50px' },100)
    });
 
});

$("#infoBtn").click(function () {
    if($(".stats").css("display")=='none'){
        $(".stats").css("display", "block")
        $(".stats").animate({ scale:1.1 },300)
        $(".stats").animate({ scale:1 },200)}
        else{
            $(".stats").animate({ scale:1.1 },200)

        $(".stats").animate({ scale:0 },300)
        setTimeout(function(){  
    $(".stats").css("display", "none")
},500);}
    }
);
 
;



// document.getElementById('infoBtn').addEventListener('click',function(){
//     if(document.getElementsByClassName('stats')[0].style.display!='block')
//     document.body.classList.add('openInfo')

// else
// document.body.classList.remove('openInfo')

// })


if (localStorage.getItem('bodybg') == "#171717") {
    document.getElementById('nameTxt').style.color='#DDDDDD'
    document.getElementById('faculty').style.color='#DDDDDD'
}


if(sessionStorage.getItem('profilePic'))
document.getElementById('pix').setAttribute('src',sessionStorage.getItem('profilePic'))
else{
document.getElementById('pix').setAttribute('src','assests/blank-pic.png')
}

document.body.style.backgroundColor = localStorage.getItem("bodybg");
document.getElementById("search").style.backgroundColor = localStorage.getItem("secondColor");
document.getElementById("popup").style.backgroundColor = localStorage.getItem("secondColor");
document.getElementsByClassName("stats")[0].style.backgroundColor = localStorage.getItem("secondColor");
document.body.style.color = localStorage.getItem("bodyColor");

if(localStorage.getItem('tasksDone')!=null)
document.getElementById('tasksDoneTxt').innerHTML+=" "+localStorage.getItem('tasksDone')
if(localStorage.getItem('totalTimer')!=null){


    document.getElementById('timeTotalTxt').innerHTML+=" "+localStorage.getItem('totalTimer')
}
document.getElementById("resetStatsBtn").addEventListener('click',function(){
    localStorage.setItem('tasksDone',0); 
    localStorage.setItem('totalTimer',"0 h 0 m "); 
    document.getElementById('timeTotalTxt').innerHTML="<i class='fa-solid fa-clock-rotate-left'></i>Total productivity time:0 h 0 m"
    document.getElementById('tasksDoneTxt').innerHTML="<i style='font-size: 4vh; color: inherit; margin-right: -10px;' class='fa-regular fa-square-check '></i> Completed tasks: 0"

})


document.getElementsByClassName('side-bar')[0].style.backgroundColor = localStorage.getItem("sidePanelColor");
for (let i = 0; i < document.getElementsByClassName("side-btn").length; i++){
    document.getElementsByClassName("side-btn")[i].style.backgroundColor = localStorage.getItem("sidePanelColor");
    // document.getElementsByClassName("side-btn")[i].style.color = localStorage.getItem("bodyColor");

}

document.getElementById('nameTxt').innerHTML = sessionStorage.getItem("fname") + " " + sessionStorage.getItem("lname");
document.getElementById('faculty').innerHTML = sessionStorage.getItem("id");

/// side btns
document.getElementById('myCourses').addEventListener('click', function () {
    window.location.href = 'myCourses.html';

})
document.getElementById('myAccount').addEventListener('click', function () {
    window.location.href = 'myAccount.html';

})
document.getElementById('home').addEventListener('click', function () {
    window.location.href = 'home.html';

})
document.getElementById("theme").addEventListener('click', function () {
    document.getElementById('popup').style.display = 'block';
})
document.getElementById("themeIcon").addEventListener('click', function () {
    document.getElementById('popup').style.display = 'block';
})
document.getElementById("grades").addEventListener('click', function () {
    window.location.href = 'grades.html';
});
document.getElementById("acadamicFile").addEventListener('click', function () {
    window.location.href = 'acadamicFile.html';
});
document.getElementById("newsBtn").addEventListener('click', function () {
    window.location.href = 'announcement.html';
});
document.getElementById("logOut").addEventListener('click', function () {
    sessionStorage.clear();
    window.location.href = 'index.html';
});


///  themes change


document.getElementById("darkModeBtn").addEventListener('click', function () {
    if (localStorage.getItem('bodybg') != "#171717") {
        localStorage.setItem("bodybg", "#171717");
        localStorage.setItem("secondColor", "#272829");
        localStorage.setItem("sidePanelColor", "#222831");
        localStorage.setItem("diagramOpacity", 0.3);
        location.reload();


    }
    else {
        localStorage.setItem("diagramOpacity", 1);
        switch (localStorage.getItem('bodyColor')) {
        case "#3F72AF":
            changeTheme("#eaeaea", "#3F72AF", "#ffffff", "#F9F7F7")
            break;

        case "#176B87":
            changeTheme("#DAFFFB", "#176B87", "#64CCC5", "#E4F9F5")

            break;
        case "#22668D":
            changeTheme("#FFCC70", "#22668D", "#FFFADD", "#8ECDDD")

            break;
        case "#F875AA":
            changeTheme("#FFDFDF", "#F875AA", "#FFF6F6", "#AEDEFC")

            break;
        case "#EB6440":
            changeTheme("#D6E4E5", "#EB6440", "#EFF5F5", "#497174")
            break;
        case "#FFD369":
            changeTheme("#222831", "#FFD369", "#393E46", "#DDDDDD")

            break;
        case "#D2DE32":
            changeTheme("#FFFFDD", "#D2DE32", "#61A3BA", "#A2C579")
            break;

        case "#F05454":
            changeTheme("#E8E8E8", "#F05454", "#30475E", "#3C486B")
            break;
        case "#0E5E6F":
            changeTheme("#F2DEBA", "#0E5E6F", "#FFEFD6", "#3A8891")
            break;
        case "#7743DB":
            changeTheme("#F7EFE5", "#7743DB", "#FFFBF5", "#C3ACD0")
            break;
            case "#5C4B99":
                changeTheme("#E5BEEC", "#5C4B99", "#FDE2F3", "#917FB3")
                break;
                case "#F99417":
                    changeTheme("#E8E2E2", "#F99417", "#F5F5F5", "#3C486B")

                    break;


}
    }

})

document.getElementById("themeBlue").addEventListener('click', function () {
    changeTheme("#eaeaea", "#3F72AF", "#ffffff", "#F9F7F7")

})
document.getElementById("themeCyan").addEventListener('click', function () {
    changeTheme("#DDF0C2", "#0EB29A", "#F5FDFF", "#444444")

})

document.getElementById("themePink").addEventListener('click', function () {
    changeTheme("#F0F0F0", "#F875AA", "#F6F6F6", "#FFE2E2")


})
document.getElementById("themeGreen").addEventListener('click', function () {
    changeTheme("#D6E4E5", "#EB6440", "#EFF5F5", "#497174")
})
document.getElementById("themeGrey").addEventListener('click', function () {
    changeTheme("#E8E2E2", "#F99417", "#F5F5F5", "#3C486B")
})
document.getElementById("themeLime").addEventListener('click', function () {
    changeTheme("#FFF1C1", "#78B7BB", "#FBFBFB", "#808B97")
})
document.getElementById("themeRed").addEventListener('click', function () {
    changeTheme("#F7F5F2", "#FF5959", "#FFFFFF", "#676FA3")
    
})
document.getElementById("themeNave").addEventListener('click', function () {
    changeTheme("#F4E7D3", "#0881A3", "#F9F8ED", "#1F4E5F")
})
document.getElementById("themePurble").addEventListener('click', function () {
   changeTheme("#F7EFE5", "#7743DB", "#FFFBF5", "#C3ACD0")
})
