function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  let numeroGuardado = numero;

  let arreglo = [];

  for (let index = 1; index < 10; index++) {
    arreglo.push((numeroGuardado += 2));

    if (index === 5) arreglo.push();
    continue;
  }

  console.log(arreglo)
}

continueStatement(2);

// let text = "";
// for (let i = 0; i < 5; i++) {
//   if (i === 3) continue;
//   text += i + "<br>";
// }
