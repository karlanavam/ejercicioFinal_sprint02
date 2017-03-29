function agregarPendientes() {
  var pendientes = document.getElementById("pendientePorAgregar").value;
  var li = document.createElement("li"); 
  
  li.innerHTML = pendientes == ''?'(pendiete sin crar)':pendientes;
  document.getElementById('listaPendientes').appendChild(li);
}

function borrarPendientes() {
  var pendientesBorrar = document.getElementById("listaPendientes");
  var elemento = document.getElementsByTagName("li");
  var i = elemento.length -1;
  listaPendientes.removeChild(elemento[i]);
}

function crearListaPendientes() {
  var pendientes = document.getElementById("pendientePorAgregar").value;
  var li = document.createElement("li"); 
  
  li.innerHTML = pendientes == ''?'(pendiete sin crar)':pendientes;
  document.getElementById('listaPendientes').appendChild(li);
}