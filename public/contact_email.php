<?php

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $content = 'Email: ' . $email . '\nName: ' . $name . '\nPhone: ' . $phone . '\nMessage: ' . $message;

    mail('website@adpantibac.co.uk', 'enquiry from website', $content);


?>