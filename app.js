import  renderHomePageCards  from './homepage.js';
import  renderTeacherCard  from "./teacherspage.js";
import  renderTeacherForm  from "./teacher-form.js";


const root = document.getElementById("root");

const plusImageElement = document.getElementById("add");
plusImageElement.addEventListener("click", renderTeacherForm);

const homeElement = document.getElementById("nav-link1");
homeElement.addEventListener("click", renderHomePageCards);

const teacherPageElement = document.getElementById("nav-link")[0];
teacherPageElement.addEventListener("click", renderTeacherCard);

