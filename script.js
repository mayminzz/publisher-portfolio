//toggle
const gnbToggleBtn = document.querySelector(".toggle");
const gnb = document.querySelector(".gnb");
const gnbLists = gnb.querySelectorAll("li");

gnbToggleBtn.addEventListener("click", () => {
  gnbToggleBtn.classList.toggle("active");
  gnb.classList.toggle("active");
});

gnbLists.forEach((gnbList) => {
  gnbList.addEventListener("click", () => {
    gnb.classList.remove("active");
    gnbToggleBtn.classList.remove("active");
  });
});

//home
const leftText = document.querySelectorAll(".left_txt");
const rightText = document.querySelector(".right_txt");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  leftText.forEach((item) => {
    item.style.transform = ` translateX(${scrollY}px)`;
  });
  rightText.style.transform = ` translateX(-${scrollY}px)`;
});

//Bright Version
const toggleBtn = document.querySelector(".toggle_button");
const modeTxt = document.querySelector(".bright_version > span");
const body = document.querySelector("body");
const arrows = document.querySelectorAll("#project > a img");

const arrowChange = () => {
  arrows.forEach((arrow) => {
    const dataImg = arrow.dataset.img;
    const dataImg2 = arrow.dataset.img2;
    if (modeTxt.innerText === "Dark Mode") {
      arrow.setAttribute("src", dataImg);
    } else {
      arrow.setAttribute("src", dataImg2);
    }
  });
};

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  container.classList.toggle("bright");
  body.classList.toggle("bright");
  if (modeTxt.innerText === "Light Mode") {
    modeTxt.innerText = "Dark Mode";

  } else {
    modeTxt.innerText = "Light Mode";

  }
  arrowChange();
});

const goToTopBtn = document.querySelector("#go_to_top");

window.addEventListener("scroll", () => {
  let scrollNum = window.scrollY;
  if (scrollNum < 477) {
    goToTopBtn.classList.remove("visible");
  } else {
    goToTopBtn.classList.add("visible");
  }
});

//project
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//example
const Btns = document.querySelectorAll(".example_category li");
const tabs = document.querySelectorAll(".example_content");

Btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const targetClass = e.currentTarget.querySelector("a").getAttribute("href");

    Btns.forEach((btn) => {
      btn.classList.remove("on");
    });

    e.currentTarget.classList.add("on");

    tabs.forEach((tab) => {
      if (tab.classList.contains(targetClass)) {
        tab.style.display = "flex";
      } else {
        tab.style.display = "none";
      }
    });
  });
});

//wow.js
var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});
wow.init();
