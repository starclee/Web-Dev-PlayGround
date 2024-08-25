// Hands-On Practices
const form = document.querySelector("#form");
const nameIn = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const submit = document.querySelector("button");
const users = document.querySelector(".users");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameIn["value"] === "" || email["value"] === "") {
    msg.innerHTML = "Please enter all the fields";
    msg.classList.add("errorMsg");
    setTimeout(() => {
      msg.innerHTML = "";
      msg.classList.remove("errorMsg");
    }, 3000);
  } else {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${nameIn.value} : ${email.value}`));
    users.appendChild(li);

    // clearFields
    nameIn.value = "";
    email.value = "";
    msg.classList.add("successMsg");
    msg.innerHTML = "User added in the list successfully...";
    setTimeout(() => {
      msg.innerHTML = "";
      msg.classList.remove("successMsg");
    },5000);
  }
}
