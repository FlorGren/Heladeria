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
.then((data)=>{console.log(data)});

fetch(url + "sabor/2",
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
.then((data)=>{console.log(data)});