const validation = {
  formSelector: ".form",
  inputSelector: ".form__input",
  //fieldsetSelector: ".form__fieldset",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};


const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass);
  };
  
  const hideInputError = (formElement, inputElement, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = "";
  };

  export function resetValidationError(formElement, validationConfig) {
    const inputList = Array.from(
      formElement.querySelectorAll(validationConfig.inputSelector)
    );
  
    const buttonElement = formElement.querySelector(
      validationConfig.submitButtonSelector
    );
  
    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement, validationConfig);
    });
  
    toggleButtonState(inputList, buttonElement, validationConfig);
  }
  
  
  const checkInputValidity = (formElement, inputElement, validationConfig) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
    } else {
      hideInputError(formElement, inputElement, validationConfig);
    }
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  export const toggleButtonState = (inputList, buttonElement, validationConfig) => {
    //console.log(buttonElement);
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validationConfig.inactiveButtonClass);
      buttonElement.disabled = true;
      //console.log(inputList);
    } else {
      buttonElement.classList.remove(validationConfig.inactiveButtonClass);
      buttonElement.disabled = false;
      //console.log(inputList);
    }
  };
  
  const setEventListeners = (formElement, validationConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
   // console.log(validation.submitButtonSelector) 
    //toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement, validationConfig);
      });
    });
  };
  
  const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
  
        setEventListeners(formElement, validationConfig);
      });
  };
  
  enableValidation(validation);
  