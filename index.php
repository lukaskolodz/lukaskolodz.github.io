<?php

$db_host="localhost";
$db_host="5432";
$db_host="postgres";
$db_host="admin";
$db_host="baza_danych";
    
  $conn_string ="host=".$db_host." port=".$db_port." dbname=".$db_name." user=".$db_user." password=".$db_pass;

$polaczenie = pg_connect ("$conn_string");
    
$stat = pg_connection_status($polaczenie);
if ($stat === PGSQL_CONNECTION_OK) echo"poprawnie nawiazano polaczenie";

?>