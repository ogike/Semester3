<?php 

session_start();

$users = json_decode(file_get_contents('users.json'));
$loginerror = '';

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    foreach($users as $userid => $user){
        if($user->username == $_POST['username'] && $user->password == $_POST['pwd']){
            $_SESSION['user'] = $user->username;
            header('Location: index.php');
        }
    }

    //on unsuccesful login
    $loginerror = 'Rossz felhasználónév/jelszó!';
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
    <title>Bejelentkezés - PHP bead - HM37UQ</title>
</head>
<body>
    <form method="post">
        <h2>Jelentkezz be!</h2>

        <?php if($loginerror != ''): ?>
            <p class="loginError"><?=$loginerror?></p>
        <?php endif ?>
        
        Felhasználónév: <input type="text" name="username"> <br>
        Jelszó: <input type="text" name="pwd"> <br>
        <button type="submit">Bejelentkezés</button>
    </form>
</body>
</html>