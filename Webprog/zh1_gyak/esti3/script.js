const data = [
    {
        name: 'Slick',
        durability: 80,
        class: 6
    },
    {
        name: '6B2',
        durability: 80,
        class:2 
    },
    {
        name: '6B23-1',
        durability: 80,
        class:3
    },
    {
        name: '6B13',
        durability: 47,
        class:4
    },
    {
        name: 'Trooper TFO',
        durability: 85,
        class:4
    },
    {
        name: '5.11 Hexgrid',
        durability: 50,
        class:6
    }
]

let headerTexts = ['Név', 'Állapot', 'Szívósság']

let tablazat = document.querySelector('#table')


// A fejléc generálódik (1)
let headerRow = document.createElement('tr')
headerTexts.forEach(elem => {
    let oszlop = document.createElement('th')
    oszlop.innerText = elem
    headerRow.appendChild(oszlop)
})

tablazat.appendChild(headerRow)


//A tartalom generálódik (1)
data.forEach(curArmor => {
    let newRow = document.createElement('tr')

    let nameElem = document.createElement('td')
    nameElem.innerText = curArmor.name

    let durElem = document.createElement('td')
    durElem.innerText = curArmor.durability
    durElem.dataset.original = curArmor.durability
    durElem.dataset.class    = curArmor.class
    durElem.classList.add('targetable')

    let classElem = document.createElement('td')
    classElem.innerText = curArmor.class

    newRow.appendChild(nameElem)    
    newRow.appendChild(durElem)    
    newRow.appendChild(classElem)
    tablazat.appendChild(newRow)    
})


//kijelölés
function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }
    szulo.addEventListener(mikor, esemenyKezelo);
}

function selectRow(event, closest){
    if(!event.target.matches('th')){
        closest.classList.toggle('selected')
    }
}

delegal(tablazat, 'tr', 'click', selectRow)


//teszt gomb
let testBtn = document.querySelector('#pew')
testBtn.addEventListener('click', (event) => {
    document.querySelectorAll('.selected').forEach(curRow => {
        let curTarget = curRow.querySelector('.targetable')
        let curDur    = parseInt(curTarget.innerText)
        let curAp     = parseInt(document.querySelector('#ammo').value)
        let curClass  = parseInt(curTarget.dataset.class)
        let curDmg    = curAp - curClass

        if(curDmg > 0){
            curTarget.innerText = curDur - curDmg

            if(curTarget.innerText < 0){
                curTarget.innerText = 0
            }
        }
    })
})

//repair gomb
let repairBtn = document.querySelector('#repair')
repairBtn.addEventListener('click', () => {
    document.querySelectorAll('.selected').forEach(curRow => {
        let target = curRow.querySelector('.targetable')
        target.innerText = target.dataset.original
    })
})
