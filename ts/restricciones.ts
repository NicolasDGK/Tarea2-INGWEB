let tarea2:any=document.getElementById("tarea2");
tarea2.addEventListener("submit", function(event:any){
  let nombreCompleto:any = document.getElementById("nombreCompleto");
  let rut:any = document.getElementById("rut");
  let correo:any = document.getElementById("correo");
  let telefono:any = document.getElementById("telefono");
  let opinion:any = document.getElementById("opinion");
  console.log(nombreCompleto.value);
  console.log(rut.value);
  console.log(correo.value);
  console.log(telefono.value);
  console.log(opinion.value);
  rut=String(rut);
  

  if(telefono.value.length != 9){
    alert("El numero debe ser de 9 digitos.");
  }

  if(opinion.value.length <= 0){
    alert("Debe dar su opinion acerca de la escuela");
  }
})






