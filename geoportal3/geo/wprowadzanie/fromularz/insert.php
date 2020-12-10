<?php

include("connect.php");


$nazwa = $_POST['nazwa'];
$lon = $_POST['lon'];
$lat = $_POST['lat'];
$app6 = $_POST['app6'];
$dowodz = $_POST['dowodz'];
$wypos = $_POST['wypos'];
$przynal = $_POST['przynal'];
$obserw = $_POST['obserw'];
$notatka = $_POST['notatka'];

$query = "INSERT INTO public.jedn (nazwa, geo, symbol, szczebel_dow, timestamp, wyposazenie, przynaleznosc, obserwator, notatka) 
    values ('$nazwa', ST_GeographyFromText('SRID=4326; POINT($lon $lat)'),'$app6', '$dowodz', now(), '$wypos', '$przynal', '$obserw', '$notatka')";
$result = pg_query($query);

$sql = "SELECT * FROM public.jedn";

header("Location: index.php");


if (pg_query($sql)) {
    echo " <h3>poprawnie wprowadzono dane</h3>";
} else {
    echo "<h3>cannot insert</h3>";
}
pg_close($polaczenie);
