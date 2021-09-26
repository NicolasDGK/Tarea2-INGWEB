
const form:any = document.getElementById("tarea2");
const nombreCompleto:any = document.getElementById("nombreCompleto");
const rut:any = document.getElementById("rut");
const correo:any = document.getElementById("correo");
const telefono:any = document.getElementById("telefono");
const largotelefono = telefono.toString().trim();

form.addEventListener("submit", function(event:any){
    event.preventDefault();
    if(telefono.value.length != 9){
        alert("El numero debe ser de 9 digitos")
    }
})