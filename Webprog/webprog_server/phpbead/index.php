<?php 

$teams = json_decode(file_get_contents('teams.json'));
$matches = json_decode(file_get_contents('matches.json'), true);

$logged_in = false;

session_start();
if(isset($_SESSION['user'])){
    $logged_in = true;
}


function matchComparator($a, $b){
    return strtotime($b["date"]) - strtotime($a["date"]);
}
usort($matches, 'matchComparator');

//REFACTOR: copy paste, get from utility.php
function getTeamName($id){
    $teams = json_decode(file_get_contents('teams.json')); //really inefficient?
    return $teams->$id->name;
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="https://unpkg.com/marx-css/css/marx.min.css">
    <title>Főoldal - PHP bead - HM37UQ</title>
</head>
<body>
    <h1>Eötvös Lóránd Stadion meccsei</h1>

    <div> <!-- Login/logout --> 
        <?php if($logged_in == false): ?>
            <button onclick="window.location.href='login.php'">Log in</button>
        <?php else: ?>
            <p>Welcome, <?=$_SESSION['user']?>!</p>
            <button onclick="window.location.href='logout.php'">Log out</button>
        <?php endif ?>
    </div>

    <div> <!-- Csapatok táblázat --> 
        <h2>Csapatok</h2>
        <table>
            <tr>
                <th>Név</th>
                <th>Város</th>
                <th>Részletek oldal</th>
            </tr>
    
            <?php foreach($teams as $teamid => $team): ?>
                <tr>
                    <td><?=$team->name?></td>
                    <td><?=$team->city?></td>
                    <td><a href="team.php?teamid=<?=$teamid?>">Részletek</a></td>
                </tr>
            <?php endforeach ?>
        </table>
    </div>

    <div> <!-- Utolsó meccsek --> 
        <h2>Utolsó meccsek</h2>
        <table>
            <tr>
                <th>Dátum</th>
                <th>Hazai</th>
                <th>Másik</th>
                <th>Eredmény</th>
            </tr>

            <?php $numOfMatches = 0 ?>
            <?php foreach($matches as $matchid => $match): ?>
                <?php if($numOfMatches < 5): ?>
                    <tr>
                        <td><?=$match["date"]?></td>
                        <td><?=getTeamName($match["home"]["id"])?></td>
                        <td><?=getTeamName($match["away"]["id"])?></td>
                        <!-- TODO: leírás és pontozás mást ír hogy mi legyen színezve, melyik? -->
                        
                        <?php if($match["home"]["score"] != "-1" && $match["away"]["score"] != '-1' ): ?> <!-- Ha nem lejátszatlan -->
                            <td>
                                <?=$match["home"]["score"]?> - <?=$match["away"]["score"]?>
                            </td>
                        <?php else: ?>
                            <td>Lejátszatlan meccs</td>
                        <?php endif ?>
                    </tr>
                    <?php $numOfMatches++ ?>
                <?php endif ?>
            <?php endforeach ?>

        </table>
    </div>
</body>
</html>