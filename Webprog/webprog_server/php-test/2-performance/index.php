<?php 

$numhiba = '';
$namehiba = '';
$urlhiba = '';
$typehiba = '';
$readyhiba = '';

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    //NUMBER OF CHILDREN
    if(!isset($_GET['num_children'])){ 
        $numhiba = 'Number of children must be set!';
        $namehiba = 'Childrens name must be set according to number of children!';
    }else if(!filter_var($_GET['num_children'], FILTER_VALIDATE_INT)){
        $numhiba = 'Number of children must be an integer!';
        $namehiba = 'Childrens name must be set according to number of children!';
    } else if(intval($_GET['num_children']) <= 0){
        $numhiba = 'Number of children must be positive integer!';
        $namehiba = 'Childrens name must be set according to number of children!';
    }//CHIDREN NAMES
    else if(!isset($_GET['children_names']) 
        || trim($_GET['children_names']) === ''
        || count(explode(",", $_GET['children_names'])) != intval($_GET['num_children'])){
            $namehiba = 'Childrens name must be set for everyone!';
    }

    if(!isset($_GET['music_url'])){
        $urlhiba = 'URL must be set';
    } else if(!filter_var($_GET['music_url'], FILTER_VALIDATE_URL) ){
        $urlhiba = 'URL must be have a valid URL format!';
    }

    if(!isset($_GET['performance_type'])){
        $typehiba = 'Performance must be set!';
    } else if($_GET['performance_type'] != 'poem' && $_GET['performance_type'] != 'song'){
        $typehiba = 'Performance can only be song or poem!';
    }

    if(!isset($_GET['ready'])){
        $readyhiba = 'Someone is not ready yet.';
    }
}

// function hasError(){
//     return $numhiba == false && !$namehiba && !$urlhiba && !$typehiba && !$readyhiba;
// }

function allapot($param){
    if(isset($_GET[$param])){
        return $_GET[$param];
    }
    return ''; // = false
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Performance</title>
</head>
<style>
    .errorMsg{
        display: inline-block;
        color: red;
    }
</style>
<body>
    <h1>Performance</h1>
    <form action="index.php" method="get" novalidate>
        <label for="i1">Number of children:</label> 
        <input type="text" name="num_children" id="i1" value="<?=allapot('num_children')?>">
        <?php if($numhiba): ?>  
            <p class="errorMsg"><?=$numhiba?></p>
        <?php endif ?>
        <br>

        <label for="i2">Children's names:</label> 
        <input type="text" name="children_names" id="i2" value="<?=allapot('children_names')?>">
        <?php if($namehiba): ?>  
            <p class="errorMsg"><?=$namehiba?></p>
        <?php endif ?>
        <br>

        <label for="i3">URL of music to be played:</label> 
        <input type="text" name="music_url" id="i3" value="<?=allapot('music_url')?>">
        <?php if($urlhiba): ?>  
            <p class="errorMsg"><?=$urlhiba?></p>
        <?php endif ?>
        <br>

        <label for="i4">Performance type:</label> 
        <input type="text" name="performance_type" id="i4" value="<?=allapot('performance_type')?>">
        <?php if($typehiba): ?>  
            <p class="errorMsg"><?=$typehiba?></p>
        <?php endif ?>
        <br>

        <input type="checkbox" name="ready" id="i5" <?=(allapot('ready') ? 'checked' : '')?>>
        <label for="i5">Everyone is ready</label>
        <?php if($readyhiba): ?>  
            <p class="errorMsg"><?=$readyhiba?></p>
        <?php endif ?>
        <br>

        <button type="submit">Submit</button>
    </form>

    <?php if($numhiba == false && !$namehiba && !$urlhiba && !$typehiba && !$readyhiba): ?>
        <div class="merry">🎄 MERRY CHRISTMAS AND HAPPY NEW YEAR! 🎄</div>
    <?php endif ?>

    <h2>Test cases</h2>
        <a href="index.php?num_children=&children_names=&music_url=&performance_type=">num_children=&children_names=&music_url=&performance_type=</a><br>
        <a href="index.php?num_children=n&children_names=&music_url=&performance_type=">num_children=n&children_names=&music_url=&performance_type=</a><br>
        <a href="index.php?num_children=6.7&children_names=&music_url=&performance_type=">num_children=6.7&children_names=&music_url=&performance_type=</a><br>
        <a href="index.php?num_children=0&children_names=&music_url=&performance_type=">num_children=0&children_names=&music_url=&performance_type=</a><br>
        <a href="index.php?num_children=3&children_names=Adam%2CBarbara&music_url=&performance_type=">num_children=3&children_names=Adam%2CBarbara&music_url=&performance_type=</a><br>
        <a href="index.php?num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=&performance_type=">num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=&performance_type=</a><br>
        <a href="index.php?num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=5c3ezwen&performance_type=">num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=5c3ezwen&performance_type=</a><br>
        <a href="index.php?num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=">num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=</a><br>
        <a href="index.php?num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=good">num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=good</a><br>
        <a href="index.php?num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=song">num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=song</a><br>
        <a href="index.php?num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=song&ready=on">num_children=3&children_names=Adam%2CBarbara%2CChloe&music_url=http%3A%2F%2Ftinyurl.com%2F5c3ezwen&performance_type=song&ready=on</a><br>
</body>
</html>
