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

var mapLink = document.querySelector(".open-map");
var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".btn-close-map");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-show");
});

var buyLink = document.querySelectorAll(".btn-buy");
var buyPopup = document.querySelector(".add-cart-show");
var buyClose = document.querySelector(".btn-close-add");

buyLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.add("popup-show");
});


buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("popup-show");
});


