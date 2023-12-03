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
