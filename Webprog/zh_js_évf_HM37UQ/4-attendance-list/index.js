const table = document.querySelector('table');

function xyCoord(td) {
  return {
    x: td.cellIndex,
    y: td.parentNode.sectionRowIndex,
  }
}

// function delegate(parent, type, selector, handler) {
//   parent.addEventListener(type, function (event) {
//     const targetElement = event.target.closest(selector);

//     if (this.contains(targetElement)) {
//       handler.call(targetElement, event);
//     }
//   });
// }

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

//a feladat
function recolorTable(){
  for(const curTd of document.querySelectorAll('td')){
    let checkbox = curTd.querySelector('input')
    if(checkbox){
      if(checkbox.checked){
        curTd.classList.add('present')
      } else {
        curTd.classList.remove('present')
      }
    }
  }
}
recolorTable()

function clickOnCell(event, closest){
  let checkbox = closest.querySelector('input')
  if(checkbox){ //ha jelöló cellára kattintunk
    //b feladat
    checkbox.focus()

    //c feladat
    if(!event.target.matches('input')){ //csak akkor váltsunk ha automatikusan nem vált
      checkbox.checked = !checkbox.checked
    }
    recolorTable()
  }
}

delegal(table, 'td', 'click', clickOnCell)


document.addEventListener('keydown', (event) => {
  let key = event.key.toLowerCase()
  if(key.startsWith('arrow')){
    let focused = document.activeElement
    if(focused && focused.matches('input')){
      let cell = focused.parentElement
      let coords = xyCoord(cell)

      //d feladat
      console.log(coords)

      coords.y += 1

      //e feladat
      switch (key) {
        case 'arrowleft':
          addFocus(coords.x - 1, coords.y)
          break;
        case 'arrowright':
          addFocus(coords.x + 1, coords.y)
          break;
        case 'arrowup':
          addFocus(coords.x, coords.y - 1)
          break;
        case 'arrowdown':
          addFocus(coords.x, coords.y + 1)
          break;
      
        default:
          break;
      }
    }
    
  }
})

function addFocus(x, y){
  //f feladat
  if(x < 1)
    x = 7
  if(x > 7)
    x = 1
  if(y < 1)
    y = 3
  if(y > 3)
    y = 1

  table.rows[y].cells[x].querySelector('input').focus()
}