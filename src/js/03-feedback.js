import { saveToLocalStorage, loadFromLocalStorage } from './safe-storage-module';
import throttle from 'lodash.throttle';

const FORM_CONTENT_KEY = "feedback-form-state";
let formContent = loadFromLocalStorage(FORM_CONTENT_KEY) ?? {
    email: "",
    msg: "",
}

const form = document.querySelector("form.feedback-form");
debugger
const throttledHandleForm = throttle(handleForm, 500);
function handleForm(event) {
    console.dir(event);
};
form.addEventListener("input", throttledHandleForm);




