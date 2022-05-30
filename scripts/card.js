import { openPopup } from "./utils.js";
export const popupImage = document.querySelector(".image");

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".grid__card");
    const cardElement = cardTemplate.cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector(".card__image");
    const cardTitle = this._element.querySelector(".card__title");

    cardImage.style.backgroundImage = `url(${this._link})`;
    cardTitle.textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    //like handler
    const cardLike = this._element.querySelector(".card__like");
    cardLike.addEventListener("click", this._pressLike);

    //delete handler
    const cardDelete = this._element.querySelector(".card__delete");
    cardDelete.addEventListener("click", this._pressDelete);
    const cardImage = this._element.querySelector(".card__image");
    cardImage.addEventListener("click", () => {
      this._openImagePreview();
    });
  }

  _pressLike = (evt) => {
    evt.target.classList.toggle("card__like_active");
  };

  _pressDelete = () => {
    this._element.remove();
    this._element = null;
  };

  _openImagePreview() {
    const imagePreview = popupImage.querySelector(".image__file");
    const imageTitle = popupImage.querySelector(".image__title");

    imagePreview.src = this._link;
    imagePreview.alt = this._name;
    imageTitle.textContent = this._name;

    openPopup(popupImage);
  }
}

export function createCard(item) {
  const card = new Card(item, "#card");
  return card.generateCard();
}