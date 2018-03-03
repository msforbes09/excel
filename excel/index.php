<?php require_once '../../forbes/system_control.php'?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link rel="icon" href="../pics/fd.png">
		<title>Automation</title>
		<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="sheet/style.css" rel="stylesheet">
	</head>
	<body>
		<div class="container-fluid">
		<center>
		<h2>Automatic Calculations</h2>
		<hr />
		<input type="button" id="jinawa" class="btn btn-success btn-lg" value="Jinawa" />
		<input type="button" id="s_net" class="btn btn-info btn-lg" value="S-Net" />
		<input type="button" id="sodekabe" class="btn btn-warning btn-lg" value="Sodekabe" />
		<input type="button" id="void" class="btn btn-primary btn-lg" value="Void Pipe" />
		<input type="button" id="fukakiso" class="btn btn-danger btn-lg" value="Fukakiso" />
		<hr />
		<input type="button" id="fuka" class="btn btn-info btn-lg" value="Doma Level" />
		<input type="button" id="side_spacer" class="btn btn-danger btn-lg" value="Side Spacer" />
		<input type="button" id="menseki" class="btn btn-primary btn-lg" value="Menseki" />
		<input type="button" id="notes" class="btn btn-warning btn-lg" value="Copy Notes" />
		<hr />
		</center>
		<?php require_once 'interface/modal.php'; ?>
		</div>
		<div id="clipboard"></div>

		<script src="../bootstrap/js/jquery-3.2.1.js"></script>
		<script src="../bootstrap/js/bootstrap.min.js"></script>
		<script src="script/automation.js"></script>
		<script src="script/fukatest.js"></script>
	</body>
</html>
