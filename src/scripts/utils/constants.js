//initial images

export const initialCards = [
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
  
//profile consts

export const fullName = document.querySelector(".profile__name");
export const job = document.querySelector(".profile__category");

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

//inputs
export const nameInput = document.getElementById("name");
export const jobInput = document.getElementById("category");

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