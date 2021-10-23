let animals = [
    {
        nev: 'Vilmos',
        faj: 'medve',
        latogatok: 5
    },
    {
        nev: 'Gergő',
        faj: 'mókus',
        latogatok: 15
    },
    {
        nev: 'Timi',
        faj: 'hörcsög',
        latogatok: 1
    }
]

let main = document.createElement('div')

for(const animal of animals){
    let p = document.createElement('p')
    p.innerHTML += animal.nev
    p.innerHTML += " " //tagoló szóköz
    p.innerHTML += animal.faj
    p.innerHTML += " "
    
    let span = document.createElement('span')
    span.dataset.animal = animal.nev
    span.innerText = animal.latogatok

    let button = document.createElement('button')
    button.innerText = '+'

    button.addEventListener('click', (event) => {
        //span.innerText = parseInt(span.innerText) + 1  //ez nem updateli a span-t
                                                         //mivel amikor meghívódik már scope-on kívül lesz
        let queriedSpan = document.querySelector( `[data-animal="${animal.nev}"]` )
        queriedSpan.innerText = parseInt(queriedSpan.innerText) + 1
        // document.querySelector( `[data-animal="${animal.nev}"]` ).innerText = 
        //                 parseInt( document.querySelector(`[data-animal="${animal.nev}"]`).innerText ) + 1

    }) //új anyag

    p.appendChild(span)
    p.innerHTML += ' ' //?? nekem nélküle is működik
    p.appendChild(button)
    main.appendChild(p)

}

document.body.appendChild(main)

