document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Simulate Payment Processing
    setTimeout(() => {
        document.querySelector(".checkout").style.display = "none";
        document.getElementById("success-message").style.display = "block";
    }, 2000);
});
