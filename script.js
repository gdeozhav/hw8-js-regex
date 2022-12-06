const inputFields = document.querySelectorAll('input');
const register = document.querySelector('.register');

const login = document.querySelector('.login');
const password = document.querySelector('.password');
const phone = document.querySelector('.phone');
const mail = document.querySelector('.mail');

const tempLogin = "^[a-z]{4,12}$";
const regLogin = new RegExp(tempLogin);

const tempPass = "^[A-Z](?=(?:[^A-Z]*[A-Z]){2,}(?![^A-Z]*[A-Z]))(?=(?:[^0-9]*[0-9]){2}(?![^0-9]*[0-9]))[A-Za-z0-9]{5,11}$";
const regPass = new RegExp(tempPass);

const tempPhone = "^(\\+7|8)?\\(?([0-9]{3})\\)?([0-9]{3})\\-?([0-9]{2})\\-?([0-9]{2})$";
const regPhone = new RegExp(tempPhone);

const tempMail = "^([A-z0-9+_.-]+)@(mail|gmail|rambler|protonmail|outlook|hotmail|yahoo|zoho|gmx|yandex|ya)\.(com|ru)$";
const regMail = new RegExp(tempMail);


function showRight(input) {
    let check = input.nextElementSibling; //get icon element

    check.innerHTML = 'done'; //show icon
    check.style.color = 'green';
    input.style.outline = 'solid 1px green'
}

function showWrong(input) {
    let check = input.nextElementSibling; //get icon element

    check.innerHTML = 'close'; //show icon
    check.style.color = 'firebrick';
    input.style.outline = 'solid 1px firebrick'
}

function checkRegExp(expr, input) {
    if(expr.test(input.value)) {

        showRight(input);
    }
    else {
        showWrong(input);
    }
}

inputFields[0].addEventListener('input', function() {
    checkRegExp(regLogin, login);
})

inputFields[1].addEventListener('input', function() {
    checkRegExp(regPass, password);
})

inputFields[2].addEventListener('input', function() {
    checkRegExp(regPhone, phone);
})

inputFields[3].addEventListener('input', function() {
    checkRegExp(regMail, mail);
})

register.addEventListener('click', function() {
    inputFields.forEach(inputField => {
        if (inputField.nextElementSibling.innerHTML != 'done') {
            inputField.style.background = 'rgb(255, 218, 218)';
        }
        else {
            inputField.style.background = 'white';
            localStorage.setItem(inputField.className, inputField.value);
        }
    })
})