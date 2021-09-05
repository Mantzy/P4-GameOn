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
const modalClose = document.querySelectorAll(".close");
//const modalSuc = document.querySelectorAll(".bgSubmit");
const modalSucClose = document.querySelectorAll("#sucClose");
const modalSucBtn = document.querySelectorAll("#submit-success")


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
    modalbg.style.display = "none";
}

//close submit success page
/*modalSucClose.forEach((btn) => btn.addEventListener("click", closeSuc));



function closeSuc() {
    document.getElementById('success').style.display = "none";
}

modalSucBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeSucBtn() {
    document.getElementById('success').style.display = "none"
}

function closeBtn() {
    //document.getElementById('success').style.display = "none"
}*/