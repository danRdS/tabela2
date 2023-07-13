const carregamento = document.querySelector('.carregamento');
const form = document.querySelector('form');
const nome = document.getElementById('nome');
const idade = document.getElementById('idade');
const btnEnvio = document.getElementById('enviar');
const modal = document.querySelector('.modal');
const popupCircle = document.querySelector('.popupCircle');
const popupConfirm = document.querySelector('.popupConfirm');
const btnOk = document.getElementById('btnOk');

form.addEventListener('submit', (e) => e.preventDefault());

btnEnvio.addEventListener('click', () => {
    if(nome.value.length > 0 && idade.value.length > 0){
        modal.classList.add('visible');

        setTimeout(() => {
            popupCircle.classList.add('hidden');
        }, 1000);
        setTimeout(() => {
            popupConfirm.classList.add('visible');
            document.addEventListener('keypress', (e) => {
                if(e.key == 'Enter'){
                    btnOk.click();
                }
            })
        }, 1300);
    }
})

btnOk.addEventListener('click', (e) => {
    carregamento.classList.add('visible');
    e.target.classList.add('clicked');
    setTimeout(() => {
        popupConfirm.classList.remove('visible');
        localStorage.nomeUsuario = nome.value;
        localStorage.idadeUsuario = idade.value;
    }, 1600)
        
    setTimeout(() => { 
        modal.classList.remove('visible');
        carregamento.classList.remove('visible');
        location.href = "home/home.html";
        e.target.classList.remove('clicked');
    }, 2000);
    
    setTimeout(() => popupCircle.classList.remove('hidden'), 2500)
})