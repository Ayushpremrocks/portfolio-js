// Initialize EmailJS
    (function () {
        emailjs.init("3An00iSfcT0B9x9Lp"); // ← Replace with your actual public key
    })();

    // Handle Contact Form Submission
    document.addEventListener("DOMContentLoaded", function () {
        var form = document.getElementById("contact-form");

        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                // 🔽 Set current date & time in hidden input field named "time"
                const now = new Date();
                const timeField = document.getElementById("form-time");

                // Create field if not found (optional fallback)
                if (!timeField) {
                    const hiddenTimeInput = document.createElement("input");
                    hiddenTimeInput.type = "hidden";
                    hiddenTimeInput.name = "time";
                    hiddenTimeInput.id = "form-time";
                    hiddenTimeInput.value = now.toLocaleString();
                    form.appendChild(hiddenTimeInput);
                } else {
                    timeField.value = now.toLocaleString(); // e.g., "6/27/2025, 2:45:12 AM"
                }

                // 🔼 Now send the form
                emailjs.sendForm("service_m1fuinp", "template_z2vqysx", this)
                    .then(function (response) {
                        alert("Message sent successfully!");
                        console.log("SUCCESS", response.status, response.text);
                    }, function (error) {
                        alert("Failed to send message. Please try again.");
                        console.log("FAILED", error);
                    });

                this.reset(); // Clear the form after sending
            });
        }
    });


    // tab switching function
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }