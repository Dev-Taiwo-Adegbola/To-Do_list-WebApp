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

// User login details management using localStorage
const fullName = document.getElementById("FullName");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const userConfirmPass = document.getElementById("userConfirmPass");
const gender = document.getElementsByName("gender");
const signUpBtn = document.querySelector("#signUpForm .signUpBtn");

const SuccessfulSignup = document.querySelector(".SuccessfulSignup");
const SuccessfulLogin = document.querySelector(".SuccessfulLogin");

if (signUpBtn) {
  signUpBtn.onclick = (e) => {
    localStorage.setItem("fullName", fullName.value);
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userEmail", userEmail.value);
    localStorage.setItem("userPassword", userPassword.value);
    localStorage.setItem("userConfirmPass", userConfirmPass.value);

    const SuccessfulSignupBlur = document.querySelector(
      ".SuccessfulSignupBlur"
    );
    SuccessfulSignup.style.display = "flex";
    SuccessfulSignupBlur.style.display = "block";
  };
}

if (SuccessfulLogin) {
  SuccessfulLogin.onclick = () => (window.location.href = "/loginPage.html");
}

console.log(localStorage);

// manage User login

const loginUsernameEmail = document.getElementById("usernameEmail");
const loginPassword = document.getElementById("loginPassword");

const loginButton = document.querySelector(".loginButton");

if (loginButton) {
  loginButton.onclick = (e) => {
    e.preventDefault();
    // alert("hi");
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");
    const userpass = localStorage.getItem("userPassword");

    if (
      (userName === loginUsernameEmail.value ||
        userEmail === loginUsernameEmail.value) &&
      userpass === loginPassword.value
    ) {
      // console.log(userEmail, userName, userpass);
      window.location.href = "/taskPage.html";
    } else {
      loginUsernameEmail.value = "";
      loginPassword.value = "";
      loginUsernameEmail.style.borderBottomColor = "red";
      loginPassword.style.borderBottomColor = "red";

      const errorMessage = document.getElementById("errorContain");
      errorMessage.style.color = "red";
      errorMessage.style.fontSize = "13px";
      errorMessage.textContent =
        "Please enter valid details, either of the value is incorrect ";
    }
  };
}

// task page with users details
const userLabel = document.querySelector(".label h1");

const userFullName = localStorage.getItem("fullName");
const userFirstName = userFullName.slice(0, userFullName.indexOf(" ") + 1);

const addtaskSection = document.querySelector(".addtaskSection");
const taskBlurCOntainer = document.querySelector(".taskBlurCOntainer");

userLabel.textContent = `Dear ${userFirstName}`;

// let taskArr = new Map([]);
if (document.querySelector(".addTaskBtn")) {
  document.querySelector(".addTaskBtn").onclick = (e) => {
    e.preventDefault();
    addtaskSection.style.display = "block";
    taskBlurCOntainer.style.display = "block";
  };
  taskBlurCOntainer.onclick = () => {
    addtaskSection.style.display = "none";
    taskBlurCOntainer.style.display = "none";
  };
}

// TODO task management part

// const task = {
//   taskTitle: [],
//   taskDescription: [],
//   taskImpotance: [],
//   taskTimeStamp: [],
// };

const tasks = [];

const taskSection = document.querySelector("#taskPage .taskSection");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskImportance = document.getElementById("taskImportance");
// console.log(taskTimeStamp);

const createTaskBtn = document.querySelector(".createTaskBtn");

if (createTaskBtn) {
  createTaskBtn.onclick = (e) => {
    e.preventDefault();
    userLabel.textContent = "TODAY";
    document.querySelector(
      ".label p"
    ).textContent = `${new Date().toDateString()}`;

    // task.taskTitle.unshift(taskTitle.value);
    // task.taskDescription.unshift(taskDescription.value);
    // task.taskImpotance.unshift(taskImportance.value);
    // task.taskTimeStamp.unshift(taskTimeStamp);

    const taskWrapper = document.createElement("div");
    taskWrapper.setAttribute("class", "taskWrapper");
    taskSection.insertBefore(taskWrapper, taskSection.firstChild);
    // taskSection.prepend(taskWrapper);

    const taskDetails = document.createElement("div");
    taskDetails.setAttribute("class", "taskDetails");
    taskDetails.innerHTML = `
    <p> <span>Title: </span>${taskTitle.value}</p>
    <p> <span>Description: </span>${taskDescription.value}</p>
    <p> <span>Status: </span> Not Completed</p>
    `;
    taskWrapper.appendChild(taskDetails);

    const taskActions = document.createElement("div");
    taskActions.setAttribute("class", "taskActions");
    taskWrapper.appendChild(taskActions);

    const taskTimeStamp = document.createElement("p");
    taskTimeStamp.setAttribute("class", "taskTimeStamp");

    taskTimeStamp.textContent = `Time: ${new Date().toLocaleTimeString()}`;
    taskTimeStamp.style.fontSize = `13px`;
    taskActions.appendChild(taskTimeStamp);

    const taskEditBtn = document.createElement("button");
    taskEditBtn.setAttribute("class", "taskEditBtn");

    taskEditBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M395.8 39.6c9.4-9.4 24.6-9.4 33.9 0l42.6 42.6c9.4 9.4 9.4 24.6 0 33.9L417.6 171 341 94.4l54.8-54.8zM318.4 117L395 193.6l-219 219V400c0-8.8-7.2-16-16-16H128V352c0-8.8-7.2-16-16-16H99.4l219-219zM66.9 379.5c1.2-4 2.7-7.9 4.7-11.5H96v32c0 8.8 7.2 16 16 16h32v24.4c-3.7 1.9-7.5 3.5-11.6 4.7L39.6 472.4l27.3-92.8zM452.4 17c-21.9-21.9-57.3-21.9-79.2 0L60.4 329.7c-11.4 11.4-19.7 25.4-24.2 40.8L.7 491.5c-1.7 5.6-.1 11.7 4 15.8s10.2 5.7 15.8 4l121-35.6c15.4-4.5 29.4-12.9 40.8-24.2L495 138.8c21.9-21.9 21.9-57.3 0-79.2L452.4 17zM331.3 202.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128z"/></svg>`;
    taskActions.appendChild(taskEditBtn);

    const taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.setAttribute("class", "taskDeleteBtn");

    taskDeleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M164.2 39.5L148.9 64H299.1L283.8 39.5c-2.9-4.7-8.1-7.5-13.6-7.5H177.7c-5.5 0-10.6 2.8-13.6 7.5zM311 22.6L336.9 64H384h32 16c8.8 0 16 7.2 16 16s-7.2 16-16 16H416V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V96H16C7.2 96 0 88.8 0 80s7.2-16 16-16H32 64h47.1L137 22.6C145.8 8.5 161.2 0 177.7 0h92.5c16.6 0 31.9 8.5 40.7 22.6zM64 96V432c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V96H64zm80 80V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16zm96 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16zm96 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>`;
    taskActions.appendChild(taskDeleteBtn);

    taskDeleteBtn.onclick = () => {
      taskWrapper.remove();
    };

    const taskCompleteStatusBtn = document.createElement("button");
    taskCompleteStatusBtn.setAttribute("class", "taskCompleteStatusBtn");

    taskCompleteStatusBtn.innerHTML = `mark Completed <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M16 288c-11.4-19.8-11.4-44.2 0-64L108.3 64.2c11.4-19.8 32.6-32 55.4-32H348.3c22.9 0 44 12.2 55.4 32L496 224c11.4 19.8 11.4 44.2 0 64L403.7 447.8c-11.4 19.8-32.6 32-55.4 32H163.7c-22.9 0-44-12.2-55.4-32L16 288zm27.7-48c-5.7 9.9-5.7 22.1 0 32L136 431.8c5.7 9.9 16.3 16 27.7 16H348.3c11.4 0 22-6.1 27.7-16L468.3 272c5.7-9.9 5.7-22.1 0-32L376 80.2c-5.7-9.9-16.3-16-27.7-16l-184.6 0c-11.4 0-22 6.1-27.7 16L43.7 240zm319.6-36.7l-128 128c-6.2 6.2-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 297.4 340.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>`;
    taskActions.appendChild(taskCompleteStatusBtn);

    // tasks.unshift(taskWrapper.outerHTML);
    // // console.log(tasks);

    // localStorage.setItem("tasks", JSON.stringify(tasks));

    // const task = JSON.parse(localStorage.getItem("tasks"));

    // task.forEach((element, inde) => {
    //   taskSection.innerHTML += element;
    // });
    // console.log(localStorage);
    taskCompleteStatusBtn.onclick = () => {
      if (taskDetails.lastElementChild.innerText === "Status: Not Completed") {
        taskDetails.lastElementChild.innerText = `Status: Task Completed `;

        taskCompleteStatusBtn.innerHTML = `Unmark Completed <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M16 288c-11.4-19.8-11.4-44.2 0-64L108.3 64.2c11.4-19.8 32.6-32 55.4-32H348.3c22.9 0 44 12.2 55.4 32L496 224c11.4 19.8 11.4 44.2 0 64L403.7 447.8c-11.4 19.8-32.6 32-55.4 32H163.7c-22.9 0-44-12.2-55.4-32L16 288zm27.7-48c-5.7 9.9-5.7 22.1 0 32L136 431.8c5.7 9.9 16.3 16 27.7 16H348.3c11.4 0 22-6.1 27.7-16L468.3 272c5.7-9.9 5.7-22.1 0-32L376 80.2c-5.7-9.9-16.3-16-27.7-16l-184.6 0c-11.4 0-22 6.1-27.7 16L43.7 240zm137-59.3c6.2-6.2 16.4-6.2 22.6 0L256 233.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L233.4 256l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6z"/></svg>`;
        taskCompleteStatusBtn.style.color = "brown";
        taskCompleteStatusBtn.style.backgroundColor = "#eba716";
        taskCompleteStatusBtn.lastChild.style.fill = "brown";

        taskWrapper.style.borderLeftColor = "gray";

        taskWrapper.style.background = `url(/img/badge-check.svg)`;
        taskWrapper.style.backgroundRepeat = `no-repeat`;
        taskWrapper.style.backgroundPosition = `calc(100% - 20px) 10px `;
        taskWrapper.style.backgroundSize = `70px`;

        taskWrapper.style.backgroundColor = "#aaadafa6";
        console.log(taskDetails.lastElementChild.innerText);
      } else {
        taskDetails.lastElementChild.innerText = "Status: Not Completed";
        taskCompleteStatusBtn.innerHTML = `mark Completed <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M16 288c-11.4-19.8-11.4-44.2 0-64L108.3 64.2c11.4-19.8 32.6-32 55.4-32H348.3c22.9 0 44 12.2 55.4 32L496 224c11.4 19.8 11.4 44.2 0 64L403.7 447.8c-11.4 19.8-32.6 32-55.4 32H163.7c-22.9 0-44-12.2-55.4-32L16 288zm27.7-48c-5.7 9.9-5.7 22.1 0 32L136 431.8c5.7 9.9 16.3 16 27.7 16H348.3c11.4 0 22-6.1 27.7-16L468.3 272c5.7-9.9 5.7-22.1 0-32L376 80.2c-5.7-9.9-16.3-16-27.7-16l-184.6 0c-11.4 0-22 6.1-27.7 16L43.7 240zm319.6-36.7l-128 128c-6.2 6.2-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 297.4 340.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>`;
        taskCompleteStatusBtn.style.color = "aliceblue";
        taskCompleteStatusBtn.style.backgroundColor = "#145b9e";
        taskWrapper.style.background = ``;

        taskWrapper.style.backgroundColor = "";
        taskWrapper.style.borderLeftColor = "";
      }
    };

    addtaskSection.style.display = "none";
    taskBlurCOntainer.style.display = "none";
    // console.log(task);
  };
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
