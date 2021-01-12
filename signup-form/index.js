var firstName = document.getElementById("first-input");
var lastName = document.getElementById('last-name');
var emailAddress = document.getElementById('email-address');
var password = document.getElementById('password');
var claimButton = document.getElementById('claim-button');
var errorSpan = document.getElementsByClassName('error-text');
var inputBox = document.getElementsByClassName('inpt');
function onClaimButtonClick() {
    if (firstName.value == null || firstName.value == "") {
        showError(0, 'First Name cannot be empty');
    } else {
        removeError(0);
    }
    if (lastName.value == null || lastName.value == "") {
        showError(1, 'Last Name cannot be empty');
    } else {
        removeError(1);
    }

    if (emailAddress.value == null || emailAddress.value == "") {
        showError(2, 'Email Address cannot be empty');
    } else {
        removeError(2);
    }

    if (password.value == null || password.value == "") {
        showError(3, 'Password cannot be empty');
    } else {
        removeError(3)
    }
}

function showError(index, text) {
    inputBox[index].style.borderColor = "#ff7a7a";
    errorSpan[index].innerHTML = text;
    errorSpan[index].style.display = 'block';
}

function removeError(index) {
    inputBox[index].style.borderColor = "gray";
    errorSpan[index].style.display = 'none';
    errorSpan[index].innerHTML = '';
}