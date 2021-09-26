"use strict";
var tarea2 = document.getElementById("tarea2");
tarea2.addEventListener("submit", function (event) {
    var nombreCompleto = document.getElementById("nombreCompleto");
    var rut = document.getElementById("rut");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var largotelefono = telefono.toString().trim();
    console.log(nombreCompleto.value);
    console.log(rut.value);
    console.log(correo.value);
    console.log(telefono.value);
    if (largotelefono.length != 9) {
        console.log("el numero telefono debe tener 9 digitos");
    }
});
var restricciones = {
    nombreCompleto: /^[a-zA-ZÄ-ÿ\s]+$/,
    rut: /^\d{8,9}$/,
    telefono: /^\d{9}$/
};
