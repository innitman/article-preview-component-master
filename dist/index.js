let cardFooterButton = document.querySelector(".card-footer-button");
let cardFooterUnexpanded = document.querySelector(".card-footer-not-expanded");
let cardFooterSocial = document.querySelector(".card-footer-social-expanded");

cardFooterButton.addEventListener("click", () => {
  cardFooterUnexpanded.classList.toggle("hidden");
  cardFooterSocial.classList.toggle("hidden");
});
