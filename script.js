const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#btnCalcular');

//Es un escuchador de eventos o se agrega cierto evento
// forn.addEventListener('click',SumarInputsValues);
// //En Html ejecuta el evento() y en javascript que selector, que evento y su funcion que gustarias

// function SumarInputsValues(event){
//     // console.log({event});
//     event.preventDefault();
//     const sumaValue = input1.value + input2.value;
//     pResult.innerText = "Resultado:" + sumaValue;
// }

btn.addEventListener('click',sumarInputValue);

function sumarInputValue(event){
    //console.log({event})
    //event.preventDefault();
    const sumarInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumarInputs;
}

