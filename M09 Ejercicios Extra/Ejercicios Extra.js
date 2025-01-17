/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const arreglo = Object.entries(objeto);
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const letras = {};
  
   for (let i = 0; i < string.length; i++) {
     const letra = string[i];
     if (letras[letra]) {
       letras[letra] += 1;
     } else {
       letras[letra] = 1;
     }
   }
 
   // Ordenar el objeto alfabéticamente
   const letrasOrdenadas = {};
   Object.keys(letras).sort().forEach(function(key) {
     letrasOrdenadas[key] = letras[key];
   });
   
   return letrasOrdenadas;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   const arr = [];
   const ar = [];
   let arreglo = string.split('');
   for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === arreglo[i].toUpperCase()) {
           arr.push(string[i]);
         } else {
            ar.push(string[i]);
         }
      }
   return arr.join('') + ar.join('')
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const arr = frase.split(' ');
   let rra = arr.map(function(string) {
      return string.split('').reverse().join('');
   })
   return rra.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let cap = numero.toString().split('');
   let contador = 0;
   for (let i = 0; i < cap.length; i++) {
      if(cap[i] == cap[cap.length - 1 - i]) {
         contador++ ;
      }
   }
   if (contador === cap.length) {
      return "Es capicua";
   } return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let str = string.replace(/[abc]/g, '');
   return str;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   function compararLongitud(a, b) {
      return a.length - b.length;
    }
    return arrayOfStrings.sort(compararLongitud);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const arr =[];
   for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
         arr.push(array1[i]);
      }
   }
   return arr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
