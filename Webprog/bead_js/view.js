let table

function showDescription(event){
    document.querySelector('#desc_div').classList.toggle('hidden')
}

function generateBoardGUI(){
    //TEMP removing existing board on new game
    let existingTable = document.querySelector('#mainTable')
    if(existingTable) existingTable.remove()

    table = document.createElement('table')
    table.id = 'mainTable'
    let boardDiv = document.querySelector('#board_div')

    for(const curRoomRow of rooms){
        let newRow = document.createElement('tr')
        for(const curRoom of curRoomRow){
            let newRoomTd  = document.createElement('td')
            let newRoomImg = document.createElement('img')
            
            newRoomTd.appendChild(newRoomImg)
            newRow.appendChild(newRoomTd)

            setRoomImage(newRoomTd, curRoom)
        }
        table.appendChild(newRow)
    }
    boardDiv.appendChild(table)
    boardDiv.classList.remove('hidden')
}

//gets a td to set its image properly, and optionally a room
function setRoomImage(td, room){
    let img = td.children[0] //the only children is the image element

    if(!room){ //if we didnt pass a room as parameter
        let coords = getXyCoords(td)
        room = rooms[coords.x][coords.y] //TODO: double check, might be inaccurate
    }

    img.src = room.source
    img.style.transform = `rotate(${room.rotation}deg)`
    //selection, avaliable route styling goes here
}

function getXyCoords(td) {
    return {
      x: td.cellIndex,
      y: td.parentNode.sectionRowIndex,
    }
  }
  