

const teacherData = [{
    name: "veli",
    surname: "ali",
    speciality: "Java",
    description: "iyi güzel"
}, {
    name: "veli",
    surname: "ali",
    speciality: "Java",
    description: "iyi güzel"
}, {
    name: "veli",
    surname: "ali",
    speciality: "Java",
    description: "iyi güzel"
}];


  
const renderTeacherCard = () => {
    
   
    return root.innerHTML += `<div class="d-flex justify-content-start" id="teachers-header">
  ${teacherData.map(teacher =>
        `<h2>Teachers</h2>
  </div>
  <div class="d-flex justify-content-around">
  <div class="card d-flex justify-content-center" style="width: 18rem;">
      <div class="d-flex flex-row-reverse">
          <img class="p-2" src="./images/trash.png" alt="Bootstrap" width="30" height="30">
          <img class="p-2" src="./images/edit.png" alt="Bootstrap" width="30" height="30">
      </div>
      <div class="card-body">
          <h5 class="card-title">${teacher.name} ${teacher.surname}</h5>
          <p>${teacher.speciality}</p>
          <p class="card-text">${teacher.description}</p>
          <div class="d-flex justify-content-evenly">
              <p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Students</a>
              </p>
              <p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Classes</a>
              </p>
          </div>
      </div>
  </div>
</div>`).join('')}
            
        <div class="text-center" id="plus-image">
            <img id="plus" src="./images/plus.png" class="rounded" alt="Bootstrap" width="50" height="50">
          </div>`
          
};



export default renderTeacherCard;