<?php

//Getting the data files and merging them
//---Change these to match your files---
$data  = json_decode(file_get_contents('StreamingHistory0.json'));
$data1 = json_decode(file_get_contents('StreamingHistory1.json'));
$data2 = json_decode(file_get_contents('StreamingHistory2.json'));
$data3 = json_decode(file_get_contents('StreamingHistory3.json'));

$data = array_merge($data, $data1, $data2, $data3);
//---Change these to match your files---

//Variables to help us work only with the necessary elements from the array
$currShown = 0;
$max2bShown = 0;

//Default values for the filters
$minval = 0;
$maxval = 23;
$artist = "";
$artistsearch = false;
$title = "";
$titlesearch = false;
$mindate = date_create("2008-10-06", timezone_open("Europe/Budapest")); //Creation of Spotify
$mindate = date_format($mindate,"y-m-d");
$maxdate = date_create(date("y-m-d"), timezone_open("Europe/Budapest"));

if($_SERVER['REQUEST_METHOD'] == 'GET'){

    $currShown = intval($_GET['currShown']);
    if (!isset($_GET['showall'])){ //if we only need data from [n,n+200]
        $max2bShown = $currShown;
        $max2bShown += 200;
    } else { //if we need all the data
        $max2bShown = count($data);
    }

    //filters
    if(!empty(trim($_GET['min']) && is_numeric($_GET['min']))) {
        $minval = $_GET['min'];
    }
    if(!empty(trim($_GET['max']) && is_numeric($_GET['max']))) {
        $maxval = $_GET['max'];
    }
    if(!empty(trim($_GET['artist']) )){
        if ($_GET['artist'] == "")
        {
            $artistsearch = false;
        } else 
        {
            $artistsearch = true;
            $artist = $_GET['artist'];
        }
    }
    if(!empty(trim($_GET['title']))){
        if ($_GET['title'] == "")
        {
            $titlesearch = false;
        } else 
        {
            $titlesearch = true;
            $title = $_GET['title'];
        }
    }
    if(!empty(trim($_GET['minD']))){
        if ($_GET['minD'] != "")
        {
            $datum = date_create($_GET['minD'], timezone_open("Europe/Budapest"));
            $mindate = date_format($datum, "y-m-d");
        }
    }
    if(!empty(trim($_GET['maxD']))){
        if ($_GET['maxD'] != "")
        {
            $datum = date_create($_GET['maxD'], timezone_open("Europe/Budapest"));
            $maxdate = date_format($datum, "y-m-d");
        }
    }
}

//Number of returned elements
$counter = 0;
//Length of returned elements in ms
$ms = 0;

//Number of all elements
$counterall = count($data);

//Helper array which will contain the needed data
$newdata = [];

//Helper array which will contain the monthly stats from the needed data
$monthstats = array(0,0,0,0,0,0,0,0,0,0,0,0);

//The last index which has been checked
$lastindex = 0;

for ($i=$currShown+1; $i < $counterall ; $i++) {
    //Start from the currently shown values + 1, this way, we can avoid duplicates
    //Don't go over the maximum elements of the array

    $value = $data[$i];

    //Convert date from UTC to Budapest's time zone
    $ujdatum = new DateTime($value->endTime, timezone_open('UTC'));
    date_timezone_set($ujdatum, timezone_open('Europe/Budapest'));
    $value->endTime = $ujdatum->format('Y-m-d H:i');

    if (substr($value->endTime, 11, 2) >= $minval && substr($value->endTime, 11, 2) <= $maxval) //Sorting by hours
    {
        if (($artistsearch && stripos($value->artistName, $artist) !== false) || !$artistsearch) //Sorting by artists
        {
            if (($titlesearch && stripos($value->trackName, $title) !== false) || !$titlesearch) //Sorting by titles
            {
                $datum = date_create($value->endTime);
                $aktdate = date_format($datum, "y-m-d");
                if ($mindate <= $aktdate && $maxdate >= $aktdate) //Sorting by date
                {
                    array_push($newdata, $value);
                    $monthstats[intval(substr($value->endTime, 5, 2))-1]++;
                    $counter++;
                    $ms += $value->msPlayed;
                }
            }
        }
    }
    $lastindex = $i;

    //Break from the loop if there is enough values to be shown
    if ($counter+intval($_GET['currShown']) >= $max2bShown){
        break;
    }
}

//The sum of the songs lengths
$msall = array_sum(array_column($data, 'msPlayed'));

$response = [
    "counter" => $counter,
    "counterall" => $counterall,
    "ms" => $ms,
    "msall" => $msall,
    "monthstats" => $monthstats,
    "filtereddata" => $newdata,
    "lastindex" => $lastindex
];

echo json_encode($response, JSON_PRETTY_PRINT);

?>