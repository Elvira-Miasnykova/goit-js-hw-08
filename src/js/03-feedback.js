import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector(".feedback-form"),
    
}
const LOCAL_KEY = 'feedback-form-state';

initForm();

refs.form.addEventListener('submit', e =>{
    e.preventDefault();
    const formData = new FormData(refs.form);
    formData.forEach((value, name) => console.log(value, name)); 
    localStorage.removeItem(LOCAL_KEY);
    //console.log(e.currentTarget);
    e.currentTarget.reset();
    
});

function onFormInput(e) {
    let currentInputs = localStorage.getItem(LOCAL_KEY);
    currentInputs = currentInputs ? JSON.parse(currentInputs) : {};
    currentInputs[e.target.name] = e.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(currentInputs));
}

function initForm() {
    let localInputs = localStorage.getItem(LOCAL_KEY);
    if (localInputs) {
        localInputs = JSON.parse(localInputs);
        Object.entries(localInputs).forEach(([name, value]) => {
            refs.form.elements[name].value = value;
        });
        
    }
    
}



refs.form.addEventListener('input', throttle(onFormInput, 500));



