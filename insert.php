<?php
    include("connect.php");
    $lng = $_POST['lng'];
    $lat = $_POST['lat'];
    $typ_j = $_POST['typ_j'];

    $query = "INSERT INTO public.jednostki(lat, lng, typ_j) VALUES ('$at','$lng','$typ_j')";
    $result = pg_query($query);

    $sql = "SELECT * FROM public.jednostki";

    if (pg_query($$sql)){
    echo "poprawnie wprowadzono dane";
        } else {
        echo "cannot insert";
        }
    pg_close($polaczenie);
    
?>
