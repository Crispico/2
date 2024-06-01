const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'Inicio.html'
})


const api_url = "https://jsonplaceholder.typicode.com";
const xhr = new XMLHttpRequest();

function onRequestHandler(){
if(this.readyState === 4 && this.status ===200){
    const data = JSON.parse(this.response)
console.log(data);
};

};

xhr.addEventListener("load",onRequestHandler);
xhr.open("GET", `${api_url}/users`);
xhr.send();