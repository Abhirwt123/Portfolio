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