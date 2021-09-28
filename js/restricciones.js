"use strict";
var tarea2 = document.getElementById("tarea2");
tarea2.addEventListener("submit", function (event) {
    var nombreCompleto = document.getElementById("nombreCompleto");
    var rut = document.getElementById("rut");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var opinion = document.getElementById("opinion");
    console.log(nombreCompleto.value);
    console.log(rut.value);
    console.log(correo.value);
    console.log(telefono.value);
    console.log(opinion.value);
    rut = String(rut);
    if (telefono.value.length != 9) {
        alert("El numero debe ser de 9 digitos.");
    }
    if (opinion.value.length <= 0) {
        alert("Debe dar su opinion acerca de la escuela");
    }
});
