let cardFooterButtons = document.querySelectorAll(".card-footer-button");
let cardFooterSocialAdditional = document.querySelector(
  ".card-footer-social-expanded"
);

cardFooterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cardFooterSocialAdditional.classList.toggle("hidden");
    button.classList.toggle("top-8px");
  });
});
