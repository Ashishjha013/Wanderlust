// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        // Custom validation for category hidden input (if present)
        const categoryInput = form.querySelector("#categoryInput");
        const categoryError = form.querySelector("#categoryError");
        if (categoryInput) {
          const hasValue =
            categoryInput.value && categoryInput.value.trim().length > 0;
          if (!hasValue) {
            event.preventDefault();
            event.stopPropagation();
            if (categoryError) categoryError.classList.remove("d-none");
          } else {
            if (categoryError) categoryError.classList.add("d-none");
          }
        }
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  // Wire up Bootstrap dropdown items to set the hidden category input and button label
  (() => {
    const dropdown = document.getElementById("dropdownMenuButton");
    const menu = dropdown
      ? dropdown.parentElement &&
        dropdown.parentElement.querySelector(".dropdown-menu")
      : null;
    const hiddenInput = document.getElementById("categoryInput");
    if (!dropdown || !menu || !hiddenInput) return;

    // Attach handlers to each item to avoid issues when clicking on text nodes
    const items = menu.querySelectorAll(".dropdown-item");
    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const value = item.getAttribute("data-value");
        if (!value) return;
        hiddenInput.value = value;
        dropdown.textContent = value;
        const categoryError = document.getElementById("categoryError");
        if (categoryError) categoryError.classList.add("d-none");
      });
    });
  })();
})();
