function agregarPendientes() {
  var pendientes = document.getElementById("pendientePorAgregar").value;
  var li = document.createElement("li"); 
  
  li.innerHTML = pendientes == ''?'(pendiete sin crear)':pendientes;
  document.getElementById('listaPendientes').appendChild(li);
}

function borrarPendientes() {
  var pendientesBorrar = document.getElementById("listaPendientes");
  var elemento = document.getElementsByTagName("li");
  var i = elemento.length -1;
  listaPendientes.removeChild(elemento[i]);
}


function agregarListaPendientes() {
	var listaGeneralPendientes = document.getElementById("contieneLista").value;
	var section = document.createElement("section");

	section.innerHTML = listaGeneralPendientes == ''?'(lista general pendiete sin crear)':listaGeneralPendientes;
	document.getElementById("contieneLista").appendChild(section);


}

/* 	var listaAClonar = document.getElementById("contieneLista").lastChild;
	var clone = listaAClonar.cloneNode(true);
	var destino = document.getElementById("contieneLista");
	destino.appendChild(clone);
	console.log(agregarListaPendientes());
*/


