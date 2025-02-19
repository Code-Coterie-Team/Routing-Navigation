const btnOpen = document.querySelector(".open");
const btnClose = document.querySelector(".close");
const classContainer = document.querySelector(".container");
const classCircle = document.querySelector(".circle");
const listMenu = document.querySelector(".listMenu");
const animatelistMenu = document.querySelectorAll(".listMenu ul > li");

btnOpen.addEventListener("click", (event) => {
  animatelistMenu.forEach((element) => {
    element.classList.remove("animaitionListMenuClose");
    element.classList.add("animaitionListMenuOpen");
  });
  classContainer.classList.remove("closeMenu");
  classCircle.classList.remove("rotateMenuClose");

  classContainer.classList.add("showMenu");
  classCircle.classList.add("rotateMenu");
});

btnClose.addEventListener("click", (event) => {
  animatelistMenu.forEach((element) => {
    element.classList.remove("animaitionListMenuOpen");
    element.classList.add("animaitionListMenuClose");
  });

  classContainer.classList.remove("showMenu");
  classCircle.classList.remove("rotateMenu");

  classContainer.classList.add("closeMenu");
  classCircle.classList.add("rotateMenuClose");
});
