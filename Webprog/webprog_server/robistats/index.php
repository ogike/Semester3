<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fun Spotify Stats</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

    <h1>Fun Spotify Stats</h1>

    <p>
        Disclaimer: This website was made independently from Spotify by @WeRob10. For instructions on how to use it, contact him. <br>
        For best experience use a desktop computer. Enable JavaScript to run.
    </p>
    <a href="story.html" class="storylink">Story and good to know stuff in Hungarian</a>
    
    <h2>Filters</h2>
    <div id="inputfields">
        <label for="minH">Minimum hour: </label><input id="minH" type="number" name="min" min="0" max="23"> <br>
        <label for="maxH">Maximum hour: </label><input id="maxH" type="number" name="max" min="0" max="23"> <br>
        <label for="artist">Artist: </label><input id="artist" type="text" name="artist"> <br>
        <label for="title">Title: </label><input id="title" type="text" name="title"> <br>
        <label for="minD">Minimum date: </label><input id="minD" type="date" name="MinDate"> <br>
        <label for="maxD">Maximum date: </label><input id="maxD" type="date" name="MaxDate"> <br>
        
        <div id="formextra">
            <label for="hl">Highlight these songs and/or artists:<br> </label><input id="hl" type="text" name="hl"><br><small> This last input field is case sensitive! Separate entries by commas without space. Only highlights if it's an exact match.<br>Use for example to highlight your top5 according to your spotify wrapped.</small>
        </div>
        
        <button id="searchButton">Apply</button><br>
    </div>
    
    <div id="extrabuttons">
        <span>Always apply changes before clicking any of the following!</span><br>
        <button id="showfirst200Button">Show only the first 200</button><br>
        <button id="showallButton">Show all</button> <span><b>Warning: Clicking this can result in high loading times!</b></span>
    </div>

    <h2>Summary</h2>

    <span>
        Shown: <span id="summarycount"></span> / <span id="summarycountall"></span><br>
        Shown: <span id="summaryms"></span> mins / <span id="summarymsall"></span> mins<br>
        Most common artist in the list below: <span id="mostcommonartist"></span><br>
        Most common song in the list below: <span id="mostcommonsong"></span><br>
        Most common hour in the list below: <span id="mostcommonhour"></span><br>
    </span>

    <table id="monthStats">
        <tr><th>January</th><th>Febuary</th><th>March</th><th>April</th><th>May</th><th>June</th><th>July</th><th>August</th>
        <th>September</th><th>October</th><th>November</th><th>December</th></tr>

    </table>
    
    <h2>The data</h2>

    <table id="fullStats">
        <tr><th>Artist</th><th>Title</th><th>Date</th><th class="short">Time played (ms)</th><th class="short">Where was I back then?</th></tr>

    </table>

    <button id="showmorebutton">Show More</button><button id="jump2top">Jump to top</button>
    
    <script src="script.js"></script>
</body>
</html>