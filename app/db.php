<?php
    //Подключение к базе
    try {
        $DB = new PDO("mysql:host=wf1;dbname=portfolio", "root", "");
    }
    catch(PDOException $e) {
        echo $e->getMessage();
        echo "this error!";
        exit(1);
    }


// $DB = new PDO("mysql:host=localhost;dbname=nikitalait_pr1", "nikitalait_pr1", "12345");
 // $DB = new PDO("mysql:host=wf1;dbname=portfolio", "root", "");