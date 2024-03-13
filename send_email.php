<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $description = $_POST['description'];

    $to = "bencozens22@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Description: $description\n";

    $headers = "From: $name <$email>";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    echo "Method not allowed.";
}
?>
