<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Debug to check if this file is being accessed
echo "PHP script reached successfully";

// The rest of your form processing code
?>

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
?>
<?php

i<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize form inputs
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Validate form inputs
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill in all required fields.";
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Email details
    $to = "damnwern@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    die("Database connection is successful!");
}

    // Email message content
    $emailContent = "<h2>New Contact Form Submission</h2>";
    $emailContent .= "<p><strong>Name:</strong> " . $name . "</p>";
    $emailContent .= "<p><strong>Email:</strong> " . $email . "</p>";
    $emailContent .= "<p><strong>Message:</strong><br>" . nl2br($message) . "</p>";

    // Send the email
    if (mail($to, $subject, $emailContent, $headers)) {
        echo "success";
    } else {
        echo "An error occurred. Please try again later.";
    }
} else {
    // If the request is not a POST request
    header("HTTP/1.1 405 Method Not Allowed");
    echo "This endpoint only accepts POST requests.";
}
?>
