let url= "http://127.0.0.1:5000/";

fetch(url + "sabor",
{
    method: 'GET',
    mode: 'cors',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json", 
        "Access-Control-Allow-Origin": "*"
    }
})
.then((data)=>{return data.json()})
.then((data)=>{
	let plantilla = "";
	for(let i = 0; i < data.length; i++){
		plantilla += `
		<li>
		<p>${data[i].nombre}</p>
		</li>
		`
	}
	document.getElementById('listaProductos').innerHTML = plantilla;
});