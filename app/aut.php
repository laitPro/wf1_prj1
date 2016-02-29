<?php 
	session_start();
// echo "Autorizate";
// Массив с полученными данными
	$datar = array();
	$data = array();
	$data['mes'] = 'OK';

	if(empty($_POST)){
		$data['mes'] = 'ERROR';
      	echo json_encode($data);
		exit(1);
	}
	else {
		// Преобразовываем данные из jsona в массив
		foreach ($_POST as $key => $value) {
			$datar[$key]=strip_tags(trim($value));
		}
	}
	
	$email = $datar['email'];
	$pass = $datar['pass'];

	 //Подключение к базе
   	require_once('db.php');
    // Делаем выборку из таблицы авторизации
    $sql = 'SELECT * FROM Autorizate';
	$res = $DB->query($sql);
	if($res -> rowCount() > 0){
		$aut = array();
		while($row = $res -> fetch()){
			$aut[] = $row;
		}
	}

	foreach($aut as $value){
		$a_email = $value['Email'];
		$a_pass = $value['Password'];
		break;
	}	

	if (($email === $a_email) and ($pass === $a_pass)) {

		if(!isset($_SESSION['aut']))
		$_SESSION = array(
		  	'aut' => 'true'
		 );	
	}
	else{
		$data['mes'] = 'ERROR';
	}
	// echo $data;
	echo json_encode($data);


	exit(0);