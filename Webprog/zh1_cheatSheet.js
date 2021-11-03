/* Készítette: Tasi Zoltán (ogike)
 * Üres html-be beleillseztve is működnek a példák
 * Felelősséget nem vállalok
 */


//##################################################################
//ELSŐ GYAKORLAT (JS SYNTAX)
{

//változó
let a = 5

//string, nem karaketr tömb!

//konstans változó
const b = 'almafa'

console.log(b)

//Tömb, bármi típus lehet benne
    //De ajánlott homogén tömbökkel dolgozni
let tomb = ['barackfa', 12, true] 
                                
//tömb indexelése
tomb[1] //12

//tömb hossza
tomb.length //3

//objektumok: kulcs-érték párokat tartalmaznak
let obj = {
    key: 12, 
    nev: 'Ferike',
    kor: 18,
    nem: 'n/a'
}

//objektum mezőinek elérése
obj.nev //'Ferike'
obj['nev'] //'Ferike'

//backtickek mint c string helyettesítés $-el
console.log(`Ferike életkora ${obj.kor}`)

//tömbben objektumok
let filmek = [
    {
        cim: 'Tenet',
        megjelent: 2020
    },
    {
        cim: 'Öngyilkos osztag',
        megjelent: 2021
    },
    {
        cim: "Szürke ötven árnyalata",
        megjelent: 2012
    },
    {
        cim: 'Aranyhaj',
        megjelent: 1800
    }
]

//objektum vs tömb: nagyon hasonló
for(let objektum of filmek){ //iterálás a tömb objektumain
    for(let mezo in objektum){ //iterálás az objektum mezőin
        console.log(mezo + ": " + objektum[mezo])
                  //mező neve      mező értéke
    }
}

//function
function nevelo(){
    return 'A(z)'
}

//🥵🥵🥵🥵
filmek.filter( element => element.megjelent > 2000)
      .forEach( elem2  => console.log(`${elem2.cim}`));

//Több tömbfüggvény
// .map((elem) => valami): minden elemmel csináljunk valamit
// .filter(feltétel):      csak a feltétellel megegyezőket ad vissza
// .find(feltétel):        add vissza ez első elemt, amire igaz
// .findIndexOf(elem):     add vissza az elem sorszámát a tömbben
// .fill(mettől, mire):    lecserél minden elmet 'mettől' indextől 'mire'-re
// .some(predikátum):      van-e elem amire teljesül?
// .every(predikátum):     minden elemre teljesül?
// .reduce(összegző):      összegzi az elemeket a megadott fgv alapján
//                             összegző: (eddigi, köviElem) => összesített
//                             lehet kezdőértéket is adni neki 2. param-ként
//                             mint a foldl

}

//##################################################################
//MÁSODIK GYAKORLAT
{

//HTML GENERÁLÁS ############################################
{
//HTML table:
    /*
    <table>
        <tr>
            <td>Név</td>
            <td>Nem</td>
            <td>Település</td>
        </tr>
        <tr>
            <td>Kis Dalma</td>
            <td>lány</td>
            <td>Fehérvár</td>
        </tr>
    </table> */

//crate HTML DOM element
let tablazat = document.createElement('table')
    //Note: ezt még hozzá kell append-elni a dokumentum.body-hoz!!!

const headerNames = ['Cegnev', 'Adoszam', 'Ipar']

//sor készítése, feltöltése, beszúrása
let headerSor = document.createElement('tr')
headerNames.forEach(element => {
                     //nem headernél ez 'td'
    let oszlop = document.createElement('th')

    //set HTML text
    oszlop.innerHTML = element

    //szülő (headerSor) gyerekeihez utolsóként hozzáadja az új elemet
    headerSor.appendChild(oszlop)
})
tablazat.appendChild(headerSor)

const cegek = [
    {Cegnev: 'HZ Kft',
     Adoszam: '111111',
     Ipar: 'IT'}, 
    {Cegnev: 'Deak és Társai Zrt',
     Adoszam: '666666',
     Ipar: 'Fashion'},
    {Cegnev: 'ELTE IK',
     Adoszam: '000000',
     Ipar: 'IT'}
]

//"cegek" tömb alapján táblázat feltöltés
cegek.forEach(element => {
    let ujsor = document.createElement('tr')
    ujsor.innerHTML = `<td>${element.Cegnev}</td>
                        <td>${element.Adoszam}</td>
                        <td>${element.Ipar}</td>`
    tablazat.appendChild(ujsor)
}) 

//oldalra ezzel tesszük be az új elemet
document.body.appendChild(tablazat)

//referencia elé beszúrja az új elemet
//parent.insertBefore(newChild, refChild)

}


//STYLING ###################################################
{
let bekezdes = document.createElement('p')

//css stílus attribútumok elérése
bekezdes.style.fontSize = `12px`
bekezdes.style.color = `#FF88FF`

//stílusosztályok hozzáadása, törlése, toggle
bekezdes.classList.add("myClass")
bekezdes.classList.remove("redClass")
bekezdes.classList.toggle("redClass")
bekezdes.classList.toggle("redClass", bekezdes.style.fontSize > 10) //feltételes toggle

}

//SELECTING DOM ELEMENTS ####################################
{
let myDiv = document.createElement('div')
let myP   = document.createElement('p')
myDiv.appendChild(myP)
document.body.appendChild(myDiv)

//selecting the first result in the document
let div = document.querySelector('div')

//selecting all possible results
    //note: ez Nodelist, nem tömb, de 'Array.from(ps)'-el tömb lesz
let lis = document.querySelectorAll('li')
    //Nodelist-en ("Array-like object") iterálás (vagy .foreach())
    for (const li of lis) { /*  */ }

//selecting something inside *another element*
    //itt: div-en belül keres
let p = div.querySelector('p')

//p = <p>This is a <span>text</span></p>
//HTMLbe írás
p.innerHTML; //This is a <span>text</span>
p.innerText; //This is a text

//##CSS SELECTORS#################################
//##  névvel:            #   'button'           ##
//##  id-vel:            #   '#navbar'          ##
//##  stílusosztállyal:  #   '.important'       ##
//##  attribútummal:     #   '[name=password]'  ##
//##  univerzális:       #   '*'                ##
//##  közvetlen gyermek: #   'form > input'     ##
//##  leszármazott:      #   '#wrapper div'     ##
//################################################

}


//ATTRIBÚTUM PROGRAMOZÁS ####################################
{

//DOM-ban lévő elemekben adatok tárolása

/*HTML:
<div 
    data-id="10"
    data-some-text="foo"
></div> */

//Javascript: (camelCase átírás)
const div = document.querySelector('div')
// reading
div.dataset.id        // "10"
div.dataset.someText  // "foo"
// writing
div.dataset.someText = "bar"
div.dataset.dateOfBirth = "2000-12-12"  
    // HTML-ben hozzáadódik: data-date-of-birth="2000-12-12"

}


//ESEMÉNYKEZELÉS ############################################
{
//példához változók
    let myTextField  = document.createElement('input')
    myTextField.type = 'text'
    let myCheckBox   = document.createElement('input')
    myCheckBox.type  = 'checkBox'
    document.body.appendChild(myTextField)
    document.body.appendChild(myCheckBox)
    const button = document.createElement('button')
    button.innerText = 'test button'

//'input' nevű text mező kiolvasása
let bekertNev = myTextField.value

//bármilyen attribútumot olvashatunk/írhatunk gyakorlatilag
let isChecked = myCheckBox.checked

//CLICK EVENT PÉLDA
//button: eseményt kiváltó elem
                      //'click': esemény típusa, rengeteg fajta van
button.addEventListener('click', onClick)
                                 //onClick: eseményt kezeLő függvényem
                                 //zárójel nélkül kell átadni!

               //event: esemény objektum, benne van pl a kiváltó elem (elhagyható)
function onClick(event) {
    event.target.innerText += ' x' //event.target: amire rákattintottunk
    let newP = document.createElement('p')
    let queriedInputField = document.querySelector('input[type=text]')
    let queriedCheckbox   = document.querySelector('input[type=checkbox]')
    
    newP.innerText += queriedInputField.value
    newP.innerText += (queriedCheckbox.checked) ? ', pipa' : ', üres'
    document.body.appendChild(newP)
}

document.body.appendChild(button)

//removing event listener:
    //button.removeEventListener('click', onClick)

//események rövid listája:
    //click, mousemove, mousedown, mouseup, scroll
    //keydown, keyup, keypress
    //input: input mező értékének megváltoztatása
    //submit: űrlap elküldése

//alapértelmezett művelet megakadályozása:
    //eseménykezelő függvényen belül: event.preventDefault()
    //ezzel pl megakadályozható hogy egy link megnyíljon, stb

}

//KEYBOARD INPUT PÉLDA ######################################
{
let keyPressed = document.createElement('div')
keyPressed.innerText = "Waiting for numbers..."
document.body.appendChild(keyPressed)

let keyInput = document.createElement('input')
keyInput.type = 'text'
document.body.appendChild(keyInput)

keyInput.addEventListener('keydown', (event)=>{
    let betu = event.key.toLowerCase() //event.key: lenyomott billenytű
    keyPressed.innerText = `Key pressed: ` + betu

    if(isNaN(parseInt(betu)) && betu != "backspace"){ //ha amit lenyomtunk nem szám/backspace
        console.log((betu))
        event.preventDefault()
        //itt alap viselkedés amit megakadályozunk = key beírása a mezőbe
    }

    //note: 
        //key = input amit kapunk
        //code = ahol lenne fizikailag a billenytű (pl z helyett y)
})

}

}

//##################################################################
//NEGYEDIK GYAKORLAT
//DELEGAL FÜGGVÉNY
{

//🍝🍝
    //szulo: fő kezelő
    //gyerek: amire kattintunk/delegálunk (pl.: 'li'/css selector)
    //mikor: esemény amire reagálunk (pl.: 'click', és még sok más)
    //mit(event, mireKattintottunk): fgv amit hívunk
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

//Delegál használatára példa: táblázat sorainak kijelölése
function selectRow(event, closest){ //closest: amire kattintunk?
    if(!event.target.matches('th')){ //ha nem a headerre kattintottunk
        closest.classList.toggle('selected')

        //ezt alapból elég lenne megadni html/css filban, class tulajdonságaként
        if(closest.classList.contains('selected')){
            closest.style.backgroundColor = 'green';
        }
        else{
            closest.style.backgroundColor = 'white';
        }

    }
}

//ez lesz a szülő objektum, ami figyeli a gyerekeiben az eseményt
let tablazat = document.querySelector('table')

                //'tr': ha egy tableRow-ra kattintunk, akkor váltódjon ki
                      //'click': ha egérkattintással rányomunk, akkor jelezzen
                               //selectRow: függvényt, amit meghívunk
delegal(tablazat, 'tr', 'click', selectRow)


//ÖTÖDIK GYAKORLAT: csoportZH
}

//##################################################################
//ÖTÖDIK ELŐADÁS


//##################################################################
//HATODIK ELŐADÁS
{

//CANVAS API ################################################

//HTML elem: <canvas width="600" height="400"></canvas>

//ezek mindig kellenek nekünk!
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

//NOTE: canvas koordinátarendszere bal felül kezdődik (0,0)

//következő rajzolás stílusának beállítása:
ctx.fillStyle = 'blue'

//Rajzolás alakzatokkal:
ctx.fillText('bottom text', 5, 395)

//Szöveg:

}