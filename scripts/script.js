import { toggleButtonState } from "./validate.js";

//Initial Cards Array

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

//EditProfile variables

const buttonEdit = document.querySelector(".profile__edit-button");
const closeEdit = document.querySelector(".edit__close");
const formEdit = document.querySelector(".edit");

//inputs
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("category");

//popup toggle
//function switchPopup(popup) { 
  //popup.classList.toggle("popup_enabled");
  //popup.addEventListener("mousedown", closeOnLayover);
//} 

function openPopup(popup) {  
  popup.classList.add("popup_enabled"); 
  popup.addEventListener("keydown", closeOnEscape);
  popup.addEventListener("mousedown", closeOnLayover);
}

function closePopup(popup) {  
  popup.classList.remove("popup_enabled"); 
  popup.removeEventListener("keydown", closeOnEscape);
  popup.removeEventListener("mousedown", closeOnLayover);
}

const closeOnEscape = () => {
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape"){
      const popup = document.querySelector(".popup_enabled");
      closePopup(popup);
    }
  });
}

const closeOnLayover = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

//edit profile
function fillProfileForm() {
  const fullName = document.querySelector(".profile__name");
  const job = document.querySelector(".profile__category");

  nameInput.value = fullName.textContent;
  jobInput.value = job.textContent;

}

buttonEdit.addEventListener("click", () => {
  fillProfileForm();
  openPopup(formEdit);
  closeOnEscape(formEdit);
 }); 

const editFormElement = document.getElementById("editForm");

//edit profile handler
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  //const nameInput = document.getElementById("name");
  //const jobInput = document.getElementById("category");
  const fullname = document.querySelector(".profile__name");
  const job = document.querySelector(".profile__category");

  fullname.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(formEdit);
}
editFormElement.addEventListener("submit", handleProfileFormSubmit);

// add new place variables
const buttonAdd = document.querySelector(".profile__add-button");
const closeAdd = document.querySelector(".add__close");
const formAdd = document.querySelector(".add");
const addFormElement = document.getElementById("addForm");
const inputList = Array.from(editForm.querySelectorAll(".form__input"));
const buttonElement = document.querySelector(".form__button");


//add new place form + handler
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  toggleButtonState(inputList, buttonElement);
  const titleInput = document.getElementById("title");
  const linkInput = document.getElementById("link");
 
  cardGrid.prepend(
    createCard({ name: titleInput.value, link: linkInput.value })
  );
  closePopup(formAdd);
 
  addFormElement.reset();

}

addFormElement.addEventListener("submit", handleAddFormSubmit);

//image preview variables
const popupImage = document.querySelector(".image");
const closeImage = document.querySelector(".image__close");
const imagePreview = popupImage.querySelector(".image__file");
const imageTitle = popupImage.querySelector(".image__title");


//imagepreview
function openImagePreview(card) {
 // const imagePreview = popupImage.querySelector(".image__file");
  //const imageTitle = popupImage.querySelector(".image__title");

  imagePreview.src = card.link;
  imagePreview.alt = card.name;
  imageTitle.textContent = card.name;


  openPopup(popupImage);
  //popupImage.addEventListener("click", closeOnEscape(popupImage));

}


//cardRender

const cardGrid = document.querySelector(".grid__cards");

function createCard(card) {
  const cardTemplate = document
    .querySelector("#card")
    .content.querySelector(".grid__card");

  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.style.backgroundImage = `url(${card.link})`;
  cardTitle.textContent = card.name;

  const cardLike = cardElement.querySelector(".card__like");
  cardLike.addEventListener("click", () => {
    cardLike.classList.toggle("card__like_active");
  });
  const cardDelete = cardElement.querySelector(".card__delete");
  cardDelete.addEventListener("click", function () {
    cardElement.remove(cardElement);
  });

  cardImage.addEventListener("click", () => openImagePreview(card));
  return cardElement;
}

function renderCard(card, grid) {
  grid.append(createCard(card));
}

initialCards.forEach((card) => renderCard(card, cardGrid));


//event listeners
//edit
//buttonEdit.addEventListener("click", () => closeOnEscape(formEdit));

closeEdit.addEventListener("click", () => closePopup(formEdit));
editFormElement.addEventListener("submit", handleProfileFormSubmit);
//add
buttonAdd.addEventListener("click", () => openPopup(formAdd));

closeAdd.addEventListener("click", () => closePopup(formAdd));
closeImage.addEventListener("click", () => closePopup(popupImage));


//addFormElement.addEventListener("submit", handleAddFormSubmit);