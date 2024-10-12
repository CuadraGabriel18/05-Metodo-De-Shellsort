// Función que implementa el algoritmo de Shell Sort para ordenar un arreglo.
function shellSort(arr) {
  const n = arr.length;
  
  // Ciclo principal para determinar el tamaño de los pasos en el algoritmo.
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Ciclo para recorrer el arreglo y realizar inserciones en los subconjuntos.
    for (let i = gap; i < n; i++) {
      const temp = arr[i];  // Elemento actual que será insertado en su posición correcta.
      let j;
      
      // Ciclo para realizar la inserción en el subconjunto con el paso 'gap'.
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];  // Desplaza los elementos mayores hacia adelante.
      }
      arr[j] = temp;  // Inserta el elemento en su posición correcta en el subconjunto.
    }
  }
  return arr;  // Devuelve el arreglo ordenado.
}

// Función que muestra un arreglo en un contenedor HTML.
function displayArray(containerId, array, label) {
  const container = document.getElementById(containerId);
  const arrayString = array.join(', ');
  container.innerHTML = `<p>${label}: [${arrayString}]</p>`;
}

// Evento que se dispara cuando se hace clic en el botón con el id 'sortButton'.
document.getElementById('sortButton').addEventListener('click', function () {
  const input = document.getElementById('numbers').value;  // Obtiene el input de números.
  const numbers = input.split(',').map(num => parseInt(num.trim(), 10));  // Convierte a un arreglo de números.

  // Ordena el arreglo usando Shell Sort y crea una copia ordenada descendente.
  const sortedArrayAsc = shellSort([...numbers]);
  const sortedArrayDesc = [...sortedArrayAsc].reverse();

  // Muestra los arreglos ordenados en los contenedores correspondientes.
  displayArray('sortedArrayAsc', sortedArrayAsc, 'Array Ordenado (Ascendente)');
  displayArray('sortedArrayDesc', sortedArrayDesc, 'Array Ordenado (Descendente)');
});

