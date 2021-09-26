let tarea2:any=document.getElementById("tarea2");
tarea2.addEventListener("submit", function(event:any){
  let nombreCompleto:any = document.getElementById("nombreCompleto");
  let rut:any = document.getElementById("rut");
  let correo:any = document.getElementById("correo");
  let telefono:any = document.getElementById("telefono");
  let largotelefono = telefono.toString().trim();
  console.log(nombreCompleto.value);
  console.log(rut.value);
  console.log(correo.value);
  console.log(telefono.value);

  if (largotelefono.length != 9) {
    console.log("el numero telefono debe tener 9 digitos");
    
}

  
})

let restricciones = {
  nombreCompleto: /^[a-zA-ZÄ-ÿ\s]+$/,
  rut: /^\d{8,9}$/,
  telefono: /^\d{9}$/
}
