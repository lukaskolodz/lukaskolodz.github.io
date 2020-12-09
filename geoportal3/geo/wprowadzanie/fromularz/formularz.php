<?php
    
    include ("connnect.php");

    $pole1 = $_POST['pole1'];
    $pole2 = $_POST['pole2'];
    $pole3 = $_POST['pole3'];
    $pole4 = $_POST['pole4'];
    $pole5 = $_POST['pole5'];
    $pole6 = $_POST['pole6'];
    $pole7 = $_POST['pole7'];

    $query = "INSERT INTO public.form(
        pole1, pole2, pole3, pole4, pole5, pole6, pole7)
      VALUES ($pole1, $pole2, $pole3, $pole4, $pole5, $pole6, $pole7)";
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