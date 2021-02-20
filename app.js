const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

let formEntry = [];
const addEntry = (ev) => {
  ev.preventDefault();
  let entry = {
    id: Date.now(),
    fullname: document.getElementById("fname").value,
    mobilenumber: document.getElementById("mnumber").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
  };
  formEntry.push(entry);
  document.forms[0].reset();
  // document.querySelector("form").reset();
  console.log("added", { formEntry });
  localStorage.setItem("entryList", JSON.stringify(entry));
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form-btn").addEventListener("click", addEntry);
});
