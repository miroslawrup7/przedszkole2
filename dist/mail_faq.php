<?php

$name = $_POST["name"];
$surname = $_POST["surname"];
$from = $_POST["mail"];
$phone = $_POST["phone"];
$page = $_POST["page"];
$subject = "Wiadomość z formularza na stronie Oksfordzik / " . $page;
$to = "chrupek999@gmail.com";
// $to = "czesc@oksfordzik.pl";
$question = $_POST["question"];
$message = $_POST["message"];

if ($question === "polecenie") { 
    $question = "z polecenia";
}
if ($question === "facebook") { 
    $question = "z portalu Facebook";
}
if ($question ===" instagram") {
    $question = "z portalu Instagram";
}
if ($question === "wyszukiwarka") { 
    $question = "z wyszukiwarki";
}
if ($question === "ulotka") { 
    $question = "z ulotki";
}
if ($question === "spacer") { 
    $question = "zobaczyłem/am wasz lokal przechodząc";
}
if ($question === "inne") { 
    $question = "inne";
}


$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";
$headers .= "MIME-Version: 1.0 \r\n";
$headers .= "Content-Type: text/html; charset=UTF-8";

$txt = "<span style='color:#666;'>Imię: </span>" . $name . "<br>";
$txt .= "<span style='color:#666;'>Nazwisko: </span>" . $surname . "<br>";
$txt .= "<span style='color:#666;'>Telefon: </span>" . $phone . "<br>";
$txt .= "<span style='color:#666;'>Email: </span>" . $from . "<br>";
$txt .= "<span style='color:#666;'>Skąd się Państwo dowiedzieli o Przedszkolu Oksfordzik: </span>" . $question . "<br><br>";
$txt .= "<span style='color:#666;'>Treść wiadomości: </span>" . $message . "<br>";




$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: faq.html?mail_status=sent");
} else {
    header("Location: faq.html?mail_status=error");
}

?>