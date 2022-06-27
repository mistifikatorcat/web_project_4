import "./index.css";
import { Section } from "../scripts/components/Section.js";
import { Card } from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import { PopupForm } from "../scripts/components/PopupForm.js";

import { PopupImage } from "../scripts/components/PopupImage.js";

import { UserInfo } from "../scripts/components/UserInfo.js";

import {
  initialCards,
  formConfig,
  formAdd,
  formEdit,
  addPopupElement,
  addFormElement,
  editFormElement,
  editPopupElement,
  buttonAdd,
  buttonEdit,
  nameInput,
  jobInput,
  popupImage,
} from "../scripts/utils/constants.js";




//submitting card

const submitCard = (data) => {

const newImage = {
  title: data['title'],
  link: data['link']
};
cardList.addItem(newImage);

cardForm.close();

}

//submitting profile

const submitProfile = (data) => {
  userInfo.setUserInfo(data.name, data.description)

  profileForm.close()
}

//displaying cards in gallery

const cardList = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  ".grid__cards"
);

cardList.renderItems();

//user info section

const profileForm = new PopupForm(editPopupElement, submitProfile)
profileForm.setEventListeners();

//card section

const cardForm = new PopupForm(addPopupElement, submitCard)
cardForm.setEventListeners();

//image section

const imageModule = new PopupImage(popupImage);
imageModule.setEventListeners();


//adding card to gallery

function renderCard(card) {
  const image = new Card(card, "#card", () => {
    imageModule.open(card.title, card.link);
  });
  return image.generateCard();
}


//getting the current user info

const userInfo = new UserInfo({
  fullName: ".profile__name",
  category: ".profile__category",
});

function renderProfile(){
  const profile = userInfo.getUserInfo();

  nameInput.value = profile.name
  jobInput.value = profile.description;
  
  editFormValidator.resetValidationError();
  profileForm.open();
}


//handlers

buttonEdit.addEventListener("click", renderProfile);

buttonAdd.addEventListener("click", () => {
  addFormValidator.resetValidationError();
  cardForm.open();
});


//validator settings

const editFormValidator = new FormValidator(formConfig, formEdit);
const addFormValidator = new FormValidator(formConfig, formAdd);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
