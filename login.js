const userEmail = "user@gmail.com"
const userPassword = "12345"
const form = document.getElementById("form-login");
form.onsubmit = function (event) {
  event.preventDefault();
  var Email = document.getElementById("Email");
  var password = document.getElementById("password");
  if (Email.value == "") {
    alert("Please enter Email");
    Email.focus()
    return;
  }
  if(validateEmail(Email.value) == false) {
    alert("Please enter correct Email")
    Email.focus()
    return;
  }
  if(password.value == "") {
    alert("Enter password");
    password.focus()
    return;
  }
  if(Email.value != userEmail || password.value != userPassword) {
    alert("Incorrect account");
    Email.focus()
    return;
  }
  window.location.href ='index.html'
};
function validateEmail(email) {
  var mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (email.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}
