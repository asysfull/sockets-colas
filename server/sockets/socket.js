const { Ticket } = require('../../server/classes/Ticket');
const objTicket = new Ticket();


module.exports.SocketDev = (io) => {

    io.on('connection', (client) => {

        client.on('nextTicket', (data, callback) => {
            let next = objTicket.siguienteTicket();
            callback({
                next
            })
        });

        // estado actual del ticket
        client.emit('estadoActual', {
            actual: objTicket.ultimoTicket(),
            ultimos: objTicket.ultimo4Tickets()
        });

        // atender ticket
        client.on('atenderTicket', (data, callback) => {
            console.log(data);

            let atender = objTicket.atenderTicket(data);
            callback(atender);
            client.broadcast.emit('update4', {
                ultimos: objTicket.ultimo4Tickets()
            });

        });

    })
}