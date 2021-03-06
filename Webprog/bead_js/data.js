//player class basically
let player = {
    id: 0,
    posX: 0, //row in model's room matrix
    posY: 0, //rroms inside the rows
    curScore : 0,
    startingX: 0,
    startingY: 0,
    source: "player.png",
    color: "green"
}

const playerImgSources = [
    "player_green.png", 
    "player_red.png",
    "player_blue.png",
    "player_yellow.png"
]

const treasureImgSources = [
    "gems_green.png",
    "gems_red.png",
    "gems_blue.png",
    "gems_yellow.png"
]


// basic room types ###############################################
let room_t = {
    type: "t-section", 
    source: "room_t.png",
    doors: [true,   //top
            true,   //right
            true,   //bottom
            false], //left
    rotation: 0,
    curPosX: 0,
    curPosY: 0,
    isAccessible: false,
    hasTreasure: -1 //indicates which players treasure is here
                     // -1 if none
                     // -2 if impossible (corrner pieces)
}

let room_corner = {
    type: "corner", 
    source: "room_corner.png",
    doors: [false,  //top
            false,  //right
            true,   //bottom
            true],  //left
    rotation: 0,
    curPosX: 0,
    curPosY: 0,
    isAccessible: false,
    hasTreasure: -1
}

let room_straight = {
    type: "straight", 
    source: "room_straight.png",
    doors: [false,  //top
            true,   //right
            false,  //bottom
            true],  //left
    rotation: 0,
    curPosX: 0,
    curPosY: 0,
    isAccessible: false,
    hasTreasure: -1
}

function disableTreasure(room){
    room.hasTreasure = -2
    return room
}

// Default map ####################################################
const defaultRoomLayout = [
    [                                           //first row
        disableTreasure(rotateRoom(room_corner, 3)),
        null,
        rotateRoom(room_t, 1),
        null,
        rotateRoom(room_t, 1),
        null,
        disableTreasure(rotateRoom(room_corner, 0))
    ],
    [null, null, null, null, null, null, null], //second row
    [                                           //third row
        rotateRoom(room_t, 0),
        null,
        rotateRoom(room_t, 0),
        null,
        rotateRoom(room_t, 1),
        null,
        rotateRoom(room_t, 2)
    ],
    [null, null, null, null, null, null, null], //fourth row
    [                                           //fifth row
        rotateRoom(room_t, 0),
        null,
        rotateRoom(room_t, 3),
        null,
        rotateRoom(room_t, 2),
        null,
        rotateRoom(room_t, 2)
    ],
    [null, null, null, null, null, null, null], //sixth row
    [                                           //seventh row
        disableTreasure(rotateRoom(room_corner, 2)),
        null,
        rotateRoom(room_t, 3),
        null,
        rotateRoom(room_t, 3),
        null,
        disableTreasure(rotateRoom(room_corner, 1))
    ]
]