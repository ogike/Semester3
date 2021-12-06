


/**
 * 
 * @param {*} celnev Milyen adatot fetcheljünk
 * @param {*} fuggveny 
 * @param {*} json 
 */
function fetchke(celnev, fuggveny, json = true){
    //       lekérjük az adatot
    //                     ha megkapjuk az adfaotot
    //                                         ha jsoná kódolódott
    if(json) fetch(celnev).then(v => v.json()).then(e => fuggveny(e))
    else     fetch(celnev).then(v => v.text()).then(e => fuggveny(e))
}

function refresh(adat){
    let table = document.querySelector('table')
    table.innerHTML = `<tr>
        <th>Cím</th>
        <th>Előadó</th>
        <th>Kiadás éve</th>
        <th>Play</th>
        <th>Delete</th>
    </tr>`
    
    adat.forEach(element => {
        let row = document.createElement('tr')
        row.innerHTML = `<td>${element.cim}</td>
        <td>${element.artist}</td>
        <td>${element.year}</td>
        <td><a href="${element.link}">▶</a></td>
        <td>
            <a href="deletemusic.php?toDelete=<?=$song->title?>">X</a>
        </td>`
    });
}

document.querySelector('#re').addEventListener('click', refresh) //TODO: bef