<?php 

$data = json_decode(file_get_contents('data.json')) ;

$hibak = [];

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(!isset($_POST['name']) || trim($_POST['name']) === ''){  
        $hibak[] = 'Name not given!';
    }
    if(!isset($_POST['affiliation']) || count($_POST['affiliation']) != 1){
        $hibak[] = 'Give one and only one affiliation!';
    }

    if(count($hibak) == 0){
        $new_person = (object)[
            "name" => $_POST['name'],
            "affiliation" => $_POST['affiliation'][0]
        ];
        array_push($data, $new_person);
        file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT)); 
    }
}

$numOfPiltover = 0;
$numOfZaun = 0;

foreach($data as $person){
    if($person->affiliation == 'Piltover') $numOfPiltover++;
    if($person->affiliation == 'Zaun')     $numOfZaun++;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Csoport Zh HM37UQ</title>
</head>
<style>
    table, tr{
        border-style: solid;
    }
    .hiba{
        color: red;
    }
</style>
<body>
    <div style="display: inline-block">
        <h2>Piltover</h2>
        <table>
            <tr><th>Name</th></tr>
            <?php foreach($data as $person): ?>
                <?php if($person->affiliation == "Piltover"): ?>
                    <tr style="background-color: lightblue">
                        <td><?=$person->name?></td>
                    </tr>
                <?php endif ?>
            <?php endforeach ?>
        </table>
        Piltover: <?=$numOfPiltover?>
    </div>

    <div style="display: inline-block">
        <h2>Zaun</h2>
        <table>
            <tr><th>Name</th></tr>
            <?php foreach($data as $person): ?>
                <?php if($person->affiliation == "Zaun"): ?>
                    <tr style="background-color: lightgreen">
                        <td><?=$person->name?></td>
                    </tr>
                <?php endif ?>
            <?php endforeach ?>
        </table>
        Zaun: <?=$numOfZaun?>
    </div>

    <form method="post">
        Name (part): <input type="text" name="name"> <br>
        <input name="affiliation[]" type="checkbox" value="Piltover"> Piltover <br>
        <input name="affiliation[]" type="checkbox" value="Zaun"> Zaun <br>
        <button type="submit">Add!</button>
    </form>
    <ul>
        <?php foreach($hibak as $hiba): ?>
            <li class="hiba"><?=$hiba?></li>
        <?php endforeach ?>
    </ul>
</body>
</html>