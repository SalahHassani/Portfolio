"use strict";

const tabContents = document.querySelectorAll(".tabContent");
const tabLinks = document.querySelectorAll(".tabLinks");
const aboutCol2Box = document.querySelector(".aboutCol2");

aboutCol2Box.addEventListener("click", handleTabs);

function handleTabs(e) {
  e.preventDefault();

  const ele = e.target;

  if (!ele.closest(".tabLinks") && ele.closest(".activeLink")) return;

  tabLinks.forEach((el) => {
    el.classList.remove("activeLink");
  });
  tabContents.forEach((el) => {
    el.classList.remove("activeTab");
  });

  ele.classList.add("activeLink");

  const id = ele.innerText;

  document.querySelector(`#${id}`).classList.add("activeTab");
}

const menuBar = document.querySelector(".navIt");
const nav = document.querySelector(".navIt nav ul");

menuBar.addEventListener("click", function (e) {
  e.preventDefault();

  if (!e.target.closest(".fas")) return;

  if (e.target.closest(".fas2")) {
    console.log("hiii");
    nav.style.width = "250px";
  }
  if (e.target.closest(".fas1")) nav.style.width = "0";
});
