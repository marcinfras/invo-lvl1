/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

const paymentBtn = document.querySelector(".card__btn");

paymentBtn.addEventListener("click", () => {
  if (document.querySelector(".card__btn .loader")) return;

  const loader = document.createElement("div");
  loader.className = "loader";
  paymentBtn.textContent = "";
  paymentBtn.appendChild(loader);
});
