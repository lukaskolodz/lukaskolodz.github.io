<?php
    
    include("connect.php");

    $sql_location = pg_query($polaczenie, "SELECT lat, lng, typ_j, data FROM jednostki.tabela");

    $sql_location = pg_query($polaczenie, "SELECT lat, lng, FROM jednostki.tabela");

/* >>>>>>> 09941dd82fae550c8a773be63c3ff7af876a3dc9 */

    if (!$sql_location){
			echo "błąd pobierania danych z serwera.\n";
			exit;
		}else { 
				while($row = pg_fetch_array($sql_location)){
					echo json_encode($row['lng'])." ";
					echo json_encode($row['lat'])." ";

                    
                    /*nie dokończone*/
?>
