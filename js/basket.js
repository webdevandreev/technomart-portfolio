const basketOpen = document.querySelectorAll(".modal-buy");
const popupBasket = document.querySelector(".modal-basket");
const closeBasket = popupBasket.querySelector(".modal-close");

basketOpen.forEach(basketOpen =>
basketOpen.addEventListener("click", function () {                        
  popupBasket.classList.add("modal-show");
}));

closeBasket.addEventListener("click", function () {
  popupBasket.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupBasket.classList.contains("modal-show")) {
      popupBasket.classList.remove("modal-show");
    }
  }
});