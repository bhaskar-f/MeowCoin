document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const forms = document.querySelectorAll(".form");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and forms
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      forms.forEach((form) => form.classList.remove("active"));

      // Add active class to the clicked button and target form
      button.classList.add("active");
      document.getElementById(button.dataset.target).classList.add("active");
    });
  });
});
