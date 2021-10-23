const countries = [
    {
        orszag: 'Németország',
        varos: 'Berlin'
    },
    {
        orszag: 'Németország',
        varos: 'München'
    },
    {
        orszag: 'Németország',
        varos: 'Königsberg'
    },
    {
        orszag: 'Franciaország',
        varos: 'Párizs'
    },
    {
        orszag: 'Egyesült Királyság',
        varos: 'London'
    },
    {
        orszag: 'Egyesült Királyság',
        varos: 'Dublin'
    },
    {
        orszag: 'Egyesült Királyság',
        varos: 'Hong Kong'
    },
    {
        orszag: 'Egyesült Királyság',
        varos: 'Delhi'
    },
    {
        orszag: 'Ausztria',
        varos: 'Bécs'
    },
    {
        orszag: 'Ausztria',
        varos: 'Pozsony'
    },
    {
        orszag: 'Ausztria',
        varos: 'Budapest'
    },
    {
        orszag: 'Oroszország',
        varos: 'Moszkva'
    },
    {
        orszag: 'Oroszország',
        varos: 'Kijev'
    },
    {
        orszag: 'Oroszország',
        varos: 'Varsó'
    },
]

let button = document.querySelector('#button') //id alapján gomb kiválasztása

let ul = document.createElement('ul')

function searchCountry(event){
    let input = document.querySelector('#input')
    let listParent = document.querySelector('ul')
    listParent.innerHTML = '' //előző keresés lenullázása

    countries.filter(elem => elem.orszag == input.value)
             .forEach(element => {
                 let li = document.createElement('li')
                 li.innerHTML = element.varos
                 listParent.appendChild(li)
             })
    
    //így tudnánkb "deaktiválni" a gombot
    //document.querySelector('#button').removeEventListener('click', searchCountry)
}

button.addEventListener('click', searchCountry)

document.body.appendChild(ul)