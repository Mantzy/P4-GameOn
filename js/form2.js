//functionality to the form inputs
function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }

    return (false)
}


function Success() {
    document.getElementById('success').style.display = "block";

}



const submitBtn = document.querySelectorAll(".btn-submit")
submitBtn.forEach((btn) => btn.addEventListener("click", function(e) {
    e.preventDefault();
    validate();
}));

function validate() {


    //getting data
    var reservation = {
        first: document.getElementById('first').value,
        last: document.getElementById('last').value,
        email: document.getElementById('email').value,
        birthdate: document.getElementById('birthdate').value,
        quantity: document.getElementById('quantity').value

    }

    var location = document.reserve.location.value;
    var terms = document.reserve.checkbox1;


    var firstError = true;
    var lastError = true;
    var mailError = true;
    var birthdateError = true;
    var quantityError = true;
    var locationError = true;
    var termsError = true;


    //first name validation
    if (reservation.first == "") {
        document.getElementById('first').style.borderColor = "red";
        document.getElementById('firstError').innerHTML = "Please enter the first name!"
        firstError = true;
        //alert("nope")
    } else
    if (reservation.first.length < 2) {
        firstError = true;
        document.getElementById('first').style.borderColor = "red";
        document.getElementById('firstError').innerHTML = "The first name should be more than 2 characters!"
    } else {
        firstError = false;
        document.getElementById('first').style.borderColor = "black";
        document.getElementById('firstError').innerHTML = ""
    }

    //last name validation
    if (reservation.last == "") {
        lastError = true;
        document.getElementById('first').style.borderColor = "red";
        document.getElementById('firstError').innerHTML = "Please enter the last name!"
    } else if (reservation.last.length < 2) {
        document.getElementById('first').style.borderColor = "red";
        document.getElementById('firstError').innerHTML = "The last name should be more than 2 characters!"
        lastError = true;
    } else {
        lastError = false;
        document.getElementById('first').style.borderColor = "black";
        document.getElementById('firstError').innerHTML = ""
    }

    //validate email
    if (reservation.email == "") {
        document.getElementById('first').style.borderColor = "red";
        document.getElementById('firstError').innerHTML = "Please enter your email address!"
        mailError = true;
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(reservation.email) === false) {
        document.getElementById('first').style.borderColor = "red";
        document.getElementById('firstError').innerHTML = "Please enter valid email address!"
        mailError = true;
    } else {
        mailError = false;
        document.getElementById('first').style.borderColor = "black";
        document.getElementById('firstError').innerHTML = ""
    }

    //validate birth date
    if (reservation.birthdate == "") {
        document.getElementById('first').style.borderColor = "red";
        document.getElementById('firstError').innerHTML = "Please enter your birth date!"
        birthdateError = true;
    } else {
        birthdateError = false;
        document.getElementById('first').style.borderColor = "black";
        document.getElementById('firstError').innerHTML = ""
    }

    //validate number of tournaments
    if (reservation.quantity == "") {
        document.getElementById('first').style.borderColor = "red";
        document.getElementById('firstError').innerHTML = "Please enter a number!"
        quantityError = true;
    } else {
        quantityError = false;
        document.getElementById('first').style.borderColor = "black";
        document.getElementById('firstError').innerHTML = ""
    }

    //validate location
    if (location == "") {
        document.getElementById('first').style.borderColor = "red";
        document.getElementById('firstError').innerHTML = "Please choose a location!"
        locationError = true;
    } else {
        locationError = false;
        document.getElementById('first').style.borderColor = "black";
        document.getElementById('firstError').innerHTML = ""
    }

    //validate terms and condition
    if (!terms.checked) {
        document.getElementById('first').style.borderColor = "red";
        document.getElementById('firstError').innerHTML = "Please accept!"
        termsError = true;
        alert("term")
    } else {
        termsError = false;
        document.getElementById('first').style.borderColor = "black";
        document.getElementById('firstError').innerHTML = ""
    }

    if (firstError || lastError || mailError || birthdateError || quantityError || locationError || termsError) {
        return false;
    } else {
        closeModal();
        Success();

        return true;
    }





}