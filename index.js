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