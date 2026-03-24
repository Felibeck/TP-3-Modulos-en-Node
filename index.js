//ejercicio 1

import fs from 'fs';

const productos = fs.readFileSync('./productos.json', 'utf-8');
console.log(productos);

//ejercicio 2


const agregarProducto = (nombre, precio, descripcion) => {
    const productos = JSON.parse(fs.readFileSync('./productos.json', 'utf-8'));
    
    const nuevoProducto = { nombre, precio, descripcion };
    productos.push(nuevoProducto);
    
    fs.writeFileSync('./productos.json', JSON.stringify(productos));
};

agregarProducto("Papas Fritas Medianas", 40, "Papas fritas de tamaño mediano, perfectas para acompañar tus comidas.");
console.log(JSON.parse(fs.readFileSync('./productos.json', 'utf-8')));


// ejercicio 3

import dayjs from 'dayjs';
import { clearInterval } from 'timers';

const getFechaActual = () => dayjs().format('DD/MM/YYYY')
const getHoraActual = () => dayjs().format('HH:mm:ss');


console.log("Fecha actual: " + getFechaActual())
console.log("Hora actual: " + getHoraActual())

// ejercicio 4

async function obtenerDatos(nombre) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${nombre}`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    const pais = data[0];
    console.log(` 
    Nombre del Pais: ${pais.name.common} 
    Capital: ${pais.capital}
    Region: ${pais.region}
    Capital: ${pais.population}
    
    `);
    return data;

  } catch (error) {
    console.error('Error al consumir la API:', error);
  }
}

obtenerDatos("Argentina");



// ejercicio 5

const buscarProducto = nombre =>
{
    const contenidoProductos = fs.readFileSync('./productos.json', 'utf-8')
    const productosEj5 = JSON.parse(contenidoProductos)

    const productoBuscado = productosEj5.find(element => element.nombre.toLowerCase() === nombre.toLowerCase())

    if(productoBuscado != null)
    {
        console.log(`¡Producto Encontrado!
            
            Nombre: ${productoBuscado.nombre}
            Precio: ${productoBuscado.precio}
            `)
    }else{
        console.log("Producto no encontrado :(")
    }

}

buscarProducto("bIgmc")

// ejercicio 6

 const contenidoProductos = fs.readFileSync('./productos.json', 'utf-8')
 const productosEj5 = JSON.parse(contenidoProductos)


const productosCSV = productosEj5.map(producto => `${producto.nombre},${producto.precio}`).join('\n');


fs.writeFileSync('./productos.csv', productosCSV, 'utf-8');


// // Ejercicio 7


let contador = 1;

const intervalo = setInterval(() => {
 if(contador === 1)
 {
  console.log("Iniciando contador...")
 }
  console.log(contador)

  if(contador >= 10)
  {
    clearInterval(intervalo);

    setTimeout(() => {
      console.log("Fin del contador")
    }, 500);
  }

  contador++;

}, 1000)


// Ejercicio 8


const analizarTexto = texto =>
{
  const chars = texto.split('');
  const objeto = {

    caracteres: texto.length,
    palabras: texto.split(' ').length,
    vocales: chars.filter(c => 'aeiou'.includes(c.toLowerCase())).length,
    consonantes: chars.filter(c => 'bcdfghjklmnpqrstvwxyz'.includes(c.toLowerCase())).length

  }
  return objeto;
}

let analisis = analizarTexto("Hola Mundo")
console.log(analisis)


// Ejercicio 9


const validarPassword = password =>
{
  const esValida = password.length >= 8 && /[0-9]/.test(password) && /[A-Z]/.test(password);

  if(esValida)
  {
    console.log("Password válida")
  }else
  {
    console.log("Password inválida")
  }
}

validarPassword("Abcdefg")

