<?php

$name = $_POST["name"];
$surname = $_POST["surname"];
$from = $_POST["mail"];
$phone = $_POST["phone"];
$page = $_POST["page"];
$subject = "Wiadomość z formularza na stronie Oksfordzik / " . $page;
$to = "chrupek999@gmail.com";
// $to = "rekrutacja@oksfordzik.pl";
$message = $_POST["message"];

$filenameee =  $_FILES["myfile"]["name"];
$fileName = $_FILES["myfile"]["tmp_name"]; 

$content = file_get_contents($fileName);
$content = chunk_split(base64_encode($content));
$separator = uniqid();

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";
$headers .= "MIME-Version: 1.0 \r\n";
$headers .= "Content-Type: multipart/mixed; charset=UTF-8; boundary=\"" . $separator . "\"" . "\r\n";

$msg = "<span style='color:#666;'>Imię: </span>" . $name . "<br>";
$msg .= "<span style='color:#666;'>Nazwisko: </span>" . $surname . "<br>";
$msg .= "<span style='color:#666;'>Telefon: </span>" . $phone . "<br>";
$msg .= "<span style='color:#666;'>Email: </span>" . $from . "<br><br>";
$msg .= "<span style='color:#666;'>Treść wiadomości: </span>" . $message . "<br>";

$txt = "--" . $separator . "\r\n";
$txt .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
$txt .= "Content-Transfer-Encoding: base64" . "\r\n" . "\r\n";

$txt .= chunk_split(base64_encode($msg));

$txt .= "--" . $separator . "\r\n";
$txt .= "Content-Type: application/octet-stream; name=\"" . $filenameee . "\"" . "\r\n";
$txt .= "Content-Transfer-Encoding: base64" . "\r\n";
$txt .= "Content-Disposition: attachment; filename=\"". $filenameee . "\"" . "\r\n" . "\r\n";
$txt .= $content . "\r\n";
$txt .= "--" . $separator . "--";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: praca.html?mail_status=sent");
} else {
    header("Location: praca.html?mail_status=error");
}

?>