const input = document.querySelector(".input");
const error = document.querySelector(".error");

input.addEventListener("click", (e) => {
  if (input.value == "") {
    input.style.borderColor = "red";
    error.classList.add("show");
  } else {
    input.style.borderColor = "gray";
    error.classList.remove("show");
  }
});
