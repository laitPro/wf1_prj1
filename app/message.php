<?
	
	$private_key = '6LewzBgTAAAAABywU7XiCCHUaU3KVa6PUV8IFmY4';
	$public_key = '6LewzBgTAAAAAPpc7mjcAKatvenqMKEtdxnLrhIj';
	$google_url="https://www.google.com/recaptcha/api/siteverify";
	$ip = $_SERVER['REMOTE_ADDR'];

	// Массив с полученными данными
	$datar = array();
	// Преобразовываем данные из jsona в массив
	foreach ($_POST as $key => $value) {
		$datar[$key]=strip_tags(trim($value));
	}
	if(empty($_POST['g-recaptcha-response']))
		exit('Где рекапча?');
	$recaptcha = $_POST['g-recaptcha-response'];
	$url = $google_url."?secret=".$private_key."&response=".$recaptcha."&remoteip=".$ip;
	$google_res = file_get_contents($url);
	$google_res = json_decode($google_res, true);
	if($google_res['success'] != 1)
		exit('Не верна гугла капча');

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

	echo json_encode($data);


	exit(0);


?>