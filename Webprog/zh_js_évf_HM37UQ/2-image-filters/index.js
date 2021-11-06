const filters = [
  { label: 'Blur', filter: 'blur(#px)', min: 0, max: 10, value: 3 },
  { label: 'Brightness', filter: 'brightness(#%)', min: 0, max: 500, value: 80},
  { label: 'Contrast', filter: 'contrast(#%)', min: 0, max: 500, value: 200 },
  { label: 'Grayscale', filter: 'grayscale(#%)', min: 0, max: 100, value: 50 },
  { label: 'Hue rotate', filter: 'hue-rotate(#deg)', min: 0, max: 360, value: 90 },
  { label: 'Invert', filter: 'invert(#%)', min: 0, max: 100, value: 80 },
  { label: 'Opacity', filter: 'opacity(#%)', min: 0, max: 100, value: 50 },
  { label: 'Saturate', filter: 'saturate(#%)', min: 0, max: 500, value: 200 },
  { label: 'Sepia', filter: 'sepia(#%)', min: 0, max: 100, value: 50 },
];

const theFiltersDiv = document.querySelector('#the-filters')
const theImage = document.querySelector('#the-image')

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

//feladatok: a, b, c, d
//TODO: e

function inputChange(event, closest){
  let curFilter = ''
  for(const curInput of document.querySelectorAll('input[type=checkbox]')){
    if(curInput.checked){
      let curNum = curInput.nextElementSibling.value
      curFilter += curInput.value.replace('#', curNum)
      curFilter += ' '
    }
  }
  theImage.style.filter = curFilter
}
delegal(theFiltersDiv, 'input', 'input', inputChange)


//oldal újratöltésnél legyen aktuális a kép
inputChange()