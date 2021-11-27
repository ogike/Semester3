<?php 

if(file_exists('vizsgazok.json')){
    $vizsgazok = json_decode(file_get_contents('vizsgazok.json'));

    if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['kod'])){
        $kod = $_GET['kod'];
        if(isset($vizsgazok->$kod)){
            $vizsgazok->$kod = true;
            file_put_contents('vizsgazok.json', json_encode($vizsgazok, JSON_PRETTY_PRINT));
        }
    }

    file_put_contents('statisztika.txt', calcPercentage($vizsgazok));

} else{
    echo 'Error: cant find vizsgazok.json.';
}

//Hány százalék van bejegyezve?
function calcPercentage($data){
    $numTotal = 0;
    $numBejegyzett = 0;
    foreach($data as $vizsgazo => $bejegyzett){
        if($bejegyzett)
            $numBejegyzett++;
        $numTotal++;
    }
    //STRING CONCATENATION IS DONE WITH OPERATOR '.'
    return (($numBejegyzett / $numTotal) * 100) . "%" ;
}


?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>PHP ZH - 3. feladat</title>
</head>
<body>
    <h1>ÉRETTSÉGI VIZSGA MATEMATIKÁBÓL</h1>
    <h2>3. feladat: adattárolás</h2>
    <h3>Könyvelt törzslapok</h3>

    <?php foreach($vizsgazok as $vizsgazo => $bejegyzett): ?>
        <?php if($bejegyzett): ?>
            <?=$vizsgazo?>
            <br>
        <?php endif ?>
    <?php endforeach ?>
    
    <h3>Hiányos törzslapok</h3>
    
    <?php foreach($vizsgazok as $vizsgazo => $bejegyzett): ?>
        <?php if(!$bejegyzett): ?>
            <a href="3.php?kod=<?=$vizsgazo?>"><?=$vizsgazo?></a>
            <br>
        <?php endif ?>
    <?php endforeach ?>

    
</body>
</html>