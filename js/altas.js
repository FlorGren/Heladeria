
document.getElementById('formulario').addEventListener('submit', function
(event) {
	event.preventDefault();

	let codigo = document.getElementById('codigo').value;
	let nombre = document.getElementById('nombre').value;
	let imagen = document.getElementById('imagen').value;
	let data = {codigo, nombre, imagen};
	console.log(data);
	let url= "http://127.0.0.1:5000/";

	fetch(url + "sabor",
	{
		method: 'POST',
		mode: 'cors',
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json", 
			"Access-Control-Allow-Origin": "*"
		},
		body: JSON.stringify(data)
	})
	.then((data)=>{return data.json()})
	.then((data)=>{

		document.getElementById('codigo').value = "";
		document.getElementById('nombre').value = "";
		document.getElementById('imagen').value = "";

		console.log(data);
	});
});
