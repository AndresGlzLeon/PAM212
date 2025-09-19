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

// EJERCICIO C

var personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];

const luis = personas.find(function(persona) {
    return persona.nombre == "Luis";
});
console.log(luis);

personas.forEach(function(persona) {
    console.log(persona.nombre, " tiene " , persona.edad , " años");
});

var total = personas.reduce(function(suma, persona) {
    return suma , persona.edad;
}, 0);
console.log("Total de edades: " , total);

