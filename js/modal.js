function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

//close modal form
function closeModal() {
    modalbg.style.display = "none"
}

//functionality to the form inputs
//validate email
function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }

    return (false)
}

const submitBtn = document.querySelectorAll(".btn-submit")
submitBtn.forEach((btn) => btn.addEventListener("click", submitRes));

function submitRes() {
    //getting data
    const reservation = {
        first: document.getElementById('first').value,
        last: document.getElementById('last').value,
        email: document.getElementById('email').value,
        birthdate: document.getElementById('birthdate').value,
        quantity: document.getElementById('quantity').value
            //location: document.getElementById('location').value,
    }

    //checking if all details are valid
    if (reservation.first != "" && reservation.last != "" && reservation.birthdate != "" && reservation.quantity != "" && ValidateEmail(reservation.email) != false) {
        alert('Thank you!')


    } else if (reservation.first != "" && reservation.last != "" && reservation.birthdate != "" && reservation.quantity != "" && ValidateEmail(reservation.email) == false) {
        alert('Please use a valid e-mail address!')
    } else {
        alert('Please fill all the fields!')
    }




}