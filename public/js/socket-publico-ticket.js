var socket = io();

let escr = document.getElementById("lblEscritorio1");
let tic = document.getElementById("lblTicket1");

let escr1 = document.getElementById("lblEscritorio2");
let tic1 = document.getElementById("lblTicket2");

let escr2 = document.getElementById("lblEscritorio3");
let tic2 = document.getElementById("lblTicket3");

let escr3 = document.getElementById("lblEscritorio4");
let tic3 = document.getElementById("lblTicket4");

socket.on('estadoActual', function(resp) {
    console.log(resp);

    escr.innerHTML = 'Escritorio: ' + resp.ultimos[0].escritorio;
    tic.innerHTML = 'Ticket : ' + resp.ultimos[0].number;

    escr1.innerHTML = 'Escritorio: ' + resp.ultimos[1].escritorio;
    tic1.innerHTML = 'Ticket : ' + resp.ultimos[1].number;

    escr2.innerHTML = 'Escritorio: ' + resp.ultimos[2].escritorio;
    tic2.innerHTML = 'Ticket : ' + resp.ultimos[2].number;

    escr3.innerHTML = 'Escritorio: ' + resp.ultimos[3].escritorio;
    tic3.innerHTML = 'Ticket : ' + resp.ultimos[3].number;

})

socket.on('update4', function(resp) {
    var audio = new Audio('../audio/new-ticket.mp3');
    audio.play();
    console.log(resp);
    escr.innerHTML = 'Escritorio: ' + resp.ultimos[0].escritorio;
    tic.innerHTML = 'Ticket : ' + resp.ultimos[0].number;

    escr1.innerHTML = 'Escritorio: ' + resp.ultimos[1].escritorio;
    tic1.innerHTML = 'Ticket : ' + resp.ultimos[1].number;

    escr2.innerHTML = 'Escritorio: ' + resp.ultimos[2].escritorio;
    tic2.innerHTML = 'Ticket : ' + resp.ultimos[2].number;

    escr3.innerHTML = 'Escritorio: ' + resp.ultimos[3].escritorio;
    tic3.innerHTML = 'Ticket : ' + resp.ultimos[3].number;
})