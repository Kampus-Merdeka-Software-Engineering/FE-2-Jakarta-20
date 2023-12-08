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

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    fetch(apiRoutes.contacts, {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                alert("Data submitted successfully!");
                form.reset();
            } else {
                alert("Failed to submit data. Please try again.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Failed to submit data. Please try again.");
        });
})
