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
const products = [
  {
    id: 1,
    image: "../assets/images/project1.png",
    name: "Kitchn Landing Page",
    detail: "This is a landing page using Html5,Scss,javascript.",
    link: "https://abhirwt123.github.io/Kitchn_Landing_page/",
  },
  {
    id: 2,
    image: "../assets/images/rb-logo.jpg",
    name: "Resume Genratore",
    detail:
      "This is a  html,css and javascript project made during the session of web devlopment course.",
    link: "https://abhirwt123.github.io/Resume-genrator/",
  },
  {
    id: 3,
    image: "../assets/images/Project-manager-calendar-apps.png",
    name: "Calender",
    detail:
      "This is a javascript project made during the session of web devlopment course.",
    link: "https://abhirwt123.github.io/Calender/",
  },
  {
    id: 4,
    image: "../assets/images/notes.jpg",
    name: "Notes Taking Project",
    detail: "This is a landing page using Html5,Scss,javascript.",
    link: "https://abhirwt123.github.io/Notes_taking_project/",
  },
  {
    id: 5,
    image: "../assets/images/ImageGallery.jpg",
    name: "Image Gallery Project",
    detail:
      "In this project i used html, Sass and javascript and a pexels API for image render",
    link: "https://abhirwt123.github.io/Image_gallery/",
  },
  {
    id: 6,
    image: "../assets/images/starbucks.jpg",
    name: "Starbucks UI",
    detail:
      "In this project i used html, Sass and javascript and it is fully responsive for all devices",
    link: "https://abhirwt123.github.io/StarbucksUI/",
  },
];
// fetch products data from local json
const fetchProductsList = async () => {
  const parent = document.querySelector(".projects-info");

  products.forEach((list) => {
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
