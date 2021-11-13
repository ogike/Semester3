
//newGame will call displayBoard in the view too
document.querySelector('#startBtn').addEventListener('click', newGame)

//TEMP automatically gen on refresh
requestAnimationFrame(newGame)

document.querySelector('#descBtn').addEventListener('click', showDescription)
