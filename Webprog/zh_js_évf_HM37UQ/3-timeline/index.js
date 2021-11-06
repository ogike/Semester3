const animButton = document.querySelector('#animation');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let pixelsPerYear = 5;
let origoYear = 1000;
let dt = 0.2;

const width = canvas.width   //600
const height = canvas.height //400

//styling
let apradStartY = 100
let plantStartY = 200
let kingHeight = 50


function getX(x){
    return (x - origoYear) * pixelsPerYear
}

function reRender(){
    ctx.clearRect(0, 0, width, height)

    //a feladat: függőleges vörös vonalak
    ctx.strokeStyle = 'red'
    ctx.fillStyle   = 'black'  

    for (let curYear = 1000; curYear <= 1500; curYear += 50) {
        ctx.beginPath()
        ctx.moveTo(getX(curYear), 0)
        ctx.lineTo(getX(curYear), height)
        ctx.stroke()

        ctx.fillText(curYear, getX(curYear), 10)
    }

    //b, d feladat
    for(let king of arpads){
        ctx.fillStyle = 'lightgreen'
        ctx.strokeStyle = 'black'
        
        let startX = getX(king.from)

        //teli
        ctx.fillRect(startX, apradStartY, 
                    (king.to - king.from) * pixelsPerYear, kingHeight)

        //körvonal
        ctx.beginPath()
        ctx.rect(startX, apradStartY, 
                (king.to - king.from) * pixelsPerYear, kingHeight)
        ctx.stroke()

        //texts
        ctx.fillStyle = 'black'
        ctx.fillText(king.name, startX + 1, apradStartY + 10)
        ctx.fillText(`${king.from}-${king.to}`, startX + 1, apradStartY + 40)
    }

    //c feladat
    for(let king of plantanegets){
        ctx.fillStyle = 'red'
        ctx.strokeStyle = 'black'
        
        let startX = getX(king.from)

        //teli
        ctx.fillRect(startX, plantStartY, 
                    (king.to - king.from) * pixelsPerYear, kingHeight)

        //körvonal
        ctx.beginPath()
        ctx.rect(startX, plantStartY, 
                (king.to - king.from) * pixelsPerYear, kingHeight)
        ctx.stroke()

        //texts
        ctx.fillStyle = 'black'
        ctx.fillText(king.name, startX + 1, plantStartY + 10)
        ctx.fillText(`${king.from}-${king.to}`, startX + 1, plantStartY + 40)
    }

}
reRender()

//e feladat
leftButton.addEventListener('click', () => {
    origoYear -= 10
    reRender()
})

rightButton.addEventListener('click', () => {
    origoYear += 10
    reRender()
})
