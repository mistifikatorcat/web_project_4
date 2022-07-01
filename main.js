!function(){"use strict";function e(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class t{constructor(t,s,n){e(this,"_pressLike",(e=>{e.target.classList.toggle("card__like_active")})),e(this,"_pressDelete",(()=>{this._element.remove(),this._element=null})),this._title=t.title,this._link=t.link,this._cardSelector=s,this._handleCardClick=n}_getTemplate(){return document.querySelector(this._cardSelector).content.querySelector(".grid__card").cloneNode(!0)}generateCard(){this._element=this._getTemplate(),this._setEventListeners();const e=this._element.querySelector(".card__image"),t=this._element.querySelector(".card__title");return e.style.backgroundImage="url(".concat(this._link,")"),t.textContent=this._title,this._element}_setEventListeners(){this._element.querySelector(".card__like").addEventListener("click",this._pressLike),this._element.querySelector(".card__delete").addEventListener("click",this._pressDelete),this._element.querySelector(".card__image").addEventListener("click",(()=>{this._handleCardClick()}))}}function s(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var n=class{constructor(e,t){s(this,"_showInputError",((e,t)=>{const s=this._element.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),s.textContent=t,s.classList.add(this._errorClass)})),s(this,"_hideInputError",(e=>{const t=this._element.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._inputErrorClass),t.textContent=""})),s(this,"_checkInputValidity",(e=>{e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)})),s(this,"_toggleButtonState",(()=>{this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)})),this._inputSelector=e.inputSelector,this._fieldsetSelector=e.fieldsetSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._element=t,this._inputList=Array.from(t.querySelectorAll(this._inputSelector)),this._buttonElement=t.querySelector(this._submitButtonSelector)}resetValidationError(){this._inputList.forEach((e=>{this._hideInputError(e)})),this._toggleButtonState()}_hasInvalidInput(){return this._inputList.some((e=>!e.validity.valid))}_setEventListeners(){this._element.addEventListener("submit",(function(e){e.preventDefault()})),this._toggleButtonState(),this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}enableValidation(){this._element.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}};class i{constructor(e){var t,s;s=e=>{e.target===e.currentTarget&&this.close(e.target)},(t="_handleLayoverClose")in this?Object.defineProperty(this,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):this[t]=s,this._popupElement=e,this._handleEscClose=this._handleEscClose.bind(this),this._handleLayoverClose=this._handleLayoverClose.bind(this)}_handleEscClose(e){"Escape"===e.key&&this.close()}open(){this._popupElement.classList.add("popup_enabled"),document.addEventListener("keydown",this._handleEscClose),this._popupElement.addEventListener("mousedown",this._handleLayoverClose)}close(){this._popupElement.classList.remove("popup_enabled"),document.removeEventListener("keydown",this._handleEscClose),this._popupElement.removeEventListener("mousedown",this._handleLayoverClose)}setEventListeners(){this._popupElement.addEventListener("click",(e=>{e.target.classList.contains("popup__close")&&this.close()}))}}class r extends i{constructor(e,t){super(e),this._handleFormSubmit=t,this._formElement=this._popupElement.querySelector(".popup__form"),this._inputList=this._formElement.querySelectorAll(".form__input")}_getInputValues(){const e={};return this._inputList.forEach((t=>{const s=t.id,n=t.value;e[s]=n})),e}setEventListeners(){super.setEventListeners(),this._formElement.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues())}))}setInputValues(e){this._inputs.forEach((t=>{t.value=e[t.name]}))}close(){super.close(),this._formElement.reset()}}document.querySelector(".profile__name"),document.querySelector(".profile__category");const o=document.querySelector(".image"),l=(document.getElementById("title"),document.getElementById("link"),document.querySelector(".grid__cards"),document.querySelector(".profile__edit-button")),a=(document.querySelector(".edit__close"),document.querySelector(".edit")),c=(document.getElementById("editForm"),document.querySelector("#edit")),u=document.querySelector("#add"),d=document.getElementById("name"),_=document.getElementById("category"),h=document.querySelector(".profile__add-button"),m=(document.querySelector(".add__close"),document.querySelector(".add")),p=(document.getElementById("addForm"),document.querySelector(".form__button"),{formSelector:".form",inputSelector:".form__input",fieldsetSelector:".form__fieldset",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"}),E=new class{constructor(e,t){let{items:s,renderer:n}=e;this._items=s,this._renderer=n,this._container=document.querySelector(t)}addItem(e){const t=this._renderer(e);this._container.prepend(t)}renderItems(){this._items.forEach((e=>{this.addItem(e)}))}}({items:[{title:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{title:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{title:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{title:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{title:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{title:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],renderer:function(e){return new t(e,"#card",(()=>{g.open(e.title,e.link)})).generateCard()}},".grid__cards");E.renderItems();const y=new r(c,(e=>{f.setUserInfo(e.name,e.description),y.close()}));y.setEventListeners();const v=new r(u,(e=>{const t={title:e.title,link:e.link};E.addItem(t),v.close()}));v.setEventListeners();const g=new class extends i{constructor(e){super(e),this._imageTitle=this._popupElement.querySelector(".image__title"),this._imagePreview=this._popupElement.querySelector(".image__file")}open(e,t){super.open(),this._imagePreview.src=t,this._imagePreview.alt=e,this._imageTitle.textContent=e}}(o);g.setEventListeners();const f=new class{constructor(e){let{fullName:t,category:s}=e;this._fullName=document.querySelector(t),this._category=document.querySelector(s)}getUserInfo(){return{name:this._fullName.textContent,description:this._category.textContent}}setUserInfo(e,t){this._fullName.textContent=e,this._category.textContent=t}}({fullName:".profile__name",category:".profile__category"});l.addEventListener("click",(function(){const e=f.getUserInfo();d.value=e.name,_.value=e.description,L.resetValidationError(),y.open()})),h.addEventListener("click",(()=>{S.resetValidationError(),v.open()}));const L=new n(p,a),S=new n(p,m);L.enableValidation(),S.enableValidation()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZRCxHQUV2RGdDLEVBQWtCckUsbUJBQ2xCc0UsRUFBaUJ0RSxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwRm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF80Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Vc2VySW5mby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSwgY2FyZFNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2spIHtcclxuICAgIHRoaXMuX3RpdGxlID0gZGF0YS50aXRsZTtcclxuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XHJcblxyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gIH1cclxuXHJcbiAgX2dldFRlbXBsYXRlKCkge1xyXG4gICAgY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2NhcmRcIik7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKTtcclxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKTtcclxuXHJcbiAgICBjYXJkSW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuX2xpbmt9KWA7XHJcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIC8vbGlrZSBoYW5kbGVyXHJcbiAgICBjb25zdCBjYXJkTGlrZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlXCIpO1xyXG4gICAgY2FyZExpa2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX3ByZXNzTGlrZSk7XHJcblxyXG4gICAgLy9kZWxldGUgaGFuZGxlclxyXG4gICAgY29uc3QgY2FyZERlbGV0ZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19kZWxldGVcIik7XHJcbiAgICBjYXJkRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9wcmVzc0RlbGV0ZSk7XHJcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XHJcbiAgICBjYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vX2hhbmRsZUNhcmRDbGljayA9ICgpID0+IHtcclxuICAgLy8gdGhpcy5Qb3B1cEltYWdlXHJcbiAvLyB9XHJcblxyXG4gIF9wcmVzc0xpa2UgPSAoZXZ0KSA9PiB7XHJcbiAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlX2FjdGl2ZVwiKTtcclxuICB9O1xyXG5cclxuICBfcHJlc3NEZWxldGUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XHJcbiAgfTtcclxufSIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgZm9ybUVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBjb25maWcuaW5wdXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX2ZpZWxkc2V0U2VsZWN0b3IgPSBjb25maWcuZmllbGRzZXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gY29uZmlnLmlucHV0RXJyb3JDbGFzcztcclxuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBjb25maWcuZXJyb3JDbGFzcztcclxuXHJcbiAgICB0aGlzLl9lbGVtZW50ID0gZm9ybUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxyXG4gICAgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9O1xyXG5cclxuICBfaGlkZUlucHV0RXJyb3IgPSAoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxyXG4gICAgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9O1xyXG5cclxuICByZXNldFZhbGlkYXRpb25FcnJvcigpIHtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfaGFzSW52YWxpZElucHV0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF90b2dnbGVCdXR0b25TdGF0ZSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQodGhpcy5faW5wdXRMaXN0KSkge1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcblxyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7IiwiZXhwb3J0IGNsYXNzIFBvcHVwe1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwRWxlbWVudCl7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBwb3B1cEVsZW1lbnQ7XHJcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9oYW5kbGVMYXlvdmVyQ2xvc2UgPSB0aGlzLl9oYW5kbGVMYXlvdmVyQ2xvc2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcclxuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUxheW92ZXJDbG9zZSA9IChldnQpID0+IHtcclxuICAgIGlmIChldnQudGFyZ2V0ID09PSBldnQuY3VycmVudFRhcmdldCkge1xyXG4gICAgICB0aGlzLmNsb3NlKGV2dC50YXJnZXQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvcHVwX2VuYWJsZWRcIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9oYW5kbGVMYXlvdmVyQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX2VuYWJsZWRcIik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9oYW5kbGVMYXlvdmVyQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcclxuICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfX2Nsb3NlXCIpKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxufVxyXG59IiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cEVsZW1lbnQsIGhhbmRsZUZvcm1TdWJtaXQpIHtcclxuICAgIHN1cGVyKHBvcHVwRWxlbWVudCk7XHJcblxyXG5cclxuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9faW5wdXRcIik7XHJcbiAgfVxyXG5cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBpbnB1dHMgPSB7fTtcclxuXHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gaW5wdXQuaWQ7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgIGlucHV0c1trZXldID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbnB1dHM7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldElucHV0VmFsdWVzKGRhdGEpIHtcclxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IGRhdGFbaW5wdXQubmFtZV07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKVxyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQucmVzZXQoKVxyXG59XHJcblxyXG59IiwiLy9pbml0aWFsIGltYWdlc1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUveW9zZW1pdGUuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQmFsZCBNb3VudGFpbnNcIixcclxuICAgICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkxhdGVtYXJcIixcclxuICAgICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkxhZ28gZGkgQnJhaWVzXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIixcclxuICAgIH0sXHJcbiAgXTtcclxuICBcclxuLy9wcm9maWxlIGNvbnN0c1xyXG5cclxuZXhwb3J0IGNvbnN0IGZ1bGxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xyXG5leHBvcnQgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2NhdGVnb3J5XCIpO1xyXG5cclxuLy9pbWFnZSBjb25zdHNcclxuZXhwb3J0IGNvbnN0IHBvcHVwSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlXCIpO1xyXG5leHBvcnQgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XHJcbmV4cG9ydCBjb25zdCBsaW5rSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmtcIik7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkX19jYXJkc1wiKTtcclxuXHJcbi8vcHJvZmlsZSBmb3JtIGNvbnN0c1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1dHRvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xyXG5leHBvcnQgY29uc3QgY2xvc2VFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0X19jbG9zZVwiKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0XCIpO1xyXG5leHBvcnQgY29uc3QgZWRpdEZvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0Rm9ybVwiKTtcclxuXHJcbi8vcG9wdXAgZm9ybSBjb25zdHNcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0UG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQnKTtcclxuZXhwb3J0IGNvbnN0IGFkZFBvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQnKTtcclxuXHJcbi8vaW5wdXRzXHJcbmV4cG9ydCBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XHJcbmV4cG9ydCBjb25zdCBqb2JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnlcIik7XHJcblxyXG4vLyBpbWFnZSBmb3JtIGNvbnN0c1xyXG5leHBvcnQgY29uc3QgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xyXG5leHBvcnQgY29uc3QgY2xvc2VBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF9fY2xvc2VcIik7XHJcbmV4cG9ydCBjb25zdCBmb3JtQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRcIik7XHJcbmV4cG9ydCBjb25zdCBhZGRGb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkRm9ybVwiKTtcclxuZXhwb3J0IGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2J1dHRvblwiKTtcclxuXHJcbi8vdmFsaWRhdGlvbiBjb25zdHNcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtQ29uZmlnID0ge1xyXG4gICAgZm9ybVNlbGVjdG9yOiBcIi5mb3JtXCIsXHJcbiAgICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtX19pbnB1dFwiLFxyXG4gICAgZmllbGRzZXRTZWxlY3RvcjogXCIuZm9ybV9fZmllbGRzZXRcIixcclxuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtX19idXR0b25cIixcclxuICAgIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybV9fYnV0dG9uX2luYWN0aXZlXCIsXHJcbiAgICBpbnB1dEVycm9yQ2xhc3M6IFwiZm9ybV9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gICAgZXJyb3JDbGFzczogXCJmb3JtX19pbnB1dC1lcnJvcl9hY3RpdmVcIixcclxuICB9OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tIFwiLi4vc2NyaXB0cy9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9zY3JpcHRzL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vc2NyaXB0cy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IHsgUG9wdXBGb3JtIH0gZnJvbSBcIi4uL3NjcmlwdHMvY29tcG9uZW50cy9Qb3B1cEZvcm0uanNcIjtcclxuXHJcbmltcG9ydCB7IFBvcHVwSW1hZ2UgfSBmcm9tIFwiLi4vc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwSW1hZ2UuanNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uL3NjcmlwdHMvY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBpbml0aWFsQ2FyZHMsXHJcbiAgZm9ybUNvbmZpZyxcclxuICBmb3JtQWRkLFxyXG4gIGZvcm1FZGl0LFxyXG4gIGFkZFBvcHVwRWxlbWVudCxcclxuICBhZGRGb3JtRWxlbWVudCxcclxuICBlZGl0Rm9ybUVsZW1lbnQsXHJcbiAgZWRpdFBvcHVwRWxlbWVudCxcclxuICBidXR0b25BZGQsXHJcbiAgYnV0dG9uRWRpdCxcclxuICBuYW1lSW5wdXQsXHJcbiAgam9iSW5wdXQsXHJcbiAgcG9wdXBJbWFnZSxcclxufSBmcm9tIFwiLi4vc2NyaXB0cy91dGlscy9jb25zdGFudHMuanNcIjtcclxuXHJcblxyXG5cclxuXHJcbi8vc3VibWl0dGluZyBjYXJkXHJcblxyXG5jb25zdCBzdWJtaXRDYXJkID0gKGRhdGEpID0+IHtcclxuXHJcbmNvbnN0IG5ld0ltYWdlID0ge1xyXG4gIHRpdGxlOiBkYXRhWyd0aXRsZSddLFxyXG4gIGxpbms6IGRhdGFbJ2xpbmsnXVxyXG59O1xyXG5jYXJkTGlzdC5hZGRJdGVtKG5ld0ltYWdlKTtcclxuXHJcbmNhcmRGb3JtLmNsb3NlKCk7XHJcblxyXG59XHJcblxyXG4vL3N1Ym1pdHRpbmcgcHJvZmlsZVxyXG5cclxuY29uc3Qgc3VibWl0UHJvZmlsZSA9IChkYXRhKSA9PiB7XHJcbiAgdXNlckluZm8uc2V0VXNlckluZm8oZGF0YS5uYW1lLCBkYXRhLmRlc2NyaXB0aW9uKVxyXG5cclxuICBwcm9maWxlRm9ybS5jbG9zZSgpXHJcbn1cclxuXHJcbi8vZGlzcGxheWluZyBjYXJkcyBpbiBnYWxsZXJ5XHJcblxyXG5jb25zdCBjYXJkTGlzdCA9IG5ldyBTZWN0aW9uKFxyXG4gIHtcclxuICAgIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXHJcbiAgICByZW5kZXJlcjogcmVuZGVyQ2FyZCxcclxuICB9LFxyXG4gIFwiLmdyaWRfX2NhcmRzXCJcclxuKTtcclxuXHJcbmNhcmRMaXN0LnJlbmRlckl0ZW1zKCk7XHJcblxyXG4vL3VzZXIgaW5mbyBzZWN0aW9uXHJcblxyXG5jb25zdCBwcm9maWxlRm9ybSA9IG5ldyBQb3B1cEZvcm0oZWRpdFBvcHVwRWxlbWVudCwgc3VibWl0UHJvZmlsZSlcclxucHJvZmlsZUZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8vY2FyZCBzZWN0aW9uXHJcblxyXG5jb25zdCBjYXJkRm9ybSA9IG5ldyBQb3B1cEZvcm0oYWRkUG9wdXBFbGVtZW50LCBzdWJtaXRDYXJkKVxyXG5jYXJkRm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLy9pbWFnZSBzZWN0aW9uXHJcblxyXG5jb25zdCBpbWFnZU1vZHVsZSA9IG5ldyBQb3B1cEltYWdlKHBvcHVwSW1hZ2UpO1xyXG5pbWFnZU1vZHVsZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuXHJcbi8vYWRkaW5nIGNhcmQgdG8gZ2FsbGVyeVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2FyZChjYXJkKSB7XHJcbiAgY29uc3QgaW1hZ2UgPSBuZXcgQ2FyZChjYXJkLCBcIiNjYXJkXCIsICgpID0+IHtcclxuICAgIGltYWdlTW9kdWxlLm9wZW4oY2FyZC50aXRsZSwgY2FyZC5saW5rKTtcclxuICB9KTtcclxuICByZXR1cm4gaW1hZ2UuZ2VuZXJhdGVDYXJkKCk7XHJcbn1cclxuXHJcblxyXG4vL2dldHRpbmcgdGhlIGN1cnJlbnQgdXNlciBpbmZvXHJcblxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XHJcbiAgZnVsbE5hbWU6IFwiLnByb2ZpbGVfX25hbWVcIixcclxuICBjYXRlZ29yeTogXCIucHJvZmlsZV9fY2F0ZWdvcnlcIixcclxufSk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9maWxlKCl7XHJcbiAgY29uc3QgcHJvZmlsZSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XHJcblxyXG4gIG5hbWVJbnB1dC52YWx1ZSA9IHByb2ZpbGUubmFtZVxyXG4gIGpvYklucHV0LnZhbHVlID0gcHJvZmlsZS5kZXNjcmlwdGlvbjtcclxuICBcclxuICBlZGl0Rm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xyXG4gIHByb2ZpbGVGb3JtLm9wZW4oKTtcclxufVxyXG5cclxuXHJcbi8vaGFuZGxlcnNcclxuXHJcbmJ1dHRvbkVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclByb2ZpbGUpO1xyXG5cclxuYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgYWRkRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xyXG4gIGNhcmRGb3JtLm9wZW4oKTtcclxufSk7XHJcblxyXG5cclxuLy92YWxpZGF0b3Igc2V0dGluZ3NcclxuXHJcbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybUNvbmZpZywgZm9ybUVkaXQpO1xyXG5jb25zdCBhZGRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybUNvbmZpZywgZm9ybUFkZCk7XHJcblxyXG5lZGl0Rm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG4iLCJleHBvcnQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5zZXJ0cyBlbGVtZW50IHRvIHRoZSBjb250YWluZXJcclxuICBhZGRJdGVtKGRhdGEpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yZW5kZXJlcihkYXRhKVxyXG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudClcclxuICB9O1xyXG5cclxuICAvLyByZW5kZXJzIGluaXRpYWwgaXRlbXNcclxuICByZW5kZXJJdGVtcygpIHtcclxuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGRhdGEpID0+IHtcclxuICAgICAgdGhpcy5hZGRJdGVtKGRhdGEpXHJcbiAgICB9KVxyXG4gIH07XHJcbn0iLCJpbXBvcnQgeyBQb3B1cCB9IGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXBJbWFnZSBleHRlbmRzIFBvcHVwe1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBFbGVtZW50KXtcclxuICAgICAgICBzdXBlcihwb3B1cEVsZW1lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLl9pbWFnZVRpdGxlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VfX3RpdGxlXCIpO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlUHJldmlldyA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlX19maWxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4odGl0bGUsIGxpbmspe1xyXG4gICAgXHJcbiAgICAgICAgc3VwZXIub3BlbigpXHJcbiAgICB0aGlzLl9pbWFnZVByZXZpZXcuc3JjID0gbGluaztcclxuICAgIHRoaXMuX2ltYWdlUHJldmlldy5hbHQgPSB0aXRsZTtcclxuICAgIHRoaXMuX2ltYWdlVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiBcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IGZ1bGxOYW1lLCBjYXRlZ29yeSB9KSB7XHJcbiAgICAgIHRoaXMuX2Z1bGxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihmdWxsTmFtZSk7XHJcbiAgICAgIHRoaXMuX2NhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXRlZ29yeSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRVc2VySW5mbygpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiB0aGlzLl9mdWxsTmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5fY2F0ZWdvcnkudGV4dENvbnRlbnQsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHNldFVzZXJJbmZvKCBuYW1lLCBkZXNjcmlwdGlvbiApIHtcclxuICAgICAgdGhpcy5fZnVsbE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICB0aGlzLl9jYXRlZ29yeS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXSwibmFtZXMiOlsiQ2FyZCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImNhcmRTZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsImV2dCIsInRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRoaXMiLCJfZWxlbWVudCIsInJlbW92ZSIsIl90aXRsZSIsInRpdGxlIiwiX2xpbmsiLCJsaW5rIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfZ2V0VGVtcGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiZ2VuZXJhdGVDYXJkIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiY2FyZEltYWdlIiwiY2FyZFRpdGxlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcHJlc3NMaWtlIiwiX3ByZXNzRGVsZXRlIiwiY29uZmlnIiwiZm9ybUVsZW1lbnQiLCJpbnB1dEVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJpZCIsImFkZCIsIl9pbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJfaW5wdXRMaXN0IiwiX2J1dHRvbkVsZW1lbnQiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImRpc2FibGVkIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX2ZpZWxkc2V0U2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXNldFZhbGlkYXRpb25FcnJvciIsImZvckVhY2giLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJzb21lIiwicHJldmVudERlZmF1bHQiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiZW5hYmxlVmFsaWRhdGlvbiIsIlBvcHVwIiwicG9wdXBFbGVtZW50IiwiY3VycmVudFRhcmdldCIsImNsb3NlIiwiX3BvcHVwRWxlbWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJfaGFuZGxlTGF5b3ZlckNsb3NlIiwia2V5Iiwib3BlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRFdmVudExpc3RlbmVycyIsImNvbnRhaW5zIiwiUG9wdXBGb3JtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInN1cGVyIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfZm9ybUVsZW1lbnQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJpbnB1dHMiLCJpbnB1dCIsInZhbHVlIiwiZSIsInNldElucHV0VmFsdWVzIiwiX2lucHV0cyIsIm5hbWUiLCJyZXNldCIsInBvcHVwSW1hZ2UiLCJidXR0b25FZGl0IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JtRWRpdCIsImVkaXRQb3B1cEVsZW1lbnQiLCJhZGRQb3B1cEVsZW1lbnQiLCJuYW1lSW5wdXQiLCJqb2JJbnB1dCIsImJ1dHRvbkFkZCIsImZvcm1BZGQiLCJmb3JtQ29uZmlnIiwiZm9ybVNlbGVjdG9yIiwiY2FyZExpc3QiLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiYWRkSXRlbSIsImVsZW1lbnQiLCJwcmVwZW5kIiwicmVuZGVySXRlbXMiLCJjYXJkIiwiaW1hZ2VNb2R1bGUiLCJwcm9maWxlRm9ybSIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJkZXNjcmlwdGlvbiIsImNhcmRGb3JtIiwibmV3SW1hZ2UiLCJfaW1hZ2VUaXRsZSIsIl9pbWFnZVByZXZpZXciLCJzcmMiLCJhbHQiLCJmdWxsTmFtZSIsImNhdGVnb3J5IiwiX2Z1bGxOYW1lIiwiX2NhdGVnb3J5IiwiZ2V0VXNlckluZm8iLCJwcm9maWxlIiwiZWRpdEZvcm1WYWxpZGF0b3IiLCJhZGRGb3JtVmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRvciJdLCJzb3VyY2VSb290IjoiIn0=