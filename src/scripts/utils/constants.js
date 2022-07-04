//initial images

export const initialCards = [
    {
      title: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    },
    {
      title: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    },
    {
      title: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
    },
    {
      title: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg",
    },
    {
      title: "Vanoise National Park",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
    },
    {
      title: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg",
    },
  ];
  
//profile consts

export const fullName = document.querySelector(".profile__name");
export const category = document.querySelector(".profile__category");
export const profilePic = document.querySelector(".profile__picture");

//image consts
export const popupImage = document.querySelector(".image");
export const titleInput = document.getElementById("title");
export const linkInput = document.getElementById("link");


export const cardGrid = document.querySelector(".grid__cards");

//profile form consts

export const buttonEdit = document.querySelector(".profile__edit-button");
export const closeEdit = document.querySelector(".edit__close");
export const formEdit = document.querySelector(".edit");
export const editFormElement = document.getElementById("editForm");

//avatar form consts

export const formAvatar = document.querySelector(".avatar");

//delete form consts



//popup form consts

export const editPopupElement = document.querySelector('#edit');
export const addPopupElement = document.querySelector('#add');
export const avatarPopupElement = document.querySelector('#avatar');
export const deletePopupElement = document.querySelector('#delete');

//inputs
export const nameInput = document.getElementById("name");
export const jobInput = document.getElementById("category");
export const avatarInput = document.getElementById("avatar");

// image form consts
export const buttonAdd = document.querySelector(".profile__add-button");
export const closeAdd = document.querySelector(".add__close");
export const formAdd = document.querySelector(".add");
export const addFormElement = document.getElementById("addForm");
export const buttonElement = document.querySelector(".form__button");

//validation consts

export const formConfig = {
    formSelector: ".form",
    inputSelector: ".form__input",
    fieldsetSelector: ".form__fieldset",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_inactive",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active",
  };