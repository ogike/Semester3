<?php 

echo json_encode(json_decode(file_get_contents('lista.json')), JSON_PRETTY_PRINT);


?>