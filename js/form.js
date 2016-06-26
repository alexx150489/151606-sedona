var form = document.querySelector("form");
var tel = form.querySelector("[type=tel]");
var email = form.querySelector("[type=email]");
var success = document.querySelector(".modal-form__success");
var closeSuccess = document.querySelector(".main-form__success-button");
var failure = document.querySelector(".modal-form__failure");
var closeFailure = document.querySelector(".main-form__failure-button");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  success.classList.add("modal-form__success-show");
});

closeSuccess.addEventListener("click", function(event) {
  event.preventDefault();
  success.classList.remove("modal-form__success-show");
}

form.addEventListener("submit", function(event) {
if (!tel.value || !email.value) {
event.preventDefault();
failure.classList.add("modal-form__failure-show");
}
});


closeFailure.addEventListener("click", function(event) {
  event.preventDefault();
  failure.classList.remove("modal-form__failure-show");
}











