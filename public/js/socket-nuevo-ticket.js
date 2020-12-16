var socket = io();

let label = document.getElementById("lblNuevoTicket");

socket.on('connect', function() {
    console.log('conectado al servidor');
})


socket.on('disconnect', function() {
    console.log('desconectado del servidor');
})

socket.on('estadoActual', function(respuesta) {
    label.innerHTML = respuesta.actual;
})

let btnNewT = document.getElementById("btnNewT");
btnNewT.addEventListener("click", () => {
    socket.emit('nextTicket', null, function(respuesta) {
        console.log(respuesta);
        label.innerHTML = respuesta.next;
    })
})