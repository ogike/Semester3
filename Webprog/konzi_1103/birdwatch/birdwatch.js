const placesInput = document.querySelector('#places')
const speciesInput = document.querySelector('#species')
const button = document.querySelector('#btn-generate')
const tableContainer = document.querySelector('#table-container')
const task1 = document.querySelector('#task-1')
const task2 = document.querySelector('#task-2')
const task3 = document.querySelector('#task-3')
const task4 = document.querySelector('#task-4')
const task5 = document.querySelector('#task-5')

function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if (esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }
    szulo.addEventListener(mikor, esemenyKezelo);
}

function generateMatrix(n, m){
    const matrix = []
    for(let i = 0; i < n; i++){
        const row = []
        for (let j = 0; j < m; j++){
            row.push(0)
        }
        matrix.push(row)
    }
    return matrix
}

const tablazat = document.createElement('table');

let matrix = []

button.addEventListener('click', onGenerate)
function onGenerate(e){
    const n = placesInput.valueAsNumber
    const m = speciesInput.valueAsNumber

    matrix = generateMatrix(n, m)
    console.log(matrix);

    //b feladat
    let sorszam = 0
    for(const row of matrix){
        let ujsor = document.createElement("tr")
        let oszlopszam = 0;
        for(const col of row){
            let ujcella = document.createElement('td')
            ujsor.innerHTML = col
            ujsor.dataset.sor = sorszam
            ujsor.dataset.oszlop = oszlopszam
            oszlopszam++
        }
        tablazat.appendChild(ujsor)
        sorszam++
    }
    tableContainer.appendChild(tablazat)

    //d feladat
    delegal(tablazat, 'td', 'click', selectCell)

}

function selectCell(event, closest){
    //c feladat
    let i = closest.dataset.sor, j = closest.dataset.oszlop
    closest.innerText = closest.innerText += 1
    matrix[i, j]++

    console.log(i, j)

    ellenoriz()
}

function ellenoriz(){
    
}
