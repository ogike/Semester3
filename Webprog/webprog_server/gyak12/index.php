<?php 
//ELSŐ#########################################
// echo file_get_contents('test.txt');

// file_put_contents('test.txt', 'Szöveg');

// echo file_get_contents('test.txt');
//fentiek nincs tesztelve

//MÁSODIK#############################################################
// $data = json_decode(file_get_contents('data.json'));

// $data[] = [
//     'nev'=> 'Zoli',
//     'targykod' => 'fasz'
// ];

// var_dump($data);

// file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT));


//HARMADIK##########################################
$data = json_decode(file_get_contents('data.json'));

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Playlist</title>
</head>
<body>
    <h1>Playlist</h1>
    <table>
        <tr>
            <th>Cím</th>
            <th>Előadó</th>
            <th>Kiadás éve</th>
            <th>Play</th>
            <th>Delete</th>
        </tr>

        <?php foreach($data as $song): ?>
            <tr>
                <td><?=$song->title?></td>
                <td><?=$song->artist?></td>
                <td><?=$song->year?></td>
                <td><a href="<?=$song->link?>">▶</a></td>
                <td>
                    <a href="deletemusic.php?toDelete=<?=$song->title?>">X</a>
                </td>
            </tr>
        <?php endforeach ?>
    </table>
    <button onclick="window.location.href='addmusic.php'">Add a song!</button>
    <button id="re">Frissít</button>
</body>
</html>