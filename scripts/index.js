import { openPopup, closePopup } from "./utils.js";
import { createCard, popupImage } from "./Card.js";
import FormValidator from "./FormValidator.js";

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
//consts
const fullName = document.querySelector(".profile__name");
const job = document.querySelector(".profile__category");

const titleInput = document.getElementById("title");
const linkInput = document.getElementById("link");

//EditProfile variables

const buttonEdit = document.querySelector(".profile__edit-button");
const closeEdit = document.querySelector(".edit__close");
const formEdit = document.querySelector(".edit");

//inputs
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("category");

// add new place variables
const buttonAdd = document.querySelector(".profile__add-button");
const closeAdd = document.querySelector(".add__close");
const formAdd = document.querySelector(".add");
const addFormElement = document.getElementById("addForm");
//const inputList = Array.from(editForm.querySelectorAll(".form__input"));
const buttonElement = document.querySelector(".form__button");

////

//edit profile
function fillProfileForm() {
  //const fullName = document.querySelector(".profile__name");
  //const job = document.querySelector(".profile__category");

  nameInput.value = fullName.textContent;
  jobInput.value = job.textContent;
}

buttonEdit.addEventListener("click", () => {
  fillProfileForm();
  openPopup(formEdit);
});

const editFormElement = document.getElementById("editForm");

//edit profile handler
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  //const fullname = document.querySelector(".profile__name");
  //const job = document.querySelector(".profile__category");

  fullName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(formEdit);
}
//editFormElement.addEventListener("submit", handleProfileFormSubmit);

//add new place form + handler
function handleAddFormSubmit(evt) {
  evt.preventDefault();

  //const titleInput = document.getElementById("title");
  //const linkInput = document.getElementById("link");

  // disabling button taking object from event
  evt.submitter.classList.add("form__button_inactive");
  evt.submitter.disabled = true;

  cardGrid.prepend(
    createCard({ name: titleInput.value, link: linkInput.value })
  );
  closePopup(formAdd, buttonElement);

  addFormElement.reset();
}

addFormElement.addEventListener("submit", handleAddFormSubmit);

const closeImage = document.querySelector(".image__close");

//cardRender

const cardGrid = document.querySelector(".grid__cards");

function renderCard(card, grid) {
  grid.append(createCard(card));
}

initialCards.forEach((card) => renderCard(card, cardGrid));

//event listeners
//edit

closeEdit.addEventListener("click", () => closePopup(formEdit));
editFormElement.addEventListener("submit", handleProfileFormSubmit);
//add
buttonAdd.addEventListener("click", () => openPopup(formAdd));

closeAdd.addEventListener("click", () => closePopup(formAdd));
closeImage.addEventListener("click", () => closePopup(popupImage));

const formConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  fieldsetSelector: ".form__fieldset",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const editFormValidation = new FormValidator(formConfig, formEdit);
const addFormValidation = new FormValidator(formConfig, formAdd);

editFormValidation.enableValidation();
addFormValidation.enableValidation();