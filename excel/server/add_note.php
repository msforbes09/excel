<?php
print_r ($_REQUEST);
try{
	$pdo = new PDO( 'mysql:host=localhost;dbname=centralized;charset=utf8;', 'root', 'admin' );
	$pdo->setattribute (PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
	$stmt = $pdo->prepare(
		"INSERT INTO copy_notes
			(english, romanji)
			VALUES
			(:english, :romanji)");
	$stmt->bindValue(':english', $_REQUEST["english"], PDO::PARAM_STR);
	$stmt->bindValue(':romanji', $_REQUEST["romanji"], PDO::PARAM_STR);
	$stmt->execute();
}catch( PDOException $e ){
	echo $e->getMessage();
}
$pdo = null; 
?>