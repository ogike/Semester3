let boardSize = 7
let rooms = []
let extraRoom
let numOfPlayers = 2 //TODO: remove hardcode
let players = []
let curPlayerI

function newGame(){
    //deep copy of defaultRoomLayout and its sub-references
    rooms = JSON.parse(JSON.stringify(defaultRoomLayout))

    //generating random rooms
    let randomRooms = []
    for(let i = 0; i < 13; i++){ //13 straight rooms
        randomRooms.push( rotateRoom(room_straight, randomNum(0, 3)) )
    }
    for(let i = 0; i < 15; i++){ //15 corner rooms
        randomRooms.push( rotateRoom(room_corner, randomNum(0, 3)) )
    }
    for(let i = 0; i < 6; i++){ //6 t-section rooms
        randomRooms.push( rotateRoom(room_t, randomNum(0, 3)) )
    }

    //overwriting the empty (null) rooms with the random rooms
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if(rooms[i][j] == null){
                let newRoomIndex = randomNum(0, randomRooms.length-1)
                rooms[i][j] = randomRooms[newRoomIndex]
                randomRooms.splice(newRoomIndex, 1) //remove the added room from the array
            }
        }
    }

    extraRoom = randomRooms[0]

    //setting the board
    generateBoardGUI()
    displayExtraRoom()

    //setting the players
    players = [
        Object.assign({}, player),
        Object.assign({}, player)
    ]
    //TODO: turn all this into a cycle
    //TODO: extract colors into data.js
    players[0].color = 'green'
    players[1].color = 'red'

    players[0].id = 0
    players[1].id = 1

    players[0].posX = 0
    players[0].posY = 0

    players[1].posX = boardSize-1
    players[1].posY = 0

    generatePlayerIcons()
    curPlayerI = 0
}

function moveCurPlayerToXy(x, y){
    let curPlayer = players[curPlayerI]
    curPlayer.posX = x
    curPlayer.posY = y
    drawPlayerOnPos(curPlayer)
}

//takes in a room, and rotates it clock-wise 'times' times
function rotateRoom(room, times){
    //might not be the most optimized thing to create one every time
    let newRoom = Object.assign({}, room) //deep copy the object

    //set the rotation value for the image rotation value
    newRoom.rotation += 90 * times
    newRoom.rotation %= 360
    
    //rotate the openings
    for (let index = 0; index < times; index++) {
        let last = newRoom.doors[3]
        newRoom.doors.unshift(last) //puts the last one at the beginning
        newRoom.doors.pop()
    }

    return newRoom
}

function rotateExtraRoom(){
    extraRoom = rotateRoom(extraRoom, 1)
}

/**
 * //TODO: refactor, optimize (use extraRoom as temp too)
 *             rename i/j indexes
 * Pushes the extra room into the table
 * @param {*} index The row/column index
 * @param {*} start Push it from which side: 0: left, 1: top, 2: right, 3: bottom 
 */
function pushRoomIntoTable(index, dir){
    let tempBefore
    let tempCur

    switch (dir) {
        case 0: //push into row from left
            tempBefore = rooms[index][0]
            rooms[index][0] = extraRoom
            refreshTdImg(index, 0)
            
            for (let j = 1; j < boardSize; j++) {
                tempCur = rooms[index][j]
                rooms[index][j] = tempBefore
                refreshTdImg(index, j)
                tempBefore = tempCur
            }
            break;

        case 1: //push into column from the top
            tempBefore = rooms[0][index]
            rooms[0][index] = extraRoom
            refreshTdImg(0, index)
            
            for (let j = 1; j < boardSize; j++) {
                tempCur = rooms[j][index]
                rooms[j][index] = tempBefore
                refreshTdImg(j, index)
                tempBefore = tempCur
            }
            break;

        case 2:  //push into row from right
            tempBefore = rooms[index][boardSize-1]
            rooms[index][boardSize-1] = extraRoom
            refreshTdImg(index, boardSize-1)
            
            for (let j = boardSize-2; j >= 0; j--) {
                tempCur = rooms[index][j]
                rooms[index][j] = tempBefore
                refreshTdImg(index, j)
                tempBefore = tempCur
            }

        case 3: //push into column from the bottom
            tempBefore = rooms[boardSize-1][index]
            rooms[boardSize-1][index] = extraRoom
            refreshTdImg(boardSize-1, index)
            
            for (let j = boardSize-2; j >= 0; j--) {
                tempCur = rooms[j][index]
                rooms[j][index] = tempBefore
                refreshTdImg(j, index)
                tempBefore = tempCur
            }
            break;

        default:
            console.error('Wrong dir')
            break;
    }
    extraRoom = tempCur
    displayExtraRoom()
}

//TODO: kiszervezni helpers-be?
//min and max are inclusive
function randomNum(min, max){
    return Math.floor( Math.random() * (max + 1 - min) + min )
}