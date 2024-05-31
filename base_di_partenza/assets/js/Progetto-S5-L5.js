window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 300) {
    document.querySelector(".navBar").style.backgroundColor = "white";
    document.querySelector(".navBar button").style.backgroundColor = "green";
  } else {
    document.querySelector(".navBar").style.backgroundColor = "#ffc017";
    document.querySelector(".navBar button").style.backgroundColor = "black";
  }
});
