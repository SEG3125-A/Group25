function validateForm() {
  if (document.forms["form"].emailAddress.value === "") {
    alert("Email Address required!");
    return false;
  }
  if (document.forms["form"].phoneNumber.value === "") {
    alert("Phone number Required!");
    return false;
  }
  if (!isValid(document.forms["form"].phoneNumber.value)) {
    alert("Phone number invalid!");
    return false;
  }
  if (document.forms["form"].dateTimeInput.value === "") {
    alert("Date and Time Required!");
    return false;
  }
  return true;
}

function isValid(p) {
  var phoneRe = /^[1-9]\d{2}[1-9]\d{2}\d{4}$/;
  var digits = p.toString().replace(/\D/g, "");
  return phoneRe.test(digits);
}
