import { Popup } from "./Popup.js";

export class PopupForm extends Popup {
  constructor(popupElement, handleFormSubmit) {
    super(popupElement);


    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._inputList = this._formElement.querySelectorAll(".form__input");
  }

  _getInputValues() {
    const inputs = {};

    this._inputList.forEach((input) => {
      const key = input.id;
      const value = input.value;
      inputs[key] = value;
    });
    return inputs;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    });
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close()
    this._formElement.reset()
}

}