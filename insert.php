<?php
	include("connect.php");

    $lat = $_POST['lat'];
    $lng = $_POST['lng'];
       


    //wprowadzanie danych do bazy danych
   
    //$_POST['nazwa']='c';
    
    //polecenie wprowadzania danych insert
    $query = "INSERT INTO public.jednostki(
	  coor, opis)
	VALUES (ST_GeographyFromText('SRID=4326; POINT($lng $lat)'),'czolg')";
    $result = pg_query($query); 

    $sql = "SELECT * FROM public.jednostki";

    if (pg_query($sql)) {
            echo " poprawnie wprowadzono dane";
    	} 
		else 
		{
    		echo "cannot insert" ;   
    	}
    pg_close($polaczenie);

?>


