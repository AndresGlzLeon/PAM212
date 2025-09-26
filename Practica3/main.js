//EJRCICIO A
import {restar} from "./utils.js";

console.log(restar(10, 1));

//EJERCICIO B
function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "Admin") {
                resolve("Usuario verificado");
            } else {
                reject("Usuario no verificado");
            }
        }, 2000);
    });
}

    verificarUsuario("Admin")
    .then(res => console.log(res))
    .catch(err => console.log(err));

    verificarUsuario("Andres")
    .then(res => console.log(res))
    .catch(err => console.log(err));
