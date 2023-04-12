const form = document.getElementById("form-register");
form.onsubmit = function (event) {
  event.preventDefault();
  var Email = document.getElementById("Email");
  var password = document.getElementById("password");
  var confirmpassword = document.getElementById("confirmpassword");
  if (Email.value == "") {
    alert("Please enter Email");
    Email.focus();
    return;
  }
  if (validateEmail(Email.value) == false) {
    alert("Please enter correct Email");
    Email.focus();
    return;
  }
  if (password.value == "") {
    alert("Enter password");
    password.focus();
    return;
  }
  if (confirmpassword.value == "") {
    alert("Confirm password");
    confirmpassword.focus();
    return;
  }
  if (password.value != confirmpassword.value) {
    alert("Confirm password does not match");
    confirmpassword.focus();
    return;
  }
  window.location.href = "index.html";
};
function validateEmail(email) {
  let check = email.indexOf("@");
  if (check == -1) {
    return false;
  }
  let temp = email.substr(check, email.length - check);
  if (temp.indexOf(".") == -1){
    return false;
  }
  return true;
}
