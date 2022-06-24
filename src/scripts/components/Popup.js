export class Popup{
  constructor(popupElement){
    this._popupElement = popupElement;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleLayoverClose = this._handleLayoverClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close()
    }
  }

  _handleLayoverClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close(evt.target);
    }
  };

  open() {
    this._popupElement.classList.add("popup_enabled");
    document.addEventListener("keydown", this._handleEscClose);
    this._popupElement.addEventListener("mousedown", this._handleLayoverClose);
  }

  close() {
    this._popupElement.classList.remove("popup_enabled");
    document.removeEventListener("keydown", this._handleEscClose);
    this._popupElement.removeEventListener("mousedown", this._handleLayoverClose);
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup__close")) {
        this.close();
      }
      
    });


}
}