<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Playlist - Add a song!</title>
</head>
<body>
    <form action="submit.php" method="post">
        Title: <input type="text" name="title"> <br>
        Artist: <input type="text" name="artist"> <br>
        Date of release: <input type="number" name="year"> <br>
        Link: <input type="text" name="link"> <br>
        <button type="submit">Add it!</button>
    </form>
</body>
</html>