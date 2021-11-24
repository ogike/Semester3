<?php 

$nevhibak=[];

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(!isset($_POST['tanulo'])){
        $hibak[] = 'Name not given!';
    }else if(count(explode(" ", $_POST['tanulo'])) < 2){
        $hibak[] = 'Nem megfelelő név formátum!';
    }
}

?>


<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>PHP ZH - 2. feladat</title>
</head>
<!-- <style>
    .error{
        color: red;
        
    }
</style> -->
<body>
    <h1>ÉRETTSÉGI VIZSGA MATEMATIKÁBÓL</h1> 
    <h2>2. feladat: Űrlapfeldolgozás</h2>
    <form action="index.php" method="POST" novalidate>
        
        <label for="tanulo">Tanuló neve:</label>
        <input type="text" name="tanulo" id="tanulo" value="">
        <?php if(count($nevhibak) != 0): ?>  
            <p class="error"><?=$nevhibak[0]?></p>
        <?php endif ?>

        <br>
        <label for="szazalek">Eredmény (%):</label>
        <input type="text" name="szazalek" id="szazalek" value="">
        <br>
        <input type="checkbox" name="szobeli" id="szobeli">
        <label for="szobeli">Szóbeli időpont szükséges</label>
        <br>
        <button type="submit">Küldés</button>
    </form>
</body>
</html>