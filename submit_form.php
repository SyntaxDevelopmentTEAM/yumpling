<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Your existing code...

    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        // Redirect to a thank-you page or homepage
        header("Location: thank_you.html");  // Create a thank_you.html page
        exit();
    } else {
        // Log errors if mail function fails
        error_log("Failed to send email");
        header("Location: error.html");  // Redirect to an error page
        exit();
    }
} else {
    // Redirect users if they try to access the script directly
    header("Location: contact.html");
    exit();
}
?>
