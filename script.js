//toggle
const toggle = document.querySelector(".toggle");
const gnb = document.querySelector(".gnb");

toggle.addEventListener("click", () => {
  gnb.classList.toggle("active");
  toggle.classList.toggle("active");
});

//project slide
const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");
const slideContainer = document.querySelector(".slider_projects");
const slides = document.querySelectorAll(".slider_project");
const slideCount = slides.length;
let currentIndex = 0;

const pagerBtns = document.querySelectorAll(".project_pager  span");

const slideFnc = (i) => {
  slideContainer.style.transform = `translateX(${i * -25}%)`;
  slideContainer.classList.add(".aimated");
  currentIndex = i;
  for (let i = 0; i < pagerBtns.length; i++) {
    pagerBtns[i].classList.remove("on");
  }
  pagerBtns[i].classList.add("on");
};

pagerBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target);
    let pagerNum = e.target.getAttribute("data-index");
    slideFnc(pagerNum);
  });
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    slideFnc(currentIndex - 1);
  } else {
    slideFnc(slideCount - 1);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < slideCount - 1) {
    slideFnc(currentIndex + 1);
  } else {
    slideFnc(0);
  }
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
