<?php

$crew = [
    (object)[
        "name" => "Keilani Tatupu",
        "title" => "The Captain",
        "affiliation" => "human"
    ],
    (object)[
        "name" => "Arjun Singh",
        "title" => "The First Mate",
        "affiliation" => "human"
    ],
    (object)[
        "name" => "Svetlana Gedroits",
        "title" => "The Surgeon",
        "affiliation" => "human"
    ],
    (object)[
        "name" => "Jeanne Lafarge",
        "title" => "The Engineer",
        "affiliation" => "human"
    ],
    (object)[
        "name" => "Jamie Snell",
        "title" => "The Master-at-Arms",
        "affiliation" => "human"
    ],
    (object)[
        "name" => "William Bowleg",
        "title" => "The Apprentice",
        "affiliation" => "human"
    ],
    (object)[
        "name" => "Beatrice Sharpe",
        "title" => "The Mathematician",
        "affiliation" => "human"
    ],
    (object)[
        "name" => "Ishmael Marsh",
        "title" => "The Exile",
        "affiliation" => "hibrid"
    ],
    (object)[
        "name" => "Edmund Mallory",
        "title" => "The Jinx",
        "affiliation" => "cultist"
    ],
    (object)[
        "name" => "Samira Dualeh",
        "title" => "The Stowaway",
        "affiliation" => "hibrid"
    ]
];

$data = (object)[
    "human" => 0,
    "hibrid" => 0,
    "cultist" => 0
];

function tartalmaz($nagyString, $eztTartalmazza){
    return strpos($nagyString, $eztTartalmazza) !== false;
    // PHP7-ben így kell használni, PHP8-ban már van rá szebb függvény
}

function color($aff){
    switch ($aff) {
        case 'human':
            return 'green';
            break;
        
        case 'hibrid':
            return 'purple';
            break;
        
        case 'cultist':
            return 'red';
            break;
    }
}

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
        <input name="affiliation[]" type="checkbox" value="human"> Human <br>
        <input name="affiliation[]" type="checkbox" value="hibrid"> Hibrid <br>
        <input name="affiliation[]" type="checkbox" value="cultist"> Cultist <br>
        <button type="submit">Search!</button>
    </form>

    <table>
        <tr><th>Name</th><th>Title</th><th>Affiliation</th><tr>
        <?php foreach($crew as $crew_member): ?>
            <?php if(
                (!isset($_POST["name"]) || trim($_POST['name']) == '' || tartalmaz($crew_member->name, $_POST["name"])) &&
                (!isset($_POST["affiliation"]) || in_array($crew_member->affiliation, $_POST["affiliation"]))
            ): ?>
                <?php $aff = $crew_member->affiliation; $data->$aff += 1; ?>
                <tr style="background-color: <?=color($crew_member->affiliation)?>;"><td><?=$crew_member->name?></td><td><?=$crew_member->title?></td><td><?=$crew_member->affiliation?></td><tr>
            <?php endif?>        
        <?php endforeach ?>
    </table>

    <ul>
        <?php foreach($data as $key => $value): ?>
            <?php if($value != 0): ?>
                <li><?=$key?>: <?=$value?></li>
            <?php endif ?>
        <?php endforeach ?>
    </ul>
</body>
</html>