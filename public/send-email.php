<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$name    = isset($input['name'])    ? strip_tags(trim($input['name']))    : '';
$email   = isset($input['email'])   ? strip_tags(trim($input['email']))   : '';
$company = isset($input['company']) ? strip_tags(trim($input['company'])) : '';
$phone   = isset($input['phone'])   ? strip_tags(trim($input['phone']))   : '';
$service = isset($input['service']) ? strip_tags(trim($input['service'])) : '';
$message = isset($input['message']) ? strip_tags(trim($input['message'])) : '';

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['message' => 'Name, email, and message are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid email address']);
    exit;
}

$to      = 'info@tecktran.com';
$subject = "New Inquiry from $name - Tecktran Contact Form";

$body  = "Name: $name\n";
$body .= "Email: $email\n";
if ($company) $body .= "Company: $company\n";
if ($phone)   $body .= "Phone: $phone\n";
if ($service) $body .= "Service: $service\n";
$body .= "\nMessage:\n$message\n";

$headers  = "From: info@tecktran.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Failed to send email. Please try again later.']);
}
