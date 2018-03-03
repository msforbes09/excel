<?php
try {
	$pdo = new PDO( 'mysql:host=localhost;dbname=centralized;charset=utf8;', 'root', 'admin' );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$stmt = $pdo->prepare(
	"select * from copy_notes");
	$stmt->execute();
	$content = '';
	while( $row = $stmt->fetch(PDO::FETCH_ASSOC) ){
		$content .= '<tr>';
		$content .= '<td>'. $row["english"] .'</td>';
		$content .= '<td class="copy bg-success"><span>'. $row["romanji"] .'</span></td>';
		$content .= '</tr>';
	}
	} catch( PDOException $e ) {
		echo $e->getMessage();
	}
$pdo = null;
?>
<table class="notes_table">
	<tr class="bg-primary">
		<td style="text-align: center;"><h5>Copy notes (English - Romanji)</h5></td>
	</tr>
</table>
<div class="scroll" style="height: 400px;">
	<table class="notes_table">
		<?php echo $content; ?>
	</table>
</div>
<hr />
<div class="result">double click to copy</div>