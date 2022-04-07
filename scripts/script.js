let button = document.querySelector(".profile__edit-button");
let close = document.querySelector(".popup__close");
let form = document.querySelector(".popup");


    function openForm(){
        form.classList.toggle("popup_enabled");
        let fullname = document.querySelector(".profile__name"); //данные из самого сайта
        let job = document.querySelector(".profile__category");
        let nameInput = document.getElementById("name"); //данные из формы
        let jobInput = document.getElementById("category"); 

        nameInput.value = fullname.textContent;  //автозаполнение формы содержимым из хтмл
        jobInput.value = job.textContent;

        //textContent получает данные из хтмл
        //value получает данные из джс
    }

    button.addEventListener("click", openForm);
    
    function closeForm(){
        form.classList.toggle("popup_enabled");
    }
    
    close.addEventListener("click", closeForm);
   
let formElement = document.querySelector(".form");


function handleProfileFormSubmit(evt) {

  evt.preventDefault();
    let nameInput = document.getElementById("name");
    let jobInput = document.getElementById("category"); 
    let fullname = document.querySelector(".profile__name"); 
    let job = document.querySelector(".profile__category");

    fullname.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closeForm();

}


formElement.addEventListener('submit', handleProfileFormSubmit);