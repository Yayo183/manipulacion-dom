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
    
    <p>Esto es un párrafo</p>
    <p class="parrafito">Esto es un párrafo con ID</p>
    <p id="pid">Esto es un parrafo con ID</p>

    <input placeholder="Escribe algo aquí"/>
    
    <script src="./script.js"></script>
</body>
</html>



# Java script 
// h1 {color: red}
// .parrafito{...}
// #pid{...}

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> feo';
h1.innerText = 'patito <br> feo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class','rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value = "564";

const img = document.createElement('img');
img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);
pid.innerHTML(img);


