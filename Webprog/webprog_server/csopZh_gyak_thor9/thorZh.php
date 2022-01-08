<?php 
//object
$data = json_decode(file_get_contents('data.json')) ;



//thor githubról 🍝
function tartalmaz($nagyString, $eztTartalmazza){
    return strpos($nagyString, $eztTartalmazza) !== false;
    // PHP7-ben így kell használni, PHP8-ban már van rá szebb függvény
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        Állatfaj (részlet): <input type="text" name="faj"> <br>
        <input type="radio" name="vadasz" value="vilmos"> Vilmos <br>
        <input type="radio" name="vadasz" value="rego"> Regő <br>
        <button type="submit"> Keres</button>
    </form>

    <?php if($_SERVER['REQUEST_METHOD']): ?>
        <table>
            <tr>
                <th>Vadász</th>
                <th>Állat</th>
                <th>Súly</th>
            </tr>
            <?php foreach($data as $sor): ?>
                <?php if(
                    (!isset($_POST["faj"]) || trim($_POST['faj']) == '' || tartalmaz($sor->allat, $_POST["faj"]))
                ): ?>
                    <tr>

                    </tr>
                <?php endif ?>
            <?php endforeach ?>
        </table>
    <?php endif ?>
</body>
</html>