const validation = {
  formSelector: ".form",
  inputSelector: ".form__input",
  //fieldsetSelector: ".form__fieldset",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};


const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validation.errorClass);
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validation.inputErrorClass);
    errorElement.classList.remove(validation.inputErrorClass);
    errorElement.textContent = "";
  };

  export function resetValidationError(formElement) {
    const inputList = Array.from(
      formElement.querySelectorAll(validation.inputSelector)
    );
  
    const buttonElement = formElement.querySelector(
      validation.submitButtonSelector
    );
  
    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement);
    });
  
    toggleButtonState(inputList, buttonElement);
  }
  
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  export const toggleButtonState = (inputList, buttonElement, validation) => {
    //console.log(buttonElement);
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validation.inactiveButtonClass);
      buttonElement.disabled = true;
      //console.log(inputList);
    } else {
      buttonElement.classList.remove(validation.inactiveButtonClass);
      buttonElement.disabled = false;
      //console.log(inputList);
    }
  };
  
  const setEventListeners = (formElement, validation) => {
    const inputList = Array.from(formElement.querySelectorAll(validation.inputSelector));
    const buttonElement = formElement.querySelector(validation.submitButtonSelector);
   // console.log(validation.submitButtonSelector) 
    //toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validation.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
  
        setEventListeners(formElement, validation);
      });
  };
  
  enableValidation(validationConfig);
  