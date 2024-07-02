
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

cleaner();
painter(coloresHexadecimales)


/* Aqui termina tu codigo  */

