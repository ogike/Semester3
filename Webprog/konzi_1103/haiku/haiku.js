const inputField = document.querySelector('#haiku-editor')
const numOfCharsLabel = document.querySelector('#number-of-characters')
const cunOfRowsLabel = document.querySelector('#number-of-rows')

const maganhangzok = "aáeéiíoóöőuúüű"

inputField.addEventListener('input', (event) => {
    let text = inputField.value
    
    //console.log(inputField.value)
    numOfCharsLabel.innerHTML = text.length
    cunOfRowsLabel.innerHTML = text.split('\n').length

    

})