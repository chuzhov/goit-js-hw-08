import { saveToLocalStorage, loadFromLocalStorage, removeFromLocalStorage } from './safe-storage-module';
import throttle from 'lodash.throttle';

const FORM_CONTENT_KEY = "feedback-form-state";
let formContent = loadFromLocalStorage(FORM_CONTENT_KEY) ?? {
    email: "",
    message: "",
}

const form = document.querySelector("form.feedback-form");

if (formContent.email !=="" || formContent.message !=="") {
    form.elements.email.value = formContent.email;
    form.elements.message.value = formContent.message;
};

const throttledHandleForm = throttle(handleForm, 500);
function handleForm(event) {
    formContent[event.target.name] = event.target.value;
    saveToLocalStorage(FORM_CONTENT_KEY, formContent);
};

function submitForm(event) {
    event.preventDefault();
    // в заданні немає такого, але перевіряєм валідність даніх
    if (formContent.email !=="" && formContent.message !=="") {
        console.log(formContent);

        removeFromLocalStorage(FORM_CONTENT_KEY);
        formContent.email = "";
        formContent.message = "";
        
        event.target.reset();
    }
}

form.addEventListener("input", throttledHandleForm);
form.addEventListener("submit", submitForm);



