"use strict";

const prevBtn = document.querySelector(".prevSlide");
const nextBtn = document.querySelector(".nextSlide");

if (document.querySelector(".startButton")) {
  document.querySelector(".startButton").onclick = () => {
    window.location.href = "/loginPage.html";
  };
}

if (document.querySelector(".prevPage")) {
  document.querySelector(".prevPage").onclick = () => {
    window.location.href = "/index.html";
  };
}

const registerForm = document.querySelector("#signUpForm");
const blurLayer = document.querySelector(".blurLayer");
const backToLoginArr = document.querySelectorAll(".backToLoginG");

if (document.querySelector("#loginPage .signUpBtn")) {
  document
    .querySelector("#loginPage .signUpBtn")
    .addEventListener("click", (e) => {
      e.preventDefault();
      //   console.log(e.target);
      registerForm.style.display = "flex";
      blurLayer.style.display = "block";
    });

  backToLoginArr.forEach((element) => {
    element.onclick = (e) => {
      e.preventDefault();
      blurLayer.style.display = "none";
      registerForm.style.display = "none";
    };
  });
}

const slides = document.querySelectorAll(".slides_wrapper .slide");

let currentSlide = 0;

// slides.forEach((element, index) => {
//   currentSlide += index;
// //   console.log(slides[1]);
//     prevBtn.addEventListener("click", () => {
//       currentSlide--;
//       slides[currentSlide].classList.toggle("show");
//     });

//     nextBtn.addEventListener("click", () => {
//       currentSlide++;
//       slides[currentSlide].classList.toggle("show");
//     });
// });
// console.log(currentSlide);

// let total = [1,2,3,4,5];
// for (let i = 0; i < total.length; i++) {

//    console.log(total);
// }
// let slide;
// const funct = () => {
//   slides.forEach((element) => {
//     slide = element;
//   });

//   prevBtn.addEventListener("click", () => {
//     currentSlide--;
//     if (currentSlide < 0) currentSlide = slides.length - 1;
//     slide.classList.remove("show");
//     slides[currentSlide].classList.toggle("show");
//     // slides[currentSlide - 1].classList.remove("show");
//   });

//   nextBtn.addEventListener("click", () => {
//     currentSlide++;
//     if (currentSlide >= slides.length) currentSlide = 0;
//     slide.classList.remove("show");
//     slides[currentSlide].classList.toggle("show");
//   });
//   console.log(slides);
// };
// funct();
