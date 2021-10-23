let csapatok = [
    {
        nev: 'Lilabären',
        meccsek: [3,3,1,3,1,3],
        orszag: 'Németország'
    },
    {
        nev: 'Ileösk FC',
        meccsek: [1,3,0,3,1,1],
        orszag: 'Svédország'
    },
    {
        nev: 'Etech City',
        meccsek: [0,0,0,0,0,0],
        orszag: 'Anglia'
    },
    {
        nev: 'Hoske Nord',
        meccsek: [1,1,3,1,0,3],
        orszag: 'Svédország'
    },
    {
        nev: 'Albertfalva TC',
        meccsek: [3,1,0,3,0,1],
        orszag: 'Magyarország'
    },
    {
        nev: 'Tschiki Ereich',
        meccsek: [1,1,0,1,3,3],
        orszag: 'Németország'
    },
    {
        nev: 'Josécatalan FC',
        meccsek: [3,1,1,3,3,0],
        orszag: 'Spanyolorzság'
    },
    {
        nev: 'Boo SCI',
        meccsek: [3,1,1,1,1,1],
        orszag: 'Anglia'
    },
    {
        nev: 'Victoria United',
        meccsek: [3,0,0,1,1,3],
        orszag: 'Anglia'
    },
    {
        nev: 'Widech',
        meccsek: [3,3,3,1,1,3],
        orszag: 'Németország'
    }
]

let tablazat = document.querySelector('#table')

csapatok.forEach(csapat => {
    let ujsor = document.createElement('tr')
    ujsor.innerHTML += `<td>${csapat.nev}</td>`
    csapat.meccsek.forEach(meccs => {
        ujsor.innerHTML += `<td>${meccs}</td>`
    })
    ujsor.innerHTML += `<td>${csapat.orszag}</td>`
    tablazat.appendChild(ujsor)
})

document.body.appendChild(tablazat)