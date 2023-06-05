import throttle from "lodash.throttle";


const form = document.querySelector(".feedback-form");

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle((onFormInput),500));

const keyLogin = 'feedback-form-state';
const data = JSON.parse(localStorage.getItem(keyLogin));

    if (JSON.parse(localStorage.getItem(keyLogin))) {
        form.elements.email.value = data.email;
        form.elements.message.value = data.message;
    }

function onFormInput() {
    const userData = {
      email:form.elements.email.value,
    message:form.elements.message.value
  }
    localStorage.setItem(keyLogin, JSON.stringify(userData));
};

function onFormSubmit(evt) {
    evt.preventDefault();
    if (JSON.parse(localStorage.getItem(keyLogin))) {
        localStorage.removeItem(keyLogin);
        form.reset();
        return;
    }
    
};
