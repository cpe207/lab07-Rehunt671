function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

const firstnameInput = document.querySelector("#first-name-input");
const lastnameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");
function removeMessageEvent(element) {
  element.onkeyup = () => {
    element.classList.remove("is-valid");
    element.classList.remove("is-invalid");
  };
}

removeMessageEvent(firstnameInput);
removeMessageEvent(lastnameInput);
removeMessageEvent(emailInput);
removeMessageEvent(passwordInput);

submitBtn.onclick = () => {
  let isValidFirstName = false;
  let isValidLastName = false;
  let isValidEmail = false;
  let isValidPassword = false;
  if (firstnameInput.value === "") {
    firstnameInput.classList.add("is-invalid");
  } else {
    firstnameInput.classList.add("is-valid");
    isValidFirstName = true;
  }
  if (lastnameInput.value === "") {
    lastnameInput.classList.add("is-invalid");
  } else {
    lastnameInput.classList.add("is-valid");
    isValidLastName = true;
  }
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isValidEmail = true;
  }

  if (passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    isValidPassword = true;
  }

  if (isValidFirstName && isValidLastName && isValidEmail && isValidEmail)
    alert("Registered successfully");
};
