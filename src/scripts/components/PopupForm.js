import { Popup } from "./Popup.js";

export class PopupForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formSelector = document.querySelector(".popup__form");
    this._inputList = this._formSelector.querySelectorAll(".form__input");
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
    this._formSelector.addEventListener("submit", (e) => {
      e.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    });
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }
}