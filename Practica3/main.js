//EJRCICIO A
import {restar} from "./utils.js";

console.log(restar(10, 1));

//EJERCICIO B
function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
            if (usuario === "Admin") {
                resolve("Usuario verificado");
            } else {
                reject("Usuario no verificado");
            }
        });
}

    verificarUsuario("Admin")
    .then(res => console.log(res))
    .catch(err => console.log(err));

    verificarUsuario("Andres")
    .then(res => console.log(res))
    .catch(err => console.log(err));

//EJERCICIO C
function simularPeticionAPI(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos de la API");
        }, 5000);
    });
}

async function obtenerDatos(){
    const datos = await simularPeticionAPI();
    console.log(datos);
}

obtenerDatos();