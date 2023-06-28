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

    <!--onclick se utiliza para detectar cuando se hace clic en un elemento, 
        mientras que onchange se utiliza para detectar cambios en el valor de un 
        elemento y cuando se pierde el enfoque del mismo. 
    -->

    <input id="calculo1" placeholder="Escribe algo aqui"/>
    <input onchange="console.log('Cambio el input')" id="calculo2" placeholder="Escribe algo aqui"/>
    <button id="btnCalcular" onclick="btnOnClick()">Calcular</button>

    <p id="Result"></p>
    
    <script src="./script.js"></script>
</body>
</html>

# JavaScript
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#btnCalcular');

function btnOnClick(){
    const sumaValue = input1.value + input2.value;
    pResult.innerText = "Resultado:" + sumaValue;
}
