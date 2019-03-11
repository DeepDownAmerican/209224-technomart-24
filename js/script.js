var link = document.querySelector(".btn-letter");
var popup = document.querySelector(".feed-back-popup");
var close = popup.querySelector(".btn-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
});


var maplink = document.querySelector(".open-map");
var mappopup = document.querySelector(".map-popup");
var mapclose = mappopup.querySelector(".btn-close-map");

maplink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mappopup.classList.add("popup-show");
});

mapclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mappopup.classList.remove("popup-show");
});

// ТОВАР ДОБАВЛЕН В КОРЗИНУ
var buylink = document.querySelector(".btn-buy");
var buypopup = document.querySelector("add-cart-popup.");
var buyclose = buypopup.querySelector(".btn-close");

buylink.addEventListener("click", function (evt) {
  evt.preventDefault();
  buypopup.classList.add("popup-show");
});

buyclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buypopup.classList.remove("popup-show");
});

