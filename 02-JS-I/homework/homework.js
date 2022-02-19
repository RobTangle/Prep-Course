// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Una cadena de texto nueva";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 7;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  str = "una cadena";
  return console.log(str);
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return console.log(x + y);
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return console.log(x - y);
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return console.log(x * y);
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return console.log(x / y);
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x == y) return console.log(true);
  else return console.log(false);
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length == str2.length) return console.log(true);
  else return console.log(false);
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (typeof num !== "number") return console.log("Ingrese un número.");
  if (num < 90) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (typeof num !== "number") return console.log("Ingrese un número.");
  if (num > 50) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let resto = x % y;
  console.log(resto);
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  let restoPar = num % 2;

  if (typeof num !== "number") {
    return console.warn("Ingrese un número");
  }

  if (restoPar !== 0) {
    return console.log(false);
  } else {
    return console.info(true);
  }
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (typeof num !== "number") {
    return console.warn("Ingrese un número");
  }

  if (restoPar !== 0) {
    return console.log(true);
  } else {
    return console.info(false);
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  if (typeof num !== "number") {
    return console.error("Ingresa un número en formato de número.");
  }
  let alCuadrado = num * num;
  console.log(alCuadrado);
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  if (typeof num !== "number") {
    return console.error("Ingresa un número en formato de número.");
  }
  let alCubo = num * num * num;
  console.log(alCubo);
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  if (num || exponent == undefined) {
    return console.warn("Ingrese valores en forma de numeros.");
  }
  if (typeof num || exponent !== "number") {
    return console.error("Ingrese únicamente números.");
  }

  let numAlExpo = num ** exponent;

  console.info(numAlExpo);
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  numRedondeado = Math.round(num);
  console.log(numRedondeado);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  numRedondeadoUp = Math.ceil(num);
  console.log(numRedondeadoUp);
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  console.log(Math.random());
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (typeof numero !== "number") {
    return console.log("Ingrese un número positivo o negativo.");
  }
  if (numero === 0) {
    return console.log(false);
  }

  if (numero > 0) {
    return console.log("Es positivo.");
  }
  if (numero < 0) {
    return console.log("Es negativo.");
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  console.log(str + "!");
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  console.log(nombre + " " + apellido);
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  console.log(`Hola, ${nombre}!`);
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  if (typeof alto !== "number") {
    return console.warn("Ingrese, en forma de número, el alto.");
  }
  if (typeof ancho !== "number") {
    return console.warn("Ingrese, en forma de número, el ancho.");
  }
  areaRectangulo = alto * ancho;
  console.log(areaRectangulo);
}

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  if (typeof lado !== "number") {
    return console.warn("Ingrese un valor en forma de número");
  }
  console.log(lado * 4);
}

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  if (typeof base !== "number") {
    return console.warn("Ingrese la base en forma de número.");
  }
  if (typeof altura !== "number") {
    return console.warn("Ingrese la altura en forma de número.");
  }
  areaDeTriangulo = (base * altura) / 2;

  console.log(areaDeTriangulo);
}

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  if (typeof euro !== "number") {
    return console.warn("Ingrese un número");
  }
  dolar = euro * 1.2;
  console.log(dolar);
}

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí

  if (typeof letra !== "string") {
    return console.error("Dato incorrecto. Ingrese una cadena de texto");
  }
  if (letra.length !== 1) {
    return console.warn("Dato incorrecto. Ingrese únicamente una letra.");
  }

  if (["a", "e", "i", "o", "u"].includes(letra.charAt(0).toLowerCase())) {
    return console.log("Es una vocal.");
  } else {
    return console.log("Dato incorrecto.");
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
