function closeOnEscape(evt) {  
    if (evt.key === "Escape") {  
      const popup = document.querySelector(".popup_enabled");  
      closePopup(popup);  
    }  
  }
  
  function openPopup(popup) {
    popup.classList.add("popup_enabled"); 
    document.addEventListener("keydown", closeOnEscape); 
    popup.addEventListener("mousedown", closeOnLayover);
   }
  
  function closePopup(popup) {  
    popup.classList.remove("popup_enabled"); 
    document.removeEventListener("keydown", closeOnEscape);
    popup.removeEventListener("mousedown", closeOnLayover);   
  }
  
  
  const closeOnLayover = (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
    }
  }

  export {openPopup, closePopup};