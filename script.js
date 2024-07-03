
//? Esta funcion dibuja la Imagen
const painter = (coloresHexadecimales) => {
  const gridContainer = document.getElementById('grid-container');
  coloresHexadecimales.forEach(row => {
    row.forEach(color => {
      const div = document.createElement('div');
      div.className = 'grid-item';
      div.style.backgroundColor = color;
      gridContainer.appendChild(div);
    });
  });
}

//? Esta funcion permite limpiar la pagina
const cleaner = () => {
  const gridContainer = document.getElementById('grid-container');
  gridContainer.innerHTML = '';
}

const coloresHexadecimales = [
  ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF'],
  ['#FF8C33', '#33FF8C', '#338CFF', '#FF338C', '#8C33FF'],
  ['#FFC133', '#33FFC1', '#33C1FF', '#FFC133', '#C133FF'],
  ['#FFF633', '#33FFF6', '#33F6FF', '#F6FF33', '#F633FF'],
  ['#FFD133', '#33FFD1', '#33D1FF', '#FFD133', '#D133FF']
];

/* Aqui inicia tu codigo  */

cleaner(coloresHexadecimales);

let matrizParaImprimir= coloresHexadecimales.map((x)=>[...x])
let grados= prompt('¿Cuantos grados quieres rotar la imagen 90° o 180°')
if (grados== '90') {
  let direccion= prompt('Direccion de rotacion: ¿Izquierda o Derecha?')
  if (direccion== 'derecha') {
    for (let i = 0; i < coloresHexadecimales.length; i++) {
      k=coloresHexadecimales.length
      for (let j = 0; j < coloresHexadecimales.length; j++) {
        matrizParaImprimir[i][j]= coloresHexadecimales[k-1][i]
        k=k-1
        
      }
      
    }
    
  } else {
    for (let i = 0; i < coloresHexadecimales.length; i++) {
      k=coloresHexadecimales.length
      for (let j = 0; j < coloresHexadecimales.length; j++) {
        matrizParaImprimir[j][i]=coloresHexadecimales[i][k-1]
        k=k-1
        
      }
      
    }
  }
  
} else {
  for (let i = 0; i < coloresHexadecimales.length; i++) {
    k=coloresHexadecimales.length
    for (let j = 0; j < coloresHexadecimales.length; j++) {
      matrizParaImprimir[i][j]=coloresHexadecimales[k-1-i][k-1-j]
      
      


    }
    
  }
}

painter(matrizParaImprimir)


/* Aqui termina tu codigo  */

