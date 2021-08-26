//functionality to the form inputs
//validate email
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
    if (reservation.first != "" && reservation.first.length >= 2 && reservation.last != "" && reservation.last.length >= 2 && reservation.birthdate != "" && reservation.quantity != "" && ValidateEmail(reservation.email) != false) {
        alert('Thank you!')
        Success("success")
        preventDefault()

    } else if (reservation.first != "" && reservation.last != "" && reservation.birthdate != "" && reservation.quantity != "" && ValidateEmail(reservation.email) == false) {
        alert('Please use a valid e-mail address!')
        preventDefault()
    } else if (reservation.first != "" && reservation.first.length < 2 && reservation.last != "" && reservation.birthdate != "" && reservation.quantity != "" && ValidateEmail(reservation.email) != false) {
        alert('Your first name must be at least 2 character long!')
        preventDefault()
    } else if (reservation.first != "" && reservation.first.length >= 2 && reservation.last != "" && reservation.last.length < 2 && reservation.birthdate != "" && reservation.quantity != "" && ValidateEmail(reservation.email) != false) {
        alert('Your last name must be at least 2 character long!')
        preventDefault()
    } else {
        alert('Please fill all the fields!')
        preventDefault()
    }




}