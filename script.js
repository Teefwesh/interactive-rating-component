const ratingBtn = document.querySelectorAll(".btn--rate-number");
const submitBtn = document.querySelector(".btn--submit");
const ratingCard = document.querySelector(".container");
const thankYouCard = document.querySelector(".container--illustration");
const rate = document.querySelector(".rate");
let ratingNumber = 0;

submitBtn.addEventListener("click", () => {
  ratingCard.classList.add("hidden");
  rate.textContent = ratingNumber;
  thankYouCard.classList.remove("hidden");
});

ratingBtn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    ratingBtn.forEach.call(ratingBtn, function (el) {
      el.classList.remove("active");
    });
    e.target.classList.add("active");

    ratingNumber = e.target.textContent;
  });
});
