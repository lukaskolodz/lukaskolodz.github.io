<!DOCTYPE html>
<html>

<head>
	<title></title>

	<meta charset="UTF-8">
	</meta>
	<meta http-equiv="X-Ua-Compatible" content="IE=edge,chrome=1">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

	<!--leaflet-->
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="" />

	<link rel="stylesheet" type="text/css" href="main.css">
	<link rel="stylesheet" type="text/css" href="../../main_2.css">


</head>

<body>



	<header>

		<h1 class="logo">WPROWADZANIE DANYCH - FORMULARZ</h1>

		<nav id="topnav">

			<ul class="menu">
				<li><a href="../../index.html">Strona główna</a></li>
				<li><a href="../../geo_artykul/index.html">Do czego służy GEOPORTAL</a></li>
				<li><a href="../../wig/index.html">O Wydziale Inżynierii Lądowej i Geodezji</a></li>
				<li><a href="../../autor/index.html">O autorze</a></li>
				<li><a href="../../kontakt/index.html">Kontakt</a></li>
			</ul>

		</nav>

	</header>




	<div class="container-fluid">
		<form id="formularz" action="insert.php" method="POST">
			<!-- formularz przesyła dane jawnie-->
			<h3>Formularz wprowadzania danych</h3></br>
			<fieldset>
				<legend>
					<h4>Informacje ogólne</h4>
				</legend>
				Obserwator <br><input type="text" name="obserw" placeholder="Stopień, Imię, Nazwisko" required><br>
				Nazwa jednostki zaobserwowanej <br><input type="text" name="nazwa" placeholder="Nazwa" required><br>
				Przynależność jednostki <br><input type="text" name="przynal" placeholder="Przynależność" required><br>

				<hr>

				<legend>
					<h4>Charakterystyka obiektu</h4>
				</legend>

				Typ jednostki <br>
				<select name="app6">
					<option value="SUGPU-------" selected> Nie rozpoznany </option>
					<option value="SUGPU------D"> Nie rozpoznany pluton </option>
					<option value="SUGPU------E"> Nie rozpoznana kompania </option>
					<option value="SUGPU------F"> Nie rozpoznany batalion </option>
					<option value="SUGPUCA-----"> Nie rozpoznana jednostka czołgów </option>
					<option value="SUGPUCA----D"> Nie rozpoznany pluton czołgów </option>
					<option value="SUGPUCA----E"> Nie rozpoznana kompania czołgów </option>
					<option value="SUGPUCA----F"> Nie rozpoznany batalion czołgów </option>
					<option value="SUGPUCI-----"> Nie rozpoznana jednostka piechoty </option>
					<option value="SUGPUCI----D"> Nie rozpoznany pluton piechoty </option>
					<option value="SUGPUCI----E"> Nie rozpoznana kompania piechoty </option>
					<option value="SUGPUCI----F"> Nie rozpoznany batalion piechoty </option>
					<option value="SUGPUCR-----"> Nie rozpoznana jednostka rozpoznania </option>
					<option value="SUGPUCR----D"> Nie rozpoznany pluton rozpoznania </option>
					<option value="SUGPUCR----E"> Nie rozpoznana kompania rozpoznania </option>
					<option value="SUGPUCR----F"> Nie rozpoznany batalion rozpoznania </option>
					<option value="SFGP--------"> Sojuszniczy </option>
					<option value="SFGP-------D"> Sojuszniczy pluton </option>
					<option value="SFGP-------E"> Sojusznicza kompania </option>
					<option value="SFGP-------F"> Sojuszniczy batalion </option>
					<option value="SFGPUCA-----"> Sojusznicza jednostka czołgów </option>
					<option value="SFGPUCA----D"> Sojuszniczy pluton czołgów </option>
					<option value="SFGPUCA----E"> Sojusznicza kompania czołgów </option>
					<option value="SFGPUCA----F"> Sojuszniczy batalion czołgów </option>
					<option value="SFGPUCI-----"> Sojusznicza jednostka piechoty </option>
					<option value="SFGPUCI----D"> Sojuszniczy pluton piechoty </option>
					<option value="SFGPUCI----E"> Sojusznicza kompania piechoty </option>
					<option value="SFGPUCI----F"> Sojuszniczy batalion piechoty </option>
					<option value="SFGPUCR-----"> Sojusznicza jednostka rozpoznania </option>
					<option value="SFGPUCR----D"> Sojuszniczy pluton rozpoznania </option>
					<option value="SFGPUCR----E"> Sojusznicza kompania rozpoznania </option>
					<option value="SFGPUCR----F"> Sojuszniczy batalion rozpoznania </option>
					<option value="SHGPU-------"> Wrogi </option>
					<option value="SHGPU------D"> Wrogi pluton </option>
					<option value="SHGPU------E"> Wroga kompania </option>
					<option value="SHGPU------F"> Wrogi batalion </option>
					<option value="SHGPUCA-----"> Wroga jednostka czołgów </option>
					<option value="SHGPUCA----D"> Wrogi pluton czołgów </option>
					<option value="SHGPUCA----E"> Wroga kompania czołgów </option>
					<option value="SHGPUCA----F"> Wrogi batalion czołgów</option>
					<option value="SHGPUCI-----"> Wroga jednostka piechoty </option>
					<option value="SHGPUCI----D"> Wrogi pluton piechoty </option>
					<option value="SHGPUCI----E"> Wroga kompania piechoty </option>
					<option value="SHGPUCI----F"> Wrogi batalion piechoty </option>
					<option value="SHGPUCR-----"> Wroga jednostka rozpoznania </option>
					<option value="SHGPUCR----D"> Wrogi pluton rozpoznania </option>
					<option value="SHGPUCR----E"> Wroga kompania rozpoznania </option>
					<option value="SHGPUCR----F"> Wrogi batalion rozpoznania</option>

				</select><br>

				Szczebel dowodzenia <br>
				<select name="dowodz">
					<option value="Nie rozpozanno" selected> Nie rozpozanno</option>
					<option value="Pluton"> Pluton</option>
					<option value="Kompania"> Kompania</option>
					<option value="Batalion"> Batalion</option>
				</select><br>
				Wyposażenie <br><input type="text" name="wypos" placeholder="Sprzęt" required><br>

				Dodatkowe informacje <br><input type="text" name="notatka" placeholder="Notatka" required><br>

				<hr>

				<legend>
					<h4>Współrzędne jednostki</h4>
				</legend>

				Długość geograficzna <br><input type="text" name="lon" placeholder="21.00412&deg" required><br>
				Szerokość geograficzna <br><input type="text" name="lat" placeholder="52.23235&deg" required><br>

			</fieldset><br>

			<input type="submit" value="Wyślij" style="background-color: #fff">

			<input type="reset" style="background-color: #fff;">


		</form>

	</div>
	<!-- 
			<div class="container-fluid">
				<form id="formularz" action="formularz.php" method="POST"> 
				<h3>Kalkulator geodezyjny</h3>
				<fieldset></fieldset><br>
				<legend><h4>Współrzędne obserwatora</h4></legend>
				Długość geograficzna <br><input type="text" name="pole1" placeholder="52.23235&deg" required><br>
				Szerokość geograficzna <br><input type="text" name="pole1" placeholder="21.00412&deg" required><br>
				<hr>
				<legend><h4>Pomiary</h4></legend>
				Azymut <br><input type="text" name="pole1" placeholder="360.0000&deg" required><br>
				Odległość <br><input type="text" name="pole1" placeholder="123.456 [m]" required><br>
			</form>
		-->
	</div>

	<?php

	require_once "connect.php";

	pg_close($polaczenie)

	?>


	<footer>
		<div class="info">
			Wszelkie prawa zastrzeżone &copy; 2020
		</div>

	</footer>


	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</body>

</html>


<!--



<div class="container-fluid">
		<form id="formularz" action="formularz.php" method="POST"> / formularz przesyła dane jawnie /
			<h3>Formularz wprowadzania danych</h3>
			<fieldset>
				<legend><h4>Położenie</h4></legend>
				Pole nr 1 <br><input type="text" name="pole1" placeholder="pole tekstowe" required><br>
				Pole nr 2 <br><input type="email" name="pole2" placeholder="email@gmail.com" required><br>
				Pole nr 3 <br><input type="password" name="pole3" placeholder="password" required><br>
				Pole nr 4 <br><input type="date" name="pole4"><br>
				<hr>
				<legend><h4>Charakterystyka obiektu</h4></legend>
				Pole nr 5 <br> 
						  <input type="radio" name="radio01" value="wartość01" checked> wartość 01<br>
						  <input type="radio" name="radio01" value="wartość02"> wartość 02<br>
						  <input type="radio" name="radio01" value="wartość02"> wartość 03<br>
				<hr>
				<legend><h4>Informacje ogólne</h4></legend>
				Pole nr 6 <br>
						<input type="checkbox" name="pole5"checked> pole 6 a <br>
						<input type="checkbox" name="pole6"> pole 6 b <br>
						<input type="checkbox" name="pole7"> pole 6 c <br>
				<hr>
				Pole nr 7 <br>
						<select name="pole8">
							<option value="wartość 1" > Wartość 1</option>
							<option value="wartość 2" selected> Wartość 2</option>
						</select><br>
			</fieldset><br>
	
			<input type="submit" value="wyślij!">
			<input type="reset">
	
		</form>
				</div>
	
			
	

-->