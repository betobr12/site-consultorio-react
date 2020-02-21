<?php 
include ($_SERVER['DOCUMENT_ROOT']."/class/PHPMailer-master/src/PHPMailer.php");
include ($_SERVER['DOCUMENT_ROOT']."/class/PHPMailer-master/src/SMTP.php");
include ($_SERVER['DOCUMENT_ROOT']."/class/PHPMailer-master/src/Exception.php");


$nomeUser=filter_input(INPUT_POST,"nome",FILTER_SANITIZE_SPECIAL_CHARS);
$telefoneUser=filter_input(INPUT_POST,"telefone",FILTER_SANITIZE_SPECIAL_CHARS);
$emailUser=filter_input(INPUT_POST,"email",FILTER_SANITIZE_SPECIAL_CHARS);
$mensagemUser=filter_input(INPUT_POST,"mensagem",FILTER_SANITIZE_SPECIAL_CHARS);




//Server settings
$mail= new \PHPMailer\PHPMailer\PHPMailer();
//$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
$mail->isSMTP();                                            // Send using SMTP
$mail->Host       = 'smtp.hostinger.com.br';                    // Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
$mail->Username   = 'roberto@appbest.com.br';                     // SMTP username
$mail->Password   = 'Sua senha senha';                               // SMTP password
//$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
$mail->Port       = 587;                                    // TCP port to connect to
//$mail->SMTPOptions = array('ssl' => array('verify_peer'=>false, 'verify_peer_name' = false, 'allow_self_signed' => true)); //especifico para hostgator


//Recipients
$mail->setFrom($emailUser); //'from@example.com', 'Mailer' do usuario que esta enviando
$mail->addAddress('betobr08@gmail.com', 'Mensagem para Consultorio Medico');     // Add a recipient email que vai receber
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

// Attachments para adicioar anexos
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments 
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

// Content descrições do envio
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Contato do site Consultoio Medico';
$mail->Body    = "
Nome: {$nomeUser}<br>
Email: {$emailUser}<br>
Telefone: {$telefoneUser}<br>
Mensagem: {$mensagemUser}

";
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

$mail->send();
echo 'Mensagem enviada!';
