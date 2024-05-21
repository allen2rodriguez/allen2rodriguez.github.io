<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = htmlspecialchars($_POST['fullname']);
    $subject = htmlspecialchars($_POST['subject']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $to = "allenr1002@gmail.com";
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";
    $body = "You have received a new message from your website contact form.\n\n" .
            "Here are the details:\n" .
            "Full Name: $fullname\n" .
            "Subject: $subject\n" .
            "Email: $email\n" .
            "Phone: $phone\n" .
            "Message:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message successfully sent!";
    } else {
        echo "Failed to send the message!";
    }
} else {
    echo "Invalid request method!";
}
