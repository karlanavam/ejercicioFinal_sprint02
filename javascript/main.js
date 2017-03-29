/*function ListaPendientes (titulo) {
	this.titulo = titulo;
	this.pendientes = pendientes; 
	this.agregar = agregar;
	this.borrar = borrar;
	
}

var listas = [];

function agregarPendientes() {
	var pendientes = document.getElementById("pendientePorAgregar").value;
	var lista = document.createElement("li");
	var textoLista = document.createTextNode(pendientes);
	lista.appendChild(textoLista);
	document.getElementById("listaPendientes").appendChild(lista);
}

function borrarPendientes() {
  var pendientesBorrar = document.getElementById("listaPendientes");
  var elemento = document.getElementsByTagName("li");
  var i = elemento.length -1;
  listaPendientes.removeChild(elemento[i]);
}

function crearListaNueva() {
 var crearListaSecundaria = document.getElementById("contieneLista").value; 
 var lista = document.createElement("section"); 
 var textoLista = document.createTextNode(listaPorCrear.value); 
   lista.appendChild(textoLista);
   document.getElementById("contieneLista").appendChild(lista); 
   
}


var listaUno = new ListaPendientes ("Pendientes semana;")*/


function agregarPendientes() {
	var pendientes = document.getElementById("pendientePorAgregar").value;
	var lista = document.createElement("li");
	var textoLista = document.createTextNode(pendientes);
	lista.appendChild(textoLista);
	document.getElementById("listaPendientes").appendChild(lista);
}

function borrarPendientes() {
  var pendientesBorrar = document.getElementById("listaPendientes");
  var elemento = document.getElementsByTagName("li");
  var i = elemento.length -1;
  listaPendientes.removeChild(elemento[i]);
}

function crearListaNueva() {
 var crearListaSecundaria = document.getElementById("contieneLista").value; 
 var lista = document.createElement("section"); 
 var textoLista = document.createTextNode(listaPorCrear.value); 
   lista.appendChild(textoLista);
   document.getElementById("contieneLista").appendChild(lista); 
   
}



/*function crearLista () {
 var crearLista = document.getElementById("crearNuevaLista").value;

 var lista = document.createElement("li");
 var textoLista = document.createTextNode(crearLista);
   lista.appendChild(textoLista);
   document.getElementById("contenedor").appendChild(lista);
}*/


