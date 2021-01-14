/*
:::::
  Horizontal scrolling Gallery Animation
*/

var container = document.getElementById('container');
var flexBox = document.getElementById('flex-box');
var leftBtn = document.getElementById('left-btn');
var rightBtn = document.getElementById('right-btn');
var sideBar = document.getElementById('sideBar');
var body = document.getElementById('main');
var inner = document.createElement('div');

inner.innerHTML =   '<img src="Assets/images/pexels-cottonbro-4761352.jpg">' +
                    '<img src="Assets/images/pexels-cottonbro-4761352.jpg">' +
                    '<img src="Assets/images/pexels-cottonbro-4761352.jpg">' +
                    '<img src="Assets/images/pexels-cottonbro-4761352.jpg">' +
                    '<img src="Assets/images/pexels-cottonbro-4761352.jpg">' +
                    '<img src="Assets/images/pexels-cottonbro-4761352.jpg">' +
                    '<img src="Assets/images/pexels-cottonbro-4761352.jpg">' +
                    '<img src="Assets/images/pexels-cottonbro-4761352.jpg">' +
                    '<img src="Assets/images/pexels-cottonbro-4761352.jpg">' +
                    '<img src="Assets/images/pexels-cottonbro-4761352.jpg">' +
                    '<img src="Assets/images/pexels-cottonbro-4761352.jpg">' +
                    '<img src="Assets/images/pexels-cottonbro-4761352.jpg">' +
                    '<img src="Assets/images/pexels-cottonbro-4761352.jpg">' +
                    '<img src="Assets/images/pexels-cottonbro-4761352.jpg">' ;

flexBox.classList.add('flex-box');

var scrollAnimation = function(val){
    for( var idx=1; idx<=10; idx++ ){
        setTimeout(function(){
            flexBox.scrollLeft = flexBox.scrollLeft + val + idx;
        }, 50*idx);
    }
}

leftBtn.onclick= function(){
    if( window.innerWidth > 900) {
        scrollAnimation(-50);
    } else {
        scrollAnimation(-30)
    }
};

rightBtn.onclick= function(){
    if( window.innerWidth > 900) {
        scrollAnimation(30);
    } else {
        scrollAnimation(10)
    }
};

var mobMenu = function(e){
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    sideBar.style.display = "block";
    sideBar.style.right = "0px"
}

body.onclick = function(){
    if(sideBar.style.display == "block" && sideBar.style.right == "0px"){
        sideBar.style.display = "none";
        sideBar.style.right = "-100px"
    } else {
        return false;
    }
}



// window.addEventListener('click', function(){
//     if(sideBar.style.display == "block" && sideBar.style.right == "0px"){
//         sideBar.style.display = "none";
//         sideBar.style.right = "-100px"
//     } else {
//         return false;
//     }
    
//     sideBar.style.display = "none";
//     sideBar.style.right = "-100px";
//     console.log(true);
// });

window.addEventListener('scroll', function(){
    // console.log(inner.scrollWidth)
});

flexBox.appendChild(inner);
container.appendChild(flexBox);