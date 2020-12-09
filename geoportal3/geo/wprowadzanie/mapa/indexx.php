<!DOCTYPE html>
<html>

<head>
	<title></title>

	<!--http://localhost/geoportal/formularz/z_mapy/index.html-->

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

	<!--leaflet-->
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="" />

	<link rel="stylesheet" type="text/css" href="main.css">
	<link rel="stylesheet" type="text/css" href="main2.css">
	<link rel="stylesheet" type="text/css" href="main3.css">


</head>

<body>


	<header>

		<h1 class="logo">MAPA</h1>

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



	<?php

	require_once "connect.php";

	/*include "load.php";*/

	pg_close($polaczenie);

	?>


	<div class="container-fluid">
		<div class="row">

			<div id="mymap" class="col col-sm-12 col-md-12">

			</div>
		</div>
	</div>

	</div>
	</div>




	<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js" integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og==" crossorigin=""></script>
	<script src="dane.geojson"></script> <!-- ładowanie danych z pliku zewnętrznego-->
	<script src="leaflet.ajax.min.js"></script>


	<script type="text/javascript" src="main.js"></script>

</body>

</html>