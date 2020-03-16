<?php

ini_set( 'display_errors', 1 );
error_reporting( E_ALL );

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$from = "consultas@jhserviciosindustriales.com";
$form_name = strip_tags($_POST['name']);
$form_email = strip_tags($_POST['email']);
$form_phone = strip_tags($_POST['phone']);
$form_message = strip_tags($_POST['message']);
$fecha = time();
$fechaFormateada = date("j/n/Y", $fecha);


$header = 'From: ' . $form_email . " \r\n"; 
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n"; 
$header .= "Mime-Version: 1.0 \r\n"; 
$header .= "Content-Type: text/plain"; 


$correoDestino = "consultas@jhserviciosindustriales.com";

$textoEmisor = "MIME-VERSION: 1.0\r\n";
$textoEmisor .= "Content-type: text/html; charset=UTF-8\r\n";
$textoEmisor .= "From: Formulario creado por DarioBF - www.dariobf.com";


//Formateo el asunto del correo 

$asunto = "Contacto WEB - " .$form_name;

//Formateo el cuerpo del correo

$cuerpo = " Enviado por: " . $form_name . ", a las " . $fechaFormateada . "";
$cuerpo .= " Teléfono de contacto: " . $form_phone . "";
$cuerpo .= " E-mail: " . $form_email . "";
$cuerpo .= " Comentario: " . $form_message;

// Envío el mensaje

mail($correoDestino, $asunto, utf8_decode($cuerpo), $header); 


 echo "<script>
                alert('Su consulta fue enviada con exito!. Nos contactaremos a la brevedad');
                window.location= 'index.html'
    </script>";


?>



