<?php
$students = [
    ['name' => 'Student1', 'age' => 20],
    ['name' => 'Student2', 'age' => 10],
    ['name' => 'Student3', 'age' => 30],
    ['name' => 'Student4', 'age' => 20],
    ['name' => 'Student5', 'age' => 10],
];

$hibak = [];

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    if(!isset($_GET['age'])){
        $hibak[] = 'Age not given!';
    }else if(!is_numeric($_GET['age'])){
        $hibak[] = 'The given age is not a number';
    }
}


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listaszűrés</title>
</head>
<style>
    .hiba{
        color: red;
    }
</style>
<body>
<ul>
<?php if(isset($_GET['age']) && is_numeric($_GET['age'])):?>
    <?php foreach($students as $student): ?>
        <?php if($_GET['age'] == $student['age']): ?>
            <li><?=$student['name']?> (<?=$student['age']?>)</li>
        <?php endif ?>
    <?php endforeach ?>
<?php else: ?>
    <?php foreach($students as $student): ?>
            <li><?=$student['name']?> (<?=$student['age']?>)</li>
    <?php endforeach ?>
<?php endif ?>
</ul>

<ul>
<?php foreach($hibak as $hiba): ?>
    <li class="hiba"><?=$hiba?></li>
<?php endforeach ?>
</ul>
</body>
</html>