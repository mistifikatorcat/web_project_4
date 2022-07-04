


export class Card {
  constructor(data, userId, cardSelector, handleCardClick, handleLike, handleDelete) {
    this._data = data;
    this._title = data.title;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleLike = handleLike;
    this._handleDelete = handleDelete;
    this._handleCardClick = handleCardClick;
  }

  getId(){
    return this._id;
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
    cardTitle.textContent = this._title;

    return this._element;
  }

  _setEventListeners() {
    //like handler
    const cardLike = this._element.querySelector(".card__like");
    cardLike.addEventListener("click", () => this._handleLike(this._id));


    //delete handler
    const cardDelete = this._element.querySelector(".card__delete");
    cardDelete.addEventListener("click",  () => this.handleDelete(this._id));

    //image click handler
    const cardImage = this._element.querySelector(".card__image");
    cardImage.addEventListener("click", () => { this._handleCardClick();
    });
  }

  isLiked = () => {
    return this._likes.find(user => user._id === this._userId);
  }

  getLikes(number){
    this._likes = number;
    this._countLikes();
  }

  _countLikes(){
    const cardLike = this._element.querySelector(".card__like");
    const cardLikeCounter = this._element.querySelector(".card__like-counter");
    cardLikeCounter.textContent = this._likes.length;

    if(this.isLiked()){
      cardLike.classList.toggle("card__like_active");
    }

  }

  //_handleCardClick = () => {
   // this.PopupImage
 // }

  //_pressLike = (evt) => {
    //evt.target.classList.toggle("card__like_active");
  //};

  deleteCard = () => {
    this._element.remove();
    this._element = null;
  };
}