<?php 

$titleToDelete = $_GET['toDelete'];

if(file_exists('data.json')){
    $data = json_decode(file_get_contents('data.json'));

    $songToDelete = findSongIndexByTitle($titleToDelete, $data);

    //echo '<pre>', var_dump($songToDelete), '</pre>';
    //echo '<pre>', var_dump($data), '</pre>';

    array_splice($data, $songToDelete, 1);

    file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT));
}

function findSongIndexByTitle($title, $array){
    for ($i=0; $i < count($array); $i++) { 
        if($array[$i]->title == $title){
            return $i;
        }
    }
}

header("location: index.php");

?>