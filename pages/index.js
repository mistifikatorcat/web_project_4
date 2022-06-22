import { Section } from "../../scripts/components/Section.js";
import { Card, createCard } from "../../scripts/components/Card.js";
import FormValidator from "../../scripts/components/FormValidator.js";
import PopupForm from "../../scripts/components/PopupForm.js";

import { PopupImage } from "../../scripts/components/PopupImage.js";

import UserInfo from "../../scripts/components/UserInfo.js";


import {
  initialCards,
  formConfig,
  cardGrid,
  formAdd,
  formEdit,
  editFormElement,
  buttonAdd,
  buttonEdit,
  nameInput,
  jobInput,
  PopupImage,
  popupImage,
  addFormElement
} from "../../scripts/utils/constants.js";

const imageModule = new PopupImage(popupImage);

function createCard(item) {
  const card = new Card(item, "#card", () => {
    imageModule.open(item.link, item.description);
  });
  return card.generateCard();
}

const cardList  = new Section({
  data: initialCards,
  renderer: (item) => {
    const newCard = createCard(item);

    cardList.setItem(newCard);
  },
}, cardGrid);

cardList.renderItems();


////

//edit profile
const fillProfile = new UserInfo({ 
 
fullName: ".profile__name",
category: ".profile__category"

});

const profileFormSubmit = new PopupForm(editFormElement, (inputs) => {
  fillProfile.setUserInfo({name: inputs.name, description: inputs.description});
  profileFormSubmit.close();
}); 


buttonEdit.addEventListener("click", () => {
  fillProfileForm();
  openPopup(formEdit);
});




//editFormElement.addEventListener("submit", handleProfileFormSubmit);


//function handleAddFormSubmit(evt) {
  //evt.preventDefault();

  //const titleInput = document.getElementById("title");
  //const linkInput = document.getElementById("link");

  // disabling button taking object from event (have to implement somewhere)
  //evt.submitter.classList.add("form__button_inactive");
  //evt.submitter.disabled = true;


const cardFormSubmit = new PopupForm(addFormElement, (inputs) => {
  const newCard =  createCard({ 
    name: inputs.description, 
    link: inputs.link });

  cardList.setItem(newCard);

  cardFormSubmit.close();
  formAdd.reset();
  
});

profileFormSubmit.setEventListeners();
cardFormSubmit.setEventListeners();
imageModule.setEventListeners();


addFormElement.addEventListener("submit", handleAddFormSubmit);

//const closeImage = document.querySelector(".image__close");

//getting current profile name\desc

  buttonEdit.addEventListener("click", () => {
    const currentInput = fillProfile.getUserInfo();
    nameInput.value = currentInput.name;
    jobInput.value = currentInput.description;

    profileFormSubmit.open();
  });

  buttonAdd.addEventListener("click", (evt) => {
    evt.submitter.classList.add("form__button_inactive");
    evt.submitter.disabled = true;
    cardFormSubmit.open();
  })

const editFormValidation = new FormValidator(formConfig, formEdit);
const addFormValidation = new FormValidator(formConfig, formAdd);

editFormValidation.enableValidation();
addFormValidation.enableValidation();