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
    nav.style.width = "250px";
    // e.target.classList.add("hidden");
    console.log(e.target.getAttribute("class"));
  } else {
    nav.style.width = "0";
    // e.target.classList.remove("hidden");
  }

  // if (e.target.closest(".fas1"))
});

let activeMenuItem = document.querySelector(".activeBar");
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      activeMenuItem.classList.remove("activeBar");
      console.log(targetId);
      window.scrollTo({
        top:
          targetElement.offsetTop - document.querySelector("nav").offsetHeight,
        behavior: "smooth",
      });

      e.target.classList.add("activeBar");
      activeMenuItem = e.target;
    });
  });
});

// Sticky navigation
const navBar = document.querySelector(".navIt");

const about = document.querySelector("#about2");
const header = document.querySelector("#header");
const portfolio = document.querySelector("#portfolio");
const contact = document.querySelector("#contact");
const services = document.querySelector("#services");

const about2 = document.querySelector(".aboutNav");
const header2 = document.querySelector(".headerNav");
const portfolio2 = document.querySelector(".protfolioNav");
const contact2 = document.querySelector(".contactNav");
const services2 = document.querySelector(".servicesNav");

const initialCoordsOfAbout = about.getBoundingClientRect();
const initialCoordsOfServices = services.getBoundingClientRect();
const initialCoordsOfPortfolio = portfolio.getBoundingClientRect();
const initialCoordsOfContact = contact.getBoundingClientRect();
const initialCoordsOfHeader = header.getBoundingClientRect();

function handleStickyMenu(item) {
  activeMenuItem.classList.remove("activeBar");
  item.classList.add("activeBar");
  activeMenuItem = document.querySelector(".activeBar");
}

window.addEventListener("scroll", function () {
  if (window.scrollY < initialCoordsOfHeader.bottom) {
    navBar.classList.add("navIt");
    navBar.classList.remove("sticky");

    handleStickyMenu(header2);
  }
  if (window.scrollY > initialCoordsOfAbout.top) {
    navBar.classList.add("sticky");
    navBar.classList.remove("navIt");

    handleStickyMenu(about2);
  } else {
    navBar.classList.add("navIt");
    navBar.classList.remove("sticky");
  }

  if (window.scrollY > initialCoordsOfServices.top) {
    handleStickyMenu(services2);
  }

  if (window.scrollY > initialCoordsOfPortfolio.top) {
    handleStickyMenu(portfolio2);
  }

  if (window.scrollY > initialCoordsOfContact.top) {
    handleStickyMenu(contact2);
  }
});
