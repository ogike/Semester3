let places = [
    'Etyek',
    'Érd',
    'III. Kerület',
    'Margit-sziget',
    'Normafa',
    'Pusztafalu',
    'XI. Kerület'
]

//🍝🍝
    //szulo: fő kezelő
    //gyerek: amire kattintunk/delegálunk (pl.: 'li'/css selector)
    //mikor: esemény amire reagálunk (pl.: 'click)
    //mit: fgv amit hívunk
function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this; //tudja honnan hívodott meg a fgv

        //closest: elkezd fellfelé keresni, ameddig talál egy paraméternek megfelelő elemet
            //(ha egyből maga megfelel ennek, akkor magát adja vissza)
            //azért kell, ha a kattintott gyerek-elemünk benne lenne pl egy <b></b>-ben
            //akkor felfelé a jó elemre hasson
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        //making sure that .closest() didnt give us sth outside oóthe parent
        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }
    szulo.addEventListener(mikor, esemenyKezelo);
}


let list = document.querySelector('#list')

places.forEach(elem => {
    let li = document.createElement('li')
    li.innerHTML = elem
    li.dataset.og = elem //resethez
    list.appendChild(li)
})

function select(event){
    event.target.classList.toggle('selected') //'selected' stílusosztályt ki-be kapcsolja
}

//fancy shit
delegal(list, 'li', 'click', select)

document.querySelector('#rename').addEventListener('click', (event) => {
    let txt = document.querySelector('#newname').value
    document.querySelectorAll('.selected').forEach(elem =>elem.innerHTML = txt)
})

document.querySelector('#reset').addEventListener('click', (event)=>{
    document.querySelectorAll('.selected').forEach(elem => {
        elem.innerHTML = elem.dataset.og
        elem.style.color = 'black'
    })
})

document.querySelector('#recolor').addEventListener('click', (event) => {
    let color = document.querySelector('#newcolor').value
    document.querySelectorAll('.selected').forEach(elem => {
        switch (color){
            case 'piros':
                elem.style.color = 'red'
                break;
            case 'kék':
                elem.style.color = 'blue'
                break;
            case 'zöld':
                elem.style.color = 'green'
                break;
        }
    })
})