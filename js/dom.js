"use strict";
var form = document.getElementById("tarea2");
var nombreCompleto = document.getElementById("nombreCompleto");
var rut = document.getElementById("rut");
var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var largotelefono = telefono.toString().trim();
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (telefono.value.length != 9) {
        alert("El numero debe ser de 9 digitos");
    }
});
