var socket = io();

let titulo = document.getElementById("titulo");
let atendiendo = document.getElementById("atendiendo");

var params = new URLSearchParams(window.location.search);
if (!params.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('el escritorio es necesario');
}
var escritorio = params.get('escritorio');
titulo.innerHTML = 'Escritorio ' + escritorio;
let btnAtend = document.getElementById('btnAtend');
btnAtend.addEventListener('click', () => {
    socket.emit('atenderTicket', escritorio, function(resp) {
        if (resp === 'No hay tickets') {
            alert(resp);
            atendiendo.innerHTML = resp;
        } else {
            atendiendo.innerHTML = `Ticket ${resp.number}`;
        }

    })
})