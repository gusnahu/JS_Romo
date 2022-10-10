
// // array de corredores de f1
// let corredores = [
//     {
//         nombre: "max verstappen",
//         edad: 24,
//         nacionalidad: "holandesa",
//         cantidadDeTitulos: 1,
//         cantidadDePoles: 17,
//     },
//     {
//         nombre: "sergio perez",
//         edad: 30,
//         nacionalidad: "mexicana",
//         cantidadDeTitulos: 0,
//         cantidadDePoles: 0,
//     }
// ];

// function findCorredor(){
//     let nombre = prompt("Ingrese el nombre del corredor").toLowerCase();
//     if(nombre == corredores[0].nombre){
//         window.location.href = "./corredores/max.html";
//     }
//     else if(nombre == corredores[1].nombre){
//         window.location.href = "./corredores/checo.html";
//     }
//     else{
//         alert("No se encontro el corredor");
//     }
// }
// findCorredor();



const parrafo = document.querySelector("p");
const input = document.querySelector("input");

input.addEventListener("change", (e) => {
 parrafo.textContent = e.target.value;
 })

 const username = document.getElementById('username')
 const password = document.getElementById('password')
 const button = document.getElementById('button')
 
 button.addEventListener('click', (e) => {
     e.preventDefault()
     const data = {
         username: username.value,
         password: password.value
     }
 
     console.log(data)
 })

 //function to save username and password in local storage 
 function saveData(){
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    swal(
        'Logueado!',
        'Sera redirigido a tu perfil',
        'success',
    )
    setTimeout(function(){
        window.location.href = "../pages/perfil.html";
    }, 2000);
     }

//api formula 1 
const api = 'http://ergast.com/api/f1/2019/1/driverStandings.json';
//get names of drivers
const getDrivers = async () => {
    const response = await fetch(api);
    const data = await response.json();
    const drivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    return drivers;
}
//get names of drivers
const getDriversNames = async () => {
    const drivers = await getDrivers();
    const driversNames = drivers.map(driver => driver.Driver.givenName);
    document.getElementById("drivers-name").innerText = driversNames;
    return driversNames;
}

//get points of drivers
const getDriversPoints = async () => {
    const drivers = await getDrivers();
    const driversPoints = drivers.map(driver => driver.points);
    document.getElementById("drivers-point").innerText = driversPoints;
    return driversPoints
}

//get constructor of drivers
const getDriversConstructors = async () => {
    const drivers = await getDrivers();
    const driversConstructors = drivers.map(driver => driver.Constructors[0].name);
    document.getElementById("drivers-constructors").innerText = driversConstructors;
    return driversConstructors
}

getDriversNames();
getDriversPoints();
getDriversConstructors();