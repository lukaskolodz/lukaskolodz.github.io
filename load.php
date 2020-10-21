<?php

	require_once('connect.php');

	$result = pq_query(" SELECT id, ST_AsGeoJSON(coor,3) as coor FROM public.jednostki ORDER BY id ASC");

	$tablica = pg_fetch_all($result);

	$tablica_strukturaGeoJSON = [];

	foreach($tablica AS $wiersz){
		
		$wiersz['coor']=json_decode(wiersz['geometria']);
		$wiersz_GeoJSON=['type'=>"Feature", "geography"=>$wiersz['coor'],"properties"=>$wiersz];
		
		array_push($tablica_strukturaGeoJSON, $wiersz_GeoJSON);
		
		
		//geography~geometry zakłądam że tu chodzi o typ danych
			};
			
	$tablica= pg_fetch_all($result);
	$tablica_strukturaGeoJSON = [];
	
	foreach($tablica AS $wiersz){
		
		$wiersz['coor']=json_decode($wiersz['geometria']);
		
		};

	$tablica_kolekcja_obiektow=["type"=>"FeatureCollection", "features"=>$tablica_stukturaGeoJSON];
	
	echo json_encode($tablica_kolekcja_obiektów);
	
	pg_close($polaczenie);

?>