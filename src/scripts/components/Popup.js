export class Popup{
  constructor(popupSelector){
    this._popupSelector = popupSelector;
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
    this._popupSelector.classList.add("popup_enabled");
    document.addEventListener("keydown", this._handleEscClose);
    this._popupSelector.addEventListener("mousedown", this._handleLayoverClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_enabled");
    document.removeEventListener("keydown", this._handleEscClose);
    this._popupSelector.removeEventListener("mousedown", this._handleLayoverClose);
  }

  setEventListeners() {
    this._popupSelector.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup__close")) {
        this.close();
      }
      
    });


}
}