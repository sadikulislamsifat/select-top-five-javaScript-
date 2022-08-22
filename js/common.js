

  // get Input Field Value
function getInputValueById(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value ;
    const inputAmount = parseFloat(inputValueString);
    inputValue.value = '';
    return inputAmount;

}

// get element value
function getElementValueById(elementId){
    const elementValue = document.getElementById(elementId);
    const elementValueString = elementValue.innerText ;
    const elementAmount = parseFloat(elementValueString);
    return elementAmount;

};


// element value
function setElementValueById(element, value){
    const elementName = document.getElementById(element);
    elementName.innerText = value;
}