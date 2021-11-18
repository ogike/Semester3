let boardSize = 7
let rooms = [] //room matrix
let extraRoom //the room that we can slide in
let numOfPlayers = 2 //TODO: remove hardcode
let numOfTreasures= 2 //per player
let players = []
let treasures = [/*per player*/[/*(x, y)*/]] //TODO ugly
let curPlayerI  //current player index, from 0
let canPushTile //ebben a körben lehet még tologatni?

//GENERATING THE GAME ######################################################
function newGame(){
    rooms = getDeepCopy(defaultRoomLayout)

    //generating random rooms
    let randomRooms = []
    for(let i = 0; i < 13; i++){ //13 straight rooms
        randomRooms.push( rotateRoom(getDeepCopy(room_straight), randomNum(0, 3)) )
    }
    for(let i = 0; i < 15; i++){ //15 corner rooms
        randomRooms.push( rotateRoom(getDeepCopy(room_corner), randomNum(0, 3)) )
    }
    for(let i = 0; i < 6; i++){ //6 t-section rooms
        randomRooms.push( rotateRoom(getDeepCopy(room_t), randomNum(0, 3)) )
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

    //setting the treasures
    for (let playerI = 0; playerI < numOfPlayers; playerI++) {
        let playerITreasures = []
        for (let treasureI = 0; treasureI < numOfTreasures; treasureI++) {
            let hasPlaced = false
            let curTries = 0

            while(!hasPlaced && curTries < 50){
                let ranX = randomNum(0, boardSize-1)
                let ranY = randomNum(0, boardSize-1)

                //TODO: bug: might neew to switch indexed up
                if(rooms[ranX][ranY].hasTreasure == -1){
                    playerITreasures.push((ranX, ranY))
                    hasPlaced = true
                }
                curTries++;
            }
            if(curTries >= 50)
                console.error("Infinite loop during treasure placing!")
        }
        treasures.push(playerITreasures)
    }

    //setting the board
    generateBoardGUI()
    displayExtraRoom()

    //setting the players
    for (let i = 0; i < numOfPlayers; i++) {
        newPlayer = getDeepCopy(player);
        newPlayer.id = i;
        //colors??
        switch (i) {
            case 0:
                newPlayer.posX = 0
                newPlayer.posY = 0
                break;
            case 1:
                newPlayer.posX = boardSize-1
                newPlayer.posY = boardSize-1
                break;
            case 2:
                newPlayer.posX = boardSize-1
                newPlayer.posY = 0
                break;
            case 3:
                newPlayer.posX = 0
                newPlayer.posY = boardSize-1
                break;
            default:
                console.error("Too many players!");
        }
        players.push(newPlayer)

        
    }

    curPlayerI = 0
    canPushTile = true
    generatePlayerIcons()
    displayNextPlayer();
}

//PLAYERS ############################################################

function moveCurPlayerToXy(x, y){
    let curPlayer = players[curPlayerI]

    if(isOpenToEachOther(curPlayer.posX, curPlayer.posY, x, y)){
        curPlayer.posX = x
        curPlayer.posY = y
        drawPlayerOnPos(curPlayer)
    }
}

function endTurn(){
    curPlayerI++
    curPlayerI %= numOfPlayers
    displayNextPlayer()
    canPushTile = true
    displayExtraRoom(true)
}


//ROOMS ###########################################################

/**
 * Returns wheter 2 rooms are connected
 * TEMP: only if they are direct neighbours
 */
function isOpenToEachOther(x1, y1, x2, y2){
    // console.log(x1 + ", " + y1 + ", " + x2  + ", " + y2)

    //checking for out of bounds
    if(x1 < 0 || y1 < 0 || x2 < 0 || y2 < 0
        || x1 >= boardSize || y1 >= boardSize
        || x2 >= boardSize || x2 >= boardSize )
        return false

    let room1 = rooms[y1][x1]
    let room2 = rooms[y2][x2]

    //calculate the direction to each other??
    if(x1 + 1 == x2 && y1 == y2) //to the right
        return (room1.doors[1] && room2.doors[3]) ? true : false
    if(x1 - 1 == x2 && y1 == y2) //to the left
        return (room1.doors[3] && room2.doors[1]) ? true : false 
    if(x1 == x2 && y1 - 1 == y2) //to the top
        return (room1.doors[0] && room2.doors[2]) ? true : false 
    if(x1 == x2 && y1 + 1 == y2) //to the bottom
        return (room1.doors[2] && room2.doors[0]) ? true : false 
    
    return false //not a direct neighbor
    
}

//takes in a room, and rotates it clock-wise 'times' times
function rotateRoom(room, times){
    //might not be the most optimized thing to create one every time
    let newRoom = getDeepCopy(room) //deep copy the object

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

    if(!canPushTile)
        return

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
    canPushTile = false
    displayExtraRoom(false)
}

//UTILITY #########################################################################

//TODO: kiszervezni helpers-be?
/**
 * @param {*} min inclusive
 * @param {*} max inclusive
 */
function randomNum(min, max){
    return Math.floor( Math.random() * (max + 1 - min) + min )
}

function getDeepCopy(obj){
    return JSON.parse(JSON.stringify(obj))
}