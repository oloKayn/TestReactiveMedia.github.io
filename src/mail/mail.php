<?php
// проверка сервера
// если не заполнено поле "Имя" - показываем ошибку 0 
if (empty($_POST['name'])) 
output_err(0);
else $name = trim($_POST["name"]); 
// если не заполнено поле "Телефон" - показываем ошибку 1
if (!preg_match("/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/", $_POST['phone']))
output_err(1); 
else $phone = trim($_POST["phone"]);
// если неправильно заполнено поле email - показываем ошибку 2
if(!preg_match("/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i", $_POST['email'])) 
output_err(2); 
else $email = trim($_POST["email"]);

$message = trim($_POST["message"]);



// Данные письма
$recepient = "utochkin.vlad111@mail.ru";
$siteName = "Энергосервис";

if (empty($_POST['message'])){
    $textmessage = "Имя: $name \nТелефон: $phone \nEmail: $email";
} 
else {
    $textmessage = "Имя: $name \nТелефон: $phone \nEmail: $email \nСообщение: $message";
}

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $textmessage, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
echo 'Спасибо за заявку!';






// ошибки
function output_err($num) 
{ 
    $err[0] = 'Не введено имя'; 
    $err[1] = 'Не введен или неверно введен телефон'; 
    $err[2] = 'Не введен или неверно введен e-mail'; 
    echo '<span>'.$err[$num].'</span>'; 
    exit(); 
} 

?>