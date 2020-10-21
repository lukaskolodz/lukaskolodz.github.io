<?php
    
	header('Content-type: application/json');
	
    require_once("connect.php");
	
	$query = "SELECT coor, opis FROM public.jednostki";
	
	$result = pg_query($query);
	
	$data = array();
	

    /*$sql_location = pg_query($polaczenie, "SELECT coor, opis, data FROM public.jednostki");

    $sql_location = pg_query($polaczenie, "SELECT lat, lng, FROM public.jednostki");*/

    if (!$sql_location){
			echo "błąd pobierania danych z serwera.\n";
			exit;
		}else { 
				while($row = pg_fetch_array($result)){
					echo json_encode($row['coor']);
		}}

                    
    pg_close($polaczenie);
    
?>
