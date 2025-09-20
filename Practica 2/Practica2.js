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

