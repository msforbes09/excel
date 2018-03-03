<?php require_once '../../forbes/system_control.php'?>
<?php
try {
	$pdo = new PDO( 'mysql:host=localhost;dbname=centralized;charset=utf8;', 'root', 'admin' );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$stmt = $pdo->prepare(
	"select * from copy_notes");
	$stmt->execute();
	$content = '';
	$count = 1;
	while( $row = $stmt->fetch(PDO::FETCH_ASSOC) ){
		$content .= '<tr>';
		$content .= '<td>'. $count .'</td>';
		$content .= '<td>'. $row["english"] .'</td>';
		$content .= '<td>'. $row["romanji"] .'</td>';
		$content .= '</tr>';
		$count += 1;
	}
	} catch( PDOException $e ) {
		echo $e->getMessage();
	}
$pdo = null;
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link rel="icon" href="../pics/fd.png">
		<title>Add Note</title>
		<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
	</head>
	<body>
		<div class="container-fluid">
		<h2>Add Note</h2>
		<hr />
			<input id="english_txt" type="text" class="form-control" placeholder="English" />
			<input id="romanji_txt" type="text" class="form-control" placeholder="Romanji" />
			<input id="add_note" type="button" class="btn btn-warning" value="Save" />
		<hr />
		<table class="table table-hover table-bordered table-striped">
			<thead>
				<tr class="bg-warning">
					<th style="width: 4%;">No</th>
					<th style="width: 48%;">English</th>
					<th style="width: 48%;">Romanji</th>
				</tr>
			</thead>
			<tbody>
				<?php echo $content; ?>
			</tbody>
		</table>

		<script src="../bootstrap/js/jquery-3.2.1.js"></script>
		<script src="../bootstrap/js/bootstrap.min.js"></script>
		<script src="script/add_note.js"></script>
	</body>
</html>
