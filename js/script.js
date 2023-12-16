const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errorMsg = document.getElementById("err-msg");

btn.addEventListener("click", navToggle);
linkForm.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();

  if (input.value === "") {
    errorMsg.innerHTML = "Please enter something";
    input.classList.add("border-red");
  } else if (!validURL(input.value)) {
    errorMsg.innerHTML = "Please enter valid URL";
    input.classList.add("border-red");
  } else {
    errorMsg.innerHTML = "";
    input.classList.remove("border-red");
    alert("Success");
  }
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i",
  );
  return !!pattern.test(str);
}
