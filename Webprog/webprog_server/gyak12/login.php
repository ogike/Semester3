<?php 

session_start();

$data = json_decode(file_get_contents('users.json'));

if($_SERVER['REQUEST_METHOD'] == 'POST' 
    && $data->uname == $_POST['uname']
    && $data->pwd == $_POST['pwd']){

    $_SESSION['user'] = $data->uname;
    header('Location: index.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form method="post">
        User: <input type="text" name="uname"> <br>
        Password: <input type="text" name="pwd"> <br>
        <button type="submit">Add it!</button>
    </form>
</body>
</html>