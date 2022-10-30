

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
        'Sera redirigido a la pagina principal',
        'Exitoso',
    )
    setTimeout(function(){
        window.location.href = "../pages/perfil.html";
    }, 2000);

}