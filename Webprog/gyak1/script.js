console.log('12')

let a = 5

//string, nem karaketr tömb!
let b = 'almafa'

console.log(b)

console.log(a)

let tomb = ['barackfa', 12, true]  //Tömb, bármi típus lehet benne
                                //De ajánlott homogén tömbökkel dolgozni


//objektumok: kulcs-érték párokat tartalmaznak
let obj = {
    key: 12, 
    nev: 'Ferike',
    kor: 18,
    nem: 'n/a'
}

console.log(obj['nev'])

let szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//iterálás tömbön
for(let elem of szamok){
    console.log(elem)
}

console.log(`Ferike életkora ${obj.kor}`) //backtickek mint c string helyettesítés $-el

//tömbben egy objektum
let filmek = [
    {cim: 'Tenet',
    megjelent: 2020},
    {cim: 'Öngyilkos osztag',
    megjelent: 2021},
    {cim: "Szürke ötven árnyalata",
    megjelent: 2012},
    {cim: 'Aranyhaj',
    megjelent: 1800}
]

//function
//csak kiírja hogy "A(z)"
function nevelo(){
    return 'A(z)'
}

// for(let elem of filmek){
//     console.log(`${nevelo()} ${elem['cim']} megjelent: ${elem['megjelent']}`)
// }

function nevelo2(cim){
    if(cim[0] == 'Ö'){
        return 'Az'
    }
    return 'A'
}

// for(let elem of filmek){
//     console.log(`${nevelo2(elem['cim'])} ${elem['cim']} megjelent: ${elem['megjelent']}`)
// }

let maganhangzok = ['A', 'E', 'I', 'O', 'Ö', 'Ü', 'U']

function nevelo3(cim){
    let van = false
    for(let i = 0; i < maganhangzok.length && !van; i++){
        if(maganhangzok[i] == cim[i]){
            van = true
        }
    }
    
    if(van){
        return 'Az'
    }

    if(van){
        return 'A'
    }
}

let maganhangzok2 = 'AEIOÖÜÜÚŰÁÉÍU'

//String.toUpperCase(): beépített js fgv
//Array.includes(elem): beépített js fgv 
function nevelo4(cim){
    if(maganhangzok2.includes(cim[0].toUpperCase())){
        return 'Az'
    }
    return 'A'
}

// for(let elem of filmek){
//     console.log(`${nevelo4(elem['cim'])} ${elem['cim']} megjelent: ${elem['megjelent']}`)
// }



function nevelo5(cim){
    return maganhangzok2.includes(cim[0].toUpperCase()) ? 'Az' : 'A'
}

// for(let elem of filmek){
//     console.log(`${nevelo5(elem['cim'])} ${elem['cim']} megjelent: ${elem['megjelent']}`)
// }

// tomb.push('extra')

// console.log(tomb)


//objektum vs tömb: nagyon hasonló

for(let elem of filmek){ //itt az elem: egy darab objektum
    for(let eleme in elem){ //itt az eleme: az objektumnak egy mezője
                            //de: objektum in-el iterálható
        console.log(eleme)
    }
}

function keres(objektum){
    return objektum.cim == cim
}

//kifilterezzük a 2000 előttieket, majd kiírjuk őket
filmek.filter( element => element.megjelent > 2000)
      .forEach( elem2  => console.log(`${elem2.cim}`));


let tomb2 = [5, 4, 6, 7, 8, 2, 6, 8, 2, 6, 7, 2]

let tomb3 = [
    {
        nev: 'Ferike',
        kor: 13
    },
    {
        nev: 'big g', 
        kor: 30
    },
]


//bit fucky wucky hogy milyen értékkel kezdődik és milyen típusú adatokat ad össze?
//                 foldl                        kezdőérték
console.log( tomb3.reduce( (a, b) => a + b.kor, 0 ) )


function add(a, b){
    return a+b.kor
}
console.log( tomb3.reduce(add, 0) )


function add2(){
    
}
