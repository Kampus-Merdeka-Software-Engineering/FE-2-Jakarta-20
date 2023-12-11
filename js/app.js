const bar = document.querySelector(".fa-bars");
const cross = document.querySelector("#hdcross");
const headerbar = document.querySelector(".headerbar");
const form = document.querySelector("form");

if (bar) {
  bar.addEventListener("click", function () {
    setTimeout(() => {
      cross.style.display = "block";
    }, 200);
    headerbar.style.right = "0%";
  });
}

if (cross) {
  cross.addEventListener("click", function () {
    cross.style.display = "none";
    headerbar.style.right = "-100%";
  });

}

const baseApiUrl =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://be-2-jakarta-20-production.up.railway.app";

const apiRoutes = {
  contacts: `${baseApiUrl}/contacts`,
};

function submitForm(e) {
  e.preventDefault();
  // collect element input
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const subject = document.querySelector("#subject").value;
  const message = document.querySelector("#message").value;

  const formData = { name, email, subject, message };

  fetch(apiRoutes.contacts, {
    headers: {
      "Content-Type": "Application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        // Data submitted successfully
        alert("Data submitted successfully");
        resetForm();
      } else {
        // Handle errors if any
        alert("Error submitting data");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error submitting data");
    });
}

function resetForm() {
  document.getElementById("contactsForm").reset();
}