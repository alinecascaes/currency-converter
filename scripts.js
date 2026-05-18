const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

amount.addEventListener("input", () => {
  const hasRegex = /\D+/g;

  amount.value = amount.value.replace(hasRegex, "");
});

form.onsubmit = (e) => {
  e.preventDefault();
};
