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

const imageModule = new PopupImage(popupImage);
imageModule.setEventListeners();

//adding card to gallery

function renderCard(data) {
  const card = new Card(data, "#card", () => {
    imageModule.open(data.link, data.title);
  });
  const cardElement = card.generateCard(); 
  cardList.addItem(cardElement)
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

//edit profile form

const userInfo = new UserInfo({
  fullName: ".profile__name",
  category: ".profile__category",
});

//setting the new user info

const profileForm = new PopupForm(editPopupElement, (inputs) => {
  userInfo.setUserInfo({ name: inputs.name, description: inputs.description });
  profileForm.close();
});
profileForm.setEventListeners();

//adding card form

const cardForm = new PopupForm(addPopupElement, (inputs) => {
  renderCard({ name: inputs.title, link: inputs.link })
  
  cardForm.close();
  addFormElement.reset();
  addFormValidator.resetValidationError();

});
cardForm.setEventListeners();

buttonEdit.addEventListener("click", () => {
  const currentInput = userInfo.getUserInfo();
  nameInput.value = currentInput.name;
  jobInput.value = currentInput.description;

  profileForm.open();
});

buttonAdd.addEventListener("click", () => {
  cardForm.open();
});

const editFormValidator = new FormValidator(formConfig, formEdit);
const addFormValidator = new FormValidator(formConfig, formAdd);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
