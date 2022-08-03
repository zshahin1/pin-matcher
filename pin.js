function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        if(number == "DEL"){
            calcInput.value = calcInput.value.slice(0, -1);
        }
       
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    const submit = document.getElementById('submit');
    const submit2 = document.getElementById('submit-2');
    const calcInput = document.getElementById('typed-numbers');

    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
        calcInput.value = '';
        

    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
        submit.style.display = 'none';
        submit2.style.display = 'block';
        calcInput.value = '';
    }
}
function verifyPin2() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    const submit = document.getElementById('submit');
    const submit2 = document.getElementById('submit-2');
    const submit3 = document.getElementById('submit-3');
    const calcInput = document.getElementById('typed-numbers');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
        calcInput.value = '';

    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
        submit.style.display = 'none';
        submit2.style.display = 'none';
        submit3.style.display = 'block';
        calcInput.value = '';
    }
}
function verifyPin3() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    const submit = document.getElementById('submit');
    const submit2 = document.getElementById('submit-2');
    const submit3 = document.getElementById('submit-3');
    const submit4 = document.getElementById('submit-4');
    const calcInput = document.getElementById('typed-numbers');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
        calcInput.value = '';
        

    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
        submit2.style.display = 'none';
        submit3.style.display = 'none';
        submit4.style.display = 'block';
        calcInput.value = '';
    }
}


