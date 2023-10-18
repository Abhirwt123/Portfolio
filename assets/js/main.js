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
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
  }
});

// fetch products data from local json
const fetchProductsList = async () => {
  const parent = document.querySelector(".projects-info");
  const list = await fetch("../assets/json/projects.json");
  const res = await list.json();

  const allData = res.forEach((list) => {
    const createDom = `
     <img
       src=${list.image}
       alt=""
     />
     <div class="project-details">
       <p class="project-name">${list.name}</p>
       <p class="about-project">
         ${list.detail}
         <div class="project-link">
           <a href=${list.link} target="_blank"
             ><i class="fa fa-link" aria-hidden="true"></i
           ></a>
         </div>
       </p>
     </div>`;
    const projectElement = document.createElement("div");
    projectElement.classList.add("project-card");
    projectElement.innerHTML = createDom;
    parent.appendChild(projectElement);
  });
};
fetchProductsList();
