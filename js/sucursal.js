fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const elemento = document.getElementById("container-sucursal");
    for (let i = 0; i < 6; i++) {
        elemento.innerHTML += `
            <p>Direccion: ${data[i].address.suite}</p>
            <p>Telefono: ${data[i].phone}</p><hr>
        `;
    }
  }).catch(error => console.log("Error", error));