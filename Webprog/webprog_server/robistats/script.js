//Useful functions
function fetchke(celnev, fuggveny, json = true){
    if(json) fetch(celnev).then(v => v.json()).then(e => fuggveny(e))
    else     fetch(celnev).then(v => v.text()).then(e => fuggveny(e))
}
function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }
    szulo.addEventListener(mikor, esemenyKezelo);
}

//The filters
const minhourfield = document.querySelector("#minH")
const maxhourfield = document.querySelector("#maxH")
const titlefield = document.querySelector("#title")
const artistfield = document.querySelector("#artist")
const mindatefield = document.querySelector("#minD")
const maxdatefield = document.querySelector("#maxD")

const highlightfield = document.querySelector("#hl")

//The place for the "overall" stats
const summarycount = document.querySelector("#summarycount")
const summarycountall = document.querySelector("#summarycountall")
const summaryms = document.querySelector("#summaryms")
const summarymsall = document.querySelector("#summarymsall")

//The two tables. One for the monthly stats, one for the songs
const monthStats = document.querySelector("#monthStats")
const fullStats = document.querySelector("#fullStats")

//Currently shown number of lines
let currentShown = 0
let currentMS = 0

//A function returning what parameters fetch.php should get
function getFetchText(button, currentShownParam){
    let text = `fetch.php?min=${minhourfield.value}&max=${maxhourfield.value}&title=${titlefield.value}&artist=${artistfield.value}&minD=${mindatefield.value}&maxD=${maxdatefield.value}&currShown=${currentShownParam}`
    if (button == "more"){
        text += `&showall=true`
    }
    return text
}

//Building up the table with full new data
window.addEventListener('load', () => {
    currentShown = -1
    fetchke(getFetchText("load", currentShown), fullNew)
    currentShown = 200
})

document.querySelector("#searchButton").addEventListener('click', () => {
    currentShown = -1
    fetchke(getFetchText("search", currentShown), fullNew)
    document.querySelector("#extrabuttons").classList.remove('hidden')
    document.querySelector("#showmorebutton").classList.remove('hidden')
    currentShown = 200
})

document.querySelector("#showfirst200Button").addEventListener('click', () => {
    currentShown = -1
    fetchke(getFetchText("first200", currentShown), fullNew)
    currentShown = 200
})
//---

//Adding data to the table
document.querySelector("#showallButton").addEventListener('click', () => {
    fetchke(getFetchText("more", currentShown), addData)
    currentShown = -1
})

document.querySelector("#showmorebutton").addEventListener('click', () => {
    if (currentShown != -1){
        fetchke(getFetchText("showmore", currentShown), addData)
    }
})
//---

let toHighlight = Array.from(highlightfield.value.split(','))

function highlight(text){
    return toHighlight.includes(text)
}

//The function that should be called when there is already data in the table
function addData(data){

    //The index of the last shown element
    currentShown = parseInt(data.lastindex)

    //Get the items that should be highlighted at the end of this function
    toHighlight = Array.from(highlightfield.value.split(','))

    //Fill summary part
    currentMS += parseFloat(data.ms)
    summaryms.innerHTML = `${(currentMS/100000).toFixed(2)}`

    //Fill Months data summary part
    let row = document.createElement('tr')

    for (let i = 0; i < 12; i++) {
        let cel = monthStats.rows[1].cells[i]
        let celval = parseInt(cel.innerHTML)

        let toadd = parseInt(data.monthstats.at(i))
        
        cel.innerHTML = (parseInt(celval) + parseInt(toadd))
    }

    //Fill the data part
    data.filtereddata.forEach(element => {
        let row = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = element.artistName
        if (highlight(element.artistName)){
            td.classList.add('top')
        }
        row.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.trackName
        if (highlight(element.trackName)){
            td.classList.add('top')
        }
        row.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.endTime
        row.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = (parseFloat(element.msPlayed)/100000).toFixed(3);
        row.appendChild(td)
        
        td = document.createElement('td')
        td.innerHTML = `<a href="https://timeline.google.com/maps/timeline?pb=!1m2!1m1!1s${(element.endTime).substring(0,10)}" target="_blank">here</a>`
        row.appendChild(td)
        fullStats.appendChild(row)
    });

    //Only show "show more" button if there is more to be shown
    if (data.lastindex == data.counterall-1){
        document.querySelector("#showmorebutton").classList.add('hidden');
    } else {
        document.querySelector("#showmorebutton").classList.remove('hidden')
    }

    //Get the currently shown elements count by returning the length of the table
    summarycount.innerHTML = parseInt(document.querySelector('#fullStats').rows.length)-1
    initMostCommons()
}

//The function that should be called when it's necessary to generate from the begining
function fullNew(data){

    //The index of the last shown element
    currentShown = parseInt(data.lastindex)
    
    //Get the items that should be highlighted at the end of this function
    toHighlight = Array.from(highlightfield.value.split(','))
    
    //Fill summary part
    summarycountall.innerHTML = `${parseInt(data.counterall)}`

    currentMS = data.ms
    summaryms.innerHTML = `${parseFloat(currentMS)/100000}`
    summarymsall.innerHTML = `${parseFloat(data.msall)/100000}`

    //Fill Months data part
    let row = document.createElement('tr')
    data.monthstats.forEach(element => {
        let elem = document.createElement('td')
        elem.innerHTML = element
        row.appendChild(elem)
    });
    monthStats.innerHTML = `<tr><th>January</th><th>Febuary</th><th>March</th><th>April</th><th>May</th><th>June</th><th>July</th><th>August</th>
    <th>September</th><th>October</th><th>November</th><th>December</th></tr>`
    monthStats.appendChild(row)

    //Fill the data part
    fullStats.innerHTML = `<th>Artist</th><th>Title</th><th>Date</th><th class="short">Time played (mins)</th><th class="short">Where was I back then?</th>`
    data.filtereddata.forEach(element => {
        let row = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = element.artistName
        if (highlight(element.artistName)){
            td.classList.add('top')
        }
        row.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.trackName
        if (highlight(element.trackName)){
            td.classList.add('top')
        }
        row.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.endTime
        row.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = (parseFloat(element.msPlayed)/100000).toFixed(3);
        row.appendChild(td)
        
        td = document.createElement('td')
        td.innerHTML = `<a href="https://timeline.google.com/maps/timeline?pb=!1m2!1m1!1s${(element.endTime).substring(0,10)}" target="_blank">here</a>`
        row.appendChild(td)
        fullStats.appendChild(row)
    });

    //Only show "show more" button if there is more to be shown
    if (data.lastindex == data.counterall-1){
        document.querySelector("#showmorebutton").classList.add('hidden');
    } else {
        document.querySelector("#showmorebutton").classList.remove('hidden')
    }

    summarycount.innerHTML = parseInt(document.querySelector('#fullStats').rows.length)-1
    initMostCommons()
}

//If there was a change in the input fields, the user shouldn't click on the "show more", "show all" and "show only the first 200" buttons
const inputfields = document.querySelector('#inputfields')
function hide(event, elem){
    document.querySelector("#extrabuttons").classList.add('hidden')
    document.querySelector("#showmorebutton").classList.add('hidden')
}
delegal(inputfields, 'input', 'change', hide)

//Jump to top function
document.querySelector('#jump2top').addEventListener('click', () => jumptotop())
function jumptotop(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Get the most common artists, song, hours from the table
function initMostCommons(){
    document.querySelector('#mostcommonartist').innerHTML = mostCommonArtist()
    document.querySelector('#mostcommonsong').innerHTML = mostCommonSong()
    document.querySelector('#mostcommonhour').innerHTML = mostCommonHour()
}

//Get most frequent element of a given array
function getMostFrequent(arr) {
    let hashmap = arr.reduce( (acc, val) => {
        acc[val] = (acc[val] || 0 ) + 1
        return acc
    },{})
    return Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b)
}

function mostCommonArtist(){
    let artists = document.querySelectorAll('#fullStats>tr>td:first-child')
    let artistarray = Array();
    artists.forEach(element => {
        artistarray.push(element.innerHTML)
    });

    return (getMostFrequent(artistarray))
}

function mostCommonSong(){
    let artists = document.querySelectorAll('#fullStats>tr>td:nth-child(2)')
    let songsarray = Array();
    artists.forEach(element => {
        songsarray.push(element.innerHTML)
    });
    
    return (getMostFrequent(songsarray))
}

function mostCommonHour(){
    let artists = document.querySelectorAll('#fullStats>tr>td:nth-child(3)')
    let hourarray = Array();
    artists.forEach(element => {
        hourarray.push((element.innerHTML.substring(11,13)))
    });
    
    return (getMostFrequent(hourarray))
}
