<?php 

$members = json_decode(file_get_contents('members.json'));

function getStats($member){
  $okCount = 0;
  $allCount = 0;

  foreach($member->ideas as $idea){
    if($idea->status == 'ok'){
      $okCount++;
    } else if($idea->status != 'discarded'){
      $allCount++;
    }
    return "($okCount / $allCount)";
  }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gift list</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <h1>Gift list</h1>
  <h2>My family members</h2>
  <ul>
    <!-- <li>
      My dear father
      (2/3)
    </li> -->

    <?php foreach($members as $member): ?>
      <li>
        <a href="member.php?id=<?=$member->id?>"><?=$member->name?> </a>
        <?=getStats($member)?>
      </li>
    <?php endforeach ?>
  </ul>
</body>
</html>