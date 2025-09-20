// EJERCICIO A
const person = {
    nombre: "Andrés",
    edad: 19,
    direccion: {
        ciudad: "Qro",
        pais: "Mx"
    }
};

// Destructuración 
const { nombre, edad, direccion: { ciudad, pais }} = person;
console.log("Me llamo ", nombre, " tengo ", edad, " años y vivo en ", ciudad , pais);
document.write("Me llamo ", nombre, " tengo ", edad, " años y vivo en ", ciudad , pais);


// EJERCICIO B
const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre : "Mouse", precio: 250},
    {nombre : "Teclado", precio: 750},
    {nombre : "Monitor", precio: 3000}
];

const nombres = productos.filter(producto => producto.precio > 1000);
productos.map(producto => console.log(producto.nombre));

console.log(nombres);