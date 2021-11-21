//TEMP automatically gen on refresh
//requestAnimationFrame(newGame)


// STARTING SCREEN ############################################################

let playersSelect = document.querySelector('#numOfPlayersSelect')
let treasuresSelect = document.querySelector('#numOfTreasureSelect')

//newGame will call displayBoard in the view too
document.querySelector('#startBtn').addEventListener('click', () => {
    numOfPlayers = parseInt( playersSelect.value )
    numOfTreasures = parseInt( treasuresSelect.value )

    if(numOfTreasures > 24/numOfPlayers)
        numOfTreasures = 24/numOfPlayers

    newGame()
})

playersSelect.addEventListener('input', () => {
    let playersValue = parseInt(playersSelect.value)
    let treasuresValue = parseInt(treasuresSelect.value)
    let maxNumOfTreasures = 24/playersValue

    let selects = treasuresSelect.children
    
    for(let i = 0; i < 24; i++){
        if(i < maxNumOfTreasures){
            selects[i].disabled = false
        } else{
            selects[i].disabled = true
        }
    }
})

document.querySelector('#descBtn').addEventListener('click', showDescription)


// INGAME EVENTS ##############################################################

document.querySelector('#endTurnBtn').addEventListener('click', (event) => {
    if(hasGameFinished) return
    if(canPushTile)     return //muszáj csúsztatni szobát a körödben
    endTurn();
})

function roomClicked(event){
    if(hasGameFinished) return
    
    let roomCoords = getXyCoords(event.target.parentElement)
    moveCurPlayerToXy(roomCoords.x, roomCoords.y)
}

//delegating when clicking on treasure/player-icons
function playerIconClicked(event){
    let id = parseInt(event.target.dataset.id)
    moveCurPlayerToXy(players[id].posX, players[id].posY)
}

function treasureIconClicked(event){
    let id = parseInt(event.target.dataset.id)
    moveCurPlayerToXy(treasures[id][0].curPosX, treasures[id][0].curPosY)
}


// ARROW EVENTS ###############################################################

function arrowPressedLeftClick(event){
    if(hasGameFinished) return
    
    let btn = event.target
    //TODO: this is very bad.
    if(!btn.matches('button')){
        btn = btn.parentElement
    }

    if(btn.dataset.hasTile == 'true'){
        let dir = parseInt(btn.dataset.dir)
        let pos = parseInt(btn.dataset.pos)
        pushRoomIntoTable(pos, dir)

        btn.dataset.hasTile = false
        lastSelectedArrow = null
        redrawArrow(btn)
    }
}

function arrowHoverEnter(event){
    if(hasGameFinished) return
    
    let btn = event.target
    //TODO: this is very bad.
    if(!btn.matches('button')){
        btn = btn.parentElement
    }

    if(!canPushTile) //if the player is out of moves
        return

    if(btn.dataset.hasTile == 'false'){
        if(lastSelectedArrow){
            lastSelectedArrow.dataset.hasTile = false
            redrawArrow(lastSelectedArrow)
        }
        btn.dataset.hasTile = true
        lastSelectedArrow = btn
        drawTileOnArrow(btn)
    }
}

function arrowHoverLeave(event){
    if(hasGameFinished) return
    
    let btn = event.target
    //TODO: this is very bad.
    if(!btn.matches('button')){
        btn = btn.parentElement
    }

    if(btn.dataset.hasTile == 'true'){
        btn.dataset.hasTile = false
        lastSelectedArrow = null
        redrawArrow(btn)
        // displayExtraRoom()
    }
}

function arrowPressedRightClick(event){
    if(hasGameFinished) return
    
    let btn = event.target
    //TODO: this is very bad. But now twice.
    if(!btn.matches('button')){
        btn = btn.parentElement
    }

    if(btn.dataset.hasTile == 'true'){
        event.preventDefault() //prevent context menu pop-up
        rotateExtraRoom()
        drawTileOnArrow(btn)
        displayExtraRoom()
    }
}


// WIN SCREEN EVENTS ##########################################################
document.querySelector('#restartBtn').addEventListener('click', () => {
    document.querySelector('#gameboard_div').classList.add('hidden')
    document.querySelector('#startScreen').classList.remove('hidden')
})