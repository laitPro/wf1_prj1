<?php

	$data['mes'] = 'ERROR';
	
	if(empty($_FILES)){
		echo json_encode($data);
		exit(1);
	}

		
	$file = $_FILES['file'];
	

	$allowed = array('png', 'jpg', 'gif','jpeg');
 
    $type = end(explode(".", $file['name']));

 
    if(!in_array(strtolower($type), $allowed)){
   
        echo json_encode($data);
        exit(1);
    }
 
	if (!file_exists('file')) {
		mkdir('files',777);
	}

	$type = strtolower(strrchr($file['name'], '.'));
	$filename = md5(uniqid(rand(10000,9999)));
	$filename_copy = $filename.'_copy';

	$file_dist = $_SERVER['DOCUMENT_ROOT'].'/files/'.$filename.$type;

	if (!move_uploaded_file($file['tmp_name'], $file_dist)) {
        echo json_encode($data);
		exit("Файл не загружен!");
	}

	$data['name_img'] = $filename.$type;
	$data['mes'] = 'OK';

	echo json_encode($data);
	exit(0);