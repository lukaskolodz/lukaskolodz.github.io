<?php
    
    include("connect.php")

        $result = pq_query(" SELECT pole1, pole2, pole3, pole4, pole5, pole6, pole7 FROM public.form ORDER BY id ASC");

	$tablica = pg_fetch_all($result);
	
	
	echo ($tablica);
	
	pg_close($polaczenie);
?>