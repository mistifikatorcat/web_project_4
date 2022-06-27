import { Popup } from "./Popup.js";

export class PopupImage extends Popup{
    constructor(popupElement){
        super(popupElement);

        this._imageTitle = this._popupElement.querySelector(".image__title");
        this._imagePreview = this._popupElement.querySelector(".image__file");
    }

    open(title, link){
    
        super.open()
    this._imagePreview.src = link;
    this._imagePreview.alt = title;
    this._imageTitle.textContent = title;

 
    }
}