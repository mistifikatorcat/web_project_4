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
function switchPopup(popup) {
  if (popup.classList.contains("popup_enabled")) {
    popup.classList.toggle("popup_disabled");
  } else {
    popup.classList.toggle("popup_enabled");
  }
}

//edit profile
function fillProfileForm() {
  const fullName = document.querySelector(".profile__name");
  const job = document.querySelector(".profile__category");

  nameInput.value = fullName.textContent;
  jobInput.value = job.textContent;
}

buttonEdit.addEventListener("click", fillProfileForm);

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
  switchPopup(formEdit);
}
editFormElement.addEventListener("submit", handleProfileFormSubmit);

// add new place variables
const buttonAdd = document.querySelector(".profile__add-button");
const closeAdd = document.querySelector(".add__close");
const formAdd = document.querySelector(".add");
const addFormElement = document.getElementById("addForm");

//add new place form + handler
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const titleInput = document.getElementById("title");
  const linkInput = document.getElementById("link");

  cardGrid.prepend(
    createCard({ name: titleInput.value, link: linkInput.value })
  );
  switchPopup(formAdd);
  addFormElement.reset();
}

addFormElement.addEventListener("submit", handleAddFormSubmit);

//image preview variables
const popupImage = document.querySelector(".image");
const closeImage = document.querySelector(".image__close");

//imagepreview
function openImagePreview(card) {
  const imagePreview = popupImage.querySelector(".image__file");
  const imageTitle = popupImage.querySelector(".image__title");

  imagePreview.src = card.link;
  imagePreview.alt = card.name;
  imageTitle.textContent = card.name;

  popupImage.classList.toggle("image_enabled");
}

function closeImagePreview() {
  popupImage.classList.toggle("image_enabled");
}

closeImage.addEventListener("click", closeImagePreview);

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
buttonEdit.addEventListener("click", () => switchPopup(formEdit));
closeEdit.addEventListener("click", () => switchPopup(formEdit));
editFormElement.addEventListener("submit", handleProfileFormSubmit);
//add
buttonAdd.addEventListener("click", () => switchPopup(formAdd));
closeAdd.addEventListener("click", () => switchPopup(formAdd));
addFormElement.addEventListener("submit", handleAddFormSubmit);