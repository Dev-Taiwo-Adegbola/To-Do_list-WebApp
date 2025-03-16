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
    TaskError.textContent = "";

    taskTitle.value = "";
    taskDescription.value = "";
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
const TaskError = document.querySelector(".taskError");

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
    TaskError.textContent = "";

    if (taskTitle.value === "" || taskDescription.value === "") {
      TaskError.textContent = "please Add a valid task title and description";
      TaskError.style.color = "red";

      // taskSection.insertBefore(addTaskError, taskSection.firstChild);
    } else {
      TaskError.textContent = "";

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

      taskTimeStamp.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-secondary" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/><path class="fa-primary" d="M256 96c-13.3 0-24 10.7-24 24V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24z"/></svg> ${new Date().toLocaleTimeString()}`;
      taskTimeStamp.style.fontSize = `13px`;
      taskActions.appendChild(taskTimeStamp);

      const taskEditBtn = document.createElement("button");
      taskEditBtn.setAttribute("class", "taskEditBtn");

      taskEditBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-secondary" d="M492.7 58.2c25 25 25 65.5 0 90.5l-60 60L302.7 78.7l60-60c25-25 65.5-25 90.5 0l39.4 39.4zM315.3 186.7l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/><path class="fa-primary" d="M432.7 208.7L302.7 78.7 58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L432.7 208.7zM89.3 360.5l22.7-9.1v32c0 8.8 7.2 16 16 16h32l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3zm226-196.4c6.2 6.2 6.2 16.4 0 22.6l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0z"/></svg>`;
      taskActions.appendChild(taskEditBtn);

      const taskDeleteBtn = document.createElement("button");
      taskDeleteBtn.setAttribute("class", "taskDeleteBtn");

      taskDeleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-secondary" d="M416 96H32V448c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V96zM144 176V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16zm96 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16zm96 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16z"/><path class="fa-primary" d="M163.8 0c-12.1 0-23.2 6.8-28.6 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8z"/></svg>`;
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
        if (
          taskDetails.lastElementChild.innerText === "Status: Not Completed"
        ) {
          taskDetails.lastElementChild.innerText = `Status: Task Completed `;

          taskCompleteStatusBtn.innerHTML = `Unmark Completed <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M16 288c-11.4-19.8-11.4-44.2 0-64L108.3 64.2c11.4-19.8 32.6-32 55.4-32H348.3c22.9 0 44 12.2 55.4 32L496 224c11.4 19.8 11.4 44.2 0 64L403.7 447.8c-11.4 19.8-32.6 32-55.4 32H163.7c-22.9 0-44-12.2-55.4-32L16 288zm27.7-48c-5.7 9.9-5.7 22.1 0 32L136 431.8c5.7 9.9 16.3 16 27.7 16H348.3c11.4 0 22-6.1 27.7-16L468.3 272c5.7-9.9 5.7-22.1 0-32L376 80.2c-5.7-9.9-16.3-16-27.7-16l-184.6 0c-11.4 0-22 6.1-27.7 16L43.7 240zm137-59.3c6.2-6.2 16.4-6.2 22.6 0L256 233.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L233.4 256l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6z"/></svg>`;
          taskCompleteStatusBtn.style.color = "brown";
          taskCompleteStatusBtn.style.backgroundColor = "#eba716";
          taskCompleteStatusBtn.lastChild.style.fill = "brown";

          taskWrapper.style.borderLeftColor = "gray";
          taskWrapper.style.color = "gray";

          taskWrapper.style.background = `url(/img/badge-check.svg)`;
          taskWrapper.style.backgroundRepeat = `no-repeat`;
          taskWrapper.style.backgroundPosition = `calc(100% - 20px) 10px `;
          taskWrapper.style.backgroundSize = `70px`;
          taskTimeStamp.firstChild.style.fill = "grey";
          taskWrapper.style.backgroundColor = "#aaadafa6";
          taskEditBtn.style.fill = "grey";
          taskEditBtn.style.borderColor = "grey";
          taskEditBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-secondary" d="M237.6 283.2L195.5 250l-72.9 72.9c-10.4 10.4-18 23.3-22.2 37.4L65 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2l88.3-88.3-77.9-61.4-27.6 27.6c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l24.9-24.9zm141.7-96.5l-47.8 47.8 78.1 61.2 42.1-42.1L474.3 231l11.3-11.3-33.9-33.9-62.1-62.1L355.7 89.8l-11.3 11.3-22.6 22.6-57.8 57.8 42.2 33.1 50.5-50.5c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM224 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9l-78.1 23 23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM426.7 18.7L412.3 33.2 389.7 55.8 378.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L517.3 18.7c-25-25-65.5-25-90.5 0z"/><path class="fa-primary" d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z"/></svg>`;
          taskEditBtn.setAttribute("disabled", "disabled");
          console.log(taskDetails.lastElementChild.innerText);
        } else {
          taskDetails.lastElementChild.innerText = "Status: Not Completed";
          taskCompleteStatusBtn.innerHTML = `mark Completed <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M16 288c-11.4-19.8-11.4-44.2 0-64L108.3 64.2c11.4-19.8 32.6-32 55.4-32H348.3c22.9 0 44 12.2 55.4 32L496 224c11.4 19.8 11.4 44.2 0 64L403.7 447.8c-11.4 19.8-32.6 32-55.4 32H163.7c-22.9 0-44-12.2-55.4-32L16 288zm27.7-48c-5.7 9.9-5.7 22.1 0 32L136 431.8c5.7 9.9 16.3 16 27.7 16H348.3c11.4 0 22-6.1 27.7-16L468.3 272c5.7-9.9 5.7-22.1 0-32L376 80.2c-5.7-9.9-16.3-16-27.7-16l-184.6 0c-11.4 0-22 6.1-27.7 16L43.7 240zm319.6-36.7l-128 128c-6.2 6.2-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 297.4 340.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>`;
          taskCompleteStatusBtn.style.color = "aliceblue";
          taskCompleteStatusBtn.style.backgroundColor = "#145b9e";
          taskWrapper.style.background = ``;
          taskWrapper.style.color = "";
          taskEditBtn.style.fill = "";
          taskEditBtn.style.borderColor = "";
          taskWrapper.style.backgroundColor = "";
          taskWrapper.style.borderLeftColor = "";
          taskTimeStamp.firstChild.style.fill = "";

          taskEditBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-secondary" d="M492.7 58.2c25 25 25 65.5 0 90.5l-60 60L302.7 78.7l60-60c25-25 65.5-25 90.5 0l39.4 39.4zM315.3 186.7l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/><path class="fa-primary" d="M432.7 208.7L302.7 78.7 58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L432.7 208.7zM89.3 360.5l22.7-9.1v32c0 8.8 7.2 16 16 16h32l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3zm226-196.4c6.2 6.2 6.2 16.4 0 22.6l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0z"/></svg>`;
          taskEditBtn.removeAttribute("disabled");
        }
      };

      addtaskSection.style.display = "none";
      taskBlurCOntainer.style.display = "none";
      // console.log(task);
    }
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
