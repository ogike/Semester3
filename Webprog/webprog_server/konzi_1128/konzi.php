<?php


//ha decode-nak második paraméterként true-t adunk át, objektum helyett asszoc tömbböt ad vissza
$data = json_decode(file_get_contents('data.json')) ;


//thor githubról 🍝
function tartalmaz($nagyString, $eztTartalmazza){
    return strpos($nagyString, $eztTartalmazza) !== false;
    // PHP7-ben így kell használni, PHP8-ban már van rá szebb függvény
}

//pluszpont
function color($aff){
    if($aff == "human") return "green";
    if($aff == "cultist") return "red";
    return "purple";
}

$object = (object)[
    "human" => 0,
    "hibrid" => 0,
    "cultist" => 0
];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP ZH</title>
</head>
<body>
    <form method="post">
        Name (part): <input type="text" name="name"> <br>
        <!-- listás checkbox átadás: ilyenkor mindegyik értéket az affiliation tömbbe teszi -->
        <input name="affiliation[]" type="checkbox" value="human"> Human <br>
        <input name="affiliation[]" type="checkbox" value="hibrid"> Hibrid <br>
        <input name="affiliation[]" type="checkbox" value="cultist"> Cultist <br>
        <button type="submit">Search!</button>
    </form>

    <table>
        <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Affiliation</th>
            <tr>
        <?php foreach($data as $person): ?>
            <?php if(
                (!isset($_POST["name"]) || trim($_POST['name']) == '' || tartalmaz($person->name, $_POST["name"])) &&
                (!isset($_POST["affiliation"]) || in_array($person->affiliation, $_POST["affiliation"]))
            ): ?>
                <?php $aff = $person->affiliation; $object->$aff += 1; ?>
                <tr style="background-color: <?=color($person->affiliation)?>;">
                    <td><?=$person->name?></td>
                    <td><?=$person->title?></td>
                    <td><?=$person->affiliation?></td>
                <tr>
            <?php endif?>        
        <?php endforeach ?>
    </table>

    <ul>
        <?php foreach($object as $key => $value): ?>
            <?php if($value != 0): ?>
                <li><?=$key?>: <?=$value?></li>
            <?php endif ?>
        <?php endforeach ?>
    </ul>
</body>
</html>