## Respuestas al Test de JavaScript

## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

//¿Qué es una variable y para qué sirve?
Es un espacio reservado en memoria que nos permite almacenar información. 
//Podemos almacenar diferentes tipos de datos para usarlos en nuestro código. 
En JS existe tres formas de crear una variable var, let, const. en ES6 nacen let & const que son variable de tipo scope y esto quiere decir que dependiendo del scope es su accesibilidad.

//¿Cuál es la diferencia entre declarar e inicializar una variable?
La parte de declarar una variable es para poder indicarle que empieza
como o que nombre tendra y el tipo que almacenemos

//Declarar una variable
let nombre;
//Inicializar la variable 
nombre = "Camilo"; 
//Podemos generar este proceso en una sola linea de codigo. 
let nombre = "Camilo";

//Y por otra parte la asignacion de un valor ya es inicializar

//¿Cuál es la diferencia entre sumar números y concatenar strings?
Que los cararcteres es para concatenar y la suma para los numeros 
aun que utilizemos el mismo operador +

//¿Cuál operador me permite sumar o concatenar?
El operador utilizando el signo de +

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

-nombre: String
-Apellidos: String
-Nombre de usuario: String
-Edad: numbre
-Correo eletronico: String
-mayor de edad: boolean
-dinero ahorrado: numero
-Deudas: numero

let Nombre = "Yahir";
let Apellidos = "Chavez";
let nombre_usuario = "Khen";
let edad = "20";
let email = "Loxk18.ju@gmail.com";
let MayorDeEdad = false;
let DineroAhorrado = 2500;
let Deudas = 5;

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let Name = "Yahir";
let Lastname = "Chavez";
console.log(`Que tal mi nombre es:, ${Name}, y mi apellido es:, ${Lastname}`);

let savedMoney = 100000;
let debtMoney = 5000;
let totalMoney = savedMoney - debtMoney;
console.log(`El total de mi dinero actual es:', $${totalMoney}`)

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

//¿Qué es una función?
// Es un metodo para un bloque de codigo, un conjunto de instruciones o crear un cierto procesos

//¿Cuándo me sirve usar una función en mi código?
//Cuando queremos realizar una cierta accion o repetir una accion 
//en nuestro codigo en vez de sumar podemos crear una funcion que nos permita
//hacer eso de forma rapida y solo usamos los parametros para cambiar los valores

//¿Cuál es la diferencia entre parámetros y argumentos de una función?
//Los parámetros son las variables declaras y solicitadas en nuestra función, 
//al momento de realizar el llamado de nuestra funciones nos exigirá declarar nuestras variables que vendrían a ser nuestros argumentos de la función.

const nome = "Juan David";
const lastname = "Castro Gallego";
const completeName = nome + lastname;
const nickname = "juandc";
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

//My solution
function presentation(name, lastName, nickName){
  return console.log(`Mi nombre completo es ${name} ${lastName}, pero prefiero que me digas ${nickName}.`);
}
presentation("Camilo", "Saavedra", "cisaa");

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

//¿Qué es un condicional?
//Es una expresión que nos permite evaluar si es True o False.

//¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
//If…else Switch
//Con el condicional If…Else podemos tener diferentes expresiones para evaluar dependiente del caso, y generar tantos If o else como sea necesario. Mientras que Switch case toma una sola expresión de entrada pero puede evaluar todos los casos como sea necesario de una forma más ordenada.

//¿Puedo combinar funciones y condicionales?
//Podemos encadenar una respusta desde un condional a otro pero no podemos combinarlo dentro de una misma expresión. Si podemos ocuparlos de forma separada y luego encadenar una acción dependiendo del resultado.

const tipoDeSuscripcion = "Basic";
switch (tipoDeSuscripcion) {
case "Free":
       console.log("Solo puedes tomar los cursos gratis");
break;
case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
break;
case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
break;
case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
break;
}
//My solution
const tiposusc= "Basic";
if (tipoDeSuscripcion == "Free") {
	console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
	 console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
	 console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
	 console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
	 console.log("No tienes ninguna suscripción");
}

let typeSuscripción = [
    "Free",
    "Basic", 
    "Expert", 
    "ExpertPlus"
    ];
    let infoSuscripción = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
    let userSuscription = "Expert";
    for (let i=0; i < typeSuscripción.length; i++) {
      if (userSuscription == typeSuscripción[i]) {
          console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
      }
    }
## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

//¿Qué es un ciclo?
//Es un ciclo con bucles que se repiten hasta que se cumplan las condiciones

//¿Qué tipos de ciclos existen en JavaScript?
//Ciclo For, While, etc.

//¿Qué es un ciclo infinito y por qué es un problema?
//Un ciclo infinito es cuando la condicion nunca se va a cumplir por lo tanto nunca o no existe un cierto proceso
//Y es porque en algun tiempo puede fallar el codigo y sobre todo relentizar las maquinas

//¿Puedo mezclar ciclos y condicionales?
//Si, realmente podemos condicionar un ciclo para que se repita todas las veces hasta que se cumplan las condiciones
//En que internamente se evaluan

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let num = 10;
let num2 = 10;
const result = num + num2;
let questions = {
  q1: `Cuanto es ${num} + ${num2}`
}
function Quizzer() {
  let userInput = prompt(questions.q1);
  if (userInput == result) {
    alert("Felicitaciones, respondiste correctamente el desafio 😎");
  } else {
    alert("lamentablemente, tu respuesta es incorrecta, sigue practicando ❌!");
  }
}
Quizzer();

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:


//¿Qué es un array?
//es una estructura en la que almacena datos o una coleccion de los elementos del mismo tipo, 
//dispuestos de manera contigua en la memoria

//¿Qué es un objeto?
//Las propiedades de un objeto son variables que almacenan valores relacionados con el objeto. 
//Estos valores pueden ser de cualquier tipo de datos, como números, cadenas de texto, booleanos, arrays u otros objetos.

//¿Cuándo es mejor usar objetos o arrays?
//Ocupamos objetos cuando el conjunto de elementos es muy grande y de distintos tipos de valores.

//¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
//puedes mezclar arrays con objetos e incluso objetos con arrays. La flexibilidad del lenguaje te permite combinar diferentes estructuras de datos para adaptarse a tus necesidades.

//Ejercicio 1
const miarray = [1, 2, 3, 4, 5];
imprimirPrimerElemento(miArray); // Imprimirá 1

const OtroArray = ["Manzana", "Banana", "Cereza"];
imprimirPrimerElemento(otroArray); // Imprimirá "Manzana"

const arrayvacio = [];
imprimirPrimerElemento(arrayVacio); // Imprimirá "El parámetro no es un array válido o está vacío."

//Ejercicio 2
const miArray = [1, 2, 3, 4, 5];
imprimirElementos(miArray);
// Imprimirá:
// 1
// 2
// 3
// 4
// 5

const otroArray = ["Manzana", "Banana", "Cereza"];
imprimirElementos(otroArray);
// Imprimirá:
// Manzana
// Banana
// Cereza

const arrayVacio = [];
imprimirElementos(arrayVacio);
// Imprimirá "El parámetro no es un array válido o está vacío."

//Ejercicio 3
const miObjeto = { nombre: "Juan", edad: 25, ciudad: "México" };
imprimirElementosObjeto(miObjeto);
// Imprimirá:
// Juan
// 25
// México

const otroObjeto = { marca: "Samsung", modelo: "Galaxy", año: 2022 };
imprimirElementosObjeto(otroObjeto);
// Imprimirá:
// Samsung
// Galaxy
// 2022

const objetoVacio = {};
imprimirElementosObjeto(objetoVacio);
// No imprimirá nada, ya que el objeto está vacío.

const noObjeto = "Hola";
imprimirElementosObjeto(noObjeto);
// Imprimirá "El parámetro no es un objeto válido."
