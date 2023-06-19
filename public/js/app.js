const icon = document.querySelector('.icon-error');

//input
const email = document.getElementById('email');


//button
const btn = document.querySelector('.btn-submit');

//form
const form = document.getElementById('form');


//events
form.addEventListener('submit', validation);

// btn.disabled = true;

//Validation input
function validation(e) {
    e.preventDefault();

    const mail = email.value.trim();

    if(mail === ''){
        notification('Field required');
        icon.style.display = 'block';

    }

    if(mail === !validateEmail(email)){
        notification('Please provide a valid email');
        icon.style.display = 'block';
    }

     

}

//alert
function notification(alert) {
    
    clearAlert();
    
    const p = document.createElement('p');
    
    p.textContent = alert;
    p.classList.add('alert');

    btn.after(p);

}

function clearAlert() {
    const alert = document.querySelector('.alert');
    if(alert){
        alert.remove();
    }
}

//validation email
function validateEmail(email) {
    
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const result = regex.test(email);
    return result;

}
