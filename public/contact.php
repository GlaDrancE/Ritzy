<?php
// contact.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://ritzylifestyle.in'); // adjust
header('Access-Control-Allow-Origin: http://localhost:5173'); // adjust
header('Access-Control-Allow-Methods: POST');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit; }

$name  = trim($_POST['name']  ?? '');
$email = trim($_POST['email'] ?? '');
$msg   = trim($_POST['message'] ?? '');

if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$msg) {
  http_response_code(422);
  echo json_encode(['ok'=>false,'error'=>'Invalid input']);
  exit;
}

// Load PHPMailer manually
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);
try {
  $mail->isSMTP();
  $mail->Host = 'smtp.hostinger.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'ayushr16060@gmail.com';
  $mail->Password = '@yusH11011'; // store outside webroot or in env
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = 587;

    $mail->setFrom('ayushr16060@gmail.com', 'Website');
    $mail->addAddress('ayushr16060@gmail.com', 'You'); // where you receive
  $mail->addReplyTo($email, $name); // lets you just reply to the sender

  $mail->isHTML(true);
  $mail->Subject = 'New contact form submission';
  $mail->Body = "<b>Name:</b> ".htmlspecialchars($name)."<br/>
                 <b>Email:</b> ".htmlspecialchars($email)."<br/><br/>
                 <b>Message:</b><br/>".nl2br(htmlspecialchars($msg));

  $mail->send();
  echo json_encode(['ok'=>true]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['ok'=>false,'error'=>'Mail failed']);
}
