const write = document.querySelector(".write-link");
const popup = document.querySelector(".modal");
const popupClose = popup.querySelector(".modal-close");
const name = popup.querySelector("[name=name]");
const form = popup.querySelector(".modal-form");
const email = popup.querySelector(".write-mail");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

write.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

   if (storage) {
    name.value = storage;
     email.focus();
  } else {
    name.focus();
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    evt.preventDefault();
  } else {
    localStorage.setItem("login", name.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
