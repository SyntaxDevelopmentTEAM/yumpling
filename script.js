// script.js
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    function submitForm() {
        // Retrieve form data using vanilla JavaScript
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Send data using AJAX
        $.ajax({
            type: "POST",
            url: "submit_form.php",
            data: { name: name, email: email, message: message },
            success: function(response) {
                // Handle the response if needed
                console.log(response);
                // Redirect to thank-you page or perform other actions
                window.location.href = "thank_you.html";
            },
            error: function(error) {
                // Handle errors
                console.error("Error:", error);
            }
        });
    }


    function switchPage(targetPage) {
        sections.forEach(section => {
            section.classList.remove('show');
        });

        links.forEach(link => {
            link.classList.remove('active');
        });

        document.getElementById(targetPage).classList.add('show');
        document.querySelector(`nav a[href="#${targetPage}"]`).classList.add('active');

        setTimeout(() => {
            history.pushState({}, '', targetPage);
        }, 500); // Adjust the delay as needed
    }

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href').substring(1);
            switchPage(targetPage);
        });
    });

    window.addEventListener('popstate', function (event) {
        const targetPage = location.pathname.substring(1) || 'index.html';
        switchPage(targetPage);
    });
});
