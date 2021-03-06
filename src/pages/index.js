import "./index.css";
import { Section } from "../scripts/components/Section.js";
import { Card } from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import { PopupForm } from "../scripts/components/PopupForm.js";

import { PopupImage } from "../scripts/components/PopupImage.js";

import { UserInfo } from "../scripts/components/UserInfo.js";

import { PopupDelete } from "../scripts/components/PopupDelete.js";

import {
  formConfig,
  formAdd,
  formEdit,
  formAvatar,
  addPopupElement,
  editPopupElement,
  avatarPopupElement,
  deletePopupElement,
  buttonAdd,
  buttonEdit,
  nameInput,
  jobInput,
  popupImage,
  avatarInput,
  profilePic,
  profilePicBtn,
  cardGrid
} from "../scripts/utils/constants.js";

import { Api } from "../scripts/utils/Api.js";

//initializing api

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "b451294b-44d9-464a-8874-2d4137a4eb3c",
    "Content-Type": "application/json"
  }
});

let userId;

const userInfo = new UserInfo({
  fullName: ".profile__name",
  category: ".profile__category",
  profilePic: ".profile__picture"
});

//getting initial cards and profile info

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, items]) => {
    userId = data._id;
    userInfo.setUserInfo({
      name: data.name, 
      about: data.about
    });
    userInfo.setUserImage({
      picture: data.avatar
    });

    cardList.renderItems(items);
  })
  .catch((err) => {console.log(err)})

//submitting card

const submitCard = (data) => {
  cardForm.showLoading();
  api.createCard(data)
  .then((card) => {
    
    cardList.addItem(card);
    cardForm.close();
    formAdd.reset();
    formAdd.resetValidationError();
  
    })
    
  .catch((err) => { console.log(err)})
  .finally( () => { cardForm.hideLoading();})


}

//submitting profile

const submitProfile = (data) => {
  profileForm.showLoading();
  api.editProfile(data)
  .then((res) => {
    
    userInfo.setUserInfo({
      name: res.name, 
      about: res.about
    })
    profileForm.close();
  })
  .catch((err) => { console.log(err)})
  .finally( () => {
    profileForm.hideLoading();
  })
}

//submitting profile pic

const submitAvatar = (data) => {
  avatarForm.showLoading();
  api.editProfilePic(data)
  .then(() => {
    userInfo.setUserImage({
      avatar: data.picture
    })
  })
  .catch((err) => { console.log(err)})
  .finally( () => { avatarForm.hideLoading()})

}

//displaying cards in gallery

const cardList = new Section(
  {
    //items: initialCards,
    renderer: renderCard,
  },
  ".grid__cards"
);

//cardList.renderItems();

//user info section

const profileForm = new PopupForm(editPopupElement, submitProfile)
profileForm.setEventListeners();

//card section

const cardForm = new PopupForm(addPopupElement, submitCard)
cardForm.setEventListeners();

//image section

const imageModule = new PopupImage(popupImage);
imageModule.setEventListeners();

//avatar section

const avatarForm = new PopupForm(avatarPopupElement, submitAvatar);
avatarForm.setEventListeners();

//delete section

const deleteForm = new PopupDelete(deletePopupElement);
deleteForm.setEventListeners();


//adding card to gallery

function renderCard(data) {
  const image = new Card(data, 
    userId,
    "#card",
     () => {
    imageModule.open(data.name, data.link); //handleCardClick
  },
  () => {
    if (image.isLiked()){
      api.unlikeCard(image.getId())
      .then((res) => {
        image.setLikes(res.likes)
      })
      .catch((err) => { console.log(err)})
    }
    else {
      api.likeCard(image.getId())
      .then((res) => {
        image.setLikes(res.likes)
    })
      .catch((err) => { console.log(err)})
  }
}, () => {
  deleteForm.open();
  deleteForm.setAction(() => {
    deleteForm.showLoading();
    api.deleteCard(image.getId())
    .then(() => {
      image.deleteCard();
      deleteForm.close();
    })
    .catch((err) => { console.log(err)})
  .finally( () => { deleteForm.hideLoading()})
  })
}
  );
  return image.generateCard();
}


//getting the current user info



function renderProfile(){
  const profile = userInfo.getUserInfo();

  nameInput.value = profile.name
  jobInput.value = profile.description;
  
  editFormValidator.resetValidationError();
  profileForm.open();
}

function renderAvatar(){
  const profile = userInfo.getUserInfo();
  avatarInput.value = profile.picture;

  avatarFormValidator.resetValidationError();
  avatarForm.open();
}


//handlers

buttonEdit.addEventListener("click", renderProfile);

buttonAdd.addEventListener("click", () => {
  addFormValidator.resetValidationError();
  cardForm.open();
});

profilePicBtn.addEventListener("click", renderAvatar)


//validator settings

const editFormValidator = new FormValidator(formConfig, formEdit);
const addFormValidator = new FormValidator(formConfig, formAdd);
const avatarFormValidator = new FormValidator(formConfig, formAvatar);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();