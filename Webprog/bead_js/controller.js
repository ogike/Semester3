/**
 * @param {*} szulo: fő kezelő
 * @param {*} gyerek amire kattintunk/delegálunk (css selector, pl.: 'li')
 * @param {*} mikor esemény amire reagálunk (pl.: 'click', és még sok más) 
 * @param {*} mit (event, mireKattintottunk): fgv amit hívunk
 */
function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this; //szulo
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }
    szulo.addEventListener(mikor, esemenyKezelo);
}


//newGame will call displayBoard in the view too
document.querySelector('#startBtn').addEventListener('click', newGame)

//TEMP automatically gen on refresh
requestAnimationFrame(newGame)

document.querySelector('#descBtn').addEventListener('click', showDescription)

document.querySelector('#endTurnBtn').addEventListener('click', (event) => {
    if(hasGameFinished) return
    endTurn();
})

function roomClicked(event){
    if(hasGameFinished) return
    
    let roomCoords = getXyCoords(event.target.parentElement)
    moveCurPlayerToXy(roomCoords.x, roomCoords.y)
}

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