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
