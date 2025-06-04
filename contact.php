<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "deveracrew@example.com";  // replace with your email
    $subject = "New Contact Form Submission";

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $project = htmlspecialchars($_POST["project"]);

    $message = "Name: $name\n";
    $message .= "Email: $email\n\n";
    $message .= "Project Details:\n$project\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
}
?>
