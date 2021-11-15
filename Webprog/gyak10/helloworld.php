<?php 

$hibak=[];

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(!isset($_POST['name'])){
        $hibak[] = 'Name not given!';
    }else if(count(explode(" ", $_POST['name'])) < 2){
        $hibak[] = 'Nem megfelelő név formátum!';
    }
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hiiiiiiiii</title>
</head>
<style>
    .hiba{
        color: red;
    }
</style>
<body>
    <form method="post">
        <input name="name"><br>
        <button type="submit">Submit</button>
    </form>
    <?php if(count($hibak) == 0 && $_SERVER['REQUEST_METHOD'] == 'POST'): ?>
        <p>Szia <b><?=$_POST['name']?></b>!</p>
    <?php else: ?>
        <?php foreach($hibak as $hiba): ?>
            <li class="hiba"><?=$hiba?></li>
        <?php endforeach ?>
    <?php endif ?>
</body>
</html>