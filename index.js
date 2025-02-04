document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = new URLSearchParams(formData);

    const submitButton = event.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxhmazzhWoZO2VkUqnmzs_gmMdWKT4CZAC1IUO3Y8I3MLyvW97Fwiu77iUGhzLUd2tk/exec", {
            method: "POST",
            body: data,
        });

        const result = await response.json();
        const statusMessage = document.getElementById("status-message");
        const modal = document.getElementById("status-modal");

        statusMessage.textContent = result.message;
        modal.style.display = "block";

        document.getElementById("modal-close").addEventListener("click", function() {
            modal.style.display = "none";
        });

        setTimeout(() => {
            modal.style.display = "none";
            window.location.href = "https://jaelyntran.github.io/";
            /* change to
             window.location.href = "http://localhost:8000/";
             if running on localhost */
            }, 5000);
    } catch (error) {
        alert("An unexpected error occurred: " + error.message);
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Submit";
    }
});
