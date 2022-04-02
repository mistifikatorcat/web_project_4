let button = document.querySelector(".profile__edit-button");
let close = document.querySelector(".popup__close");
let form = document.querySelector(".popup");

    function openForm(){
        form.classList.add("popup__opened");
        let nameInput = document.querySelector(".profile__name");
        let jobInput = document.querySelector(".profile__category");
        let namePlaceholder = document.getElementById("name").placeholder = nameInput.textContent;
        let jobPlaceholder =  document.getElementById("category").placeholder = jobInput.textContent;
    }
    if (button){
    button.addEventListener("click", openForm);
    }
    function closeForm(){
        form.classList.remove("popup__opened");
    }
    if (close){
    close.addEventListener("click", closeForm);
    }

let formElement = document.querySelector(".form");


function handleProfileFormSubmit(evt) {

  evt.preventDefault();
   
    let nameInput = document.querySelector(".profile__name");
    let jobInput = document.querySelector(".profile__category");

    nameInput.textContent = nameInput.value;
    jobInput.textContent = jobInput.value;

}


formElement.addEventListener('submit', handleProfileFormSubmit);