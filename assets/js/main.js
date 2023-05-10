// cdn script used to perform the typing effect 
var typed = new Typed("#typing", {
    strings: ["web developer", "abhishek rawat"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });

       // function for cursor animation

  var cursor = document.getElementById("cursor");
  document.onmousemove = function (e) {
    cursor.style.left = e.pageX - 25 + "px";
    cursor.style.top = e.pageY - 25 + "px";
    // cursor.style.display = "block";
  };

  AOS.init({
    offset: 200, 
    duration: 1000,
  });

  // popup function 

  let popup =document.querySelector("#popup");
  let sendBtn =document.querySelector(".send-message");
  let popupBtn=document.querySelector(".submit-btn");

  sendBtn.addEventListener("click" , function(e){
     e.preventDefault();
    setTimeout(() => {
      popup.style.display="block";
    }, 500);
  })

  popupBtn.addEventListener("click" , function(){
    popup.style.display="none";
  })

// function for menu bar

const menuIcon =document.querySelector(".menu");
const navbar =document.querySelector(".mobile-navbar");

menuIcon.addEventListener("click",function(){
  navbar.style.display="block";
  navbar.classList.add("mobile-fun")
})