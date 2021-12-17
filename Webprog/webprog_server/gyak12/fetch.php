<?php 

//csak visszadobja a lekért adatot
    //echo-val stdout-ra dobja kb, mi innen kapjuk vissza js-ben
echo json_encode(json_decode(file_get_contents('data.json')), JSON_PRETTY_PRINT);


?>