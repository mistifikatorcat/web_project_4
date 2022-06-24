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
  //cardGrid,
  formAdd,
  formEdit,
  editFormElement,
  buttonAdd,
  buttonEdit,
  nameInput,
  jobInput,
  popupImage,
  addFormElement,
} from "../scripts/utils/constants.js";

const imageModule = new PopupImage(popupImage);

function createCard(image) {
  const card = new Card(image, "#card", (link, description) => {
    imageModule.open(link, description);
  });
  return card.generateCard();
}

const cardList = new Section(
  {
    data: initialCards,
    renderer: createCard,
  },
  "grid__cards"
);

cardList.renderItems();

////

//edit profile
const userInfo = new UserInfo({
  fullName: ".profile__name",
  category: ".profile__category",
});

const profileFormSubmit = new PopupForm(editFormElement, (inputs) => {
  userInfo.setUserInfo({ name: inputs.name, description: inputs.description });
  profileFormSubmit.close();
});

//buttonEdit.addEventListener("click", () => {
//fillProfile();
//openPopup(formEdit);
//});

//editFormElement.addEventListener("submit", handleProfileFormSubmit);

//function handleAddFormSubmit(evt) {
//evt.preventDefault();

//const titleInput = document.getElementById("title");
//const linkInput = document.getElementById("link");

// disabling button taking object from event (have to implement somewhere)
//evt.submitter.classList.add("form__button_inactive");
//evt.submitter.disabled = true;

const cardForm = new PopupForm(addFormElement, (inputs) => {
  const newCard = createCard({
    name: inputs.description,
    link: inputs.link,
  });

  cardList.addItem(newCard);

  cardForm.close();
  formAdd.reset();

  const disableButton = (evt) => {
    evt.submitter.classList.add("form__button_inactive");
    evt.submitter.disabled = true;
  };
  disableButton();
});

profileFormSubmit.setEventListeners();
cardForm.setEventListeners();
imageModule.setEventListeners();

//ddFormElement.addEventListener("submit", handleAddFormSubmit);

//const closeImage = document.querySelector(".image__close");

//getting current profile name\desc

buttonEdit.addEventListener("click", () => {
  const currentInput = userInfo.getUserInfo();
  nameInput.value = currentInput.name;
  jobInput.value = currentInput.description;

  profileFormSubmit.open();
});

buttonAdd.addEventListener("click", () => {
  cardForm.open();
});

const editFormValidator = new FormValidator(formConfig, formEdit);
const addFormValidator = new FormValidator(formConfig, formAdd);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
