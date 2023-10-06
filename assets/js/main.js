let popup = document.querySelector("#popup");
let sendBtn = document.querySelector(".send-message");
let popupBtn = document.querySelector(".submit-btn");
const header = document.getElementById("header");
// cdn script used to perform the typing effect
var typed = new Typed("#typing", {
  strings: ["web developer", "abhishek rawat"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
// function for section ainamiton
AOS.init({
  offset: 200,
  duration: 1000,
});
// popup function
sendBtn.addEventListener("click", function (e) {
  e.preventDefault();
  setTimeout(() => {
    popup.style.display = "block";
  }, 500);
});
popupBtn.addEventListener("click", function () {
  popup.style.display = "none";
});
// function for menu bar
const menuIcon = document.querySelector(".menu");
const navbar = document.querySelector(".mobile-navbar");
const navbarItems = document.querySelectorAll(".mobile-navbar ul li");
menuIcon.addEventListener("click", function () {
  navbar.style.transform = "translateX(0)";
});
// function for remove the menu

const removeMenu = document.querySelector(".remove-menu");
removeMenu.addEventListener("click", () => {
  navbar.style.transform = "translateX(-100%)";
});
navbarItems.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.style.transform = "translateX(-100%)";
  });
});

// header
window.addEventListener("scroll",()=>{

  if(window.scrollY > 500){
    header.classList.add("header-fixed")

  }else{
    header.classList.remove("header-fixed")
  }
})

