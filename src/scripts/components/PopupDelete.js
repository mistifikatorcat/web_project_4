import { Popup } from "./Popup.js";

export class PopupDelete extends Popup{
    constructor(popupElement){
        super(popupElement)
        this._formElement = this._popupElement.querySelector(".popup__form");
        this._submitButton = this._popupElement.querySelector("#submitButton");
        //this._cancelButton = this._popupElement.querySelector("#cancelButton");
        this._text = this._submitButton.textContent;
    }

    setAction(action){
        this._handleSubmit = action; 
    }

    showLoading(){
        const submit = this._submitButton;
    
        submit.textContent = "Loading...";
      }
    
      hideLoading(){
        const submit = this._submitButton;
    
        submit.textContent = "Save";
      }

    setEventListeners(){
        this._formElement.addEventListener("submit", (e) => {
            e.preventDefault();

            this._handleSubmit();

        })
       // this._cancelButton.addEventListener("click", {
            //this._formElement.close();
       // })
       super.setEventListeners();
    }
}