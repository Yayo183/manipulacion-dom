# HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulacion del DOM básica - Curso Práctico de javascript</title>
</head>
<body>
    <h1 clase = "verde">Manipulacion del DOM básica</h1>

    <form id="form">
        <input id="calculo1" placeholder="Escribe algo aqui"/>
        <input id="calculo2" placeholder="Escribe algo aqui"/>
        <button type="button" id="btnCalcular">Calcular</button>
        <!-- <button id="btnCalcular">Calcular</button> -->

        <p id="Result"></p>
    </form>
    
    <script src="./script.js"></script>
</body>
</html>

# JavaScript

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



# EJEMPLO

# HTML #

<button id="myButton">Haz clic</button>

# JavaScript #

// Obtén una referencia al botón utilizando su ID
const button = document.getElementById('myButton');

// Define la función que se ejecutará cuando se haga clic en el botón
function handleClick() {
  console.log('Se hizo clic en el botón');
}

// Agrega el evento al botón utilizando addEventListener
button.addEventListener('click', handleClick);
