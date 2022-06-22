import { Popup } from "./Popup.js";

export class PopupForm extends Popup {
    constructor(popupSelector, handleFormSubmit){
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formSelector = popupSelector.querySelector(".form");
    }

_getInputValues(){
    const inputList = Array.from(
        this._formSelector.querySelectorAll(".form__input")
    );

        const inputs = {};

        inputList.forEach((input) => {
            inputs[input.name] = input.value;
        });
        return inputs;
}

setEventListeners() {
    super.setEventListeners();
     this._formSelector.addEventListener("submit", (e) => {
        e.preventDefault();

      this._handleFormSubmit(this._getInputValues())
     });
  }

}