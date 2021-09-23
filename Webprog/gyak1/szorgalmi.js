let eltó = [
    {
        id: 1001,
        nev: 'Lanyesz',
        szuletett: 1997,
        kereset: 2000000
    },
    {
        id: 1002,
        nev: 'Laurka',
        szuletett: 1995,
        kereset: 223003
    },
    {
        id: 1212,
        nev: 'Suwu',
        szuletett: 2019,
        kereset: 0
    },
    {
        id: 69420,
        nev: 'Manyesz',
        szuletett: 2001,
        kereset: 43202
    },
    {
        id: 191114,
        nev: 'Thoca', 
        szuletett: 2069,
        kereset: 2300000
    },
    {
        id: 1111,
        nev: 'Mészi',
        szuletett: 1999,
        kereset: 65000
    },
]

//------------------------------------------------------------------
// A) FELADAT
let reszfelA = eltó.filter( person => person.szuletett < 2000 )

console.log( "2000 előtt születettek ID-ja:" + 
              reszfelA.map(person => " " + person.id) )


//------------------------------------------------------------------
// B) FELADAT
function maxKereset(prev, next) {
    if(prev.kereset > next.kereset){
        return prev
    }
    else {
        return next
    }
}

let reszfelB = eltó.reduce(maxKereset)

console.log( "Legnagyobb keresetű polgár: " + reszfelB.nev + 
             ", született: " + reszfelB.szuletett )


//------------------------------------------------------------------
// C) FELADAT
function minKereset(prev, next) {
    if(prev.kereset < next.kereset){
        return prev
    }
    else {
        return next
    }
}

let reszfelC = eltó.filter(person => person.szuletett > 2000)
                   .reduce(minKereset)

console.log( "Legkisebb keresetű 2000 után született polgár: " + reszfelC.nev +
             ", született: " + reszfelC.szuletett +
             ", ID: " + reszfelC.id )