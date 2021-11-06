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

const todos = document.querySelector('#todos')

delegal(todos, 'ul li', 'click', clickOnStep)

function clickOnStep(event, closest){
    if(!closest.classList.contains('done')){
        //b feladat
        closest.classList.add('done')

        //c feladat: delegálással megoldva

        //d feladat
        let prev = closest.previousElementSibling
        while(prev){
            prev.classList.add('done')
            prev = prev.previousElementSibling
        }

        //f feladat
        let next = closest.nextElementSibling
        if(!next){
            closest.parentElement.parentElement.classList.add('done')
        }

    } else {
        //e feladat
        let next = closest.nextElementSibling
        let toRemove = true
        while(next){
            if(next.classList.contains('done')){
                toRemove = false
            }
            next = next.nextElementSibling
        }

        if(toRemove){
            closest.classList.remove('done')

            //g feladat
            let parent = closest.parentElement.parentElement
            if(parent.classList.contains('done')){
                parent.classList.remove('done')
            }
        }
    }   

}