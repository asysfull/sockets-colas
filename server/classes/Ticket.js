const fs = require('fs');

class TicketModel {
    constructor(number, escritorio) {
        this.number = number;
        this.escritorio = escritorio;
    }
}

class Ticket {
    constructor() {
        this.ultimo = 0;
        this.hoy = new Date().getDate();
        this.tickets = [];
        this.ultimo4 = [];
        let data = require('../data/data.json');
        if (data.hoy === this.hoy) {
            this.ultimo = data.ultimo;
            this.tickets = data.tickets;
            this.ultimo4 = data.ultimo4;
        } else {
            this.reiniciarConteo();
        }
    }

    siguienteTicket() {
        this.ultimo += 1;
        let ticket = new TicketModel(this.ultimo, null);
        this.tickets.push(ticket);
        this.GrabarArchivo();
        return `Ticket ${this.ultimo}`;
    }

    ultimoTicket() {
        return `Ticket ${this.ultimo}`;
    }

    ultimo4Tickets() {
        return this.ultimo4;
    }

    atenderTicket(escritorio) {
        if (this.tickets.length === 0) {
            return 'No hay tickets';
        }
        let nticket = this.tickets[0].number;
        this.tickets.shift();

        let atender = new TicketModel(nticket, escritorio);
        this.ultimo4.unshift(atender);

        if (this.ultimo4.length > 4) {
            this.ultimo4.splice(-1, 1); //borra el ultimo
        }
        this.GrabarArchivo();
        return atender;
    }

    reiniciarConteo() {
        this.ultimo = 0;
        this.tickets = [];
        this.ultimo4 = [];
        this.GrabarArchivo();
    }

    GrabarArchivo() {
        let jsondata = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets,
            ultimo4: this.ultimo4,
        }
        let jsondataString = JSON.stringify(jsondata);
        fs.writeFileSync('./server/data/data.json', jsondataString);
        console.log('iniciando el sistema');
    }
}

module.exports = { Ticket };