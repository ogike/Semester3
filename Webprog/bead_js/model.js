let boardSize = 7
let rooms = []
let extraRoom

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

    //setting the view
    generateBoardGUI()
    displayExtraRoom()
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
    rotateRoom(extraRoom, 1)
}

//TODO: kiszervezni helpers-be?
//min and max are inclusive
function randomNum(min, max){
    return Math.floor( Math.random() * (max + 1 - min) + min )
}