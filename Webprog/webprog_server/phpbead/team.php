<?php 

$teams = json_decode(file_get_contents('teams.json'));
$matches = json_decode(file_get_contents('matches.json'));
$users = json_decode(file_get_contents('users.json'));


$teamid = $_GET['teamid'];
$team = $teams->$teamid;

$logged_in = false;

session_start();
if(isset($_SESSION['user'])){
    $logged_in = true;
}

// COMMENT WRITING ###########################################################
$commentError = '';
date_default_timezone_set('Europe/Budapest');
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(isset($_POST['add-comment']) && $logged_in){

        if(!isset($_POST['comment']) || trim($_POST['comment']) === ''){
            $commentError = 'Üres hozzászólást nem tudsz küldeni!';
        } else{

            $newId = getLastCommenId($teams->$teamid);
            $newId++; //after commentid9 it will turn into commentie0, fine for me
            $teams->$teamid->comments->$newId = (object)[
                "author" => $_SESSION['user'],
                "text" => $_POST['comment'],
                "time" => date("Y-m-d H:i:s", time()),
                "teamid" => $teamid
            ];
            
            file_put_contents('teams.json', json_encode($teams, JSON_PRETTY_PRINT));
        }
    }
}


// GETTERS ###################################################################
function getTeamName($id){
    $teams = json_decode(file_get_contents('teams.json')); //really inefficient?
    return $teams->$id->name;
}


function getUserName($users, $userId){
    return $users->$userId->username;
}

//REFACTOR: pass the whole match?
function getMatchResultFormat($matchId){
    $teamid = $_GET['teamid'];
    $matches = json_decode(file_get_contents('matches.json'));
    $home = intval($matches->$matchId->home->score);
    $away = intval($matches->$matchId->away->score);
    if($home == $away){
        return 'tie';
    }
    else if($home > $away && $matches->$matchId->home->id == $teamid){
        return 'win'; 
    }
    else{
        return 'loose';
    }
}

function getLastCommenId($team){
    if(!empty($team->comments)){ //if there are already comments
        //get the last comments key
        end($team->comments);
        return key($team->comments);
    } else{
        return 'commentid1'; 
    }
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
    <title><?=$team->name?> részletei - PHP bead - HM37UQ</title>
</head>
<body>
    <a href="index.php">Vissza a főoldalra</a>
    <h1><?=$team->name?> oldala</h1>

    <div> <!-- Meccsek --> 
        <h2>Lejátszott meccsek</h2>
        <table>
            <tr>
                <th>Dátum</th>
                <th>Hazai</th>
                <th>Másik</th>
                <th>Eredmény</th>
            </tr>

            <!-- TODO: lejátszatlan meccsek -->
            <?php foreach($matches as $matchid => $match): ?>
                <?php if($match->home->id == $teamid || $match->away->id == $teamid ): ?>
                    <tr>
                        <td><?=$match->date?></td>
                        <td><?=getTeamName($match->home->id)?></td>
                        <td><?=getTeamName($match->away->id)?></td>
                        <!-- TODO: leírás és pontozás mást ír hogy mi legyen színezve, melyik? -->
                        <?php if($match->home->score != "-1" && $match->away->score != '-1' ): ?> <!-- Ha nem lejátszatlan -->
                            <td class="<?=getMatchResultFormat($matchid)?>">
                                <?=$match->home->score?> - <?=$match->away->score?>
                            </td>
                        <?php else: ?>
                            <td>Lejátszatlan meccs</td>
                        <?php endif ?>
                    </tr>
                <?php endif ?>
            <?php endforeach ?>

        </table>
    </div>

    <div> <!-- Hozzászólások -->
        <h2>Hozzászólások</h2>

        <?php if($logged_in): ?>
            <form action="" method="post" novalidate>
                <fieldset>
                    <legend>Írj új hozzászólást!</legend>

                    <?php if($commentError != ''): ?>
                        <p class="errorMsg"><?=$commentError?></p> <!-- FIXME: class doesnt get applied? -->
                    <?php endif ?>

                    Hozzászólás: <textarea name="comment" rows="4" cols="40"></textarea>
                    <button name="add-comment" type="submit">Küldés</button>
                </fieldset>
            </form>
        <?php else: ?>
            <p>Hozzászólás írásához először be kell jelentkezni!</p>
            <!-- TODO: pass current page as get parameter so it redirects here after login -->
            <button onclick="window.location.href='login.php'">Log in</button>
        <?php endif ?>
            
        <ul>
            <?php foreach($team->comments as $commentid => $comment): ?>
                <div class="commentDiv">
                    <p class="commentAuthor"><?=$comment->author?></p>
                    <p class="commentTime"><?=$comment->time?></p>
                    <p class="commentText"><?=$comment->text?></p>
                </div>
                <br>
            <?php endforeach ?>
        </ul>
    </div>
</body>
</html>