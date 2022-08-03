import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
}
const LOCAL_KEY = 'feedback-form-state';

const formData = {};    



fillingInInputarea();

function onFormInput(e) {
    //const formElements = e.currentTarget.elements;
    //console.log(formElements);
    //const mail = formElements.email.value;
    //const message = formElements.message.value;
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}



function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));
    e.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
}

function fillingInInputarea() {
    const savedMessage = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (savedMessage) {
        refs.email.value = savedMessage.email;
        refs.textarea.value = savedMessage.message;
    }
    else {
        refs.email.value = '';
        refs.textarea.value = '';
    }
}

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


//refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));


// const currentForm = event.currentTarget;
//     const formElements = event.currentTarget.elements;
//     //console.log(formElements);
//     const mail = formElements.email.value;
//     const password = formElements.password.value;

//     if (mail === "" || password === "") {
//         alert('Warning: fill in all fields!');
//     }
//     else {
//         const formData = {
//             mail,
//             password,
//         };
//         console.log(formData);
//         currentForm.reset();
//     }

