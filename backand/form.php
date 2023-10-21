<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $address = $_POST["address"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Create email message
    $subject = "Contact Form Submission";
    $emailBody = "Name: $name\nEmail: $email\nAddress: $address\nPhone: $phone\nMessage:\n$message";

    // Send email
    $to = "healthworldofficial5@gmail.com"; // Change this to your email address
    $headers = "From: $email";

    if (mail($to, $subject, $emailBody, $headers)) {
        echo "Message sent successfully. Thank you!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
}
?>
