
// javascript for sticky top to enable the navigation bar to be visible while scrolling down the pages//
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navigation = document.querySelector(".navigation");

// Get the offset position of the navbar
var sticky = navigation.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navigation.classList.add("sticky")
  } else {
    navigation.classList.remove("sticky");
  }
}


//Javascript to allow for drop down navigation to link to other html pages//
var ddOurWork = document.querySelector(".dropdown--OurWork");
  ddOurWork.onclick = () => {
	  document.location.href = "ourwork.html";
}

//Javascript to allow for drop down navigation to link to other html pages//
var ddContactUs = document.querySelector(".dropdown--ContactUs");
if(ddContactUs) {
  ddContactUs.onclick = () => {
	  document.location.href = "contact-us.html";
  }
}


//icon when responsive changes to mobile device//
function openMobileNav() {
    var topNav = document.querySelector(".topnav");
    if (topNav.className === "topnav") {
        topNav.classList.add("mobile-size");  
  }
    else {
        topNav.classList.remove("mobile-size");
    }
  }


  function expand() {
    const nav = document.querySelector(".navigation")
    if (nav.className === "navigation") {
        nav.classList.add("responsive")
    }
    else {
        nav.classList.remove("responsive")
    }
}

function goto(location){
  document.location.href = location
}


const faqAnswers = Array.from(document.querySelectorAll('.faq-item__answer'))
document.querySelectorAll('.content-FAQ .icon').forEach(icon => {
  icon.onclick = () => {
    let ans = faqAnswers.find(answer => answer.dataset.is === icon.dataset.for)
    if (ans.classList.contains('hidden')) {
      ans.classList.remove('hidden')
      icon.firstElementChild.classList.remove('fa-plus')
      icon.firstElementChild.classList.add('fa-minus')
    } else {
      ans.classList.add('hidden')
      icon.firstElementChild.classList.remove('fa-minus')
      icon.firstElementChild.classList.add('fa-plus')
    }
  }
})





//alert("how are you today");
//setting up shortened names
const firstNameInput = document.getElementById('firstNameInput')
const firstNameErrorMessage = document.getElementById('firstNameErrorMessage')
const cellInput = document.getElementById('cellInput')
const cellErrorMessage = document.getElementById('cellErrorMessage')
const emailInput = document.getElementById('emailInput')
const emailErrorMessage = document.getElementById('emailErrorMessage')

//setting up variables
let firstName = "";
let firstNameError = false;
let cellError = false;
let emailError = false;
let validationButton = false;


//hiding all except starting div
selectPickupDelivery.classList.remove('hidden');
enterDetails.classList.add('hidden');
menu.classList.add('hidden');
document.getElementById('confirmOrder').classList.add('hidden');
document.getElementById('cancelOrder').classList.add('hidden');



// --VALIDATION CHECKS FOR INPUTS--

//checks the first name input
function checkFirstName() {
    //if name pattern is incorrect or nothing is entered
    if (firstNameInput.validity.patternMismatch || firstNameInput.validity.valueMissing) {
        //give alerts and make firstNameError true and add invalid class for styling purposes.
        alert('Please enter a valid first name')
        firstNameErrorMessage.textContent = "Please enter a first name between 2 and 50 characters with letters only.";
        firstNameInput.classList.add('invalid');
        firstNameError = true;
        return;
    }
    else {
        //set firstName to what has been entered
        firstName = firstNameInput.value;
        //clear any values and css for the error display
        firstNameErrorMessage.textContent = '';
        firstNameInput.classList.remove('invalid');
        firstNameError = false;
    }
}

//checks the cellphone input
function checkCell() {
    //if cellphone pattern is incorrect or nothing is entered
    if (cellInput.validity.valueMissing || cellInput.validity.patternMismatch) {
        //give alerts and make cellError true and add invalid class for stying purposes.
        alert("Please enter a valid phone number");
        cellErrorMessage.textContent = "Please enter a phone number with dashes and numbers only.";
        cellInput.classList.add('invalid');
        cellError = true;
        return;
    }

    else {
        //set cell to what has been entered
        cell = cellInput.value;
        //clear any values and css for the error display
        cellErrorMessage.textContent = '';
        cellInput.classList.remove('invalid');
        cellError = false;
    }
}

//checks email input
function checkEmail() {
    //if email pattern is incorrect or nothing is entered
    if (emailInput.validity.valueMissing || emailInput.validity.patternMismatch) {
        //give alerts and make addressError true and add invalid class for styling purposes.
        alert("Please enter a valid address");
        emailErrorMessage.textContent = "Please enter a valid email.";
        emailInput.classList.add('invalid');
        emailError = true;
        return;
    } 
    
    else {
        //set email to what has been entered
        email = emailInput.value;
        //clear any values and css for the error display
        emailErrorMessage.textContent = '';
        emailInput.classList.remove('invalid');
        emailError = false;
    }
}

// --VALIDATION FUNCTIONS END--

