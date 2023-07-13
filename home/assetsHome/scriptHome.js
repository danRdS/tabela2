const tdName = document.getElementById('tdName');
const tdAge = document.getElementById('tdAge');


tdName.innerText = localStorage.nomeUsuario;
tdAge.innerText = localStorage.idadeUsuario;

function alterarDados(){
    location.href = "../index.html";
}
