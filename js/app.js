const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click',function(){
    setTimeout(()=>{
        cross.style.display = 'block';
    },200);
    headerbar.style.right = '0%';
})

cross.addEventListener('click', function(){
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
})

const baseApiUrl =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://be-2-jakarta-20-production.up.railway.app/";

const apiRoutes = {
  contacts: `${baseApiUrl}/contacts`,
};

function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(this);

  fetch(apiRoutes.contacts, {
    method: "POST",
    body: formData,
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