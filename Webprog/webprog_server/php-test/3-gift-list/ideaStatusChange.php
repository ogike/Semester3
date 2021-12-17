<?php 

$newStatus = $_GET['status'];
$memberId = $_GET['membername'];
$ideaName = $_GET['ideaname'];

$members = json_decode(file_get_contents('members.json'));
$member = ($members->$memberId);

//might be getting deep copy of member
foreach($member->ideas as $idea){
    if($idea->name == $ideaName){
        $idea->status = $newStatus;
    }
}

file_put_contents('members.json', json_encode($members, JSON_PRETTY_PRINT));

header("location: member.php?id=$memberId");

?>