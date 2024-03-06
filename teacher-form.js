
const teachers = [];


const addInputToLocalStorage = (e) => {
  e.preventDefault();
  const inputName = document.getElementById("name");
  const inputSurname = document.getElementById("surname");
  const inputSpeciality = document.getElementById("speciality");
  const inputDescription = document.getElementById("description");

  const teacherObject = {
    name: inputName.value,
    surname: inputSurname.value,
    speciality: inputSpeciality.value,
    description: inputDescription.value
  }

  //! Yeni ögretmen eklemek icin
  teachers.push(teacherObject);
 
  //! Localstorage'a eklemek icin
  localStorage.setItem("teachers", JSON.stringify(teachers));

  console.log(teachers);
  //! Formu sifirla
  resetInput();
}

const resetInput = () => {
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("speciality").value = "";
  document.getElementById("description").value = "";
}


const renderTeacherForm = () => {
  root.innerHTML =
    `<div>
    <form id="teacher-form" style="width: 26rem;">
        
        <div data-mdb-input-init class="form-outline mb-4">
          <input type="text" id="name" class="form-control" />
          <label class="form-label" for="name">Name</label>
        </div>

        <div data-mdb-input-init class="form-outline mb-4">
          <input type="text" id="surname" class="form-control" />
          <label class="form-label" for="surname">Surname</label>
        </div>
      
        
        <div data-mdb-input-init class="form-outline mb-4">
          <input type="text" id="speciality" class="form-control" />
          <label class="form-label" for="speciality">Speciality</label>
        </div>
      
        
        <div data-mdb-input-init class="form-outline mb-4">
          <textarea class="form-control" id="description" rows="4"></textarea>
          <label class="form-label" for="description">Description</label>
        </div>
      
        
        <button data-mdb-ripple-init type="" class="btn btn-primary btn-block mb-4" id="save-bttn">Save</button>
        <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4" id="reset-bttn">Reset</button>
      </form>
</div>`;

document.getElementById("teacher-form").addEventListener("submit", addInputToLocalStorage);
document.getElementById("reset-bttn").addEventListener("click", resetInput);
};



export default renderTeacherForm;


