import  renderHomePageCards  from './homepage.js';
import  renderTeacherCard  from "./teacherspage.js";
import  renderTeacherForm  from "./teacher-form.js";

/*
document.addEventListener("DOMContentLoaded", ()=>{
const plusImageElement = document.getElementById("plus");
if(plusImageElement){
plusImageElement.addEventListener("click", renderTeacherForm);}

const homeElement = document.getElementById("home");
if(homeElement){
homeElement.addEventListener("click", renderHomePageCards);}

const teacherPageElement = document.getElementById("teacher");
if(teacherPageElement){
teacherPageElement.addEventListener("click", renderTeacherCard);}

});
*/

let previousMenuItem = null;

document.addEventListener("DOMContentLoaded", () => {
    const plusImageElement = document.getElementById("plus");
    if (plusImageElement) {
        plusImageElement.addEventListener("click", renderTeacherForm);
    }

    const homeElement = document.getElementById("home");
    if (homeElement) {
        homeElement.addEventListener("click", () => {
            if (previousMenuItem !== 'home') {
                clearRootDiv();
                renderHomePageCards();
                previousMenuItem = 'home';
            }
        });
    }

    const teacherPageElement = document.getElementById("teacher");
    if (teacherPageElement) {
        teacherPageElement.addEventListener("click", () => {
            if (previousMenuItem !== 'teachers') {
                clearRootDiv();
                renderTeacherCard();
                previousMenuItem = 'teachers';
            }
        });
    }
});

//! Bir menü ögesi tiklandiginda ekranda baska ögenin datasini temizler
const clearRootDiv = () => {
    const contentDiv = document.getElementById("root");
    if(contentDiv){
        contentDiv.innerHTML = "";
    }
}