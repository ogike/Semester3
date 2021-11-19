let table
let nextPlayerLabel = document.querySelector('#nextPlayerLabel') //maybe dirty to set it here?
let lastSelectedArrow //REFACTOR maybe should be in controller
let playerImgs
let treasureImgs
let playerScoreLabels
let extraRoomImg

const tileSizePx = 40
const playerSizeW = 7
const playerSizeH = 13
const treasureSizeWH = 10

//GAME INFO STUFF #############################################################
function showDescription(event){
    document.querySelector('#desc_div').classList.toggle('hidden')
}

/**
 * Display the extra room
 * TODO: refactor: maybe canPushTile should be passed as a parameter?
 */
function displayExtraRoom(){
    extraRoomImg.src = extraRoom.source
    extraRoomImg.style.transform = `rotate(${extraRoom.rotation}deg)`

    if(canPushTile){
        extraRoomImg.style.filter = ""
    } else{
        extraRoomImg.style.filter = "grayscale(100%)"
    }
}

function displayNextPlayer(){
    nextPlayerLabel.innerText = `Next up: Player ${curPlayerI+1}`
}


//PLAYER ICON STUFF ###########################################################
function generatePlayerIcons(){
    playerImgs = []
    playerImgs = players.map((pl) => {
        let img = document.createElement('img')
        img.classList.add('playerImg')
        img.src = playerImgSources[pl.id]
        return img
    })

    //TODO: refactor like treasures
    playerImgs.forEach((img) => table.appendChild(img))
    players.forEach((pl) => drawPlayerOnPos(pl))
}

function drawPlayerOnPos(player){
    //set room.dataset.playersHere++
    let room = rooms[player.posX, player.posY]

    let td   = table.rows[player.posY+1].cells[player.posX+1]
    let tdPos = getCenterOfTd(td)
    let img = playerImgs[player.id]

    img.style.left = `${tdPos.x - playerSizeW/2}px`
    img.style.top  = `${tdPos.y - playerSizeH/2}px`
}

function generatePlayerInfoLabels(){
    let descDiv = document.querySelector("#info_div")

    playerScoreLabels = []
    players.forEach( (pl) => {
        let newLabel = document.createElement('p')
        newLabel.id = `player${pl.id}ScoreLabel`
        newLabel.innerText = `Player ${pl.id+1}'s score: 0`
        playerScoreLabels.push(newLabel)
        descDiv.appendChild(newLabel)
    })
}

/**
 * Updates the player info (score) for the player
 * @param {} playerI 
 */
function displayPlayerInfo(playerI){
    let newText = `Player ${playerI+1}'s score: ${players[playerI].score}`
    playerScoreLabels[playerI].innerText = newText
}

function playerFoundAllTreasures(playerI){
    let newText = `Player ${playerI+1}'s score: ${numOfTreasures}, go back to your starting position to win!`
    playerScoreLabels[playerI].innerText = newText
}

function displayPlayerWin(playerI){
    let winLabel = document.querySelector('#winText')
    winLabel.style.display = 'block'
    winLabel.innerText = `Congratulations, player ${playerI+1} won!`
    playerScoreLabels[playerI].innerText = `Player ${playerI+1}'s score: ${numOfTreasures}, just won!`
    //TODO: fancy graying out/etc
}


//TREASURE STUFF ##############################################################
function generateTreasureIcons(){
    treasureImgs = []
    treasureImgs = players.map( (pl) => {
        let img = document.createElement('img')
        img.classList.add('treasureImg')
        img.src = treasureImgSources[pl.id]
        table.appendChild(img)
        return img
    })

    players.forEach((pl) => displayTreasure(pl.id)) //put them into place
}

function displayTreasure(playerI){
    let img = treasureImgs[playerI]
    if(treasures[playerI].length == 0){
        //if there are no more treasures, hide the existing one
        img.style.display = 'none'
        return
    }
    
    let coords = treasures[playerI][0]
    let td

    if(coords.x < 0 || coords.x >= boardSize || coords.y < 0 || coords.y >= boardSize){
        //if the treasure is on the extra room
        td = table.rows[boardSize+1].cells[boardSize+1]
    }
    else{
        //if the treasure is in the table
        td   = table.rows[coords.y+1].cells[coords.x+1]
    }
    
    let newPos = getCenterOfTd(td)
    img.style.left = `${newPos.x - treasureSizeWH/2}px`
    img.style.top  = `${newPos.y - treasureSizeWH/2}px`
}


//BOARD/ROOM STUFF ############################################################
function generateBoardGUI(){
    //TEMP removing existing board on new game
    let existingTable = document.querySelector('#mainTable')
    if(existingTable) existingTable.remove()
    lastSelectedArrow = null

    table = document.createElement('table')
    table.id = 'mainTable'

    //first arrow/empty row
    table.appendChild( createArrowRow(1) )

    let curRowIndex = 0
    for(const curRoomRow of rooms){
        let newRow = document.createElement('tr')

        if(curRowIndex == 1 || curRowIndex == 3 || curRowIndex == 5){
            newRow.appendChild(createArrowTd(0, curRowIndex))
        } else{
            newRow.appendChild(createEmptyTd())
        }

        for(const curRoom of curRoomRow){
            let newRoomTd  = document.createElement('td')
            let newRoomImg = document.createElement('img')
            
            newRoomTd.appendChild(newRoomImg)
            newRow.appendChild(newRoomTd)

            setRoomImage(newRoomTd, curRoom)

            //TODO: delegálás?
            newRoomImg.addEventListener('click', roomClicked)
        }

        if(curRowIndex == 1 || curRowIndex == 3 || curRowIndex == 5){
            newRow.appendChild(createArrowTd(2, curRowIndex))
        } else{
            newRow.appendChild(createEmptyTd())
        }

        table.appendChild(newRow)
        curRowIndex++
    }

    table.appendChild( createArrowRow(3) )

    //generating the extra room at the bottom-right corner of the table
    extraRoomImg = document.createElement('img')
    extraRoomImg.src = 'help.jpg' //placeholder
    table.rows[boardSize+1].cells[boardSize+1].appendChild(extraRoomImg)

    document.querySelector('#table_div').appendChild(table)
    document.querySelector('#gameboard_div').classList.remove('hidden')
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

function refreshTdImg(x, y){
    let td = table.rows[x+1].cells[y+1]
    console.log
    setRoomImage(td, rooms[x][y])
}

/**
 * @param {*} td the td inside the table
 * @param {*} absolute do we count the arrow rows/colums too?
 * @returns with indexes x and y
 */
function getXyCoords(td, absolute = false) {
    let coords = {
        x: td.cellIndex,
        y: td.parentNode.rowIndex,
    }
    if(!absolute){ //if not absolute position, we subtract the arrow row/columns
        coords.x -= 1
        coords.y -= 1
    }
    return coords
}

/**
 * @returns with center coords of td inside table
 */
 function getCenterOfTd(td){
    let coords = getXyCoords(td, true)
    return{
        x: (coords.x + 0.5) * tileSizePx,
        y: (coords.y + 0.5) * tileSizePx
    }
}


/**
 * dir: where the arrow is looking
 *      0: right, 1: down, 2: left, 3: up 
 * position: which row or column its in
 */
function createArrowTd(dir, pos) {
    let td  = document.createElement('td')
    //TODO: maybe and actual btn element isnt needed? !!!!!!!!!!!!!!
    let btn = document.createElement('button')
    let img = document.createElement('img')

    td.classList.add('buttonTd')
    img.classList.add('arrowImg')
    btn.dataset.dir = dir
    btn.dataset.pos = pos
    btn.dataset.hasTile = false

    //TODO: proper delegalas
    btn.addEventListener('click', arrowPressedLeftClick)
    btn.addEventListener('contextmenu', arrowPressedRightClick)
    btn.addEventListener('mouseenter', arrowHoverEnter)
    btn.addEventListener('mouseleave', arrowHoverLeave)
    // delegal(td, 'btn', 'click', arrowPressed)
    
    td.appendChild(btn)
    btn.appendChild(img)
    redrawArrow(btn)

    return td
}

function redrawArrow(btn){
    img = btn.children[0]
    img.src = 'arrow.png'
    img.style.transform = `rotate(${btn.dataset.dir*90}deg)`    
}

function drawTileOnArrow(btn){
    img = btn.children[0]
    img.src = extraRoom.source
    img.style.transform = `rotate(${extraRoom.rotation}deg)`  
}

function createEmptyTd(){
    return document.createElement('td')
}

/**
 * dir: to pass to createArrowTd, 0: right, 1: down, 2: left, 3: up 
 */
function createArrowRow(dir){
    let newRow = document.createElement('tr')

    newRow.appendChild( createEmptyTd()      )
    newRow.appendChild( createEmptyTd()      )
    newRow.appendChild( createArrowTd(dir, 1))
    newRow.appendChild( createEmptyTd()      )
    newRow.appendChild( createArrowTd(dir, 3))
    newRow.appendChild( createEmptyTd()      )
    newRow.appendChild( createArrowTd(dir, 5))
    newRow.appendChild( createEmptyTd()      )
    newRow.appendChild( createEmptyTd()      )

    return newRow
}