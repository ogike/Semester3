<?php 

$data = json_decode(file_get_contents('data.json'));

$logged_in = false;

if(isset($_SESSION['user'])){
    $logged_in = false;
}

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

    <?php if($logged_in): ?>
        <button onclick="window.location.href='addmusic.php'">Add a song!</button>
    <?php endif ?>

    <button id="re">Frissít</button>
    
    <?php if($logged_in): ?>
        <button onclick="window.location.href='login.php'">Log out</button>
    <?php endif ?>
</body>
<script src="fetch.js"></script>
</html>