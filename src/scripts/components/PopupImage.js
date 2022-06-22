import { Popup } from "./Popup.js";

export class PopupImage extends Popup{
    open(link, title){
    const imagePreview = this._popupSelector.querySelector(".image__file");
    const imageTitle = this._popupSelector.querySelector(".image__title");

    imagePreview.src = link;
    imagePreview.alt = title;
    imageTitle.textContent = title;

    super.open();
    }
}