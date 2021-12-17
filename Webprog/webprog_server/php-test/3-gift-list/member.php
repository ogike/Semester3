<?php 

$members = json_decode(file_get_contents('members.json'));

$id = $_GET['id'];

$member = $members->$id;

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if (isset($_POST['function-ok'])) {
        foreach($member->ideas as $idea){
            if($idea->name == $_POST['idea-name']){
                $idea->status = 'ok';
            }
        }
    } else if (isset($_POST['function-discard'])) {
        foreach($member->ideas as $idea){
            if($idea->name == $_POST['idea-name']){
                $idea->status = 'discarded';
            }
        }
    } else if (isset($_POST['function-add'])) {
        $newIdeaName = $_POST['idea'];
        $newIdea = (object)[
            "name" => $newIdeaName,
            "status" => "new"
        ];
        array_push($member->ideas, $newIdea);
    }

    file_put_contents('members.json', json_encode($members, JSON_PRETTY_PRINT));
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
  <h1>Ideas for <?= $member->name ?></h1>
  <a href="index.php">Back to main page</a>

  <form action="" method="post">
    <fieldset>
      <legend>New idea</legend>
      Idea: <input type="text" name="idea" required> <br>
      <button name="function-add" type="submit">Add new idea</button>
    </fieldset>
  </form>

  <ul>
    <!-- <li class="ok">
      idea OK  
    </li>
    <li class="new">
      idea NEW
      <form action="" method="post">
        <input type="hidden" name="idea-id" value="idea1-id">
        <button type="submit" name="function-ok">Got it!</button>
        <button type="submit" name="function-discard">Discard it!</button>
      </form>
    </li>
    <li class="discarded">
      idea DISCARDED
    </li> -->

    <?php foreach($member->ideas as $idea): ?>
        <?php if($idea->status == "ok"): ?>
            <li class="ok">
                <?=$idea->name?>
            </li>
        <?php endif ?>
    <?php endforeach ?>


    <?php foreach($member->ideas as $idea): ?>
        <?php if($idea->status == "new"): ?>
            <li class="new">
                <?=$idea->name?>
                <form action="" method="post">
                    <input type="hidden" name="idea-name" value="<?=$idea->name?>">
                    <button type="submit" name="function-ok">Got it!</button>
                    <button type="submit" name="function-discard">Discard it!</button>
                </form>
            </li>
        <?php endif ?>
    <?php endforeach ?>

    <?php foreach($member->ideas as $idea): ?>
        <?php if($idea->status == "discarded"): ?>
            <li class="discarded">
                <?=$idea->name?>
            </li>
        <?php endif ?>
    <?php endforeach ?>
  </ul>
</body>
</html>