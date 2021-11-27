<?php 

$nevhiba = '';
$eredmenyhiba = '';
$szobelihiba = '';

//validálás
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    // Név ellenőrzése
    //                             empty(stb) <- better?
    if(!isset($_POST['tanulo']) || trim($_POST['tanulo']) === ''){      //nem üres
        $nevhiba = 'A tanuló nevének megadása kötelező.';
    } else if(count(explode(" ", $_POST['tanulo'])) < 2){                //legalább két név
        $nevhiba = 'A tanuló neve legalább két szóból kell álljon.';
    } else if(!isset($_POST['szazalek']) || trim($_POST['szazalek']) === ''){
        $eredmenyhiba = 'Az elért százalékos eredmény megadása kötelező.';
    } else if(!filter_var($_POST['szazalek'], FILTER_VALIDATE_INT)){
        $eredmenyhiba = 'Az elért százalékos eredmény egész szám kell legyen.';
    // } else if((int)$_POST['szazalek'] < 0){
    } else if(intval($_POST['szazalek']) < 0){ //better
        $eredmenyhiba = 'Az elért százalékos eredmény nemnegatív kell legyen.';
    } else if((int)$_POST['szazalek'] >= 12 && (int)$_POST['szazalek'] < 25){
        if(!isset($_POST['szobeli'])){
            $szobelihiba = "Szóbeli időpont szükséges.";
        }
    }
}

//checked miatt kell (az nem küldődik el alapból)
function allapot($param){
    if(isset($_POST[$param])){
        return $_POST[$param];
    }
    return ''; // = false
}

//NOTE: űrlap validáláshoz hasznos függvéynek:
//filter_var($input, FILTER_VALIDATE)
//filterek: 
    // FILTER_DEFAULT (szöveg)
    // FILTER_VALIDATE_INT
    // https://www.php.net/manual/en/filter.constants.php

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
<style>
    .errorMsg{
        display: inline-block;
    }
</style>
<body>
    <h1>ÉRETTSÉGI VIZSGA MATEMATIKÁBÓL</h1> 
    <h2>2. feladat: Űrlapfeldolgozás</h2>
    <form action="index.php" method="POST" novalidate>
        
        <label for="tanulo">Tanuló neve:</label>
        <input type="text" name="tanulo" id="tanulo" value="<?=allapot('tanulo')?>">
        <?php if($nevhiba): ?>  
            <p class="errorMsg"><?=$nevhiba?></p>
        <?php endif ?>

        <br>
        <label for="szazalek">Eredmény (%):</label>
        <input type="text" name="szazalek" id="szazalek" value="<?=allapot('szazalek')?>">
        <?php if($eredmenyhiba): ?>
            <p class="errorMsg"><?=$eredmenyhiba?></p>
            <!-- <?=$eredmenyhiba?> -->
        <?php endif ?>

        <br>
        <input type="checkbox" name="szobeli" id="szobeli" <?=(allapot('szobeli') ? 'checked' : '')?>>
        <label for="szobeli">Szóbeli időpont szükséges</label>
        <?php if($szobelihiba): ?>
            <p class="errorMsg"><?=$szobelihiba?></p>
        <?php endif ?>

        <br>
        <button type="submit">Küldés</button>
    </form>
</body>
</html>