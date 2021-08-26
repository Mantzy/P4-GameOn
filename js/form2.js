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
submitBtn.forEach((btn) => btn.addEventListener("click", validate));

function validate() {

    //getting data
    var reservation = {
        first: document.getElementById('first').value,
        last: document.getElementById('last').value,
        email: document.getElementById('email').value,
        birthdate: document.getElementById('birthdate').value,
        quantity: document.getElementById('quantity').value,
        location: document.getElementsByName('location'),
        terms: document.getElementById('checkbox1').value

    }

    var location = document.reserve.location.value;


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
        firstError = true;
        alert("nope")
    } else
    if (reservation.first.length < 2) {
        firstError = true;
    } else {

        firstError = false;
    }

    //last name validation
    if (reservation.last == "") {
        lastError = true;
    } else if (reservation.last.length < 2) {
        lastError = true;
    } else {
        lastError = false;
    }

    //validate email
    if (reservation.email == "") {
        mailError = true;
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(reservation.email) === false) {
        mailError = true;
    } else {
        mailError = false;
    }

    //validate birth date
    if (reservation.birthdate == "") {
        birthdateError = true;
    } else {
        birthdateError = false;
    }

    //validate number of tournaments
    if (reservation.quantity == "") {
        quantityError = true;
    } else {
        quantityError = false;
    }

    //validate location
    if (location == "") {
        locationError = true;
    } else {
        locationError = false;
    }

    //validate terms and condition
    if (reservation.terms == "") {
        termsError = true;
    } else {
        termsError = false;
    }

    if (firstError || lastError || mailError || birthdateError || quantityError || locationError || termsError) {
        return false;
    } else {
        Success();

        return true;
    }





}