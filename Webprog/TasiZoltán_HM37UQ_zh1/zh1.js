/*
Tasi Zoltán György
HM37UQ
Webprogramozás - JavaScript csoport ZH
Ezt a megoldást a fent írt hallgató küldte be és készítette 
a Webprogramozás kurzus JavaScript csoport ZH-jához.
Kijelentem, hogy ez a megoldás a saját munkám. Nem másoltam vagy 
használtam harmadik féltől származó megoldásokat. Nem továbbítottam 
megoldást hallgatótársaimnak, és nem is tettem közzé. Az Eötvös Loránd 
Tudományegyetem Hallgatói Követelményrendszere (ELTE szervezeti és 
működési szabályzata, II. Kötet, 74/C. §) kimondja, hogy mindaddig, 
amíg egy hallgató egy másik hallgató munkáját - vagy legalábbis annak 
jelentős részét - saját munkájaként mutatja be, az fegyelmi vétségnek számít. 
A fegyelmi vétség legsúlyosabb következménye a hallgató elbocsátása az egyetemről.
*/

let users = [
    {
        username: "Yumeko",
        dollars: 10000,
        euros: 4000
    },
    {
        username: "meemboi",
        dollars: 4000,
        euros: 2172
    },
    {
        username: "boionbike",
        dollars: 3401,
        euros: 1200
    },
    {
        username: "Zeusz77",
        dollars: 3456,
        euros: 2034
    },
    {
        username: "PotatoMaster",
        dollars: 0,
        euros: 0
    },
    {
        username: "Gremory",
        dollars: 500,
        euros: 467
    }
]

const headerNames = ['Name', 'Dollars', 'Euros']

let tablazat = document.querySelector('#tablazat')


//A TÁBLÁZATOT SORAIT JS GENERÁLJA (2,5)
let headerSor = document.createElement('tr')
headerNames.forEach(header => {
    let oszlop = document.createElement('th')
    oszlop.innerHTML = header
    headerSor.appendChild(oszlop)
})
tablazat.appendChild(headerSor)

users.forEach(user => {
    let ujsor = document.createElement('tr')
    ujsor.innerHTML = `<td data-field-type="name">${user.username}</td>
                        <td data-field-type="dollar">${user.dollars} $</td>
                        <td data-field-type="euro">${user.euros} €</td>`
    tablazat.appendChild(ujsor)
}) 


// A TÁBLÁZAT SORAI KIJELÖLHETŐEK (2,5) 
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


//AZ ÁTVÁLTÓ GOMBOK MŰKÖDNEK (5,5) 
let dteBtn = document.querySelector('#dte')
let etdBtn = document.querySelector('#etd')
let toTransferField = document.querySelector('#in')

dteBtn.addEventListener('click', dollarToEuro)
etdBtn.addEventListener('click', euroToDollar)

function dollarToEuro (event){
    document.querySelectorAll('.selected').forEach(row =>{
        let dollarField = row.querySelector('[data-field-type=dollar]')
        let euroField   = row.querySelector('[data-field-type=euro]')
        let nameField   = row.querySelector('[data-field-type=name]')
        let toTransfer = parseInt(toTransferField.value)

        let user = users.find( elem => { 
            return elem.username.valueOf() == nameField.innerText.valueOf()
        })
        
        if(user.dollars >= toTransfer){
            user.dollars -= toTransfer
            user.euros += (toTransfer * 0.86) * 0.95

            dollarField.innerText = `${user.dollars} $`
            euroField.innerText   = `${user.euros} €`
        }
    })
}

function euroToDollar (){
    document.querySelectorAll('.selected').forEach(row =>{
        let dollarField = row.querySelector('[data-field-type=dollar]')
        let euroField   = row.querySelector('[data-field-type=euro]')
        let nameField   = row.querySelector('[data-field-type=name]')
        let toTransfer = parseInt(toTransferField.value)

        let user = users.find( elem => { 
            return elem.username.valueOf() == nameField.innerText.valueOf()
        })
        
        if(user.euros >= toTransfer){
            user.euros -= toTransfer
            user.dollars += (toTransfer * 1.16) * 0.95

            dollarField.innerText = `${user.dollars} $`
            euroField.innerText   = `${user.euros} €`
        }
    })
}