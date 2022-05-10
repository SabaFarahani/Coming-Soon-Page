const form = document.getElementById("form");
const eAddress = document.getElementById("email");
const message = document.getElementById("valMsg");
const valMsg = document.querySelector(".valMsg");

form.addEventListener("submit", (e) => {
  const validRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (eAddress.value.match(validRegex)) {
    valMsg.classList.add("valid");
    valMsg.classList.remove("invalid");
    message.innerHTML = "Valid Email Address!";

    return true;
  } else {
    valMsg.classList.add("invalid");
    valMsg.classList.remove("valid");
    message.innerHTML = "Invalid Email Address!";
    return false;
  }
});
