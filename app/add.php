<?
	

	// Массив с полученными данными
	$datar = array();

	$data = array();
	$data['mes'] = 'OK';

	if(empty($_POST)){
		$data['mes'] = 'ERROR';
      	echo json_encode($data);
		echo "POst not exist";
		exit(1);
	}
	else {
		foreach ($_POST as $key => $value) {
			$datar[$key]=strip_tags(trim($value));
		}
	}

	$about = $datar['about-prj'];
	$url = $datar['url-prj'];

	 //Подключение к базе
  	require_once('db.php');
    // имя файла для бд
	$file_dist.=$datar['filename'];

	// Перекидываем данные в БД
	$ar = array( 'img_url' =>$file_dist, 'about_prj' =>$about, 'url_prj' =>$url );
	$sql = 'INSERT INTO `Portfolio` (`img_url`,`about_prj`,`url_prj`) VALUES (:img_url,:about_prj,:url_prj)';
	$res = $DB->prepare($sql);
	$res->execute($ar);

	if(!$res){
		$data['mes'] = 'ERROR';
	}
			
	echo json_encode($data);


	exit(0);


?>