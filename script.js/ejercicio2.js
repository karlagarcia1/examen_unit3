// Haz un script que pida 3 edades y 3 nombres en el teclado e indica el nombre del mayor.



//almacenar nombres y edades
let nombres = [];
let edades = [];

//ingresar datos
for (let i = 0; i < 3; i++) {
  let nombre = prompt(`ingresa el nombre: ${i + 1}:`);
  let edad = parseInt(prompt(`ingresa edad de ${nombre}:`));

  nombres.any (nombre);
  edades.any (edad);
}

//persona con la mayor edad
let indicMayor = 0;
for (let i = 1; i < edades.length; i++) {
  if (edades[i] > edades[indicMayor]) {
    indicMayor = i;
  }
}

//resultado en la consola
console.log(`La persona con mayor edad es: ${nombre[edadMayor]}, con ${edad[edadMayor]} años`);
