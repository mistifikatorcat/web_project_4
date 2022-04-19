let buttonEdit = document.querySelector(".profile__edit-button");
let closeEdit = document.querySelector(".edit__close");
let formEdit = document.querySelector(".edit");


    function openEditForm(){
        formEdit.classList.toggle("edit_enabled");
        let fullname = document.querySelector(".profile__name"); //данные из самого сайта
        let job = document.querySelector(".profile__category");
        let nameInput = document.getElementById("name"); //данные из формы
        let jobInput = document.getElementById("category"); 

        nameInput.value = fullname.textContent;  //автозаполнение формы содержимым из хтмл
        jobInput.value = job.textContent;

        //textContent получает данные из хтмл
        //value получает данные из джс
    }

    buttonEdit.addEventListener("click", openEditForm);
    
    function closeEditForm(){
        formEdit.classList.toggle("edit_enabled");
    }
    
    closeEdit.addEventListener("click", closeEditForm);
   
let formElement = document.querySelector(".form");


function handleProfileFormSubmit(evt) {

  evt.preventDefault();
    let nameInput = document.getElementById("name");
    let jobInput = document.getElementById("category"); 
    let fullname = document.querySelector(".profile__name"); 
    let job = document.querySelector(".profile__category");

    fullname.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closeEditForm();

}


formElement.addEventListener('submit', handleProfileFormSubmit);

let buttonAdd = document.querySelector(".profile__add-button");
let closeAdd = document.querySelector(".add__close");
let formAdd = document.querySelector(".add");


    function openAddForm(){
        formAdd.classList.toggle("add_enabled");
        //let fullname = document.querySelector(".profile__name"); //данные из самого сайта
        //let job = document.querySelector(".profile__category");
        let titleInput = document.getElementById("title"); //данные из формы
        let linkInput = document.getElementById("link"); 

       // titleInput.value = //fullname.textContent;  //автозаполнение формы содержимым из хтмл
        //linkInput.value = //job.textContent;

        //textContent получает данные из хтмл
        //value получает данные из джс
    }

    buttonAdd.addEventListener("click", openAddForm);
    
    function closeAddForm(){
        formAdd.classList.toggle("add_enabled");
    }
    
    closeAdd.addEventListener("click", closeAddForm);
   


//function handleProfileFormSubmit(evt) {

  //evt.preventDefault();
    //let nameInput = document.getElementById("name");
    //let jobInput = document.getElementById("category"); 
    //let fullname = document.querySelector(".profile__name"); 
    //let job = document.querySelector(".profile__category");

    //fullname.textContent = nameInput.value;
    //job.textContent = jobInput.value;
    //closeAddForm();

//}


//formElement.addEventListener('submit', handleProfileFormSubmit);