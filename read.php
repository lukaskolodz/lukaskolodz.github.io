<?php
    
    include("connect.php");

    $sql_location = pg_query($polaczenie, "SELECT lat, lng, typ_j, data FROM jednostki.tabela");

    $sql_location = pg_query($polaczenie, "SELECT lat, lng, FROM jednostki.tabela");

    if (!$sql_location){
			echo "błąd pobierania danych z serwera.\n";
			exit;
		}else { 
				while($row = pg_fetch_array($sql_location)){
					echo json_encode($row['lng'])." ";
					echo json_encode($row['lat'])." ";

                    
    pg_close($polaczenie);
    
?>
