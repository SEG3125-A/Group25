function validateForm() {
  var cardholderName = document.forms["form"].cardholderName.value;
  var phoneNumber = document.forms["form"].phoneNumber.value;
  var dateTimeInput = document.forms["form"].dateTimeInput.value;

  if (!isValidName(cardholderName)) {
      alert("Invalid Name! Please enter a valid name without numbers.");
      return false;
  }

  if (phoneNumber === "") {
      alert("Phone number Required!");
      return false;
  }
  if (!isValid(phoneNumber)) {
      alert("Phone number invalid!");
      return false;
  }
  if (dateTimeInput === "") {
      alert("Date and Time Required!");
      return false;
  }
  return true;
}

function isValidName(name) {

  var nameRe = /\d/;
  return !nameRe.test(name);
}


function isValid(p) {
  var phoneRe = /^[1-9]\d{2}[1-9]\d{2}\d{4}$/;
  var digits = p.toString().replace(/\D/g, "");
  return phoneRe.test(digits);
}




$(document).ready(function () {
  // Tooltip for the "CARDHOLDER NAME" input
  $("#cardholderName").tooltip({
      classes: {
          "ui-tooltip": "highlight"
      },
      track: true
  });
});
$(document).ready(function () {
  // Tooltip for the "CARDHOLDER NAME" input
  $("#cvv").tooltip({
      classes: {
          "ui-tooltip": "highlight"
      },
      track: true
  });
});
$(document).ready(function () {
  // Tooltip for the "CARDHOLDER NAME" input
  $("#cardnumber").tooltip({
      classes: {
          "ui-tooltip": "highlight"
      },
      track: true
  });
});


