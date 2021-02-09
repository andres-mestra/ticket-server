const TicketList = require('./ticketList')

class Sockets {

    constructor( io ) {

        this.io = io;

        //Crear instancia de ticketlist
        this.ticketList = new TicketList()

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log('Cliente conectado')
            
            //Nuevo ticket
            socket.on('solicitar-ticket', (data, callback) => {
                const nuevoTicket =  this.ticketList.crearTicket()
                //Este callback le pasa el valor al cliente
                callback(nuevoTicket)
            })
            
        
        });
    }


}


module.exports = Sockets;