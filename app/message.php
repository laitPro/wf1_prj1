<?
	

	// Массив с полученными данными
	$datar = array();
	// Преобразовываем данные из jsona в массив
	foreach ($_POST as $key => $value) {
		$datar[$key]=strip_tags(trim($value));
	}


	// Собираем данные полученные +ok

	$name = $datar['user-name'];
	$email = $datar['email'];
	$message = $datar['message'];



	require_once 'php/PHPMailer-master/PHPMailerAutoload.php';

	$mail = new PHPMailer;


	$mail->setFrom($email, $name);
	$mail->addAddress('nikitalaitinen@ya.ru', 'Nikita Laitinen'); 

	$mail->isHTML(true);              

	$mail->Subject = 'Новое письмо с сайта';
	$mail->Body    .= $message;
	$mail->AltBody = 'Новое письмо с сайта';

	if(!$mail->send())
	    echo 'Message could not be sent.';
	$data = array();
	$data['mes'] = 'OK';
	// exit(1);
	echo json_encode($data);


	exit(0);


?>