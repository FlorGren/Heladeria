let codigo;
const formBuscar = document.getElementById('formulario_consulta');
const formModificar = document.getElementById('formulario_modificar');
formBuscar.addEventListener('submit', function
(event) {
	event.preventDefault();

	codigo = document.getElementById('codigo').value;
	let url = "http://127.0.0.1:5000/";

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

formModificar.addEventListener('submit', function
(event) {
	event.preventDefault();

	let nombre = document.getElementById('nombre').value;
	let imagen = document.getElementById('imagen').value;
	let data = {codigo, nombre, imagen};
	let url= "http://127.0.0.1:5000/";

	fetch(url + "sabor/" + codigo,
	{
		method: 'PUT',
		mode: 'cors',
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json", 
			"Access-Control-Allow-Origin": "*"
		},
		body: JSON.stringify(data)
	})
	.then((data)=>{return data.json()})
	.then((data)=>{console.log(data)});
});