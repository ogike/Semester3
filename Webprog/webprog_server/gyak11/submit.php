<?php

$new_title = $_POST["title"];
$new_artist = $_POST["artist"];
$new_year = intval($_POST["year"]);
$new_link = $_POST["link"];


$new_song = [
    'title' => $new_title,
    'artist' => $new_artist,
    'year' => $new_year,
    'link' => $new_link,
];

if(file_exists('data.json')){
    $data = json_decode(file_get_contents('data.json'));

    array_push($data, $new_song);

    //ez felülRja a teljes filet
    file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT)); 
}

header("location: index.php")

?>