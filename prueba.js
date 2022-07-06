function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.

    let num = numero;

  for (let i = 1; i <= 8; i++) {
    
        num += 5;
    
  }
 return num;
  }

  doWhile(5);