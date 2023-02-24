const contactForm = document.querySelector(".contact-form");
const userName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

function formValidator(event) {
  event.preventDefault();
  console.log("hello");

  // Validation rule for name.
  if (userName.value.trim().length > 0) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  // Validation rule for subject.
  if (subject.value.trim().length > 10) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  // Validation rule for email.
  if (emailValidator(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  // Validation rule for address.
  if (address.value.trim().length > 25) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
}

// Function that validates if the input is a email or not.
function emailValidator(email) {
  const regEx = /\S+@\S+\.\S+/;
  const macthingPatterns = regEx.test(email);
  return macthingPatterns;
}

document.title = "Contact Form";
contactForm.addEventListener("submit", formValidator);
