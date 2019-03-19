
// FIXME: работает наполовину
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

// FIXME: НЕ работает
// var buttonDelivery = document.querySelector(".btn-delivery");
// var buttonGuarantee = document.querySelector(".btn-guarantee");
// var buttonCredit = document.querySelector(".btn-credit");
// var servicesDelivery = document.querySelector(".delivery");
// var servicesGuarantee = document.querySelector(".guarantee");
// var servicesCredit = document.querySelector(".credit");


//   buttonDelivery.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     servicesDelivery.classList.add("services-show");
//     servicesCredit.classList.remove("services-show");
//     servicesGuarantee.classList.remove("services-show");
//     buttonDelivery.classList.add("services-items-action");
//     buttonCredit.classList.remove("services-items-action");
//     buttonGuarantee.classList.remove("services-items-action");
//   });

//   buttonGuarantee.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     servicesGuarantee.classList.add("services-show");
//     servicesCredit.classList.remove("services-show");
//     servicesDelivery.classList.remove("services-show");
//     buttonGuarantee.classList.add("services-items-action");
//     buttonDelivery.classList.remove("services-items-action");
//     buttonCredit.classList.remove("services-items-action");
//   });

//   buttonCredit.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     servicesCredit.classList.add("services-show");
//     servicesGuarantee.classList.remove("services-show");
//     servicesDelivery.classList.remove("services-show");
//     buttonCredit.classList.add("services-items-action");
//     buttonDelivery.classList.remove("services-items-action");
//     buttonGuarantee.classList.remove("services-items-action");
//   });







