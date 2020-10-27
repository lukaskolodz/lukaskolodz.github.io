<?php

    $db_host="localhost";
    $db_port="5432";
    $db_name="postgres";
    $db_user="postgres";
    $db_pass="admin";
    
  $tekst_polaczenia = "host=$db_host port=$db_port dbname=$db_name user=$db_user password=$db_pass";

$polaczenie = pg_connect ("$tekst_polaczenia");
    
$status_polaczenia = pg_connection_status($polaczenie);
    if($status_polaczenia===PGSQL_CONNECTION_OK)
       // echo "poprawnie nawiazanno polaczenie";
    //else
        //echo "nie wyszło";
    
?>


<!DOCTYPE HTML>
<html lang="pl">

<head>
<!--   metadane:ogólne-->
    <meta charset="utf-8"/>
    <title>GEOPORTAL</title>
    <meta name="geoprtal jw"/>
    <meta name="keywords" content="jw, army, wosjko"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
   
    <!--   metadane:linki css-->
    <link rel="stylesheet" href="lib/leaflet.css">
    <link rel="stylesheet" href="main.css">
    
    
</head>
<body>
	
	<form>
	<button id="pobierz" type="button">Pobierz</button> 
	</form>
    <div id="container">
        <div id="mapa">mapa</div>
    </div>
        <!--   metadane:linki js-->
    <script src="lib/jquery.js"></script>
    <script src="lib/leaflet.js"></script>
    <script src="main.js"></script>
    
    
  
  </body>
   
   
    
</html>
