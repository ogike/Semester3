//player class basically
let player = {
    posX: 0,
    posY: 0,
    id: 0,
    source: "player.png",
    color: "green"
}

const playerImgSources = [
    "player_green.png", 
    "player_red.png"
]


// basic room types ###############################################
let room_t = {
    type: "t-section", 
    source: "room_t.png",
    doors: [true,   //top
            true,   //right
            true,   //bottom
            false], //left
    rotation: 0
}

let room_corner = {
    type: "corner", 
    source: "room_corner.png",
    doors: [false,  //top
            false,  //right
            true,   //bottom
            true],  //left
    rotation: 0
}

let room_straight = {
    type: "straight", 
    source: "room_straight.png",
    doors: [false,  //top
            true,   //right
            false,  //bottom
            true],  //left
    rotation: 0
}

// Default mao ####################################################
const defaultRoomLayout = [
    [                                           //first row
        rotateRoom(room_corner, 3),
        null,
        rotateRoom(room_t, 1),
        null,
        rotateRoom(room_t, 1),
        null,
        rotateRoom(room_corner, 0)
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
        rotateRoom(room_corner, 2),
        null,
        rotateRoom(room_t, 3),
        null,
        rotateRoom(room_t, 3),
        null,
        rotateRoom(room_corner, 1)
    ]
]