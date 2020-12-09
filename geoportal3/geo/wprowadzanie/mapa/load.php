<?php


require_once('connect.php'); //jednokrotne załadowanie pliku connect.php
//ten skrypt ma za zadanie pobrać dane z Bazy danych i sformatować je tak żeby wyszedł nam poprawny GEOJSON, który można użyć w leaflet
$result = pg_query("SELECT id, nazwa, ST_AsGeoJSON(geogr,3) as geometria, symbol FROM public.a"); //zapytanie SELECT do bazy danych
$tablica = pg_fetch_all($result); //przetworzenie wyniku zapytania do struktury tablicy
$tablica_strukturaGeoJSON = []; // pusta tablica na dane
foreach ($tablica as $wiersz) {  //pętla iterująca po wierszach w tablicy
	$wiersz['geometria'] = json_decode($wiersz['geometria']); // dekodowanie danych przestrzennych odebranych z bazy danych 
	$wiersz_GeoJSON = ["type" => "Feature", "geometry" => $wiersz['geometria'], "properties" => $wiersz]; //przetworzenie wiersza tablicy do struktury piku geojson
	array_push($tablica_strukturaGeoJSON, $wiersz_GeoJSON); //umieszczanie nowego wiersza na końcu tablicy
};
$tablica_kolekcja_obiektow = ["type" => "FeatureCollection", "features" => $tablica_strukturaGeoJSON]; //przypisanie pliku geojson do kolekcji obiektów
echo json_encode($tablica_kolekcja_obiektow);

//pg_close($polaczenie);
?>
<!--
/*
require_once('connect.php');

$result = pg_query("SELECT id, nazwa, ST_AsGeoJSON(geogr,3) as geogr FROM public.a ORDER BY id ASC");

$tablica = pg_fetch_all($result);

$tablica_strukturaGeoJSON = [];

foreach($tablica AS $wiersz)
{

$wiersz['geogr']=json_decode($wiersz['geogr']);
$wiersz_GeoJSON=['type'=>"Feature", "geometry"=>$wiersz['geogr'],"properties"=>$wiersz];

array_push($tablica_strukturaGeoJSON, $wiersz_GeoJSON);


//geography~geometry zakłądam że tu chodzi o typ danych
};

$tablica= pg_fetch_all($result);
//$tablica_strukturaGeoJSON = [];

foreach($tablica AS $wiersz)
{

$wiersz['geogr']=json_decode($wiersz['geogr']);

};

$tablica_kolekcja_obiektow=["type"=>"FeatureCollection", "features"=>$tablica_strukturaGeoJSON];

echo json_encode($tablica_kolekcja_obiektow);



$js_marker =
'var marker;
var myLayer = L.geoJSON(geojsonFeature,
{
pointToLayer: function (feature, latlng){
marker = L.marker(latlng, {icon:L.icon({
iconUrl: feature.properties.symbol_sign.iconUrl,
iconRetinaUrl: feature.properties.symbol_sign.iconRetinaUrl,
iconSize: feature.properties.symbol_sign.iconSize,
iconAnchor: feature.properties.symbol_sign.iconAnchor,
popupAnchor: feature.properties.symbol_sign.popupAnchor,
shadowUrl: feature.properties.symbol_sign.shadowUrl,
shadowSize: feature.properties.symbol_sign.shadowSize,
shadowAnchor: feature.properties.symbol_sign.shadowAnchor,
opacity: 1,
})
}
);
marker.setOpacity(0.6);
return marker;
}
}
).addTo(mymap);'
;

echo '<script>
	'.$js_marker.'
</script>'; */

//pg_close($polaczenie);-->