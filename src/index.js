let cardFooterButton = document.querySelector(".card-footer-button");
let cardFooterSocial = document.querySelector(".card-footer-social-expanded");

cardFooterButton.addEventListener("click", () => {
  cardFooterSocial.classList.toggle("hidden");
});
