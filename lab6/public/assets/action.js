document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("survey-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally

      // Serialize form data
      var formData = new FormData(this);

      // Update the UI on successful submission
      var submitButton = document.getElementById("bb");
      submitButton.style.backgroundColor = "red";
      submitButton.disabled = true;
      submitButton.textContent = "Thank you!";
    });
});
