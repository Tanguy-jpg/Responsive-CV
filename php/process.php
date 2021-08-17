<?php
$email = $_POST['email'];
$cemail = $_POST['c-email'];

$subject = $_POST['name'];
$message = $_POST['message'];

if ($email === $cemail){
    mail('tanguycarnot@gmail.com', '[CV-mail] from: ' . $subject . "| mail: " . $email, $message);
};