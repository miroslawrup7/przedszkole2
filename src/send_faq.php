<?php

function isValid(){
    if (
        $_POST["name"] != "" &&
        $_POST["surname"] != "" &&
        $_POST["mail"] != "" &&
        $_POST["phone"] != "" &&
        $_POST["message"] != ""
        ) {
        return true;
    }
    return false;
}

if (isValid()) {
    $recaptcha_url = "https://www.google.com/recaptcha/api/siteverify";
    $recaptcha_secret = "6LfITHUpAAAAAJ7HRka_8ZrmLlEHTSEWdb_7dPMV";
    $recaptcha_response = $_POST["recaptchaResponse"];
    $recaptcha = file_get_contents($recaptcha_url."?secret=".$recaptcha_secret."&response=".$recaptcha_response);
    $recaptcha = json_decode($recaptcha);
  
    if ($recaptcha->success == true && $recaptcha->score >= 0.5 && $recaptcha->action == "contact") {
        include("mail_faq.php");
    }
}
   
?>