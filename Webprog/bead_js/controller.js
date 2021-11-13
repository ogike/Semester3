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

function arrowPressed(event){
    let btn = event.target
    //TODO: this is very bad.
    if(!btn.matches('button')){
        btn = btn.parentElement
    }

    console.log(event)

    //view: SelectArrow, deselectArrow
    if(btn.dataset.hasTile == 'false'){
        if(lastSelectedArrow){
            btn.dataset.hasTile = false
            redrawArrow(lastSelectedArrow)
        }
        btn.dataset.hasTile = true
        lastSelectedArrow = btn
        drawTileOnArrow(btn)
    } else{
        if(event.button == 0){//left click on existing tile
            btn.dataset.hasTile = false
            lastSelectedArrow = null
            redrawArrow(btn)
            displayExtraRoom()
        } else if (event.button == 2){ //right click
            event.preventDefault() //prevent context menu pop-up
            rotateExtraRoom()
            drawTileOnArrow(btn)
        }
    }

    //model:
    
}