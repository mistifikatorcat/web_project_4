//Initial Cards Array

const initialCards = [
    {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Vanoise National Park",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
  ];


//EditProfile

let buttonEdit = document.querySelector(".profile__edit-button");
let closeEdit = document.querySelector(".edit__close");
let formEdit = document.querySelector(".edit");


    function openEditForm(){
        formEdit.classList.toggle("edit_enabled");
        let fullname = document.querySelector(".profile__name"); 
        let job = document.querySelector(".profile__category");
        let nameInput = document.getElementById("name"); 
        let jobInput = document.getElementById("category"); 

        nameInput.value = fullname.textContent;  
        jobInput.value = job.textContent;

        
    }

    buttonEdit.addEventListener("click", openEditForm);
    
    function closeEditForm(){
        formEdit.classList.toggle("edit_enabled");
    }
    
    closeEdit.addEventListener("click", closeEditForm);
   
let editFormElement = document.getElementById("editForm");


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
editFormElement.addEventListener('submit', handleProfileFormSubmit);

//add a new place

let buttonAdd = document.querySelector(".profile__add-button");
let closeAdd = document.querySelector(".add__close");
let formAdd = document.querySelector(".add");


    function openAddForm(){
        formAdd.classList.toggle("add_enabled");
        
       // let titleInput = document.getElementById("title"); 
        //let linkInput = document.getElementById("link"); 

    }

    buttonAdd.addEventListener("click", openAddForm);
    
    function closeAddFormSubmit(){
        formAdd.classList.toggle("add_enabled");
    }
    
    closeAdd.addEventListener("click", closeAddFormSubmit);
   
 let addFormElement = document.getElementById("addForm");

function handleAddFormSubmit(evt) {

  evt.preventDefault();
  let titleInput = document.getElementById("title"); 
  let linkInput = document.getElementById("link"); 

    cardGrid.prepend(cardList({name: titleInput.value, link: linkInput.value }));
    closeAddFormSubmit();

}


addFormElement.addEventListener('submit', handleAddFormSubmit);

//cardRender

const cardGrid = document.querySelector(".grid__cards");

function cardList(card){
  
   
    const cardTemplate = document.querySelector("#card").content;
    
      const cardElement = cardTemplate.cloneNode(true);
      const cardImage = cardElement.querySelector(".card__image");
      const cardTitle = cardElement.querySelector(".card__title");
    
    
      cardImage.src = card.link;
      cardTitle.textContent = card.name;
       
    cardGrid.append(cardElement);

    return cardElement;

}


function renderGrid(card, grid){
  grid.append(cardList(card));
}

initialCards.forEach((card) => renderGrid(card, cardGrid));

