let url= "http://127.0.0.1:5000/";
let codigo;
const formBuscar = document.getElementById('formulario_consulta');
const formEliminar = document.getElementById('formulario_eliminar');
formBuscar.addEventListener('submit', function
(event) {
	event.preventDefault();

	codigo = document.getElementById('codigo').value;

	fetch(url + "sabor/" + codigo,
	{
		method: 'GET',
		mode: 'cors',
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json", 
			"Access-Control-Allow-Origin": "*"
		},
	})
	.then((data)=>{return data.json()})
	.then((data)=>{
        const sabores = data.sabores;
        document.getElementById('codigoX').value = codigo;
        document.getElementById('nombre').value = sabores ? sabores.nombre : "";
        document.getElementById('imagen').value = sabores ? sabores.imagen : "";
    });
});

formEliminar.addEventListener('submit', function
(event) {
	event.preventDefault();

	fetch(url + "sabor/" + codigo,
	{
		method: 'DELETE',
		mode: 'cors',
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json", 
			"Access-Control-Allow-Origin": "*"
		},
	})
	.then((data)=>{return data.json()})
	.then((data)=>{console.log(data)});
});