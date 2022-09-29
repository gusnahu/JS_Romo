
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
        'Good job!',
        'You clicked the button!',
        'success'
      )
    window.location.href = "../pages/perfil.html";
}

// const { value: accept } = await Swal.fire({
//     title: 'Terms and conditions',
//     input: 'checkbox',
//     inputValue: 1,
//     inputPlaceholder:
//       'I agree with the terms and conditions',
//     confirmButtonText:
//       'Continue <i class="fa fa-arrow-right"></i>',
//     inputValidator: (result) => {
//       return !result && 'You need to agree with T&C'
//     }
//   })
  
//   if (accept) {
//     Swal.fire('You agreed with T&C :)')
//   }

