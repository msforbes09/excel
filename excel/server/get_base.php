<?php
try {
	$pdo = new PDO( 'mysql:host=localhost;dbname=centralized;charset=utf8;', 'root', 'admin' );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$stmt = $pdo->prepare(
	"select * from fuka_base
		where
		fuka = :fuka
		and
		toukets = :toukets
		and
		strength = :soil");
	$stmt->bindValue(':fuka', $_REQUEST["fuka"], PDO::PARAM_INT);
	$stmt->bindValue(':toukets', $_REQUEST["toukets"], PDO::PARAM_INT);
	$stmt->bindValue(':soil', $_REQUEST["soil"], PDO::PARAM_INT);
	$stmt->execute();
	if ($stmt->rowCount() == 1){
		$row = $stmt->fetch(PDO::FETCH_ASSOC);
		echo $row["base"];
	}
	} catch( PDOException $e ) {
		echo $e->getMessage();
	}
$pdo = null;
?>