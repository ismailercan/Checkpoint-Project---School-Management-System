const inputNameAndSurname = document.getElementById("nameAndSurname");
const inputSpeciality = document.getElementById("speciality");
const inputDescription = document.getElementById("description");
const saveButton = document.getElementById("save-bttn");
const resetButton = document.getElementById("reset-bttn");

/*
const teacher = {
name: pName,
speciality: pSpeciality,
description: pDescription
}
*/
saveButton.addEventListener("click", addInputToLocalStorage);
resetButton.addEventListener("click", resetInput);

const teachers = [];

const addInputToLocalStorage = (e) => {

  const textNameAndSurname = inputNameAndSurname.value.trim();
  const textSpeciality = inputSpeciality.value.trim();
  const textDescription = inputDescription.value.trim();

  teachers.push(textNameAndSurname);
  teachers.push(textSpeciality);
  teachers.push(textDescription);
  localStorage.setItem("textNameAndSurname", JSON.stringify(textNameAndSurname));
  localStorage.setItem("textSpeciality", JSON.stringify(textSpeciality));
  localStorage.setItem("textDescription", JSON.stringify(textDescription));

}

const resetInput = (e) => {
  inputNameAndSurname.value = "";
  inputSpeciality.value = "";
  inputDescription.value = "";
}


const renderTeacherForm = () => {
  return root.innerHTML =
    `<div>
    <form id="teacher-form" style="width: 26rem;">
        
        <div data-mdb-input-init class="form-outline mb-4">
          <input type="text" id="nameAndSurname" class="form-control" />
          <label class="form-label" for="nameAndSurname">Name - Surname</label>
        </div>
      
        
        <div data-mdb-input-init class="form-outline mb-4">
          <input type="text" id="speciality" class="form-control" />
          <label class="form-label" for="speciality">Speciality</label>
        </div>
      
        
        <div data-mdb-input-init class="form-outline mb-4">
          <textarea class="form-control" id="description" rows="4"></textarea>
          <label class="form-label" for="description">Description</label>
        </div>
      
        
        <button data-mdb-ripple-init type="submit" class="btn btn-primary btn-block mb-4" id="save-bttn">Save</button>
        <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4" id="reset-bttn">Reset</button>
      </form>
</div>`
};



export default renderTeacherForm;