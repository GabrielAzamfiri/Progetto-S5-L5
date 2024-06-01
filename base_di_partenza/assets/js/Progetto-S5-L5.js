// grazie alla variabile fuori mi resistro il momento dello scroll a piu di 300px
//cosi che solo in quel caso faccio partire l'animaizone di ritorno al colore originale
let scrolPage = 0;
window.onscroll = function () {
  if (window.scrollY >= 300) {
    document.querySelector(".navBar").classList.remove("animationToSenape");
    document.querySelector(".navBar button").classList.remove("aminationToBlack");

    document.querySelector(".navBar").classList.add("animationToWhite");
    document.querySelector(".navBar button").classList.add("aminationToGreen");
    scrolPage = window.scrollY;
  } else if (window.scrollY < 300 && scrolPage >= 300) {
    document.querySelector(".navBar").classList.remove("animationToWhite");
    document.querySelector(".navBar button").classList.remove("aminationToGreen");

    document.querySelector(".navBar").classList.add("animationToSenape");
    document.querySelector(".navBar button").classList.add("aminationToBlack");
  }
};

const m = document.getElementsByTagName("g");
const arrayM = [...m];
const arrayMzero = arrayM.filter((element) => element.getAttribute("opacity") === "0");
console.log(arrayMzero.length);
const functionM = setInterval(() => {
  const random = Math.floor(Math.random() * arrayMzero.length);

  if (arrayMzero[random].getAttribute("opacity") === "0") {
    arrayMzero[random].setAttribute("opacity", 1);
  } else {
    arrayMzero[random].setAttribute("opacity", 0);
  }
}, 20);
